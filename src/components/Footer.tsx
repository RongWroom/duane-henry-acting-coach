import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080a] border-t border-white/10 py-16 md:py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 pb-12 border-b border-white/10">
          {/* Brand & Focus (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="font-sans font-bold text-[18px] tracking-[0.08em] uppercase text-white">
              Duane Henry
            </div>
            <p className="text-[14px] leading-relaxed text-zinc-400 font-normal max-w-sm">
              Dramatic actor and private acting coach. Focused 1-1 mentorship for professional and emerging actors across London and Los Angeles.
            </p>
          </div>

          {/* Representation (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c5a059]">
              Representation
            </div>
            <div className="text-[14px] text-zinc-400 leading-relaxed font-normal space-y-1">
              <p>Creative Artists Management (CAM), London</p>
              <p>Gersh Agency, Beverly Hills</p>
            </div>
          </div>

          {/* Direct Inquiries & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c5a059]">
                Direct Contact
              </div>
              <div className="pt-1">
                <a
                  href="mailto:coaching@duanehenry.com"
                  className="text-[14px] font-medium text-zinc-300 hover:text-[#c5a059] transition-colors"
                >
                  coaching@duanehenry.com
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 hover:text-white transition-colors self-start mt-4"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-normal text-zinc-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Duane Henry. All Rights Reserved.
          </div>
          <div className="tracking-[0.14em] uppercase text-[10px] text-zinc-400">
            Actor • Dramatic Coach • Stage & Screen
          </div>
        </div>
      </div>
    </footer>
  );
};
