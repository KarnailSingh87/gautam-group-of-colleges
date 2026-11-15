import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Video, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Maximize2,
  Calendar,
  Building
} from 'lucide-react';

export default function GalleryPage({ onOpenApply }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeMedia, setActiveMedia] = useState(null); // For lightbox

  const categories = ['All', 'Campus', 'Labs & Clinical', 'Events & Fests', 'Convocation', 'Sports'];

  const galleryItems = [
    {
      id: 0,
      type: 'image',
      title: 'State Dignitary Convocation Assembly at Gautam College Hamirpur',
      category: 'Convocation',
      date: '2025',
      url: '/himachaltonite-event.webp',
      caption: 'Inaugural ceremonial address with state leaders and academic governing body.'
    },
    {
      id: 1,
      type: 'image',
      title: 'Actual Campus View of Gautam College of Nursing, Hamirpur',
      category: 'Campus',
      date: '2025',
      url: 'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/12841/2018/12/27/Campus%20View%20of%20Gautam%20College%20of%20Nursing,%20Hamirpur_Campus%20View.jpg',
      caption: 'Main Academic Block and healthcare facilities near Hamirpur Bus Stand.'
    },
    {
      id: 2,
      type: 'image',
      title: 'Pharmaceutical Chemistry & Machine Instrumentation Lab',
      category: 'Labs & Clinical',
      date: '2025',
      url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80',
      caption: 'PCI-approved pharmaceutical formulation and drug analysis laboratory.'
    },
    {
      id: 3,
      type: 'image',
      title: 'Nursing Simulation Lab & Hospital Clinical Rotations',
      category: 'Labs & Clinical',
      date: '2025',
      url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
      caption: 'ICU simulation and bedside patient training with Dr. Radhakrishnan GMC Hamirpur tie-up.'
    },
    {
      id: 4,
      type: 'image',
      title: 'GIMT Advanced Computer Center & AI Laboratory',
      category: 'Campus',
      date: '2025',
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      caption: 'High-speed gigabit computing facility for MCA, BCA, and MBA scholars.'
    },
    {
      id: 5,
      type: 'image',
      title: 'Annual Silver Jubilee Convocation Ceremony',
      category: 'Convocation',
      date: '2024',
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
      caption: 'Degrees awarded by Vice Chancellors of HPTU Hamirpur and HPU Shimla.'
    },
    {
      id: 6,
      type: 'image',
      title: 'Annual Cultural Festival & Himachal Folk Fest',
      category: 'Events & Fests',
      date: '2024',
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      caption: 'Himachali Natti, drama, and youth leadership competitions at the collegiate auditorium.'
    },
    {
      id: 7,
      type: 'image',
      title: 'Inter-College Sports Tournament & Athletics Meet',
      category: 'Sports',
      date: '2024',
      url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
      caption: 'Badminton, volleyball, basketball, and table tennis championships.'
    },
    {
      id: 8,
      type: 'image',
      title: 'Central Library & E-Resource Digital Reading Hall',
      category: 'Campus',
      date: '2025',
      url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
      caption: 'Equipped with National Digital Library (NDL), SWAYAM, and Delnet nodes.'
    }
  ];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Campus Visual Gallery</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Life & Infrastructure at Gautam College
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              Explore actual imagery of our laboratories, healthcare clinical setups, academic auditoriums, convocation ceremonies, and vibrant student life in Hamirpur.
            </p>
          </div>

          <button
            onClick={() => onOpenApply('apply')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white font-bold text-xs shadow-md transition self-start md:self-auto shrink-0"
          >
            Apply for Campus Admission
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveMedia(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-indigo-500 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="p-2.5 rounded-full bg-white/90 text-slate-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Session {item.date}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            
            <button
              onClick={() => setActiveMedia(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={activeMedia.url}
                alt={activeMedia.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                  {activeMedia.category} • Year {activeMedia.date}
                </span>
                <h3 className="text-base font-bold mt-0.5">{activeMedia.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{activeMedia.caption}</p>
              </div>

              <button
                onClick={() => {
                  setActiveMedia(null);
                  onOpenApply('apply', activeMedia.title);
                }}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition shrink-0"
              >
                Inquire About Facilities
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
