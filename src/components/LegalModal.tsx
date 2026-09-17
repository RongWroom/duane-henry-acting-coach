import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { LegalDocument } from '../data/legalContent';

interface LegalModalProps {
  doc: LegalDocument;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ doc, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-10001 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={doc.title}
    >
      <div
        className="relative w-full max-w-2xl bg-page-bg-alt border border-white/15 rounded-2xl p-6 sm:p-8 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2.5 text-accent-gold mb-3">
          {doc.icon}
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">
            {doc.eyebrow}
          </span>
        </div>
        <h3 className="font-sans font-bold text-[22px] text-white mb-1.5">
          {doc.title}
        </h3>
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-500 mb-4">
          {doc.lastUpdated}
        </div>
        <div className="text-[13px] text-zinc-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-3 space-y-5">
          <p>{doc.intro}</p>
          {doc.sections.map((section) => (
            <div key={section.heading}>
              <h4 className="text-[13px] font-semibold text-white mb-1.5">
                {section.heading}
              </h4>
              <div className="space-y-2">
                {section.paragraphs?.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul className="list-disc pl-5 space-y-1 marker:text-zinc-500">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white text-black font-semibold text-[12px] tracking-wider uppercase hover:bg-accent-gold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
