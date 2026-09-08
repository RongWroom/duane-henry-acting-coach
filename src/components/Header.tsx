import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-sand/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <a
            href="#craft"
            className="font-serif text-[20px] sm:text-[22px] tracking-[0.08em] uppercase text-deep-espresso font-normal hover:opacity-80 transition-opacity"
          >
            Duane Henry
          </a>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-taupe hover:text-deep-espresso transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 bg-deep-espresso hover:bg-dusty-olive text-bone-white text-[11px] font-semibold tracking-[0.16em] uppercase rounded-none transition-colors duration-200 shadow-sm"
          >
            Book Consultation
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden w-9 h-9 flex items-center justify-center text-deep-espresso hover:bg-surface-container transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-sand px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[14px] tracking-[0.15em] uppercase font-serif text-deep-espresso py-1 hover:text-dusty-olive transition-colors"
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
                className="w-full py-3 bg-deep-espresso text-bone-white text-[11px] font-semibold tracking-[0.16em] uppercase text-center"
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
