import React, { useState } from 'react';
import { 
  GraduationCap, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Compass, 
  FileText, 
  Calendar, 
  PhoneCall, 
  ExternalLink,
  BookOpen,
  Building,
  Users,
  Award,
  Phone,
  Mail
} from 'lucide-react';

export default function Navbar({ 
  onOpenApply, 
  onOpenTour,
  onScrollToPrograms 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              Direct Admissions Open 2025-26: <strong className="text-white">B.Pharm • B.Sc Nursing • MBA • BCA • M.Sc</strong>
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
              onClick={() => onOpenApply('request-info')} 
              className="text-amber-300 hover:text-white transition-colors font-medium"
            >
              Request Prospectus
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Crest */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
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
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            
            {/* Constituent Colleges Dropdown */}
            <div className="relative group">
              <a 
                href="#colleges"
                className="px-3.5 py-2 rounded-lg text-sm font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-100/60 transition-all flex items-center gap-1"
              >
                Our Colleges
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform" />
              </a>
              <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2.5 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-2">
                <a href="#colleges" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mt-0.5">
                    Rx
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Gautam College of Pharmacy</div>
                    <div className="text-[11px] text-slate-500">PCI Approved • B.Pharm & D.Pharm (HPTU)</div>
                  </div>
                </a>

                <a href="#colleges" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mt-0.5">
                    +
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Gautam College of Nursing</div>
                    <div className="text-[11px] text-slate-500">INC & HPNRC • B.Sc Nursing & GNM (AMRU)</div>
                  </div>
                </a>

                <a href="#colleges" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs mt-0.5">
                    IT
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Gautam Institute of Management (GIMT)</div>
                    <div className="text-[11px] text-slate-500">AICTE Approved • MBA, BBA, BCA, PGDCA</div>
                  </div>
                </a>

                <a href="#colleges" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs mt-0.5">
                    Sc
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Gautam PG Degree College</div>
                    <div className="text-[11px] text-slate-500">HPU Affiliated • M.Sc, B.Sc, B.Com, BHM</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Courses / Program Finder */}
            <a 
              href="#programs" 
              onClick={onScrollToPrograms}
              className="px-3.5 py-2 rounded-lg text-sm font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-100/60 transition-all"
            >
              Courses & Fees
            </a>

            {/* Digital Hub (himtu/amru/hpu) */}
            <a 
              href="#services" 
              className="px-3.5 py-2 rounded-lg text-sm font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-100/60 transition-all"
            >
              Student Portal & Exams
            </a>

            {/* Campus Facilities */}
            <a 
              href="#campus" 
              className="px-3.5 py-2 rounded-lg text-sm font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-100/60 transition-all"
            >
              Campus & Hostels
            </a>

            {/* Placements */}
            <a 
              href="#stories" 
              className="px-3.5 py-2 rounded-lg text-sm font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-100/60 transition-all"
            >
              Placements
            </a>

          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Search Trigger */}
            <button
              onClick={onScrollToPrograms}
              className="p-2.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="Search Courses at Gautam Group"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Virtual Campus Tour */}
            <button
              onClick={onOpenTour}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              <Compass className="w-4 h-4 text-indigo-600" />
              <span>Campus Tour</span>
            </button>

            {/* Direct Admission CTA Button */}
            <button
              onClick={() => onOpenApply('apply')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-extrabold text-xs shadow-md hover:shadow-indigo-500/30 transition-all active:scale-95"
            >
              <span>Admission 2025</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            </button>

          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenApply('apply')}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold text-xs shadow-sm"
            >
              Admission
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
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="space-y-1">
            <a
              href="#colleges"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-bold text-slate-800 hover:bg-slate-50 text-sm"
            >
              Our 6 Constituent Colleges
            </a>
            <button
              onClick={() => {
                onScrollToPrograms();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-md font-bold text-slate-800 hover:bg-slate-50 text-sm"
            >
              Courses Offered (Pharmacy, Nursing, MBA, BCA, M.Sc)
            </button>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-bold text-slate-800 hover:bg-slate-50 text-sm"
            >
              HPTU / HPU Student Portal & Exam Results
            </a>
            <a
              href="#tuition"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-bold text-slate-800 hover:bg-slate-50 text-sm"
            >
              Fee Structure & HP State Scholarships
            </a>
            <a
              href="#campus"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-bold text-slate-800 hover:bg-slate-50 text-sm"
            >
              Hamirpur Campus & Hostel Facilities
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="tel:+919418010420"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-slate-800 font-bold text-xs"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              Call Admission Helpline: +91-9418010420
            </a>
            <button
              onClick={() => {
                onOpenApply('apply');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 text-white font-extrabold text-xs shadow-md"
            >
              Apply Online (Session 2025-26)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
