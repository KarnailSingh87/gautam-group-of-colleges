import React, { useState } from 'react';
import { PRESETS } from './data/mockData';
import ClientBar from './components/ClientBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DigitalServicesHub from './components/DigitalServicesHub';
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
import HimtuServicesModal from './components/HimtuServicesModal';

export default function App() {
  const [currentPresetKey, setCurrentPresetKey] = useState('himtu'); // Default to HIMTU reference!
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [applyModal, setApplyModal] = useState({
    isOpen: false,
    mode: 'apply',
    contextData: null
  });
  const [serviceModal, setServiceModal] = useState({
    isOpen: false,
    modalType: 'otr',
    initialData: null
  });

  const currentPreset = PRESETS[currentPresetKey] || PRESETS.himtu;

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

  const handleOpenServiceModal = (modalType = 'otr', initialData = null) => {
    setServiceModal({
      isOpen: true,
      modalType,
      initialData
    });
  };

  const handleCloseServiceModal = () => {
    setServiceModal(prev => ({ ...prev, isOpen: false }));
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

        {/* 4. Unified Digital Services & E-Governance Hub (himtu.ac.in Reference) */}
        <DigitalServicesHub
          onOpenServiceModal={handleOpenServiceModal}
        />

        {/* 5. Interactive Program & Major Finder */}
        <ProgramFinder
          onOpenApply={handleOpenApply}
        />

        {/* 6. Institutional Bento Grid (Why Choose Us) */}
        <StatsBento
          preset={currentPreset}
          onOpenApply={handleOpenApply}
        />

        {/* 7. Campus Experience & 360 Facilities Showcase */}
        <CampusExperience
          onOpenTour={() => setIsTourOpen(true)}
        />

        {/* 8. Interactive Tuition & Merit Scholarship Estimator */}
        <TuitionEstimator
          onOpenApply={handleOpenApply}
        />

        {/* 9. Upcoming Events & Open Days Calendar */}
        <UpcomingEvents
          onOpenApply={handleOpenApply}
        />

        {/* 10. Alumni Success & Career Placements */}
        <AlumniStories
          onOpenApply={handleOpenApply}
        />

        {/* 11. High-Conversion Enrollment Call to Action */}
        <ApplicationCTA
          preset={currentPreset}
          onOpenApply={handleOpenApply}
        />

      </main>

      {/* 12. Comprehensive Collegiate Footer */}
      <Footer
        preset={currentPreset}
        onOpenApply={handleOpenApply}
      />

      {/* 13. Interactive Virtual Tour 360 Modal */}
      <VirtualTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onOpenApply={handleOpenApply}
      />

      {/* 14. Interactive Multi-mode Admissions Modal */}
      <ApplyModal
        isOpen={applyModal.isOpen}
        onClose={handleCloseApply}
        mode={applyModal.mode}
        contextData={applyModal.contextData}
        preset={currentPreset}
      />

      {/* 15. HIMTU Digital Services Interactive Modal */}
      <HimtuServicesModal
        isOpen={serviceModal.isOpen}
        onClose={handleCloseServiceModal}
        modalType={serviceModal.modalType}
        initialData={serviceModal.initialData}
      />

    </div>
  );
}
