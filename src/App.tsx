import React, { useState, lazy, Suspense, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SpotlightCursor } from './components/SpotlightCursor';

// Lazy-loaded below-the-fold sections to reduce unused JavaScript on initial paint.
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
      {showCursor && <SpotlightCursor />}

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
        <Suspense fallback={null}>
          <BiographySection />
        </Suspense>

        {/* Selected Works & Reel */}
        <Suspense fallback={null}>
          <WorksSection onWatchReel={handleOpenReel} />
        </Suspense>

        {/* Coaching & 1-1 Sessions */}
        <Suspense fallback={null}>
          <CoachingSection onSelectModule={handleSelectModule} />
        </Suspense>

        {/* Inquiries & Booking Form */}
        <Suspense fallback={null}>
          <InquiriesSection preselectedObjective={preselectedObjective} />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Interactive Reel Modal — only rendered when open so the chunk defers */}
      {reelModalOpen && (
        <Suspense fallback={null}>
          <ReelModal isOpen={reelModalOpen} onClose={() => setReelModalOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
