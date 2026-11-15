import React, { useState } from 'react';
import {
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Users,
  Award,
  BookOpen,
  Compass,
  MapPin,
  Building,
  GraduationCap,
  Calendar,
  FileText,
  CreditCard,
  UserCheck,
  Send,
  Download
} from 'lucide-react';
import { getCdnUrl } from '../utils/cloudinary';

export default function HeroSection({
  onOpenTour,
  onScrollToPrograms,
  onOpenApply,
  onOpenPortal
}) {
  const [quickForm, setQuickForm] = useState({
    name: '',
    phone: '',
    stream: 'B.Pharmacy (PCI / HPTU)',
    city: 'Hamirpur'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-800">
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 pattern-grid opacity-15 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Badges & Pre-header */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>🏛️ Gautam Group of Colleges • 25 Glorious Years (1999–2025)</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-medium">
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            <span>Near Bus Stand, Hamirpur (H.P.)</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>HPTU • HPU • AMRU • AICTE • PCI • INC Approved</span>
          </div>
        </div>

        {/* Hero Grid: Content (Left) & Shoolini-Style Conversion Box / Campus View (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Bold Academic Credibility & Conversion CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400">
                Pioneering Professional Education in Himachal Pradesh
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                Excellence in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-indigo-200 to-cyan-200">
                  Pharmacy, Healthcare,
                </span>{' '}
                Technology & Management.
              </h1>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Empowering 25,000+ scholars since 1999. Featuring top-ranked constituent colleges in <strong>B.Pharmacy, B.Sc. Nursing, MBA, BCA, M.Sc Sciences, and Hotel Management</strong> with 100% clinical rotation tie-up at Dr. Radhakrishnan Govt Medical College Hamirpur.
            </p>

            {/* CTAs Group */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => onOpenApply('apply')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-extrabold text-sm shadow-lg shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Apply for 2025–26 Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTour}
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-bold text-sm border border-slate-700 backdrop-blur-md transition-all group"
              >
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>360° Campus Tour</span>
              </button>

              <button
                onClick={onScrollToPrograms}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-slate-300 hover:text-white text-sm font-semibold hover:bg-slate-900/60 transition"
              >
                <BookOpen className="w-4 h-4 text-amber-300" />
                <span>View All 24+ Courses</span>
              </button>
            </div>

            {/* Highlights Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Ragging Campus (24x7 Helpline)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>HP e-Pass & NSP Scholarship Center</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>800m from Hamirpur Bus Stand</span>
              </div>
            </div>

          </div>

          {/* Right Column: Shoolini/HPTU Interactive Admission Box & Real Campus Visual (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">

            {/* Shoolini-style Quick Admission Inquiry Card */}
            <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-700/80 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Admissions 2025–26 Helpdesk</h3>
                    <p className="text-[10px] text-amber-300 font-medium">Free Counseling & Instant Prospectus</p>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                  Open
                </span>
              </div>

              {isSubmitted ? (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-center space-y-2 animate-in fade-in">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="text-xs font-bold text-emerald-200">Inquiry Registered Successfully!</div>
                  <div className="text-[11px] text-slate-300">
                    Application Ref: <span className="font-mono font-bold text-white">GGC-ADM-2025-{Math.floor(1000 + Math.random() * 9000)}</span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Our admissions counselor will call you on <strong>{quickForm.phone}</strong> with seat availability & fee structure details.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 text-[11px] font-bold text-indigo-400 hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Choose Your Program / Stream *
                    </label>
                    <select
                      value={quickForm.stream}
                      onChange={(e) => setQuickForm({ ...quickForm, stream: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option>B.Pharmacy (4 Years - PCI / HPTU)</option>
                      <option>D.Pharmacy (2 Years - PCI / HPTSB)</option>
                      <option>B.Sc. Nursing (4 Years - INC / AMRU)</option>
                      <option>GNM Diploma (3 Years - INC / HPNRC)</option>
                      <option>MBA (2 Years - AICTE / HPTU)</option>
                      <option>BCA (3 Years - HPU Shimla)</option>
                      <option>M.Sc Physics / Chemistry / Bot / Zoo</option>
                      <option>BHM - Hotel Management & Catering</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Candidate Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={quickForm.name}
                        onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500 placeholder-slate-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit phone"
                        value={quickForm.phone}
                        onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500 placeholder-slate-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Get Instant Call Back & Prospectus</span>
                  </button>
                </form>
              )}
            </div>

            {/* Real Campus Visual Card with Crest */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
              <img
                src={getCdnUrl('/ggc-campus.jpg')}
                alt="Actual Campus View of Gautam College of Nursing, Hamirpur"
                className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <img src={getCdnUrl('/gautam_group_colleges_logo.png')} alt="GGC Logo" className="w-5 h-5 bg-white rounded-full p-0.5" />
                  <span className="font-bold text-white text-[11px]">Real Campus • Gautam College Hamirpur</span>
                </div>
                <button
                  onClick={onOpenTour}
                  className="text-[10px] bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded font-bold hover:bg-white/30 transition"
                >
                  Explore Tour →
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* 6-PILLAR INSTITUTIONAL QUICK DOCK (NIT Hamirpur & HPTU Reference Role) */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <Building className="w-4 h-4 text-indigo-400" />
            <span>Digital Services & Fast-Access Portals (HPTU • HPU • AMRU Gateway)</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">

            {/* 1. Admission 2025 */}
            <button
              onClick={() => onOpenApply('apply')}
              className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/20 border border-slate-800 hover:border-indigo-500/50 transition-all text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                Online Admission
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Session 2025–26</div>
            </button>

            {/* 2. Exam & Results */}
            <button
              onClick={() => onOpenPortal('results')}
              className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/20 border border-slate-800 hover:border-indigo-500/50 transition-all text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                Exam Datesheet
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">HPTU & HPU Results</div>
            </button>

            {/* 3. Fee Payment */}
            <button
              onClick={() => onOpenPortal('fee-pay')}
              className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/20 border border-slate-800 hover:border-indigo-500/50 transition-all text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <CreditCard className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                Pay Fee Online
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Instant SBI / PNB Receipt</div>
            </button>

            {/* 4. Syllabus & PYQ */}
            <button
              onClick={() => onOpenPortal('pyq')}
              className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/20 border border-slate-800 hover:border-indigo-500/50 transition-all text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <FileText className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                Syllabus & PYQ
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Download PDF Papers</div>
            </button>

            {/* 5. Student ERP / OTR */}
            <button
              onClick={() => onOpenPortal('otr')}
              className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/20 border border-slate-800 hover:border-indigo-500/50 transition-all text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <UserCheck className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                Student ERP / SIS
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Biometrics & Roll No</div>
            </button>

            {/* 6. Anti-Ragging */}
            <a
              href="https://www.antiragging.in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-rose-600/20 border border-slate-800 hover:border-rose-500/50 transition-all text-left group block"
            >
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-white group-hover:text-rose-300 transition-colors">
                Anti-Ragging Cell
              </div>
              <div className="text-[10px] text-rose-400 font-bold mt-0.5">1800-180-5522</div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
