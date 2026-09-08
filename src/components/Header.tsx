import React, { useState } from 'react';
import { User, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'The Craft', href: '#craft' },
    { label: 'Biography', href: '#biography' },
    { label: 'Selected Works', href: '#works' },
    { label: 'Coaching', href: '#coaching' },
    { label: 'Inquiries', href: '#inquiries' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf9f3]/90 backdrop-blur-md border-b border-[#DDD5C7]/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 h-20 flex items-center justify-between">
        {/* Left: Logo & Location Pill */}
        <div className="flex items-center space-x-4">
          <a
            href="#craft"
            className="font-serif text-[20px] sm:text-[22px] tracking-[0.08em] uppercase text-[#1A1715] font-normal hover:opacity-80 transition-opacity"
          >
            Duane Henry
          </a>
          <span className="hidden md:inline-flex items-center px-2.5 py-0.5 text-[10px] tracking-[0.18em] uppercase text-[#8C8275] border border-[#DDD5C7] rounded-none bg-[#f7f3ed]/60">
            L.A. / London
          </span>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#8C8275] hover:text-[#1A1715] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 bg-[#1A1715] hover:bg-[#5A5D4F] text-[#FDFCF7] text-[11px] font-semibold tracking-[0.16em] uppercase rounded-none transition-colors duration-200 shadow-sm"
          >
            Book Consultation
          </button>

          <button
            onClick={onOpenConsultation}
            aria-label="User account or consultation portal"
            className="w-9 h-9 flex items-center justify-center border border-[#DDD5C7] text-[#1A1715] hover:bg-[#f1ede7] transition-colors rounded-full"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden w-9 h-9 flex items-center justify-center text-[#1A1715] hover:bg-[#f1ede7] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fdf9f3] border-b border-[#DDD5C7] px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            <div className="pb-2 border-b border-[#DDD5C7]/50 flex justify-between items-center">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8C8275]">
                L.A. / London • Vol. XXIV
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[14px] tracking-[0.15em] uppercase font-serif text-[#1A1715] py-1 hover:text-[#5A5D4F] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-[#1A1715] text-[#FDFCF7] text-[11px] font-semibold tracking-[0.16em] uppercase text-center"
              >
                Request Studio Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
