import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Verified sending address on the duanehenry.com domain (configured in Resend).
const COACHING_EMAIL = 'coaching@duanehenry.com';
const COACH_NAME = 'Duane Henry';
const FROM_EMAIL = `${COACH_NAME} <${COACHING_EMAIL}>`;

// Resend dashboard template IDs (set these in Vercel env vars).
// Client template: branded confirmation + PayPal payment button.
// Admin template: booking notification with the client's intake details.
const CLIENT_TEMPLATE_ID = process.env.RESEND_CLIENT_TEMPLATE_ID;
const ADMIN_TEMPLATE_ID = process.env.RESEND_ADMIN_TEMPLATE_ID;

interface InquiryPayload {
  fullName: string;
  email: string;
  link?: string;
  objective?: string;
  notes?: string;
  turnstileToken?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only accept POST requests.
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, link, objective, notes, turnstileToken } = (req.body ?? {}) as InquiryPayload;

  // Validate required fields.
  if (!fullName || !email) {
    return res.status(400).json({ error: 'Full name and email are required.' });
  }

  // Verify the Cloudflare Turnstile token before sending any email.
  if (!turnstileToken) {
    return res.status(400).json({ error: 'Verification is required.' });
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (!turnstileSecret) {
    console.error('TURNSTILE_SECRET_KEY environment variable is not set.');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  try {
    const forwardedFor = req.headers['x-forwarded-for'];
    const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: turnstileSecret,
        response: turnstileToken,
        remoteip: typeof forwardedFor === 'string' ? forwardedFor.split(',')[0].trim() : undefined,
      }),
    });
    const outcome = (await verification.json()) as { success?: boolean };
    if (!outcome.success) {
      return res.status(403).json({ error: 'Verification failed. Please try again.' });
    }
  } catch (error) {
    console.error('Turnstile verification request failed:', error);
    return res.status(500).json({ error: 'Verification failed. Please try again.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY environment variable is not set.');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  if (!CLIENT_TEMPLATE_ID || !ADMIN_TEMPLATE_ID) {
    console.error('RESEND_CLIENT_TEMPLATE_ID and RESEND_ADMIN_TEMPLATE_ID must be set.');
    return res.status(500).json({ error: 'Email templates are not configured.' });
  }

  const resend = new Resend(apiKey);

  // Shared data payload — matches the {{...}} variables in the Resend templates.
  // Empty strings (not undefined) so Resend renders blanks instead of errors for optional fields.
  const templateVariables: Record<string, string | number> = {
    clientName: fullName,
    clientEmail: email,
    clientLink: link || '',
    clientObjective: objective || '',
    clientNotes: notes || '',
  };

  try {
    // 1. Notify Duane of the new booking (replies go straight to the client).
    await resend.emails.send({
      from: FROM_EMAIL,
      to: COACHING_EMAIL,
      replyTo: email,
      subject: `New Coaching Booking Request — ${fullName}`,
      template: { id: ADMIN_TEMPLATE_ID, variables: templateVariables },
    });

    // 2. Send the client the booking confirmation + payment link.
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      replyTo: COACHING_EMAIL,
      subject: 'Your Coaching Session — Next Steps & Booking',
      template: { id: CLIENT_TEMPLATE_ID, variables: templateVariables },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
