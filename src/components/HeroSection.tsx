import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreMasterclass: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreMasterclass }) => {
  return (
    <section
      id="craft"
      className="relative min-h-[92vh] pt-24 md:pt-28 pb-12 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-transparent via-[#DDD5C7]/15 to-[#fdf9f3]"
    >
      {/* Blurred atmospheric sand orb in top-right */}
      <div
        className="absolute top-[-80px] right-[-80px] w-[340px] md:w-[500px] h-[340px] md:h-[500px] rounded-full bg-[#DDD5C7]/30 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Meta Data Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-14 pt-4 pb-6">
        <div className="border-t border-b border-[#DDD5C7] py-2.5 flex flex-col md:flex-row items-center justify-between text-[11px] font-semibold tracking-[0.18em] uppercase text-[#8C8275] gap-2">
          <div className="flex items-center gap-3">
            <span className="text-[#1A1715]">{HERO_DATA.department}</span>
          </div>
          <div className="hidden lg:block tracking-[0.25em] text-[#5A5D4F]">
            {HERO_DATA.specialties}
          </div>
          <div className="tracking-[0.18em] text-[#8C8275]">
            {HERO_DATA.coordinates}
          </div>
        </div>
      </div>

      {/* Centerpiece 12-Column Grid */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-14 my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Image with architectural offset block (Spans 5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Architectural offset block behind portrait */}
            <div
              className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full bg-[#DDD5C7]/50 pointer-events-none transition-transform duration-700 ease-out"
              aria-hidden="true"
            />

            {/* Portrait Container with 3/4 aspect ratio */}
            <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 overflow-hidden bg-[#1A1715] shadow-lg group">
              <img
                src="/images/duanehenry.PNG"
                alt="Duane Henry portrait"
                className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-[4000ms] ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Dark subtle overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Typography (Spans 7 cols) */}
          <div className="lg:col-span-7 pt-4 lg:pt-0">
            {/* Tagline */}
            <div className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8C8275] mb-4">
              {HERO_DATA.tagline}
            </div>

            {/* Rebalanced Display Hero Headline */}
            <h1 className="font-serif text-[#1A1715] leading-[0.92] tracking-[-0.02em] select-none">
              <span className="block text-[46px] sm:text-[70px] lg:text-[82px] xl:text-[98px] font-normal">
                {HERO_DATA.nameFirst}
              </span>
              <span className="block text-[52px] sm:text-[78px] lg:text-[92px] xl:text-[110px] italic font-light text-[#1A1715]/95">
                {HERO_DATA.nameLast}
              </span>
            </h1>

            {/* Intro Body Text */}
            <p className="mt-6 sm:mt-8 text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.75] font-light text-[#1A1715]/85 max-w-xl">
              Veteran actor of stage and screen. Special Agent Clayton Reeves on CBS&apos;s{' '}
              <em className="font-serif italic font-medium">NCIS</em>, Marvel Studios&apos;{' '}
              <em className="font-serif italic font-medium">Captain Marvel</em>, and leading
              dramatic instructions. Cultivating unapologetic truth in the next echelon of screen
              talent.
            </p>

            {/* CTA Group */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-6 sm:gap-8">
              <button
                onClick={onExploreMasterclass}
                className="px-7 py-3.5 bg-[#1A1715] hover:bg-[#5A5D4F] text-[#FDFCF7] text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors duration-200"
              >
                Explore Masterclass
              </button>

              <a
                href="#works"
                className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#1A1715] hover:text-[#5A5D4F] group transition-colors"
              >
                <span>View Filmography</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metadata & Ticker Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-14 pt-6">
        <div className="border-t border-[#DDD5C7] pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] font-semibold tracking-[0.18em] uppercase text-[#8C8275] gap-3">
          <a
            href="#biography"
            className="flex items-center gap-2 hover:text-[#1A1715] transition-colors"
          >
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            <span>Scroll to Explore The Craft</span>
          </a>

          <div className="flex items-center gap-4 text-[10px] sm:text-[11px]">
            <span>Bafta Recognized</span>
            <span className="text-[#DDD5C7]">•</span>
            <span>CBS Television</span>
            <span className="text-[#DDD5C7]">•</span>
            <span>Marvel Studios</span>
          </div>
        </div>
      </div>
    </section>
  );
};
