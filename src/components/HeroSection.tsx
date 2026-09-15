import React from 'react';
import { ArrowDown, ArrowRight, Play } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="craft"
      className="relative min-h-[92vh] supports-[height:100svh]:min-h-[92svh] pt-28 md:pt-32 pb-16 flex flex-col justify-between overflow-hidden bg-page-bg text-white"
    >
      {/* Cinematic dark teal volumetric ambient glow */}
      <div
        className="absolute top-20 right-10 w-137.5 h-137.5 bg-[#0e2c2b]/35 rounded-full ambient-glow pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-14 my-auto py-8 lg:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start order-1">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-gold mb-4">
                Dramatic Acting & Private Coaching
              </div>
            </div>

            <div>
              <h1 className="font-sans font-bold tracking-tight text-white leading-none text-[44px] sm:text-[68px] lg:text-[78px] xl:text-[88px]">
                DUANE HENRY
                <span className="block font-serif font-normal italic text-zinc-300 text-[32px] sm:text-[48px] lg:text-[54px] xl:text-[62px] mt-2">
                  The Craft of Screen Presence
                </span>
              </h1>
            </div>

            <div>
              <p className="mt-6 text-[16px] sm:text-[18px] leading-[1.75] text-zinc-400 font-normal max-w-xl">
                Veteran actor of stage and screen (CBS&apos;s{' '}
                <a
                  href="https://www.imdb.com/title/tt0364845/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 font-medium hover:text-accent-gold underline underline-offset-4 decoration-zinc-700 hover:decoration-accent-gold transition-colors"
                >
                  NCIS
                </a>
                , Marvel Studios&apos;{' '}
                <a
                  href="https://www.imdb.com/title/tt4154664/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 font-medium hover:text-accent-gold underline underline-offset-4 decoration-zinc-700 hover:decoration-accent-gold transition-colors"
                >
                  Captain Marvel
                </a>
                ). Offering focused, one-on-one coaching for actors preparing for auditions, cold reads, and high-stakes
                on-camera work.
              </p>
            </div>

            <div>
              {/* Clean CTA Group */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#inquiries"
                  className="px-7 py-3.5 rounded-full bg-white text-black hover:bg-accent-gold hover:text-black text-[12px] font-bold tracking-[0.14em] uppercase transition-all duration-200"
                >
                  Book a Session
                </a>

                <a
                  href="#works"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-white/20 hover:border-white/50 text-white hover:bg-white/5 text-[12px] font-semibold tracking-[0.14em] uppercase transition-all duration-200"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-accent-gold" />
                  <span>Watch Reel</span>
                </a>

                <a
                  href="#coaching"
                  className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] uppercase text-zinc-400 hover:text-white transition-colors px-3 py-3"
                >
                  <span>Explore Coaching</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Framed Headshot (5 cols) */}
          <div className="lg:col-span-5 order-2 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative aspect-3/4 w-full rounded-xl overflow-hidden bg-card-bg border border-white/10 shadow-2xl group">
                <img
                  src={HERO_DATA.portraitUrl}
                  alt="Duane Henry, actor and private acting coach"
                  width="937"
                  height="1238"
                  className="w-full h-full object-cover grayscale contrast-110 transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Subdued overlay label */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[11px] font-medium tracking-[0.14em] uppercase text-zinc-300">
                  <span className="font-semibold text-white">Duane Henry</span>
                  <span className="text-accent-gold">London / L.A.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-14 pt-4 border-t border-white/10 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-400 gap-3">
          <a
            href="#biography"
            className="flex items-center gap-2 hover:text-zinc-300 transition-colors"
          >
            <ArrowDown className="w-3.5 h-3.5" />
            <span>Biography & Background</span>
          </a>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-zinc-400">
            <a
              href="https://en.wikipedia.org/wiki/Screen_Nation_Film_and_Television_Awards"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Screen Nation Nominee
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href="https://www.imdb.com/title/tt0364845/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              CBS NCIS
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href="https://www.imdb.com/title/tt4154664/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Marvel Studios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
