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
    preselectedObjective || 'Scene Study & Intensive Monologues'
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
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-surface-container-low border border-sand shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 text-muted-taupe hover:text-deep-espresso transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-taupe mb-1.5">
                Private Conservatory Admissions
              </div>
              <h3 className="font-serif text-[28px] sm:text-[34px] text-deep-espresso leading-tight mb-2">
                Book Studio Consultation
              </h3>
              <p className="text-[13px] sm:text-[14px] text-muted-taupe font-light leading-relaxed">
                Direct one-on-one sessions in Soho, London, West Hollywood, or via dedicated 4K
                calibrated virtual streams.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="modal-fullName"
                  className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-taupe mb-1.5"
                >
                  Full Name *
                </label>
                <input
                  id="modal-fullName"
                  type="text"
                  required
                  placeholder="e.g. Eleanor Sterling"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-transparent border-b border-muted-taupe focus:border-deep-espresso py-2 text-[15px] text-deep-espresso placeholder:text-muted-taupe/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-email"
                  className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-taupe mb-1.5"
                >
                  Email Address *
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  placeholder="eleanor@talentagency.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-muted-taupe focus:border-deep-espresso py-2 text-[15px] text-deep-espresso placeholder:text-muted-taupe/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-link"
                  className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-taupe mb-1.5"
                >
                  Spotlight / IMDb / Showreel Link
                </label>
                <input
                  id="modal-link"
                  type="url"
                  placeholder="https://www.spotlight.com/..."
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="w-full bg-transparent border-b border-muted-taupe focus:border-deep-espresso py-2 text-[15px] text-deep-espresso placeholder:text-muted-taupe/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-objective"
                  className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-taupe mb-1.5"
                >
                  Coaching Module *
                </label>
                <select
                  id="modal-objective"
                  required
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  className="w-full bg-transparent border-b border-muted-taupe focus:border-deep-espresso py-2 text-[15px] text-deep-espresso focus:outline-none transition-colors cursor-pointer"
                >
                  {COACHING_DATA.modules.map((m) => (
                    <option key={m.id} value={m.title} className="bg-surface-container-low">
                      {m.title} ({m.price})
                    </option>
                  ))}
                  <option value="General Consultation" className="bg-surface-container-low">
                    General Industry Consultation
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="modal-notes"
                  className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-taupe mb-1.5"
                >
                  Notes on Current Material or Roles
                </label>
                <textarea
                  id="modal-notes"
                  rows={3}
                  placeholder="Upcoming callback or specific text you wish to work on..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-transparent border-b border-muted-taupe focus:border-deep-espresso py-2 text-[15px] text-deep-espresso placeholder:text-muted-taupe/50 focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between gap-4">
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-taupe">
                Strict Actor-Mentor Confidentiality
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-7 py-3 bg-deep-espresso hover:bg-dusty-olive text-bone-white text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Booking...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Confirm Consultation</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
            <div className="w-14 h-14 mx-auto rounded-full bg-deep-espresso text-bone-white flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-[28px] text-deep-espresso">Booking Requested</h4>
            <p className="text-[14px] text-muted-taupe max-w-sm mx-auto leading-relaxed">
              We have received your consultation reservation for{' '}
              <strong className="text-deep-espresso">{objective}</strong>. You will receive an onboarding
              dossier and schedule confirmation at <strong className="text-deep-espresso">{email}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-deep-espresso text-bone-white text-[11px] font-semibold tracking-[0.16em] uppercase"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
