import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#0c1517] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header Bar */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-black/50">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-white">
              Duane Henry — Theatrical Dramatic Reel (2018–2024)
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Showreel"
            className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Real Vimeo Video Player */}
        <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1206826083?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            className="w-full h-full absolute inset-0 border-0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Duane Henry - Demo Reel 2026"
          />
        </div>
      </div>
    </div>
  );
};
