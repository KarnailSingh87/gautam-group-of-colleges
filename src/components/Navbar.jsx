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
  Layers,
  Languages,
  Lock,
  Download,
  Image as ImageIcon,
  HeartPulse,
  Briefcase,
  FileCheck,
  MapPin,
  Clock
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({
  currentPage = 'home',
  onNavigate,
  onOpenApply,
  onOpenTour,
  onOpenPortalModal,
  onOpenCMSModal,
  onScrollToPrograms
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'about', 'academics', 'admissions', 'campus', 'more'
  const { lang, toggleLang, t } = useLanguage();

  const handleNavClick = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200/90 shadow-sm transition-all font-sans">
      
      {/* 1. Official Institutional Ribbon / Navy & Gold Utility Strip */}
      <div className="bg-slate-950 text-white text-[11px] py-1.5 px-4 hidden sm:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-extrabold uppercase tracking-wider text-[10px] border border-amber-500/30">
              {t('silverJubilee')}
            </span>
            <span className="text-slate-300">
              {t('admissionOpen')}: <strong className="text-white">B.Pharm • B.Sc Nursing • MBA • BCA • M.Sc</strong>
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-300 font-medium">
              {t('nearBusStand')}
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            {/* Phone */}
            <a href="tel:+919418010420" className="hover:text-white transition-colors flex items-center gap-1 font-bold text-emerald-400">
              <Phone className="w-3 h-3" />
              <span>+91-9418010420</span>
            </a>
            <span className="text-slate-700">|</span>

            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold flex items-center gap-1 transition"
              title="Toggle English / हिन्दी"
            >
              <Languages className="w-3 h-3 text-white" />
              <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>
            <span className="text-slate-700">|</span>

            {/* Staff CMS Gateway */}
            <button
              onClick={onOpenCMSModal}
              className="text-slate-300 hover:text-white flex items-center gap-1 transition"
              title="Staff Publishing CMS"
            >
              <Lock className="w-3 h-3 text-amber-400" />
              <span>{t('adminCMS')}</span>
            </button>
            <span className="text-slate-700">|</span>

            {/* Student Portals Modal */}
            <button
              onClick={onOpenPortalModal}
              className="text-amber-300 hover:text-white transition-colors font-semibold flex items-center gap-1"
            >
              <Database className="w-3 h-3" />
              <span>{t('studentPortal')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar with Official Crest & Mega-Menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand Identity / Official Crest */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left"
            >
              <div className="w-13 h-13 rounded-2xl bg-white text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-slate-200 overflow-hidden p-1">
                <img 
                  src="/gautam_group_colleges_logo.png" 
                  alt="Gautam College Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-serif font-black text-xl tracking-tight text-slate-950 leading-tight group-hover:text-indigo-900 transition-colors">
                  {t('institutionName')}
                </div>
                <div className="text-[11px] font-semibold text-slate-600 tracking-wide uppercase mt-0.5 flex flex-wrap items-center gap-1.5">
                  <span className="text-indigo-900 font-extrabold">Hamirpur (H.P.)</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-slate-500">Est. 1999 • HPTU, HPU & AMRU Affiliated</span>
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Mega-Menu Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">

            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                currentPage === 'home'
                  ? 'bg-slate-900 text-amber-300 font-extrabold'
                  : 'text-slate-700 hover:text-indigo-900 hover:bg-slate-100/70'
              }`}
            >
              {t('home')}
            </button>

            {/* About Mega-Menu */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('about')}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  currentPage === 'about'
                    ? 'bg-slate-900 text-amber-300 font-extrabold'
                    : 'text-slate-700 hover:text-indigo-900 hover:bg-slate-100/70'
                }`}
              >
                <span>{t('about')}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 animate-in fade-in slide-in-from-top-1 z-50">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-2 py-1 mb-1">
                    Institutional Governance
                  </div>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 flex items-center gap-2.5 transition"
                  >
                    <Building className="w-4 h-4 text-indigo-900" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">History, Vision & Mission</div>
                      <div className="text-[10px] text-slate-500">25 Years of Service (1999–2025)</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 flex items-center gap-2.5 transition"
                  >
                    <Award className="w-4 h-4 text-amber-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Principal & Chairman's Message</div>
                      <div className="text-[10px] text-slate-500">Leadership Vision for Himachal Youth</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('affiliations')}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 flex items-center gap-2.5 transition"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Affiliation & Approvals</div>
                      <div className="text-[10px] text-slate-500">HPTU, HPU, AMRU, AICTE, PCI, INC</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Academics Mega-Menu */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('academics')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('academics')}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  currentPage === 'academics'
                    ? 'bg-slate-900 text-amber-300 font-extrabold'
                    : 'text-slate-700 hover:text-indigo-900 hover:bg-slate-100/70'
                }`}
              >
                <span>{t('academics')}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>

              {activeDropdown === 'academics' && (
                <div className="absolute top-full left-0 w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 animate-in fade-in slide-in-from-top-1 z-50">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-2 py-1 mb-1">
                    Programs, Syllabi & Examinations
                  </div>
                  <button
                    onClick={() => handleNavClick('academics')}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 flex items-center gap-2.5 transition"
                  >
                    <GraduationCap className="w-4 h-4 text-indigo-900" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Departments & Courses</div>
                      <div className="text-[10px] text-slate-500">Pharmacy, Nursing, Mgmt, Sciences & Hotel</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('academics')}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 flex items-center gap-2.5 transition"
                  >
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Semester Syllabi & PDF Curricula</div>
                      <div className="text-[10px] text-slate-500">Download CBCS schemes for all courses</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('faculty')}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 flex items-center gap-2.5 transition"
                  >
                    <Users className="w-4 h-4 text-emerald-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Faculty Directory</div>
                      <div className="text-[10px] text-slate-500">140+ Professors, HODs & Staff</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Admissions Mega-Menu */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('admissions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('admissions')}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  currentPage === 'admissions'
                    ? 'bg-slate-900 text-amber-300 font-extrabold'
                    : 'text-slate-700 hover:text-indigo-900 hover:bg-slate-100/70'
                }`}
              >
                <span>{t('admissions')}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>

              {activeDropdown === 'admissions' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 animate-in fade-in slide-in-from-top-1 z-50">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-2 py-1 mb-1">
                    Admissions & State Financial Aid
                  </div>
                  <button
                    onClick={() => handleNavClick('admissions')}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 flex items-center gap-2.5 transition"
                  >
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Admission Process & Checklist</div>
                      <div className="text-[10px] text-slate-500">Eligibility, documents & dates</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('admissions')}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 flex items-center gap-2.5 transition"
                  >
                    <Award className="w-4 h-4 text-amber-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Fee Structure & Estimator</div>
                      <div className="text-[10px] text-slate-500">Itemized tuition, caution & hostel</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('admissions')}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 flex items-center gap-2.5 transition"
                  >
                    <ShieldCheck className="w-4 h-4 text-indigo-900" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">HP e-Pass & NSP Scholarships</div>
                      <div className="text-[10px] text-slate-500">SC/ST/OBC post-matric grants</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Campus & Facilities */}
            <button
              onClick={() => handleNavClick('facilities')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                currentPage === 'facilities'
                  ? 'bg-slate-900 text-amber-300 font-extrabold'
                  : 'text-slate-700 hover:text-indigo-900 hover:bg-slate-100/70'
              }`}
            >
              {t('facilities')}
            </button>

            {/* Placements & Research */}
            <button
              onClick={() => handleNavClick('placements')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                currentPage === 'placements'
                  ? 'bg-slate-900 text-amber-300 font-extrabold'
                  : 'text-slate-700 hover:text-indigo-900 hover:bg-slate-100/70'
              }`}
            >
              {t('placements')}
            </button>

            {/* More Menu Dropdown (Gallery, Downloads, Alumni, Compliance, Contact) */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('more')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:text-indigo-900 hover:bg-slate-100/70 transition-all flex items-center gap-1"
              >
                <span>More Pages</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>

              {activeDropdown === 'more' && (
                <div className="absolute top-full right-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 animate-in fade-in slide-in-from-top-1 z-50">
                  <button
                    onClick={() => handleNavClick('gallery')}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 flex items-center gap-2.5 transition"
                  >
                    <ImageIcon className="w-4 h-4 text-purple-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{t('gallery')}</div>
                      <div className="text-[10px] text-slate-500">Labs, convocation & fests</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('downloads')}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 flex items-center gap-2.5 transition"
                  >
                    <Download className="w-4 h-4 text-indigo-900" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{t('downloads')}</div>
                      <div className="text-[10px] text-slate-500">Prospectus, forms & circulars</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('alumni')}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 flex items-center gap-2.5 transition"
                  >
                    <Users className="w-4 h-4 text-emerald-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{t('alumni')}</div>
                      <div className="text-[10px] text-slate-500">25,000+ Global Graduates</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('compliance')}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 flex items-center gap-2.5 transition"
                  >
                    <ShieldCheck className="w-4 h-4 text-rose-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{t('compliance')}</div>
                      <div className="text-[10px] text-slate-500">Anti-Ragging, ICC & RTI</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 flex items-center gap-2.5 transition"
                  >
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{t('contact')}</div>
                      <div className="text-[10px] text-slate-500">Hamirpur Campus Map & Inquiry</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">

            {/* 360 Tour */}
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
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-slate-950 via-indigo-900 to-slate-900 hover:from-slate-900 hover:to-indigo-800 text-white font-extrabold text-xs shadow-md border border-amber-400/40 hover:border-amber-400 transition-all active:scale-95"
            >
              <span>{t('applyNow')}</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            </button>

          </div>

          {/* Mobile Menu Hamburger & Quick Apply */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={toggleLang}
              className="px-2 py-1 rounded bg-slate-100 text-slate-800 text-[11px] font-bold"
            >
              {lang === 'en' ? 'हिन्दी' : 'EN'}
            </button>
            <button
              onClick={() => onOpenApply('apply')}
              className="px-3 py-1.5 rounded-lg bg-indigo-900 text-white font-bold text-xs shadow-xs"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100 text-xs">
            <button onClick={() => handleNavClick('home')} className="text-left p-2 rounded-lg font-bold hover:bg-slate-50">🏠 Home</button>
            <button onClick={() => handleNavClick('about')} className="text-left p-2 rounded-lg font-bold hover:bg-slate-50">🏛️ About Us</button>
            <button onClick={() => handleNavClick('affiliations')} className="text-left p-2 rounded-lg font-bold hover:bg-slate-50">📜 Affiliations</button>
            <button onClick={() => handleNavClick('academics')} className="text-left p-2 rounded-lg font-bold hover:bg-slate-50">🎓 Academics</button>
            <button onClick={() => handleNavClick('admissions')} className="text-left p-2 rounded-lg font-bold hover:bg-slate-50">📝 Admissions & Fees</button>
            <button onClick={() => handleNavClick('faculty')} className="text-left p-2 rounded-lg font-bold hover:bg-slate-50">👨‍🏫 Faculty</button>
            <button onClick={() => handleNavClick('facilities')} className="text-left p-2 rounded-lg font-bold hover:bg-slate-50">🏥 Facilities & Labs</button>
            <button onClick={() => handleNavClick('placements')} className="text-left p-2 rounded-lg font-bold hover:bg-slate-50">💼 Placements</button>
            <button onClick={() => handleNavClick('gallery')} className="text-left p-2 rounded-lg font-bold hover:bg-slate-50">🖼️ Gallery</button>
            <button onClick={() => handleNavClick('downloads')} className="text-left p-2 rounded-lg font-bold hover:bg-slate-50">📥 Downloads</button>
            <button onClick={() => handleNavClick('alumni')} className="text-left p-2 rounded-lg font-bold hover:bg-slate-50">🎓 Alumni</button>
            <button onClick={() => handleNavClick('compliance')} className="text-left p-2 rounded-lg font-bold hover:bg-slate-50">🛡️ Compliance</button>
            <button onClick={() => handleNavClick('contact')} className="text-left p-2 rounded-lg font-bold hover:bg-slate-50">📍 Contact Us</button>
          </div>

          <div className="space-y-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortalModal();
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-950 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Database className="w-4 h-4 text-indigo-700" />
              <span>Official Student Portals & DigiLocker</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCMSModal();
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-amber-200 bg-amber-50 text-amber-900 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4 text-amber-600" />
              <span>Staff Administrative CMS Dashboard</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
