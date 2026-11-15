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
  Bus
} from 'lucide-react';
import { LIBRARY_RESOURCES, MEDICAL_FACILITIES, INSTITUTION_INFO } from '../data/blueprintData';

export default function FacilitiesPage({ onOpenTour }) {
  const [activeTab, setActiveTab] = useState('library'); // 'library', 'medical', 'infrastructure', 'hostels'

  return (
    <div className="py-12 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="max-w-3xl space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
              Campus Facilities & Welfare • Parts 7, 8 & 9 Blueprint
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Central Library, Healthcare Clinic & Campus Living
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Modern academic infrastructure designed for intellectual immersion, student health, and secure residential living in the heart of Hamirpur.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-slate-200 pb-2">
          {[
            { id: 'library', label: 'Part 7: Central Library & E-Resources' },
            { id: 'medical', label: 'Part 8: Health & Medical Facilities' },
            { id: 'infrastructure', label: 'Part 9: Labs & Smart Classrooms' },
            { id: 'hostels', label: 'Hostels, Mess & Transport Routes' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. Part 7: Central Library */}
        {activeTab === 'library' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
                <div className="text-xs text-slate-500 font-bold uppercase">Printed Volumes</div>
                <div className="text-2xl font-black text-indigo-700">{LIBRARY_RESOURCES.totalVolumes}</div>
                <p className="text-xs text-slate-600">Comprehensive reference titles across Pharmacy, Nursing, Sciences, IT and Management.</p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
                <div className="text-xs text-slate-500 font-bold uppercase">Library Timings</div>
                <div className="text-sm font-black text-slate-900">{LIBRARY_RESOURCES.timings}</div>
                <p className="text-xs text-slate-600">Air-conditioned 180-seater reading sanctuary with dedicated research carrels.</p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
                <div className="text-xs text-slate-500 font-bold uppercase">Book Bank Facility</div>
                <div className="text-sm font-black text-emerald-700">100% Free for SC / ST / IRDP</div>
                <p className="text-xs text-slate-600">Semester textbook sets provided free of charge for underprivileged meritorious scholars.</p>
              </div>
            </div>

            {/* Official E-Library Redirects from Blueprint */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900">National E-Learning & Digital Library Portals</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {LIBRARY_RESOURCES.redirects.map((r, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{r.title}</div>
                      <p className="text-slate-600 mt-1">{r.desc}</p>
                    </div>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-indigo-600 font-bold hover:underline"
                    >
                      <span>Access Digital Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. Part 8: Medical & Health Facilities */}
        {activeTab === 'medical' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Campus Healthcare Clinic & Emergency Medical Services</h3>
              <p className="text-xs text-slate-500 mt-1">24/7 first aid, primary consultations, and emergency hospital linkages</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 text-sm">Campus First-Aid Clinic</div>
                <div><strong>In-Charge:</strong> {MEDICAL_FACILITIES.inCharge}</div>
                <div><strong>Location:</strong> {MEDICAL_FACILITIES.dispensary}</div>
                <div><strong>Emergency Standby:</strong> {MEDICAL_FACILITIES.ambulance}</div>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 text-sm">Super-Specialty Hospital Tie-Up</div>
                <div><strong>Associated Hospital:</strong> {MEDICAL_FACILITIES.tieUpHospital}</div>
                <div><strong>Hospital Emergency Helpline:</strong> {MEDICAL_FACILITIES.emergencyNumbers}</div>
                <div><strong>Ambulance Response Time:</strong> Under 5 minutes</div>
              </div>
            </div>

            {/* National Health Redirects */}
            <div className="pt-4 border-t flex flex-wrap gap-4 text-xs">
              {MEDICAL_FACILITIES.redirects.map((med, idx) => (
                <a
                  key={idx}
                  href={med.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-indigo-700 font-bold hover:bg-indigo-50 flex items-center gap-1.5"
                >
                  <span>{med.title}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* 3. Part 9: Labs & Infrastructure */}
        {activeTab === 'infrastructure' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  Rx
                </div>
                <h4 className="font-bold text-slate-900 text-sm">PCI Approved Pharma Labs</h4>
                <p className="text-slate-600">Equipped with HPLC, UV-Vis spectrophotometers, dissolution apparatus, and digital rotary tablet presses.</p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  +
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Clinical Nursing Simulation ICU</h4>
                <p className="text-slate-600">Equipped with cardiopulmonary resuscitation mannequins, pediatric care incubators, and maternal delivery simulators.</p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  IT
                </div>
                <h4 className="font-bold text-slate-900 text-sm">High-Speed Computing Lab</h4>
                <p className="text-slate-600">Over 150 Core-i7 workstations connected via 1 Gbps optical fiber for BCA, PGDCA, and MBA data analytics.</p>
              </div>
            </div>

            <div className="p-6 bg-slate-900 text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-base">Want to inspect our laboratories and classrooms?</h4>
                <p className="text-xs text-slate-400 mt-0.5">Explore high-definition 360° interactive campus views.</p>
              </div>
              <button
                onClick={onOpenTour}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Launch Virtual Tour</span>
              </button>
            </div>
          </div>
        )}

        {/* 4. Hostels & Bus Routes */}
        {activeTab === 'hostels' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Residential Hostels & Dining Mess</h3>
              <ul className="space-y-2 text-slate-600 leading-relaxed">
                <li>• <strong>Separate Hostels:</strong> Independent blocks for Boys and Girls with CCTV and security guards.</li>
                <li>• <strong>Wholesome Mess:</strong> Hygienic North Indian vegetarian & non-vegetarian culinary options supervised by food committee.</li>
                <li>• <strong>Amenities:</strong> Solar water heating, continuous backup power generators, Wi-Fi, and indoor sports room.</li>
                <li>• <strong>Annual Hostel & Mess Fee:</strong> ₹55,000 / academic year (payable in 2 installments).</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Transport & Bus Routes (Hamirpur Hub)</h3>
              <ul className="space-y-2 text-slate-600 leading-relaxed">
                <li>• <strong>Prime Location:</strong> Right adjacent to Hamirpur Inter-State Bus Stand (ISBT).</li>
                <li>• <strong>Daily Commute Routes:</strong> Direct connectivity from Bilaspur, Ghumarwin, Kangra, Nadaun, Sujanpur, Bhoranj, and Una.</li>
                <li>• <strong>Student Concession:</strong> Official assistance provided for HRTC monthly concessional student bus passes.</li>
                <li>• <strong>Campus Parking:</strong> Secure dedicated parking for two-wheelers and staff automobiles.</li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
