import React, { useState, lazy, Suspense, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';

// Page content is rendered into the production HTML at build time. Only optional
// interactions and decoration may load lazily; scrolling never fetches content.
import { BiographySection } from './components/BiographySection';
import { WorksSection } from './components/WorksSection';
import { CoachingSection } from './components/CoachingSection';
import { InquiriesSection } from './components/InquiriesSection';
import { Footer } from './components/Footer';

const SpotlightCursor = lazy(() =>
  import('./components/SpotlightCursor').then(m => ({ default: m.SpotlightCursor })),
);

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
        <div id="biography">
          <BiographySection />
        </div>

        {/* Selected Works & Reel */}
        <div id="works">
          <WorksSection />
        </div>

        {/* Coaching & 1-1 Sessions */}
        <div id="coaching">
          <CoachingSection onSelectModule={handleSelectModule} />
        </div>

        {/* Inquiries & Booking Form */}
        <div id="inquiries">
          <InquiriesSection preselectedObjective={preselectedObjective} />
        </div>
      </main>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
