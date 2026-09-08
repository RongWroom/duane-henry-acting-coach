import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useReducedMotion } from 'motion/react';

interface SpotlightCursorProps {
  color?: string;
}

export const SpotlightCursor: React.FC<SpotlightCursorProps> = ({
  color = '#dfba73', // Elegant gold tone for the inverted circular spotlight
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  // Position motion values for zero-latency tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Snappy, natural spring physics that closely tracks the cursor
  const springConfig = shouldReduceMotion
    ? { damping: 50, stiffness: 1000, mass: 0.1 }
    : { damping: 30, stiffness: 500, mass: 0.2 };

  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch screens (phones / tablets)
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) {
        setIsVisible(true);
      }

      // Detect hover over interactive elements to expand the circle
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer'
        );
        setIsHovered(Boolean(interactiveEl));
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice) {
    return null;
  }

  // Sizing: 36px standard circle, expands to 68px over clickable elements
  const size = isHovered ? 68 : 36;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        width: size,
        height: size,
        backgroundColor: color,
        mixBlendMode: 'difference',
      }}
      animate={{
        width: size,
        height: size,
        scale: isClicking ? 0.85 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        width: { duration: 0.2, ease: 'easeOut' },
        height: { duration: 0.2, ease: 'easeOut' },
        scale: { duration: 0.12, ease: 'easeOut' },
        opacity: { duration: 0.15 },
      }}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
    />
  );
};
