import React, { useState } from 'react';
import { X, Compass, MapPin, Play, Volume2, Eye, ChevronRight, CheckCircle2, Calendar } from 'lucide-react';

const TOUR_STOPS = [
  {
    id: 1,
    title: 'Historic Quadrangle & Founder\'s Clock Tower',
    category: 'Collegiate Core',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    audioTrack: 'Audio Guide: Founded in 1888, the Quad serves as the social and intellectual heart of campus.',
    hotspots: [
      { name: 'Admissions Welcome Hall', x: '25%', y: '40%' },
      { name: 'Founder\'s Memorial Arch', x: '65%', y: '55%' },
    ]
  },
  {
    id: 2,
    title: 'Nexus AI & Quantum Computing Pavilion',
    category: 'Research Laboratories',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    audioTrack: 'Audio Guide: Featuring 120,000 sq.ft of cleanrooms and NVIDIA-accelerated clusters.',
    hotspots: [
      { name: 'Quantum Cryo Lab', x: '45%', y: '35%' },
      { name: 'Robotics Prototyping Bay', x: '75%', y: '60%' },
    ]
  },
  {
    id: 3,
    title: 'The Sterling Great Hall & Rare Book Library',
    category: 'Academic Sanctuary',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    audioTrack: 'Audio Guide: Over 1.8 million volumes and 24/7 climate-controlled study chambers.',
    hotspots: [
      { name: 'Gothic Vaulted Nave', x: '50%', y: '30%' },
      { name: 'Digital Scholar Workstations', x: '20%', y: '70%' },
    ]
  },
  {
    id: 4,
    title: 'Spartan Olympic Athletic & Aquatic Stadium',
    category: 'Athletics & Wellness',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    audioTrack: 'Audio Guide: Home to 22 NCAA Division-I championship programs.',
    hotspots: [
      { name: '50M Olympic Pool', x: '50%', y: '50%' },
      { name: 'Hydrotherapy Recovery Center', x: '80%', y: '40%' },
    ]
  }
];

export default function VirtualTourModal({ isOpen, onClose, onOpenApply }) {
  const [activeStop, setActiveStop] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!isOpen) return null;

  const current = TOUR_STOPS[activeStop];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl text-white">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="text-sm font-bold flex items-center gap-2">
                <span>Interactive 360° Campus Immersion</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                  Live Preview
                </span>
              </div>
              <div className="text-[11px] text-slate-400">
                Stop {activeStop + 1} of {TOUR_STOPS.length}: {current.title}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 360 Viewport Area */}
        <div className="relative h-[320px] sm:h-[450px] bg-slate-950 overflow-hidden group">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30"></div>

          {/* Interactive Hotspots */}
          {current.hotspots.map((spot, idx) => (
            <div
              key={idx}
              style={{ left: spot.x, top: spot.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/spot cursor-pointer"
            >
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-blue-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-500 text-white items-center justify-center text-[10px] font-bold shadow-lg border border-white">
                  +
                </span>
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/spot:block px-2.5 py-1 bg-slate-900/95 text-white text-[11px] font-semibold rounded-md border border-slate-700 whitespace-nowrap shadow-xl">
                {spot.name}
              </div>
            </div>
          ))}

          {/* 360 Overlay Badge */}
          <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700 text-xs flex items-center gap-2">
            <Eye className="w-3.5 h-3.5 text-blue-400" />
            <span>Click & Drag to Rotate (Simulated Panorama)</span>
          </div>

          {/* Audio narration bar */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-700 flex items-center gap-3 text-xs">
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`p-1.5 rounded-lg ${isPlayingAudio ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'} hover:bg-blue-500 transition-colors`}
            >
              <Volume2 className="w-4 h-4" />
            </button>
            <span className="text-slate-200 truncate max-w-xs sm:max-w-md">
              {isPlayingAudio ? '🔊 Narrating: ' : 'Click speaker for guide: '} {current.audioTrack}
            </span>
          </div>
        </div>

        {/* Tour Stops Navigation Bar */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            {TOUR_STOPS.map((stop, index) => (
              <button
                key={stop.id}
                onClick={() => setActiveStop(index)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  activeStop === index
                    ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {index + 1}. {stop.category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenApply('visit');
              }}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Book In-Person Visit</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenApply('apply');
              }}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md flex items-center justify-center gap-1.5"
            >
              <span>Apply for 2025</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
