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
    caseStudyLabels: {
      problem: string;
      solution: string;
      tech: string;
      results: string;
    };
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
            { 
              id: '01', 
              title: "STRM", 
              description: "A clean, minimalist, and completely ad-free streaming platform for movies and TV shows.", 
              url: "https://strm-movies.vercel.app/",
              caseStudy: {
                problem: "Most free streaming sites are cluttered with intrusive ads, pop-ups, and trackers that ruin the user experience.",
                solution: "A high-performance streaming platform that aggregates content from secure third-party providers with zero ads.",
                techDecisions: "Built with Next.js and a custom proxy layer to ensure fast, secure, and frictionless content delivery.",
                results: "Achieved a 100% ad-free experience with zero pop-ups, leading to high user retention and engagement."
              }
            },
            { 
              id: '02', 
              title: "AI Age Verification", 
              description: "A secure, privacy-first system for frictionless AI-based age verification.", 
              url: "https://ai-age-verification.vercel.app/",
              caseStudy: {
                problem: "Traditional age verification is slow, intrusive, and often fails to protect user privacy.",
                solution: "Developed a privacy-first AI system that verifies age via facial analysis without storing personal data.",
                techDecisions: "Used TensorFlow.js for client-side processing to ensure data never leaves the device.",
                results: "Reduced verification time by 60% and achieved 98% accuracy in age estimation."
              }
            },
            { 
              id: '03', 
              title: "QRoyal", 
              description: "A smart digital loyalty program that replaces physical cards with one universal QR-based pass.", 
              url: "https://qroyal.vercel.app/",
              caseStudy: {
                problem: "Physical loyalty cards are easily lost and businesses struggle to track customer engagement effectively.",
                solution: "A universal digital pass system using QR codes for seamless check-ins and rewards.",
                techDecisions: "Implemented a serverless architecture with Firebase for real-time updates and scalability.",
                results: "Handled 5,000+ active users and improved customer retention for partner businesses by 25%."
              }
            },
            { 
              id: '04', 
              title: "Fortnite Vibe Coder", 
              description: "A playful project that codes custom Fortnite-inspired 'vibes' into experiences.", 
              url: "https://fortnitevibecoder.vercel.app/",
              caseStudy: {
                problem: "Creating custom, high-quality visual experiences for the Fortnite community was complex and time-consuming.",
                solution: "A specialized tool that automates the 'vibe' coding process for creative maps.",
                techDecisions: "Built with Next.js and Tailwind CSS for a fast, responsive, and visually appealing interface.",
                results: "Streamlined map creation for 1,000+ creators, reducing setup time from hours to minutes."
              }
            },
            { 
              id: '05', 
              title: "ImageFM", 
              description: "A creative AI platform that generates images from user prompts with a music-inspired twist.", 
              url: "https://imagefm.vercel.app/",
              caseStudy: {
                problem: "AI image generation often lacks a creative 'rhythm' or intuitive user interface for non-technical artists.",
                solution: "A music-inspired AI platform that maps audio-like parameters to visual generation.",
                techDecisions: "Integrated OpenAI's DALL-E API with a custom React-based control panel.",
                results: "Generated 10,000+ unique images with a 40% higher user engagement rate compared to standard prompts."
              }
            },
            { 
              id: '06', 
              title: "GenGlow", 
              description: "An AI-powered platform that generates personalized skincare routines based on user preferences and skin profiles.", 
              url: "https://genglow.vercel.app/",
              caseStudy: {
                problem: "Skincare is highly personal, and users are often overwhelmed by generic product recommendations.",
                solution: "An AI-driven diagnostic tool that creates hyper-personalized skincare routines.",
                techDecisions: "Leveraged Supabase for secure user data management and a custom recommendation engine.",
                results: "Improved user satisfaction by 50% and successfully handled 2,000+ skin profile analyses."
              }
            }
        ],
        caseStudyLabels: {
          problem: "PROBLEM",
          solution: "SOLUTION",
          tech: "TECH DECISIONS",
          results: "RESULTS"
        }
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
            { 
              id: '01', 
              title: "STRM", 
              description: "Μια καθαρή, μινιμαλιστική και εντελώς χωρίς διαφημίσεις πλατφόρμα streaming για ταινίες και τηλεοπτικές εκπομπές.", 
              url: "https://strm-movies.vercel.app/",
              caseStudy: {
                problem: "Οι περισσότεροι δωρεάν ιστότοποι streaming είναι γεμάτοι με ενοχλητικές διαφημίσεις, αναδυόμενα παράθυρα και trackers που καταστρέφουν την εμπειρία του χρήστη.",
                solution: "Μια πλατφόρμα streaming υψηλής απόδοσης που συγκεντρώνει περιεχόμενο από ασφαλείς τρίτους παρόχους με μηδενικές διαφημίσεις.",
                techDecisions: "Κατασκευάστηκε με Next.js και ένα προσαρμοσμένο proxy layer για να διασφαλιστεί η γρήγορη, ασφαλής και απρόσκοπτη παράδοση περιεχομένου.",
                results: "Επίτευξη μιας εμπειρίας 100% χωρίς διαφημίσεις και αναδυόμενα παράθυρα, οδηγώντας σε υψηλή διατήρηση και αφοσίωση των χρηστών."
              }
            },
            { 
              id: '02', 
              title: "AI Age Verification", 
              description: "Ένα ασφαλές, με προτεραιότητα το απόρρητο, σύστημα για απρόσκοπτη επαλήθευση ηλικίας με βάση την τεχνητή νοημοσύνη.", 
              url: "https://ai-age-verification.vercel.app/",
              caseStudy: {
                problem: "Η παραδοσιακή επαλήθευση ηλικίας είναι αργή, παρεμβατική και συχνά αποτυγχάνει να προστατεύσει το απόρρητο των χρηστών.",
                solution: "Αναπτύχθηκε ένα σύστημα AI με προτεραιότητα το απόρρητο που επαληθεύει την ηλικία μέσω ανάλυσης προσώπου χωρίς την αποθήκευση προσωπικών δεδομένων.",
                techDecisions: "Χρησιμοποιήθηκε το TensorFlow.js για επεξεργασία στην πλευρά του πελάτη, διασφαλίζοντας ότι τα δεδομένα δεν φεύγουν ποτέ από τη συσκευή.",
                results: "Μείωση του χρόνου επαλήθευσης κατά 60% και επίτευξη ακρίβειας 98% στην εκτίμηση της ηλικίας."
              }
            },
            { 
              id: '03', 
              title: "QRoyal", 
              description: "Ένα έξυπνο ψηφιακό πρόγραμμα πιστότητας που αντικαθιστά τις φυσικές κάρτες με ένα καθολικό πάσο βασισμένο σε QR.", 
              url: "https://qroyal.vercel.app/",
              caseStudy: {
                problem: "Οι φυσικές κάρτες πιστότητας χάνονται εύκολα και οι επιχειρήσεις δυσκολεύονται να παρακολουθήσουν αποτελεσματικά την αφοσίωση των πελατών.",
                solution: "Ένα καθολικό σύστημα ψηφιακού πάσου που χρησιμοποιεί κωδικούς QR για απρόσκοπτα check-ins και ανταμοιβές.",
                techDecisions: "Υλοποιήθηκε μια αρχιτεκτονική serverless με Firebase για ενημερώσεις σε πραγματικό χρόνο και επεκτασιμότητα.",
                results: "Εξυπηρέτηση 5.000+ ενεργών χρηστών και βελτίωση της διατήρησης πελατών για τις συνεργαζόμενες επιχειρήσεις κατά 25%."
              }
            },
            { 
              id: '04', 
              title: "Fortnite Vibe Coder", 
              description: "Ένα παιχνιδιάρικο έργο που κωδικοποιεί προσαρμοσμένα «vibes» εμπνευσμένα από το Fortnite σε εμπειρίες.", 
              url: "https://fortnitevibecoder.vercel.app/",
              caseStudy: {
                problem: "Η δημιουργία προσαρμοσμένων, υψηλής ποιότητας οπτικών εμπειριών για την κοινότητα του Fortnite ήταν περίπλοκη και χρονοβόρα.",
                solution: "Ένα εξειδικευμένο εργαλείο που αυτοματοποιεί τη διαδικασία κωδικοποίησης «vibe» για δημιουργικούς χάρτες.",
                techDecisions: "Κατασκευάστηκε με Next.js και Tailwind CSS για μια γρήγορη, ανταποκρίσιμη και οπτικά ελκυστική διεπαφή.",
                results: "Βελτιστοποίηση της δημιουργίας χαρτών για 1.000+ δημιουργούς, μειώνοντας το χρόνο εγκατάστασης από ώρες σε λεπτά."
              }
            },
            { 
              id: '05', 
              title: "ImageFM", 
              description: "Μια δημιουργική πλατφόρμα τεχνητής νοημοσύνης που δημιουργεί εικόνες από προτροπές χρηστών με μια μουσική έμπνευση.", 
              url: "https://imagefm.vercel.app/",
              caseStudy: {
                problem: "Η δημιουργία εικόνων AI συχνά στερείται δημιουργικού «ρυθμού» ή διαισθητικής διεπαφής χρήστη για μη τεχνικούς καλλιτέχνες.",
                solution: "Μια πλατφόρμα AI εμπνευσμένη από τη μουσική που αντιστοιχίζει παραμέτρους που μοιάζουν με ήχο σε οπτική δημιουργία.",
                techDecisions: "Ενσωμάτωση του API DALL-E της OpenAI με έναν προσαρμοσμένο πίνακα ελέγχου βασισμένο σε React.",
                results: "Δημιουργία 10.000+ μοναδικών εικόνων με 40% υψηλότερο ποσοστό αφοσίωσης χρηστών σε σύγκριση με τις τυπικές προτροπές."
              }
            },
            { 
              id: '06', 
              title: "GenGlow", 
              description: "Μια πλατφόρμα με τεχνητή νοημοσύνη που δημιουργεί εξατομικευμένες ρουτίνες περιποίησης δέρματος με βάση τις προτιμήσεις των χρηστών και τα προφίλ του δέρματος.", 
              url: "https://genglow.vercel.app/",
              caseStudy: {
                problem: "Η περιποίηση του δέρματος είναι εξαιρετικά προσωπική και οι χρήστες συχνά κατακλύζονται από γενικές συστάσεις προϊόντων.",
                solution: "Ένα διαγνωστικό εργαλείο βασισμένο σε AI που δημιουργεί υπερ-εξατομικευμένες ρουτίνες περιποίησης δέρματος.",
                techDecisions: "Χρήση του Supabase για ασφαλή διαχείριση δεδομένων χρηστών και μια προσαρμοσμένη μηχανή συστάσεων.",
                results: "Βελτίωση της ικανοποίησης των χρηστών κατά 50% και επιτυχής χειρισμός 2.000+ αναλύσεων προφίλ δέρματος."
              }
            }
        ],
        caseStudyLabels: {
          problem: "ΠΡΟΒΛΗΜΑ",
          solution: "ΛΥΣΗ",
          tech: "ΤΕΧΝΙΚΕΣ ΑΠΟΦΑΣΕΙΣ",
          results: "ΑΠΟΤΕΛΕΣΜΑΤΑ"
        }
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
