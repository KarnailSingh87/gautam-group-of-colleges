import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bell, 
  Sparkles, 
  ExternalLink, 
  Calendar, 
  CheckCircle, 
  FileText, 
  GraduationCap, 
  Megaphone, 
  Users, 
  Mic, 
  Download,
  Accessibility
} from 'lucide-react';

export default function HimtuHeroSection({ 
  onOpenApply, 
  onOpenResults, 
  onOpenTour,
  onOpenPortal,
  onOpenNotificationsModal
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/ggc-campus.jpg',
      title: 'Actual Campus View — Gautam College of Nursing & Healthcare',
      subtitle: 'Near Bus Stand, Ward No. 10, Hamirpur (H.P.) • Est. 1999'
    },
    {
      id: 2,
      image: '/himachaltonite-event.webp',
      title: 'State Dignitary & Academic Assembly at Hamirpur',
      subtitle: 'Inaugural Session & Convocation at Gautam Group of Colleges, Hamirpur (H.P.)'
    }
  ];

  // Auto slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const notifications = [
    {
      id: 1,
      day: '31',
      month: 'OCT',
      title: 'Re-evaluation Result of B. Pharmacy / B.Tech Computer Science & MBA (NEP & CBCS) Session 2026 - LOT-II',
      time: '5:23 PM',
      isNew: true
    },
    {
      id: 2,
      day: '31',
      month: 'OCT',
      title: 'Submission of Examination Forms for HPTU & HPU Odd Semester Upcoming Examination (December 2026 Session)',
      time: '5:20 PM',
      isNew: true
    },
    {
      id: 3,
      day: '31',
      month: 'OCT',
      title: 'Direct Walk-in Counseling & Admission Notification for B.Pharm, D.Pharm, B.Sc Nursing, MBA Vacant Seats',
      time: '5:18 PM',
      isNew: true
    },
    {
      id: 4,
      day: '28',
      month: 'OCT',
      title: 'Annual Campus Placement Drive by Sun Pharmaceutical Industries & Fortis Healthcare on 5th December',
      time: '4:45 PM',
      isNew: false
    },
    {
      id: 5,
      day: '24',
      month: 'OCT',
      title: 'Mandatory Aadhaar KYC & Biometric verification for HP State Post-Matric Scholarship Renewal on NSP Portal',
      time: '3:30 PM',
      isNew: false
    }
  ];

  // Auto vertical continuous scrolling for Notifications with mouse-wheel & cursor-hover pause
  const notificationsRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const el = notificationsRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (!isPaused.current && el) {
        // Seamless infinite loop when passing halfway
        if (el.scrollTop >= el.scrollHeight / 2) {
          el.scrollTop = 0;
        } else {
          el.scrollTop += 1;
        }
      }
    }, 38);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-slate-50 py-4 sm:py-6 overflow-hidden">
      
      {/* 1. PINNED LEFT SOCIAL MEDIA SIDEBAR (Exact HPTU Style) */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-1.5 shadow-md">
        <a 
          href="https://www.facebook.com/search/top?q=Gautam%20Group%20of%20Colleges%20Hamirpur" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-9 h-9 bg-[#1877f2] text-white flex items-center justify-center hover:w-11 transition-all rounded-r"
          title="Facebook"
        >
          <span className="font-bold text-sm">f</span>
        </a>
        <a 
          href="https://twitter.com/search?q=Gautam%20College%20Hamirpur" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-9 h-9 bg-black text-white flex items-center justify-center hover:w-11 transition-all rounded-r font-bold text-sm"
          title="X / Twitter"
        >
          𝕏
        </a>
        <a 
          href="https://www.instagram.com/explore/tags/gautamcollegehamirpur/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-9 h-9 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center hover:w-11 transition-all rounded-r text-xs font-bold"
          title="Instagram"
        >
          IG
        </a>
        <a 
          href="https://www.youtube.com/@gautamgroupofcollegesggc2063" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-9 h-9 bg-[#ff0000] text-white flex items-center justify-center hover:w-11 transition-all rounded-r font-bold text-xs"
          title="YouTube (@gautamgroupofcollegesggc2063)"
        >
          YT
        </a>
        <a 
          href="https://wa.me/919418010420" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-9 h-9 bg-[#25d366] text-white flex items-center justify-center hover:w-11 transition-all rounded-r font-bold text-sm"
          title="WhatsApp Helpdesk"
        >
          ✆
        </a>
      </div>

      {/* 2. PINNED RIGHT ACCESSIBILITY & FAST UTILITIES DOCK (Exact HPTU Style) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-1 shadow-md">
        <button 
          onClick={() => onOpenApply('apply')}
          className="w-9 h-9 bg-[#ea580c] hover:bg-[#c2410c] text-white flex items-center justify-center transition-all rounded-l" 
          title="Prospectus / Online Apply"
        >
          <FileText className="w-4 h-4" />
        </button>
        <button 
          onClick={() => {
            const speech = new SpeechSynthesisUtterance("Gautam Group of Colleges Hamirpur admissions are open for session 2025-26.");
            window.speechSynthesis?.speak(speech);
          }}
          className="w-9 h-9 bg-[#ea580c] hover:bg-[#c2410c] text-white flex items-center justify-center transition-all rounded-l" 
          title="Speech Reader"
        >
          <Mic className="w-4 h-4" />
        </button>
        <button 
          onClick={onOpenResults}
          className="w-9 h-9 bg-[#ea580c] hover:bg-[#c2410c] text-white flex items-center justify-center transition-all rounded-l" 
          title="Academic Results"
        >
          <GraduationCap className="w-4 h-4" />
        </button>
        <button 
          onClick={() => onOpenApply('request-info')}
          className="w-9 h-9 bg-[#ea580c] hover:bg-[#c2410c] text-white flex items-center justify-center transition-all rounded-l" 
          title="Important Circulars"
        >
          <Megaphone className="w-4 h-4" />
        </button>
        <button 
          onClick={onOpenPortal}
          className="w-9 h-9 bg-[#ea580c] hover:bg-[#c2410c] text-white flex items-center justify-center transition-all rounded-l" 
          title="Student Zone & ABC ID"
        >
          <Users className="w-4 h-4" />
        </button>
        <button 
          onClick={onOpenTour}
          className="w-9 h-9 bg-[#6366f1] text-white flex items-center justify-center transition-all rounded-l" 
          title="Accessibility & 360 Tour"
        >
          <Accessibility className="w-4 h-4" />
        </button>
      </div>

      {/* 3. MAIN CONTAINER GRID (Slider Left + Notifications Card Right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* LEFT COLUMN: Grand Image Carousel with Controls (7 or 8 Cols) */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-300 bg-black aspect-[16/10] sm:aspect-[16/9] w-full flex-1 group">
              
              {/* Active Image */}
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title} 
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-20 text-white z-10">
                <span className="px-2.5 py-0.5 rounded bg-[#ea580c] text-white text-[10px] font-bold uppercase tracking-wider mb-1.5 inline-block">
                  Institutional Highlight
                </span>
                <h3 className="text-sm sm:text-lg font-bold drop-shadow-md">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-xs text-slate-200 mt-0.5 drop-shadow line-clamp-1">
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              {/* Slider Bottom-Right Circular Orange Arrows (Exact HPTU Style) */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white flex items-center justify-center shadow-lg transition active:scale-95"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white flex items-center justify-center shadow-lg transition active:scale-95"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Official "Notifications" Card (Exact HPTU Style) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-white rounded-2xl border border-slate-300 shadow-md flex flex-col h-full overflow-hidden">
              
              {/* Header: Bright Orange Bar with Bell (Exact HPTU Style) */}
              <div className="bg-[#ea580c] text-white px-4 py-3 flex items-center justify-between shrink-0">
                <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  <span>Notifications</span>
                </h2>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <Bell className="w-4 h-4 text-white animate-bounce" />
                </div>
              </div>

              {/* Notifications List (Auto-scrolling, Wheel-scrollable, Pauses on Cursor Hover) */}
              <div 
                ref={notificationsRef}
                onMouseEnter={() => { isPaused.current = true; }}
                onMouseLeave={() => { isPaused.current = false; }}
                className="p-3.5 space-y-3.5 flex-1 overflow-y-auto divide-y divide-slate-100 max-h-[380px] scroll-smooth"
                style={{ scrollbarWidth: 'thin' }}
              >
                {[...notifications, ...notifications].map((item, idx) => (
                  <div 
                    key={`${item.id}-${idx}`} 
                    onClick={() => {
                      if (onOpenNotificationsModal) {
                        onOpenNotificationsModal(item);
                      } else {
                        onOpenApply('request-info', item.title);
                      }
                    }}
                    className="pt-3 first:pt-0 flex items-start gap-3 group cursor-pointer hover:bg-slate-50 p-1.5 rounded-lg transition-colors"
                  >
                    
                    {/* HPTU Vertical Date Block */}
                    <div className="w-12 h-13 shrink-0 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 flex flex-col items-center justify-center font-bold group-hover:border-[#ea580c] transition-colors">
                      <span className="text-base font-black leading-none text-slate-950">{item.day}</span>
                      <span className="text-[10px] uppercase font-bold text-slate-600 mt-0.5 tracking-wider">{item.month}</span>
                    </div>

                    {/* Notification Details */}
                    <div className="space-y-1 flex-1">
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#ea580c] transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                      <div className="flex items-center justify-between text-[10px] text-slate-500">
                        <span>{item.time}</span>
                        {item.isNew && (
                          <span className="font-extrabold text-[#ea580c] uppercase tracking-wider">
                            Latest
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                ))}
              </div>

              {/* Card Footer: Outlined "View All" Button (Exact HPTU Style) */}
              <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-end shrink-0">
                <button
                  onClick={() => {
                    if (onOpenNotificationsModal) {
                      onOpenNotificationsModal(null);
                    } else {
                      onOpenApply('request-info', 'Notice Board');
                    }
                  }}
                  className="px-4 py-1.5 rounded-md border border-[#ea580c] text-[#ea580c] hover:bg-[#ea580c] hover:text-white font-bold text-xs transition-colors shadow-xs cursor-pointer"
                >
                  View All
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
