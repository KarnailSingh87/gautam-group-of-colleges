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
  Users
} from 'lucide-react';

export default function Navbar({ 
  preset, 
  onOpenApply, 
  onOpenTour,
  onScrollToPrograms 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-[37px] z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Institutional Ribbon / Announcement Banner */}
      <div className="bg-slate-900 text-white text-[11px] py-1.5 px-4 hidden sm:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold uppercase tracking-wider text-[10px] border border-amber-500/30">
              Admissions Alert
            </span>
            <span className="text-slate-300">
              Fall 2025 Regular Decision Deadline: <strong className="text-white">January 15</strong>
            </span>
            <span className="text-slate-500">•</span>
            <a 
              href="#events" 
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2 flex items-center gap-1"
            >
              RSVP for Virtual Open Day (Dec 22)
            </a>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button 
              onClick={() => onOpenApply('request-info')} 
              className="hover:text-white transition-colors"
            >
              Request Prospectus
            </button>
            <span>•</span>
            <a href="#tuition" className="hover:text-white transition-colors">
              Net Price Calculator
            </a>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              Admissions Portal Open
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Crest */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-900 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-slate-700/50">
                <GraduationCap className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <div className="font-serif font-black text-xl tracking-tight text-slate-900 leading-none group-hover:text-blue-700 transition-colors">
                  {preset.name}
                </div>
                <div className="text-[11px] font-medium text-slate-500 tracking-wide uppercase mt-1 flex items-center gap-1.5">
                  <span>Est. {preset.founded}</span>
                  <span className="text-slate-300">|</span>
                  <span className="truncate max-w-[180px] sm:max-w-none">{preset.location}</span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            
            {/* Academics Dropdown */}
            <div className="relative group">
              <button 
                onClick={onScrollToPrograms}
                className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/60 transition-all flex items-center gap-1"
              >
                Academics
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-2 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-2">
                <a 
                  href="#programs" 
                  onClick={onScrollToPrograms}
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <BookOpen className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Undergraduate & Graduate</div>
                    <div className="text-xs text-slate-500">Explore 140+ accredited degree tracks</div>
                  </div>
                </a>
                <a 
                  href="#bento" 
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <Building className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Schools & Faculties</div>
                    <div className="text-xs text-slate-500">Engineering, Business, Health & Arts</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Admissions */}
            <a 
              href="#tuition" 
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/60 transition-all"
            >
              Admissions & Aid
            </a>

            {/* Campus Life */}
            <a 
              href="#campus" 
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/60 transition-all"
            >
              Campus Life
            </a>

            {/* Research */}
            <a 
              href="#bento" 
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/60 transition-all"
            >
              Research & Impact
            </a>

            {/* Events */}
            <a 
              href="#events" 
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/60 transition-all"
            >
              Events
            </a>

          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Search Trigger */}
            <button
              onClick={onScrollToPrograms}
              className="p-2.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="Search Degree Programs"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Virtual Tour Quick Launch */}
            <button
              onClick={onOpenTour}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              <Compass className="w-4 h-4 text-blue-600" />
              <span>360° Tour</span>
            </button>

            {/* High-Impact Apply CTA Button */}
            <button
              onClick={() => onOpenApply('apply')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all active:scale-95"
            >
              <span>Apply Now</span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </button>

          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenApply('apply')}
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-semibold text-xs shadow-sm"
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
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            <button
              onClick={() => {
                onScrollToPrograms();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-md font-semibold text-slate-800 hover:bg-slate-50 text-sm"
            >
              Academics & Degree Finder
            </button>
            <a
              href="#tuition"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-semibold text-slate-800 hover:bg-slate-50 text-sm"
            >
              Admissions & Scholarship Estimator
            </a>
            <a
              href="#campus"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-semibold text-slate-800 hover:bg-slate-50 text-sm"
            >
              Campus Life & Dorms
            </a>
            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-semibold text-slate-800 hover:bg-slate-50 text-sm"
            >
              Upcoming Events & Calendar
            </a>
            <a
              href="#stories"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-semibold text-slate-800 hover:bg-slate-50 text-sm"
            >
              Alumni Success
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenTour();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-200 text-slate-700 font-semibold text-sm"
            >
              <Compass className="w-4 h-4 text-blue-600" />
              Take Virtual Campus Tour
            </button>
            <button
              onClick={() => {
                onOpenApply('apply');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm shadow-md"
            >
              Apply Online (Fall 2025)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
