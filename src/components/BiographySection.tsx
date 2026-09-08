import React from 'react';
import { BIOGRAPHY_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const BiographySection: React.FC = () => {
  return (
    <section id="biography" className="bg-[#0c1517] py-20 md:py-28 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-14 text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="text-[#c5a059] font-mono">{BIOGRAPHY_DATA.sectionNumber}</span>
              <span className="w-8 h-[1px] bg-white/15" />
              <span className="text-white">BIOGRAPHY</span>
            </div>
            <span className="text-zinc-500">{BIOGRAPHY_DATA.subtitle}</span>
          </div>
        </ScrollReveal>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column (5 cols): Pull Quote & Key Metrics */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <ScrollReveal delay={0.1}>
              {/* Refined Dark Forest Pull Quote Card */}
              <div className="bg-[#0f1a1c] p-8 sm:p-10 rounded-2xl border border-white/10 shadow-xl relative">
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c5a059] mb-5">
                  Approach &amp; Philosophy
                </div>

                <blockquote className="font-serif italic text-[22px] sm:text-[25px] leading-[1.45] text-zinc-100 mb-8 font-normal">
                  &ldquo;{BIOGRAPHY_DATA.quote}&rdquo;
                </blockquote>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] tracking-[0.14em] uppercase text-zinc-400">
                  <span className="font-semibold text-white tracking-wider">{BIOGRAPHY_DATA.author}</span>
                  <span>Actor &amp; Coach</span>
                </div>
              </div>
            </ScrollReveal>

            {/* 3-Column Metric Cards */}
            <ScrollReveal delay={0.2}>
              <div className="bg-[#0f1a1c] border border-white/10 rounded-2xl grid grid-cols-3 divide-x divide-white/10 p-5 text-center">
                {BIOGRAPHY_DATA.metrics.map((metric) => (
                  <div key={metric.label} className="px-2">
                    <div className="font-sans font-bold text-[28px] sm:text-[32px] text-white leading-none">
                      {metric.value}
                    </div>
                    <div className="mt-2 text-[9px] sm:text-[10px] font-semibold tracking-[0.14em] uppercase text-zinc-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (7 cols): Editorial Prose */}
          <div className="lg:col-span-7 flex flex-col justify-between lg:pl-4">
            <ScrollReveal delay={0.15}>
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c5a059] mb-3">
                  {BIOGRAPHY_DATA.category}
                </div>

                <h2 className="font-sans font-bold text-[32px] sm:text-[42px] leading-[1.15] tracking-tight text-white mb-6">
                  {BIOGRAPHY_DATA.heading}
                </h2>

                <div className="space-y-5 text-[16px] leading-[1.8] text-zinc-300 font-normal">
                  {BIOGRAPHY_DATA.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Verified Credentials Note */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-medium tracking-[0.15em] uppercase text-zinc-400">
                <span>{BIOGRAPHY_DATA.credentials}</span>
                <span className="text-zinc-500">London • Los Angeles</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
