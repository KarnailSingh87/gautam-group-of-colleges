import React from 'react';
import { Quote, Star, ArrowUpRight, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { ALUMNI_TESTIMONIALS } from '../data/mockData';

export default function AlumniStories({ onOpenApply }) {
  return (
    <section id="stories" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Proven Graduate Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From First Lecture to Global Leadership
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Hear directly from graduates who translated our research-intensive curriculum into leadership careers across tech, medicine, finance, and the arts.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ALUMNI_TESTIMONIALS.map((alumni) => (
            <div
              key={alumni.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Quote Icon & Company Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Quote className="w-5 h-5 fill-current" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                    {alumni.company}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-8">
                  "{alumni.quote}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-13 h-13 rounded-full object-cover ring-2 ring-blue-500/30"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-snug">
                    {alumni.name}
                  </h4>
                  <div className="text-xs text-blue-600 font-semibold mt-0.5">
                    {alumni.role}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {alumni.degree}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Employer Brands Banner */}
        <div className="mt-16 text-center">
          <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">
            Where Our Graduates Work & Lead
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-slate-400 font-bold text-base sm:text-lg grayscale opacity-70">
            <span className="hover:grayscale-0 hover:text-slate-800 transition-colors">Google DeepMind</span>
            <span className="hover:grayscale-0 hover:text-slate-800 transition-colors">Goldman Sachs</span>
            <span className="hover:grayscale-0 hover:text-slate-800 transition-colors">Apple Inc.</span>
            <span className="hover:grayscale-0 hover:text-slate-800 transition-colors">Mayo Clinic</span>
            <span className="hover:grayscale-0 hover:text-slate-800 transition-colors">McKinsey & Co.</span>
            <span className="hover:grayscale-0 hover:text-slate-800 transition-colors">NASA JPL</span>
          </div>
        </div>

      </div>
    </section>
  );
}
