import React, { useState, useEffect } from 'react';
import { ConsultationFormData } from '../types';
import { Check, ShieldCheck, Clock, MapPin, Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { COACHING_DATA } from '../data/portfolioData';

interface InquiriesSectionProps {
  preselectedObjective?: string;
}

export const InquiriesSection: React.FC<InquiriesSectionProps> = ({ preselectedObjective }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    link: '',
    objective: preselectedObjective || 'Scene Study & Monologue Work',
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
    <section
      id="inquiries"
      className="bg-[#070c0d] py-24 md:py-32 border-t border-white/10 text-white relative overflow-hidden selection:bg-[#c5a059] selection:text-black"
    >
      {/* Cinematic dark teal & gold ambient background glows */}
      <div
        className="absolute -bottom-24 -left-20 w-[550px] h-[550px] bg-[#0e2c2b]/25 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-12 right-0 w-[450px] h-[450px] bg-[#c5a059]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 relative z-10">
        {/* Section Header Bar */}
        <ScrollReveal>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-16 text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="text-[#c5a059] font-mono">04</span>
              <span className="w-8 h-[1px] bg-white/15" />
              <span className="text-white">PRIVATE INQUIRIES &amp; BOOKING</span>
            </div>
            <span className="text-zinc-500">LONDON • LOS ANGELES • VIRTUAL</span>
          </div>
        </ScrollReveal>

        {/* Editorial 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Editorial Copy & 2x2 Metadata Grid */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <ScrollReveal delay={0.05}>
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c5a059] mb-4">
                  Direct Mentorship &amp; Audition Prep
                </div>

                <h2 className="font-sans font-bold tracking-tight text-white leading-[1.04] text-[38px] sm:text-[48px] lg:text-[54px] xl:text-[58px]">
                  RESERVE YOUR
                  <span className="block font-serif font-normal italic text-zinc-300 text-[32px] sm:text-[40px] lg:text-[46px] xl:text-[50px] mt-1.5">
                    Private Session.
                  </span>
                </h2>

                <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.75] text-zinc-300/90 font-normal">
                  One-on-one dramatic coaching directly with Duane Henry. Tailored specifically to your upcoming auditions, pilot tests, and screen technique. Sessions are available in person in London and Los Angeles, or remotely worldwide via private video.
                </p>
              </div>
            </ScrollReveal>

            {/* 2x2 Metadata Grid matching Footer layout */}
            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-6 py-8 border-y border-white/10">
                {/* LOCATIONS */}
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Locations</span>
                  </div>
                  <div className="text-[13px] text-zinc-300 leading-relaxed font-normal">
                    Covent Garden, London
                    <br />
                    Beverly Hills, Los Angeles
                  </div>
                </div>

                {/* URGENT CASTING */}
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Audition Deadlines</span>
                  </div>
                  <div className="text-[13px] text-zinc-300 leading-relaxed font-normal">
                    24–48h rapid turnaround for urgent self-tapes and recalls.
                  </div>
                </div>

                {/* CONFIDENTIALITY */}
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Confidentiality</span>
                  </div>
                  <div className="text-[13px] text-zinc-300 leading-relaxed font-normal">
                    Strict privacy and NDA protection for unreleased scripts and sides.
                  </div>
                </div>

                {/* DIRECT EMAIL */}
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Direct Inquiries</span>
                  </div>
                  <div className="text-[13px] text-zinc-300 leading-relaxed font-normal">
                    <a
                      href="mailto:coaching@duanehenry.com"
                      className="hover:text-[#c5a059] transition-colors underline-offset-4 hover:underline"
                    >
                      coaching@duanehenry.com
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Duane's Philosophy Quote */}
            <ScrollReveal delay={0.25}>
              <div className="flex items-start gap-4 pt-1">
                <div className="w-10 h-10 rounded-full border border-white/20 bg-white/[0.04] flex items-center justify-center text-[#c5a059] shrink-0 font-serif italic text-[20px]">
                  &ldquo;
                </div>
                <div>
                  <p className="font-serif italic text-[14px] sm:text-[15px] leading-[1.6] text-zinc-300">
                    Acting is not about pretending; it is about uncovering the undeniable truth under intense pressure.
                  </p>
                  <span className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mt-2">
                    — Duane Henry
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (7 cols): Bespoke Luxury Booking Module */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="bg-[#091113]/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-7 sm:p-10 shadow-2xl relative overflow-hidden">
                {/* Subtle top golden ambient border */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent"
                  aria-hidden="true"
                />

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Header */}
                    <div>
                      <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#c5a059] mb-1.5">
                        Direct Inquiry
                      </div>
                      <h3 className="font-sans font-bold text-[24px] sm:text-[28px] text-white tracking-tight">
                        Request a Session
                      </h3>
                      <p className="text-[14px] text-zinc-400 font-normal leading-relaxed mt-1">
                        Share your details and what you're working on. Duane will review your material and get back to you within 24–48 hours.
                      </p>

                      {preselectedObjective && preselectedObjective !== 'Scene Study & Monologue Work' && (
                        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/25 text-[11px] font-medium text-[#c5a059]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                          <span>Selected Focus: {preselectedObjective}</span>
                        </div>
                      )}
                    </div>

                    {/* Form Row: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                          className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#c5a059] focus:bg-white/[0.05] rounded-xl px-4 py-3.5 text-[14px] text-white placeholder:text-zinc-600 focus:outline-none transition-all duration-200"
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
                          className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#c5a059] focus:bg-white/[0.05] rounded-xl px-4 py-3.5 text-[14px] text-white placeholder:text-zinc-600 focus:outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Form Row: Spotlight / IMDb Link */}
                    <div>
                      <label
                        htmlFor="link"
                        className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-400 mb-2"
                      >
                        Spotlight / IMDb / Showreel Link <span className="text-zinc-500 font-normal lowercase tracking-normal">(optional)</span>
                      </label>
                      <input
                        id="link"
                        type="url"
                        placeholder="https://www.spotlight.com/... or IMDb link"
                        value={formData.link}
                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#c5a059] focus:bg-white/[0.05] rounded-xl px-4 py-3.5 text-[14px] text-white placeholder:text-zinc-600 focus:outline-none transition-all duration-200"
                      />
                    </div>

                    {/* Form Row: Session Focus */}
                    <div>
                      <label
                        htmlFor="objective"
                        className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-400 mb-2"
                      >
                        Session Focus *
                      </label>
                      <div className="relative">
                        <select
                          id="objective"
                          required
                          value={formData.objective}
                          onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                          className="w-full bg-[#0c1517] border border-white/10 hover:border-white/20 focus:border-[#c5a059] focus:bg-[#0f1b1e] rounded-xl px-4 py-3.5 text-[14px] text-white focus:outline-none transition-all duration-200 cursor-pointer appearance-none pr-10"
                        >
                          {COACHING_DATA.modules.map((m) => (
                            <option key={m.id} value={m.title} className="bg-[#0c1517] text-white">
                              {m.title} ({m.price})
                            </option>
                          ))}
                          <option value="Urgent Audition / Self-Tape Callback" className="bg-[#0c1517] text-white">
                            Urgent Audition / Self-Tape Callback (24–48h)
                          </option>
                          <option value="General Consultation & Mentorship" className="bg-[#0c1517] text-white">
                            General Consultation &amp; Mentorship
                          </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Form Row: Material & Upcoming Deadlines */}
                    <div>
                      <label
                        htmlFor="notes"
                        className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-400 mb-2"
                      >
                        Material &amp; Audition Details
                      </label>
                      <textarea
                        id="notes"
                        rows={4}
                        placeholder="Tell Duane about your upcoming audition sides, project details, or deadlines..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#c5a059] focus:bg-white/[0.05] rounded-xl px-4 py-3.5 text-[14px] text-white placeholder:text-zinc-600 focus:outline-none transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit Bar */}
                    <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-[12px] text-zinc-400">
                        <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0" />
                        <span>Confidential &amp; NDA protected</span>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black hover:bg-[#c5a059] hover:text-black text-[12px] font-bold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer shadow-lg hover:shadow-[#c5a059]/20 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Session</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Success State */
                  <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                    <div className="w-14 h-14 mx-auto rounded-full bg-[#c5a059] text-black flex items-center justify-center shadow-xl shadow-[#c5a059]/20">
                      <Check className="w-7 h-7 stroke-[2.5]" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c5a059]">
                        Inquiry Received
                      </div>
                      <h3 className="font-sans font-bold text-[26px] sm:text-[30px] text-white">
                        Thank You, {formData.fullName}
                      </h3>
                      <p className="text-[15px] text-zinc-300 max-w-md mx-auto leading-relaxed font-normal">
                        Your inquiry has been received. Duane will personally review your details and respond within 24–48 hours.
                      </p>
                    </div>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: '',
                            email: '',
                            link: '',
                            objective: 'Scene Study & Monologue Work',
                            notes: '',
                          });
                        }}
                        className="px-6 py-2.5 rounded-full border border-white/20 hover:border-white/50 text-white text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors cursor-pointer"
                      >
                        Send Another Inquiry
                      </button>
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
