import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  GraduationCap, 
  Building2, 
  User, 
  FileText, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Compass, 
  Sparkles,
  BookOpen,
  HeartPulse,
  Server
} from 'lucide-react';
import { COURSES_DETAIL, SEAT_MATRIX_FEES, FACULTY_MEMBERS, INSTITUTION_INFO, TELEPHONE_DIRECTORY } from '../data/blueprintData';

export default function GlobalSearchModal({ 
  isOpen, 
  onClose, 
  onNavigate, 
  onOpenApply, 
  onOpenResults, 
  onOpenPortal 
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut listener (Escape to close, Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  // 1. Pages & Sections
  const pageItems = [
    { title: 'Home', desc: 'Main college portal & announcements', page: 'home', icon: Building2 },
    { title: 'Academics & Curricula', desc: 'Degree programs, seat matrix (1,165 seats) & syllabi', page: 'academics', icon: GraduationCap },
    { title: 'Admissions 2025–26', desc: 'Eligibility, fee matrix, counseling & direct merit', page: 'admissions', icon: CheckCircle2 },
    { title: 'Constituent Colleges', desc: 'Degree, GIMT, Nursing, Pharmacy & Polytechnic', page: 'about', icon: Building2 },
    { title: 'Campus Facilities & Infrastructure', desc: 'Hostels, Troodon library, gym, labs & 24-hr Wi-Fi', page: 'facilities', icon: Server },
    { title: 'Photo / Video Gallery', desc: 'NIT Hamirpur style photo/video media gallery', page: 'gallery', icon: Compass },
    { title: 'Faculty & Administration', desc: '23+ verified faculty profiles and departments', page: 'faculty', icon: User },
    { title: 'Official Downloads & Prospectus', desc: 'Application forms, datesheets, tender notices', page: 'downloads', icon: FileText },
    { title: 'Contact & Telephone Directory', desc: 'Hamirpur campus location, landlines: 01972-221493 / 223557', page: 'contact', icon: Phone },
    { title: 'Alumni Network', desc: 'Alumni stories, registration & reunions', page: 'alumni', icon: Sparkles }
  ].filter(p => !q || p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));

  // 2. Courses & Degrees
  const courseItems = SEAT_MATRIX_FEES.filter(c => 
    !q || 
    c.course.toLowerCase().includes(q) || 
    c.college.toLowerCase().includes(q) ||
    c.feeIndicative.toLowerCase().includes(q) ||
    c.admissionRoute.toLowerCase().includes(q)
  );

  // 3. Faculty Members
  const facultyItems = FACULTY_MEMBERS.filter(f =>
    !q ||
    f.name.toLowerCase().includes(q) ||
    f.dept.toLowerCase().includes(q) ||
    f.qualification.toLowerCase().includes(q) ||
    f.designation.toLowerCase().includes(q)
  ).slice(0, 4);

  // 4. Quick Services
  const serviceItems = [
    { title: 'HPTU Examination Results Portal', action: () => { onClose(); onOpenResults(); }, desc: 'Check re-evaluation, odd/even semester marksheets' },
    { title: 'Student ABC / NAD Digital Portal', action: () => { onClose(); onOpenPortal(); }, desc: 'Academic Bank of Credits (ABC ID) & student login' },
    { title: 'AMRU Nursing Entrance Portal', url: 'https://amruhp.ac.in', desc: 'Official entrance portal for B.Sc Nursing admissions' },
    { title: 'HPTU Official University Portal', url: 'https://www.himtu.ac.in', desc: 'State technical university notifications & syllabus' },
    { title: 'HPU Shimla Official University Portal', url: 'https://www.hpuniv.ac.in', desc: 'Degree college affiliation & examination wing' }
  ].filter(s => !q || s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q));

  const totalResults = pageItems.length + courseItems.length + facultyItems.length + serviceItems.length;

  const handleSelectPage = (page) => {
    onClose();
    if (onNavigate) onNavigate(page);
  };

  const handleSelectCourse = (course) => {
    onClose();
    if (onOpenApply) onOpenApply('apply', course.course);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-start justify-center pt-14 sm:pt-20 px-3 sm:px-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[82vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e3a8a] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, fees, faculty, hostels, polytechnic, results..."
            className="w-full bg-transparent text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 bg-slate-200/60 rounded-md font-bold"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/60 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition shrink-0"
            title="Close Search (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-4 py-2.5 bg-slate-100/70 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto text-[11px] text-slate-600">
          <span className="font-bold text-slate-400 uppercase tracking-wider shrink-0">Quick Filters:</span>
          {['BCA', 'B.Sc Nursing', 'D.Pharma', 'MBA', 'Polytechnic', 'Faculty', 'Hostel', 'Fees', 'Contact'].map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-2.5 py-0.5 rounded-full bg-white hover:bg-blue-50 hover:text-[#1e3a8a] border border-slate-200 shrink-0 font-medium transition shadow-2xs"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Search Results Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 divide-y divide-slate-100">
          
          {/* Courses & Seat Matrix */}
          {courseItems.length > 0 && (
            <div className="space-y-2.5 first:pt-0 pt-4">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-[#1e3a8a]">
                  <GraduationCap className="w-4 h-4" />
                  <span>Approved Academic Programs ({courseItems.length})</span>
                </span>
                <span className="text-[10px] text-slate-400">Click to Apply or View Fees</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {courseItems.map((c, i) => (
                  <div
                    key={i}
                    onClick={() => handleSelectCourse(c)}
                    className="p-3 rounded-xl border border-slate-200 bg-white hover:border-[#ea580c] hover:shadow-xs transition cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-bold text-[#ea580c] uppercase">{c.college}</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                          {c.seats} Seats
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm mt-0.5">{c.course}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Indicative Fee: <strong className="text-slate-800">{c.feeIndicative}</strong></p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 truncate max-w-[180px]">{c.admissionRoute}</span>
                      <span className="font-bold text-[#1e3a8a] flex items-center gap-0.5">
                        <span>Apply</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pages & Sections */}
          {pageItems.length > 0 && (
            <div className="space-y-2.5 pt-4">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#1e3a8a]" />
                <span>Website Pages & Facilities</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pageItems.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={i}
                      onClick={() => handleSelectPage(p.page)}
                      className="p-3 rounded-xl border border-slate-200 bg-white hover:bg-blue-50/50 hover:border-[#1e3a8a] transition cursor-pointer flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-slate-900 text-xs truncate">{p.title}</h5>
                        <p className="text-[11px] text-slate-500 truncate">{p.desc}</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Faculty Members */}
          {facultyItems.length > 0 && (
            <div className="space-y-2.5 pt-4">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#1e3a8a]" />
                <span>Faculty Directory</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {facultyItems.map((f) => (
                  <div
                    key={f.id}
                    onClick={() => handleSelectPage('faculty')}
                    className="p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <h5 className="font-bold text-slate-900 text-xs">{f.name}</h5>
                      <p className="text-[11px] text-slate-500">{f.designation} • {f.dept}</p>
                    </div>
                    <span className="text-[10px] font-bold text-[#ea580c] bg-orange-50 px-2 py-0.5 rounded">
                      View Bio
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Services & Portals */}
          {serviceItems.length > 0 && (
            <div className="space-y-2.5 pt-4">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Examination & Statutory Portals</span>
              </div>
              <div className="space-y-1.5">
                {serviceItems.map((s, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      if (s.action) s.action();
                      else if (s.url) window.open(s.url, '_blank');
                    }}
                    className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#1e3a8a] transition cursor-pointer flex items-center justify-between text-xs"
                  >
                    <div>
                      <strong className="text-slate-900 font-bold">{s.title}</strong>
                      <p className="text-[11px] text-slate-500">{s.desc}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Zero Results State */}
          {totalResults === 0 && (
            <div className="py-12 text-center space-y-3">
              <Search className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="font-bold text-slate-800 text-sm">No results found for "{query}"</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching for general keywords like <strong>Pharmacy</strong>, <strong>Nursing</strong>, <strong>BCA</strong>, <strong>Hostel</strong>, <strong>Fees</strong>, or <strong>Faculty</strong>.
              </p>
              <button
                onClick={() => setQuery('')}
                className="mt-2 px-4 py-1.5 rounded-lg bg-[#1e3a8a] text-white text-xs font-bold"
              >
                Reset Search
              </button>
            </div>
          )}

        </div>

        {/* Footer Shortcut Bar */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-medium">
          <div className="flex items-center gap-4">
            <span>Hamirpur Campus: <strong>01972-221493 / 223557</strong></span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Admissions: <strong>+91-9816687100</strong></span>
          </div>
          <div>
            Press <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 font-mono text-[10px]">Esc</kbd> to close
          </div>
        </div>

      </div>
    </div>
  );
}
