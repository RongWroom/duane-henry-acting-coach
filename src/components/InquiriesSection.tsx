import React, { useState, useEffect } from 'react';
import { COACHING_DATA } from '../data/portfolioData';
import { ConsultationFormData } from '../types';
import { Check, Send, ShieldCheck, Video, Clock, Sparkles } from 'lucide-react';
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
    <section id="inquiries" className="bg-[#070c0d] py-20 md:py-28 border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c5a059] mb-3">
              Direct Mentorship & Audition Prep
            </div>
            <h2 className="font-sans font-bold text-white leading-tight text-[36px] sm:text-[52px] lg:text-[60px] tracking-tight">
              Book a Private Session.
            </h2>
            <p className="mt-4 text-[15px] sm:text-[16px] text-zinc-400 font-normal max-w-xl mx-auto leading-relaxed">
              One-on-one sessions tailored to your active audition sides, script analysis, or camera technique. Available online worldwide or in London &amp; Los Angeles.
            </p>
          </div>
        </ScrollReveal>

        {/* Balanced 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column (5 cols): What to Expect & Session Preparation */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-[#0f1a1c] border border-white/10 rounded-2xl p-7 sm:p-8 space-y-6">
                <div>
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c5a059] mb-2 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>The Session Experience</span>
                  </div>
                  <h3 className="font-sans font-bold text-[22px] text-white">
                    What to Expect
                  </h3>
                  <p className="text-[14px] text-zinc-400 leading-relaxed font-normal mt-2">
                    Every session is confidential, direct, and tailored to give you tangible breakthrough in your performance.
                  </p>
                </div>

                <div className="space-y-4 pt-1">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[12px] font-bold text-zinc-300 shrink-0">
                      01
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-white">
                        Sides & Script Deconstruction
                      </div>
                      <p className="text-[13px] text-zinc-400 leading-relaxed mt-0.5">
                        Break down scene beats, discover hidden subtext, and establish truthful point-of-view before the camera rolls.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[12px] font-bold text-zinc-300 shrink-0">
                      02
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-white">
                        Live Take-by-Take Camera Direction
                      </div>
                      <p className="text-[13px] text-zinc-400 leading-relaxed mt-0.5">
                        Work real-time with Duane to calibrate eye-lines, eliminate physical mannerisms, and build magnetic stillness.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[12px] font-bold text-zinc-300 shrink-0">
                      03
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-white">
                        Strict Industry Confidentiality
                      </div>
                      <p className="text-[13px] text-zinc-400 leading-relaxed mt-0.5">
                        All pilot sides, studio scripts, and unreleased scenes remain 100% confidential under standard NDA protocols.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Urgent casting notice */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-[13px] text-zinc-400">
                  <Clock className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>
                    Urgent tape due within 24h? Note your deadline in the form for priority scheduling.
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Duane's Quote Badge */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5">
                <blockquote className="text-[13px] italic text-zinc-300 leading-relaxed">
                  &ldquo;Acting is not about pretending; it is about uncovering the undeniable truth under intense pressure.&rdquo;
                </blockquote>
                <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#c5a059] mt-2">
                  — Duane Henry
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (7 cols): Clean Booking Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15}>
              <div className="bg-[#0f1a1c] border border-white/10 rounded-2xl p-7 sm:p-10 shadow-2xl">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                          className="w-full bg-[#132022] border border-white/10 rounded-lg px-4 py-3 text-[14px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#c5a059] transition-colors"
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
                          className="w-full bg-[#132022] border border-white/10 rounded-lg px-4 py-3 text-[14px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#c5a059] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Form Row 2: Link & Objective */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                          className="w-full bg-[#132022] border border-white/10 rounded-lg px-4 py-3 text-[14px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#c5a059] transition-colors"
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
                          className="w-full bg-[#132022] border border-white/10 rounded-lg px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#c5a059] transition-colors cursor-pointer"
                        >
                          {COACHING_DATA.modules.map((mod) => (
                            <option key={mod.id} value={mod.title} className="bg-[#132022]">
                              {mod.title} ({mod.price})
                            </option>
                          ))}
                          <option value="General Consultation" className="bg-[#132022]">
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
                        className="w-full bg-[#132022] border border-white/10 rounded-lg px-4 py-3 text-[14px] text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#c5a059] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Bar */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-white/10">
                      <div className="flex items-center gap-2 text-[12px] text-zinc-400">
                        <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                        <span>Confidentiality &amp; NDA protected</span>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black hover:bg-[#c5a059] text-[12px] font-bold tracking-[0.14em] uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
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
                  <div className="py-10 text-center space-y-5 animate-in fade-in duration-300">
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
