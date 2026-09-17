import React, { useEffect, useRef, useState, lazy, Suspense, type ReactNode } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ErrorBoundary } from './components/ErrorBoundary';

// Below-the-fold sections load as they approach the viewport.
const BiographySection = lazy(() =>
  import('./components/BiographySection').then((module) => ({ default: module.BiographySection })),
);
const WorksSection = lazy(() =>
  import('./components/WorksSection').then((module) => ({ default: module.WorksSection })),
);
const CoachingSection = lazy(() =>
  import('./components/CoachingSection').then((module) => ({ default: module.CoachingSection })),
);
const InquiriesSection = lazy(() =>
  import('./components/InquiriesSection').then((module) => ({ default: module.InquiriesSection })),
);
const Footer = lazy(() => import('./components/Footer').then((module) => ({ default: module.Footer })));

const SpotlightCursor = lazy(() =>
  import('./components/SpotlightCursor').then((module) => ({ default: module.SpotlightCursor })),
);

interface DeferredSectionProps {
  children: ReactNode;
  id?: string;
  minHeight: string;
}

const DeferredSection: React.FC<DeferredSectionProps> = ({ children, id, minHeight }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || shouldRender) return;

    if (id && window.location.hash === `#${id}`) {
      setShouldRender(true);
      container.scrollIntoView();
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin: '500px 0px' },
    );
    observer.observe(container);

    return () => observer.disconnect();
  }, [id, shouldRender]);

  return (
    <div ref={containerRef} id={id} style={{ minHeight }}>
      {shouldRender && (
        <ErrorBoundary>
          <Suspense fallback={null}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
};

export default function App() {
  const [preselectedObjective, setPreselectedObjective] = useState<string>(
    'Scene Study & Monologues'
  );
  // Defer the decorative spotlight cursor until after initial render so its
  // motion/spring setup and event listeners don't contribute to the main-thread
  // long task during first paint.
  const [showCursor, setShowCursor] = useState(false);
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const schedule = (cb: () => void) => {
      const ric = (window as { requestIdleCallback?: (cb: () => void) => void }).requestIdleCallback;
      if (ric) ric(cb);
      else setTimeout(cb, 200);
    };
    schedule(() => setShowCursor(true));
  }, []);

  const handleScrollToInquiries = () => {
    const inquiriesEl = document.getElementById('inquiries');
    if (inquiriesEl) {
      inquiriesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectModule = (moduleTitle: string) => {
    setPreselectedObjective(moduleTitle);
    handleScrollToInquiries();
  };

  return (
    <div className="relative min-h-screen bg-page-bg text-white font-sans selection:bg-accent-gold selection:text-black">
      {/* Circular Inverting Mouse Follower (deferred to avoid main-thread long task) */}
      {showCursor && (
        <Suspense fallback={null}>
          <SpotlightCursor />
        </Suspense>
      )}

      {/* Navigation Header */}
      <Header onBookSession={handleScrollToInquiries} />

      {/* Main Sections with Unified Flow */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Biography */}
        <DeferredSection id="biography" minHeight="900px">
          <BiographySection />
        </DeferredSection>

        {/* Selected Works & Reel */}
        <DeferredSection id="works" minHeight="1200px">
          <WorksSection />
        </DeferredSection>

        {/* Coaching & 1-1 Sessions */}
        <DeferredSection id="coaching" minHeight="900px">
          <CoachingSection onSelectModule={handleSelectModule} />
        </DeferredSection>

        {/* Inquiries & Booking Form */}
        <DeferredSection id="inquiries" minHeight="1100px">
          <InquiriesSection preselectedObjective={preselectedObjective} />
        </DeferredSection>
      </main>

      {/* Footer */}
      <DeferredSection id="footer" minHeight="500px">
        <Footer />
      </DeferredSection>
    </div>
  );
}
