import React, { useState } from 'react';
import { 
  Search, 
  Home, 
  ChevronDown, 
  Phone, 
  Mail, 
  Globe, 
  Volume2, 
  Menu, 
  X,
  Sparkles,
  Database,
  Lock,
  ExternalLink,
  ShieldCheck
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
  const [fontSizeOffset, setFontSizeOffset] = useState(0);
  const { lang, toggleLang, setLang } = useLanguage();

  const handleNavClick = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
    setMobileMenuOpen(false);
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
                <span>Constituent Colleges</span>
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
              onClick={() => onOpenApply('apply')}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#c2410c] hover:to-[#ea580c] text-white font-black text-sm tracking-wide shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
            >
              <span>Admissions 2025</span>
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

      {/* 3. PRIMARY NAVIGATION BAR (HPTU Deep Royal Navy Blue `#1e3a8a` with Orange Home Icon) */}
      <nav className="bg-[#1e3a8a] text-white border-t border-blue-900 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          
          <div className="flex items-center">
            {/* Orange Home Icon Button (Exact HPTU Style) */}
            <button
              onClick={() => handleNavClick('home')}
              className={`p-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white flex items-center justify-center transition-colors shadow-inner ${
                currentPage === 'home' ? 'bg-[#c2410c]' : ''
              }`}
              title="Home"
            >
              <Home className="w-5 h-5 fill-current" />
            </button>

            {/* Navigation Links */}
            <div className="flex items-center text-xs xl:text-sm font-bold tracking-wide">
              
              <button
                onClick={() => handleNavClick('about')}
                className={`px-3.5 py-3.5 hover:bg-blue-900 transition-colors ${
                  currentPage === 'about' ? 'bg-blue-900 text-amber-300' : 'text-white'
                }`}
              >
                About US
              </button>

              <button
                onClick={() => handleNavClick('affiliations')}
                className={`px-3.5 py-3.5 hover:bg-blue-900 transition-colors ${
                  currentPage === 'affiliations' ? 'bg-blue-900 text-amber-300' : 'text-white'
                }`}
              >
                Affiliations
              </button>

              <button
                onClick={() => handleNavClick('academics')}
                className={`px-3.5 py-3.5 hover:bg-blue-900 transition-colors ${
                  currentPage === 'academics' ? 'bg-blue-900 text-amber-300' : 'text-white'
                }`}
              >
                Academics
              </button>

              <button
                onClick={() => handleNavClick('faculty')}
                className={`px-3.5 py-3.5 hover:bg-blue-900 transition-colors ${
                  currentPage === 'faculty' ? 'bg-blue-900 text-amber-300' : 'text-white'
                }`}
              >
                Administration
              </button>

              <button
                onClick={() => onOpenResults ? onOpenResults('results') : handleNavClick('academics')}
                className="px-3.5 py-3.5 hover:bg-blue-900 transition-colors text-white"
              >
                Examination
              </button>

              <button
                onClick={() => handleNavClick('admissions')}
                className={`px-3.5 py-3.5 hover:bg-blue-900 transition-colors ${
                  currentPage === 'admissions' ? 'bg-blue-900 text-amber-300' : 'text-white'
                }`}
              >
                Admissions
              </button>

              <button
                onClick={onOpenPortalModal}
                className="px-3.5 py-3.5 hover:bg-blue-900 transition-colors text-amber-300 flex items-center gap-1"
              >
                <span>Student Zone</span>
                <ChevronDown className="w-3.5 h-3.5 text-amber-300/80" />
              </button>

              <button
                onClick={() => handleNavClick('downloads')}
                className={`px-3.5 py-3.5 hover:bg-blue-900 transition-colors ${
                  currentPage === 'downloads' ? 'bg-blue-900 text-amber-300' : 'text-white'
                }`}
              >
                Information Corner
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`px-3.5 py-3.5 hover:bg-blue-900 transition-colors ${
                  currentPage === 'contact' ? 'bg-blue-900 text-amber-300' : 'text-white'
                }`}
              >
                Contact Us
              </button>

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
            <button onClick={() => handleNavClick('faculty')} className="text-left p-2 rounded hover:bg-blue-900">Faculty & Admin</button>
            <button onClick={() => handleNavClick('admissions')} className="text-left p-2 rounded hover:bg-blue-900">Admissions 2025</button>
            <button onClick={onOpenPortalModal} className="text-left p-2 rounded hover:bg-blue-900 text-amber-300">Student Zone (ABC/ERP)</button>
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
