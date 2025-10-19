import type { PersonalInfo, WorkExperienceData, ProjectData } from './types';

interface Translations {
  nav: {
    name: string;
    animationsOn: string;
    animationsOff: string;
  };
  hero: Pick<PersonalInfo, 'title' | 'bio'>;
  workExperience: {
    title: string;
    experiences: WorkExperienceData[];
  };
  projects: {
    title: string;
    projects: ProjectData[];
  };
}

export const translations: { en: Translations; el: Translations } = {
  en: {
    nav: {
      name: "Dimitris Vatistas",
      animationsOn: "[ ANIMATIONS: ON ]",
      animationsOff: "[ ANIMATIONS: OFF ]",
    },
    hero: {
      title: "Web Developer & Web Designer",
      bio: "I'm Dimitris Vatistas, a developer and designer passionate about crafting digital products that balance aesthetics with functionality. My work spans the full creative and technical process — from wireframing in Figma and prototyping in Framer, to building production-ready applications in React and Next.js."
    },
    workExperience: {
      title: "WORK EXPERIENCE",
      experiences: [
        { id: '01', role: "Founder & CEO", company: "QRoyal", period: "2023 - Present" },
        { id: '02', role: "Developer", company: "AI Beauty", period: "2022 - 2023" },
        { id: '03', role: "Developer", company: "AI Age Verification", period: "2022" },
        { id: '04', role: "Student", company: "High School & Further Education", period: "2021 - Present" }
      ]
    },
    projects: {
        title: "PROJECTS",
        projects: [
            { id: '01', title: "VD Search", description: "VD Search is a sleek, custom web and image search engine that provides a fast and clean browsing experience.", url: "https://vd-search.vercel.app/" },
            { id: '02', title: "AI Age Verification", description: "A secure, privacy-first system for frictionless AI-based age verification.", url: "https://ai-age-verification.vercel.app/" },
            { id: '03', title: "QRoyal", description: "A smart digital loyalty program that replaces physical cards with one universal QR-based pass.", url: "https://qroyal.vercel.app/" },
            { id: '04', title: "Fortnite Vibe Coder", description: "A playful project that codes custom Fortnite-inspired 'vibes' into experiences.", url: "https://fortnitevibecoder.vercel.app/" },
            { id: '05', title: "AI Digrm", description: "An AI diagram generator that converts text into structured, visual diagrams instantly.", url: "https://ai-digrm.vercel.app/" },
            { id: '06', title: "ImageFM", description: "A creative AI platform that generates images from user prompts with a music-inspired twist.", url: "https://imagefm.vercel.app/" },
            { id: '07', title: "QBIT AI", description: "An AI-powered assistant designed to help users manage tasks and queries efficiently.", url: "https://qbitai.vercel.app/" },
            { id: '08', title: "MoodMenu", description: "A smart menu generator that creates meal recommendations based on mood and dietary preferences.", url: "https://moodmenu.vercel.app/" },
            { id: '09', title: "GenGlow", description: "An AI-powered platform that generates personalized skincare routines based on user preferences and skin profiles.", url: "https://genglow.vercel.app/" }
        ]
    }
  },
  el: {
    nav: {
      name: "Δημήτρης Βατίστας",
      animationsOn: "[ ΚΙΝΟΥΜΕΝΑ ΣΧΕΔΙΑ: ON ]",
      animationsOff: "[ ΚΙΝΟΥΜΕΝΑ ΣΧΕΔΙΑ: OFF ]",
    },
    hero: {
      title: "Web Developer & Web Designer",
      bio: "Είμαι ο Δημήτρης Βατίστας, ένας προγραμματιστής και σχεδιαστής παθιασμένος με τη δημιουργία ψηφιακών προϊόντων που ισορροπούν την αισθητική με τη λειτουργικότητα. Η δουλειά μου καλύπτει ολόκληρη τη δημιουργική και τεχνική διαδικασία — από το wireframing στο Figma και το prototyping στο Framer, μέχρι τη δημιουργία έτοιμων για παραγωγή εφαρμογών σε React και Next.js."
    },
    workExperience: {
      title: "ΕΠΑΓΓΕΛΜΑΤΙΚΗ ΕΜΠΕΙΡΙΑ",
      experiences: [
        { id: '01', role: "Ιδρυτής & CEO", company: "QRoyal", period: "2023 - Σήμερα" },
        { id: '02', role: "Προγραμματιστής", company: "AI Beauty", period: "2022 - 2023" },
        { id: '03', role: "Προγραμματιστής", company: "AI Age Verification", period: "2022" },
        { id: '04', role: "Μαθητής", company: "Λύκειο & Περαιτέρω Εκπαίδευση", period: "2021 - Σήμερα" }
      ]
    },
    projects: {
        title: "ΕΡΓΑ",
        projects: [
            { id: '01', title: "VD Search", description: "Το VD Search είναι μια κομψή, προσαρμοσμένη μηχανή αναζήτησης ιστού και εικόνων που παρέχει μια γρήγορη και καθαρή εμπειρία περιήγησης.", url: "https://vd-search.vercel.app/" },
            { id: '02', title: "AI Age Verification", description: "Ένα ασφαλές, με προτεραιότητα το απόρρητο, σύστημα για απρόσκοπτη επαλήθευση ηλικίας με βάση την τεχνητή νοημοσύνη.", url: "https://ai-age-verification.vercel.app/" },
            { id: '03', title: "QRoyal", description: "Ένα έξυπνο ψηφιακό πρόγραμμα πιστότητας που αντικαθιστά τις φυσικές κάρτες με ένα καθολικό πάσο βασισμένο σε QR.", url: "https://qroyal.vercel.app/" },
            { id: '04', title: "Fortnite Vibe Coder", description: "Ένα παιχνιδιάρικο έργο που κωδικοποιεί προσαρμοσμένα «vibes» εμπνευσμένα από το Fortnite σε εμπειρίες.", url: "https://fortnitevibecoder.vercel.app/" },
            { id: '05', title: "AI Digrm", description: "Μια γεννήτρια διαγραμμάτων τεχνητής νοημοσύνης που μετατρέπει το κείμενο σε δομημένα, οπτικά διαγράμματα άμεσα.", url: "https://ai-digrm.vercel.app/" },
            { id: '06', title: "ImageFM", description: "Μια δημιουργική πλατφόρμα τεχνητής νοημοσύνης που δημιουργεί εικόνες από προτροπές χρηστών με μια μουσική έμπνευση.", url: "https://imagefm.vercel.app/" },
            { id: '07', title: "QBIT AI", description: "Ένας βοηθός με τεχνητή νοημοσύνη σχεδιασμένος για να βοηθά τους χρήστες να διαχειρίζονται εργασίες και ερωτήματα αποτελεσματικά.", url: "https://qbitai.vercel.app/" },
            { id: '08', title: "MoodMenu", description: "Μια έξυπνη γεννήτρια μενού που δημιουργεί προτάσεις γευμάτων με βάση τη διάθεση και τις διατροφικές προτιμήσεις.", url: "https://moodmenu.vercel.app/" },
            { id: '09', title: "GenGlow", description: "Μια πλατφόρμα με τεχνητή νοημοσύνη που δημιουργεί εξατομικευμένες ρουτίνες περιποίησης δέρματος με βάση τις προτιμήσεις των χρηστών και τα προφίλ του δέρματος.", url: "https://genglow.vercel.app/" }
        ]
    }
  }
};