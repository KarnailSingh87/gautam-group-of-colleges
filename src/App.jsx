import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import ErrorBoundary from './components/ErrorBoundary';

// HPTU (himtu.ac.in) Style Signature Components
import HimtuHeader from './components/HimtuHeader';
import HimtuWhatsNew from './components/HimtuWhatsNew';
import HimtuHeroSection from './components/HimtuHeroSection';
import HimtuDignitariesEvents from './components/HimtuDignitariesEvents';
import HimtuMediaPrograms from './components/HimtuMediaPrograms';
import HimtuQuickAccess from './components/HimtuQuickAccess';
import HimtuSchoolsGrid from './components/HimtuSchoolsGrid';
import HimtuSocialFeed from './components/HimtuSocialFeed';
import HimtuStatsLogos from './components/HimtuStatsLogos';
import HimtuFooter from './components/HimtuFooter';

// Collegiate Core Modules
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

// Modals & Floating Utilities
import VirtualTourModal from './components/VirtualTourModal';
import ApplyModal from './components/ApplyModal';
import HimtuServicesModal from './components/HimtuServicesModal';
import StudentPortalModal from './components/StudentPortalModal';
import AdminCMSModal from './components/AdminCMSModal';

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
import GalleryPage from './pages/GalleryPage';
import DownloadsPage from './pages/DownloadsPage';
import AlumniPage from './pages/AlumniPage';

import { Home, ChevronRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [isCMSOpen, setIsCMSOpen] = useState(false);

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
    affiliations: 'Affiliations & Statutory Approvals',
    academics: 'Academics, Departments & Syllabi',
    admissions: 'Admissions, Eligibility & Fees',
    faculty: 'Faculty & Administration',
    facilities: 'Infrastructure, Central Library & Health Facilities',
    placements: 'Student Life, Placements & Research (IQAC)',
    compliance: 'Mandatory Disclosures (Anti-Ragging, ICC, RTI)',
    gallery: 'Photo & Video Gallery',
    downloads: 'Official Downloads & Prospectus',
    alumni: 'Alumni Association Network',
    contact: 'Contact & Campus Location'
  };

  return (
    <LanguageProvider>
      <ErrorBoundary>
        <div id="main-content" className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#1e3a8a] selection:text-amber-300">
          
          {/* 1. Official HPTU (himtu.ac.in) Header with Top Bar, Dual Branding & Primary Nav */}
          <HimtuHeader
            currentPage={currentPage}
            onNavigate={handleNavigate}
            onOpenApply={handleOpenApply}
            onOpenPortalModal={() => setIsPortalModalOpen(true)}
            onOpenCMSModal={() => setIsCMSOpen(true)}
            onOpenResults={() => handleOpenServiceModal('results')}
          />

          {/* 2. Official HPTU "What's New ▶" Ticker Marquee */}
          {currentPage === 'home' && (
            <HimtuWhatsNew
              onOpenApply={handleOpenApply}
              onOpenNoticeModal={() => handleOpenServiceModal('otr')}
            />
          )}

          {/* Breadcrumb Navigation when browsing sub-pages */}
          {currentPage !== 'home' && (
            <div className="bg-white border-b border-slate-200/90 py-2.5 px-4 sm:px-6 lg:px-8 shadow-xs">
              <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-500">
                  <button
                    onClick={() => handleNavigate('home')}
                    className="hover:text-blue-900 transition flex items-center gap-1 font-bold"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>Home</span>
                  </button>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                  <span className="text-slate-900 font-semibold">{pageTitles[currentPage] || 'Section'}</span>
                </div>
                <button
                  onClick={() => handleNavigate('home')}
                  className="text-xs font-bold text-[#ea580c] hover:underline transition"
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
                {/* 3. Official HPTU Hero Section (Image Slider Left + "Notifications" Card Right) */}
                <HimtuHeroSection
                  onOpenApply={handleOpenApply}
                  onOpenResults={() => handleOpenServiceModal('results')}
                  onOpenTour={() => setIsTourOpen(true)}
                  onOpenPortal={() => setIsPortalModalOpen(true)}
                />

                {/* 4. Dignitaries & Tabbed Academic Events Bulletin (HPTU Dignitaries layout) */}
                <HimtuDignitariesEvents
                  onOpenApply={handleOpenApply}
                  onOpenResults={() => handleOpenServiceModal('results')}
                  onNavigate={handleNavigate}
                />

                {/* 5. GGC Media (Life @ GGC, Newsletter, Latest News) + Most Popular Degrees Search */}
                <HimtuMediaPrograms
                  onOpenApply={handleOpenApply}
                  onNavigate={handleNavigate}
                />

                {/* 6. Quick Access 8-Card Purple/Navy Grid */}
                <HimtuQuickAccess
                  onNavigate={handleNavigate}
                  onOpenApply={handleOpenApply}
                  onOpenPortal={() => setIsPortalModalOpen(true)}
                  onOpenResults={() => handleOpenServiceModal('results')}
                />

                {/* 7. USS: University School of Studies / Constituent Colleges with Carousel */}
                <HimtuSchoolsGrid
                  onNavigate={handleNavigate}
                  onOpenApply={handleOpenApply}
                />

                {/* 8. Social Media Engagements 4-Column Live Feed (FB, YT, X, IG) */}
                <HimtuSocialFeed />

                {/* 9. Key Institutional Stat Counters & Apex Statutory Approvals Slider */}
                <HimtuStatsLogos />

                {/* Supplementary Academic & Student Tools */}
                <ProgramFinder
                  onOpenApply={handleOpenApply}
                />

                <LeadershipDesk
                  onOpenApply={handleOpenApply}
                />

                <TuitionEstimator
                  onOpenApply={handleOpenApply}
                />

                <CampusExperience
                  onOpenTour={() => setIsTourOpen(true)}
                />

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

            {currentPage === 'gallery' && (
              <GalleryPage 
                onOpenApply={handleOpenApply} 
              />
            )}

            {currentPage === 'downloads' && (
              <DownloadsPage 
                onOpenApply={handleOpenApply} 
              />
            )}

            {currentPage === 'alumni' && (
              <AlumniPage 
                onOpenApply={handleOpenApply} 
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage 
                onOpenApply={handleOpenApply} 
              />
            )}
          </main>

          {/* Official HPTU Dark Footer */}
          <HimtuFooter
            onNavigate={handleNavigate}
            onOpenCMSModal={() => setIsCMSOpen(true)}
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

          <AdminCMSModal
            isOpen={isCMSOpen}
            onClose={() => setIsCMSOpen(false)}
          />

        </div>
      </ErrorBoundary>
    </LanguageProvider>
  );
}
