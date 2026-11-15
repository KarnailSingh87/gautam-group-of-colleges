import React, { useState } from 'react';
import { PRESETS } from './data/mockData';
import ClientBar from './components/ClientBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProgramFinder from './components/ProgramFinder';
import StatsBento from './components/StatsBento';
import CampusExperience from './components/CampusExperience';
import TuitionEstimator from './components/TuitionEstimator';
import UpcomingEvents from './components/UpcomingEvents';
import AlumniStories from './components/AlumniStories';
import ApplicationCTA from './components/ApplicationCTA';
import Footer from './components/Footer';
import VirtualTourModal from './components/VirtualTourModal';
import ApplyModal from './components/ApplyModal';

export default function App() {
  const [currentPresetKey, setCurrentPresetKey] = useState('aurelius');
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [applyModal, setApplyModal] = useState({
    isOpen: false,
    mode: 'apply', // 'apply', 'request-info', 'visit', 'tuition-lock', 'event-rsvp', 'advising', 'catalog'
    contextData: null
  });

  const currentPreset = PRESETS[currentPresetKey] || PRESETS.aurelius;

  const handleOpenApply = (mode = 'apply', contextData = null) => {
    setApplyModal({
      isOpen: true,
      mode,
      contextData
    });
  };

  const handleCloseApply = () => {
    setApplyModal(prev => ({ ...prev, isOpen: false }));
  };

  const handleScrollToPrograms = () => {
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. Client Presentation Mode Bar & Pitch Deck Drawer */}
      <ClientBar
        currentPreset={currentPreset}
        onSelectPreset={(key) => setCurrentPresetKey(key)}
        presets={PRESETS}
        isPitchOpen={isPitchOpen}
        setIsPitchOpen={setIsPitchOpen}
        onOpenApply={handleOpenApply}
      />

      {/* 2. Institutional Navigation Bar */}
      <Navbar
        preset={currentPreset}
        onOpenApply={handleOpenApply}
        onOpenTour={() => setIsTourOpen(true)}
        onScrollToPrograms={handleScrollToPrograms}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        
        {/* 3. Hero Section (21st.dev / Dribbble Fusion) */}
        <HeroSection
          preset={currentPreset}
          onOpenTour={() => setIsTourOpen(true)}
          onScrollToPrograms={handleScrollToPrograms}
          onOpenApply={handleOpenApply}
        />

        {/* 4. Interactive Program & Major Finder */}
        <ProgramFinder
          onOpenApply={handleOpenApply}
        />

        {/* 5. Institutional Bento Grid (Why Choose Us) */}
        <StatsBento
          preset={currentPreset}
          onOpenApply={handleOpenApply}
        />

        {/* 6. Campus Experience & 360 Facilities Showcase */}
        <CampusExperience
          onOpenTour={() => setIsTourOpen(true)}
        />

        {/* 7. Interactive Tuition & Merit Scholarship Estimator */}
        <TuitionEstimator
          onOpenApply={handleOpenApply}
        />

        {/* 8. Upcoming Events & Open Days Calendar */}
        <UpcomingEvents
          onOpenApply={handleOpenApply}
        />

        {/* 9. Alumni Success & Career Placements */}
        <AlumniStories
          onOpenApply={handleOpenApply}
        />

        {/* 10. High-Conversion Enrollment Call to Action */}
        <ApplicationCTA
          preset={currentPreset}
          onOpenApply={handleOpenApply}
        />

      </main>

      {/* 11. Comprehensive Collegiate Footer */}
      <Footer
        preset={currentPreset}
        onOpenApply={handleOpenApply}
      />

      {/* 12. Interactive Virtual Tour 360 Modal */}
      <VirtualTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onOpenApply={handleOpenApply}
      />

      {/* 13. Interactive Multi-mode Admissions Modal */}
      <ApplyModal
        isOpen={applyModal.isOpen}
        onClose={handleCloseApply}
        mode={applyModal.mode}
        contextData={applyModal.contextData}
        preset={currentPreset}
      />

    </div>
  );
}
