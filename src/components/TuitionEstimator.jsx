import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  DollarSign, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function TuitionEstimator({ onOpenApply }) {
  const [category, setCategory] = useState('hp-general'); // hp-general, hp-reserved, other-state
  const [courseStream, setCourseStream] = useState('pharma'); // pharma, nursing, mgmt, science
  const [housing, setHousing] = useState('day-scholar'); // day-scholar, hostel

  const calculation = useMemo(() => {
    let baseTuition = 65000;
    if (courseStream === 'pharma') baseTuition = 82000;
    if (courseStream === 'nursing') baseTuition = 78000;
    if (courseStream === 'mgmt') baseTuition = 62000;
    if (courseStream === 'science') baseTuition = 48000;

    let hostelFee = housing === 'hostel' ? 55000 : 8000; // Hostel with mess vs HRTC Bus Pass

    // Scholarship assistance
    let scholarshipAmount = 0;
    let scholarshipName = 'Standard Institutional Merit Support';

    if (category === 'hp-reserved') {
      scholarshipAmount = Math.min(baseTuition, 55000);
      scholarshipName = 'HP Post-Matric SC/ST/OBC/IRDP State Scheme (NSP & e-Kalyan)';
    } else if (category === 'hp-general') {
      scholarshipAmount = 15000;
      scholarshipName = 'Gautam Group Silver Jubilee Merit Scholarship';
    } else {
      scholarshipAmount = 10000;
      scholarshipName = 'National Student Early Admission Concession';
    }

    const grossCost = baseTuition + hostelFee;
    const netAnnualCost = Math.max(0, grossCost - scholarshipAmount);

    return {
      baseTuition,
      hostelFee,
      scholarshipAmount,
      scholarshipName,
      grossCost,
      netAnnualCost
    };
  }, [category, courseStream, housing]);

  return (
    <section id="tuition" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Fee Structure & HP State Scholarship Desk
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Quality Professional Education with Full Scholarship Support
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Regulated state fees compliant with HPTU, HPU & AMRU. Our dedicated scholarship desk assists eligible Himachal Pradesh students in obtaining 100% government fee reimbursement.
          </p>
        </div>

        {/* Interactive Calculator Bento */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
            
            {/* Step 1: Category */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                1. Select Domicile & Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'hp-general', label: 'HP Domicile (General)', sub: 'State Merit Eligible' },
                  { id: 'hp-reserved', label: 'HP SC / ST / OBC / IRDP', sub: 'Full NSP / e-Kalyan Reimbursement' },
                  { id: 'other-state', label: 'Other State (All India)', sub: 'Direct Management Quota' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCategory(item.id)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      category === item.id
                        ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 ring-1 ring-indigo-600'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Course Stream */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                2. Select Course of Interest
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'pharma', label: 'B.Pharm / D.Pharm', sub: 'Pharmacy Block' },
                  { id: 'nursing', label: 'B.Sc. Nursing / GNM', sub: 'Nursing Block' },
                  { id: 'mgmt', label: 'MBA / BCA / BBA', sub: 'GIMT Block' },
                  { id: 'science', label: 'M.Sc. / B.Sc. / BHM', sub: 'Degree College' },
                ].map((stream) => (
                  <button
                    key={stream.id}
                    onClick={() => setCourseStream(stream.id)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      courseStream === stream.id
                        ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 ring-1 ring-emerald-600'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{stream.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{stream.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Housing Plan */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                3. Accommodation & Daily Commute
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setHousing('day-scholar')}
                  className={`p-3 rounded-2xl text-xs font-bold border transition-all ${
                    housing === 'day-scholar'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div>Day Scholar (Local / HRTC Bus Pass)</div>
                  <div className="text-[10px] opacity-80 mt-0.5">Near Hamirpur Bus Stand</div>
                </button>
                <button
                  onClick={() => setHousing('hostel')}
                  className={`p-3 rounded-2xl text-xs font-bold border transition-all ${
                    housing === 'hostel'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div>Campus Hostel (Mess & Wi-Fi)</div>
                  <div className="text-[10px] opacity-80 mt-0.5">Separate Boys & Girls Hostels</div>
                </button>
              </div>
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-2 pt-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Fees are charged strictly according to Himachal Pradesh State Government / HPTU regulatory norms.</span>
            </div>

          </div>

          {/* Results Summary Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-indigo-950 text-white p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Estimated Annual Expense & Aid
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold border border-emerald-500/30">
                  Govt Scheme Linked
                </span>
              </div>

              {/* Award Highlight */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Scholarship Benefit Scheme:</div>
                    <div className="text-xs font-bold text-white mt-0.5 leading-snug">{calculation.scholarshipName}</div>
                    <div className="text-xl font-black text-amber-300 mt-1">
                      -₹{calculation.scholarshipAmount.toLocaleString()} / year
                    </div>
                  </div>
                </div>
              </div>

              {/* Line Items Breakdown */}
              <div className="space-y-2.5 text-xs text-slate-300 border-b border-slate-800 pb-5 mb-5">
                <div className="flex justify-between">
                  <span>Annual Academic Course Fee:</span>
                  <span className="font-semibold text-white">₹{calculation.baseTuition.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>{housing === 'hostel' ? 'Hostel Room & Mess Charges:' : 'Estimated Transport / Bus Pass:'}</span>
                  <span className="font-semibold text-white">₹{calculation.hostelFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Estimated State Scholarship Deduction:</span>
                  <span>-₹{calculation.scholarshipAmount.toLocaleString()}</span>
                </div>
              </div>

              {/* Net Estimated Cost */}
              <div>
                <div className="text-xs text-slate-400">Net Estimated Annual Out-of-Pocket:</div>
                <div className="text-4xl font-black text-white mt-1 tracking-tight">
                  ₹{calculation.netAnnualCost.toLocaleString()}
                  <span className="text-sm font-normal text-slate-400"> / academic year</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Installment options available per semester. Concession for meritorious students.
                </p>
              </div>
            </div>

            {/* Lock in CTA */}
            <div className="pt-6 mt-6 border-t border-slate-800">
              <button
                onClick={() => onOpenApply('fee-inquiry', `Course Estimate: ₹${calculation.netAnnualCost.toLocaleString()}`)}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Request Detailed Fee Breakup & Prospectus</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
