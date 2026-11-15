export const INSTITUTION_INFO = {
  name: 'Gautam Group of Colleges (GGC), Hamirpur, Himachal Pradesh',
  shortName: 'GGC Hamirpur',
  trustName: 'Gautam Educational Trust / Right Information & Technical Education Society',
  estYear: '1999',
  jubileeText: '25+ Years of Educational Preeminence in Himachal Pradesh (Est. 1999)',
  address: 'Ward No. 10, near Bus Stand, Chakmoh, Galore, Hamirpur (Himachal Pradesh), PIN 177001',
  phonePrimary: '+91-9736391060',
  phoneLandline: '01972-221493',
  phoneOffice1: '+91-9736991060',
  phoneOffice2: '+91-9418010420',
  phoneAdmission: '+91-9816687100',
  phonePlacement: '+91-9736391060',
  email: 'ggchmr@gmail.com',
  website: 'https://www.ggchmr.com',
  admissionWebsite: 'https://admission.ggchmr.com',
  aisheCode: 'C-11482 / C-53351',
  collegeCode: 'HMR-04 (HPU / HPTU)',
  locationGeo: 'Ward No. 10, Near Bus Stand, Chakmoh, Galore, Hamirpur (H.P.)',
  logo: '/gautam_group_colleges_logo.png',
  campusImage: '/ggc-campus.jpg',
  stats: [
    { label: 'Students Graduated', value: '10,000+' },
    { label: 'Academic Programs', value: '25+' },
    { label: 'Years of History', value: '25+ (Est. 1999)' },
    { label: 'Constituent Colleges', value: '5 Institutions' }
  ],
  leadership: [
    {
      name: 'Dr. Rajneesh Gautam',
      designation: 'Principal cum Secretary',
      qualification: 'Ph.D., M.Sc.',
      role: 'Head of Institution & Executive Secretary'
    },
    {
      name: 'Mrs. Poonam Sharma',
      designation: 'Principal / Associate Professor',
      qualification: 'M.Sc Maternal Health Nursing',
      role: 'Head of Nursing Faculty (Gautam College of Nursing)'
    }
  ],
  constituentColleges: [
    {
      id: 'gdc',
      name: 'Gautam College',
      type: 'Degree College (UG & PG)',
      est: '1999',
      affiliation: 'Himachal Pradesh University (HPU), Shimla',
      description: 'Undergraduate and Postgraduate degrees in Arts, Science, Commerce, and Computer Applications.'
    },
    {
      id: 'polytechnic',
      name: 'Gautam Polytechnic',
      type: 'Technical & Engineering Diplomas',
      est: '1999',
      affiliation: 'H.P. Takniki Shiksha Board, Dharamshala',
      description: 'Polytechnic diplomas in applied technologies and vocational engineering.'
    },
    {
      id: 'gimt',
      name: 'Gautam Institute of Management and Technology (GIMT)',
      type: 'Management & IT',
      est: '2009',
      affiliation: 'AICTE New Delhi & HPTU Hamirpur',
      description: 'Professional management and software degree programs including MBA, BBA, BCA, and PGDCA.'
    },
    {
      id: 'nursing',
      name: 'Gautam College of Nursing',
      type: 'Nursing & Health Sciences',
      est: '2014',
      affiliation: 'Indian Nursing Council (INC), HP Nurses Registration Council (HPNRC) & HPU / AMRU Nerchowk',
      entranceInfo: 'Admissions conducted via Atal Medical & Research University (AMRU) entrance at https://amruhp.ac.in',
      description: 'Premier health education offering B.Sc Nursing, Post Basic B.Sc Nursing, and GNM with clinical rotations.'
    },
    {
      id: 'pharmacy',
      name: 'Gautam College of Pharmacy',
      type: 'Pharmaceutical Sciences & Research',
      est: '2019',
      affiliation: 'Pharmacy Council of India (PCI) & HPTU Hamirpur',
      description: 'PCI-approved B.Pharmacy and D.Pharmacy degree programs with advanced formulation laboratories.'
    }
  ]
};

export const TELEPHONE_DIRECTORY = [
  { purpose: 'Landline Office', number: '01972-221493', raw: '01972221493', desc: 'Main Campus Exchange' },
  { purpose: 'Main / General Inquiry', number: '+91-9736391060', raw: '9736391060', desc: 'Central Inquiry Desk' },
  { purpose: 'Administrative Office 1', number: '+91-9736991060', raw: '9736991060', desc: 'Staff & Registry Section' },
  { purpose: 'Administrative Office 2', number: '+91-9418010420', raw: '9418010420', desc: 'Principal Desk Secretariat' },
  { purpose: 'Admission Cell Helpdesk', number: '+91-9816687100', raw: '9816687100', desc: 'Counseling & Direct Merit Seats' },
  { purpose: 'Training & Placement Cell', number: '+91-9736391060', raw: '9736391060', desc: 'Corporate Tie-ups & Campus Drives' }
];

export const AFFILIATIONS_APPROVALS = [
  {
    body: 'Himachal Pradesh University (HPU), Shimla',
    role: 'Affiliating University (Degree College, BA, B.Sc, B.Com, BCA, BBA, M.Sc, MA)',
    status: 'Permanently Affiliated under UGC Act',
    docNumber: 'HPU/Affil/GGC-1999/2024',
    url: 'https://www.hpuniv.ac.in'
  },
  {
    body: 'Himachal Pradesh Technical University (HPTU), Hamirpur',
    role: 'Affiliating Technical University (B.Pharmacy & MBA)',
    status: 'Affiliated State Technical University',
    docNumber: 'HPTU/Affil/Pharm/2024-25',
    url: 'https://www.himtu.ac.in'
  },
  {
    body: 'Atal Medical and Research University (AMRU), Nerchowk',
    role: 'State Health Sciences University (B.Sc Nursing Entrance & Affiliation)',
    status: 'Official Entrance & Counseling Portal',
    docNumber: 'AMRU/Nursing/GCN/2024',
    url: 'https://amruhp.ac.in'
  },
  {
    body: 'Pharmacy Council of India (PCI), New Delhi',
    role: 'Statutory Apex Council (Gautam College of Pharmacy - B.Pharm & D.Pharm)',
    status: 'Approved under Section 12 of Pharmacy Act',
    docNumber: 'PCI-File No. 32-1142/2019-2025',
    url: 'https://www.pci.nic.in'
  },
  {
    body: 'Indian Nursing Council (INC), New Delhi',
    role: 'Statutory Apex Body for Nursing (B.Sc Nursing, Post Basic B.Sc & GNM)',
    status: 'Recognized under INC Act 1947',
    docNumber: 'INC-Approval/GCN-2014',
    url: 'https://www.indiannursingcouncil.org'
  },
  {
    body: 'H.P. Nurses Registration Council (HPNRC), Shimla',
    role: 'State Nursing Statutory Council Registration & Clinical Standards',
    status: 'Approved Training Institution',
    docNumber: 'HPNRC/Nursing/GCN-2014',
    url: 'https://hpnrc.hp.gov.in'
  },
  {
    body: 'All India Council for Technical Education (AICTE), New Delhi',
    role: 'Statutory Body for Technical Education & Management (MBA)',
    status: 'Approved Technical Institution',
    docNumber: 'F.No. North-West/AICTE/GIMT',
    url: 'https://www.aicte-india.org'
  },
  {
    body: 'University Grants Commission (UGC), New Delhi',
    role: 'Apex Higher Education Regulatory Authority',
    status: 'Recognized under Section 2(f) & 12(B) of UGC Act 1956',
    docNumber: 'UGC-Letter No. F.8-214/2005 (CPP-I)',
    url: 'https://www.ugc.gov.in'
  },
  {
    body: 'H.P. Takniki Shiksha Board, Dharamshala',
    role: 'Polytechnic & D.Pharmacy Examination Board',
    status: 'Affiliated Technical Board',
    docNumber: 'HPTSB/Poly/HMR/1999',
    url: 'https://hptechboard.com'
  },
  {
    body: 'Department of Higher Education, Government of Himachal Pradesh',
    role: 'State Government NOC & Oversight',
    status: 'State Govt. Notification & Permission Letter',
    docNumber: 'EDN-A-Kha(16)-12/2011',
    url: 'https://himachal.nic.in'
  }
];

export const COURSES_DETAIL = [
  {
    name: 'Bachelor of Computer Applications (BCA)',
    college: 'Gautam Institute of Management & Technology / Gautam College',
    affiliation: 'HPU Shimla Affiliated',
    duration: '3 Years (6 Semesters)',
    intake: '90 Seats (As listed on Careers360)',
    mode: 'Regular / Full-Time Lab Intensive',
    eligibility: '10+2 with min 40% aggregate in any stream from recognized board',
    scope: 'Software Engineer at MNCs, Web Developer, System Administrator, Cloud Associate',
    annualTuition: '₹36,000 / year (approx. ₹1.08 Lakh total for 3 years - Indicative only)',
    examFee: 'As per HPU Norms',
    cautionMoney: '₹3,000 (Refundable)'
  },
  {
    name: 'M.Sc. Biotechnology',
    college: 'Gautam College (Post-Graduate)',
    affiliation: 'HPU Shimla Affiliated',
    duration: '2 Years (4 Semesters)',
    intake: '30 Seats',
    mode: 'Advanced Lab & Molecular Research',
    eligibility: 'Bachelor Degree in Science (Biotech, Microbiology, Botany, Zoology, Chem) with min 50% marks',
    scope: 'R&D Scientist, Clinical Trials Specialist, Biopharma Quality Control, Research Associate',
    annualTuition: '₹72,000 (1st Year - As listed on Zollege - Indicative only)',
    examFee: 'As per HPU Norms',
    cautionMoney: '₹4,000 (Refundable)'
  },
  {
    name: 'B.Sc. Nursing',
    college: 'Gautam College of Nursing (Est. 2014)',
    affiliation: 'INC New Delhi, HPNRC Shimla & HPU / AMRU Nerchowk',
    duration: '4 Years (Full-Time Clinical)',
    intake: '60 Seats',
    mode: 'Hospital Bedside & ICU Rotation',
    eligibility: '10+2 with Physics, Chemistry, Biology & English (Min 45% aggregate) + AMRU Nursing Entrance (https://amruhp.ac.in)',
    scope: 'Nursing Officer at AIIMS, Military Nursing Services, Fortis, Max, Apollo, International RN',
    annualTuition: 'State Government & AMRU Regulated Fee Structure',
    examFee: 'As per AMRU Norms',
    cautionMoney: 'Refundable'
  },
  {
    name: 'Post Basic B.Sc. Nursing',
    college: 'Gautam College of Nursing',
    affiliation: 'INC, HPNRC & AMRU Nerchowk',
    duration: '2 Years',
    intake: '30 Seats',
    mode: 'Hospital Attached Higher Professional Nursing',
    eligibility: 'Registered GNM with state nursing registration',
    scope: 'Senior Nursing Sister, Ward Incharge, Clinical Nursing Instructor',
    annualTuition: 'State Regulatory Fee',
    examFee: 'As per AMRU Norms',
    cautionMoney: 'Refundable'
  },
  {
    name: 'General Nursing and Midwifery (GNM)',
    college: 'Gautam College of Nursing',
    affiliation: 'INC & HPNRC Approved',
    duration: '3 Years',
    intake: '40 Seats',
    mode: 'Hospital Attached Clinical',
    eligibility: '10+2 in any stream (Science/Arts/Commerce) with min 40% marks',
    scope: 'Staff Nurse in State Civil Hospitals, Private Nursing Homes, Community Health Centers',
    annualTuition: 'State Government Regulated',
    examFee: 'As per Board Norms',
    cautionMoney: 'Refundable'
  },
  {
    name: 'Bachelor of Pharmacy (B.Pharm)',
    college: 'Gautam College of Pharmacy (Est. 2019)',
    affiliation: 'Pharmacy Council of India (PCI) & HPTU Hamirpur',
    duration: '4 Years (8 Semesters)',
    intake: '60 Seats',
    mode: 'Regular / Formulation Labs',
    eligibility: '10+2 with PCB/PCM (Min 45% Gen, 40% SC/ST) + HPCET or Direct Merit',
    scope: 'Pharmaceutical Formulation, QA/QC Scientist, Drug Regulatory Affairs, Hospital Pharmacist',
    annualTuition: 'HPTU Regulated Fee',
    examFee: 'As per HPTU Norms',
    cautionMoney: 'Refundable'
  },
  {
    name: 'Diploma in Pharmacy (D.Pharm)',
    college: 'Gautam College of Pharmacy',
    affiliation: 'PCI New Delhi & HP Takniki Shiksha Board',
    duration: '2 Years',
    intake: '60 Seats',
    mode: 'Practical Oriented',
    eligibility: '10+2 with Science (PCB/PCM) from recognized board',
    scope: 'Licensed Retail/Wholesale Pharmacist, Hospital Chemist, Govt Dispensary Chemist',
    annualTuition: 'HPTSB Regulated Fee',
    examFee: 'As per Board Norms',
    cautionMoney: 'Refundable'
  },
  {
    name: 'Master of Business Administration (MBA)',
    college: 'Gautam Institute of Management & Technology (GIMT)',
    affiliation: 'AICTE New Delhi & HPTU Hamirpur',
    duration: '2 Years (4 Semesters)',
    intake: '60 Seats',
    mode: 'Dual Specialization (Finance, Marketing, HR, Operations)',
    eligibility: 'Graduation in any discipline (Min 50% Gen, 45% SC/ST) + HPCET / CAT / MAT or Merit',
    scope: 'Corporate Executive, Business Analyst, Investment Banker, HR Business Partner',
    annualTuition: 'State Technical University Fee',
    examFee: 'As per HPTU Norms',
    cautionMoney: 'Refundable'
  },
  {
    name: 'Bachelor of Business Administration (BBA)',
    college: 'Gautam Institute of Management & Technology',
    affiliation: 'HPU Shimla Affiliated',
    duration: '3 Years (6 Semesters)',
    intake: '60 Seats',
    mode: 'Full-Time Degree',
    eligibility: '10+2 in any stream with min 45% aggregate',
    scope: 'Management Trainee, Business Development, Operations Executive, Retail Manager',
    annualTuition: 'Affordable University Fee',
    examFee: 'As per HPU Norms',
    cautionMoney: 'Refundable'
  },
  {
    name: 'M.Sc. Physics / Chemistry / Botany / Zoology',
    college: 'Gautam College (Post-Graduate)',
    affiliation: 'HPU Shimla Affiliated',
    duration: '2 Years (4 Semesters)',
    intake: '30 Seats each',
    mode: 'Laboratory & Field Research',
    eligibility: 'B.Sc with relevant major subject (Min 50% aggregate)',
    scope: 'Lecturer in College Cadre, Environmental Consultant, R&D Chemist, CSIR-NET JRF',
    annualTuition: 'University Prescribed Fee',
    examFee: 'As per HPU Norms',
    cautionMoney: 'Refundable'
  },
  {
    name: 'Bachelor of Science (B.Sc - Medical & Non-Medical)',
    college: 'Gautam College',
    affiliation: 'HPU Shimla Affiliated',
    duration: '3 Years',
    intake: '120 Seats',
    mode: 'Regular Science Labs',
    eligibility: '10+2 with Science (PCB for Medical, PCM for Non-Medical)',
    scope: 'Science Research, Higher Studies (M.Sc/B.Ed), Civil Services, Technical Officer',
    annualTuition: 'Government Approved Affiliation Fee',
    examFee: 'As per HPU Norms',
    cautionMoney: 'Refundable'
  },
  {
    name: 'Bachelor of Arts (B.A.) & Bachelor of Commerce (B.Com)',
    college: 'Gautam College',
    affiliation: 'HPU Shimla Affiliated',
    duration: '3 Years',
    intake: '120 Seats each',
    mode: 'Regular Degree',
    eligibility: '10+2 in relevant stream with passing marks',
    scope: 'Civil Services, Banking, Corporate Accounts, Teaching, Law Entrance',
    annualTuition: 'Government Approved Affiliation Fee',
    examFee: 'As per HPU Norms',
    cautionMoney: 'Refundable'
  },
  {
    name: 'Post Graduate Diploma in Computer Applications (PGDCA)',
    college: 'Gautam College / GIMT',
    affiliation: 'HPU Shimla Affiliated',
    duration: '1 Year (2 Semesters)',
    intake: '40 Seats',
    mode: 'Computer Lab Practical',
    eligibility: 'Graduation in any stream',
    scope: 'Government Computer Operator, IT Assistant, Data Processing Executive',
    annualTuition: 'State Approved Fee',
    examFee: 'As per HPU Norms',
    cautionMoney: 'Refundable'
  }
];

export const FACULTY_MEMBERS = [
  // Institutional Leadership
  {
    id: 1,
    name: 'Dr. Rajneesh Gautam',
    designation: 'Principal cum Secretary',
    qualification: 'Ph.D., M.Sc.',
    dept: 'Governing Council & Administration',
    experience: '25+ Years in Higher Education Leadership',
    phone: '+91-9418010420',
    email: 'ggchmr@gmail.com',
    status: 'Verified Leadership'
  },
  {
    id: 2,
    name: 'Mrs. Poonam Sharma',
    designation: 'Principal / Associate Professor',
    qualification: 'M.Sc Maternal Health Nursing',
    dept: 'Department of Nursing (Gautam College of Nursing)',
    experience: '15+ Years Clinical & Pedagogical Practice',
    phone: '+91-9816687100',
    email: 'nursing@ggchmr.com',
    status: 'Subject to official re-confirmation'
  },

  // Department of Physics
  {
    id: 3,
    name: 'Dr. Sudhir Saralch',
    designation: 'Head of Department & Asst. Professor',
    qualification: 'M.Sc, M.Phil, M.Tech, Ph.D',
    dept: 'Department of Physics',
    experience: 'Doctoral Research & PG Teaching',
    phone: '7018060924',
    email: 'physics.hod@ggchmr.com',
    status: 'Verified Faculty'
  },
  {
    id: 4,
    name: 'Dr. Anu',
    designation: 'Asst. Professor',
    qualification: 'Ph.D in Physics',
    dept: 'Department of Physics',
    experience: 'Physics Laboratory & Theoretical Studies',
    phone: '7018663752',
    email: 'anu.physics@ggchmr.com',
    status: 'Verified Faculty'
  },

  // Department of Botany
  {
    id: 5,
    name: 'Dr. Vinay Sharma',
    designation: 'Head of Department & Asst. Professor',
    qualification: 'M.Sc, B.Ed, M.Phil, Ph.D',
    dept: 'Department of Botany',
    experience: 'Botanical Taxonomy & Plant Physiology',
    phone: '9418322158',
    email: 'botany.hod@ggchmr.com',
    status: 'Verified Faculty'
  },
  {
    id: 6,
    name: 'Dr. Neeru Kaushal',
    designation: 'Asst. Professor',
    qualification: 'M.Sc, B.Ed, M.Phil, Ph.D',
    dept: 'Department of Botany',
    experience: 'Cytology & Molecular Botany',
    phone: '7018037197',
    email: 'neeru.botany@ggchmr.com',
    status: 'Verified Faculty'
  },
  {
    id: 7,
    name: 'Mrs. Manju Sharma',
    designation: 'Asst. Professor',
    qualification: 'M.Sc, M.Phil, UGC-NET Qualified',
    dept: 'Department of Botany',
    experience: 'Ecology & Flora Studies',
    phone: '7018246262',
    email: 'manju.botany@ggchmr.com',
    status: 'Verified Faculty'
  },
  {
    id: 8,
    name: 'Mrs. Rakhi Gangotia',
    designation: 'Asst. Professor',
    qualification: 'SET, GATE, Ph.D',
    dept: 'Department of Botany',
    experience: 'Plant Biotechnology & Genetics',
    phone: '9418515267',
    email: 'rakhi.botany@ggchmr.com',
    status: 'Verified Faculty'
  },

  // Department of Chemistry
  {
    id: 9,
    name: 'Dr. Shipra Jaswal',
    designation: 'Head of Department & Asst. Professor',
    qualification: 'M.Sc, Ph.D in Chemistry',
    dept: 'Department of Chemistry',
    experience: 'Organic Synthesis & Physical Chemistry',
    phone: '9418456017',
    email: 'chem.hod@ggchmr.com',
    status: 'Verified Faculty'
  },
  {
    id: 10,
    name: 'Dr. Lalita Pathania',
    designation: 'Asst. Professor',
    qualification: 'M.Sc, M.Phil, Ph.D, NET, JRF, SET',
    dept: 'Department of Chemistry',
    experience: 'Inorganic Chemistry & Analytical Instrumentation',
    phone: '9459336780',
    email: 'lalita.chem@ggchmr.com',
    status: 'Verified Faculty'
  },
  {
    id: 11,
    name: 'Dr. Nishat Bhatia',
    designation: 'Asst. Professor',
    qualification: 'M.Sc, Ph.D in Chemistry',
    dept: 'Department of Chemistry',
    experience: 'Applied Chemistry & Polymer Science',
    phone: '9857313100',
    email: 'nishat.chem@ggchmr.com',
    status: 'Verified Faculty'
  },

  // Department of Zoology
  {
    id: 12,
    name: 'Dr. Ritu Sharma',
    designation: 'Head of Department & Asst. Professor',
    qualification: 'M.Sc, M.Phil, B.Ed, Ph.D',
    dept: 'Department of Zoology',
    experience: 'Animal Physiology & Entomology',
    phone: '8988101118',
    email: 'zoology.hod@ggchmr.com',
    status: 'Verified Faculty'
  },
  {
    id: 13,
    name: 'Dr. Kalpna',
    designation: 'Asst. Professor',
    qualification: 'M.Sc, M.Phil, B.Ed, Ph.D',
    dept: 'Department of Zoology',
    experience: 'Biodiversity, Ecology & Zoology Labs',
    phone: '7876257721',
    email: 'kalpna.zoo@ggchmr.com',
    status: 'Verified Faculty'
  },
  {
    id: 14,
    name: 'Mr. Lalit',
    designation: 'Asst. Professor',
    qualification: 'M.Sc, M.Phil, B.Ed, UGC-NET, HP-SET',
    dept: 'Department of Zoology',
    experience: 'Comparative Anatomy & Evolutionary Biology',
    phone: '9816036738',
    email: 'lalit.zoo@ggchmr.com',
    status: 'Verified Faculty'
  },

  // Additional Academic Faculty & Lecturers
  {
    id: 15,
    name: 'Mrs. Neha Meglani',
    designation: 'Asst. Professor',
    qualification: 'Post-Graduate Academician',
    dept: 'Department of Sciences',
    experience: 'Undergraduate & Postgraduate Teaching',
    phone: '+91-9736391060',
    email: 'ggchmr@gmail.com',
    status: 'Verified Faculty Listing'
  },
  {
    id: 16,
    name: 'Mr. Arvind Kumar',
    designation: 'Asst. Professor',
    qualification: 'Post-Graduate in Computer Applications / IT',
    dept: 'Department of Computer Applications & IT',
    experience: 'Programming, Database & Web Technologies',
    phone: '+91-9736391060',
    email: 'ggchmr@gmail.com',
    status: 'Verified Faculty Listing'
  },
  {
    id: 17,
    name: 'Mrs. Anjana Kumari',
    designation: 'Asst. Professor',
    qualification: 'Post-Graduate Academician',
    dept: 'Faculty of Humanities & Arts',
    experience: 'Language, Literature & Social Sciences',
    phone: '+91-9736391060',
    email: 'ggchmr@gmail.com',
    status: 'Verified Faculty Listing'
  },
  {
    id: 18,
    name: 'Mrs. Anjna Sharma',
    designation: 'Asst. Professor',
    qualification: 'Post-Graduate in Commerce / Management',
    dept: 'Department of Commerce & Management',
    experience: 'Financial Accounting & Business Studies',
    phone: '+91-9736391060',
    email: 'ggchmr@gmail.com',
    status: 'Verified Faculty Listing'
  },
  {
    id: 19,
    name: 'Mrs. Jyoti Shukla',
    designation: 'Asst. Professor',
    qualification: 'Post-Graduate Academician',
    dept: 'Department of Basic Sciences',
    experience: 'Undergraduate Science Curriculum',
    phone: '+91-9736391060',
    email: 'ggchmr@gmail.com',
    status: 'Verified Faculty Listing'
  },
  {
    id: 20,
    name: 'Dr. Indu Bala',
    designation: 'Asst. Professor',
    qualification: 'Ph.D.',
    dept: 'Post-Graduate Sciences & Research',
    experience: 'Doctoral Research & Life Sciences',
    phone: '+91-9736391060',
    email: 'ggchmr@gmail.com',
    status: 'Verified Faculty Listing'
  },
  {
    id: 21,
    name: 'Dr. Mandip Singh',
    designation: 'Asst. Professor',
    qualification: 'Ph.D.',
    dept: 'Humanities & Collegiate Studies',
    experience: 'Academic Research & Pedagogy',
    phone: '+91-9736391060',
    email: 'ggchmr@gmail.com',
    status: 'Verified Faculty Listing'
  },
  {
    id: 22,
    name: 'Tanvi Gautam',
    designation: 'Lecturer',
    qualification: 'Post-Graduate Academician',
    dept: 'Collegiate Studies',
    experience: 'Undergraduate Classroom Instruction',
    phone: '+91-9736391060',
    email: 'ggchmr@gmail.com',
    status: 'Verified Faculty Listing'
  },
  {
    id: 23,
    name: 'Konika Kumari',
    designation: 'Lecturer',
    qualification: 'Post-Graduate Academician',
    dept: 'Collegiate Studies',
    experience: 'Practical Laboratory Guidance',
    phone: '+91-9736391060',
    email: 'ggchmr@gmail.com',
    status: 'Verified Faculty Listing'
  }
];

export const LIBRARY_RESOURCES = {
  totalVolumes: '35,000+ Textbooks and Reference Works',
  eJournals: 'DELNET & National Digital Library Portal Subscribed',
  seatingCapacity: '180 Students Silent Reading Hall',
  timings: 'Monday to Saturday: 8:30 AM to 6:00 PM (Extended till 8:00 PM during exams)',
  bookBank: 'Special Free Book Bank facility for SC/ST and IRDP meritorious students',
  redirects: [
    { title: 'National Digital Library of India (NDL)', url: 'https://ndl.iitkgp.ac.in', desc: 'Over 6 crore academic e-books and multimedia materials' },
    { title: 'e-ShodhSindhu Consortium', url: 'https://ess.inflibnet.ac.in', desc: 'Access to peer-reviewed e-journals and citation databases' },
    { title: 'SWAYAM Central Learning Portal', url: 'https://swayam.gov.in', desc: 'Credit-bearing online courses by MHRD and IITs' },
    { title: 'NPTEL Online Certification', url: 'https://nptel.ac.in', desc: 'Engineering, pharma, and computing video lecture repositories' }
  ]
};

export const MEDICAL_FACILITIES = {
  dispensary: 'Campus First-Aid & Health Care Clinic (Ward No. 10 Campus)',
  inCharge: 'Mrs. Poonam Sharma, M.Sc (Principal Nursing) & Campus Medical Attendant',
  ambulance: 'Dedicated Campus Emergency Support: +91-9418010420 / 01972-221493',
  tieUpHospital: 'Dr. Radhakrishnan Government Medical College & Associated Hospital, Hamirpur',
  emergencyNumbers: 'Civil Hospital Hamirpur: 01972-222222 | Emergency Ambulance: 108',
  redirects: [
    { title: 'Ayushman Bharat PM-JAY', url: 'https://pmjay.gov.in' },
    { title: 'HP Health Department Portal', url: 'https://hphealth.nic.in' }
  ]
};

export const SCHOLARSHIPS_DATA = {
  centralPortal: { title: 'National Scholarship Portal (NSP)', url: 'https://scholarships.gov.in', desc: 'Central sector schemes for top class education for SC/ST and minorities' },
  statePortal: { title: 'HP e-Pass / e-Kalyan State Portal', url: 'https://hpepass.cloudapp.net', desc: 'Himachal Pradesh State Post-Matric Scholarship Scheme for SC, ST, OBC, EWS and IRDP candidates' },
  institutionalScholarship: 'Gautam Group Silver Jubilee Merit Concession (for meritorious students across Himachal Pradesh)'
};

export const COMPLIANCE_CELLS = [
  {
    name: 'Anti-Ragging Committee & Squad',
    helpline: 'Toll-Free 24x7 Helpline: 1800-180-5522',
    convener: 'Dr. Rajneesh Gautam, Principal cum Secretary (+91-9418010420)',
    redirect: 'https://www.antiragging.in',
    status: 'Zero Tolerance Campus. CCTV monitored premises.'
  },
  {
    name: 'Internal Complaints Committee (ICC - Women Safety)',
    helpline: 'Women Helpline: 1091 / +91-9736391060',
    convener: 'Mrs. Poonam Sharma (Chairperson)',
    redirect: 'https://wcd.nic.in',
    status: 'Statutory compliance under POSH Act 2013'
  },
  {
    name: 'Grievance Redressal Cell',
    helpline: 'Direct Registrar Email: ggchmr@gmail.com / +91-9736991060',
    convener: 'Administrative Secretariat, Hamirpur',
    redirect: 'https://www.ugc.gov.in',
    status: 'Online & physical grievance register maintained'
  },
  {
    name: 'Right to Information (RTI) Cell',
    helpline: 'State Information Commission: 0177-2625890',
    convener: 'Public Information Officer (PIO): Office Desk (+91-9736991060)',
    redirect: 'https://himachal.nic.in',
    status: 'Mandatory public disclosure under RTI Act 2005'
  }
];

export const STUDENT_PORTAL_LINKS = [
  { name: 'DigiLocker Official Portal', url: 'https://www.digilocker.gov.in', desc: 'Access verified marks sheets, degree certificates, and Aadhaar documents' },
  { name: 'Academic Bank of Credits (ABC)', url: 'https://www.abc.gov.in', desc: 'Generate your 12-digit APAAR / ABC ID required for university examination entry' },
  { name: 'HPTU Hamirpur Official Examination Portal', url: 'https://www.himtu.ac.in', desc: 'State technical university datesheets, re-evaluation and online fee portal' },
  { name: 'HPU Shimla University Portal', url: 'https://www.hpuniv.ac.in', desc: 'Himachal Pradesh University undergraduate and post-graduate syllabus and results' },
  { name: 'AMRU Nerchowk Health Sciences Portal', url: 'https://amruhp.ac.in', desc: 'Atal Medical and Research University nursing entrance counseling & registration' },
  { name: 'GGC Online Admission Portal', url: 'https://admission.ggchmr.com', desc: 'Official online application and merit seat registration portal' }
];
