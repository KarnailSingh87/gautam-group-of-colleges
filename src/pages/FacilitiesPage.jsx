import React, { useState } from 'react';
import { 
  BookOpen, 
  HeartPulse, 
  Building2, 
  ExternalLink, 
  Clock, 
  MapPin, 
  Phone, 
  Wifi, 
  ShieldCheck, 
  Coffee, 
  CheckCircle2, 
  Compass,
  Bus,
  Dumbbell,
  Users,
  Award,
  Layers,
  Sparkles,
  Server,
  Activity,
  Bed,
  Home
} from 'lucide-react';
import { LIBRARY_RESOURCES, MEDICAL_FACILITIES, INSTITUTION_INFO } from '../data/blueprintData';

export default function FacilitiesPage({ onOpenTour }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'gimt-library', 'nursing-health', 'pharmacy-poly', 'hostels-wifi'

  return (
    <div className="py-10 bg-slate-50 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-[#02263c] via-[#0b2545] to-[#1e3a8a] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-blue-900/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/20">
              <Building2 className="w-3.5 h-3.5" />
              <span>Campus Infrastructure & Student Amenities • GGC Hamirpur</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              State-of-the-Art Laboratories, Computerized Libraries & Campus Living
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Explore the dedicated facilities across Gautam Degree College, Gautam Institute of Management & Technology (GIMT), Gautam College of Nursing, Gautam College of Pharmacy, and Gautam Polytechnic.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-amber-300">
              <span>✓ 24-Hour Campus Wi-Fi</span>
              <span>✓ Separate Boys & Girls Hostels</span>
              <span>✓ 15,474+ Troodon Library Titles</span>
              <span>✓ Health Centre & Gym</span>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-slate-200 pb-2">
          {[
            { id: 'overview', label: 'All Constituent Facilities Overview' },
            { id: 'gimt-library', label: 'GIMT Troodon Library & Computing' },
            { id: 'nursing-health', label: 'Nursing Campus, Gym & Healthcare' },
            { id: 'pharmacy-poly', label: 'Pharmacy & Polytechnic Workshops' },
            { id: 'hostels-wifi', label: 'Hostels, 24-Hr Wi-Fi & Mess' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-[#1e3a8a] text-white shadow'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. OVERVIEW: Constituent Colleges Facility Grid */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* Degree College */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900">Gautam College (Degree)</h3>
                <span className="text-[11px] font-bold text-[#ea580c] block">Estd. 1999 • HPU Affiliated</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Boys' hostel, girls' hostel, central library, sports grounds, cafeteria, auditorium, IT infrastructure, 24-hour campus-wide Wi-Fi, and well-equipped Science labs for Physics, Chemistry, Botany, and Zoology.
                </p>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  Affiliation Letter: <strong>(B.Sc.)1-213/2000-HP(ACAD)-3222</strong>
                </div>
              </div>

              {/* GIMT */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900">GIMT Management & Tech</h3>
                <span className="text-[11px] font-bold text-[#ea580c] block">Estd. 2012 • AICTE & HPTU</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fully computerized Troodon library holding <strong>15,474 textbook titles</strong> and <strong>500 technical reference journals</strong>. High-speed Wi-Fi reaching library, auditorium, cafeteria, and residential hostels.
                </p>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  Special: <strong>Guest house, sports complex & MBA analytics labs</strong>
                </div>
              </div>

              {/* Nursing College */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900">Gautam College of Nursing</h3>
                <span className="text-[11px] font-bold text-[#ea580c] block">Estd. 2014 • INC, HPNRC & AMRU</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated <strong>3-acre healthcare campus</strong> with 246 students, 21 faculty, student gymnasium, health centre with 24/7 first-aid, girls' hostel, nursing library, simulation ICU, and active placement cell.
                </p>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  Hospital Link: <strong>Dr. Radhakrishnan GMC Hamirpur</strong>
                </div>
              </div>

              {/* Pharmacy & Polytechnic */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900">Pharmacy & Polytechnic</h3>
                <span className="text-[11px] font-bold text-[#ea580c] block">PCI & AICTE Approved</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>2-acre Pharmacy campus</strong> (est. 2019, 312 students, 26 faculty) with machine room and formulation labs. <strong>Gautam Polytechnic</strong> offering 8 AICTE-approved diploma engineering branches and workshops.
                </p>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  Polytechnic Helpline: <strong>01972-223557 / 9418075475</strong>
                </div>
              </div>

            </div>

            {/* Quick Virtual Tour CTA */}
            <div className="p-6 bg-[#02263c] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base">Explore High-Definition Campus Views</h4>
                  <p className="text-xs text-slate-300">Interactive tour covering academic blocks, laboratories, hostels and libraries.</p>
                </div>
              </div>
              <button
                onClick={onOpenTour}
                className="px-5 py-2.5 rounded-xl bg-[#ea580c] hover:bg-orange-600 text-white font-bold text-xs flex items-center gap-2 shrink-0 transition"
              >
                <span>Launch Virtual Tour</span>
              </button>
            </div>
          </div>
        )}

        {/* 2. GIMT TROODON LIBRARY & IT COMPUTING */}
        {activeTab === 'gimt-library' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="text-xs text-slate-500 font-bold uppercase">GIMT Library Collection</div>
                <div className="text-2xl font-black text-[#1e3a8a]">15,474</div>
                <p className="text-xs text-slate-600">Textbook titles cataloged and electronically tracked for management and technical scholars.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="text-xs text-slate-500 font-bold uppercase">Reference Technical Journals</div>
                <div className="text-2xl font-black text-[#ea580c]">500+</div>
                <p className="text-xs text-slate-600">National and international peer-reviewed research journals covering IT, Management, and Sciences.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="text-xs text-slate-500 font-bold uppercase">Automation Engine</div>
                <div className="text-base font-black text-emerald-700">Troodon Software</div>
                <p className="text-xs text-slate-600">Barcode circulation, OPAC terminal searching, and digital catalogue tracking.</p>
              </div>

            </div>

            {/* Detailed Feature Breakdown */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-base">Key Academic Library Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Wifi className="w-4 h-4 text-[#1e3a8a]" />
                    <span>Seamless Campus Wi-Fi Integration</span>
                  </div>
                  <p className="text-slate-600">
                    High-speed Wi-Fi covers the entire library reading hall, computer terminals, auditorium, cafeteria, and residential student hostels.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#ea580c]" />
                    <span>Free Book Bank Facility</span>
                  </div>
                  <p className="text-slate-600">
                    Full semester sets of essential textbooks provided free of charge to all SC, ST, IRDP, and meritorious candidates.
                  </p>
                </div>
              </div>

              {/* National Digital Redirects */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3 text-xs">
                {LIBRARY_RESOURCES.redirects.map((r, i) => (
                  <a
                    key={i}
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 text-[#1e3a8a] font-bold hover:bg-blue-100 transition"
                  >
                    <span>{r.title}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. NURSING CAMPUS, GYM & HEALTHCARE */}
        {activeTab === 'nursing-health' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center">
                <div className="text-2xl font-black text-rose-700">3 Acres</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Dedicated Campus</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Separate nursing healthcare block</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center">
                <div className="text-2xl font-black text-[#1e3a8a]">246+</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Nursing Students</div>
                <p className="text-[11px] text-slate-500 mt-0.5">B.Sc, Post Basic & GNM</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center">
                <div className="text-2xl font-black text-emerald-700">21</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Specialized Faculty</div>
                <p className="text-[11px] text-slate-500 mt-0.5">M.Sc & clinical educators</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center">
                <div className="text-2xl font-black text-[#ea580c]">24/7</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Health & First-Aid</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Doctor & nurse on-call</p>
              </div>
            </div>

            {/* Healthcare Facilities Grid */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <h3 className="font-bold text-slate-900 text-base">Clinical Labs & Student Well-Being Infrastructure</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Dumbbell className="w-4 h-4 text-purple-700" />
                    <span>Campus Student Gymnasium</span>
                  </div>
                  <p className="text-slate-600">Fully equipped gym with modern cardio equipment and weights for physical wellness.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <HeartPulse className="w-4 h-4 text-rose-700" />
                    <span>Health Centre with First-Aid</span>
                  </div>
                  <p className="text-slate-600">On-campus clinic providing primary medical checkups, emergency first aid, and ambulance backup.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-blue-700" />
                    <span>Girls' Residential Hostel</span>
                  </div>
                  <p className="text-slate-600">Dedicated safe girls' hostel block with CCTV surveillance, warden, mess, and study hall.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-emerald-700" />
                    <span>Advanced Simulation Labs</span>
                  </div>
                  <p className="text-slate-600">Pre-clinical, Maternal & Child Health (MCH), Nutrition, and Community Health practical suites.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Home className="w-4 h-4 text-amber-700" />
                    <span>Guest Room & Canteen</span>
                  </div>
                  <p className="text-slate-600">Furnished guest rooms for visiting parents and spacious hygienic student cafeteria.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-indigo-700" />
                    <span>Training & Placement Cell</span>
                  </div>
                  <p className="text-slate-600">Active placement coordinator organizing clinical hospital recruitments and internship drives.</p>
                </div>
              </div>

              {/* GMC Hamirpur Tie-Up */}
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div>
                  <strong className="text-blue-900">Affiliated Hospital Clinical Training:</strong>
                  <span className="text-slate-700 ml-1">Dr. Radhakrishnan Government Medical College (GMC) & Hospital, Hamirpur.</span>
                </div>
                <span className="px-3 py-1 bg-blue-700 text-white font-bold rounded-lg text-[11px] shrink-0">
                  Daily Bedside Rotations
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 4. PHARMACY & POLYTECHNIC WORKSHOPS */}
        {activeTab === 'pharmacy-poly' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              
              {/* Pharmacy Block */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-slate-900">Gautam College of Pharmacy</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                    PCI Approved • Estd. 2019
                  </span>
                </div>
                <div className="space-y-2 text-slate-600 leading-relaxed">
                  <p>• <strong>Campus Profile:</strong> 2-acre dedicated pharmacy campus, 312 enrolled students, and 26 qualified faculty members.</p>
                  <p>• <strong>Pharmaceutics Machine Room:</strong> Tablet punching machines, coating pans, disintegration & dissolution test apparatus.</p>
                  <p>• <strong>Pharmaceutical Chemistry Lab:</strong> Organic synthesis, purity testing, analytical titration, and fume hoods.</p>
                  <p>• <strong>Pharmacology & Pharmacognosy:</strong> Anatomical models, herbarium specimens, microscope workstations, and bio-assay baths.</p>
                  <p>• <strong>Central Instrumentation Room:</strong> UV-Visible spectrophotometers, digital balances, and precision refractometers.</p>
                </div>
              </div>

              {/* Polytechnic Block */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-slate-900">Gautam Polytechnic Workshops</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-[10px]">
                    AICTE Approved • 8 Branches
                  </span>
                </div>
                <div className="space-y-2 text-slate-600 leading-relaxed">
                  <p>• <strong>Civil & Architecture Engineering:</strong> Surveying lab with total stations, theodolites, building materials lab, and CAD drafting lab.</p>
                  <p>• <strong>Mechanical Engineering Workshop:</strong> Carpentry, fitting, welding shop, lathe machine bay, and smithy shop.</p>
                  <p>• <strong>Electrical & Electronics Labs:</strong> AC/DC machines, transformer testing, analog & digital electronics, microprocessor kits.</p>
                  <p>• <strong>Computer & IT Labs:</strong> High-speed network lab, Linux programming terminal, web development suites.</p>
                  <p>• <strong>Hotel Management:</strong> Training kitchen, mock bar & restaurant, front-office desk simulation.</p>
                  <div className="pt-2 border-t border-slate-100 font-bold text-slate-800">
                    Direct Polytechnic Helplines: 01972-223557, 01972-221493, +91-9418075475
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 5. HOSTELS, 24-HR WI-FI & MESS */}
        {activeTab === 'hostels-wifi' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
            
            {/* Hostels & Residential Living */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5 text-[#1e3a8a]" />
                <h3 className="font-bold text-base text-slate-900">Residential Hostels & Guest House</h3>
              </div>
              <ul className="space-y-2.5 text-slate-600 leading-relaxed">
                <li>• <strong>Separate Residential Blocks:</strong> Independent secure hostels for Boys and Girls with round-the-clock security and CCTV monitoring.</li>
                <li>• <strong>Wholesome Dining Mess:</strong> Hygienic dining halls serving nutritious North Indian meals under food committee supervision.</li>
                <li>• <strong>24-Hour Wi-Fi:</strong> High-speed internet connectivity across all hostel rooms, common study halls, and dining facilities.</li>
                <li>• <strong>Guest House / Waiting Room:</strong> Well-furnished guest accommodations for visiting parents, guest lecturers, and university inspectors.</li>
                <li>• <strong>Indicative Hostel Fee:</strong> D.Pharma hostel accommodation approx. ₹96,000 for 2 years (optional) or ~₹48,000–₹55,000 per academic year.</li>
              </ul>
            </div>

            {/* Commute & Location */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <Bus className="w-5 h-5 text-[#ea580c]" />
                <h3 className="font-bold text-base text-slate-900">Transport & Hamirpur Hub Connectivity</h3>
              </div>
              <ul className="space-y-2.5 text-slate-600 leading-relaxed">
                <li>• <strong>Location:</strong> Ward No. 10, Near Inter-State Bus Stand (ISBT), Chakmoh, Galore, Hamirpur (H.P.), PIN 177001.</li>
                <li>• <strong>Daily Commute Routes:</strong> Direct HRTC and local bus connectivity from Bilaspur, Ghumarwin, Kangra, Nadaun, Sujanpur, Bhoranj, and Una.</li>
                <li>• <strong>Student Concession:</strong> The college office assists day scholars with official verification for monthly HRTC concessional bus passes.</li>
                <li>• <strong>Parking & Accessibility:</strong> Dedicated on-campus vehicular parking for students and staff.</li>
              </ul>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
