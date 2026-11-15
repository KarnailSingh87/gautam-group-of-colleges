export const PRESETS = {
  himtu: {
    id: 'himtu',
    name: 'Himachal Pradesh Technical University',
    shortName: 'HPTU (himtu.ac.in)',
    tagline: 'State Technical University of Himachal Pradesh • Established under HP Act No. 16 of 2011',
    founded: '2011',
    location: 'Gandhi Chowk, Hamirpur, Himachal Pradesh 177001',
    badgeText: 'UGC Recognized State Technical University • NEP 2020 & CBCS Pioneer',
    heroTag: 'Technical & Professional Higher Education',
    accentColor: 'indigo',
    primaryTheme: {
      bgGradient: 'from-slate-950 via-slate-900 to-indigo-950',
      badgeBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-400/30',
      primaryBtn: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/30',
      accentText: 'text-indigo-600',
      tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    }
  },
  aurelius: {
    id: 'aurelius',
    name: 'St. Aurelius University',
    shortName: 'St. Aurelius (Global Ivy)',
    tagline: 'Tradition of Excellence, Future of Discovery',
    founded: '1888',
    location: 'Boston, Massachusetts & Oxford Campus',
    badgeText: 'Ranked #1 in Regional Innovation & Student Outcomes 2025',
    heroTag: 'Prestige & Liberal Arts',
    accentColor: 'blue',
    primaryTheme: {
      bgGradient: 'from-blue-900 via-slate-900 to-indigo-950',
      badgeBg: 'bg-blue-500/10 text-blue-300 border-blue-400/30',
      primaryBtn: 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/30',
      accentText: 'text-blue-600',
      tagBg: 'bg-blue-50 text-blue-700 border-blue-200'
    }
  },
  vanguard: {
    id: 'vanguard',
    name: 'Vanguard Institute of Technology',
    shortName: 'Vanguard (Modern STEM)',
    tagline: 'Engineering the Next Era of AI & Sustainability',
    founded: '1962',
    location: 'Austin, Texas & Silicon Valley Center',
    badgeText: 'Top 5 Global Tech & Quantum Computing Hub 2025',
    heroTag: 'STEM & AI Leadership',
    accentColor: 'emerald',
    primaryTheme: {
      bgGradient: 'from-emerald-950 via-slate-900 to-teal-950',
      badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/30',
      primaryBtn: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/30',
      accentText: 'text-emerald-600',
      tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    }
  },
  oakhaven: {
    id: 'oakhaven',
    name: 'Oakhaven University of Arts & Design',
    shortName: 'Oakhaven (Design & Arts)',
    tagline: 'Cultivating Visionaries, Designers & Humanists',
    founded: '1912',
    location: 'San Francisco & London Creative Quarter',
    badgeText: 'Ranked #1 for Creative Industry Employability',
    heroTag: 'Creativity & Human Innovation',
    accentColor: 'rose',
    primaryTheme: {
      bgGradient: 'from-rose-950 via-slate-900 to-purple-950',
      badgeBg: 'bg-rose-500/10 text-rose-300 border-rose-400/30',
      primaryBtn: 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-500/30',
      accentText: 'text-rose-600',
      tagBg: 'bg-rose-50 text-rose-700 border-rose-200'
    }
  }
};

export const HIMTU_DIGITAL_SERVICES = [
  {
    id: 'otr',
    title: 'One-Time Registration (OTR)',
    subtitle: 'Unified Student ID Portal',
    desc: 'Mandatory single sign-on profile for admission counseling, examination enrollment, and scholarship applications.',
    icon: 'UserCheck',
    color: 'from-blue-600 to-indigo-700',
    actionText: 'OTR Student Login',
    modalType: 'otr'
  },
  {
    id: 'results',
    title: 'Examination & Result Portal',
    subtitle: 'Semester & Re-Evaluation Marks',
    desc: 'Instant access to End-Semester examination marks cards, date sheets, scrutiny forms, and re-checking status.',
    icon: 'GraduationCap',
    color: 'from-emerald-600 to-teal-700',
    actionText: 'Check Results',
    modalType: 'results'
  },
  {
    id: 'counseling',
    title: 'HPCET & Admission Counseling',
    subtitle: 'State Common Entrance Test',
    desc: 'Online registration, centralized seat allotment rounds, counseling schedules, cut-offs, and fee submission.',
    icon: 'Ticket',
    color: 'from-purple-600 to-indigo-700',
    actionText: 'Counseling Portal',
    modalType: 'counseling'
  },
  {
    id: 'pyq',
    title: 'Question Papers & Syllabi Archive',
    subtitle: 'NEP 2020 Scheme Repositories',
    desc: 'Free downloadable previous year question papers (PYQs), model question papers, and updated course curricula.',
    icon: 'FileText',
    color: 'from-amber-600 to-orange-700',
    actionText: 'Browse Question Bank',
    modalType: 'pyq'
  },
  {
    id: 'status',
    title: 'Application Status Tracker',
    subtitle: 'Live Tracking System',
    desc: 'Real-time tracking of degree verification, transcript dispatch, migration certificates, and counseling status.',
    icon: 'SearchCheck',
    color: 'from-cyan-600 to-blue-700',
    actionText: 'Track Status',
    modalType: 'status'
  },
  {
    id: 'colleges',
    title: 'Affiliated Colleges Directory',
    subtitle: 'Govt & Private Institutes',
    desc: 'Detailed directory of 42+ constituent and affiliated Engineering, Pharmacy, Management, and Polytechnic colleges.',
    icon: 'Building2',
    color: 'from-rose-600 to-red-700',
    actionText: 'Explore Colleges',
    modalType: 'colleges'
  }
];

export const HIMTU_PRESS_NOTICES = [
  {
    id: 1,
    date: '15 Nov 2026',
    tag: 'Urgent Circular',
    title: 'Notification regarding Special End-Semester Theory/Practical Examination Date Sheet (December 2026 Session).',
    isNew: true,
    fileSize: '420 KB PDF'
  },
  {
    id: 2,
    date: '12 Nov 2026',
    tag: 'Admissions 2026',
    title: 'Revised Counseling Schedule for Vacant Seats in B.Tech, B.Pharmacy & MBA under Lateral Entry Scheme.',
    isNew: true,
    fileSize: '1.2 MB PDF'
  },
  {
    id: 3,
    date: '08 Nov 2026',
    tag: 'Examination Result',
    title: 'Declaration of Re-evaluation Results for B.Tech (CBCS & NEP 2020) 2nd, 4th & 6th Semester Examinations.',
    isNew: false,
    fileSize: '890 KB PDF'
  },
  {
    id: 4,
    date: '02 Nov 2026',
    tag: 'Recruitment & Tenders',
    title: 'Notice inviting e-Tenders for setting up Advanced Robotics & AI Center of Excellence in University Campus.',
    isNew: false,
    fileSize: '2.1 MB PDF'
  }
];

export const AFFILIATED_COLLEGES = [
  {
    id: 1,
    name: 'Jawaharlal Nehru Govt. Engineering College (JNGEC)',
    location: 'Sundernagar, Distt. Mandi, H.P.',
    type: 'Government Constituent College',
    programs: 'B.Tech (CSE, Mech, Civil, ECE), M.Tech',
    code: 'HPTU-01',
    rating: 'NBA Accredited'
  },
  {
    id: 2,
    name: 'Rajiv Gandhi Govt. Engineering College (RGGEC)',
    location: 'Kangra at Nagrota Bagwan, H.P.',
    type: 'Government Constituent College',
    programs: 'B.Tech (Computer Science, Electrical, Architecture)',
    code: 'HPTU-02',
    rating: 'State Premier Institute'
  },
  {
    id: 3,
    name: 'Govt. College of Pharmacy',
    location: 'Rohru, Distt. Shimla, H.P.',
    type: 'Government Pharmacy College',
    programs: 'B.Pharmacy, M.Pharmacy (Pharmacology)',
    code: 'HPTU-03',
    rating: 'PCI Approved'
  },
  {
    id: 4,
    name: 'Atal Bihari Vajpayee Govt. Institute of Engg. & Tech. (ABVGIET)',
    location: 'Pragatinagar, Distt. Shimla, H.P.',
    type: 'Government Technical Institute',
    programs: 'B.Tech (CSE, ECE), Polytechnic Diploma',
    code: 'HPTU-04',
    rating: 'AICTE Approved'
  }
];

export const QUESTION_PAPERS = [
  {
    subject: 'Artificial Intelligence & Machine Learning',
    code: 'CS-401 (NEP 2020)',
    semester: '7th Semester',
    branch: 'Computer Science & Engg',
    year: 'Dec 2025 / June 2025'
  },
  {
    subject: 'Data Structures & Algorithms',
    code: 'CS-202 (CBCS)',
    semester: '3rd Semester',
    branch: 'Computer Science & IT',
    year: 'Dec 2025 / June 2025'
  },
  {
    subject: 'Pharmaceutics & Drug Delivery Systems',
    code: 'BP-301T',
    semester: '5th Semester',
    branch: 'B. Pharmacy',
    year: 'Dec 2025'
  },
  {
    subject: 'Design of Concrete & Steel Structures',
    code: 'CE-302',
    semester: '6th Semester',
    branch: 'Civil Engineering',
    year: 'Dec 2025 / June 2025'
  }
];

export const PROGRAMS = [
  {
    id: 1,
    title: 'B.Tech in Computer Science & Artificial Intelligence',
    department: 'Engineering & Computing',
    level: 'Undergraduate',
    duration: '4 Years',
    credits: '160 Credits (NEP 2020)',
    mode: 'Campus & Lab',
    tag: 'HPCET & JEE Main',
    rating: '4.9/5',
    salary: '₹12.4 LPA Avg. Starting',
    desc: 'Curriculum structured under NEP 2020 with state-of-the-art labs in Machine Learning, Cloud Systems, and Cyber Security with mandatory industry internships.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Bachelor of Pharmacy (B.Pharm) & M.Pharm',
    department: 'Pharmaceutical Sciences',
    level: 'Undergraduate',
    duration: '4 Years',
    credits: 'PCI Compliant Scheme',
    mode: 'PCI & Hospital Attached',
    tag: 'PCI Recognized',
    rating: '4.95/5',
    salary: '₹8.6 LPA Avg. Starting',
    desc: 'Approved by Pharmacy Council of India (PCI). Covers pharmaceutical chemistry, pharmacology, clinical trials, and drug formulation research.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'M.B.A. in Digital Business & Supply Chain Logistics',
    department: 'School of Management',
    level: 'Graduate',
    duration: '2 Years',
    credits: 'CBCS Framework',
    mode: 'Dual Specialization',
    tag: 'HPCET & CAT/MAT',
    rating: '4.88/5',
    salary: '₹9.8 LPA Avg. Starting',
    desc: 'Prepares future enterprise executives with analytics, marketing technologies, supply chain management, and financial leadership courses.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'B.Tech in Civil & Geotechnical Mountain Infrastructure',
    department: 'Engineering & Computing',
    level: 'Undergraduate',
    duration: '4 Years',
    credits: '160 Credits',
    mode: 'Fieldwork & CAD Studios',
    tag: 'Hill Region Specialized',
    rating: '4.85/5',
    salary: '₹7.8 LPA Avg. Starting',
    desc: 'Unique specialization tailored for Himalayan terrain: seismic structural engineering, tunnel mechanics, slope stabilization, and green highways.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Master of Computer Applications (M.C.A.)',
    department: 'Computer Applications',
    level: 'Graduate',
    duration: '2 Years',
    credits: 'AICTE Approved',
    mode: 'Full-Time Campus',
    tag: 'Top Placement Track',
    rating: '4.9/5',
    salary: '₹10.2 LPA Avg. Starting',
    desc: 'Advanced software development, mobile app ecosystems, distributed databases, DevOps workflows, and enterprise project work.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Ph.D. in Engineering & Pharmaceutical Sciences',
    department: 'Research & Doctoral Studies',
    level: 'Doctoral',
    duration: '3-5 Years',
    credits: 'UGC Research Fellowship',
    mode: 'Full-Time / Part-Time',
    tag: 'Funded Fellowship',
    rating: '5.0/5',
    salary: 'UGC/State Fellowship',
    desc: 'Interdisciplinary research in sustainable renewable energy, mountain ecology engineering, herbal medicine extraction, and AI hardware.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80'
  }
];

export const CAMPUS_FACILITIES = [
  {
    id: 'library',
    name: 'Central University Library & National Digital Library Portal',
    category: 'Knowledge Hub',
    stat: '85,000+ Books & DELNET E-Journals',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    desc: 'Automated with KOHA library management, high-speed campus fiber, digital thesis repository, and dedicated research scholar stations.'
  },
  {
    id: 'innovation',
    name: 'Advanced Computing & Drone Robotics Technology Lab',
    category: 'Center of Excellence',
    stat: 'State Sponsored Lab Hub',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    desc: 'High-performance computing workstations, drone prototyping testbeds, additive manufacturing, and electronic testing equipment.'
  },
  {
    id: 'residence',
    name: 'Himalayan View University Hostels & Mess',
    category: 'Student Accommodation',
    stat: 'Separate Boys & Girls Hostels',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
    desc: 'Modern living facilities nestled in the scenic Hamirpur pine valley, solar hot water heating, 24/7 security, and hygienic dining mess.'
  },
  {
    id: 'athletics',
    name: 'University Sports Ground & Indoor Badminton Arena',
    category: 'Sports & Recreation',
    stat: 'Inter-College Championship Center',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    desc: 'Full-size cricket & football ground, multipurpose indoor courts, gymnasium, and annual Inter-College Youth Festival venue.'
  }
];

export const UPCOMING_EVENTS = [
  {
    id: 1,
    day: '20',
    month: 'DEC',
    title: 'HPCET 2026 Information Webinar & Mock Test Window',
    category: 'Admissions & Entrance Tests',
    time: '11:00 AM – 1:00 PM IST',
    venue: 'Online Hybrid Portal & Auditorium',
    badge: 'Important for Aspirants',
    spots: 'Open Registration'
  },
  {
    id: 2,
    day: '28',
    month: 'DEC',
    title: 'State Inter-Technical Youth Festival & Innovation Expo',
    category: 'Cultural & Tech Fest',
    time: '9:30 AM – 5:30 PM IST',
    venue: 'University Central Grounds, Hamirpur',
    badge: '42 Colleges Participating',
    spots: 'Public Open Entry'
  },
  {
    id: 3,
    day: '12',
    month: 'JAN',
    title: 'National Conference on Himalayan Environmental Engineering',
    category: 'Academic Research',
    time: '10:00 AM – 4:30 PM IST',
    venue: 'Senate Hall & Live Stream',
    badge: 'Faculty & Scholars',
    spots: 'Paper Submissions Open'
  }
];

export const ALUMNI_TESTIMONIALS = [
  {
    id: 1,
    name: 'Abhishek Sharma, Batch of 2022',
    role: 'Senior Software Engineer at Oracle',
    degree: 'B.Tech in Computer Science & Engineering',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    quote: 'The rigorous curriculum and practical coding hackathons gave me the exact foundation needed to clear competitive technical interviews at top MNCs.',
    company: 'Oracle'
  },
  {
    id: 2,
    name: 'Dr. Ananya Thakur, Batch of 2020',
    role: 'Senior Formulation Scientist at Sun Pharma',
    degree: 'B.Pharm & M.Pharm (Pharmaceutics)',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    quote: 'The PCI approved laboratory equipment and faculty research mentorship paved the way for my patent filing and industrial R&D career.',
    company: 'Sun Pharma'
  },
  {
    id: 3,
    name: 'Rohit Verma, Batch of 2021',
    role: 'Assistant Engineer at HPSEB / State Infra',
    degree: 'B.Tech in Civil Engineering',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    quote: 'Being trained on specialized mountain terrain structural design gave our batch a distinct edge in state infrastructure civil exams.',
    company: 'HP State Engineering Services'
  }
];
