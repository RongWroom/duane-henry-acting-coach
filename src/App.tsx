import React, { useState, lazy, Suspense, useEffect, useRef, type ReactNode } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';

// Lazy-loaded below-the-fold sections to reduce unused JavaScript on initial paint.
const SpotlightCursor = lazy(() =>
  import('./components/SpotlightCursor').then(m => ({ default: m.SpotlightCursor })),
);
const BiographySection = lazy(() =>
  import('./components/BiographySection').then(m => ({ default: m.BiographySection })),
);
const WorksSection = lazy(() =>
  import('./components/WorksSection').then(m => ({ default: m.WorksSection })),
);
const CoachingSection = lazy(() =>
  import('./components/CoachingSection').then(m => ({ default: m.CoachingSection })),
);
const InquiriesSection = lazy(() =>
  import('./components/InquiriesSection').then(m => ({ default: m.InquiriesSection })),
);
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
// ReelModal is conditionally rendered so its chunk only loads when opened.
const ReelModal = lazy(() => import('./components/ReelModal').then(m => ({ default: m.ReelModal })));

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
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: '500px 0px' },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [id, shouldRender]);

  return (
    <div ref={containerRef} id={id} style={{ minHeight }}>
      {shouldRender && <Suspense fallback={null}>{children}</Suspense>}
    </div>
  );
};

export default function App() {
  const [reelModalOpen, setReelModalOpen] = useState(false);
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

  const handleExploreCoaching = () => {
    const el = document.getElementById('coaching');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const handleOpenReel = () => {
    const el = document.getElementById('works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setReelModalOpen(true);
    }
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
        <HeroSection
          onExploreCoaching={handleExploreCoaching}
          onWatchReel={handleOpenReel}
          onBookSession={handleScrollToInquiries}
        />

        {/* Biography */}
        <DeferredSection id="biography" minHeight="900px">
          <BiographySection />
        </DeferredSection>

        {/* Selected Works & Reel */}
        <DeferredSection id="works" minHeight="1200px">
          <WorksSection onWatchReel={handleOpenReel} />
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
      <DeferredSection minHeight="500px">
        <Footer />
      </DeferredSection>

      {/* Interactive Reel Modal — only rendered when open so the chunk defers */}
      {reelModalOpen && (
        <Suspense fallback={null}>
          <ReelModal isOpen={reelModalOpen} onClose={() => setReelModalOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
