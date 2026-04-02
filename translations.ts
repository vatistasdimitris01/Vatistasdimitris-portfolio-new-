import type { PersonalInfo, WorkExperienceData, ProjectData, BlogData, CertificateData } from './types';

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
  blog: {
    title: string;
    backToHome: string;
    backToBlog: string;
    posts: BlogData[];
  };
  certificates: {
    title: string;
    certificates: CertificateData[];
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
      bio: "I'm Dimitris Vatistas, a developer and designer crafting digital products that balance aesthetics with functionality. My work spans the full creative and technical process — from wireframing in Figma and prototyping in Framer, to building production-ready applications in React and Next.js."
    },
    workExperience: {
      title: "EXPERIENCE",
      experiences: [
        { 
          id: '01', 
          role: "Student", 
          company: "Stanford CodeInPlace", 
          period: "2026",
          description: "Mastered Python fundamentals and software engineering principles through Stanford's intensive online course."
        },
        { 
          id: '02', 
          role: "Student", 
          company: "High School & Further Education", 
          period: "2021 - Present",
          description: "Focusing on advanced mathematics, with a long-term goal of pursuing studies in Architecture."
        },
        { 
          id: '03', 
          role: "Founder & CEO", 
          company: "QRoyal", 
          period: "2023 - 2025",
          description: "Founded and led a digital loyalty startup, overseeing product strategy and full-stack development."
        },
        { 
          id: '04', 
          role: "Developer", 
          company: "AI Age Verification", 
          period: "2022",
          description: "Built secure, privacy-focused age verification systems using machine learning models."
        }
      ]
    },
    projects: {
        title: "PROJECTS",
        projects: [
            { id: '01', title: "AI Age Verification", description: "A secure, privacy-first system for frictionless AI-based age verification.", url: "https://ai-age-verification.vercel.app/" },
            { id: '02', title: "QRoyal", description: "A smart digital loyalty program that replaces physical cards with one universal QR-based pass.", url: "https://qroyal.vercel.app/" },
            { id: '03', title: "Fortnite Vibe Coder", description: "A playful project that codes custom Fortnite-inspired 'vibes' into experiences.", url: "https://fortnitevibecoder.vercel.app/" },
            { id: '04', title: "ImageFM", description: "A creative AI platform that generates images from user prompts with a music-inspired twist.", url: "https://imagefm.vercel.app/" },
            { id: '05', title: "GenGlow", description: "An AI-powered platform that generates personalized skincare routines based on user preferences and skin profiles.", url: "https://genglow.vercel.app/" }
        ]
    },
    blog: {
      title: "BLOG",
      backToHome: "[ Back to Home ]",
      backToBlog: "[ Back to Blog ]",
      posts: [
        {
          id: '01',
          slug: 'the-golden-ratio',
          title: 'The Golden Ratio in Design',
          date: 'October 26, 2023',
          excerpt: 'Understanding the mathematical beauty behind aesthetically pleasing designs.',
          content: `
The Golden Ratio, often denoted by the Greek letter phi ($\\phi$), is approximately equal to 1.6180339887...

It appears in geometry, art, architecture, and nature.

\\[ \\phi = \\frac{1 + \\sqrt{5}}{2} \\]

Here is a visual representation:

<canvas id="goldenRatioChart" data-chart-function="golden-ratio" width="400" height="200"></canvas>
          `
        },
        {
          id: '02',
          slug: 'math-functions',
          title: 'Visualizing Math Functions',
          date: 'November 15, 2023',
          excerpt: 'A look at parabolas and sine waves using Chart.js.',
          content: `
### Parabola

A simple quadratic function $f(x) = x^2$.

<canvas id="parabolaChart" data-chart-function="parabola" data-a="1" data-b="0" data-c="0" width="400" height="200"></canvas>

### Sine Wave

The sine function $f(t) = A\\sin(\\omega t)$.

<canvas id="sineChart" data-chart-function="sine" data-amplitude="1" data-frequency="1" width="400" height="200"></canvas>
          `
        }
      ]
    },
    certificates: {
      title: "CERTIFICATES",
      certificates: [
        { id: '02', title: "Machine Learning with Python", issuer: "freeCodeCamp", date: "2026", url: "https://www.freecodecamp.org/certification/vatistasdimitris/machine-learning-with-python-v7" }
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
      bio: "Είμαι ο Δημήτρης Βατίστας, ένας προγραμματιστής και σχεδιαστής που δημιουργεί ψηφιακά προϊόντα που ισορροπούν την αισθητική με τη λειτουργικότητα. Η δουλειά μου καλύπτει ολόκληρη τη δημιουργική και τεχνική διαδικασία — από το wireframing στο Figma και το prototyping στο Framer, μέχρι τη δημιουργία έτοιμων για παραγωγή εφαρμογών σε React και Next.js."
    },
    workExperience: {
      title: "ΕΜΠΕΙΡΙΑ",
      experiences: [
        { 
          id: '01', 
          role: "Μαθητής", 
          company: "Stanford CodeInPlace", 
          period: "2026",
          description: "Εμβάθυνση στις βασικές αρχές της Python και της μηχανικής λογισμικού μέσω του εντατικού διαδικτυακού μαθήματος του Stanford."
        },
        { 
          id: '02', 
          role: "Μαθητής", 
          company: "Λύκειο & Περαιτέρω Εκπαίδευση", 
          period: "2021 - Σήμερα",
          description: "Εστίαση στα προχωρημένα μαθηματικά, με μακροπρόθεσμο στόχο τις σπουδές στην Αρχιτεκτονική."
        },
        { 
          id: '03', 
          role: "Ιδρυτής & CEO", 
          company: "QRoyal", 
          period: "2023 - 2025",
          description: "Ίδρυση και καθοδήγηση μιας startup ψηφιακής πιστότητας, επιβλέποντας τη στρατηγική προϊόντος και την ανάπτυξη full-stack."
        },
        { 
          id: '04', 
          role: "Προγραμματιστής", 
          company: "AI Age Verification", 
          period: "2022",
          description: "Δημιουργία ασφαλών συστημάτων επαλήθευσης ηλικίας με έμφαση στο απόρρητο χρησιμοποιώντας μοντέλα μηχανικής μάθησης."
        }
      ]
    },
    projects: {
        title: "ΕΡΓΑ",
        projects: [
            { id: '01', title: "AI Age Verification", description: "Ένα ασφαλές, με προτεραιότητα το απόρρητο, σύστημα για απρόσκοπτη επαλήθευση ηλικίας με βάση την τεχνητή νοημοσύνη.", url: "https://ai-age-verification.vercel.app/" },
            { id: '02', title: "QRoyal", description: "Ένα έξυπνο ψηφιακό πρόγραμμα πιστότητας που αντικαθιστά τις φυσικές κάρτες με ένα καθολικό πάσο βασισμένο σε QR.", url: "https://qroyal.vercel.app/" },
            { id: '03', title: "Fortnite Vibe Coder", description: "Ένα παιχνιδιάρικο έργο που κωδικοποιεί προσαρμοσμένα «vibes» εμπνευσμένα από το Fortnite σε εμπειρίες.", url: "https://fortnitevibecoder.vercel.app/" },
            { id: '04', title: "ImageFM", description: "Μια δημιουργική πλατφόρμα τεχνητής νοημοσύνης που δημιουργεί εικόνες από προτροπές χρηστών με μια μουσική έμπνευση.", url: "https://imagefm.vercel.app/" },
            { id: '05', title: "GenGlow", description: "Μια πλατφόρμα με τεχνητή νοημοσύνη που δημιουργεί εξατομικευμένες ρουτίνες περιποίησης δέρματος με βάση τις προτιμήσεις των χρηστών και τα προφίλ του δέρματος.", url: "https://genglow.vercel.app/" }
        ]
    },
    blog: {
      title: "BLOG",
      backToHome: "[ Επιστροφή στην Αρχική ]",
      backToBlog: "[ Επιστροφή στο Blog ]",
      posts: [
        {
          id: '01',
          slug: 'the-golden-ratio',
          title: 'Ο Χρυσός Κανόνας στο Σχέδιο',
          date: '26 Οκτωβρίου 2023',
          excerpt: 'Κατανοώντας τη μαθηματική ομορφιά πίσω από αισθητικά ευχάριστα σχέδια.',
          content: `
Ο Χρυσός Κανόνας, που συχνά συμβολίζεται με το ελληνικό γράμμα φι ($\\phi$), είναι περίπου ίσος με 1.6180339887...

Εμφανίζεται στη γεωμετρία, την τέχνη, την αρχιτεκτονική και τη φύση.

\\[ \\phi = \\frac{1 + \\sqrt{5}}{2} \\]

Εδώ είναι μια οπτική αναπαράσταση:

<canvas id="goldenRatioChart" data-chart-function="golden-ratio" width="400" height="200"></canvas>
          `
        },
        {
          id: '02',
          slug: 'math-functions',
          title: 'Οπτικοποίηση Μαθηματικών Συναρτήσεων',
          date: '15 Νοεμβρίου 2023',
          excerpt: 'Μια ματιά σε παραβολές και ημιτονοειδή κύματα χρησιμοποιώντας το Chart.js.',
          content: `
### Παραβολή

Μια απλή τετραγωνική συνάρτηση $f(x) = x^2$.

<canvas id="parabolaChart" data-chart-function="parabola" data-a="1" data-b="0" data-c="0" width="400" height="200"></canvas>

### Ημιτονοειδές Κύμα

Η συνάρτηση ημιτόνου $f(t) = A\\sin(\\omega t)$.

<canvas id="sineChart" data-chart-function="sine" data-amplitude="1" data-frequency="1" width="400" height="200"></canvas>
          `
        }
      ]
    },
    certificates: {
      title: "ΠΙΣΤΟΠΟΙΗΣΕΙΣ",
      certificates: [
        { id: '02', title: "Machine Learning with Python", issuer: "freeCodeCamp", date: "2026", url: "https://www.freecodecamp.org/certification/vatistasdimitris/machine-learning-with-python-v7" }
      ]
    }
  }
};
