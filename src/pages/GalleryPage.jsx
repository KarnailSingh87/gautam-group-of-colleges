import React, { useState, useEffect } from 'react';
import { 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2, 
  Download, 
  Calendar, 
  Tag, 
  Share2, 
  ExternalLink,
  Award,
  Video,
  Image as ImageIcon,
  Play,
  Layers,
  Sparkles
} from 'lucide-react';
import { NIT_GALLERY_PHOTOS } from '../components/NitGallerySection';
import { getCdnUrl } from '../utils/cloudinary';

export const EXTENDED_GALLERY = [
  ...NIT_GALLERY_PHOTOS,
  {
    id: 19,
    title: 'Actual Campus View of Gautam College of Nursing & Healthcare',
    category: 'Campus & Infrastructure',
    date: '2025',
    thumbnail: getCdnUrl('/ggc-campus.jpg'),
    fullImage: getCdnUrl('/ggc-campus.jpg'),
    caption: 'Front multi-storey campus view at Ward No. 10 near Hamirpur Bus Stand, Himachal Pradesh.'
  },
  {
    id: 20,
    title: 'State Dignitary & Academic Assembly at Hamirpur Convocation',
    category: 'Convocation',
    date: '2025',
    thumbnail: getCdnUrl('/himachaltonite-event.webp'),
    fullImage: getCdnUrl('/himachaltonite-event.webp'),
    caption: 'Official convocation and inaugural address at Gautam Group of Colleges with governing body members.'
  },
  {
    id: 21,
    title: 'Advanced Computer Center & Cloud Computing Lab',
    category: 'Labs & Research',
    date: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    fullImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Equipped with 200+ high-performance workstations for BCA, MCA, and IT coursework.'
  },
  {
    id: 22,
    title: 'Pharmaceutical Chemistry & Machine Formulation Lab',
    category: 'Labs & Research',
    date: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
    fullImage: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80',
    caption: 'PCI-approved pharmaceutical formulation and drug analysis laboratory.'
  },
  {
    id: 23,
    title: 'Nursing Simulation Suite & Hospital Clinical Wards',
    category: 'Labs & Research',
    date: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    fullImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    caption: 'ICU simulation and bedside patient training with Dr. Radhakrishnan GMC Hamirpur tie-up.'
  },
  {
    id: 24,
    title: 'Central Library & E-Resource Digital Reading Hall',
    category: 'Campus & Infrastructure',
    date: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    fullImage: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    caption: 'Central university library holding over 45,000 volumes, national journals, and Delnet access.'
  }
];

export default function GalleryPage({ onOpenApply, onNavigate }) {
  const [activeTab, setActiveTab] = useState('photos'); // 'photos' | 'videos'
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const categories = [
    'All',
    'Convocation',
    'Dignitaries & Assembly',
    'Sports & Student Life',
    'Labs & Research',
    'Campus & Infrastructure'
  ];

  const filteredPhotos = EXTENDED_GALLERY.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedPhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos]);

  const activePhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  return (
    <div className="bg-slate-100 min-h-screen py-8">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* NIT Hamirpur Exact Dark Navy Bar Header */}
        <div className="shadow-xs mb-6">
          <div 
            className="flex flex-col sm:flex-row items-center justify-between px-6 py-3 text-white"
            style={{ 
              backgroundColor: '#02263c', 
              fontFamily: "'Roboto Condensed', sans-serif" 
            }}
          >
            <h1 className="text-xl sm:text-2xl font-bold tracking-wide uppercase">
              Photo / Video Gallery
            </h1>
            <div className="flex items-center gap-2 mt-2 sm:mt-0 text-xs font-sans">
              <span className="text-amber-300 font-semibold">Gautam Group of Colleges, Hamirpur</span>
              <span className="opacity-60">•</span>
              <span className="text-slate-300">{filteredPhotos.length} Photographs</span>
            </div>
          </div>
        </div>

        {/* Tab & Filter Strip */}
        <div className="bg-white rounded-xs p-4 mb-6 shadow-xs border border-slate-200 flex flex-wrap items-center justify-between gap-4">
          
          {/* Photos vs Videos Mode */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xs border border-slate-200">
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-xs transition-all ${
                activeTab === 'photos'
                  ? 'bg-[#02263c] text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Photo Gallery</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-xs transition-all ${
                activeTab === 'videos'
                  ? 'bg-[#02263c] text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Video Gallery</span>
            </button>
          </div>

          {/* Category Filter Pills (When on Photos tab) */}
          {activeTab === 'photos' && (
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSelectedPhotoIndex(null);
                  }}
                  className={`text-xs px-3 py-1.5 rounded-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-[#673035] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* PHOTOS TAB VIEW: 6-Column Grid matching NIT Hamirpur */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredPhotos.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhotoIndex(idx)}
                className="group relative block bg-slate-900 overflow-hidden cursor-pointer rounded-xs shadow-xs border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-300"
                title={item.title}
              >
                {/* Thumbnail Image */}
                <div className="relative w-full aspect-[4/3] sm:h-36 overflow-hidden bg-slate-900 flex items-center justify-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-115"
                  />

                  {/* NIT Hamirpur Rotating Overlay Effect */}
                  <div 
                    className="absolute inset-0 bg-black/65 flex flex-col items-center justify-center p-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"
                    style={{ backdropFilter: 'blur(1.5px)' }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 border border-white/60 flex items-center justify-center text-white mb-1.5 shadow-lg transform -rotate-45 scale-75 group-hover:rotate-0 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5 text-amber-300" />
                    </div>
                    <p className="text-[11px] font-semibold text-white line-clamp-2 leading-tight px-1">
                      {item.title}
                    </p>
                    <span className="mt-1 inline-block text-[9px] uppercase tracking-wider text-amber-300 font-bold bg-black/40 px-1.5 py-0.5 rounded-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Subtitle Bar below photo */}
                <div className="p-2 bg-white border-t border-slate-100">
                  <p className="text-[11px] font-semibold text-slate-800 truncate" title={item.title}>
                    {item.title}
                  </p>
                  <p className="text-[10px] text-slate-500 flex items-center justify-between mt-0.5">
                    <span>{item.category}</span>
                    <span className="font-mono">{item.date}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS TAB VIEW */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xs shadow-xs border border-slate-200 overflow-hidden">
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Campus Tour Gautam Group of Colleges"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900 text-sm">Gautam Group of Colleges Hamirpur – Institutional Campus Walkthrough</h3>
                <p className="text-xs text-slate-500 mt-1">Gautam College of Nursing, Polytechnic, Management & Technology Hamirpur (H.P.)</p>
              </div>
            </div>

            <div className="bg-white rounded-xs shadow-xs border border-slate-200 overflow-hidden">
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Annual Sports Meet Highlights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900 text-sm">Inter-College Sports Tournament & Athletics Meet</h3>
                <p className="text-xs text-slate-500 mt-1">Badminton, volleyball, basketball, and table tennis championships.</p>
              </div>
            </div>

            <div className="bg-white rounded-xs shadow-xs border border-slate-200 overflow-hidden">
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Himachali Folk & Cultural Fest"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900 text-sm">Annual Cultural Fest & Himachali Natti Performances</h3>
                <p className="text-xs text-slate-500 mt-1">Celebration of youth culture and Himachali folk heritage.</p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Interactive Lightbox Modal */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex flex-col justify-between animate-fadeIn select-none"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Top Bar with Title, Counter, and Close Button */}
          <div 
            className="w-full bg-black/60 border-b border-white/10 px-4 py-3 flex items-center justify-between z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 text-white max-w-2xl">
              <span className="px-2.5 py-1 text-xs font-bold uppercase rounded-xs bg-[#673035] text-amber-300 border border-amber-300/30">
                {activePhoto.category}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-slate-100 truncate">
                {activePhoto.title}
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-300 bg-white/10 px-2.5 py-1 rounded-xs">
                {selectedPhotoIndex + 1} / {filteredPhotos.length}
              </span>
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                title="Close Lightbox (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Stage Image & Next/Prev Controls */}
          <div 
            className="relative flex-1 flex items-center justify-center p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhotoIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length)}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-[#673035] border border-white/20 text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 z-20"
              title="Previous Photo (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <div className="max-w-4xl max-h-[70vh] flex flex-col items-center">
              <img
                src={activePhoto.fullImage}
                alt={activePhoto.title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xs shadow-2xl border border-white/10"
              />
              <p className="mt-3 text-xs sm:text-sm text-slate-300 text-center max-w-2xl px-4 line-clamp-2">
                {activePhoto.caption}
              </p>
            </div>

            <button
              onClick={() => setSelectedPhotoIndex((prev) => (prev + 1) % filteredPhotos.length)}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-[#673035] border border-white/20 text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 z-20"
              title="Next Photo (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Bottom Thumbnail Strip */}
          <div 
            className="w-full bg-black/75 border-t border-white/10 p-2 overflow-x-auto flex items-center justify-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {filteredPhotos.map((photo, i) => (
              <button
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(i)}
                className={`relative w-14 h-10 rounded-xs overflow-hidden shrink-0 border-2 transition-all ${
                  i === selectedPhotoIndex ? 'border-amber-400 scale-110 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={photo.thumbnail}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
