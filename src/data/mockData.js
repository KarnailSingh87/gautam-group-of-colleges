export const PRESETS = {
  aurelius: {
    id: 'aurelius',
    name: 'St. Aurelius University',
    shortName: 'St. Aurelius',
    tagline: 'Tradition of Excellence, Future of Discovery',
    founded: '1888',
    location: 'Boston, Massachusetts & Oxford Campus',
    badgeText: 'Ranked #1 in Regional Innovation & Student Outcomes 2025',
    heroTag: 'Prestige & Liberal Arts',
    accentColor: 'blue', // slate/blue/navy
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
    shortName: 'Vanguard Tech',
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
    shortName: 'Oakhaven',
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

export const PROGRAMS = [
  {
    id: 1,
    title: 'B.S. in Artificial Intelligence & Machine Systems',
    department: 'Engineering & Computing',
    level: 'Undergraduate',
    duration: '4 Years',
    credits: '124 Credits',
    mode: 'Campus & Lab',
    tag: 'STEM Designated',
    rating: '4.9/5',
    salary: '$118,000 Avg. Starting',
    desc: 'Deep study into neural networks, robotics, quantum algorithms, and ethical autonomous architectures with guaranteed research lab rotations.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'M.B.A. in Global Strategic Leadership & FinTech',
    department: 'School of Management',
    level: 'Graduate',
    duration: '2 Years',
    credits: '60 Credits',
    mode: 'Hybrid & Global Residencies',
    tag: 'Top 10 MBA',
    rating: '4.95/5',
    salary: '$145,000 Avg. Starting',
    desc: 'Executive business modeling, venture capital finance, sustainable supply chains, and dual global immersion semesters in London and Singapore.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'B.S. in Biomedical Sciences & Genomic Engineering',
    department: 'Health Sciences',
    level: 'Undergraduate',
    duration: '4 Years',
    credits: '128 Credits',
    mode: 'Hospital & Lab Attached',
    tag: 'Pre-Med Fast Track',
    rating: '4.88/5',
    salary: '$92,000 Avg. Starting',
    desc: 'Comprehensive clinical foundation in cellular biology, CRISPR therapeutics, bioinformatics, and direct clinical shadowing at affiliated medical hospitals.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'M.S. in Sustainable Architecture & Urban Ecology',
    department: 'Arts & Architecture',
    level: 'Graduate',
    duration: '2 Years',
    credits: '54 Credits',
    mode: 'Studio Immersion',
    tag: 'LEED Certified Program',
    rating: '4.85/5',
    salary: '$88,000 Avg. Starting',
    desc: 'Regenerative urban planning, parametric climate design, zero-carbon building physics, and city resilience design studios.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Ph.D. in Cyber Defense & Geopolitical Security',
    department: 'Engineering & Public Policy',
    level: 'Doctoral',
    duration: '4-5 Years',
    credits: 'Fully Funded Stipend',
    mode: 'Fellowship / Research',
    tag: 'Full Fellowship',
    rating: '5.0/5',
    salary: '$135,000 Starting',
    desc: 'Defense-grade cryptography, adversarial network dynamics, infrastructure resilience, and policy leadership alongside federal and international bodies.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'B.A. in Digital Media Arts, Interactive Design & UX',
    department: 'Arts & Humanities',
    level: 'Undergraduate',
    duration: '4 Years',
    credits: '120 Credits',
    mode: 'Creative Studio',
    tag: 'Portfolio First',
    rating: '4.9/5',
    salary: '$84,000 Avg. Starting',
    desc: 'Honing creative storytelling, 3D spatial computing, UI/UX systems design, and product design with industry client briefs each semester.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80'
  }
];

export const CAMPUS_FACILITIES = [
  {
    id: 'library',
    name: 'The Sterling Great Hall & Digital Archive',
    category: 'Academic Core',
    stat: '1.8M Volumes & 24/7 Deep Study Pods',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    desc: 'Constructed with gothic vaulted ceilings complemented by high-speed fiber pods, acoustic isolation whisper booths, and rare manuscript preservation labs.'
  },
  {
    id: 'innovation',
    name: 'Nexus Quantum & AI Discovery Pavilion',
    category: 'Research Facilities',
    stat: '$65M Lab Infrastructure & Incubator',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    desc: 'A 120,000 sq.ft state-of-the-art makerspace housing cleanrooms, supercomputing clusters, rapid prototyping 3D metal printers, and venture accelerator suites.'
  },
  {
    id: 'residence',
    name: 'Beacon Hill Collegiate Commons & Residences',
    category: 'Student Life',
    stat: '98% First-Year On-Campus Community',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
    desc: 'Modern living-learning residential halls featuring panoramic city views, artisan culinary dining halls, wellness studios, and rooftop study gardens.'
  },
  {
    id: 'athletics',
    name: 'Spartan Olympic Arena & Aquatic Complex',
    category: 'Athletics & Wellness',
    stat: '22 NCAA Div-1 Teams & Intramural Sports',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    desc: 'An Olympic-grade 50-meter lap facility, hydrotherapy recovery center, indoor turf fieldhouse, climbing wall, and comprehensive athletic training clinic.'
  }
];

export const UPCOMING_EVENTS = [
  {
    id: 1,
    day: '18',
    month: 'DEC',
    title: 'Global Innovation & Venture Pitch Showcase',
    category: 'Research & Entrepreneurship',
    time: '2:00 PM – 6:00 PM EST',
    venue: 'Nexus Center Grand Auditorium',
    badge: 'Open to Public',
    spots: '34 seats left'
  },
  {
    id: 2,
    day: '22',
    month: 'DEC',
    title: 'Winter Campus Preview & Faculty Masterclasses',
    category: 'Admissions Open Day',
    time: '10:00 AM – 3:30 PM EST',
    venue: 'Admissions Hall & Live Hybrid Stream',
    badge: 'High School Seniors',
    spots: 'Registration required'
  },
  {
    id: 3,
    day: '08',
    month: 'JAN',
    title: 'Nobel Laureate Distinguished Lecture Series',
    category: 'Science & Society',
    time: '4:00 PM – 5:30 PM EST',
    venue: 'Sterling Great Hall',
    badge: 'Keynote Speaker',
    spots: 'Filling fast'
  }
];

export const ALUMNI_TESTIMONIALS = [
  {
    id: 1,
    name: 'Elena Rostova, Class of 2023',
    role: 'Lead AI Research Engineer at DeepMind',
    degree: 'B.S. in Computer Science & Robotics',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    quote: 'The undergraduate research opportunities here are unmatched. By my junior year, I was co-authoring papers with tenured faculty and working directly with industry sponsors.',
    company: 'DeepMind'
  },
  {
    id: 2,
    name: 'Marcus Sterling, Class of 2021',
    role: 'Investment Director at Global Capital',
    degree: 'M.B.A. & B.S. in Economics',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    quote: 'The alumni network opened doors across New York and London from day one. The case competitions and venture incubator gave me real founder perspective.',
    company: 'Morgan Stanley'
  },
  {
    id: 3,
    name: 'Dr. Priya Patel, Class of 2020',
    role: 'Clinical Oncology Fellow at Mayo Clinic',
    degree: 'B.S. in Cellular Biology (Pre-Med)',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    quote: 'Faculty mentorship was instrumental in my 100th percentile MCAT score and medical school placements. It felt like an Ivy League education with genuine personal care.',
    company: 'Mayo Clinic'
  }
];
