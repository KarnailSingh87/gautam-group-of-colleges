import React, { useState } from 'react';
import { X, Compass, MapPin, Play, Volume2, Eye, ChevronRight, CheckCircle2, Calendar, Phone } from 'lucide-react';

const TOUR_STOPS = [
  {
    id: 1,
    title: 'Gautam College of Nursing & Main Campus Quad',
    category: 'Hamirpur Main Campus View',
    image: 'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/12841/2018/12/27/Campus%20View%20of%20Gautam%20College%20of%20Nursing,%20Hamirpur_Campus%20View.jpg',
    audioTrack: 'Audio Guide: Located near Hamirpur Bus Stand, serving 25,000+ students across Himachal Pradesh since 1999.',
    hotspots: [
      { name: 'Central Admission & Counseling Cell', x: '30%', y: '45%' },
      { name: 'Silver Jubilee Academic Wing', x: '70%', y: '50%' },
    ]
  },
  {
    id: 2,
    title: 'Gautam College of Pharmacy Research Labs',
    category: 'PCI & HPTU Approved Block',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80',
    audioTrack: 'Audio Guide: State-of-the-art machine room, HPLC instruments, pharmacology lab, and pharmaceutical chemistry units.',
    hotspots: [
      { name: 'Industrial Tablet Punching Bay', x: '45%', y: '40%' },
      { name: 'Aseptic Formulations Cleanroom', x: '75%', y: '60%' },
    ]
  },
  {
    id: 3,
    title: 'Gautam College of Nursing Simulation Bays',
    category: 'INC & AMRU Approved Block',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    audioTrack: 'Audio Guide: Direct clinical tie-ups with Dr. Radhakrishnan Govt Medical College Hamirpur and top super-specialty hospitals.',
    hotspots: [
      { name: 'Maternal & Child Health Care Lab', x: '50%', y: '35%' },
      { name: 'Advanced ICU Bedside Simulator', x: '25%', y: '65%' },
    ]
  },
  {
    id: 4,
    title: 'Central Library & Digital Computing Center',
    category: 'Academic Core',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    audioTrack: 'Audio Guide: Housing over 35,000 books, national DELNET journals, and book bank for SC/ST students.',
    hotspots: [
      { name: 'Digital DELNET E-Terminal Bay', x: '55%', y: '45%' },
      { name: 'Quiet Research & Reading Hall', x: '80%', y: '40%' },
    ]
  }
];

export default function VirtualTourModal({ isOpen, onClose, onOpenApply }) {
  const [activeStop, setActiveStop] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!isOpen) return null;

  const current = TOUR_STOPS[activeStop];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl text-white">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="text-sm font-bold flex items-center gap-2">
                <span>Gautam Group Hamirpur Virtual Campus Tour</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                  Est. 1999
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
                <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-indigo-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-indigo-500 text-white items-center justify-center text-[10px] font-bold shadow-lg border border-white">
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
            <Eye className="w-3.5 h-3.5 text-indigo-400" />
            <span>Campus Location: Near Bus Stand, Hamirpur (H.P.)</span>
          </div>

          {/* Audio narration bar */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-700 flex items-center gap-3 text-xs">
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`p-1.5 rounded-lg ${isPlayingAudio ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'} hover:bg-indigo-500 transition-colors`}
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
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {index + 1}. {stop.category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="tel:+919418010420"
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Contact Campus Office</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenApply('apply');
              }}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md flex items-center justify-center gap-1.5"
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
