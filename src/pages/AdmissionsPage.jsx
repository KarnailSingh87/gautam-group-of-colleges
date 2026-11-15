import React, { useState } from 'react';
import { 
  FileCheck, 
  HelpCircle, 
  Download, 
  CreditCard, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Calendar,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { COURSES_DETAIL, SCHOLARSHIPS_DATA } from '../data/blueprintData';

export default function AdmissionsPage({ onOpenApply, onOpenFeePay }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: 'Can students apply directly for Management / Direct Quota seats?',
      a: 'Yes. In accordance with university and state government notifications, eligible candidates who meet the minimum percentage criteria can apply directly for available direct management quota seats in B.Pharmacy, D.Pharmacy, B.Sc Nursing, MBA, BCA, and M.Sc.'
    },
    {
      q: 'What is the procedure for HP State Post-Matric Scholarships?',
      a: 'Students belonging to SC, ST, OBC, and IRDP/BPL categories domiciled in Himachal Pradesh can apply through the National Scholarship Portal (NSP) or HP e-Pass. The Gautam Group scholarship desk handles document verification and biometric authentication on campus.'
    },
    {
      q: 'What is the refund policy if a student withdraws admission?',
      a: 'Gautam Group strictly complies with the UGC / AICTE / Regulatory Council refund guidelines. Deductions are calculated on a pro-rata basis depending on the notification date of seat withdrawal before the cut-off date.'
    },
    {
      q: 'Are separate hostel facilities available for boys and girls?',
      a: 'Yes. Gautam Group maintains separate, secure residential hostels for male and female students with 24/7 security, resident wardens, CCTV surveillance, Wi-Fi, and hygienic dining mess.'
    }
  ];

  return (
    <div className="py-12 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="max-w-3xl space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              Admissions & Fee Blueprint • Part 5 Blueprint
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Admissions 2025–26, Fee Matrix & Scholarship Desk
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Step-by-step guidance for enrollment into accredited Pharmacy, Nursing, Management, IT, Life Sciences, and Hospitality programs.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenApply('apply')}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow"
              >
                <span>Fill Online Admission Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenFeePay}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 border border-slate-700"
              >
                <CreditCard className="w-4 h-4 text-emerald-400" />
                <span>Pay Admission / Semester Fee</span>
              </button>
            </div>
          </div>
        </div>

        {/* Step-by-Step Admission Process */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Step-by-Step Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-black flex items-center justify-center">1</div>
              <h3 className="font-bold text-slate-900 text-sm">Course Inquiry & Eligibility</h3>
              <p className="text-slate-600 leading-relaxed">Check minimum 10+2 / Graduation percentage criteria and HPCET / AMRU entrance requirements.</p>
            </div>
            <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-black flex items-center justify-center">2</div>
              <h3 className="font-bold text-slate-900 text-sm">Registration & Verification</h3>
              <p className="text-slate-600 leading-relaxed">Submit online application or visit campus admission office near Hamirpur Bus Stand with original documents.</p>
            </div>
            <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-black flex items-center justify-center">3</div>
              <h3 className="font-bold text-slate-900 text-sm">Counseling & Seat Allotment</h3>
              <p className="text-slate-600 leading-relaxed">Merit scrutiny by academic committee and issuance of provisional seat confirmation letter.</p>
            </div>
            <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-black flex items-center justify-center">4</div>
              <h3 className="font-bold text-slate-900 text-sm">Fee Payment & ERP Entry</h3>
              <p className="text-slate-600 leading-relaxed">Deposit semester fee online or at college counter; receive student ERP credentials and roll number.</p>
            </div>
          </div>
        </div>

        {/* Required Documents Checklist */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
            <FileCheck className="w-5 h-5" />
            <span>Mandatory Document Checklist for Verification (Self-Attested Copies Required)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-slate-700">
            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>10th (Matriculation) Certificate & Marksheet</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>10+2 Marksheet & Passing Certificate</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Graduation Marksheets (for PG / MBA / M.Sc)</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Himachal Domicile / Bonafide Certificate</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Category Certificate (SC / ST / OBC / EWS)</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Character Certificate & Migration Certificate</span>
            </div>
          </div>
        </div>

        {/* Comprehensive Fee Matrix Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-0">
          <div className="p-6 border-b flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Approved Course-Wise Fee Structure (Session 2024–25)</h2>
              <p className="text-xs text-slate-500">Regulated and approved by Himachal Pradesh State Fee Committee & Affiliating Bodies</p>
            </div>
            <button
              onClick={() => alert('Downloading Complete Fee Structure Schedule (PDF)...')}
              className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Fee PDF</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 uppercase font-bold text-[11px] border-b">
                  <th className="p-4">Program</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4">Tuition Fee (Per Year)</th>
                  <th className="p-4">Exam Fee (Per Sem/Yr)</th>
                  <th className="p-4">Refundable Caution Money</th>
                  <th className="p-4 text-right">Hostel & Mess</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {COURSES_DETAIL.map((c, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">{c.name}</td>
                    <td className="p-4">{c.duration}</td>
                    <td className="p-4 font-semibold text-indigo-700">{c.annualTuition}</td>
                    <td className="p-4">{c.examFee}</td>
                    <td className="p-4 font-mono text-slate-500">{c.cautionMoney}</td>
                    <td className="p-4 text-right font-medium text-slate-700">₹55,000 / yr (Optional)</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scholarships & Government Portals */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl p-8 border border-indigo-100 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Government Scholarships & Fee Reimbursement Desks</h2>
            <p className="text-xs text-slate-600">Full institutional guidance for online scholarship application and biometric KYC</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="bg-white p-6 rounded-2xl border border-indigo-100 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">National Scholarship Portal (NSP)</h3>
                <p className="text-slate-600 mt-1 leading-relaxed">Central Sector Scholarship for college and university students, post-matric scheme for minorities, and tribal welfare schemes.</p>
              </div>
              <a
                href={SCHOLARSHIPS_DATA.centralPortal.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold self-start hover:bg-indigo-700 transition-colors"
              >
                <span>Visit National Scholarship Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-indigo-100 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">HP e-Pass / e-Kalyan State Portal</h3>
                <p className="text-slate-600 mt-1 leading-relaxed">Himachal Pradesh Government Post-Matric Scholarship Scheme for SC, ST, OBC, EWS, IRDP, and Medhavi Chhatravriti Yojana.</p>
              </div>
              <a
                href={SCHOLARSHIPS_DATA.statePortal.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold self-start hover:bg-emerald-700 transition-colors"
              >
                <span>Visit HP e-Pass Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Admission Helplines & Official Portals */}
        <div className="bg-gradient-to-r from-orange-500 to-[#ea580c] rounded-3xl p-6 sm:p-8 text-white shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded">
                Direct Admission Helpline & Counseling
              </span>
              <h2 className="text-xl sm:text-2xl font-black mt-1 font-['Roboto_Condensed',sans-serif]">
                Admission Cell: +91-9816687100 • 01972-221493
              </h2>
              <p className="text-xs text-orange-100 mt-1 max-w-2xl">
                For Direct Merit Seats, Verification & Scholarship inquiries, call the central admission desk at Hamirpur campus or email <span className="underline font-bold">ggchmr@gmail.com</span>.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://admission.ggchmr.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white text-[#ea580c] font-black text-xs hover:bg-orange-50 transition shadow-sm flex items-center gap-1.5"
              >
                <span>admission.ggchmr.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://amruhp.ac.in"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-blue-950 text-white font-bold text-xs hover:bg-blue-900 transition flex items-center gap-1.5"
              >
                <span>AMRU Nursing Entrance</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Frequently Asked Questions (FAQs)</h2>
          <div className="space-y-3 text-xs">
            {faqs.map((f, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-4 text-left font-bold text-slate-900 bg-slate-50 hover:bg-slate-100 flex items-center justify-between"
                >
                  <span>{f.q}</span>
                  <span>{activeFaq === i ? '−' : '+'}</span>
                </button>
                {activeFaq === i && (
                  <div className="p-4 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
