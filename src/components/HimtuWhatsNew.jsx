import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

export default function HimtuWhatsNew({ 
  onOpenApply, 
  onOpenNoticeModal, 
  onOpenResults, 
  onNavigate 
}) {
  const tickerItems = [
    {
      id: 1,
      text: 'Click here to fill-in the online examination form of Regular, Re-appear and Special Chance (CBCS/PCI/NEP/NEP-2020) for Upcoming Examination Held in December- 2026 (Publish Date: 21-10-2026)',
      url: 'https://hptuexam.com/site/userlogin',
      tag: 'NEW',
      tagColor: 'bg-blue-600 text-white',
      isExternal: true
    },
    {
      id: 2,
      text: 'Direct Walk-in Counseling & Registration Open for B.Pharmacy, D.Pharmacy, and B.Sc. Nursing Vacant Seats (Publish Date: 15-11-2026)',
      url: 'https://admission.ggchmr.com',
      tag: 'NEW',
      tagColor: 'bg-blue-600 text-white',
      isExternal: true,
      action: () => onOpenApply && onOpenApply('apply', 'Direct Admissions')
    },
    {
      id: 3,
      text: 'Re-evaluation Result of B.Pharmacy, B.Tech & MBA Session 2026 (LOT-II) Announced on Examination Portal (Publish Date: 31-10-2026)',
      url: 'https://www.himtu.ac.in',
      tag: 'ACTIVE',
      tagColor: 'bg-amber-500 text-slate-950',
      isExternal: true,
      action: () => onOpenResults && onOpenResults()
    },
    {
      id: 4,
      text: 'Atal Medical & Research University (AMRU) HP B.Sc Nursing & GNM Merit Counseling Portal Link (Publish Date: 28-10-2026)',
      url: 'https://amruhp.ac.in',
      tag: 'NEW',
      tagColor: 'bg-blue-600 text-white',
      isExternal: true
    },
    {
      id: 5,
      text: 'Annual Campus Placement Drive by Sun Pharmaceutical Industries & Fortis Healthcare on 5th December (Publish Date: 25-10-2026)',
      url: '#',
      tag: 'NOTICE',
      tagColor: 'bg-emerald-600 text-white',
      isExternal: false,
      action: () => onNavigate && onNavigate('placements')
    }
  ];

  // Duplicate items for infinite seamless horizontal ticker animation
  const allTickerItems = [...tickerItems, ...tickerItems];

  const handleClick = (e, item) => {
    if (item.action) {
      e.preventDefault();
      item.action();
    }
  };

  return (
    <div className="bg-white border-b border-slate-200 shadow-xs relative z-20 font-sans">
      <div className="max-w-7xl mx-auto flex items-center">
        
        {/* Left: Black "What's New ▶" Badge (Exact HPTU Style) */}
        <div className="bg-slate-950 text-white font-black text-xs sm:text-sm px-4 py-2.5 flex items-center gap-2 shrink-0 shadow-md z-30 select-none">
          <span className="tracking-wide">What's New</span>
          <div className="w-4 h-4 rounded-full bg-white text-slate-950 flex items-center justify-center">
            <Play className="w-2.5 h-2.5 fill-current ml-0.5 text-slate-950" />
          </div>
        </div>

        {/* Right: Scrolling Horizontal Ticker with Pause on Hover & Clickable Redirects */}
        <div className="overflow-hidden whitespace-nowrap py-2 px-3 flex-1 bg-slate-50 text-xs font-semibold text-slate-800 pause-marquee">
          <div className="inline-flex items-center gap-8 animate-marquee hover:[animation-play-state:paused] cursor-pointer">
            {allTickerItems.map((item, index) => (
              <React.Fragment key={`${item.id}-${index}`}>
                <a
                  href={item.url}
                  target={item.isExternal ? '_blank' : '_self'}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  onClick={(e) => handleClick(e, item)}
                  title={`Open link: ${item.url}`}
                  className="inline-flex items-center gap-2 text-slate-900 hover:text-[#ea580c] hover:underline transition-colors group cursor-pointer"
                >
                  <span className="font-bold group-hover:text-[#ea580c] transition-colors">
                    {item.text}
                  </span>
                  
                  {item.tag && (
                    <span className={`px-1.5 py-0.2 rounded font-extrabold text-[10px] tracking-wider uppercase ${item.tagColor} shadow-xs`}>
                      {item.tag}
                    </span>
                  )}

                  {item.isExternal && (
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#ea580c] transition-colors" />
                  )}
                </a>

                {/* Gold Star Divider between ticker announcements */}
                <span className="text-amber-500 font-black text-sm select-none">☆</span>
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
