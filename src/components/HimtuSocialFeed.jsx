import React from 'react';
import { 
  ExternalLink, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  Play, 
  Heart,
  CheckCircle2
} from 'lucide-react';
import { FacebookIcon, YoutubeIcon, XIcon, InstagramIcon } from './SocialIcons';
import { getCdnUrl } from '../utils/cloudinary';

export default function HimtuSocialFeed() {
  return (
    <section className="bg-slate-50 py-12 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-[#ea580c] uppercase tracking-tight">
            Social Media Engagements
          </h2>
          <div className="h-1 w-20 bg-[#ea580c] mt-1 rounded-full"></div>
        </div>

        {/* 4 Social Cards Grid matching HPTU layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* 1. FACEBOOK CARD */}
          <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            {/* Platform Header */}
            <div className="bg-[#1877F2] text-white px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-sm">
                <FacebookIcon className="w-4 h-4 fill-white" />
                <span>Facebook</span>
              </div>
              <a
                href="https://www.facebook.com/search/top?q=Gautam%20Group%20of%20Colleges%20Hamirpur"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition"
                title="Visit Official Facebook Page"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Post Content */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div className="flex items-center gap-2.5">
                <img 
                  src={getCdnUrl('/gautam_group_colleges_logo.png')} 
                  alt="GGC Logo" 
                  className="w-9 h-9 rounded-full object-contain border border-slate-200 p-0.5 bg-slate-50"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-xs text-slate-900 leading-none">Gautam Group of Colleges</span>
                    <CheckCircle2 className="w-3 h-3 text-blue-600 fill-blue-600" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium">Hamirpur (H.P.) • 2d ago</span>
                </div>
              </div>

              {/* Newspaper Clipping Image */}
              <div className="rounded-lg overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
                <img 
                  src={getCdnUrl('/himachaltonite-event.webp')} 
                  alt="Newspaper coverage" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>

              <p className="text-xs text-slate-700 line-clamp-3 leading-relaxed">
                गौतम कॉलेज हमीरपुर में कौशल विकास एवं प्लेसमेंट जागरूकता सत्र का आयोजन। विद्यार्थियों ने बहुराष्ट्रीय कंपनियों के चयन प्रक्रिया में उत्कृष्ट प्रदर्शन किया।
              </p>

              {/* Engagement Stats */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-slate-500 text-xs">
                <span className="flex items-center gap-1 font-medium hover:text-blue-600 cursor-pointer">
                  <ThumbsUp className="w-3.5 h-3.5 text-blue-600" /> 284 Likes
                </span>
                <span className="flex items-center gap-1 font-medium hover:text-blue-600 cursor-pointer">
                  <MessageCircle className="w-3.5 h-3.5" /> 42 Comments
                </span>
              </div>
            </div>
          </div>

          {/* 2. YOUTUBE CARD */}
          <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            {/* Platform Header */}
            <div className="bg-[#FF0000] text-white px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-sm">
                <YoutubeIcon className="w-4 h-4 fill-white" />
                <span>YouTube</span>
              </div>
              <a
                href="https://www.youtube.com/@gautamgroupofcollegesggc2063"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition"
                title="Visit Official YouTube Channel (@gautamgroupofcollegesggc2063)"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Video Preview */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div className="flex items-center gap-2.5">
                <img 
                  src={getCdnUrl('/gautam_group_colleges_logo.png')} 
                  alt="GGC Logo" 
                  className="w-9 h-9 rounded-full object-contain border border-slate-200 p-0.5 bg-slate-50"
                />
                <div>
                  <span className="font-bold text-xs text-slate-900 block leading-none">GGC Official Media</span>
                  <span className="text-[10px] text-slate-500 font-medium">18.4K Subscribers</span>
                </div>
              </div>

              <a 
                href="https://www.youtube.com/@gautamgroupofcollegesggc2063" 
                target="_blank" 
                rel="noreferrer" 
                className="relative rounded-lg overflow-hidden aspect-[4/3] bg-slate-900 group cursor-pointer block"
                title="Play Campus Tour & Silver Jubilee Fest on YouTube"
              >
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80" 
                  alt="YouTube Video Thumbnail" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-mono px-1.5 py-0.5 rounded">
                  06:42
                </div>
              </a>

              <p className="text-xs font-semibold text-slate-800 line-clamp-2">
                Campus Life & Silver Jubilee Fest Highlights | Gautam Group of Colleges Hamirpur
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-slate-500 text-xs">
                <span>3.2K Views</span>
                <a 
                  href="https://www.youtube.com/@gautamgroupofcollegesggc2063" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-red-600 font-bold hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Watch Video</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* 3. X (TWITTER) CARD */}
          <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            {/* Platform Header */}
            <div className="bg-black text-white px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-sm">
                <XIcon className="w-4 h-4 fill-white" />
                <span>X (Twitter)</span>
              </div>
              <a
                href="https://twitter.com/search?q=Gautam%20College%20Hamirpur"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition"
                title="View on X (Twitter)"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Tweet Content */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div className="flex items-center gap-2.5">
                <img 
                  src={getCdnUrl('/gautam_group_colleges_logo.png')} 
                  alt="GGC Logo" 
                  className="w-9 h-9 rounded-full object-contain border border-slate-200 p-0.5 bg-slate-50"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-xs text-slate-900 leading-none">@GautamHamirpur</span>
                    <CheckCircle2 className="w-3 h-3 text-blue-500 fill-blue-500" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">Gautam Group Hamirpur</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800 space-y-2 leading-relaxed">
                <p>
                  📢 <strong>Important Update:</strong> Online registrations open for B.Pharmacy, B.Sc Nursing, MBA & BCA spot counseling sessions for academic year 2026-27.
                </p>
                <p className="text-blue-600 font-mono text-[11px]">
                  #GautamColleges #Hamirpur #HPTU #HPU #Admissions2026
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-slate-500 text-xs">
                <span className="flex items-center gap-1 font-medium hover:text-slate-900 cursor-pointer">
                  <Heart className="w-3.5 h-3.5 text-rose-500" /> 118
                </span>
                <span className="flex items-center gap-1 font-medium hover:text-slate-900 cursor-pointer">
                  <Share2 className="w-3.5 h-3.5 text-blue-500" /> 35 Reposts
                </span>
              </div>
            </div>
          </div>

          {/* 4. INSTAGRAM CARD */}
          <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            {/* Platform Header */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-sm">
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
              </div>
              <a
                href="https://www.instagram.com/explore/tags/gautamcollegehamirpur/"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition"
                title="View on Instagram"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Insta Post Content */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img 
                    src={getCdnUrl('/gautam_group_colleges_logo.png')} 
                    alt="GGC Logo" 
                    className="w-8 h-8 rounded-full object-contain border border-pink-500 p-0.5"
                  />
                  <span className="font-bold text-xs text-slate-900">gautam_colleges_hamirpur</span>
                </div>
                <a 
                  href="https://www.instagram.com/explore/tags/gautamcollegehamirpur/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[10px] font-bold text-blue-600 border border-blue-600 rounded px-1.5 py-0.5 hover:bg-blue-50 transition"
                >
                  Follow
                </a>
              </div>

              <a 
                href="https://www.instagram.com/explore/tags/gautamcollegehamirpur/" 
                target="_blank" 
                rel="noreferrer"
                className="rounded-lg overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 group block"
              >
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" 
                  alt="Instagram Campus Life" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </a>

              <p className="text-xs text-slate-700 line-clamp-2 leading-relaxed">
                Celebrating 25 Glorious Years of Excellence in Education, Research & Healthcare in Hamirpur! ✨🎓
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-slate-500 text-xs">
                <span className="flex items-center gap-1 font-medium text-rose-600">
                  <Heart className="w-3.5 h-3.5 fill-rose-600" /> 542 Likes
                </span>
                <a 
                  href="https://www.instagram.com/explore/tags/gautamcollegehamirpur/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-slate-500 hover:text-pink-600 text-[11px] font-medium flex items-center gap-0.5"
                >
                  <span>View Profile</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
