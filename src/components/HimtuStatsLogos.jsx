import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, BookOpen, Clock, Building2, ExternalLink } from 'lucide-react';

export default function HimtuStatsLogos() {
  const [logoIndex, setLogoIndex] = useState(0);

  const stats = [
    {
      value: '10,000+',
      label: 'Students Graduated',
      sub: 'Alumni across leading MNCs & Govt hospitals',
      icon: GraduationCap,
      color: 'text-blue-600'
    },
    {
      value: '50+',
      label: 'Academic Programs',
      sub: 'UG, PG, Diploma, Doctoral & Vocational',
      icon: BookOpen,
      color: 'text-[#ea580c]'
    },
    {
      value: '25+',
      label: 'Years of History',
      sub: 'Serving Himachal Pradesh since 1999',
      icon: Clock,
      color: 'text-amber-600'
    },
    {
      value: '6+',
      label: 'Constituent Colleges',
      sub: 'Pharmacy, Nursing, Management, IT & Degree',
      icon: Building2,
      color: 'text-emerald-600'
    }
  ];

  const statutoryLogos = [
    {
      name: 'SWAYAM & NPTEL',
      abbr: 'SWAYAM',
      body: 'Ministry of Education, GoI',
      url: 'https://swayam.gov.in',
      tag: 'E-Learning'
    },
    {
      name: 'University Grants Commission',
      abbr: 'UGC',
      body: 'Section 2(f) & 12(B) Recognized',
      url: 'https://www.ugc.gov.in',
      tag: 'Statutory Body'
    },
    {
      name: 'All India Council for Technical Education',
      abbr: 'AICTE',
      body: 'Statutory Body for Technical Education',
      url: 'https://www.aicte-india.org',
      tag: 'Technical'
    },
    {
      name: 'Government of Himachal Pradesh',
      abbr: 'HP Govt.',
      body: 'Department of Higher Education',
      url: 'https://himachal.nic.in',
      tag: 'State Govt'
    },
    {
      name: 'Pharmacy Council of India',
      abbr: 'PCI',
      body: 'Apex Council for Pharmacy Education',
      url: 'https://www.pci.nic.in',
      tag: 'Healthcare'
    },
    {
      name: 'Indian Nursing Council',
      abbr: 'INC',
      body: 'Apex Body for Nursing Education',
      url: 'https://indiannursingcouncil.org',
      tag: 'Nursing'
    },
    {
      name: 'Himachal Pradesh Technical University',
      abbr: 'HPTU',
      body: 'State Technical University, Hamirpur',
      url: 'https://www.himtu.ac.in',
      tag: 'Affiliation'
    },
    {
      name: 'Himachal Pradesh University',
      abbr: 'HPU',
      body: 'Summer Hill, Shimla',
      url: 'https://www.hpuniv.ac.in',
      tag: 'Affiliation'
    }
  ];

  const handlePrev = () => {
    setLogoIndex((prev) => (prev === 0 ? statutoryLogos.length - 4 : Math.max(0, prev - 1)));
  };

  const handleNext = () => {
    setLogoIndex((prev) => (prev >= statutoryLogos.length - 4 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-12 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 1. Four Stat Counters Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-slate-200/80">
          {stats.map((st, i) => {
            const Icon = st.icon;
            return (
              <div key={i} className="flex items-center gap-4 px-2">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-inner">
                  <Icon className={`w-6 h-6 ${st.color}`} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {st.value}
                  </div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {st.label}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium hidden sm:block">
                    {st.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Statutory Approvals & Apex Links Carousel */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block">
                Statutory Regulatory Authorities & Apex Affiliations
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Recognized & Approved By National Accreditation Councils
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Apex Body"
                className="w-8 h-8 rounded-full bg-[#ea580c] text-white flex items-center justify-center hover:bg-orange-700 transition shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Apex Body"
                className="w-8 h-8 rounded-full bg-[#ea580c] text-white flex items-center justify-center hover:bg-orange-700 transition shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {statutoryLogos.slice(logoIndex, logoIndex + 4).map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#ea580c] hover:shadow-md transition-all flex flex-col justify-between h-28"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2 py-0.5 rounded bg-blue-900 text-amber-300 font-mono tracking-wider">
                    {item.abbr}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 group-hover:text-[#ea580c] flex items-center gap-0.5">
                    Verify <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-[#ea580c] transition">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {item.body}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
