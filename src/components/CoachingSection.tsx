import React, { useState } from 'react';
import { ChevronDown, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { COACHING_DATA } from '../data/portfolioData';

interface CoachingSectionProps {
  onSelectModule: (moduleTitle: string) => void;
}

export const CoachingSection: React.FC<CoachingSectionProps> = ({ onSelectModule }) => {
  const { sectionNumber, sectionTitle, subtitle, category, headline, description, studioLocations, modules } =
    COACHING_DATA;

  // Active module ID for mutually exclusive accordion
  const [openModuleId, setOpenModuleId] = useState<string | null>('scene-study');

  const toggleAccordion = (id: string) => {
    setOpenModuleId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section id="coaching" className="bg-[#F4F0EA] py-20 md:py-28 border-t border-[#DDD5C7]">
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

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column (5 cols): Philosophy & Studio Locations */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8C8275] mb-4">
                {category}
              </div>
              <h2 className="font-serif text-[34px] sm:text-[46px] leading-[1.12] text-[#1A1715] mb-6">
                {headline}
              </h2>
              <p className="text-[16px] leading-[1.8] font-light text-[#1A1715]/85">
                {description}
              </p>
            </div>

            {/* Studio Locations Card */}
            <div className="bg-[#f7f3ed] border border-[#DDD5C7] p-6 sm:p-7">
              <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8C8275] mb-3">
                <MapPin className="w-3.5 h-3.5 text-[#5A5D4F]" />
                <span>{studioLocations.label}</span>
              </div>
              <p className="text-[14px] leading-relaxed font-light text-[#1A1715]/90">
                {studioLocations.text}
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): Interactive Accordion */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#DDD5C7] border-t border-b border-[#DDD5C7]">
            {modules.map((item) => {
              const isOpen = openModuleId === item.id;
              return (
                <div key={item.id} className="transition-colors duration-200">
                  {/* Accordion Row Header */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full py-6 sm:py-7 flex items-center justify-between text-left group gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6 flex-1 min-w-0">
                      <span className="font-mono text-[13px] text-[#8C8275] font-normal flex-shrink-0">
                        {item.number}
                      </span>
                      <h3 className="font-serif text-[19px] sm:text-[23px] text-[#1A1715] group-hover:text-[#5A5D4F] transition-colors leading-snug truncate">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
                      <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase text-[#8C8275]">
                        {item.price}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#1A1715] transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Accordion Row Expanded Content */}
                  {isOpen && (
                    <div className="pb-7 pt-1 pl-7 sm:pl-10 text-[#1A1715] animate-in fade-in-50 duration-200">
                      <p className="text-[15px] leading-[1.8] font-light text-[#1A1715]/85 max-w-xl mb-5">
                        {item.description}
                      </p>

                      {/* Focus Areas Pills */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {item.focusAreas.map((focus) => (
                          <span
                            key={focus}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f7f3ed] border border-[#DDD5C7] text-[10px] font-semibold tracking-[0.1em] uppercase text-[#5A5D4F]"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#5A5D4F]" />
                            <span>{focus}</span>
                          </span>
                        ))}
                      </div>

                      {/* Deliverables & Direct Enrollment Action */}
                      <div className="p-4 bg-[#fdf9f3] border border-[#DDD5C7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="text-[12px] font-light text-[#8C8275]">
                          <strong className="font-semibold text-[#1A1715] uppercase tracking-wider text-[10px] block mb-0.5">
                            Standard Deliverable:
                          </strong>
                          {item.deliverables}
                        </div>

                        <button
                          type="button"
                          onClick={() => onSelectModule(item.title)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1A1715] hover:bg-[#5A5D4F] text-[#FDFCF7] text-[10px] font-semibold tracking-[0.15em] uppercase transition-colors flex-shrink-0"
                        >
                          <span>Select Module</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
