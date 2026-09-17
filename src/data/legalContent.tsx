import type { ReactNode } from 'react';
import { Shield, FileText } from 'lucide-react';

export interface LegalSection {
  heading: string;
  paragraphs?: ReactNode[];
  list?: ReactNode[];
}

export interface LegalDocument {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
}

const CONTACT_EMAIL = 'coaching@duanehenry.com';

const EmailLink = () => (
  <a
    href={`mailto:${CONTACT_EMAIL}`}
    className="text-accent-gold underline-offset-4 hover:underline"
  >
    {CONTACT_EMAIL}
  </a>
);

export const TERMS_OF_SERVICE: LegalDocument = {
  icon: <FileText className="w-5 h-5" />,
  eyebrow: 'Legal & Representation',
  title: 'Terms of Coaching Service',
  lastUpdated: 'Last updated: September 2026',
  intro: (
    <>
      These Terms of Service govern your use of duanehenry.com and the private coaching services
      provided by Duane Henry ("Duane Henry Coaching", "I", "me", or "my"). By accessing this
      website or booking a coaching session, you agree to be bound by these terms. If you do not
      agree, please do not use the website or services.
    </>
  ),
  sections: [
    {
      heading: '1. Coaching Services',
      paragraphs: [
        'Duane Henry Coaching provides one-to-one acting coaching, including scene study and monologue work, audition and self-tape preparation, on-camera technique, and career and industry strategy. Sessions are delivered in person in London and Los Angeles, or remotely worldwide by private video.',
        'All services are educational and artistic consultations. Coaching is not therapy, legal advice, or a guarantee of casting, representation, employment, or any particular career outcome.',
      ],
    },
    {
      heading: '2. Bookings & Confirmation',
      paragraphs: [
        'Session requests submitted through the inquiry form are subject to availability and personal confirmation. A booking is only confirmed once you have received written confirmation and completed payment.',
        'Urgent audition and self-tape requests (24–48 hour turnaround) are accommodated wherever scheduling permits, but cannot be guaranteed.',
      ],
    },
    {
      heading: '3. Payment',
      paragraphs: [
        'Session fees are confirmed at the time of booking and are payable in advance via the secure payment link sent with your booking confirmation. Payments are processed by PayPal; no card or payment details are collected or stored on this website.',
        'Sessions are not reserved without completed payment unless otherwise agreed in writing.',
      ],
    },
    {
      heading: '4. Cancellations & Rescheduling',
      paragraphs: [
        'Due to demanding production schedules, cancellations or rescheduling requests must be submitted at least 24 hours before the scheduled session. Late cancellations or missed sessions may be charged in full or forfeited.',
        'If a session must be cancelled on my side due to production commitments, you will be offered priority rescheduling or a full refund of the session fee.',
      ],
    },
    {
      heading: '5. Confidentiality & Submitted Material',
      paragraphs: [
        'All audition scripts, production sides, self-tapes, and creative materials you share are held in strict confidence under industry-standard non-disclosure protocols, and are used solely to prepare for and deliver your coaching.',
        'By submitting material, you confirm that you have the right to share it. Confidential materials are securely deleted after the coaching engagement ends, or sooner upon request.',
      ],
    },
    {
      heading: '6. Intellectual Property',
      paragraphs: [
        'All content on this website — including text, imagery, video, and branding — is owned by or licensed to Duane Henry and protected by intellectual property laws. You may view it for personal, non-commercial use only.',
        'Any notes, worksheets, recordings, or follow-up materials provided as part of your coaching are for your personal use only and may not be shared, copied, distributed, or reproduced without written permission.',
      ],
    },
    {
      heading: '7. Representation & Third Parties',
      paragraphs: [
        'Coaching does not create an agency or management relationship. Theatrical representation, bookings, and auditions remain governed by my clients\u2019 own representatives; my professional representation remains with CAM (UK) and The Gersh Agency (US).',
        'This website links to third-party services including Instagram, IMDb, PayPal, Resend, and video-call providers used for virtual sessions. These providers operate under their own terms and privacy policies, for which I am not responsible.',
      ],
    },
    {
      heading: '8. Acceptable Use',
      paragraphs: ['You agree to use this website only for lawful purposes. You must not:'],
      list: [
        'Upload or transmit malicious code, viruses, or harmful material.',
        'Attempt to gain unauthorised access to the website, its servers, or associated systems.',
        'Use the website to distribute defamatory, offensive, or unlawful material.',
        'Copy or redistribute website content without written permission.',
      ],
    },
    {
      heading: '9. Limitation of Liability',
      paragraphs: [
        'Every effort is made to ensure coaching services and website content are accurate and beneficial, but no specific outcome or result is guaranteed. To the fullest extent permitted by law, I am not liable for any loss arising from reliance on information provided on this website or during sessions, for technical issues or downtime, or for any indirect or consequential losses.',
        'You are responsible for ensuring that decisions or actions taken as a result of coaching are appropriate for your individual circumstances.',
      ],
    },
    {
      heading: '10. Changes to These Terms',
      paragraphs: [
        'These terms may be updated periodically. Changes take effect as soon as they are posted on this page, and continued use of the website or services constitutes acceptance of the revised terms.',
      ],
    },
    {
      heading: '11. Governing Law',
      paragraphs: [
        'These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England.',
      ],
    },
    {
      heading: '12. Contact',
      paragraphs: [<>For any questions about these terms, contact <EmailLink />.</>],
    },
  ],
};

export const PRIVACY_POLICY: LegalDocument = {
  icon: <Shield className="w-5 h-5" />,
  eyebrow: 'Privacy Protection',
  title: 'Privacy & Data Policy',
  lastUpdated: 'Last updated: September 2026',
  intro: (
    <>
      This Privacy Policy explains how Duane Henry Coaching collects, uses, and protects your
      personal information when you use duanehenry.com, submit an inquiry, or book a coaching
      session. By using this website or submitting your information, you agree to this policy.
    </>
  ),
  sections: [
    {
      heading: '1. Who I Am',
      paragraphs: [
        'Duane Henry Coaching is a private acting coaching service operated by Duane Henry, offering one-to-one sessions in London, Los Angeles, and online worldwide.',
      ],
    },
    {
      heading: '2. Information I Collect',
      paragraphs: ['I only collect information you voluntarily provide or that is generated by essential website functions. I do not request special category data such as health information or other sensitive personal details. Information collected includes:'],
      list: [
        'Inquiry form details — your name, email address, optional Spotlight/IMDb/showreel link, chosen session focus, and the details you share about your material or deadlines.',
        'Coaching materials — scripts, audition sides, self-tapes, showreels, and notes you choose to share for session preparation.',
        'Email correspondence — records of direct communication between us.',
        'Payment details — processed entirely by PayPal. I never see, access, or store your card or account details.',
        'Technical data — standard server logs processed by the hosting provider (Vercel), such as IP address and browser type, required to deliver the website.',
      ],
    },
    {
      heading: '3. How Your Data Is Used',
      paragraphs: ['Your information is used only for legitimate business purposes:'],
      list: [
        'Responding to your inquiries and reviewing your material.',
        'Scheduling, confirming, and delivering coaching sessions.',
        'Sending booking confirmations, payment links, and session follow-ups.',
        'Maintaining records required for accounting and legal obligations.',
      ],
    },
    {
      heading: '4. Third-Party Processors',
      paragraphs: [
        'Your data is shared only with the trusted providers needed to operate this service:',
      ],
      list: [
        'Vercel — website hosting and the inquiry form endpoint.',
        'Resend — delivery of booking notifications and confirmation emails.',
        'PayPal — secure payment processing.',
        'Video-call providers — for delivering virtual sessions.',
      ],
    },
    {
      heading: '5. Confidential Materials',
      paragraphs: [
        'Audition sides, scripts, self-tapes, and other creative materials are handled with strict confidentiality and used solely for your coaching. They are never shared with third parties and are securely deleted after the engagement ends, or earlier upon request.',
      ],
    },
    {
      heading: '6. Cookies & Analytics',
      paragraphs: [
        'This website does not set advertising or tracking cookies. Only technically necessary processing by the hosting provider is used to deliver the site reliably.',
      ],
    },
    {
      heading: '7. Data Retention',
      paragraphs: [
        'Personal data is kept only as long as necessary: inquiry and correspondence records are retained while managing your booking and any follow-up, payment records are kept as required for accounting purposes, and confidential materials are deleted on request or once the coaching engagement concludes.',
      ],
    },
    {
      heading: '8. Your Rights',
      paragraphs: [
        'Under the UK GDPR and Data Protection Act 2018, you have the right to access a copy of your data, request corrections, request deletion, withdraw consent for non-essential processing, and complain to the Information Commissioner\u2019s Office (ICO).',
        'California residents have equivalent rights under the CCPA, including the right to know what personal information is held and to request its deletion. Your data is never sold.',
        <>To exercise any of these rights, email <EmailLink />.</>,
      ],
    },
    {
      heading: '9. Data Security',
      paragraphs: [
        'Appropriate technical and organisational measures are taken to protect your data against loss, misuse, and unauthorised access. However, no method of online transmission or storage can be guaranteed to be completely secure.',
      ],
    },
    {
      heading: '10. Changes to This Policy',
      paragraphs: [
        'This policy may be updated to reflect changes in the service or legal requirements. The most recent version will always be available on this page.',
      ],
    },
    {
      heading: '11. Contact',
      paragraphs: [
        <>For any questions about this policy or how your data is handled, contact <EmailLink />.</>,
      ],
    },
  ],
};

export const LEGAL_DOCUMENTS = {
  terms: TERMS_OF_SERVICE,
  privacy: PRIVACY_POLICY,
} as const;
