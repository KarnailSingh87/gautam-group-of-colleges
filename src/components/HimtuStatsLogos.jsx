import React from 'react';
import { GraduationCap, BookOpen, Clock, Building2 } from 'lucide-react';
import { getCdnUrl } from '../utils/cloudinary';

export default function HimtuStatsLogos() {

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
      tag: 'E-Learning',
      logo: '/apex-logos/swayam.png'
    },
    {
      name: 'University Grants Commission',
      abbr: 'UGC',
      body: 'Section 2(f) & 12(B) Recognized',
      url: 'https://www.ugc.gov.in',
      tag: 'Statutory Body',
      logo: '/apex-logos/ugc.png'
    },
    {
      name: 'All India Council for Technical Education',
      abbr: 'AICTE',
      body: 'Statutory Body for Technical Education',
      url: 'https://www.aicte-india.org',
      tag: 'Technical',
      logo: '/apex-logos/aicte.png'
    },
    {
      name: 'Government of Himachal Pradesh',
      abbr: 'HP Govt.',
      body: 'Department of Higher Education',
      url: 'https://himachal.nic.in',
      tag: 'State Govt',
      logo: '/apex-logos/hp_govt.svg'
    },
    {
      name: 'Pharmacy Council of India',
      abbr: 'PCI',
      body: 'Apex Council for Pharmacy Education',
      url: 'https://www.pci.nic.in',
      tag: 'Healthcare',
      logo: '/apex-logos/pci.png'
    },
    {
      name: 'Indian Nursing Council',
      abbr: 'INC',
      body: 'Apex Body for Nursing Education',
      url: 'https://indiannursingcouncil.org',
      tag: 'Nursing',
      logo: '/apex-logos/inc.png'
    },
    {
      name: 'Himachal Pradesh Technical University',
      abbr: 'HPTU',
      body: 'State Technical University, Hamirpur',
      url: 'https://www.himtu.ac.in',
      tag: 'Affiliation',
      logo: '/apex-logos/hptu.svg'
    },
    {
      name: 'Himachal Pradesh University',
      abbr: 'HPU',
      body: 'Summer Hill, Shimla',
      url: 'https://www.hpuniv.ac.in',
      tag: 'Affiliation',
      logo: '/apex-logos/hpu.svg'
    }
  ];

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

        {/* 2. Statutory Approvals & Apex Affiliations Logos in a Single Line */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block">
              Statutory Regulatory Authorities & Apex Affiliations
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Recognized & Approved By National Accreditation Councils
            </h3>
          </div>

          {/* All 8 Logos in One Line (Only Logos, No Text) */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-4 items-center">
            {statutoryLogos.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${item.name} (${item.abbr})`}
                className="group h-20 sm:h-24 p-2 sm:p-3 rounded-xl border border-slate-200 bg-white hover:border-[#ea580c] hover:shadow-md transition-all flex items-center justify-center"
              >
                <img 
                  src={getCdnUrl(item.logo)} 
                  alt={item.name} 
                  className="max-h-12 sm:max-h-14 max-w-full object-contain group-hover:scale-105 transition-transform" 
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
