import React, { useState, useEffect } from 'react';
import { INQUIRIES_DATA, COACHING_DATA } from '../data/portfolioData';
import { ConsultationFormData } from '../types';
import { Check, Send } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface InquiriesSectionProps {
  preselectedObjective?: string;
}

export const InquiriesSection: React.FC<InquiriesSectionProps> = ({ preselectedObjective }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    link: '',
    objective: 'Scene Study & Monologue Work',
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
    <section id="inquiries" className="bg-[#0b0b0e] py-20 md:py-28 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Typographic Statement */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c5a059] mb-3">
              {INQUIRIES_DATA.heroTagline}
            </div>
            <h2 className="font-sans font-bold text-white leading-tight text-[36px] sm:text-[54px] lg:text-[64px]">
              {INQUIRIES_DATA.heroHeadline}
            </h2>
          </div>
        </ScrollReveal>

        {/* 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column (4 cols): Industry Representation */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <ScrollReveal delay={0.1}>
              <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-2">
                Representation & Contact
              </div>
            </ScrollReveal>

            {INQUIRIES_DATA.representations.map((rep, idx) => (
              <ScrollReveal key={idx} delay={0.15 + idx * 0.08}>
                <div className="bg-[#131317] border border-white/10 rounded-xl p-6">
                  <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#c5a059] mb-1.5">
                    {rep.type}
                  </div>
                  <div className="font-sans font-semibold text-[17px] text-white mb-2">
                    {rep.agency}
                  </div>
                  <div className="text-[13px] text-zinc-400 leading-relaxed font-normal">
                    {rep.addressLine1}
                    <br />
                    {rep.addressLine2}
                  </div>
                  {rep.email && (
                    <div className="pt-3 mt-3 border-t border-white/10">
                      <a
                        href={`mailto:${rep.email}`}
                        className="text-[13px] font-medium text-zinc-300 hover:text-[#c5a059] transition-colors"
                      >
                        {rep.email}
                      </a>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right Column (8 cols): Clean Booking Form */}
          <div className="lg:col-span-8">
            <ScrollReveal delay={0.2}>
              <div className="bg-[#131317] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#c5a059] mb-1.5">
                        Session Inquiries
                      </div>
                      <h3 className="font-sans font-bold text-[24px] sm:text-[28px] text-white mb-2">
                        Request a Coaching Session
                      </h3>
                      <p className="text-[14px] text-zinc-400 font-normal leading-relaxed">
                        Please provide your details, relevant spotlight or IMDb link, and what material you would like to focus on.
                      </p>
                    </div>

                    {/* Form Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-400 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-[#1c1c24] border border-white/10 rounded-lg px-4 py-3 text-[15px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#c5a059] transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-400 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#1c1c24] border border-white/10 rounded-lg px-4 py-3 text-[15px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#c5a059] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Form Row 2: Link & Objective */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="link"
                          className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-400 mb-2"
                        >
                          Spotlight / IMDb / Showreel Link
                        </label>
                        <input
                          id="link"
                          type="url"
                          placeholder="https://www.spotlight.com/..."
                          value={formData.link}
                          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                          className="w-full bg-[#1c1c24] border border-white/10 rounded-lg px-4 py-3 text-[15px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#c5a059] transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="objective"
                          className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-400 mb-2"
                        >
                          Session Focus *
                        </label>
                        <select
                          id="objective"
                          required
                          value={formData.objective}
                          onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                          className="w-full bg-[#1c1c24] border border-white/10 rounded-lg px-4 py-3 text-[15px] text-white focus:outline-none focus:border-[#c5a059] transition-colors cursor-pointer"
                        >
                          {COACHING_DATA.modules.map((mod) => (
                            <option key={mod.id} value={mod.title} className="bg-[#1c1c24]">
                              {mod.title} ({mod.price})
                            </option>
                          ))}
                          <option value="General Consultation" className="bg-[#1c1c24]">
                            General Consultation
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Form Row 3: Notes */}
                    <div>
                      <label
                        htmlFor="notes"
                        className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-400 mb-2"
                      >
                        Material & Upcoming Deadlines
                      </label>
                      <textarea
                        id="notes"
                        rows={4}
                        placeholder="Tell Duane briefly about your current audition sides, production timelines, or specific goals..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-[#1c1c24] border border-white/10 rounded-lg px-4 py-3 text-[15px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#c5a059] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Bar */}
                    <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-white/10">
                      <div className="text-[12px] text-zinc-400">
                        All materials and scripts are held in strict confidence.
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black hover:bg-[#c5a059] text-[12px] font-bold tracking-[0.14em] uppercase transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Send Inquiry</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Success State */
                  <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                    <div className="w-14 h-14 mx-auto rounded-full bg-white text-black flex items-center justify-center">
                      <Check className="w-7 h-7" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c5a059]">
                        Inquiry Received
                      </div>
                      <h3 className="font-sans font-bold text-[28px] text-white">
                        Thank You, {formData.fullName}
                      </h3>
                      <p className="text-[15px] text-zinc-300 max-w-md mx-auto leading-relaxed">
                        Your inquiry regarding <strong>{formData.objective}</strong> has been received.
                        Duane will review your sides and details and get back to you within 24–48 hours.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
