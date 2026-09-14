import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Verified sending address on the duanehenry.com domain (configured in Resend).
const COACHING_EMAIL = 'coaching@duanehenry.com';
const COACH_NAME = 'Duane Henry';

interface InquiryPayload {
  fullName: string;
  email: string;
  link?: string;
  objective?: string;
  notes?: string;
}

/** Escape user-supplied text before interpolating into HTML to prevent injection. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&#38;')
    .replace(/</g, '&#60;')
    .replace(/>/g, '&#62;')
    .replace(/"/g, '&#34;')
    .replace(/'/g, '&#39;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only accept POST requests.
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, link, objective, notes } = (req.body ?? {}) as InquiryPayload;

  // Validate required fields.
  if (!fullName || !email) {
    return res.status(400).json({ error: 'Full name and email are required.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY environment variable is not set.');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  const resend = new Resend(apiKey);

  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safeLink = link ? escapeHtml(link) : '';
  const safeObjective = objective ? escapeHtml(objective) : '';
  const safeNotes = notes ? escapeHtml(notes) : '';

  const linkRow = safeLink
    ? `<tr><td style="padding:8px 0;color:#71717a;font-size:13px;">Link</td><td style="padding:8px 0;color:#18181b;font-size:13px;"><a href="${safeLink}" style="color:#c5a059;">${safeLink}</a></td></tr>`
    : '';
  const objectiveRow = safeObjective
    ? `<tr><td style="padding:8px 0;color:#71717a;font-size:13px;">Session Focus</td><td style="padding:8px 0;color:#18181b;font-size:13px;">${safeObjective}</td></tr>`
    : '';
  const notesRow = safeNotes
    ? `<tr><td style="padding:8px 0;color:#71717a;font-size:13px;vertical-align:top;">Details</td><td style="padding:8px 0;color:#18181b;font-size:13px;white-space:pre-wrap;">${safeNotes}</td></tr>`
    : '';

  try {
    // 1. Notify Duane of the new inquiry (replies go straight to the client).
    await resend.emails.send({
      from: `${COACH_NAME} Coaching <${COACHING_EMAIL}>`,
      to: COACHING_EMAIL,
      replyTo: email,
      subject: `New Coaching Inquiry — ${fullName}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#18181b;">
          <h2 style="font-size:20px;margin:0 0 4px;">New Coaching Inquiry</h2>
          <p style="margin:0 0 20px;color:#71717a;font-size:14px;">A new session request was submitted via the website.</p>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#71717a;font-size:13px;">Name</td><td style="padding:8px 0;color:#18181b;font-size:13px;">${safeName}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;font-size:13px;">Email</td><td style="padding:8px 0;color:#18181b;font-size:13px;"><a href="mailto:${safeEmail}" style="color:#c5a059;">${safeEmail}</a></td></tr>
            ${objectiveRow}
            ${linkRow}
            ${notesRow}
          </table>
          <p style="margin-top:24px;font-size:13px;color:#71717a;">Reply directly to this email to respond to ${safeName}.</p>
        </div>
      `,
    });

    // 2. Auto-reply to the client acknowledging their inquiry.
    await resend.emails.send({
      from: `${COACH_NAME} <${COACHING_EMAIL}>`,
      to: email,
      replyTo: COACHING_EMAIL,
      subject: 'Your Coaching Session — Next Steps',
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#18181b;">
          <p style="font-size:16px;">Hey ${safeName},</p>
          <p style="font-size:15px;line-height:1.6;color:#3f3f46;">Thanks for reaching out about coaching! I've received your details and I'm looking forward to working with you.</p>
          <p style="font-size:15px;line-height:1.6;color:#3f3f46;">I'll personally review your submission and get back to you within 24–48 hours to confirm availability, session details, and next steps.</p>
          <p style="font-size:15px;line-height:1.6;color:#3f3f46;">If you need anything urgent in the meantime, feel free to reply directly to this email.</p>
          <p style="font-size:15px;line-height:1.6;color:#3f3f46;margin-bottom:32px;">All the best,<br /><strong>${COACH_NAME}</strong></p>
          <p style="font-size:12px;color:#a1a1aa;border-top:1px solid #e4e4e7;padding-top:16px;">${COACH_NAME} — Actor & Dramatic Coach<br /><a href="mailto:${COACHING_EMAIL}" style="color:#c5a059;">${COACHING_EMAIL}</a></p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
