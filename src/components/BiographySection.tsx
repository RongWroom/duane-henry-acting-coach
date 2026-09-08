import React from 'react';
import { BIOGRAPHY_DATA } from '../data/portfolioData';
import { ShieldCheck } from 'lucide-react';

export const BiographySection: React.FC = () => {
  return (
    <section id="biography" className="bg-surface-container-low py-20 md:py-28 border-t border-sand">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-sand pb-4 mb-14 text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-taupe">
          <div className="flex items-center gap-3">
            <span className="text-deep-espresso font-mono">{BIOGRAPHY_DATA.sectionNumber}</span>
            <span className="w-8 h-[1px] bg-sand" />
            <span className="text-deep-espresso">{BIOGRAPHY_DATA.sectionTitle}</span>
          </div>
          <span className="text-muted-taupe">{BIOGRAPHY_DATA.subtitle}</span>
        </div>

        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left: Col 1-5 (Deep Dusty-Olive Block + 3-Column Metric Grid) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Dusty Olive Block */}
            <div className="bg-dusty-olive text-bone-white p-8 sm:p-10 flex flex-col justify-between shadow-md relative overflow-hidden">
              {/* Giant quote glyph decorative watermark */}
              <div
                className="font-serif text-[72px] sm:text-[84px] leading-none text-sand/30 select-none mb-2"
                aria-hidden="true"
              >
                “
              </div>

              {/* Pull Quote */}
              <blockquote className="font-serif italic text-[22px] sm:text-[25px] leading-[1.45] text-bone-white mb-8 font-light">
                &ldquo;{BIOGRAPHY_DATA.quote}&rdquo;
              </blockquote>

              {/* Quote Attribution */}
              <div className="pt-6 border-t border-bone-white/20 flex items-center justify-between text-[11px] tracking-[0.16em] uppercase">
                <span className="font-semibold text-bone-white">{BIOGRAPHY_DATA.author}</span>
                <span className="text-sand/80 text-[10px] font-light">
                  {BIOGRAPHY_DATA.philosophyLabel}
                </span>
              </div>
            </div>

            {/* 3-Column Metric Grid */}
            <div className="bg-surface-container border border-sand grid grid-cols-3 divide-x divide-sand p-4 sm:p-6 text-center">
              {BIOGRAPHY_DATA.metrics.map((metric) => (
                <div key={metric.label} className="px-2 sm:px-3">
                  <div className="font-serif text-[26px] sm:text-[34px] font-normal text-deep-espresso leading-none">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-taupe">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Col 6-12 (Narrative Prose & Verified Signature) */}
          <div className="lg:col-span-7 flex flex-col justify-between lg:pl-6">
            <div>
              {/* Category */}
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-taupe mb-4">
                {BIOGRAPHY_DATA.category}
              </div>

              {/* Headline */}
              <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.15] tracking-[-0.01em] text-deep-espresso mb-8">
                {BIOGRAPHY_DATA.heading}
              </h2>

              {/* Editorial Prose */}
              <div className="space-y-6 text-[16px] leading-[1.8] font-light text-deep-espresso/85">
                <p>
                  Born and raised in Birmingham, England, Duane Henry forged his craft in the
                  gritty, disciplined trenches of British theatre and television, including the BBC&apos;s{' '}
                  <span className="font-serif italic font-normal">Doctors</span> (earning a
                  prestigious BAFTA nomination for Best Newcomer) and gritty UK independent
                  features.
                </p>
                <p>
                  His transition to American cinema caught worldwide attention when he was cast as MI6
                  Officer <strong className="font-medium text-deep-espresso">Clayton Reeves</strong> on
                  the globally celebrated juggernaut{' '}
                  <span className="font-serif italic font-normal">NCIS</span> across multiple
                  critically acclaimed seasons. He subsequently joined the Marvel Cinematic Universe in
                  the blockbuster{' '}
                  <span className="font-serif italic font-normal">Captain Marvel</span>.
                </p>
                <p>
                  Today, Duane bridges the gap between high-level performance and elite instruction.
                  His private London and Los Angeles masterclasses provide working actors with
                  visceral, real-world tools—stripping away theatrical pretension to reveal
                  undeniable cinematic presence.
                </p>
              </div>
            </div>

            {/* Verified Signature Accent */}
            <div className="mt-10 pt-8 border-t border-sand flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-deep-espresso text-bone-white flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-sand" />
              </div>
              <div>
                <div className="font-serif italic text-[22px] tracking-wide text-deep-espresso leading-none">
                  Duane Henry
                </div>
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-taupe mt-1">
                  {BIOGRAPHY_DATA.credentials}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
