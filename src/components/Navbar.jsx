import React, { useState } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Compass, 
  Phone, 
  Database,
  Building,
  GraduationCap,
  ShieldCheck,
  BookOpen,
  Users,
  Award,
  Layers
} from 'lucide-react';

export default function Navbar({ 
  currentPage = 'home',
  onNavigate,
  onOpenApply, 
  onOpenTour,
  onOpenPortalModal,
  onScrollToPrograms 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'affiliations', label: 'Affiliations' },
    { id: 'academics', label: 'Academics & Syllabi' },
    { id: 'admissions', label: 'Admissions & Fees' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'facilities', label: 'Campus & Facilities' },
    { id: 'placements', label: 'Placements & Research' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-sm">
      {/* Institutional Ribbon / Announcement Banner */}
      <div className="bg-slate-900 text-white text-[11px] py-1.5 px-4 hidden sm:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold uppercase tracking-wider text-[10px] border border-amber-500/30">
              Silver Jubilee (1999–2025)
            </span>
            <span className="text-slate-300">
              Admissions Open 2025-26: <strong className="text-white">B.Pharm • B.Sc Nursing • MBA • BCA • M.Sc</strong>
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-amber-300 font-medium">
              Near Bus Stand, Hamirpur (H.P.)
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a href="tel:+919418010420" className="hover:text-white transition-colors flex items-center gap-1 font-semibold text-emerald-400">
              <Phone className="w-3 h-3" />
              <span>+91-9418010420</span>
            </a>
            <span>•</span>
            <a href="tel:01972221493" className="hover:text-white transition-colors">
              01972-221493
            </a>
            <span>•</span>
            <button 
              onClick={onOpenPortalModal} 
              className="text-amber-300 hover:text-white transition-colors font-medium flex items-center gap-1"
            >
              <Database className="w-3 h-3" />
              <span>Student Portals</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Crest */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-3 group text-left"
            >
              <div className="w-13 h-13 rounded-2xl bg-white text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-slate-200 overflow-hidden p-1">
                <img 
                  src="/ggc-logo.webp" 
                  alt="Gautam Group of Colleges Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-serif font-black text-xl tracking-tight text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
                  Gautam Group of Colleges
                </div>
                <div className="text-[11px] font-semibold text-slate-600 tracking-wide uppercase mt-0.5 flex flex-wrap items-center gap-1.5">
                  <span className="text-indigo-700 font-bold">Hamirpur (H.P.)</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-slate-500">Est. 1999 • HPTU, HPU & AMRU Affiliated</span>
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1">
            
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                currentPage === 'home'
                  ? 'bg-indigo-50 text-indigo-700 font-extrabold'
                  : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-100/60'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                currentPage === 'about'
                  ? 'bg-indigo-50 text-indigo-700 font-extrabold'
                  : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-100/60'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('affiliations')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                currentPage === 'affiliations'
                  ? 'bg-indigo-50 text-indigo-700 font-extrabold'
                  : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-100/60'
              }`}
            >
              Affiliations
            </button>

            <button
              onClick={() => handleNavClick('academics')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                currentPage === 'academics'
                  ? 'bg-indigo-50 text-indigo-700 font-extrabold'
                  : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-100/60'
              }`}
            >
              Academics
            </button>

            <button
              onClick={() => handleNavClick('admissions')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                currentPage === 'admissions'
                  ? 'bg-indigo-50 text-indigo-700 font-extrabold'
                  : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-100/60'
              }`}
            >
              Admissions & Fees
            </button>

            {/* Colleges & More Dropdown */}
            <div className="relative group">
              <button
                className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-100/60 transition-all flex items-center gap-1"
              >
                <span>Facilities & Cells</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-2">
                <button
                  onClick={() => handleNavClick('faculty')}
                  className="w-full text-left flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <Users className="w-4 h-4 text-indigo-600" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Faculty & Staff</div>
                    <div className="text-[10px] text-slate-500">Deans, HODs and Professorial Directory</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('facilities')}
                  className="w-full text-left flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <Building className="w-4 h-4 text-indigo-600" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Campus & Infrastructure</div>
                    <div className="text-[10px] text-slate-500">Labs, Hostels, Library & Medical Clinic</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('placements')}
                  className="w-full text-left flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <Award className="w-4 h-4 text-indigo-600" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Placements & Research</div>
                    <div className="text-[10px] text-slate-500">Corporate recruiters, packages & IQAC</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('compliance')}
                  className="w-full text-left flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Mandatory Disclosures</div>
                    <div className="text-[10px] text-slate-500">Anti-Ragging, ICC & RTI Committees</div>
                  </div>
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                currentPage === 'contact'
                  ? 'bg-indigo-50 text-indigo-700 font-extrabold'
                  : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-100/60'
              }`}
            >
              Contact
            </button>

          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            
            {/* Student Portals Trigger */}
            <button
              onClick={onOpenPortalModal}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              <Database className="w-3.5 h-3.5 text-indigo-600" />
              <span>E-Portals</span>
            </button>

            {/* Virtual Campus Tour */}
            <button
              onClick={onOpenTour}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span>360° Tour</span>
            </button>

            {/* Direct Admission CTA Button */}
            <button
              onClick={() => onOpenApply('apply')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-extrabold text-xs shadow-md hover:shadow-indigo-500/30 transition-all active:scale-95"
            >
              <span>Apply Online</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            </button>

          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onOpenApply('apply')}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold text-xs shadow-sm"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  currentPage === link.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-50 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortalModal();
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Database className="w-4 h-4" />
              <span>Statutory Student Portals & DigiLocker</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTour();
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>View 360° Campus Tour</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
