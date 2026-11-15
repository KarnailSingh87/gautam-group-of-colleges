import React from 'react';
import { Building2, Award, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { CONSTITUENT_COLLEGES } from '../data/mockData';

export default function ConstituentColleges({ onOpenApply }) {
  return (
    <section id="colleges" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            Under The Aegis of Gautam Group
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our 6 Constituent Colleges & Faculties
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A comprehensive collegiate ecosystem in Hamirpur offering accredited undergraduate, postgraduate, and diploma degrees recognized across India.
          </p>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONSTITUENT_COLLEGES.map((college) => (
            <div
              key={college.id}
              className="group bg-slate-50 hover:bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-indigo-500 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold shadow">
                      {college.degrees.split('•')[0]}
                    </span>
                    {college.id === 'nursing' && (
                      <span className="px-2 py-0.5 rounded-full bg-indigo-600/90 text-white text-[9px] font-bold shadow">
                        Real Campus Photo
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                    {college.name}
                  </h3>

                  <div className="mt-2 text-xs font-semibold text-indigo-700 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="line-clamp-1">{college.approvals}</span>
                  </div>

                  <div className="mt-3 p-2.5 rounded-xl bg-slate-100 text-xs text-slate-800 font-medium">
                    <span className="font-bold text-slate-900">Programs: </span>
                    {college.degrees}
                  </div>

                  <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {college.highlights}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenApply('request-info', college.name)}
                  className="text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors"
                >
                  View Prospectus
                </button>
                <button
                  onClick={() => onOpenApply('apply', college.name)}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
                >
                  Apply to College
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
