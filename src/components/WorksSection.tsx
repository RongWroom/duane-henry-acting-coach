import React, { useState, useRef, useEffect } from 'react';
import { Play, X, ArrowUpRight } from 'lucide-react';
import { SELECTED_WORKS_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

interface WorksSectionProps {
  onWatchReel?: () => void;
}

export const WorksSection: React.FC<WorksSectionProps> = () => {
  const { featuredReel, credits, sectionNumber, sectionTitle, subtitle } = SELECTED_WORKS_DATA;
  const [isPlaying, setIsPlaying] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  // 2 cycles ensure a continuous, uninterrupted marquee track across all display sizes
  const marqueeItems = [...credits, ...credits];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Respect reduced motion settings; touch devices still auto-scroll and pause while touched.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    let currentX = 0;
    let cycleWidth = track.scrollWidth / 2;
    const baseSpeed = 48; // Cinematic, smooth pace (~48px/sec)
    let currentSpeed = baseSpeed;

    const updateCycleWidth = () => {
      cycleWidth = track.scrollWidth / 2;
    };

    const animate = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Soft deceleration on hover, gentle acceleration back up on unhover
      const targetSpeed = isHoveredRef.current ? 0 : baseSpeed;
      const lerpFactor = isHoveredRef.current ? 4.2 : 2.4;
      currentSpeed += (targetSpeed - currentSpeed) * Math.min(lerpFactor * dt, 1);

      currentX -= currentSpeed * dt;

      // Seamless infinite loop based on single cycle width (1/2 of 2 repetitions)
      if (cycleWidth > 0 && Math.abs(currentX) >= cycleWidth) {
        currentX += cycleWidth;
      }

      track.style.transform = `translate3d(${currentX}px, 0, 0)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', updateCycleWidth, { passive: true });
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', updateCycleWidth);
      cancelAnimationFrame(animationFrameId);
    };
  }, [credits]);

  return (
    <section
      className="bg-page-bg py-24 md:py-32 border-t border-white/10 text-white relative overflow-hidden selection:bg-accent-gold selection:text-black"
    >
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/4 -right-20 w-112.5 h-112.5 bg-[#0e2c2b]/20 rounded-full ambient-glow pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 relative z-10">
        {/* Section Header Bar */}
        <ScrollReveal>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-16 text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="text-accent-gold font-mono">{sectionNumber}</span>
              <span className="w-8 h-px bg-white/15" />
              <span className="text-white">{sectionTitle}</span>
            </div>
            <span className="text-zinc-400">{subtitle}</span>
          </div>
        </ScrollReveal>

        {/* Featured Reel Frame with Poster State & Vimeo Embed */}
        <ScrollReveal delay={0.1}>
          <div
            className={`relative w-full rounded-2xl bg-black overflow-hidden border border-white/15 shadow-2xl shadow-black/80 mb-14 group ${
              isPlaying
                ? 'aspect-video'
                : 'min-h-95 sm:min-h-0 sm:aspect-video lg:aspect-21/9'
            }`}
          >
            {isPlaying ? (
              <>
                <iframe
                  src="https://player.vimeo.com/video/1206826083?h=560a2894c0&autoplay=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Duane Henry - Demo Reel 2026"
                />
                <button
                  type="button"
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 z-30 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/80 hover:bg-black text-zinc-300 hover:text-white text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg"
                  title="Close Video"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Close Video</span>
                </button>
              </>
            ) : (
              /* Poster State with Editorial Text Overlay on Page Load */
              <div
                role="button"
                tabIndex={0}
                aria-label="Play Duane Henry's demo reel"
                onClick={() => setIsPlaying(true)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setIsPlaying(true);
                  }
                }}
                className="relative w-full h-full min-h-95 sm:min-h-0 cursor-pointer flex flex-col justify-between p-5 sm:p-7 md:p-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-gold"
              >
                <picture className="absolute inset-0">
                  <source
                    type="image/avif"
                    srcSet="/images/duane-henry-stage-768.avif 768w, /images/duane-henry-stage-1280.avif 1280w"
                    sizes="(max-width: 767px) calc(100vw - 48px), 1152px"
                  />
                  <img
                    src={featuredReel.stillUrl}
                    alt="Duane Henry performing on stage"
                    width="1672"
                    height="941"
                    className="w-full h-full object-cover object-center brightness-[0.75] transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>

                {/* Multilayer gradient for crystal clear contrast behind text & stage photo */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/45 to-black/25 pointer-events-none" />

                {/* Top Bar on Reel Card */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-300">
                  <span className="bg-page-bg/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-accent-gold text-[10px] sm:text-[11px]">
                    {featuredReel.badge}
                  </span>
                  <span className="text-zinc-400 font-medium text-[10px] sm:text-[11px]">
                    {featuredReel.location}
                  </span>
                </div>

                {/* Play Button Overlay - naturally separated in flex flow so it never collides with text */}
                <div className="relative z-10 my-auto py-4 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-accent-gold transition-all duration-300">
                    <Play className="w-5 h-5 sm:w-7 sm:h-7 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Bar & Description */}
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="max-w-2xl">
                    <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-gold mb-1 sm:mb-1.5">
                      {featuredReel.subheading}
                    </div>
                    <h3 className="font-sans font-bold text-[20px] sm:text-[28px] md:text-[34px] text-white leading-tight">
                      {featuredReel.title}
                    </h3>
                    <p className="mt-1 sm:mt-2 text-[12px] sm:text-[14px] leading-relaxed text-zinc-300 font-normal line-clamp-2 sm:line-clamp-none">
                      {featuredReel.description}
                    </p>
                  </div>

                  <div className="hidden sm:block shrink-0">
                    <span
                      aria-hidden="true"
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-accent-gold text-[11px] font-bold tracking-[0.14em] uppercase transition-all duration-200 shadow-xl"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play Reel</span>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Asymmetric 1 Up 1 Down Horizontal Scrolling Banner */}
        <ScrollReveal delay={0.2}>
          <div className="relative mt-12 -mx-6 sm:-mx-10 md:-mx-14">
            {/* Top Bar for Banner */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-accent-gold" />
                <span>Filmography &amp; Stage Performance</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Hover to pause</span>
              </div>
            </div>

            {/* Left & Right Gradient Fade Masks */}
            <div
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-linear-to-r from-page-bg via-page-bg/90 to-transparent z-20"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-linear-to-l from-page-bg via-page-bg/90 to-transparent z-20"
              aria-hidden="true"
            />

            {/* Scrolling Track Container with Soft Deceleration Hover */}
            <div
              className="overflow-hidden pt-4 pb-12 cursor-default"
              onMouseEnter={() => {
                isHoveredRef.current = true;
              }}
              onMouseLeave={() => {
                isHoveredRef.current = false;
              }}
              onTouchStart={() => {
                isHoveredRef.current = true;
              }}
              onTouchEnd={() => {
                isHoveredRef.current = false;
              }}
            >
              <div
                ref={trackRef}
                className="flex gap-6 items-center will-change-transform"
                style={{ width: 'max-content' }}
              >
                {marqueeItems.map((credit, idx) => {
                  const isOffset = idx % 2 === 1;
                  return (
                    <div
                      key={`${credit.id}-${idx}`}
                      className={`w-75 sm:w-87.5 md:w-92.5 h-55 sm:h-58.75 shrink-0 p-6 sm:p-7 rounded-2xl bg-[#090f11] border border-white/15 hover:border-accent-gold/60 hover:bg-page-bg-alt transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-accent-gold/10 cursor-default ${
                        isOffset
                          ? 'translate-y-6 sm:translate-y-8'
                          : 'translate-y-0 sm:-translate-y-2'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-accent-gold">
                            {credit.category}
                          </span>
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/10">
                            {credit.accoladeOrEpisodes}
                          </span>
                        </div>

                        <h4 className="font-sans font-bold text-[19px] sm:text-[21px] text-white group-hover:text-accent-gold transition-colors leading-snug mb-2 line-clamp-1">
                          {credit.imdbUrl ? (
                            <a
                              href={credit.imdbUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 hover:underline"
                            >
                              <span>{credit.title}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 text-accent-gold transition-opacity" />
                            </a>
                          ) : (
                            credit.title
                          )}
                        </h4>
                        <p className="text-[13px] leading-relaxed text-zinc-400 font-normal line-clamp-2">
                          {credit.details}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 text-[11px] font-medium tracking-[0.14em] uppercase text-zinc-400 group-hover:text-zinc-400 transition-colors flex items-center justify-between">
                        <span>{credit.networkOrStudio}</span>
                        {credit.imdbUrl ? (
                          <a
                            href={credit.imdbUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-400 hover:text-accent-gold transition-colors"
                            aria-label={`View ${credit.title} on IMDb`}
                            title={`View ${credit.title} on IMDb`}
                          >
                            <span>IMDb</span>
                            <ArrowUpRight className="w-3 h-3 text-accent-gold" />
                          </a>
                        ) : (
                          <span className="text-accent-gold/40 group-hover:text-accent-gold text-[11px] transition-colors">
                            ✦
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
