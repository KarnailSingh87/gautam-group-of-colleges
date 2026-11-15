import React, { useState, useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import TopUtilityBar from './components/TopUtilityBar';
import Navbar from './components/Navbar';
import NoticeBoardTicker from './components/NoticeBoardTicker';
import HeroSection from './components/HeroSection';
import ConstituentColleges from './components/ConstituentColleges';
import LeadershipDesk from './components/LeadershipDesk';
import DigitalServicesHub from './components/DigitalServicesHub';
import ProgramFinder from './components/ProgramFinder';
import StatsBento from './components/StatsBento';
import CampusExperience from './components/CampusExperience';
import TuitionEstimator from './components/TuitionEstimator';
import UpcomingEvents from './components/UpcomingEvents';
import AlumniStories from './components/AlumniStories';
import ApplicationCTA from './components/ApplicationCTA';
import Footer from './components/Footer';

// Modals
import VirtualTourModal from './components/VirtualTourModal';
import ApplyModal from './components/ApplyModal';
import HimtuServicesModal from './components/HimtuServicesModal';
import StudentPortalModal from './components/StudentPortalModal';

// Dedicated Blueprint Pages
import AboutPage from './pages/AboutPage';
import AffiliationsPage from './pages/AffiliationsPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import FacultyPage from './pages/FacultyPage';
import FacilitiesPage from './pages/FacilitiesPage';
import StudentLifePlacementsPage from './pages/StudentLifePlacementsPage';
import CompliancePage from './pages/CompliancePage';
import ContactPage from './pages/ContactPage';

import { Home, ChevronRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
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

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('programs');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('programs');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Human-readable titles for breadcrumb
  const pageTitles = {
    home: 'Home',
    about: 'About Us & Governance',
    affiliations: 'Affiliations & Approvals',
    academics: 'Academics, Departments & Syllabi',
    admissions: 'Admissions & Fee Structure',
    faculty: 'Faculty & Staff Directory',
    facilities: 'Infrastructure, Central Library & Health',
    placements: 'Student Life, Placements & Research (IQAC)',
    compliance: 'Mandatory Disclosures & Anti-Ragging',
    contact: 'Contact & Campus Location'
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
        
        {/* 1. Official Institutional Utility Header */}
        <TopUtilityBar
          onOpenPortal={handleOpenServiceModal}
        />

        {/* 2. Main Institutional Navigation Bar */}
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenApply={handleOpenApply}
          onOpenTour={() => setIsTourOpen(true)}
          onOpenPortalModal={() => setIsPortalModalOpen(true)}
          onScrollToPrograms={handleScrollToPrograms}
        />

        {/* 3. Live Notification & Marquee Ticker (NITH / HPTU Template Function) */}
        {currentPage === 'home' && (
          <NoticeBoardTicker
            onOpenServiceModal={handleOpenServiceModal}
            onOpenApply={handleOpenApply}
          />
        )}

        {/* Breadcrumb Navigation when browsing sub-pages */}
        {currentPage !== 'home' && (
          <div className="bg-white border-b border-slate-200/80 py-2.5 px-4 sm:px-6 lg:px-8 shadow-xs">
            <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-500">
                <button
                  onClick={() => handleNavigate('home')}
                  className="hover:text-indigo-600 transition flex items-center gap-1 font-bold"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                <span className="text-slate-900 font-semibold">{pageTitles[currentPage] || 'Section'}</span>
              </div>
              <button
                onClick={() => handleNavigate('home')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        )}

        {/* Main Content Router */}
        <main className="flex-1">
          {currentPage === 'home' && (
            <>
              {/* Grand Hero Section (Shoolini University High-Conversion + NITH Quick Dock) */}
              <HeroSection
                onOpenTour={() => setIsTourOpen(true)}
                onScrollToPrograms={handleScrollToPrograms}
                onOpenApply={handleOpenApply}
                onOpenPortal={handleOpenServiceModal}
              />

              {/* The 6 Constituent Colleges of Gautam Group */}
              <ConstituentColleges
                onOpenApply={handleOpenApply}
              />

              {/* Leadership Desk: Director & Principal's Message (NITH / IIT Mandi / Shoolini Style) */}
              <LeadershipDesk
                onOpenApply={handleOpenApply}
              />

              {/* Unified Digital Services & E-Governance Hub (HPTU, HPU & AMRU Affiliated) */}
              <DigitalServicesHub
                onOpenServiceModal={handleOpenServiceModal}
              />

              {/* Interactive Program & Major Finder */}
              <ProgramFinder
                onOpenApply={handleOpenApply}
              />

              {/* Institutional Bento Grid (Why Choose GGC Hamirpur) */}
              <StatsBento
                onOpenApply={handleOpenApply}
              />

              {/* Campus Experience Showcase */}
              <CampusExperience
                onOpenTour={() => setIsTourOpen(true)}
              />

              {/* Interactive Fee Estimator */}
              <TuitionEstimator
                onOpenApply={handleOpenApply}
              />

              {/* Upcoming Events */}
              <UpcomingEvents
                onOpenApply={handleOpenApply}
              />

              {/* Alumni Stories */}
              <AlumniStories
                onOpenApply={handleOpenApply}
              />

              {/* Application Call to Action */}
              <ApplicationCTA
                onOpenApply={handleOpenApply}
              />
            </>
          )}

          {currentPage === 'about' && (
            <AboutPage 
              onOpenApply={handleOpenApply} 
              onNavigate={handleNavigate} 
            />
          )}

          {currentPage === 'affiliations' && (
            <AffiliationsPage 
              onOpenApply={handleOpenApply} 
              onNavigate={handleNavigate} 
            />
          )}

          {currentPage === 'academics' && (
            <AcademicsPage 
              onOpenApply={handleOpenApply} 
              onOpenPortal={handleOpenServiceModal} 
            />
          )}

          {currentPage === 'admissions' && (
            <AdmissionsPage 
              onOpenApply={handleOpenApply} 
            />
          )}

          {currentPage === 'faculty' && (
            <FacultyPage 
              onOpenApply={handleOpenApply} 
            />
          )}

          {currentPage === 'facilities' && (
            <FacilitiesPage 
              onOpenApply={handleOpenApply} 
              onOpenTour={() => setIsTourOpen(true)} 
            />
          )}

          {currentPage === 'placements' && (
            <StudentLifePlacementsPage 
              onOpenApply={handleOpenApply} 
            />
          )}

          {currentPage === 'compliance' && (
            <CompliancePage />
          )}

          {currentPage === 'contact' && (
            <ContactPage 
              onOpenApply={handleOpenApply} 
            />
          )}
        </main>

        {/* Official Collegiate Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenApply={handleOpenApply}
          onOpenPortalModal={() => setIsPortalModalOpen(true)}
        />

        {/* Modals */}
        <VirtualTourModal
          isOpen={isTourOpen}
          onClose={() => setIsTourOpen(false)}
          onOpenApply={handleOpenApply}
        />

        <ApplyModal
          isOpen={applyModal.isOpen}
          onClose={handleCloseApply}
          mode={applyModal.mode}
          contextData={applyModal.contextData}
        />

        <HimtuServicesModal
          isOpen={serviceModal.isOpen}
          onClose={handleCloseServiceModal}
          modalType={serviceModal.modalType}
          initialData={serviceModal.initialData}
        />

        <StudentPortalModal
          isOpen={isPortalModalOpen}
          onClose={() => setIsPortalModalOpen(false)}
        />

      </div>
    </ErrorBoundary>
  );
}
