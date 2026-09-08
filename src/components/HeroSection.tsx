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
            <span>{HERO_DATA.volume}</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8C8275]" />
            <span className="hidden sm:inline">{HERO_DATA.department}</span>
          </div>
          <div className="hidden lg:block tracking-[0.25em] text-[#5A5D4F]">
            {HERO_DATA.specialties}
          </div>
          <div className="font-mono text-[10px] tracking-[0.15em] text-[#8C8275]">
            {HERO_DATA.coordinates}
          </div>
        </div>
      </div>

      {/* Centerpiece 12-Column Grid */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-14 my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          {/* Left Column: Image with architectural offset block (Spans 5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Architectural offset block behind portrait */}
            <div
              className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 w-full h-full bg-[#DDD5C7]/50 pointer-events-none transition-transform duration-700 ease-out"
              aria-hidden="true"
            />

            {/* Portrait Container with 3/4 aspect ratio */}
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden bg-[#1A1715] shadow-lg group">
              <img
                src={HERO_DATA.portraitUrl}
                alt="Duane Henry editorial portrait"
                className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-[4000ms] ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Dark subtle overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Figure Caption Tag */}
              <div className="absolute bottom-3 left-3 bg-[#fdf9f3]/90 backdrop-blur-sm px-2.5 py-1 text-[9px] sm:text-[10px] tracking-[0.16em] uppercase font-semibold text-[#1A1715] border border-[#DDD5C7]">
                {HERO_DATA.figureCaption}
              </div>
            </div>
          </div>

          {/* Right Column: Typography (Spans 7 cols, slightly overlapping image on desktop) */}
          <div className="lg:col-span-7 lg:-ml-10 z-10 pt-4 lg:pt-0">
            {/* Tagline */}
            <div className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8C8275] mb-4">
              {HERO_DATA.tagline}
            </div>

            {/* Massive Display Hero Headline */}
            <h1 className="font-serif text-[#1A1715] leading-[0.92] tracking-[-0.03em] select-none">
              <span className="block text-[58px] sm:text-[86px] xl:text-[116px] font-normal">
                {HERO_DATA.nameFirst}
              </span>
              <span className="block text-[64px] sm:text-[96px] xl:text-[128px] italic font-light sm:pl-6 text-[#1A1715]/95">
                {HERO_DATA.nameLast}
              </span>
            </h1>

            {/* Intro Body Text */}
            <p className="mt-8 sm:mt-10 text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.75] font-light text-[#1A1715]/85 max-w-xl">
              Veteran actor of stage and screen. Special Agent Clayton Reeves on CBS&apos;s{' '}
              <em className="font-serif italic font-medium">NCIS</em>, Marvel Studios&apos;{' '}
              <em className="font-serif italic font-medium">Captain Marvel</em>, and leading
              dramatic instructions. Cultivating unapologetic truth in the next echelon of screen
              talent.
            </p>

            {/* CTA Group */}
            <div className="mt-10 flex flex-wrap items-center gap-6 sm:gap-8">
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
