import React from 'react';
import { ArrowDown, ArrowRight, Play } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

interface HeroSectionProps {
  onExploreCoaching: () => void;
  onWatchReel?: () => void;
  onBookSession?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCoaching,
  onWatchReel,
  onBookSession,
}) => {
  return (
    <section
      id="craft"
      className="relative min-h-[92vh] pt-28 md:pt-32 pb-16 flex flex-col justify-between overflow-hidden bg-[#070c0d] text-white"
    >
      {/* Cinematic dark teal volumetric ambient glow */}
      <div
        className="absolute top-20 right-10 w-[550px] h-[550px] bg-[#0e2c2b]/35 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-14 my-auto py-8 lg:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
            <ScrollReveal delay={0.05}>
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c5a059] mb-4">
                Dramatic Acting & Private Coaching
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h1 className="font-sans font-bold tracking-tight text-white leading-[1.0] text-[44px] sm:text-[68px] lg:text-[78px] xl:text-[88px]">
                DUANE HENRY
                <span className="block font-serif font-normal italic text-zinc-300 text-[32px] sm:text-[48px] lg:text-[54px] xl:text-[62px] mt-2">
                  The Craft of Screen Presence
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-6 text-[16px] sm:text-[18px] leading-[1.75] text-zinc-400 font-normal max-w-xl">
                Veteran actor of stage and screen (CBS&apos;s{' '}
                <span className="text-zinc-200 font-medium">NCIS</span>, Marvel Studios&apos;{' '}
                <span className="text-zinc-200 font-medium">Captain Marvel</span>). Offering focused,
                one-on-one coaching for actors preparing for auditions, cold reads, and high-stakes
                on-camera work.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              {/* Clean CTA Group */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {onBookSession && (
                  <button
                    onClick={onBookSession}
                    className="px-7 py-3.5 rounded-full bg-white text-black hover:bg-[#c5a059] hover:text-black text-[12px] font-bold tracking-[0.14em] uppercase transition-all duration-200"
                  >
                    Book a Session
                  </button>
                )}

                {onWatchReel && (
                  <button
                    onClick={onWatchReel}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-white/20 hover:border-white/50 text-white hover:bg-white/5 text-[12px] font-semibold tracking-[0.14em] uppercase transition-all duration-200"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-[#c5a059]" />
                    <span>Watch Reel</span>
                  </button>
                )}

                <button
                  onClick={onExploreCoaching}
                  className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] uppercase text-zinc-400 hover:text-white transition-colors px-3 py-3"
                >
                  <span>Explore Coaching</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Architectural Framed Headshot (5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <ScrollReveal delay={0.2} className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#0f1a1c] border border-white/10 shadow-2xl group">
                <img
                  src={HERO_DATA.portraitUrl}
                  alt="Duane Henry dramatic portrait"
                  className="w-full h-full object-cover grayscale contrast-110 transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Subdued overlay label */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[11px] font-medium tracking-[0.14em] uppercase text-zinc-300">
                  <span className="font-semibold text-white">Duane Henry</span>
                  <span className="text-[#c5a059]">London / L.A.</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-14 pt-4 border-t border-white/10 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-500 gap-3">
          <a
            href="#biography"
            className="flex items-center gap-2 hover:text-zinc-300 transition-colors"
          >
            <ArrowDown className="w-3.5 h-3.5" />
            <span>Biography & Background</span>
          </a>

          <div className="flex items-center gap-4 sm:gap-6 text-zinc-400">
            <span>BAFTA Nominee</span>
            <span className="text-zinc-700">•</span>
            <span>CBS NCIS</span>
            <span className="text-zinc-700">•</span>
            <span>Marvel Studios</span>
          </div>
        </div>
      </div>
    </section>
  );
};
