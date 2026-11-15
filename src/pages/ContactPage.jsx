import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  PhoneCall,
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  Bus, 
  Plane, 
  Train, 
  MessageCircle, 
  ExternalLink,
  ShieldCheck,
  Globe,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { INSTITUTION_INFO, TELEPHONE_DIRECTORY } from '../data/blueprintData';

export default function ContactPage({ onOpenApply }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Admission Inquiry',
    department: 'Gautam College (General)',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const collegeOffices = [
    {
      name: 'Admissions & Central Registry Office',
      location: 'Administrative Block, Ground Floor',
      phone: '+91-9816687100 / 01972-221493',
      email: 'ggchmr@gmail.com',
      hours: 'Mon - Sat: 9:00 AM - 5:00 PM'
    },
    {
      name: 'Gautam College of Pharmacy (Est. 2019)',
      location: 'Pharmacy Complex, Ward No. 10',
      phone: '+91-9736391060 / +91-9418010420',
      email: 'ggchmr@gmail.com',
      hours: 'Mon - Sat: 9:00 AM - 4:30 PM'
    },
    {
      name: 'Gautam College of Nursing (Est. 2014)',
      location: 'Nursing Wing, Ward No. 10',
      phone: '+91-9816687100 / 01972-221493',
      email: 'ggchmr@gmail.com',
      hours: 'Mon - Sat: 8:30 AM - 4:30 PM'
    },
    {
      name: 'Gautam Institute of Management & Technology (GIMT)',
      location: 'MBA & IT Block',
      phone: '+91-9736991060 / 01972-221493',
      email: 'ggchmr@gmail.com',
      hours: 'Mon - Sat: 9:00 AM - 5:00 PM'
    },
    {
      name: 'Gautam Polytechnic (AICTE Approved)',
      location: 'Polytechnic Engineering Wing',
      phone: '01972-223557 / 01972-221493 / +91-9418075475',
      email: 'ggchmr@gmail.com',
      hours: 'Mon - Sat: 9:00 AM - 5:00 PM'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#1b327b] via-[#15234d] to-[#0f172a] text-white py-14 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
            <span>Official Directory</span>
            <span>•</span>
            <span>Hamirpur (Himachal Pradesh)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-['Roboto_Condensed',sans-serif]">
            Contact & Telephone Directory
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed font-light">
            Official contact points for Gautam Group of Colleges, Hamirpur. Connect directly with the Principal's office, Admission Cell, Placement Cell, or departmental secretariats.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* 1. OFFICIAL TELEPHONE DIRECTORY TABLE (Exact College Listed Numbers) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] block">
                  Official Communication Channels
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-['Roboto_Condensed',sans-serif]">
                  Campus Telephone Directory
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified College Data
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-y border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                    <th className="py-3 px-4">Section / Purpose</th>
                    <th className="py-3 px-4">Contact Number</th>
                    <th className="py-3 px-4">Direct Action</th>
                    <th className="py-3 px-4">Office Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {TELEPHONE_DIRECTORY.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                        <PhoneCall className="w-3.5 h-3.5 text-[#ea580c]" />
                        <span>{item.purpose}</span>
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-[#1b327b]">
                        {item.number}
                      </td>
                      <td className="py-3.5 px-4">
                        <a 
                          href={`tel:${item.raw}`}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 text-[#1b327b] hover:bg-[#ea580c] hover:text-white font-bold text-xs transition"
                        >
                          <Phone className="w-3 h-3" />
                          <span>Call Now</span>
                        </a>
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 text-xs">
                        {item.desc}
                      </td>
                    </tr>
                  ))}
                  
                  {/* Official Email Row */}
                  <tr className="bg-slate-50/50">
                    <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Official Email</span>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-800" colSpan={2}>
                      <a href="mailto:ggchmr@gmail.com" className="text-blue-600 hover:underline">
                        ggchmr@gmail.com
                      </a>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 text-xs">
                      General Administration & Registrar Desk
                    </td>
                  </tr>

                  {/* Websites Row */}
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Official Websites</span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs" colSpan={3}>
                      <div className="flex flex-wrap items-center gap-4">
                        <a 
                          href="https://www.ggchmr.com" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-blue-700 hover:underline flex items-center gap-1 font-bold"
                        >
                          <span>www.ggchmr.com</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <span className="text-slate-300">|</span>
                        <a 
                          href="https://admission.ggchmr.com" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-emerald-700 hover:underline flex items-center gap-1 font-bold"
                        >
                          <span>admission.ggchmr.com (Admission Portal)</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Grid with Contact Form & Campus Offices */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Form & Helpdesk (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* WhatsApp Admission Direct Support */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                    Direct WhatsApp Admission Helpdesk
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    Need instant eligibility confirmation or counseling?
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Call or text admission counselors directly at <strong>+91-9816687100</strong>
                  </div>
                </div>
                <a
                  href="https://wa.me/919816687100?text=Hello%20Gautam%20Group%20of%20Colleges,%20I%20would%20like%20information%20regarding%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Inquiry Form */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-1 font-['Roboto_Condensed',sans-serif]">
                  Send an Official Inquiry
                </h2>
                <p className="text-xs text-slate-600 mb-6">
                  Fill in your academic query below. Your message will be routed directly to the designated department head or admission officer.
                </p>

                {isSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                    <h3 className="text-base font-bold text-emerald-900">Inquiry Received Successfully</h3>
                    <p className="text-xs text-emerald-700 mt-1 max-w-md mx-auto">
                      Thank you, {formData.name}. Your inquiry has been forwarded to the {formData.department} secretariat. Our counseling team will contact you at {formData.phone} within 24 working hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-4 py-2 rounded-lg bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rohit Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9816687100"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="student@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Constituent College / Program
                        </label>
                        <select
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c] bg-white"
                        >
                          <option>Gautam College (B.A., B.Sc., B.Com., M.Sc.)</option>
                          <option>Gautam College of Pharmacy (B.Pharm, D.Pharm)</option>
                          <option>Gautam College of Nursing (B.Sc Nursing, GNM)</option>
                          <option>Gautam Institute of Management & Technology (MBA, BCA, BBA)</option>
                          <option>Gautam Polytechnic (Engineering Diplomas)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Message / Question
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please ask about eligibility, seats, fees, or hostel accommodation..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-xl bg-[#ea580c] hover:bg-orange-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Admission Office</span>
                    </button>
                  </form>
                )}
              </div>

            </div>

            {/* Right Column: Campus Details & Map (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Campus Address Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ea580c] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Main Campus Address</h3>
                    <div className="text-xs text-slate-500">Hamirpur, Himachal Pradesh</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 space-y-2 leading-relaxed">
                  <p className="font-bold text-slate-900">
                    Gautam Group of Colleges (GGC)
                  </p>
                  <p>
                    Ward No. 10, near Bus Stand, Chakmoh, Galore, Hamirpur (Himachal Pradesh), PIN 177001
                  </p>
                  <p className="text-[11px] text-slate-500">
                    • Near ISBT Hamirpur (Approx. 800m)
                  </p>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Office Hours: Mon - Sat (9:00 AM - 5:00 PM)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span className="font-mono">ggchmr@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Transit Directions */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-slate-900">Transit & Commute Access</h3>
                
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <Bus className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">By Bus:</strong> Frequent direct HRTC & private buses to Hamirpur ISBT from Chandigarh, Shimla, Dharamshala, and Delhi.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Train className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">By Train:</strong> Nearest broad-gauge station is Una Himachal (UHL) ~60 km (Vande Bharat connected).
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Plane className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">By Air:</strong> Kangra Airport (Gaggal, DHM) ~75 km, Chandigarh International Airport (IXC) ~180 km.
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm overflow-hidden">
                <div className="text-xs font-bold text-slate-900 mb-2 flex items-center justify-between">
                  <span>Interactive Campus Location</span>
                  <a
                    href="https://maps.google.com/?q=Gautam+Group+of+Colleges+Hamirpur+Himachal+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#ea580c] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <iframe
                    title="Gautam Group of Colleges Hamirpur Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3390.8653424696014!2d76.51868307644917!3d31.685493374138096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d49d97a61d1d%3A0xe5c9fa4b2e8fb7a3!2sHamirpur%2C%20Himachal%20Pradesh%20177001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
