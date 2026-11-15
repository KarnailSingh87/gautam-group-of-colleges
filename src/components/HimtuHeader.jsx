import React, { useState } from 'react';
import { 
  Search, 
  Home, 
  ChevronDown, 
  Phone, 
  Mail, 
  Volume2, 
  Menu, 
  X,
  Sparkles,
  Lock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function HimtuHeader({ 
  currentPage = 'home',
  onNavigate,
  onOpenApply,
  onOpenPortalModal,
  onOpenCMSModal,
  onOpenResults
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'about', 'admin', 'academics', 'exam', 'admissions', 'student', 'info', 'contact'
  const [fontSizeOffset, setFontSizeOffset] = useState(0);
  const { lang, setLang } = useLanguage();

  const handleNavClick = (pageId, modalTrigger = null) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    if (modalTrigger === 'results') {
      if (onOpenResults) onOpenResults('results');
    } else if (modalTrigger === 'apply') {
      if (onOpenApply) onOpenApply('apply');
    } else if (modalTrigger === 'portal') {
      if (onOpenPortalModal) onOpenPortalModal();
    } else if (pageId && onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-sans">
      
      {/* 1. TOP UTILITY BAR (Exact HPTU Style) */}
      <div className="bg-slate-100 border-b border-slate-300 text-[11px] text-slate-700 py-1 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Quick Links */}
          <div className="flex items-center gap-3">
            <button onClick={() => handleNavClick('contact')} className="hover:text-blue-900 transition font-medium">Sitemap</button>
            <span className="text-slate-300">|</span>
            <a href="tel:+919418010420" className="hover:text-blue-900 transition font-medium flex items-center gap-1">
              <span>Telephone Directory (+91-9418010420)</span>
            </a>
            <span className="text-slate-300">|</span>
            <a href="mailto:info@ggchmr.com" className="hover:text-blue-900 transition font-medium">Web Mail</a>
            <span className="text-slate-300">|</span>
            <button onClick={() => handleNavClick('about')} className="hover:text-blue-900 transition font-medium">Mile Stone</button>
            <span className="text-slate-300">|</span>
            <button onClick={onOpenPortalModal} className="hover:text-blue-900 transition font-medium flex items-center gap-1 text-blue-900 font-bold">
              <span>NAD-ABC Scheme</span>
            </button>
          </div>

          {/* Right Accessibility & Language Controls */}
          <div className="flex items-center gap-3">
            <a href="#main-content" className="hover:underline text-slate-600">Skip to main content</a>
            <span className="text-slate-300">|</span>
            
            <div className="flex items-center gap-1.5 font-bold">
              <button 
                onClick={() => setLang('en')}
                className={`hover:text-blue-900 transition ${lang === 'en' ? 'text-blue-900 underline' : 'text-slate-600'}`}
              >
                English
              </button>
              <button 
                onClick={() => setLang('hi')}
                className={`hover:text-blue-900 transition ${lang === 'hi' ? 'text-blue-900 underline' : 'text-slate-600'}`}
              >
                हिन्दी
              </button>
            </div>
            <span className="text-slate-300">|</span>

            {/* Font Size Adjusters */}
            <div className="flex items-center gap-1 text-xs font-bold text-slate-600">
              <button onClick={() => setFontSizeOffset(-1)} className="hover:text-blue-900 px-1">A-</button>
              <button onClick={() => setFontSizeOffset(0)} className="hover:text-blue-900 px-1">A</button>
              <button onClick={() => setFontSizeOffset(1)} className="hover:text-blue-900 px-1">A+</button>
            </div>
            <span className="text-slate-300">|</span>

            <button 
              onClick={() => {
                const speech = new SpeechSynthesisUtterance("Welcome to Gautam College Hamirpur, Himachal Pradesh. Affiliated to HPTU, HPU and AMRU.");
                window.speechSynthesis?.speak(speech);
              }}
              title="Screen Reader Speech"
              className="hover:text-blue-900 p-0.5"
            >
              <Volume2 className="w-3.5 h-3.5 text-slate-700" />
            </button>

            <span className="text-slate-300">|</span>
            <button
              onClick={onOpenCMSModal}
              className="text-amber-800 hover:text-amber-950 font-bold flex items-center gap-1"
            >
              <Lock className="w-3 h-3 text-amber-700" />
              <span>Staff Login</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. MAIN BRANDING HEADER (HPTU Crest, Dual Hindi/English Typography & Orange Results Button) */}
      <div className="bg-white py-3 px-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Emblem Logo + Dual Hindi & English Name */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button 
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-3 sm:gap-4 text-left group"
            >
              {/* College Official Crest */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white p-1 rounded-full border-2 border-amber-500 shadow-sm overflow-hidden flex items-center justify-center">
                <img 
                  src="/ggc-logo.webp" 
                  alt="Gautam Group of Colleges Logo" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* HPTU Style Official Typography */}
              <div>
                <div className="text-base sm:text-xl md:text-2xl font-bold text-[#ea580c] tracking-wide leading-tight font-serif">
                  गौतम ग्रुप ऑफ कॉलेजेस, हमीरपुर
                </div>
                <div className="text-lg sm:text-2xl md:text-3xl font-black text-[#1e3a8a] tracking-tight leading-tight uppercase font-serif">
                  Gautam Group of Colleges
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold text-slate-600 tracking-wider uppercase mt-0.5">
                  (ESTABLISHED 1999 • AFFILIATED TO HPTU, HPU & AMRU • APPROVED BY AICTE, PCI, INC)
                </div>
              </div>
            </button>
          </div>

          {/* Right: Sub-menus & Bright Orange CTA Button (Exact HPTU Style) */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            
            <div className="flex items-center gap-4 text-xs font-bold text-slate-700">
              <button 
                onClick={() => handleNavClick('academics')} 
                className="hover:text-[#1e3a8a] transition flex items-center gap-0.5"
              >
                <span>USS (University School of Studies)</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
              
              <button 
                onClick={() => handleNavClick('downloads')} 
                className="hover:text-[#1e3a8a] transition flex items-center gap-0.5"
              >
                <span>Tenders</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
              
              <button 
                onClick={() => handleNavClick('compliance')} 
                className="hover:text-[#1e3a8a] transition flex items-center gap-0.5"
              >
                <span>RTI</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {/* Bright Orange Button (Exact HPTU "Results" button style) */}
            <button
              onClick={() => handleNavClick(null, 'results')}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#c2410c] hover:to-[#ea580c] text-white font-black text-sm tracking-wide shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
            >
              <span>Results</span>
              <Sparkles className="w-4 h-4 text-amber-200" />
            </button>

          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenApply('apply')}
              className="px-3 py-1.5 rounded-lg bg-[#ea580c] text-white font-bold text-xs shadow-xs"
            >
              Admissions
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. PRIMARY NAVIGATION BAR WITH INTERACTIVE HPTU-STYLE DROPDOWNS */}
      <nav className="bg-[#1e3a8a] text-white border-t border-blue-900 hidden lg:block relative">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          
          <div className="flex items-center">
            
            {/* Orange Home Icon Button (Exact HPTU Style) */}
            <button
              onClick={() => handleNavClick('home')}
              className={`p-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white flex items-center justify-center transition-colors shadow-inner ${
                currentPage === 'home' && !activeMenu ? 'bg-[#c2410c]' : ''
              }`}
              title="Home"
            >
              <Home className="w-5 h-5 fill-current" />
            </button>

            {/* Navigation Tabs with HPTU Orange Active State */}
            <div className="flex items-center text-xs xl:text-sm font-bold tracking-wide">
              
              {/* 1. About US */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('about')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => handleNavClick('about')}
                  className={`px-3.5 py-3.5 transition-colors flex items-center gap-1 ${
                    activeMenu === 'about'
                      ? 'bg-[#ea580c] text-white'
                      : currentPage === 'about'
                      ? 'bg-blue-900 text-amber-300'
                      : 'hover:bg-blue-900 text-white'
                  }`}
                >
                  <span>About US</span>
                </button>

                {/* Dropdown Menu */}
                {activeMenu === 'about' && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-b-md shadow-2xl border border-slate-300 border-t-0 animate-in fade-in slide-in-from-top-1 z-50 text-slate-800 text-left">
                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      About Institution
                    </div>
                    <button onClick={() => handleNavClick('about')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>History & Silver Jubilee (1999–2025)</span>
                    </button>
                    <button onClick={() => handleNavClick('about')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Vision, Mission & Core Values</span>
                    </button>
                    <button onClick={() => handleNavClick('about')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Principal & Chairman's Desk</span>
                    </button>

                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      Governance & Recognition
                    </div>
                    <button onClick={() => handleNavClick('about')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Governing Body & Trust</span>
                    </button>
                    <button onClick={() => handleNavClick('affiliations')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Statutory Approvals (HPTU, HPU, AMRU)</span>
                    </button>
                    <button onClick={() => handleNavClick('affiliations')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] flex items-center justify-between">
                      <span>Council Recognition (PCI, INC, AICTE)</span>
                    </button>
                  </div>
                )}
              </div>

              {/* 2. Administration */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('admin')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => handleNavClick('faculty')}
                  className={`px-3.5 py-3.5 transition-colors flex items-center gap-1 ${
                    activeMenu === 'admin'
                      ? 'bg-[#ea580c] text-white'
                      : currentPage === 'faculty'
                      ? 'bg-blue-900 text-amber-300'
                      : 'hover:bg-blue-900 text-white'
                  }`}
                >
                  <span>Administration</span>
                </button>

                {activeMenu === 'admin' && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-b-md shadow-2xl border border-slate-300 border-t-0 animate-in fade-in slide-in-from-top-1 z-50 text-slate-800 text-left">
                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      Administrative Directorate
                    </div>
                    <button onClick={() => handleNavClick('faculty')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Office of the Principal / Director</span>
                    </button>
                    <button onClick={() => handleNavClick('faculty')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Faculty & Staff Directory (140+ Teachers)</span>
                    </button>
                    <button onClick={() => handleNavClick('faculty')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Non-Teaching & Lab Staff</span>
                    </button>

                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      Statutory Compliance Cells
                    </div>
                    <button onClick={() => handleNavClick('compliance')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Anti-Ragging Committee (1800-180-5522)</span>
                    </button>
                    <button onClick={() => handleNavClick('compliance')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Internal Complaints Committee (ICC)</span>
                    </button>
                    <button onClick={() => handleNavClick('compliance')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Grievance Redressal Cell</span>
                    </button>
                    <button onClick={() => handleNavClick('compliance')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] flex items-center justify-between">
                      <span>Right to Information (RTI Cell)</span>
                    </button>
                  </div>
                )}
              </div>

              {/* 3. Academics (Exact Match to Screenshot 2) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('academics')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => handleNavClick('academics')}
                  className={`px-3.5 py-3.5 transition-colors flex items-center gap-1 ${
                    activeMenu === 'academics'
                      ? 'bg-[#ea580c] text-white'
                      : currentPage === 'academics'
                      ? 'bg-blue-900 text-amber-300'
                      : 'hover:bg-blue-900 text-white'
                  }`}
                >
                  <span>Academics</span>
                </button>

                {activeMenu === 'academics' && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-b-md shadow-2xl border border-slate-300 border-t-0 animate-in fade-in slide-in-from-top-1 z-50 text-slate-800 text-left">
                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      Academic Programs
                    </div>
                    <button onClick={() => handleNavClick('academics')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Undergraduate (B.Pharm, B.Sc Nursing, BCA, BBA, B.Sc)</span>
                    </button>
                    <button onClick={() => handleNavClick('academics')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Postgraduate (MBA, M.Sc Chemistry/Phys/Bot/Zoo)</span>
                    </button>

                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      Schools / Departments / Centres
                    </div>
                    <button onClick={() => handleNavClick('faculty')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Faculty / Staff Details</span>
                    </button>
                    <button onClick={() => handleNavClick('placements')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Internal Quality Assurance Cell (IQAC)</span>
                    </button>
                    <button onClick={() => handleNavClick('facilities')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Library & Digital Resources</span>
                    </button>
                    <button onClick={() => handleNavClick('facilities')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Academic Collaborations & Hospital Tie-up</span>
                    </button>
                    <button onClick={() => handleNavClick('academics')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Academic Calendar 2025–26</span>
                    </button>
                    <button onClick={() => handleNavClick('downloads')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Statutes & Ordinances (Academics/Examinations)</span>
                    </button>
                    <button onClick={() => handleNavClick('affiliations')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] flex items-center justify-between">
                      <span>Affiliation Process & Approvals</span>
                    </button>
                  </div>
                )}
              </div>

              {/* 4. Examination (Exact Match to Screenshot 1) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('exam')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => handleNavClick(null, 'results')}
                  className={`px-3.5 py-3.5 transition-colors flex items-center gap-1 ${
                    activeMenu === 'exam'
                      ? 'bg-[#ea580c] text-white'
                      : 'hover:bg-blue-900 text-white'
                  }`}
                >
                  <span>Examination</span>
                </button>

                {activeMenu === 'exam' && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-b-md shadow-2xl border border-slate-300 border-t-0 animate-in fade-in slide-in-from-top-1 z-50 text-slate-800 text-left">
                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      Examination Portal
                    </div>
                    <button onClick={() => handleNavClick(null, 'portal')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Student Login (ERP / OTR)</span>
                    </button>
                    <button onClick={onOpenCMSModal} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>College Login / Staff Desk</span>
                    </button>

                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      Examination Schedule
                    </div>
                    <button onClick={() => handleNavClick(null, 'results')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Date Sheets (Odd / Even Semesters)</span>
                    </button>
                    <button onClick={() => handleNavClick(null, 'results')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Online Examination Form</span>
                    </button>
                    <button onClick={() => handleNavClick(null, 'results')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Online Re-Evaluation Form</span>
                    </button>
                    <button onClick={() => handleNavClick(null, 'results')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between font-bold text-[#ea580c]">
                      <span>View Results</span>
                    </button>

                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      Download Forms
                    </div>
                    <button onClick={() => handleNavClick('downloads')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] flex items-center justify-between">
                      <span>Student Related Forms & PYQs</span>
                    </button>
                  </div>
                )}
              </div>

              {/* 5. Admissions */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('admissions')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => handleNavClick('admissions')}
                  className={`px-3.5 py-3.5 transition-colors flex items-center gap-1 ${
                    activeMenu === 'admissions'
                      ? 'bg-[#ea580c] text-white'
                      : currentPage === 'admissions'
                      ? 'bg-blue-900 text-amber-300'
                      : 'hover:bg-blue-900 text-white'
                  }`}
                >
                  <span>Admissions</span>
                </button>

                {activeMenu === 'admissions' && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-b-md shadow-2xl border border-slate-300 border-t-0 animate-in fade-in slide-in-from-top-1 z-50 text-slate-800 text-left">
                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      Admissions 2025–26
                    </div>
                    <button onClick={() => handleNavClick(null, 'apply')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between font-bold text-[#ea580c]">
                      <span>Online Admission Application Form</span>
                    </button>
                    <button onClick={() => handleNavClick('admissions')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Admission Process & Checklist</span>
                    </button>
                    <button onClick={() => handleNavClick('admissions')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Eligibility Criteria & Seat Intake</span>
                    </button>

                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      Fee & Scholarships
                    </div>
                    <button onClick={() => handleNavClick('admissions')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Fee Structure (Session 2025–26)</span>
                    </button>
                    <button onClick={() => handleNavClick(null, 'portal')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Pay Tuition Fee Online</span>
                    </button>
                    <button onClick={() => handleNavClick('admissions')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>HP e-Pass & NSP Scholarships</span>
                    </button>

                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      Helpdesk & Prospectus
                    </div>
                    <button onClick={() => handleNavClick('downloads')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Download Prospectus 2025–26 (PDF)</span>
                    </button>
                    <a href="tel:+919418010420" className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] flex items-center justify-between text-emerald-700 font-bold">
                      <span>Admission Helpline (+91-9418010420)</span>
                    </a>
                  </div>
                )}
              </div>

              {/* 6. Student Zone */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('student')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={onOpenPortalModal}
                  className={`px-3.5 py-3.5 transition-colors flex items-center gap-1 ${
                    activeMenu === 'student'
                      ? 'bg-[#ea580c] text-white'
                      : 'hover:bg-blue-900 text-amber-300'
                  }`}
                >
                  <span>Student Zone</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {activeMenu === 'student' && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-b-md shadow-2xl border border-slate-300 border-t-0 animate-in fade-in slide-in-from-top-1 z-50 text-slate-800 text-left">
                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      Digital Student Services
                    </div>
                    <button onClick={onOpenPortalModal} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between font-bold text-indigo-900">
                      <span>Academic Bank of Credits (ABC / APAAR)</span>
                    </button>
                    <button onClick={onOpenPortalModal} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>DigiLocker Marksheets & Degrees</span>
                    </button>
                    <button onClick={onOpenPortalModal} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Student SIS & Attendance ERP</span>
                    </button>

                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      Campus Life & Facilities
                    </div>
                    <button onClick={() => handleNavClick('facilities')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Boys & Girls Hostels</span>
                    </button>
                    <button onClick={() => handleNavClick('facilities')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Campus Medical Dispensary</span>
                    </button>
                    <button onClick={() => handleNavClick('facilities')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>HRTC Concessional Bus Pass</span>
                    </button>
                    <button onClick={() => handleNavClick('placements')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>NSS, NCC & Sports Units</span>
                    </button>
                    <button onClick={() => handleNavClick('alumni')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] flex items-center justify-between">
                      <span>Alumni Association (25,000+ Network)</span>
                    </button>
                  </div>
                )}
              </div>

              {/* 7. Information Corner */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('info')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => handleNavClick('downloads')}
                  className={`px-3.5 py-3.5 transition-colors flex items-center gap-1 ${
                    activeMenu === 'info'
                      ? 'bg-[#ea580c] text-white'
                      : currentPage === 'downloads'
                      ? 'bg-blue-900 text-amber-300'
                      : 'hover:bg-blue-900 text-white'
                  }`}
                >
                  <span>Information Corner</span>
                </button>

                {activeMenu === 'info' && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-b-md shadow-2xl border border-slate-300 border-t-0 animate-in fade-in slide-in-from-top-1 z-50 text-slate-800 text-left">
                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      Public Notices & Media
                    </div>
                    <button onClick={() => handleNavClick('downloads')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Latest Circulars & Notifications</span>
                    </button>
                    <button onClick={() => handleNavClick('gallery')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Photo & Video Gallery</span>
                    </button>
                    <button onClick={() => handleNavClick('downloads')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Tenders & Quotations</span>
                    </button>
                    
                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      Central Downloads
                    </div>
                    <button onClick={() => handleNavClick('downloads')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Official Forms & Prospectus</span>
                    </button>
                    <button onClick={() => handleNavClick('downloads')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] flex items-center justify-between">
                      <span>Previous Year Question Papers (PYQ)</span>
                    </button>
                  </div>
                )}
              </div>

              {/* 8. Contact Us */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('contact')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`px-3.5 py-3.5 transition-colors flex items-center gap-1 ${
                    activeMenu === 'contact'
                      ? 'bg-[#ea580c] text-white'
                      : currentPage === 'contact'
                      ? 'bg-blue-900 text-amber-300'
                      : 'hover:bg-blue-900 text-white'
                  }`}
                >
                  <span>Contact Us</span>
                </button>

                {activeMenu === 'contact' && (
                  <div className="absolute top-full right-0 w-72 bg-white rounded-b-md shadow-2xl border border-slate-300 border-t-0 animate-in fade-in slide-in-from-top-1 z-50 text-slate-800 text-left">
                    <div className="bg-[#1e3a8a] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                      Campus Location & Desk
                    </div>
                    <button onClick={() => handleNavClick('contact')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Hamirpur Campus Address & Map</span>
                    </button>
                    <button onClick={() => handleNavClick('contact')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>How to Reach (800m from Bus Stand)</span>
                    </button>
                    <button onClick={() => handleNavClick('contact')} className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] border-b border-slate-100 flex items-center justify-between">
                      <span>Office Directory & Extensions</span>
                    </button>
                    <a href="https://wa.me/919418010420" target="_blank" rel="noopener noreferrer" className="w-full text-left px-3.5 py-2 text-xs hover:bg-blue-50 hover:text-[#1e3a8a] flex items-center justify-between text-emerald-700 font-bold">
                      <span>Direct WhatsApp Helpdesk</span>
                    </a>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Right Search Button */}
          <button
            onClick={() => {
              const el = document.getElementById('programs');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-3 hover:bg-blue-900 text-white transition-colors"
            title="Search Courses"
          >
            <Search className="w-4 h-4" />
          </button>

        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1e3a8a] text-white px-4 py-4 space-y-2 divide-y divide-blue-800 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold pt-2">
            <button onClick={() => handleNavClick('home')} className="text-left p-2 rounded hover:bg-blue-900">🏠 Home</button>
            <button onClick={() => handleNavClick('about')} className="text-left p-2 rounded hover:bg-blue-900">About Us</button>
            <button onClick={() => handleNavClick('affiliations')} className="text-left p-2 rounded hover:bg-blue-900">Affiliations</button>
            <button onClick={() => handleNavClick('academics')} className="text-left p-2 rounded hover:bg-blue-900">Academics</button>
            <button onClick={() => handleNavClick('faculty')} className="text-left p-2 rounded hover:bg-blue-900">Administration</button>
            <button onClick={() => handleNavClick(null, 'results')} className="text-left p-2 rounded hover:bg-blue-900 text-amber-300">Examination & Results</button>
            <button onClick={() => handleNavClick('admissions')} className="text-left p-2 rounded hover:bg-blue-900">Admissions 2025</button>
            <button onClick={() => handleNavClick(null, 'portal')} className="text-left p-2 rounded hover:bg-blue-900 text-amber-300">Student Zone (ABC)</button>
            <button onClick={() => handleNavClick('downloads')} className="text-left p-2 rounded hover:bg-blue-900">Information Corner</button>
            <button onClick={() => handleNavClick('gallery')} className="text-left p-2 rounded hover:bg-blue-900">Gallery</button>
            <button onClick={() => handleNavClick('contact')} className="text-left p-2 rounded hover:bg-blue-900">Contact Us</button>
          </div>

          <div className="pt-3 flex items-center justify-between">
            <button
              onClick={onOpenCMSModal}
              className="text-xs text-amber-300 font-bold flex items-center gap-1"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Staff Login CMS</span>
            </button>
            <button
              onClick={() => onOpenApply('apply')}
              className="px-4 py-1.5 rounded-lg bg-[#ea580c] text-white font-bold text-xs"
            >
              Apply Online
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
