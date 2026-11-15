import React, { useState, useMemo } from 'react';
import { 
  Search, 
  GraduationCap, 
  Clock, 
  BookMarked, 
  CheckCircle, 
  DollarSign, 
  ArrowRight, 
  Sparkles,
  SlidersHorizontal,
  ChevronRight,
  Filter
} from 'lucide-react';
import { PROGRAMS } from '../data/mockData';

export default function ProgramFinder({ onOpenApply }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedDept, setSelectedDept] = useState('All');

  const levels = ['All', 'Undergraduate', 'Graduate', 'Doctoral'];
  const departments = [
    'All',
    'Engineering & Computing',
    'School of Management',
    'Health Sciences',
    'Arts & Architecture',
    'Arts & Humanities'
  ];

  const filteredPrograms = useMemo(() => {
    return PROGRAMS.filter((p) => {
      const matchesSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tag.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLevel = selectedLevel === 'All' || p.level === selectedLevel;
      const matchesDept = selectedDept === 'All' || p.department.includes(selectedDept) || selectedDept.includes(p.department);

      return matchesSearch && matchesLevel && matchesDept;
    });
  }, [searchQuery, selectedLevel, selectedDept]);

  return (
    <section id="programs" className="py-20 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Interactive Degree & Major Finder
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Discover Your Academic Path
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Search 140+ world-class degrees engineered with industry-led curricula, high-impact research, and exceptional career outcomes.
          </p>
        </div>

        {/* Search & Filter Control Bar (Modern 21st.dev Style) */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200/80 mb-10">
          
          {/* Main Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by major, field of interest, or career path (e.g. AI, Pre-Med, MBA, Architecture)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-slate-800 placeholder-slate-400 shadow-inner bg-slate-50/50"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 px-2 py-1 rounded bg-slate-100"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2 border-t border-slate-100">
            
            {/* Degree Level Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Level:
              </span>
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedLevel === lvl
                      ? 'bg-blue-600 text-white shadow-sm font-semibold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
              <span className="text-xs font-semibold text-slate-500 mr-1 hidden sm:inline">Discipline:</span>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all truncate max-w-[170px] ${
                    selectedDept === dept
                      ? 'bg-slate-900 text-white font-semibold'
                      : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

          </div>

          {/* Results count feedback */}
          <div className="mt-3 text-xs text-slate-500 flex items-center justify-between">
            <span>Showing <strong>{filteredPrograms.length}</strong> matching programs</span>
            {(searchQuery || selectedLevel !== 'All' || selectedDept !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLevel('All');
                  setSelectedDept('All');
                }}
                className="text-blue-600 hover:underline font-medium"
              >
                Reset all filters
              </button>
            )}
          </div>

        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Tag */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  
                  {/* Tag badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-sm">
                      {prog.tag}
                    </span>
                  </div>

                  {/* Level & Department */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[11px] font-medium text-blue-200 uppercase tracking-wider">
                      {prog.department}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                      {prog.level}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {prog.duration}
                    </span>
                    <span>•</span>
                    <span>{prog.credits}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {prog.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {prog.desc}
                  </p>

                  {/* Salary & Outcome Badge */}
                  <div className="mt-4 p-2.5 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-emerald-800 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      Career Outlook
                    </span>
                    <span className="text-xs font-extrabold text-emerald-700">
                      {prog.salary}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenApply('request-info', prog.title)}
                  className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1"
                >
                  <span>Curriculum</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenApply('apply', prog.title)}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm hover:shadow transition-all"
                >
                  Apply to Major
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No matching programs found</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
              Try adjusting your search keywords or switching filters to "All" to browse our complete academic directory.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLevel('All');
                setSelectedDept('All');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Catalog Action Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div>
            <h4 className="text-xl font-bold">Need assistance finding the right program?</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Connect with our dedicated academic advisors for a personalized 1-on-1 degree mapping consultation.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onOpenApply('advising')}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors shadow"
            >
              Schedule Advisor Call
            </button>
            <button
              onClick={() => onOpenApply('catalog')}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors"
            >
              Download Full 2025 Catalog (PDF)
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

function TrendingUpIcon(props) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
