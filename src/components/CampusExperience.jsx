import React, { useState } from 'react';
import { 
  Building2, 
  Sparkles, 
  Compass, 
  MapPin, 
  Wifi, 
  Coffee, 
  ShieldCheck, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import { CAMPUS_FACILITIES } from '../data/mockData';

export default function CampusExperience({ onOpenTour }) {
  const [activeTab, setActiveTab] = useState(CAMPUS_FACILITIES[0].id);

  const currentFacility = CAMPUS_FACILITIES.find(f => f.id === activeTab) || CAMPUS_FACILITIES[0];

  return (
    <section id="campus" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-500/30">
              <Compass className="w-3.5 h-3.5" />
              Campus Living & Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              A Vibrant Sanctuary Designed for Collaboration & Life
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Spanning 130 park-like acres, our campus seamlessly fuses timeless collegiate architecture with modern sustainable research facilities.
            </p>
          </div>

          <button
            onClick={onOpenTour}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/20 transition-all self-start md:self-auto"
          >
            <span>Launch 360° Virtual Tour</span>
            <Compass className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Controls Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-800">
          {CAMPUS_FACILITIES.map((facility) => {
            const isActive = facility.id === activeTab;
            return (
              <button
                key={facility.id}
                onClick={() => setActiveTab(facility.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-md scale-100'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{facility.name.split('&')[0]}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-blue-100 text-blue-800' : 'bg-slate-800 text-slate-400'
                }`}>
                  {facility.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Facility Showcase Card */}
        <div className="bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Visual Presentation (7 Cols) */}
          <div className="lg:col-span-7 relative h-[360px] sm:h-[480px] overflow-hidden group">
            <img 
              src={currentFacility.image} 
              alt={currentFacility.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            
            {/* Stat Pill */}
            <div className="absolute top-5 left-5">
              <span className="px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md text-amber-300 font-bold text-xs border border-slate-700 shadow-lg">
                ★ {currentFacility.stat}
              </span>
            </div>

            {/* Bottom Tag */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-red-400" />
                Main Campus Quadrangle
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30">
                Open 24/7 with Student Card
              </span>
            </div>
          </div>

          {/* Details & Specifications (5 Cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 space-y-6">
            
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
              {currentFacility.category}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {currentFacility.name}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {currentFacility.desc}
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs">
                <div className="text-slate-400 font-medium">Gigabit Connectivity</div>
                <div className="font-bold text-white mt-0.5">WiFi-6E Mesh Across Grounds</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs">
                <div className="text-slate-400 font-medium">Safety Rating</div>
                <div className="font-bold text-emerald-400 mt-0.5">24/7 Dedicated Campus Police</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs">
                <div className="text-slate-400 font-medium">Dining & Cafés</div>
                <div className="font-bold text-white mt-0.5">6 Artisan Dining Venues</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs">
                <div className="text-slate-400 font-medium">Accessibility</div>
                <div className="font-bold text-blue-300 mt-0.5">100% ADA Universal Access</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenTour}
                className="w-full py-3 px-4 rounded-xl bg-slate-700/80 hover:bg-slate-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 border border-slate-600"
              >
                <span>Explore Inside with Interactive 360° View</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
