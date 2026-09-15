import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

// Content is always visible, including before hydration and if observation fails.
// On desktop, movement is a progressive enhancement; it never controls opacity.
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.65,
  yOffset = 28,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window) || !element.animate) return;
    const media = window.matchMedia('(prefers-reduced-motion: no-preference) and (pointer: fine)');
    if (!media.matches) return;

    let animation: Animation | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (media.matches) {
        animation = element.animate(
          [{ transform: `translateY(${yOffset}px)` }, { transform: 'translateY(0)' }],
          { duration: duration * 1000, delay: delay * 1000, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
        );
      }
      observer.disconnect();
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
      animation?.cancel();
    };
  }, [delay, duration, yOffset]);

  return <div ref={ref} className={className}>{children}</div>;
};
