import React, { createContext, useContext, useState, useEffect } from 'react';

const TRANSLATIONS = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    affiliations: 'Affiliations',
    academics: 'Academics & Syllabi',
    admissions: 'Admissions & Fees',
    faculty: 'Faculty & Staff',
    facilities: 'Infrastructure & Labs',
    library: 'Central Library',
    medical: 'Medical Facilities',
    studentLife: 'Student Life',
    placements: 'Placement Cell',
    research: 'Research & IQAC',
    alumni: 'Alumni Network',
    compliance: 'Mandatory Compliance',
    gallery: 'Photo & Video Gallery',
    newsEvents: 'News & Events',
    downloads: 'Downloads',
    contact: 'Contact Us',
    studentPortal: 'Student Portal',
    adminCMS: 'Staff CMS',
    applyNow: 'Apply Now',
    requestInfo: 'Request Prospectus',
    campusTour: '360° Tour',

    // Hero / Taglines
    institutionName: 'Gautam College, Hamirpur',
    locationSubtitle: 'Hamirpur (Himachal Pradesh) • Est. 1999',
    silverJubilee: 'Celebrating 25 Years of Academic Excellence (1999–2025)',
    heroTitle: 'Pioneering Higher Education in Himachal Pradesh',
    heroDesc: 'Affiliated with HPTU, HPU & AMRU. Approved by AICTE, PCI, INC & HPNRC. Offering premier programs in Pharmacy, Nursing, Management, and Sciences.',
    
    // Quick labels
    admissionOpen: 'Admissions Open 2025–26',
    antiRaggingHelpline: 'Anti-Ragging 24x7 Helpline: 1800-180-5522',
    nearBusStand: 'Near Bus Stand, Ward No. 10, Hamirpur (H.P.)',
    phone: '+91-9418010420',
    exploreCourses: 'Explore All Courses',
    viewDetails: 'View Details',
    downloadPdf: 'Download PDF',
    close: 'Close',
    submit: 'Submit'
  },
  hi: {
    // Navigation
    home: 'मुख्य पृष्ठ',
    about: 'हमारे बारे में',
    affiliations: 'मान्यता व संबद्धता',
    academics: 'अकादमिक व पाठ्यक्रम',
    admissions: 'प्रवेश व शुल्क',
    faculty: 'संकाय एवं स्टाफ',
    facilities: 'परिसर व सुविधाएं',
    library: 'केंद्रीय पुस्तकालय',
    medical: 'चिकित्सा सुविधाएं',
    studentLife: 'छात्र जीवन',
    placements: 'प्लेसमेंट सेल',
    research: 'शोध एवं आईक्यूएसी',
    alumni: 'पुरातन छात्र',
    compliance: 'अनिवार्य प्रकटीकरण',
    gallery: 'चित्र व वीडियो दीर्घा',
    newsEvents: 'समाचार व कार्यक्रम',
    downloads: 'डाउनलोड्स',
    contact: 'संपर्क करें',
    studentPortal: 'छात्र पोर्टल',
    adminCMS: 'स्टाफ सीएमएस',
    applyNow: 'ऑनलाइन आवेदन करें',
    requestInfo: 'विवरणिका मांगें',
    campusTour: '360° परिसर भ्रमण',

    // Hero / Taglines
    institutionName: 'गौतम कॉलेज, हमीरपुर',
    locationSubtitle: 'हमीरपुर (हिमाचल प्रदेश) • स्थापना 1999',
    silverJubilee: '25 वर्षों की शैक्षणिक उत्कृष्टता (1999–2025)',
    heroTitle: 'हिमाचल प्रदेश में उच्च एवं व्यावसायिक शिक्षा का अग्रणी केंद्र',
    heroDesc: 'एचपीटीयू, एचपीयू और एएमआरयू से संबद्ध। एआईसीटीई, पीसीआई, आईएनसी और एचपीएनआरसी द्वारा अनुमोदित। फार्मेसी, नर्सिंग, प्रबंधन और विज्ञान में प्रतिष्ठित पाठ्यक्रम।',
    
    // Quick labels
    admissionOpen: 'प्रवेश सत्र 2025–26 खुला है',
    antiRaggingHelpline: 'रैगिंग विरोधी हेल्पलाइन: 1800-180-5522',
    nearBusStand: 'बस स्टैंड के पास, वार्ड नं. 10, हमीरपुर (हि.प्र.)',
    phone: '+91-9418010420',
    exploreCourses: 'सभी पाठ्यक्रम देखें',
    viewDetails: 'विवरण देखें',
    downloadPdf: 'पीडीएफ डाउनलोड करें',
    close: 'बंद करें',
    submit: 'जमा करें'
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('ggc_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('ggc_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = (key) => {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
