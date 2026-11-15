import React, { useState } from 'react';
import { ChevronRight, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { getCdnUrl } from '../utils/cloudinary';

export default function HimtuDignitariesEvents({ onOpenApply, onOpenResults, onOpenNotificationsModal }) {
  const [activeTab, setActiveTab] = useState('events'); // 'events', 'official'

  const eventsList = [
    {
      day: '24',
      month: 'Sep',
      title: 'Notification: Registration of 6th Semester Students in 7th Semester (Session 2026-27)',
      time: '4:06 PM',
      linkText: 'View'
    },
    {
      day: '26',
      month: 'Aug',
      title: 'Notice: B.Pharmacy & D.Pharmacy Direct Spot Round Counseling at Gautam College of Pharmacy (August 29, 2026)',
      time: '4:49 PM',
      linkText: 'View'
    },
    {
      day: '26',
      month: 'Aug',
      title: 'Notice: Spot Round for B.Sc. Nursing & GNM - Direct Merit Entry at Gautam College of Nursing (August 29, 2026)',
      time: '4:36 PM',
      linkText: 'View'
    },
    {
      day: '25',
      month: 'Aug',
      title: 'Notice: MBA & MCA (Direct) Spot Admission Round - Gautam Institute of Management & Technology (August 28, 2026)',
      time: '3:19 PM',
      linkText: 'View'
    },
    {
      day: '25',
      month: 'Aug',
      title: 'Notice: Silver Jubilee Merit Concession & HP e-Pass Scholarship Verification Committee Decisions',
      time: '11:22 AM',
      linkText: 'View'
    }
  ];

  const officialList = [
    {
      day: '12',
      month: 'Nov',
      title: 'Notification: HPTU Odd Semester Examination Centers & Hall Tickets Allotment',
      time: '2:15 PM',
      linkText: 'View'
    },
    {
      day: '05',
      month: 'Nov',
      title: 'Circular: Mandatory Aadhaar & APAAR ABC ID Linking for All Regular Scholars',
      time: '11:30 AM',
      linkText: 'View'
    },
    {
      day: '28',
      month: 'Oct',
      title: 'HPU Annual Sports & Athletics Meet Participation Guidelines',
      time: '4:00 PM',
      linkText: 'View'
    }
  ];

  const currentList = activeTab === 'events' ? eventsList : officialList;

  return (
    <section className="bg-slate-100 py-8 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* LEFT COLUMN: 2 Dignitary Cards (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            
            {/* Dignitary 1: Chief Minister */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs text-center flex flex-col items-center justify-center flex-1 hover:shadow-md transition">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#1e3a8a]/20 shadow-sm p-0.5 bg-slate-50 mb-2">
                <img 
                  src={getCdnUrl('/dignitaries/cm_sukhvinder_singh_sq.jpg')} 
                  alt="Sh. Sukhvinder Singh, Hon'ble Chief Minister, Himachal Pradesh"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-900 leading-tight">Sh. Sukhvinder Singh</h3>
              <div className="text-[11px] text-slate-600 font-medium mt-0.5">Hon'ble Chief Minister</div>
              <div className="text-[10px] text-slate-400">Himachal Pradesh</div>
            </div>

            {/* Dignitary 2: Technical Education Minister */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs text-center flex flex-col items-center justify-center flex-1 hover:shadow-md transition">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#1e3a8a]/20 shadow-sm p-0.5 bg-slate-50 mb-2">
                <img 
                  src={getCdnUrl('/dignitaries/rajesh_dharmani_official.jpg')} 
                  alt="Sh. Rajesh Dharmani, Hon'ble Technical Education Minister, Himachal Pradesh"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-900 leading-tight">Sh. Rajesh Dharmani</h3>
              <div className="text-[11px] text-slate-600 font-medium mt-0.5">Hon'ble Technical Education Minister</div>
              <div className="text-[10px] text-slate-400">Himachal Pradesh</div>
            </div>

          </div>

          {/* MIDDLE COLUMN: Tabbed Academic Events & Communications (6 Cols) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col overflow-hidden">
            
            {/* Tabs Header */}
            <div className="flex items-center border-b border-slate-200 bg-slate-50">
              <button
                onClick={() => setActiveTab('events')}
                className={`py-3 px-6 text-xs font-bold transition-all ${
                  activeTab === 'events'
                    ? 'bg-[#1e3a8a] text-white shadow-xs'
                    : 'text-slate-700 hover:text-[#1e3a8a]'
                }`}
              >
                Academic Events
              </button>

              <button
                onClick={() => setActiveTab('official')}
                className={`py-3 px-6 text-xs font-bold transition-all ${
                  activeTab === 'official'
                    ? 'bg-[#1e3a8a] text-white shadow-xs'
                    : 'text-slate-700 hover:text-[#1e3a8a]'
                }`}
              >
                Official Communications
              </button>
            </div>

            {/* List Body with HPTU Navy Date Badges */}
            <div className="p-4 space-y-3.5 flex-1 divide-y divide-slate-100 overflow-y-auto max-h-[380px]">
              {currentList.map((item, idx) => (
                <div key={idx} className="pt-3 first:pt-0 flex items-start gap-3.5 group cursor-pointer">
                  
                  {/* HPTU Vertical Navy Date Badge */}
                  <div className="w-11 h-13 shrink-0 rounded bg-[#1e3a8a] text-white flex flex-col items-center justify-center font-bold">
                    <span className="text-base font-black leading-none">{item.day}</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-200 mt-0.5">{item.month}</span>
                  </div>

                  {/* Title & Metadata */}
                  <div className="flex-1 space-y-1">
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#ea580c] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>{item.time}</span>
                      <button 
                        onClick={() => {
                          if (onOpenNotificationsModal) {
                            onOpenNotificationsModal(item);
                          } else {
                            onOpenApply('request-info', item.title);
                          }
                        }}
                        className="text-[#ea580c] font-bold hover:underline flex items-center gap-1 text-[11px] cursor-pointer"
                      >
                        <span>→ View</span>
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Footer Outlined View All Button */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-center">
              <button
                onClick={() => {
                  if (onOpenNotificationsModal) {
                    onOpenNotificationsModal(null);
                  } else {
                    onOpenApply('request-info', 'All Academic Events');
                  }
                }}
                className="px-5 py-1.5 rounded border border-[#ea580c] text-[#ea580c] hover:bg-[#ea580c] hover:text-white font-bold text-xs transition shadow-xs cursor-pointer"
              >
                + View All
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: 2 Dignitary Cards (Governor & Principal / Director) (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            
            {/* Dignitary 3: Governor */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs text-center flex flex-col items-center justify-center flex-1 hover:shadow-md transition">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#1e3a8a]/20 shadow-sm p-0.5 bg-slate-50 mb-2">
                <img 
                  src={getCdnUrl('/dignitaries/gov_shiv_pratap_shukla_sq.jpg')} 
                  alt="Sh. Shiv Pratap Shukla, Hon'ble Governor, Himachal Pradesh"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-900 leading-tight">Sh. Shiv Pratap Shukla</h3>
              <div className="text-[11px] text-slate-600 font-medium mt-0.5">Hon'ble Governor</div>
              <div className="text-[10px] text-slate-400">Himachal Pradesh</div>
            </div>

            {/* Dignitary 4: Principal cum Secretary */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs text-center flex flex-col items-center justify-center flex-1 hover:shadow-md transition">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#ea580c]/30 shadow-sm p-0.5 bg-slate-50 mb-2">
                <img 
                  src={getCdnUrl('/dignitaries/dr_rajneesh_gautam.png')} 
                  alt="Dr. Rajneesh Gautam, Principal cum Secretary, Gautam Group of Colleges"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-900 leading-tight">Dr. Rajneesh Gautam</h3>
              <div className="text-[11px] text-[#ea580c] font-bold mt-0.5">Principal cum Secretary</div>
              <div className="text-[10px] text-slate-400">Gautam Group of Colleges</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
