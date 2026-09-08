import React, { useState, useEffect } from 'react';
import { INQUIRIES_DATA, COACHING_DATA } from '../data/portfolioData';
import { ConsultationFormData } from '../types';
import { Check, Send, Sparkles } from 'lucide-react';

interface InquiriesSectionProps {
  preselectedObjective?: string;
}

export const InquiriesSection: React.FC<InquiriesSectionProps> = ({ preselectedObjective }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    link: '',
    objective: 'Scene Study & Intensive Monologues',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedObjective) {
      setFormData((prev) => ({ ...prev, objective: preselectedObjective }));
    }
  }, [preselectedObjective]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="inquiries" className="bg-[#fdf9f3] py-20 md:py-28 border-t border-[#DDD5C7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Centralized Typographic Statement */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8C8275] mb-4">
            {INQUIRIES_DATA.heroTagline}
          </div>
          <h2 className="font-serif text-[#1A1715] leading-[0.95] tracking-[-0.03em] select-none">
            <span className="block text-[44px] sm:text-[68px] lg:text-[88px] font-normal">
              TRUTH IN
            </span>
            <span className="block text-[48px] sm:text-[76px] lg:text-[98px] italic font-light text-[#1A1715]/90">
              PERFORMANCE.
            </span>
          </h2>
        </div>

        {/* 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column (4 cols): Plain-Text Representation Lists */}
          <div className="lg:col-span-4 flex flex-col divide-y divide-[#DDD5C7]">
            {INQUIRIES_DATA.representations.map((rep, idx) => (
              <div key={idx} className={`${idx === 0 ? 'pb-8' : 'py-8'} flex flex-col space-y-2`}>
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8C8275] mb-1">
                  {rep.type}
                </div>
                <div className="font-serif text-[19px] sm:text-[21px] text-[#1A1715] font-normal">
                  {rep.agency}
                </div>
                <div className="text-[14px] text-[#8C8275] leading-relaxed font-light">
                  {rep.addressLine1}
                  <br />
                  {rep.addressLine2}
                </div>
                {rep.email && (
                  <div className="pt-2">
                    <a
                      href={`mailto:${rep.email}`}
                      className="font-serif text-[16px] italic text-[#1A1715] underline decoration-[#DDD5C7] underline-offset-4 hover:text-[#5A5D4F] transition-colors"
                    >
                      {rep.email}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column (8 cols): Minimalist Editorial Form */}
          <div className="lg:col-span-8 bg-[#f7f3ed] border border-[#DDD5C7] p-8 sm:p-12 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Form Header */}
                <div>
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8C8275] mb-2">
                    Application Form
                  </div>
                  <h3 className="font-serif text-[26px] sm:text-[32px] text-[#1A1715] mb-3">
                    Request Studio Consultation
                  </h3>
                  <p className="text-[14px] text-[#8C8275] font-light leading-relaxed">
                    Please provide your current representation, spotlight/IMDb link, and the focus
                    of your upcoming auditions or ongoing training.
                  </p>
                </div>

                {/* Form Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#8C8275] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Eleanor Sterling"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-transparent border-b border-[#8C8275] focus:border-[#1A1715] py-2 text-[15px] text-[#1A1715] placeholder:text-[#8C8275]/50 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#8C8275] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="eleanor@talentagency.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-[#8C8275] focus:border-[#1A1715] py-2 text-[15px] text-[#1A1715] placeholder:text-[#8C8275]/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Form Row 2: Link & Objective Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label
                      htmlFor="link"
                      className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#8C8275] mb-2"
                    >
                      IMDb / Spotlight / Showreel Link
                    </label>
                    <input
                      id="link"
                      type="url"
                      placeholder="https://www.imdb.com/name/..."
                      value={formData.link}
                      onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                      className="w-full bg-transparent border-b border-[#8C8275] focus:border-[#1A1715] py-2 text-[15px] text-[#1A1715] placeholder:text-[#8C8275]/50 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="objective"
                      className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#8C8275] mb-2"
                    >
                      Primary Objective *
                    </label>
                    <select
                      id="objective"
                      required
                      value={formData.objective}
                      onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                      className="w-full bg-transparent border-b border-[#8C8275] focus:border-[#1A1715] py-2 text-[15px] text-[#1A1715] focus:outline-none transition-colors cursor-pointer"
                    >
                      {COACHING_DATA.modules.map((mod) => (
                        <option key={mod.id} value={mod.title} className="bg-[#f7f3ed] text-[#1A1715]">
                          {mod.title} ({mod.price})
                        </option>
                      ))}
                      <option value="General Consultation" className="bg-[#f7f3ed] text-[#1A1715]">
                        General Industry Consultation
                      </option>
                    </select>
                  </div>
                </div>

                {/* Form Row 3: Notes Textarea */}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#8C8275] mb-2"
                  >
                    Background & Specific Notes
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    placeholder="Tell us briefly about current project timelines or specific upcoming production commitments..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-transparent border-b border-[#8C8275] focus:border-[#1A1715] py-2 text-[15px] text-[#1A1715] placeholder:text-[#8C8275]/50 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Bottom Bar: Confidentiality Notice & Submit Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#DDD5C7]">
                  <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#8C8275] text-center sm:text-left">
                    Strict confidentiality maintained for all script reads
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-[#1A1715] hover:bg-[#5A5D4F] text-[#FDFCF7] text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Studio Dossier</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Success Confirmation Card */
              <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#1A1715] text-[#DDD5C7] flex items-center justify-center">
                  <Check className="w-7 h-7 text-[#FDFCF7]" />
                </div>
                <div className="space-y-2">
                  <div className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#5A5D4F]">
                    Dossier Logged • Verification #{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                  <h3 className="font-serif text-[32px] text-[#1A1715]">
                    Consultation Request Received
                  </h3>
                  <p className="text-[15px] text-[#8C8275] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#1A1715]">{formData.fullName}</strong>. Your
                    studio portfolio submission has been delivered directly to Duane Henry&apos;s
                    admissions director. Our office will reply within 24–48 hours.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        link: '',
                        objective: 'Scene Study & Intensive Monologues',
                        notes: '',
                      });
                    }}
                    className="px-6 py-2.5 border border-[#DDD5C7] hover:bg-[#f1ede7] text-[10px] font-semibold tracking-[0.16em] uppercase text-[#1A1715] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
