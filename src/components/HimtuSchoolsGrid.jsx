import React from 'react';
import { 
  ArrowUpRight, 
  GraduationCap, 
  Building2, 
  Stethoscope, 
  Briefcase, 
  Microscope,
  Wrench,
  BookOpen,
  Activity
} from 'lucide-react';
import { getCdnUrl } from '../utils/cloudinary';

export default function HimtuSchoolsGrid({ onNavigate, onOpenApply }) {
  const schools = [
    {
      id: 'pharmacy',
      code: 'GCP',
      title: 'Gautam College of Pharmacy',
      category: 'Pharmaceutical Sciences & Research',
      summary: 'B.Pharmacy • D.Pharmacy • M.Pharm',
      approval: 'PCI New Delhi & HPTU Affiliated',
      image: '/ggc-media/life-at-ggc.webp',
      icon: Microscope,
      badgeColor: 'bg-emerald-600'
    },
    {
      id: 'nursing',
      code: 'GCN',
      title: 'Gautam College of Nursing',
      category: 'Nursing & Allied Healthcare',
      summary: 'B.Sc. Nursing • Post-Basic • GNM',
      approval: 'INC New Delhi & AMRU Affiliated',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
      icon: Stethoscope,
      badgeColor: 'bg-rose-600'
    },
    {
      id: 'management',
      code: 'GIMT',
      title: 'Gautam Institute of Management & Technology',
      category: 'Management, Commerce & IT',
      summary: 'MBA • MCA • BBA • BCA',
      approval: 'AICTE New Delhi & HPTU Affiliated',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
      icon: Briefcase,
      badgeColor: 'bg-blue-600'
    },
    {
      id: 'degree',
      code: 'GDC',
      title: 'Gautam PG Degree College',
      category: 'Basic Sciences & Humanities',
      summary: 'M.Sc • M.Com • MA • B.Sc • B.Com',
      approval: 'UGC 2(f) & 12(B) • HPU Affiliated',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80',
      icon: GraduationCap,
      badgeColor: 'bg-amber-600'
    },
    {
      id: 'hotel',
      code: 'GCHM',
      title: 'Gautam College of Hotel Management',
      category: 'Hospitality & Tourism',
      summary: 'Bachelor of Hotel Management (BHM)',
      approval: 'HPTU Hamirpur Affiliated',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
      icon: Building2,
      badgeColor: 'bg-teal-600'
    },
    {
      id: 'polytechnic',
      code: 'GPC',
      title: 'Gautam Polytechnic College',
      category: 'Engineering & Technology',
      summary: 'Diploma: Mech • Civil • Elect • CS',
      approval: 'AICTE Approved & HPTSB Affiliated',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      icon: Wrench,
      badgeColor: 'bg-indigo-600'
    },
    {
      id: 'education',
      code: 'GCE',
      title: 'Gautam College of Education',
      category: 'Teacher Training & Pedagogy',
      summary: 'B.Ed (2 Years) • D.El.Ed • M.Ed',
      approval: 'NCTE Approved & HPU Affiliated',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
      icon: BookOpen,
      badgeColor: 'bg-purple-600'
    },
    {
      id: 'paramedical',
      code: 'GSAH',
      title: 'Gautam School of Allied Health Sciences',
      category: 'Medical Lab & Diagnostic Tech',
      summary: 'BMLT • Radiography • OT Tech',
      approval: 'HPNRC & AMRU Affiliated',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
      icon: Activity,
      badgeColor: 'bg-cyan-600'
    }
  ];

  const handleCardClick = (school) => {
    if (onNavigate) {
      onNavigate('academics');
    } else if (onOpenApply) {
      onOpenApply('apply', school.title);
    }
  };

  return (
    <section className="bg-slate-50 py-12 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Description */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#ea580c] text-xs font-black uppercase tracking-wider mb-2">
              Constituent Institutions
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#1e3a8a] uppercase tracking-tight">
              USS: University School of Studies / Constituent Colleges
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-3xl">
              Explore 8 premier colleges under Gautam Group of Colleges offering approved degrees in Pharmacy, Nursing, Engineering, Management, Sciences, Education and Hospitality.
            </p>
          </div>
        </div>

        {/* 8-Card Responsive Grid (4 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {schools.map((school) => {
            const Icon = school.icon;
            return (
              <div
                key={school.id}
                onClick={() => handleCardClick(school)}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-orange-300 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* 1. Visible High-Quality Image with Badge & Icon */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={getCdnUrl(school.image)}
                    alt={school.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient for Badge Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                  {/* Top Left: Code Badge */}
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[11px] font-mono font-bold text-amber-300 border border-white/20 shadow-xs">
                    {school.code}
                  </span>

                  {/* Top Right: Subject Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-800 shadow-xs group-hover:bg-[#ea580c] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* 2. Compact Content Body */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
                      {school.category}
                    </span>
                    <h3 className="text-sm font-black text-slate-900 leading-snug mt-0.5 group-hover:text-[#ea580c] transition-colors line-clamp-2">
                      {school.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-semibold mt-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="truncate">{school.summary}</span>
                    </p>
                  </div>

                  {/* 3. Action: Explore Programs Button */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(school);
                      }}
                      className="w-full py-2 px-3 rounded-xl bg-orange-50 hover:bg-[#ea580c] text-[#ea580c] hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs group/btn"
                    >
                      <span>Explore Programs</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
