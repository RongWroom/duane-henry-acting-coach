import React from 'react';
import { BIOGRAPHY_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const BiographySection: React.FC = () => {
  return (
    <section
      id="biography"
      className="bg-[#070c0d] py-24 md:py-32 border-t border-white/10 text-white relative overflow-hidden selection:bg-[#c5a059] selection:text-black"
    >
      {/* Cinematic subtle ambient glow */}
      <div
        className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-[#0e2c2b]/20 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 relative z-10">
        {/* Section Header Bar */}
        <ScrollReveal>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-16 text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="text-[#c5a059] font-mono">{BIOGRAPHY_DATA.sectionNumber}</span>
              <span className="w-8 h-[1px] bg-white/15" />
              <span className="text-white">THE BIOGRAPHY</span>
            </div>
            <span className="text-zinc-500">{BIOGRAPHY_DATA.subtitle}</span>
          </div>
        </ScrollReveal>

        {/* 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Pull Quote & Key Metrics */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <ScrollReveal delay={0.1}>
              {/* Refined Luxury Pull Quote Card */}
              <div className="bg-[#090f11] p-8 sm:p-10 rounded-2xl border border-white/15 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c5a059] mb-4">
                  Approach &amp; Philosophy
                </div>

                <blockquote className="font-serif italic text-[22px] sm:text-[25px] leading-[1.45] text-zinc-100 mb-8 font-normal">
                  &ldquo;{BIOGRAPHY_DATA.quote}&rdquo;
                </blockquote>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] tracking-[0.14em] uppercase text-zinc-400">
                  <span className="font-semibold text-white tracking-wider">{BIOGRAPHY_DATA.author}</span>
                  <span className="text-[#c5a059]">Actor &amp; Coach</span>
                </div>
              </div>
            </ScrollReveal>

            {/* 3-Column Metric Cards */}
            <ScrollReveal delay={0.2}>
              <div className="bg-[#090f11] border border-white/15 rounded-2xl grid grid-cols-3 divide-x divide-white/10 p-6 text-center shadow-xl">
                {BIOGRAPHY_DATA.metrics.map((metric) => (
                  <div key={metric.label} className="px-2">
                    <div className="font-sans font-bold text-[28px] sm:text-[34px] text-white leading-none">
                      {metric.value}
                    </div>
                    <div className="mt-2.5 text-[9px] sm:text-[10px] font-semibold tracking-[0.16em] uppercase text-zinc-400">
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

                <h2 className="font-sans font-bold text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.08] tracking-tight text-white mb-6">
                  From the West Midlands
                  <span className="block font-serif font-normal italic text-zinc-300 text-[30px] sm:text-[38px] lg:text-[42px] mt-1.5">
                    to Global Primetime.
                  </span>
                </h2>

                <div className="space-y-5 text-[16px] leading-[1.8] text-zinc-300 font-normal">
                  {BIOGRAPHY_DATA.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Verified Credentials Note */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-medium tracking-[0.16em] uppercase text-zinc-400">
                <span>{BIOGRAPHY_DATA.credentials}</span>
                <span className="text-[#c5a059]">London • Los Angeles</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
