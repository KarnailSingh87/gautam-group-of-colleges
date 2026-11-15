import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, GraduationCap, Building2, Stethoscope, Briefcase, Microscope } from 'lucide-react';

export default function HimtuSchoolsGrid({ onNavigate, onOpenApply }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const schools = [
    {
      id: 'pharmacy',
      code: 'GCP',
      title: 'Gautam College of Pharmacy',
      category: 'Pharmaceutical Sciences & Research',
      approval: 'PCI New Delhi & HPTU Hamirpur Affiliated',
      description: 'Pioneering pharmaceutical education in Himachal Pradesh with advanced HPLC, pharmacology labs, aseptic formulation cleanrooms and hospital clinical tie-ups.',
      degrees: ['B.Pharmacy (4 Years)', 'D.Pharmacy (2 Years)', 'M.Pharm (Pharmaceutics)'],
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=700&q=80',
      icon: Microscope,
      badgeColor: 'bg-emerald-600'
    },
    {
      id: 'nursing',
      code: 'GCN',
      title: 'Gautam College of Nursing',
      category: 'Nursing & Allied Healthcare Sciences',
      approval: 'INC New Delhi, HPNRC Shimla & AMRU Mandi Affiliated',
      description: 'Accredited healthcare education center with multi-specialty clinical rotations at Dr. RKGMC Hamirpur, pediatric simulation labs and 100% placement track record.',
      degrees: ['B.Sc. Nursing (4 Years)', 'Post-Basic B.Sc. Nursing', 'GNM (3 Years)'],
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80',
      icon: Stethoscope,
      badgeColor: 'bg-rose-600'
    },
    {
      id: 'management',
      code: 'GIMT',
      title: 'Gautam Institute of Management & Technology',
      category: 'School of Commerce, Management & IT',
      approval: 'AICTE New Delhi & HPTU Hamirpur Affiliated',
      description: 'Fostering future corporate executives and IT architects with high-speed computing centers, Bloomberg terminals, business analytics and startup incubator.',
      degrees: ['MBA (Dual Specialization)', 'MCA (2 Years)', 'BBA', 'BCA'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80',
      icon: Briefcase,
      badgeColor: 'bg-blue-600'
    },
    {
      id: 'degree',
      code: 'GDC',
      title: 'Gautam PG Degree College',
      category: 'School of Basic Sciences, Humanities & Education',
      approval: 'UGC 2(f) & 12(B), HPU Shimla Affiliated & NCTE Approved',
      description: 'Comprehensive undergraduate & postgraduate disciplines in Physics, Chemistry, Zoology, Botany, Mathematics, Commerce, Humanities and Teacher Education.',
      degrees: ['M.Sc. Physics / Chem / Biotech', 'M.Com & MA', 'B.Sc. Medical / Non-Medical', 'B.Ed.'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=700&q=80',
      icon: GraduationCap,
      badgeColor: 'bg-amber-600'
    },
    {
      id: 'hotel',
      code: 'GCHM',
      title: 'Gautam College of Hotel Management',
      category: 'School of Tourism & Hospitality',
      approval: 'HPTU Hamirpur Affiliated & State Govt Approved',
      description: 'State-of-the-art production kitchen, food & beverage training restaurants, front office suites and 5-star international hotel chain internships.',
      degrees: ['Bachelor of Hotel Management (BHM)', 'Diploma in Food Production'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80',
      icon: Building2,
      badgeColor: 'bg-teal-600'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? schools.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === schools.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-12 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Navigation Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#ea580c] uppercase tracking-tight">
              USS: University School of Studies / Constituent Colleges
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-3xl">
              Explore the diverse academic disciplines offered across our specialized colleges. Each institution fosters innovation, clinical expertise, research, and industry-ready skills.
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Previous School"
              className="w-9 h-9 rounded-full bg-[#ea580c] text-white flex items-center justify-center hover:bg-orange-700 active:scale-95 transition shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next School"
              className="w-9 h-9 rounded-full bg-[#ea580c] text-white flex items-center justify-center hover:bg-orange-700 active:scale-95 transition shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {schools.map((school, idx) => {
            const Icon = school.icon;
            return (
              <div
                key={school.id}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 text-white flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 min-h-[380px]"
              >
                {/* Background Image with Dark Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={school.image}
                    alt={school.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />
                </div>

                {/* Card Top: Code badge + Icon */}
                <div className="relative z-10 p-5 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-amber-300 tracking-wider">
                    {school.code}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#ea580c] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Body: Title & Info */}
                <div className="relative z-10 p-5 pt-0 flex-1 flex flex-col justify-end">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                    {school.category}
                  </span>
                  <h3 className="text-lg font-black text-white leading-tight group-hover:text-amber-300 transition-colors">
                    {school.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed font-light">
                    {school.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/15">
                    <p className="text-[11px] font-mono text-blue-200 line-clamp-1 mb-3">
                      ✓ {school.approval}
                    </p>
                    
                    <button
                      onClick={() => onOpenApply ? onOpenApply('apply', school.title) : (onNavigate && onNavigate('academics'))}
                      className="w-full py-2 px-3 rounded-lg bg-[#ea580c] hover:bg-orange-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition active:scale-95 shadow-md"
                    >
                      <span>Explore Programs</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
