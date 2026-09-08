import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { COACHING_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

interface CoachingSectionProps {
  onSelectModule: (moduleTitle: string) => void;
}

export const CoachingSection: React.FC<CoachingSectionProps> = ({ onSelectModule }) => {
  const { sectionNumber, sectionTitle, subtitle, category, headline, description, sessionLocations, modules } =
    COACHING_DATA;

  const [openModuleId, setOpenModuleId] = useState<string | null>('scene-study');

  const toggleAccordion = (id: string) => {
    setOpenModuleId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section id="coaching" className="bg-[#0c1517] py-20 md:py-28 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-14 text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="text-[#c5a059] font-mono">{sectionNumber}</span>
              <span className="w-8 h-[1px] bg-white/15" />
              <span className="text-white">{sectionTitle}</span>
            </div>
            <span className="text-zinc-500">{subtitle}</span>
          </div>
        </ScrollReveal>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column (5 cols): Overview & Format */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c5a059] mb-3">
                {category}
              </div>
              <h2 className="font-sans font-bold text-[32px] sm:text-[42px] leading-[1.12] tracking-tight text-white mb-6">
                {headline}
              </h2>
              <p className="text-[16px] leading-[1.75] font-normal text-zinc-300">
                {description}
              </p>
            </ScrollReveal>

            {/* Session Format Info */}
            <ScrollReveal delay={0.2}>
              <div className="bg-[#0f1a1c] border border-white/10 rounded-2xl p-6 text-zinc-300">
                <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#c5a059] mb-2">
                  {sessionLocations.label}
                </div>
                <p className="text-[14px] leading-relaxed text-zinc-400 font-normal">
                  {sessionLocations.text}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (7 cols): Clean Session Accordion */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <ScrollReveal delay={0.15}>
              <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-2">
                Available Coaching Sessions
              </div>
            </ScrollReveal>

            {modules.map((item, idx) => {
              const isOpen = openModuleId === item.id;
              return (
                <ScrollReveal key={item.id} delay={0.1 + idx * 0.08}>
                  <div
                    className={`rounded-2xl transition-all duration-300 overflow-hidden border ${isOpen
                        ? 'bg-[#0f1a1c] border-white/25 shadow-xl'
                        : 'bg-[#0f1a1c]/60 hover:bg-[#0f1a1c] border-white/10'
                      }`}
                  >
                    {/* Row Header */}
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full p-6 flex items-center justify-between text-left group gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <span className="font-mono text-[13px] font-semibold text-zinc-500 flex-shrink-0">
                          {item.number}
                        </span>
                        <h3 className="font-sans font-semibold text-[18px] sm:text-[20px] text-white group-hover:text-[#c5a059] transition-colors leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
                        <span className="text-[11px] font-semibold tracking-wider text-zinc-400">
                          {item.price}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''
                            }`}
                        />
                      </div>
                    </button>

                    {/* Expanded Content */}
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 border-t border-white/10 animate-in fade-in-50 duration-200">
                        <p className="text-[15px] leading-[1.75] font-normal text-zinc-300 max-w-2xl mt-2">
                          {item.description}
                        </p>

                        {/* Focus Areas */}
                        {item.focusAreas && (
                          <div className="mt-4 flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mr-1">
                              Areas Covered:
                            </span>
                            {item.focusAreas.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 text-[11px] font-medium border border-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end">
                          <button
                            type="button"
                            onClick={() => onSelectModule(item.title)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-[#c5a059] hover:text-black text-[11px] font-bold tracking-[0.12em] uppercase transition-colors cursor-pointer"
                          >
                            <span>Book This Session</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
