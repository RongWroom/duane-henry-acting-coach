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

export default function App() {
  const [reelModalOpen, setReelModalOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [preselectedObjective, setPreselectedObjective] = useState<string>(
    'Scene Study & Intensive Monologues'
  );

  const handleExploreMasterclass = () => {
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

  return (
    <div className="relative min-h-screen bg-[#fdf9f3] text-[#1A1715] font-sans selection:bg-[#DDD5C7] selection:text-[#1A1715]">
      {/* Editorial Navigation Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main>
        {/* Section 01: The Hero ("The Craft") */}
        <HeroSection onExploreMasterclass={handleExploreMasterclass} />

        {/* Section 02: Biography */}
        <BiographySection />

        {/* Section 03: Selected Works & Filmography */}
        <WorksSection onWatchReel={() => setReelModalOpen(true)} />

        {/* Section 04: Mentorship & Studio */}
        <CoachingSection onSelectModule={handleSelectModule} />

        {/* Section 05: Inquiries & Application Form */}
        <InquiriesSection preselectedObjective={preselectedObjective} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Reel Modal */}
      <ReelModal isOpen={reelModalOpen} onClose={() => setReelModalOpen(false)} />

      {/* Interactive Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        preselectedObjective={preselectedObjective}
      />
    </div>
  );
}
