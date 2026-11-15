import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
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
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export default function ContactPage({ onOpenApply }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Admission Inquiry',
    department: 'Gautam College of Pharmacy',
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
      phone: '+91-9418010420 / 01972-221493',
      email: 'admissions@ggchmr.com',
      hours: 'Mon - Sat: 9:00 AM - 5:00 PM'
    },
    {
      name: 'Gautam College of Pharmacy',
      location: 'Pharmacy Complex, Ward No. 10',
      phone: '+91-9816024193',
      email: 'pharmacy@ggchmr.com',
      hours: 'Mon - Sat: 9:00 AM - 4:30 PM'
    },
    {
      name: 'Gautam College of Nursing',
      location: 'Health Sciences Wing',
      phone: '+91-9805524193',
      email: 'nursing@ggchmr.com',
      hours: 'Mon - Sat: 8:30 AM - 4:30 PM'
    },
    {
      name: 'Gautam Institute of Management & Technology (GIMT)',
      location: 'Tech & MBA Block',
      phone: '01972-221493',
      email: 'gimt@ggchmr.com',
      hours: 'Mon - Sat: 9:00 AM - 5:00 PM'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-16 border-b border-indigo-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-3">
            <span>Official Directory</span>
            <span>•</span>
            <span>Hamirpur, Himachal Pradesh</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Contact & Campus Location
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Get in touch with the admissions office, departmental secretariats, or schedule an in-person campus visit at Gautam Group of Colleges, Hamirpur.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Quick Contact Cards & Form (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Emergency / Direct Call-out Box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
                    Direct WhatsApp Admission Helpdesk
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    Need fast eligibility confirmation or counseling?
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Live response from admission counselors (9 AM - 7 PM)
                  </div>
                </div>
                <a
                  href="https://wa.me/919418010420?text=Hello%20Gautam%20Group%20of%20Colleges,%20I%20would%20like%20information%20regarding%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-2">Send an Official Inquiry</h2>
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
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                          placeholder="e.g. 98160XXXXX"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Target College / Stream *
                        </label>
                        <select
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          <option>Gautam College of Pharmacy (B.Pharm / D.Pharm / M.Pharm)</option>
                          <option>Gautam College of Nursing (B.Sc / GNM / M.Sc)</option>
                          <option>GIMT - Management & Tech (BCA / BBA / MBA)</option>
                          <option>Gautam Degree College (B.Sc / B.Com / M.Sc)</option>
                          <option>Gautam College of Hotel Management (BHM / Diploma)</option>
                          <option>General Administration / Verification Desk</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Query / Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention your 10+2 / graduation percentage, entrance test rank (HPCET/NEET), or specific query regarding fee structure, hostel, or eligibility..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      ></textarea>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Average response time: 2-4 hours</span>
                      </div>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm hover:shadow transition-all inline-flex items-center gap-2"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Inquiry</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Departmental Office Directory Cards */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Constituent Office Directory</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {collegeOffices.map((office, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:border-indigo-300 transition-colors">
                      <div className="font-bold text-sm text-slate-900 mb-1">{office.name}</div>
                      <div className="text-xs text-slate-500 mb-3">{office.location}</div>
                      
                      <div className="space-y-1.5 text-xs text-slate-700">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                          <span className="truncate">{office.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Campus Address, Transit Guide & Map (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Campus Address Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-indigo-600" />
                  <span>Main Campus Headquarters</span>
                </h3>

                <div className="space-y-4 text-xs text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Gautam Group of Colleges</div>
                      <div className="text-slate-600 mt-0.5">
                        Near Hamirpur Bus Stand, Ward No. 10,<br />
                        Hamirpur, Himachal Pradesh – 177001, India
                      </div>
                      <div className="text-[11px] text-indigo-600 font-bold mt-1">
                        AISHE Code: C-11482 / C-53351 • College Code: HMR-04
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                    <Phone className="w-4 h-4 text-indigo-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900">Phone: </span>
                      <span>+91-9418010420, 01972-221493</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900">Email: </span>
                      <a href="mailto:info@ggchmr.com" className="text-indigo-600 hover:underline">info@ggchmr.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900">Administrative Timings: </span>
                      <span>Mon - Sat, 9:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenApply('apply')}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-bold text-xs transition text-center shadow-sm"
                  >
                    Apply for 2026 Admissions
                  </button>
                </div>
              </div>

              {/* Transit & Commute Guide */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-4">How to Reach Campus</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 shrink-0 mt-0.5">
                      <Bus className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">By Inter-State Bus (HRTC)</div>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                        Campus is located only <strong>800 meters from ISBT Hamirpur</strong>. Frequent deluxe & Volvo buses run from ISBT Kashmiri Gate Delhi, Sector 43 Chandigarh, and Shimla.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                      <Train className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">By Railway (Broad Gauge)</div>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                        Nearest broad-gauge railhead is <strong>Una Himachal (UHL)</strong> (~60 km). Direct Vande Bharat and Jan Shatabdi expresses link Una with New Delhi. Connecting buses run every 20 minutes to Hamirpur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-sky-50 text-sky-600 shrink-0 mt-0.5">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">By Air</div>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                        <strong>Kangra Gaggal Airport (DHM)</strong> is ~75 km away with daily flights from Delhi. Chandigarh International Airport (IXC) is ~180 km away.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Google Map Interactive Embed */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm overflow-hidden">
                <div className="text-xs font-bold text-slate-900 mb-2 flex items-center justify-between">
                  <span>Hamirpur Campus Map</span>
                  <a
                    href="https://maps.google.com/?q=Gautam+Group+of+Colleges+Hamirpur+Himachal+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-indigo-600 font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
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
