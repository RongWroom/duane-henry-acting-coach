import React, { useState, useEffect } from 'react';
import { X, Check, Send } from 'lucide-react';
import { COACHING_DATA } from '../data/portfolioData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedObjective?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedObjective,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [link, setLink] = useState('');
  const [objective, setObjective] = useState(
    preselectedObjective || 'Scene Study & Monologue Work'
  );
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedObjective) {
      setObjective(preselectedObjective);
    }
  }, [preselectedObjective]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#121217] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto text-white">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c5a059] mb-1.5">
                Direct Inquiries
              </div>
              <h3 className="font-sans font-bold text-[24px] sm:text-[28px] text-white leading-tight mb-2">
                Book a Session with Duane
              </h3>
              <p className="text-[14px] text-zinc-400 font-normal leading-relaxed">
                One-on-one sessions conducted online worldwide, or in London and Los Angeles by arrangement.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="modal-fullName"
                  className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-400 mb-2"
                >
                  Full Name *
                </label>
                <input
                  id="modal-fullName"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#1a1a22] border border-white/10 rounded-lg px-4 py-3 text-[15px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#c5a059] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-email"
                  className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-400 mb-2"
                >
                  Email Address *
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1a1a22] border border-white/10 rounded-lg px-4 py-3 text-[15px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#c5a059] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-link"
                  className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-400 mb-2"
                >
                  Spotlight / IMDb / Showreel Link
                </label>
                <input
                  id="modal-link"
                  type="url"
                  placeholder="https://www.spotlight.com/..."
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="w-full bg-[#1a1a22] border border-white/10 rounded-lg px-4 py-3 text-[15px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#c5a059] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-objective"
                  className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-400 mb-2"
                >
                  Session Focus *
                </label>
                <select
                  id="modal-objective"
                  required
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  className="w-full bg-[#1a1a22] border border-white/10 rounded-lg px-4 py-3 text-[15px] text-white focus:outline-none focus:border-[#c5a059] transition-colors cursor-pointer"
                >
                  {COACHING_DATA.modules.map((m) => (
                    <option key={m.id} value={m.title} className="bg-[#1a1a22]">
                      {m.title} ({m.price})
                    </option>
                  ))}
                  <option value="General Consultation" className="bg-[#1a1a22]">
                    General Consultation
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="modal-notes"
                  className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-400 mb-2"
                >
                  Notes on Current Material or Audition Sides
                </label>
                <textarea
                  id="modal-notes"
                  rows={3}
                  placeholder="Upcoming audition, callback details, or specific scenes you wish to deconstruct..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#1a1a22] border border-white/10 rounded-lg px-4 py-3 text-[15px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#c5a059] transition-colors resize-none"
                />
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <span className="text-[11px] text-zinc-400 font-normal">
                Strict actor-coach confidentiality
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-black hover:bg-[#c5a059] text-[12px] font-bold tracking-[0.14em] uppercase transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
            <div className="w-14 h-14 mx-auto rounded-full bg-white text-black flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="font-sans font-bold text-[26px] text-white">Session Requested</h4>
            <p className="text-[15px] text-zinc-300 max-w-sm mx-auto leading-relaxed">
              We have received your session inquiry for{' '}
              <strong className="text-white">{objective}</strong>. Duane will review your materials and contact you at <strong className="text-white">{email}</strong>.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-[#c5a059] text-[11px] font-bold tracking-[0.14em] uppercase transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
