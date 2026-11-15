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
  Award
} from 'lucide-react';
import { getCdnUrl } from '../utils/cloudinary';

const RAW_GALLERY_PHOTOS = [
  {
    id: 1,
    title: 'e-FDP on Integrated Circuit Design & AI/ML Insights',
    category: 'Academics & Research',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_01.jpg',
    fullImage: '/gallery/nith/gallery_01.jpg',
    caption: 'Faculty Development Programme with national domain experts in circuit design and applied artificial intelligence.'
  },
  {
    id: 2,
    title: 'National Unity Day 2025 – Ceremonial Flag-Off & Inauguration',
    category: 'Dignitaries & Assembly',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_02.jpg',
    fullImage: '/gallery/nith/gallery_02.jpg',
    caption: 'Commemorating the Birth Anniversary of Sardar Vallabhbhai Patel with ceremonial flag-off by academic leadership.'
  },
  {
    id: 3,
    title: 'Run for Unity & Collegiate Student Marathon',
    category: 'Sports & Student Life',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_03.jpg',
    fullImage: '/gallery/nith/gallery_03.jpg',
    caption: 'Campus-wide youth marathon promoting fitness, national integrity, and sportsmanship.'
  },
  {
    id: 4,
    title: 'Inter-College Sports Meet – Medals & Championship Trophies',
    category: 'Sports & Student Life',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_04.jpg',
    fullImage: '/gallery/nith/gallery_04.jpg',
    caption: 'Student contingent celebrating bronze and silver podium finishes at the state inter-college sports tournament.'
  },
  {
    id: 5,
    title: 'State Dignitary Reception with Traditional Himachali Regalia',
    category: 'Dignitaries & Assembly',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_05.jpg',
    fullImage: '/gallery/nith/gallery_05.jpg',
    caption: 'Honoring state dignitaries with traditional Himachali Kullu caps and ceremonial honor stoles.'
  },
  {
    id: 6,
    title: 'Academic Procession in Convocation Robes & Shawls',
    category: 'Convocation',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_06.jpg',
    fullImage: '/gallery/nith/gallery_06.jpg',
    caption: 'Governing board, university deans, and guest dignitaries leading the formal convocation ceremonial procession.'
  },
  {
    id: 7,
    title: 'Grand Inaugural Ceremony & Anthem in Main Auditorium',
    category: 'Dignitaries & Assembly',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_07.jpg',
    fullImage: '/gallery/nith/gallery_07.jpg',
    caption: 'Full auditorium assembly of scholars, faculty, and invited parents during the convocation inauguration.'
  },
  {
    id: 8,
    title: 'Ceremonial Lamp Lighting & Dias Floral Inauguration',
    category: 'Dignitaries & Assembly',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_08.jpg',
    fullImage: '/gallery/nith/gallery_08.jpg',
    caption: 'Traditional Saraswati Vandana and auspicious lamp-lighting by principal dignitaries.'
  },
  {
    id: 9,
    title: 'Keynote Presidential Convocation Address',
    category: 'Convocation',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_09.jpg',
    fullImage: '/gallery/nith/gallery_09.jpg',
    caption: 'Inspirational address on higher technical education and regional self-reliance.'
  },
  {
    id: 10,
    title: 'Academic Senate & Faculty Dias Assembly',
    category: 'Dignitaries & Assembly',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_10.jpg',
    fullImage: '/gallery/nith/gallery_10.jpg',
    caption: 'Senior professorial council and department heads convened at the convocation dais.'
  },
  {
    id: 11,
    title: 'Presentation of Himachali Handicraft Memento to Chief Guest',
    category: 'Dignitaries & Assembly',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_11.jpg',
    fullImage: '/gallery/nith/gallery_11.jpg',
    caption: 'Presentation of framed traditional Kangra/Himachali heritage artwork to the visiting guest of honour.'
  },
  {
    id: 12,
    title: 'Auditorium Hall Packed with Graduating Batches',
    category: 'Convocation',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_12.jpg',
    fullImage: '/gallery/nith/gallery_12.jpg',
    caption: 'Hundreds of undergraduate and postgraduate students assembled for degree conferral.'
  },
  {
    id: 13,
    title: 'Conferment of Degree & Gold Medal for Academic Excellence',
    category: 'Convocation',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_13.jpg',
    fullImage: '/gallery/nith/gallery_13.jpg',
    caption: 'Awarding University Gold Medal and degree citation to the top-ranking department topper.'
  },
  {
    id: 14,
    title: 'Degree Award Ceremony in Ceremonial Himachali Attire',
    category: 'Convocation',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_14.jpg',
    fullImage: '/gallery/nith/gallery_14.jpg',
    caption: 'Graduate scholar accepting degree parchment on stage from the Director and Dean.'
  },
  {
    id: 15,
    title: 'First-Class Honours Degree Awarded to Woman Scholar',
    category: 'Convocation',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_15.jpg',
    fullImage: '/gallery/nith/gallery_15.jpg',
    caption: 'Celebrating academic distinction and high merit honours in professional sciences.'
  },
  {
    id: 16,
    title: 'Conferral of Master of Science & Professional Degrees',
    category: 'Convocation',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_16.jpg',
    fullImage: '/gallery/nith/gallery_16.jpg',
    caption: 'Postgraduate degree certificates presented during the afternoon conferral session.'
  },
  {
    id: 17,
    title: 'Bachelor of Technology & Sciences Degree Presentation',
    category: 'Convocation',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_17.jpg',
    fullImage: '/gallery/nith/gallery_17.jpg',
    caption: 'Graduates donning traditional crimson and saffron academic stoles receiving parchments.'
  },
  {
    id: 18,
    title: 'Felicitation of Institutional Mentors & Senior Faculty',
    category: 'Dignitaries & Assembly',
    date: '2025',
    thumbnail: '/gallery/nith/gallery_18.jpg',
    fullImage: '/gallery/nith/gallery_18.jpg',
    caption: 'Acknowledging outstanding dedication to collegiate education, research, and healthcare.'
  }
];

export const NIT_GALLERY_PHOTOS = RAW_GALLERY_PHOTOS.map(p => ({
  ...p,
  thumbnail: getCdnUrl(p.thumbnail),
  fullImage: getCdnUrl(p.fullImage)
}));

export default function NitGallerySection({ onNavigate, onOpenApply }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  // Close lightbox on Escape key, navigate on Arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedPhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev + 1) % NIT_GALLERY_PHOTOS.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev - 1 + NIT_GALLERY_PHOTOS.length) % NIT_GALLERY_PHOTOS.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  const activePhoto = selectedPhotoIndex !== null ? NIT_GALLERY_PHOTOS[selectedPhotoIndex] : null;

  return (
    <section className="bg-white py-6 border-b border-slate-200">
      <div className="max-w-[1380px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* NIT Hamirpur Exact Dark Navy Title Header */}
        <div className="mb-4 shadow-xs">
          <h3 
            className="text-white text-center font-bold tracking-wide uppercase sm:normal-case text-base sm:text-[18px] py-2 px-4 shadow-inner"
            style={{ 
              backgroundColor: '#02263c', 
              fontFamily: "'Roboto Condensed', sans-serif",
              letterSpacing: '0.5px'
            }}
          >
            Photo/Video Gallery
          </h3>
        </div>

        {/* 6-Column Responsive Grid matching NIT Hamirpur */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {NIT_GALLERY_PHOTOS.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="group relative block bg-slate-900 overflow-hidden cursor-pointer rounded-xs shadow-xs border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-300"
              title={item.title}
            >
              {/* Thumbnail Image with smooth scale zoom on hover */}
              <div className="relative w-full aspect-[4/3] sm:h-36 overflow-hidden bg-slate-900 flex items-center justify-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-115"
                />

                {/* NIT Hamirpur Exact Rotate & Fade Hover Overlay */}
                <div 
                  className="absolute inset-0 bg-black/65 flex flex-col items-center justify-center p-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none"
                  style={{
                    backdropFilter: 'blur(1.5px)'
                  }}
                >
                  {/* Rotating Circular Magnifier Icon */}
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
            </div>
          ))}
        </div>

        {/* NIT Hamirpur Exact Centered Dark Maroon < VIEW MORE > Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('gallery');
              } else {
                window.location.hash = '#gallery';
              }
            }}
            className="group inline-flex items-center justify-center gap-2 px-7 py-2 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xs shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            style={{
              backgroundColor: '#673035', // Authentic NIT Hamirpur burgundy/crimson color
              fontFamily: "'Roboto Condensed', sans-serif",
              letterSpacing: '1px'
            }}
          >
            <span className="font-extrabold text-sm opacity-80 group-hover:-translate-x-1 transition-transform">
              &lt;
            </span>
            <span className="tracking-widest">VIEW MORE</span>
            <span className="font-extrabold text-sm opacity-80 group-hover:translate-x-1 transition-transform">
              &gt;
            </span>
          </button>
        </div>

      </div>

      {/* Interactive Lightbox Modal for Photo Inspection */}
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
                {selectedPhotoIndex + 1} / {NIT_GALLERY_PHOTOS.length}
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
            {/* Previous Photo Button */}
            <button
              onClick={() => setSelectedPhotoIndex((prev) => (prev - 1 + NIT_GALLERY_PHOTOS.length) % NIT_GALLERY_PHOTOS.length)}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-[#673035] border border-white/20 text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 z-20"
              title="Previous Photo (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Display Photo */}
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

            {/* Next Photo Button */}
            <button
              onClick={() => setSelectedPhotoIndex((prev) => (prev + 1) % NIT_GALLERY_PHOTOS.length)}
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
            {NIT_GALLERY_PHOTOS.map((photo, i) => (
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
    </section>
  );
}
