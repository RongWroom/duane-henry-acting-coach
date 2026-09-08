import React from 'react';
import { Play } from 'lucide-react';
import { SELECTED_WORKS_DATA } from '../data/portfolioData';

interface WorksSectionProps {
  onWatchReel: () => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({ onWatchReel }) => {
  const { featuredReel, credits, sectionNumber, sectionTitle, subtitle } = SELECTED_WORKS_DATA;

  return (
    <section id="works" className="bg-[#fdf9f3] py-20 md:py-28 border-t border-[#DDD5C7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#DDD5C7] pb-4 mb-14 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8C8275]">
          <div className="flex items-center gap-3">
            <span className="text-[#1A1715] font-mono">{sectionNumber}</span>
            <span className="w-8 h-[1px] bg-[#DDD5C7]" />
            <span className="text-[#1A1715]">{sectionTitle}</span>
          </div>
          <span className="text-[#8C8275]">{subtitle}</span>
        </div>

        {/* Featured Reel Hero Card (21:9 aspect ratio) */}
        <div
          onClick={onWatchReel}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#1A1715] overflow-hidden group cursor-pointer shadow-lg mb-12"
        >
          {/* Background Image with smooth scale on container hover */}
          <img
            src={featuredReel.stillUrl}
            alt="Duane Henry dramatic theatrical performance still"
            className="w-full h-full object-cover object-center brightness-75 transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          {/* Cinematic Dark Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

          {/* Top Bar on Reel Card */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#FDFCF7]">
            {/* Pulsing red recording dot */}
            <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>{featuredReel.badge}</span>
            </div>

            <div className="hidden sm:block text-[#DDD5C7] tracking-[0.2em]">
              {featuredReel.location}
            </div>
          </div>

          {/* Bottom Bar & Description */}
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#DDD5C7] mb-1.5">
                {featuredReel.subheading}
              </div>
              <h3 className="font-serif text-[24px] sm:text-[34px] md:text-[40px] text-[#FDFCF7] leading-tight font-normal">
                {featuredReel.title}
              </h3>
              <p className="mt-2 text-[13px] sm:text-[15px] leading-relaxed text-[#DDD5C7]/90 font-light line-clamp-2 sm:line-clamp-none">
                {featuredReel.description}
              </p>
            </div>

            {/* Watch Reel Button */}
            <div className="flex-shrink-0">
              <button
                type="button"
                className="flex items-center gap-2.5 px-5 py-3 bg-[#FDFCF7] text-[#1A1715] hover:bg-[#DDD5C7] text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors shadow-md group-hover:scale-105 duration-200"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Reel</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4-Column Editorial Credit Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credits.map((credit) => (
            <div
              key={credit.id}
              className={`p-6 sm:p-7 flex flex-col justify-between transition-colors duration-300 bg-[#f7f3ed] hover:bg-[#f1ede7] ${
                credit.accentBorder === 'dark'
                  ? 'border-t-2 border-t-[#1A1715]'
                  : 'border-t-2 border-t-[#DDD5C7]'
              } border-x border-b border-[#DDD5C7]`}
            >
              <div>
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8C8275] mb-3">
                  {credit.category}
                </div>
                <h4 className="font-serif text-[26px] sm:text-[28px] text-[#1A1715] leading-tight mb-3">
                  {credit.title}
                </h4>
                <p className="text-[14px] leading-relaxed text-[#1A1715]/80 font-light">
                  {credit.details}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#DDD5C7] flex items-center justify-between text-[10px] font-semibold tracking-[0.15em] uppercase text-[#8C8275]">
                <span>{credit.networkOrStudio}</span>
                <span className="text-[#1A1715]">{credit.accoladeOrEpisodes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
