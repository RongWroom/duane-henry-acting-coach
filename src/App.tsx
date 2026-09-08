import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BiographySection } from './components/BiographySection';
import { WorksSection } from './components/WorksSection';
import { CoachingSection } from './components/CoachingSection';
import { InquiriesSection } from './components/InquiriesSection';
import { Footer } from './components/Footer';
import { ReelModal } from './components/ReelModal';
import { ConsultationModal } from './components/ConsultationModal';
import { SpotlightCursor } from './components/SpotlightCursor';

export default function App() {
  const [reelModalOpen, setReelModalOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [preselectedObjective, setPreselectedObjective] = useState<string>(
    'Scene Study & Monologue Work'
  );

  const handleExploreCoaching = () => {
    const el = document.getElementById('coaching');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectModule = (moduleTitle: string) => {
    setPreselectedObjective(moduleTitle);
    const inquiriesEl = document.getElementById('inquiries');
    if (inquiriesEl) {
      inquiriesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = () => {
    setConsultationModalOpen(true);
  };

  const handleOpenReel = () => {
    setReelModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#070c0d] text-white font-sans selection:bg-[#c5a059] selection:text-black">
      {/* Circular Inverting Mouse Follower */}
      <SpotlightCursor />

      {/* Navigation Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Main Sections with Unified Flow */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onExploreCoaching={handleExploreCoaching}
          onWatchReel={handleOpenReel}
          onBookSession={handleOpenConsultation}
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

      {/* Interactive Session Booking Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        preselectedObjective={preselectedObjective}
      />
    </div>
  );
}
