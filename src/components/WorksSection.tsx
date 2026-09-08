import React from 'react';
import { Play } from 'lucide-react';
import { SELECTED_WORKS_DATA } from '../data/portfolioData';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface WorksSectionProps {
  onWatchReel: () => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({ onWatchReel }) => {
  const { featuredReel, credits, sectionNumber, sectionTitle, subtitle } = SELECTED_WORKS_DATA;

  return (
    <section id="works" className="bg-[#0b0b0e] py-20 md:py-28 border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-12 text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="text-[#c5a059] font-mono">{sectionNumber}</span>
              <span className="w-8 h-[1px] bg-white/15" />
              <span className="text-white">{sectionTitle}</span>
            </div>
            <span className="text-zinc-500">{subtitle}</span>
          </div>
        </ScrollReveal>

        {/* Featured Reel Card */}
        <ScrollReveal delay={0.1}>
          <div
            onClick={onWatchReel}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl bg-zinc-950 overflow-hidden group cursor-pointer border border-white/10 shadow-2xl mb-12 transition-all duration-300 hover:border-white/25"
          >
            <img
              src={featuredReel.stillUrl}
              alt="Duane Henry dramatic performance"
              className="w-full h-full object-cover object-center brightness-[0.7] transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

            {/* Top Bar on Reel Card */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-300">
              <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                {featuredReel.badge}
              </span>
              <span className="hidden sm:inline-block text-zinc-400">
                {featuredReel.location}
              </span>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#c5a059] transition-all duration-300">
                <Play className="w-6 sm:w-7 h-6 sm:h-7 fill-current ml-1" />
              </div>
            </div>

            {/* Bottom Bar & Description */}
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-2xl">
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c5a059] mb-1.5">
                  {featuredReel.subheading}
                </div>
                <h3 className="font-sans font-bold text-[22px] sm:text-[32px] md:text-[36px] text-white leading-tight">
                  {featuredReel.title}
                </h3>
                <p className="mt-1.5 text-[13px] sm:text-[15px] leading-relaxed text-zinc-300 font-normal line-clamp-2 sm:line-clamp-none">
                  {featuredReel.description}
                </p>
              </div>

              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black text-[11px] font-bold tracking-[0.14em] uppercase transition-colors border border-white/20"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Play Reel</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Column Credit Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credits.map((credit) => (
            <StaggerItem key={credit.id}>
              <div className="p-6 rounded-xl bg-[#131317] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#c5a059]">
                      {credit.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                      {credit.accoladeOrEpisodes}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-[20px] sm:text-[22px] text-white group-hover:text-[#c5a059] transition-colors leading-snug mb-2">
                    {credit.title}
                  </h4>
                  <p className="text-[13px] leading-relaxed text-zinc-400 font-normal">
                    {credit.details}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/10 text-[11px] font-medium tracking-[0.14em] uppercase text-zinc-500">
                  {credit.networkOrStudio}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
