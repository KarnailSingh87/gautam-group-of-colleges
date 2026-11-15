import React, { useState } from 'react';
import { Search, ChevronRight, Newspaper, BookOpen, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function HimtuMediaPrograms({ onOpenApply, onNavigate }) {
  const [searchProgram, setSearchProgram] = useState('');

  const popularDegrees = [
    {
      name: 'Bachelor of Pharmacy (B.Pharm)',
      duration: '4 Years',
      dept: 'Gautam College of Pharmacy (PCI)',
      seats: '60 Seats'
    },
    {
      name: 'B.Sc. Nursing & GNM',
      duration: '4 Years / 3 Yrs',
      dept: 'Gautam College of Nursing (INC)',
      seats: '60 Seats'
    },
    {
      name: 'Bachelor of Business Administration (BBA)',
      duration: '3 Years',
      dept: 'GIMT (AICTE / HPTU)',
      seats: '60 Seats'
    },
    {
      name: 'Bachelor of Hotel Management (BHM)',
      duration: '4 Years',
      dept: 'Gautam College of Hotel Management',
      seats: '40 Seats'
    },
    {
      name: 'Bachelor of Computer Applications (BCA)',
      duration: '3 Years',
      dept: 'Gautam PG Degree College (HPU)',
      seats: '60 Seats'
    }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onOpenApply) {
      onOpenApply('apply', searchProgram || 'Undergraduate Programs');
    }
  };

  return (
    <section className="bg-white py-12 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 1. GGC Media Section (Exact HPTU Media Style) */}
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-[#ea580c] uppercase tracking-wide mb-6">
            GGC Media
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Life @ GGC */}
            <div 
              onClick={() => onNavigate && onNavigate('gallery')}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" 
                  alt="Life @ GGC" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center font-bold text-slate-800 text-sm group-hover:text-[#ea580c] transition">
                Life @ GGC
              </div>
            </div>

            {/* Card 2: Newsletter */}
            <div 
              onClick={() => onNavigate && onNavigate('downloads')}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80" 
                  alt="Newsletter" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center font-bold text-slate-800 text-sm group-hover:text-[#ea580c] transition">
                Newsletter & Annual Report
              </div>
            </div>

            {/* Card 3: Latest News */}
            <div 
              onClick={() => onNavigate && onNavigate('downloads')}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <img 
                  src="/himachaltonite-event.webp" 
                  alt="Latest News" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center font-bold text-slate-800 text-sm group-hover:text-[#ea580c] transition">
                Latest News & Press Coverage
              </div>
            </div>

          </div>
        </div>

        {/* 2. Most Popular Degrees & Search Bar (Exact HPTU Style) */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            
            {/* Title & All UG Programs Pill */}
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                Most Popular Undergraduate Degrees
              </h3>
              <button
                onClick={() => onOpenApply('apply')}
                className="mt-3 px-5 py-2 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold transition shadow-xs"
              >
                All Undergraduate Programs
              </button>
            </div>

            {/* Search Programs Form */}
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 max-w-md w-full">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search Program (e.g. Pharmacy, Nursing, MBA)..."
                  value={searchProgram}
                  onChange={(e) => setSearchProgram(e.target.value)}
                  className="w-full pl-3 pr-4 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 bg-white focus:outline-none focus:border-[#ea580c]"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs uppercase tracking-wider transition shrink-0"
              >
                Apply
              </button>
            </form>

          </div>

          {/* Degrees Horizontal Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularDegrees.slice(0, 4).map((deg, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#ea580c] transition">
                <div className="space-y-1.5">
                  <div className="text-[10px] font-bold text-[#ea580c] uppercase tracking-wider">
                    {deg.duration} • {deg.seats}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {deg.name}
                  </h4>
                  <div className="text-xs text-slate-500">
                    {deg.dept}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end">
                  <button
                    onClick={() => onOpenApply('apply', deg.name)}
                    className="px-3 py-1 rounded border border-slate-300 hover:border-[#ea580c] hover:bg-[#ea580c] hover:text-white text-slate-700 text-xs font-bold transition shadow-2xs"
                  >
                    View Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
