import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Home, 
  ChevronDown, 
  Phone, 
  Mail, 
  Volume2, 
  VolumeX,
  Menu, 
  X, 
  Sparkles, 
  Lock, 
  ExternalLink, 
  ChevronRight,
  PhoneCall,
  Map,
  Check
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SitemapModal from './SitemapModal';
import TelephoneDirectoryModal from './TelephoneDirectoryModal';
import WebMailModal from './WebMailModal';
import { getCdnUrl } from '../utils/cloudinary';

export default function HimtuHeader({ 
  currentPage = 'home',
  onNavigate,
  onOpenApply,
  onOpenPortalModal,
  onOpenCMSModal,
  onOpenResults,
  onOpenSearch
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'about', 'admin', 'academics', 'exam', 'admissions', 'student', 'info', 'contact'
  const [activeTopMenu, setActiveTopMenu] = useState(null); // 'uss', 'tenders', 'rti'
  const [fontSizeOffset, setFontSizeOffset] = useState(0);
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isWebMailOpen, setIsWebMailOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { lang, setLang } = useLanguage();

  // Apply real dynamic document font scaling
  useEffect(() => {
    const html = document.documentElement;
    if (fontSizeOffset === -1) {
      html.style.fontSize = '90%';
    } else if (fontSizeOffset === 1) {
      html.style.fontSize = '110%';
    } else {
      html.style.fontSize = '100%';
    }
  }, [fontSizeOffset]);

  const handleNavClick = (pageId, modalTrigger = null) => {
    setActiveMenu(null);
    setActiveTopMenu(null);
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
    <>
      <header className="bg-white font-sans sticky top-0 lg:relative z-50 shadow-xs lg:shadow-none">
      
      {/* 1. TOP UTILITY BAR (Exact HPTU Style) */}
      <div className="bg-slate-100 border-b border-slate-300 text-[11px] text-slate-700 py-1 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Quick Links */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSitemapOpen(true)} 
              className="hover:text-blue-900 transition font-medium cursor-pointer"
              title="Open Institutional Sitemap"
            >
              {lang === 'hi' ? 'साइटमैप' : 'Sitemap'}
            </button>
            <span className="text-slate-300">|</span>
            <button 
              onClick={() => setIsPhoneModalOpen(true)} 
              className="hover:text-blue-900 transition font-medium flex items-center gap-1 cursor-pointer"
              title="Open Official Telephone Directory"
            >
              <PhoneCall className="w-3 h-3 text-[#ea580c]" />
              <span>{lang === 'hi' ? 'टेलीफोन डायरेक्टरी (+91-9418010420)' : 'Telephone Directory (+91-9418010420)'}</span>
            </button>
            <span className="text-slate-300">|</span>
            <button 
              onClick={() => setIsWebMailOpen(true)} 
              className="hover:text-blue-900 transition font-medium cursor-pointer"
              title="Open Institutional Web Mail"
            >
              {lang === 'hi' ? 'वेब मेल' : 'Web Mail'}
            </button>
            <span className="text-slate-300">|</span>
            <button 
              onClick={() => {
                handleNavClick('about');
                setTimeout(() => {
                  const el = document.getElementById('milestones') || document.getElementById('history');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 200);
              }} 
              className="hover:text-blue-900 transition font-medium cursor-pointer"
              title="View 25-Year Foundation Milestones"
            >
              {lang === 'hi' ? 'उपलब्धियां' : 'Mile Stone'}
            </button>
            <span className="text-slate-300">|</span>
            <button 
              onClick={onOpenPortalModal} 
              className="hover:text-blue-900 transition font-medium flex items-center gap-1 text-blue-900 font-bold cursor-pointer"
              title="Academic Bank of Credits & Student Portal"
            >
              <span>NAD-ABC Scheme</span>
            </button>
          </div>

          {/* Right Accessibility & Language Controls */}
          <div className="flex items-center gap-3">
            <button 
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('main-content') || document.querySelector('main');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  el.focus?.();
                }
              }} 
              className="hover:underline text-slate-600 cursor-pointer"
            >
              {lang === 'hi' ? 'मुख्य सामग्री पर जाएं' : 'Skip to main content'}
            </button>
            <span className="text-slate-300">|</span>
            
            <div className="flex items-center gap-1.5 font-bold">
              <button 
                onClick={() => setLang('en')}
                className={`hover:text-blue-900 transition cursor-pointer px-1 py-0.5 rounded ${lang === 'en' ? 'text-blue-900 underline font-extrabold bg-blue-100/60' : 'text-slate-600'}`}
              >
                English
              </button>
              <button 
                onClick={() => setLang('hi')}
                className={`hover:text-blue-900 transition cursor-pointer px-1 py-0.5 rounded ${lang === 'hi' ? 'text-blue-900 underline font-extrabold bg-blue-100/60' : 'text-slate-600'}`}
              >
                हिन्दी
              </button>
            </div>
            <span className="text-slate-300">|</span>

            {/* Font Size Adjusters with Active Visual Feedback */}
            <div className="flex items-center gap-1 text-xs font-bold text-slate-600">
              <button 
                onClick={() => setFontSizeOffset(-1)} 
                className={`hover:text-blue-900 px-1 rounded cursor-pointer ${fontSizeOffset === -1 ? 'bg-blue-200 text-blue-900' : ''}`}
                title="Decrease Font Size (90%)"
              >
                A-
              </button>
              <button 
                onClick={() => setFontSizeOffset(0)} 
                className={`hover:text-blue-900 px-1 rounded cursor-pointer ${fontSizeOffset === 0 ? 'bg-blue-200 text-blue-900' : ''}`}
                title="Normal Font Size (100%)"
              >
                A
              </button>
              <button 
                onClick={() => setFontSizeOffset(1)} 
                className={`hover:text-blue-900 px-1 rounded cursor-pointer ${fontSizeOffset === 1 ? 'bg-blue-200 text-blue-900' : ''}`}
                title="Increase Font Size (110%)"
              >
                A+
              </button>
            </div>
            <span className="text-slate-300">|</span>

            {/* Interactive Text-to-Speech Toggle */}
            <button 
              onClick={() => {
                if ('speechSynthesis' in window) {
                  if (window.speechSynthesis.speaking) {
                    window.speechSynthesis.cancel();
                    setIsSpeaking(false);
                    return;
                  }
                  const speechText = lang === 'hi' 
                    ? "गौतम ग्रुप ऑफ कॉलेजेस, हमीरपुर, हिमाचल प्रदेश में आपका स्वागत है। स्थापना 1999। संबद्ध हिमाचल प्रदेश तकनीकी विश्वविद्यालय, एचपीयू एवं एएमआरयू। नर्सिंग, फार्मेसी, प्रबंधन और पॉलिटेक्निक में उत्कृष्ट संस्थान।"
                    : "Welcome to Gautam Group of Colleges, Hamirpur, Himachal Pradesh. Established in 1999, affiliated to HPTU, HPU and AMRU. Offering accredited programs in Nursing, Pharmacy, Management and Technical Polytechnic.";
                  const utter = new SpeechSynthesisUtterance(speechText);
                  utter.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
                  utter.rate = 0.95;
                  utter.onstart = () => setIsSpeaking(true);
                  utter.onend = () => setIsSpeaking(false);
                  utter.onerror = () => setIsSpeaking(false);
                  window.speechSynthesis.speak(utter);
                }
              }}
              title={isSpeaking ? "Stop Speech" : "Listen to Screen Reader Introduction"}
              className={`hover:text-blue-900 p-0.5 rounded cursor-pointer transition ${isSpeaking ? 'bg-amber-200 text-amber-900 animate-pulse' : ''}`}
            >
              {isSpeaking ? (
                <VolumeX className="w-3.5 h-3.5 text-red-600" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-slate-700" />
              )}
            </button>

            {/* Staff Login removed */}
          </div>

        </div>
      </div>

      {/* 2. MAIN BRANDING HEADER (HPTU Crest, Dual Hindi/English Typography & Orange Results Button) */}
      <div className="bg-white py-2 sm:py-3 px-3 sm:px-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Emblem Logo + Dual Hindi & English Name */}
          <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
            <button 
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-2.5 sm:gap-4 text-left group min-w-0"
            >
              {/* College Official Crest */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0 bg-white p-0.5 sm:p-1 rounded-full border-2 border-amber-500 shadow-sm overflow-hidden flex items-center justify-center">
                <img 
                  src={getCdnUrl('/gautam_group_colleges_logo.png')} 
                  alt="Gautam College Logo" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* HPTU Style Official Typography */}
              <div className="flex flex-col text-left min-w-0">
                <div className="text-xs sm:text-lg md:text-2xl font-bold text-[#ea580c] tracking-normal leading-tight font-['Noto_Sans_Devanagari',sans-serif] truncate sm:whitespace-normal">
                  गौतम ग्रुप ऑफ कॉलेजेस, हमीरपुर
                </div>
                <div className="text-sm sm:text-xl md:text-[28px] font-black text-[#1b327b] tracking-tight leading-tight uppercase font-['Roboto_Condensed',sans-serif] truncate sm:whitespace-normal">
                  GAUTAM GROUP OF COLLEGES
                </div>
                <div className="text-[8px] sm:text-[10px] md:text-[11px] font-semibold text-slate-700 tracking-wider uppercase mt-0.5 font-sans truncate sm:whitespace-normal">
                  (ESTABLISHED 1999 • AFFILIATED TO HPTU, HPU & AMRU)
                </div>
              </div>
            </button>
          </div>

          {/* Right: Sub-menus & Bright Orange CTA Button (Exact HPTU Style) */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            
            <div className="flex items-center gap-4 text-xs font-bold text-slate-700">
              
              {/* 1. USS (University School of Studies) Dropdown (Exact Match to Image 1) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveTopMenu('uss')}
                onMouseLeave={() => setActiveTopMenu(null)}
              >
                <button 
                  onClick={() => handleNavClick('academics')} 
                  className={`transition flex items-center gap-0.5 py-1 ${
                    activeTopMenu === 'uss' ? 'text-[#ea580c]' : 'hover:text-[#ea580c] text-slate-700'
                  }`}
                >
                  <span>USS (University School of Studies)</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {activeTopMenu === 'uss' && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-b-md shadow-2xl border border-slate-200 border-t-2 border-t-[#ea580c] py-1.5 animate-in fade-in slide-in-from-top-1 z-50 text-slate-800 text-left">
                    <button onClick={() => handleNavClick('academics')} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 hover:text-[#ea580c] border-b border-slate-100 transition-colors">
                      School of Humanities & Social Science
                    </button>
                    <button onClick={() => handleNavClick('academics')} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 hover:text-[#ea580c] border-b border-slate-100 transition-colors">
                      School of Tourism and Hospitality Management
                    </button>
                    <button onClick={() => handleNavClick('academics')} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 hover:text-[#ea580c] border-b border-slate-100 transition-colors">
                      School of Environmental Sciences
                    </button>
                    <button onClick={() => handleNavClick('academics')} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 hover:text-[#ea580c] border-b border-slate-100 transition-colors">
                      School of Engineering and Technology
                    </button>
                    <button onClick={() => handleNavClick('academics')} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 hover:text-[#ea580c] border-b border-slate-100 transition-colors">
                      School of Commerce and Management
                    </button>
                    <button onClick={() => handleNavClick('academics')} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 hover:text-[#ea580c] transition-colors">
                      School of Basic and Applied Sciences
                    </button>
                  </div>
                )}
              </div>
              
              {/* 2. Tenders Dropdown (Exact Match to Image 2) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveTopMenu('tenders')}
                onMouseLeave={() => setActiveTopMenu(null)}
              >
                <button 
                  onClick={() => handleNavClick('downloads')} 
                  className={`transition flex items-center gap-0.5 py-1 ${
                    activeTopMenu === 'tenders' ? 'text-[#ea580c]' : 'hover:text-[#ea580c] text-slate-700'
                  }`}
                >
                  <span>Tenders</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {activeTopMenu === 'tenders' && (
                  <div className="absolute top-full left-0 w-52 bg-white rounded-b-md shadow-2xl border border-slate-200 border-t-2 border-t-[#ea580c] py-1.5 animate-in fade-in slide-in-from-top-1 z-50 text-slate-800 text-left">
                    <button onClick={() => handleNavClick('downloads')} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 hover:text-[#ea580c] border-b border-slate-100 transition-colors">
                      Published Tenders
                    </button>
                    <button onClick={() => handleNavClick('downloads')} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 hover:text-[#ea580c] transition-colors">
                      Tenders Archive
                    </button>
                  </div>
                )}
              </div>
              
              {/* 3. RTI Dropdown (Exact Match to Image 3) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveTopMenu('rti')}
                onMouseLeave={() => setActiveTopMenu(null)}
              >
                <button 
                  onClick={() => handleNavClick('compliance')} 
                  className={`transition flex items-center gap-0.5 py-1 ${
                    activeTopMenu === 'rti' ? 'text-[#ea580c]' : 'hover:text-[#ea580c] text-slate-700'
                  }`}
                >
                  <span>RTI</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {activeTopMenu === 'rti' && (
                  <div className="absolute top-full right-0 w-64 bg-white rounded-b-md shadow-2xl border border-slate-200 border-t-2 border-t-[#ea580c] py-1.5 animate-in fade-in slide-in-from-top-1 z-50 text-slate-800 text-left">
                    <button onClick={() => handleNavClick('compliance')} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 hover:text-[#ea580c] border-b border-slate-100 transition-colors">
                      Officers (deal with RTI)
                    </button>
                    <button onClick={() => handleNavClick('compliance')} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 hover:text-[#ea580c] border-b border-slate-100 transition-colors">
                      Minutes of meeting (BOG/FC/AC)
                    </button>
                    <button onClick={() => handleNavClick('faculty')} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 hover:text-[#ea580c] border-b border-slate-100 transition-colors">
                      Admin Staff
                    </button>
                    <button onClick={() => handleNavClick('compliance')} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 hover:text-[#ea580c] border-b border-slate-100 transition-colors">
                      Annual Reports
                    </button>
                    <button onClick={() => handleNavClick('compliance')} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 hover:text-[#ea580c] transition-colors">
                      Miscellaneous
                    </button>
                  </div>
                )}
              </div>

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

          {/* Mobile Hamburger Menu Icon Button (Exact HPTU Mobile Layout) */}
          <div className="flex lg:hidden items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-800 hover:text-[#ea580c] hover:bg-slate-100 rounded-lg transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Anchored directly inside sticky header) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1e3a8a] text-white px-4 py-4 space-y-3 divide-y divide-blue-800 animate-in slide-in-from-top duration-200 shadow-xl border-t border-blue-900 max-h-[80vh] overflow-y-auto">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenSearch) onOpenSearch();
            }}
            className="w-full flex items-center gap-2 p-2.5 rounded-lg bg-blue-950/80 border border-blue-800 text-slate-200 text-xs font-semibold"
          >
            <Search className="w-4 h-4 text-amber-300" />
            <span>Search programs, faculty, hostels, fees...</span>
          </button>
          
          <div className="grid grid-cols-2 gap-2 text-xs font-bold pt-2">
            <button onClick={() => { setMobileMenuOpen(false); handleNavClick('home'); }} className="text-left p-2 rounded hover:bg-blue-900">🏠 Home</button>
            <button onClick={() => { setMobileMenuOpen(false); handleNavClick('about'); }} className="text-left p-2 rounded hover:bg-blue-900">About Us</button>
            <button onClick={() => { setMobileMenuOpen(false); handleNavClick('affiliations'); }} className="text-left p-2 rounded hover:bg-blue-900">Affiliations</button>
            <button onClick={() => { setMobileMenuOpen(false); handleNavClick('academics'); }} className="text-left p-2 rounded hover:bg-blue-900">Academics</button>
            <button onClick={() => { setMobileMenuOpen(false); handleNavClick('faculty'); }} className="text-left p-2 rounded hover:bg-blue-900">Administration</button>
            <button onClick={() => { setMobileMenuOpen(false); handleNavClick(null, 'results'); }} className="text-left p-2 rounded hover:bg-blue-900 text-amber-300">Examination & Results</button>
            <button onClick={() => { setMobileMenuOpen(false); handleNavClick('admissions'); }} className="text-left p-2 rounded hover:bg-blue-900">Admissions 2025</button>
            <button onClick={() => { setMobileMenuOpen(false); handleNavClick(null, 'portal'); }} className="text-left p-2 rounded hover:bg-blue-900 text-amber-300">Student Zone (ABC)</button>
            <button onClick={() => { setMobileMenuOpen(false); handleNavClick('downloads'); }} className="text-left p-2 rounded hover:bg-blue-900">Information Corner</button>
            <button onClick={() => { setMobileMenuOpen(false); handleNavClick('gallery'); }} className="text-left p-2 rounded hover:bg-blue-900">Gallery</button>
            <button onClick={() => { setMobileMenuOpen(false); handleNavClick('contact'); }} className="text-left p-2 rounded hover:bg-blue-900">Contact Us</button>
          </div>

          <div className="pt-3 flex items-center justify-end">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenApply('apply'); }}
              className="px-4 py-1.5 rounded-lg bg-[#ea580c] text-white font-bold text-xs"
            >
              Apply Online
            </button>
          </div>
        </div>
      )}
    </header>

    {/* 3. PRIMARY NAVIGATION BAR WITH INTERACTIVE HPTU-STYLE DROPDOWNS (STICKY NAVBAR) */}
    <nav className="sticky top-0 z-40 bg-[#1e3a8a] text-white border-t border-blue-900 border-b border-blue-950 hidden lg:block shadow-md">
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
              if (onOpenSearch) onOpenSearch();
            }}
            className="p-3 hover:bg-blue-900 text-white transition-colors flex items-center gap-1.5 group cursor-pointer"
            title="Search Entire Website (Cmd+K)"
          >
            <Search className="w-4 h-4 group-hover:scale-110 transition-transform text-amber-300" />
            <span className="hidden xl:inline text-[11px] font-sans font-semibold text-slate-200">Search</span>
          </button>

        </div>
      </nav>

      {/* Institutional Utility Modals */}
      <SitemapModal 
        isOpen={isSitemapOpen} 
        onClose={() => setIsSitemapOpen(false)} 
        onNavigate={onNavigate} 
      />
      <TelephoneDirectoryModal 
        isOpen={isPhoneModalOpen} 
        onClose={() => setIsPhoneModalOpen(false)} 
      />
      <WebMailModal 
        isOpen={isWebMailOpen} 
        onClose={() => setIsWebMailOpen(false)} 
      />

    </>
  );
}
