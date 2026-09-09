import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BiographySection } from './components/BiographySection';
import { WorksSection } from './components/WorksSection';
import { CoachingSection } from './components/CoachingSection';
import { InquiriesSection } from './components/InquiriesSection';
import { Footer } from './components/Footer';
import { ReelModal } from './components/ReelModal';
import { SpotlightCursor } from './components/SpotlightCursor';

export default function App() {
  const [reelModalOpen, setReelModalOpen] = useState(false);
  const [preselectedObjective, setPreselectedObjective] = useState<string>(
    'Scene Study & Monologues'
  );

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
    <div className="relative min-h-screen bg-[#070c0d] text-white font-sans selection:bg-[#c5a059] selection:text-black">
      {/* Circular Inverting Mouse Follower */}
      <SpotlightCursor />

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
        <BiographySection />

        {/* Selected Works & Reel */}
        <WorksSection onWatchReel={handleOpenReel} />

        {/* Coaching & 1-1 Sessions */}
        <CoachingSection onSelectModule={handleSelectModule} />

        {/* Inquiries & Booking Form */}
        <InquiriesSection preselectedObjective={preselectedObjective} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Reel Modal */}
      <ReelModal isOpen={reelModalOpen} onClose={() => setReelModalOpen(false)} />
    </div>
  );
}
