import React, { useState } from 'react';
import { PRESETS } from './data/mockData';
import ClientBar from './components/ClientBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ConstituentColleges from './components/ConstituentColleges';
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
  const [currentPresetKey, setCurrentPresetKey] = useState('ggchmr'); // Default to Gautam Group of Colleges Hamirpur!
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

  const currentPreset = PRESETS[currentPresetKey] || PRESETS.ggchmr;

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
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      
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
        
        {/* 3. Hero Section (21st.dev / Dribbble Fusion tailored to GGC Hamirpur) */}
        <HeroSection
          preset={currentPreset}
          onOpenTour={() => setIsTourOpen(true)}
          onScrollToPrograms={handleScrollToPrograms}
          onOpenApply={handleOpenApply}
        />

        {/* 4. The 6 Constituent Colleges of Gautam Group */}
        <ConstituentColleges
          onOpenApply={handleOpenApply}
        />

        {/* 5. Unified Digital Services & E-Governance Hub (HPTU, HPU & AMRU Affiliated) */}
        <DigitalServicesHub
          onOpenServiceModal={handleOpenServiceModal}
        />

        {/* 6. Interactive Program & Major Finder */}
        <ProgramFinder
          onOpenApply={handleOpenApply}
        />

        {/* 7. Institutional Bento Grid (Why Choose GGC Hamirpur) */}
        <StatsBento
          preset={currentPreset}
          onOpenApply={handleOpenApply}
        />

        {/* 8. Campus Experience & Facilities Showcase (Labs, Hospital Simulations, Hostels) */}
        <CampusExperience
          onOpenTour={() => setIsTourOpen(true)}
        />

        {/* 9. Interactive Fee Structure & HP State Scholarship Estimator */}
        <TuitionEstimator
          onOpenApply={handleOpenApply}
        />

        {/* 10. Upcoming Events & Academic Calendar */}
        <UpcomingEvents
          onOpenApply={handleOpenApply}
        />

        {/* 11. Alumni Success & Placements (Sun Pharma, Fortis, Wipro) */}
        <AlumniStories
          onOpenApply={handleOpenApply}
        />

        {/* 12. High-Conversion Enrollment Call to Action */}
        <ApplicationCTA
          preset={currentPreset}
          onOpenApply={handleOpenApply}
        />

      </main>

      {/* 13. Comprehensive Collegiate Footer */}
      <Footer
        preset={currentPreset}
        onOpenApply={handleOpenApply}
      />

      {/* 14. Interactive Virtual Tour 360 Modal */}
      <VirtualTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onOpenApply={handleOpenApply}
      />

      {/* 15. Interactive Multi-mode Admissions Modal */}
      <ApplyModal
        isOpen={applyModal.isOpen}
        onClose={handleCloseApply}
        mode={applyModal.mode}
        contextData={applyModal.contextData}
        preset={currentPreset}
      />

      {/* 16. GGC / HPTU Digital Services Interactive Modal */}
      <HimtuServicesModal
        isOpen={serviceModal.isOpen}
        onClose={handleCloseServiceModal}
        modalType={serviceModal.modalType}
        initialData={serviceModal.initialData}
      />

    </div>
  );
}
