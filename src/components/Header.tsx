import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Craft', href: '#craft' },
    { label: 'Biography', href: '#biography' },
    { label: 'Selected Works', href: '#works' },
    { label: 'Coaching', href: '#coaching' },
    { label: 'Contact', href: '#inquiries' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header text-white transition-all duration-300">
      {/* Top subtle scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-[#c5a059] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 h-20 flex items-center justify-between">
        {/* Left: Brand / Logo */}
        <div className="flex items-center">
          <a href="#craft" className="flex items-center gap-3 group">
            <span className="font-sans font-bold text-[16px] sm:text-[17px] tracking-[0.08em] uppercase text-white group-hover:text-[#c5a059] transition-colors">
              Duane Henry
            </span>
            <span className="hidden sm:inline-block w-[1px] h-3 bg-white/20" />
            <span className="hidden sm:inline-block text-[11px] font-medium tracking-[0.16em] uppercase text-zinc-400">
              Acting Coach
            </span>
          </a>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] font-medium tracking-[0.14em] uppercase text-zinc-300 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Action CTA */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black hover:bg-[#c5a059] hover:text-black text-[11px] font-bold tracking-[0.12em] uppercase transition-all duration-200"
          >
            <span>Book a Session</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1416] border-b border-white/10 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[14px] font-medium tracking-[0.12em] uppercase text-zinc-300 hover:text-[#c5a059] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-full bg-white text-black text-[12px] font-bold tracking-[0.12em] uppercase"
              >
                Book a Session
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
