import React from 'react';
import { SELECTED_WORKS_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

interface WorksSectionProps {
  onWatchReel?: () => void;
}

export const WorksSection: React.FC<WorksSectionProps> = () => {
  const { credits, sectionNumber, sectionTitle, subtitle } = SELECTED_WORKS_DATA;

  return (
    <section
      id="works"
      className="bg-[#070c0d] py-24 md:py-32 border-t border-white/10 text-white relative overflow-hidden selection:bg-[#c5a059] selection:text-black"
    >
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/4 -right-20 w-[450px] h-[450px] bg-[#0e2c2b]/20 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 relative z-10">
        {/* Section Header Bar */}
        <ScrollReveal>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-16 text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="text-[#c5a059] font-mono">{sectionNumber}</span>
              <span className="w-8 h-[1px] bg-white/15" />
              <span className="text-white">{sectionTitle}</span>
            </div>
            <span className="text-zinc-500">{subtitle}</span>
          </div>
        </ScrollReveal>

        {/* Featured Reel Frame with Vimeo Embed */}
        <ScrollReveal delay={0.1}>
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl bg-black overflow-hidden border border-white/15 shadow-2xl shadow-black/80 mb-14">
            <iframe
              src="https://player.vimeo.com/video/1206826083?h=560a2894c0&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 w-full h-full border-0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Duane Henry - Demo Reel 2026"
            />
          </div>
        </ScrollReveal>

        {/* Asymmetric 1 Up 1 Down Horizontal Scrolling Banner */}
        <ScrollReveal delay={0.2}>
          <div className="relative mt-12 -mx-6 sm:-mx-10 md:-mx-14">
            {/* Top Bar for Banner */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
                <span>Filmography &amp; Stage Performance</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Hover to pause</span>
              </div>
            </div>

            {/* Left & Right Gradient Fade Masks */}
            <div
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-[#070c0d] via-[#070c0d]/90 to-transparent z-20"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-[#070c0d] via-[#070c0d]/90 to-transparent z-20"
              aria-hidden="true"
            />

            {/* Scrolling Track Container */}
            <div className="overflow-hidden pt-4 pb-12">
              <div className="animate-marquee flex gap-6 items-center">
                {/* 16 Items (duplicate array for infinite seamless marquee loop) */}
                {[...credits, ...credits].map((credit, idx) => {
                  const isOffset = idx % 2 === 1;
                  return (
                    <div
                      key={`${credit.id}-${idx}`}
                      className={`w-[300px] sm:w-[350px] md:w-[370px] h-[220px] sm:h-[235px] shrink-0 p-6 sm:p-7 rounded-2xl bg-[#090f11] border border-white/15 hover:border-[#c5a059]/60 hover:bg-[#0c1517] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-[#c5a059]/10 cursor-default ${
                        isOffset
                          ? 'translate-y-6 sm:translate-y-8'
                          : 'translate-y-0 sm:-translate-y-2'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#c5a059]">
                            {credit.category}
                          </span>
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/10">
                            {credit.accoladeOrEpisodes}
                          </span>
                        </div>

                        <h4 className="font-sans font-bold text-[19px] sm:text-[21px] text-white group-hover:text-[#c5a059] transition-colors leading-snug mb-2 line-clamp-1">
                          {credit.title}
                        </h4>
                        <p className="text-[13px] leading-relaxed text-zinc-400 font-normal line-clamp-2">
                          {credit.details}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 text-[11px] font-medium tracking-[0.14em] uppercase text-zinc-500 group-hover:text-zinc-400 transition-colors flex items-center justify-between">
                        <span>{credit.networkOrStudio}</span>
                        <span className="text-[#c5a059]/40 group-hover:text-[#c5a059] text-[11px] transition-colors">
                          ✦
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
