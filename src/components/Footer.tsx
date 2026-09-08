import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f7f3ed] border-t border-[#DDD5C7] py-16 md:py-20 text-[#1A1715]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 pb-14 border-b border-[#DDD5C7]">
          {/* Brand & Mission Statement (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#craft"
              className="font-serif text-[24px] sm:text-[28px] tracking-[0.06em] uppercase text-[#1A1715] font-normal block hover:opacity-80 transition-opacity"
            >
              Duane Henry
            </a>
            <p className="text-[14px] leading-relaxed text-[#8C8275] font-light max-w-sm">
              Dramatic artist and master mentor cultivating the next generation of visceral screen
              presences across London and Los Angeles.
            </p>
          </div>

          {/* Representation & Studio (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8C8275]">
              Representation & Studio
            </div>
            <div className="text-[14px] text-[#1A1715]/90 font-light leading-relaxed">
              Creative Artists Management (CAM), London
              <br />
              Private Studio Sessions: Soho & West Hollywood
            </div>
          </div>

          {/* Direct Inquiries (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8C8275]">
              Direct Inquiries
            </div>
            <div>
              <a
                href="mailto:studio@duanehenry.com"
                className="font-serif text-[16px] italic text-[#1A1715] underline decoration-[#DDD5C7] underline-offset-4 hover:text-[#5A5D4F] transition-colors"
              >
                studio@duanehenry.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8C8275] gap-4">
          <div>
            &copy; {new Date().getFullYear()} Duane Henry. All Rights Reserved.
          </div>
          <div className="text-[#5A5D4F] tracking-[0.25em]">
            Actor • Acting Coach • Film & Stage
          </div>
        </div>
      </div>
    </footer>
  );
};
