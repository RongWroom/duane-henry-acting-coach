import React, { useState } from 'react';
import { ArrowUpRight, X, Shield, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | null>(null);

  const navLinks = [
    { label: 'The Craft', href: '#craft' },
    { label: 'Biography', href: '#biography' },
    { label: 'Selected Works', href: '#works' },
    { label: 'Private Coaching', href: '#coaching' },
    { label: 'Book a Session', href: '#inquiries' },
  ];

  const sessionFocusList = [
    { label: 'Scene Study & Monologues', href: '#coaching' },
    { label: 'Audition & Self-Tape Prep', href: '#coaching' },
    { label: 'Career & Industry Strategy', href: '#coaching' },
  ];

  return (
    <>
      <footer className="bg-[#060a0b] border-t border-white/10 text-white pt-16 sm:pt-20 pb-12 font-sans selection:bg-[#c5a059] selection:text-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
          {/* Top Tier: Headline + Socials & Contact Metadata Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-14 sm:pb-16">
            {/* Left Column (6 cols): Big Headline & Social Circles */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h2 className="text-[38px] sm:text-[52px] lg:text-[62px] font-sans font-medium text-white tracking-tight leading-[1.06] mb-6 sm:mb-8">
                  Book
                  <br />
                  today.
                </h2>

                {/* Social Links: Instagram & IMDb */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/duanehenrycoaching"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Duane Henry on Instagram (@duanehenrycoaching)"
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/20 bg-white/[0.04] text-zinc-300 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200 text-[12px] font-medium"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0 text-[#c5a059]" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>@duanehenrycoaching</span>
                  </a>

                  {/* IMDb */}
                  <a
                    href="https://www.imdb.com/name/nm1821157/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Duane Henry on IMDb"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-white/20 bg-white/[0.04] text-zinc-300 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200 text-[12px] font-bold tracking-tight"
                  >
                    <span>IMDb Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column (6 cols): 2x2 Contact Metadata Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-10 gap-x-8 pt-2">
              {/* LOCATIONS */}
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-2.5">
                  Locations
                </div>
                <div className="text-[13px] text-zinc-300 leading-relaxed font-normal">
                  Covent Garden, London WC2B
                  <br />
                  Beverly Hills, CA 90212
                </div>
              </div>

              {/* CALL US / REPRESENTATION */}
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-2.5">
                  Call Us
                </div>
                <div className="text-[13px] text-zinc-300 leading-relaxed font-normal space-y-0.5">
                  <div>
                    <a
                      href="tel:+442072920600"
                      className="hover:text-[#c5a059] transition-colors"
                    >
                      +44 (0)20 7292 0600
                    </a>{' '}
                    <span className="text-[11px] text-zinc-500">(UK)</span>
                  </div>
                  <div>
                    <a
                      href="tel:+13102746611"
                      className="hover:text-[#c5a059] transition-colors"
                    >
                      +1 (310) 274-6611
                    </a>{' '}
                    <span className="text-[11px] text-zinc-500">(US)</span>
                  </div>
                </div>
              </div>

              {/* CONTACT US */}
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-2.5">
                  Contact Us
                </div>
                <div className="text-[13px] text-zinc-300 leading-relaxed font-normal">
                  <a
                    href="mailto:coaching@duanehenry.com"
                    className="hover:text-[#c5a059] transition-colors underline-offset-4 hover:underline"
                  >
                    coaching@duanehenry.com
                  </a>
                </div>
              </div>

              {/* OPEN TIME */}
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-2.5">
                  Open Time
                </div>
                <div className="text-[13px] text-zinc-300 leading-relaxed font-normal">
                  09.00am – 18.00pm
                  <br />
                  <span className="text-zinc-500 text-[12px]">Virtual & Studio by Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Thin Divider */}
          <div className="border-t border-white/10" />

          {/* Middle Tier: 3 Columns (Rebalanced without Subscribe) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 py-12 sm:py-14 items-start">
            {/* Column 1: Navigation */}
            <div className="sm:col-span-1 md:col-span-4 lg:col-span-4 space-y-3">
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-3.5">
                Navigation
              </div>
              <ul className="space-y-2.5">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[13px] text-zinc-400 hover:text-white transition-colors duration-150 inline-block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Resources / Coaching Focus */}
            <div className="sm:col-span-1 md:col-span-4 lg:col-span-4 space-y-3">
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-3.5">
                Resources
              </div>
              <ul className="space-y-2.5">
                {sessionFocusList.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[13px] text-zinc-400 hover:text-white transition-colors duration-150 inline-block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Your First Session */}
            <div className="sm:col-span-2 md:col-span-4 lg:col-span-4 space-y-3 max-w-sm">
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-3.5">
                Your First Session
              </div>
              <p className="text-[13px] text-zinc-400 leading-relaxed font-normal">
                Book a focused 1-1 session with Duane Henry. Detailed script analysis, audition sides breakdown, and camera presence.
              </p>
              <div className="pt-2">
                <a
                  href="#inquiries"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-zinc-300 hover:text-[#c5a059] transition-colors"
                >
                  <span>Request Booking</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Thin Divider */}
          <div className="border-t border-white/10" />

          {/* Bottom Tier: Legal & Copyright Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[12px] text-zinc-500 gap-4">
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>

            <div className="text-center">
              &copy; Copyright 2026. All rights reserved
            </div>

            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </footer>

      {/* Modal for Terms of Service */}
      {activeModal === 'terms' && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#0c1517] border border-white/15 rounded-2xl p-6 sm:p-8 text-white shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2.5 text-[#c5a059] mb-3">
              <FileText className="w-5 h-5" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">
                Legal & Representation
              </span>
            </div>
            <h3 className="font-sans font-bold text-[22px] text-white mb-4">
              Terms of Coaching Service
            </h3>
            <div className="text-[13px] text-zinc-300 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                <strong>1. Coaching Relationship:</strong> Sessions provided by Duane Henry Coaching are educational and artistic consultations for professional and emerging actors.
              </p>
              <p>
                <strong>2. Confidentiality & Non-Disclosure:</strong> All audition scripts, production sides, and creative materials submitted are held in absolute confidentiality. Duane Henry and staff adhere to industry-standard non-disclosure protocols.
              </p>
              <p>
                <strong>3. Cancellations & Rescheduling:</strong> Due to demanding production schedules, cancellations or rescheduling requests must be submitted at least 24 hours prior to the scheduled session.
              </p>
              <p>
                <strong>4. Representation:</strong> Theatrical bookings, auditions, and agent engagements remain governed by CAM (UK) and The Gersh Agency (US).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-full bg-white text-black font-semibold text-[12px] tracking-wider uppercase hover:bg-[#c5a059] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Privacy Policy */}
      {activeModal === 'privacy' && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#0c1517] border border-white/15 rounded-2xl p-6 sm:p-8 text-white shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2.5 text-[#c5a059] mb-3">
              <Shield className="w-5 h-5" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">
                Privacy Protection
              </span>
            </div>
            <h3 className="font-sans font-bold text-[22px] text-white mb-4">
              Privacy & Data Policy
            </h3>
            <div className="text-[13px] text-zinc-300 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                <strong>Personal Information:</strong> We only collect information voluntarily submitted through our session booking or newsletter forms (such as your name, email address, IMDb/Spotlight profile, and audition sides).
              </p>
              <p>
                <strong>Use of Data:</strong> Your data is used exclusively to schedule coaching sessions, coordinate virtual meetings, and send periodic updates if you have opted in. We never sell or distribute your personal data.
              </p>
              <p>
                <strong>Material Security:</strong> Audition sides, self-tapes, and video files are handled with enterprise encryption and securely deleted after session completion upon request.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-full bg-white text-black font-semibold text-[12px] tracking-wider uppercase hover:bg-[#c5a059] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
