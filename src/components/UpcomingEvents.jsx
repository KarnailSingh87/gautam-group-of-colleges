import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  Ticket
} from 'lucide-react';
import { UPCOMING_EVENTS } from '../data/mockData';

export default function UpcomingEvents({ onOpenApply }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Admissions Open Day', 'Research & Entrepreneurship', 'Science & Society'];

  const filteredEvents = selectedCategory === 'All' 
    ? UPCOMING_EVENTS 
    : UPCOMING_EVENTS.filter(e => e.category === selectedCategory);

  return (
    <section id="events" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <CalendarIcon className="w-3.5 h-3.5" />
              Campus Calendar & Lectures
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Upcoming Events & Open Days
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Immerse yourself in campus intellectual life. Attend admissions open houses, student research symposiums, and keynote masterclasses.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white font-semibold shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Date Block & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col items-center justify-center shadow-md">
                      <span className="text-xl font-black leading-none">{evt.day}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest mt-0.5">{evt.month}</span>
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider block">
                        {evt.category}
                      </span>
                      <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {evt.spots}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">
                    {evt.badge}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {evt.title}
                </h3>

                {/* Details */}
                <div className="mt-4 space-y-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{evt.venue}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-200/80">
                <button
                  onClick={() => onOpenApply('event-rsvp', evt.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white group-hover:bg-blue-600 text-slate-700 group-hover:text-white border border-slate-200 group-hover:border-blue-600 font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Reserve Free Guest Ticket</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
