import React from 'react';
import { Play, Sparkles } from 'lucide-react';
import { NOTICES } from '../data/mockData';

export default function HimtuWhatsNew({ onOpenApply, onOpenNoticeModal }) {
  return (
    <div className="bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center">
        
        {/* Left: Black "What's New ▶" Badge (Exact HPTU Style) */}
        <div className="bg-slate-900 text-white font-black text-xs sm:text-sm px-4 py-2.5 flex items-center gap-2 shrink-0 shadow-sm z-10">
          <span className="tracking-wide">What's New</span>
          <div className="w-4 h-4 rounded-full bg-white text-slate-900 flex items-center justify-center">
            <Play className="w-2.5 h-2.5 fill-current ml-0.5 text-slate-900" />
          </div>
        </div>

        {/* Right: Scrolling Horizontal Ticker */}
        <div className="overflow-hidden whitespace-nowrap py-2 px-3 flex-1 bg-slate-50 text-xs font-semibold text-slate-800">
          <div className="inline-flex items-center gap-8 animate-marquee">
            
            {/* Notice 1 */}
            <div className="inline-flex items-center gap-2">
              <span className="text-slate-900 font-bold">
                Direct Walk-in Counseling & Registration Open for B.Pharmacy, D.Pharmacy, and B.Sc. Nursing Vacant Seats (Publish Date: 15-11-2026)
              </span>
              <span className="px-1.5 py-0.2 rounded bg-blue-600 text-white font-extrabold text-[10px] tracking-wider uppercase animate-pulse">
                NEW
              </span>
            </div>

            <span className="text-amber-500 font-black text-sm">☆</span>

            {/* Notice 2 */}
            <div className="inline-flex items-center gap-2">
              <span className="text-slate-900 font-bold">
                Submission of Examination Forms for HPTU & HPU Odd Semester December 2026 Session (Publish Date: 12-11-2026)
              </span>
              <span className="px-1.5 py-0.2 rounded bg-blue-600 text-white font-extrabold text-[10px] tracking-wider uppercase animate-pulse">
                NEW
              </span>
            </div>

            <span className="text-amber-500 font-black text-sm">☆</span>

            {/* Notice 3 */}
            <div className="inline-flex items-center gap-2">
              <span className="text-slate-900 font-bold">
                Re-evaluation Results of B.Pharmacy, B.Tech & MBA Announced on University Portal (Publish Date: 31-10-2026)
              </span>
              <span className="px-1.5 py-0.2 rounded bg-amber-500 text-slate-950 font-extrabold text-[10px] tracking-wider uppercase">
                Active
              </span>
            </div>

            <span className="text-amber-500 font-black text-sm">☆</span>

            {/* Notice 4 */}
            <div className="inline-flex items-center gap-2">
              <span className="text-slate-900 font-bold">
                Annual Campus Placement Drive by Sun Pharmaceutical Industries & Fortis Healthcare on 5th December
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
