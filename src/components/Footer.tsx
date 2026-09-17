import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LegalModal } from './LegalModal';
import { LEGAL_DOCUMENTS } from '../data/legalContent';

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
      <footer className="bg-[#060a0b] border-t border-white/10 text-white pt-16 sm:pt-20 pb-12 font-sans selection:bg-accent-gold selection:text-black">
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
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/20 bg-white/4 text-zinc-300 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200 text-[12px] font-medium"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0 text-accent-gold" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>@duanehenrycoaching</span>
                  </a>

                  {/* IMDb */}
                  <a
                    href="https://www.imdb.com/name/nm1821157/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Duane Henry IMDb Profile"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-white/20 bg-white/4 text-zinc-300 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200 text-[12px] font-bold tracking-tight"
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
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400 mb-2.5">
                  Locations
                </div>
                <div className="text-[13px] text-zinc-300 leading-relaxed font-normal">
                  Covent Garden, London WC2B
                  <br />
                  Beverly Hills, CA 90212
                </div>
              </div>

              {/* CONTACT ME */}
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400 mb-2.5">
                  Contact Me
                </div>
                <div className="text-[13px] text-zinc-300 leading-relaxed font-normal">
                  <a
                    href="mailto:coaching@duanehenry.com"
                    className="hover:text-accent-gold transition-colors underline-offset-4 hover:underline"
                  >
                    coaching@duanehenry.com
                  </a>
                </div>
              </div>

              {/* OPEN TIME */}
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400 mb-2.5">
                  Open Time
                </div>
                <div className="text-[13px] text-zinc-300 leading-relaxed font-normal">
                  09.00am – 18.00pm
                  <br />
                  <span className="text-zinc-400 text-[12px]">Virtual & Studio by Appointment</span>
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
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400 mb-3.5">
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
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400 mb-3.5">
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
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400 mb-3.5">
                Your First Session
              </div>
              <p className="text-[13px] text-zinc-400 leading-relaxed font-normal">
                Book a focused 1-1 session with Duane Henry. Detailed script analysis, audition sides breakdown, and camera presence.
              </p>
              <div className="pt-2">
                <a
                  href="#inquiries"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-zinc-300 hover:text-accent-gold transition-colors"
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
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[12px] text-zinc-400 gap-4">
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

      {/* Legal document modal (Terms of Service / Privacy Policy) */}
      {activeModal && (
        <LegalModal
          doc={LEGAL_DOCUMENTS[activeModal]}
          onClose={() => setActiveModal(null)}
        />
      )}
    </>
  );
};
