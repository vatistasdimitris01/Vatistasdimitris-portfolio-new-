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
      bio: "I'm Dimitris Vatistas, a developer and designer building high-performance digital products that balance aesthetics and function. I specialize in bridging the gap between design and engineering, moving from Figma prototypes to production-ready applications in React and Next.js."
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
          id: '03', 
          role: "Founder & CEO", 
          company: "QRoyal", 
          period: "2023 - 2025",
          description: "Founded and led a digital loyalty startup, overseeing product strategy and full-stack development."
        }
      ]
    },
    projects: {
        title: "PROJECTS",
        projects: [
            { 
              id: '01', 
              title: "CIPHER", 
              description: "An AI coding assistant that writes, edits, and runs code in real-time with live preview.", 
              url: "https://cipherend.vercel.app/",
              caseStudy: {
                problem: "Most AI coding tools are slow, require complex setup, and lack real-time execution.",
                solution: "A powerful in-browser AI coding environment with instant live preview and built-in tools.",
                techDecisions: "Built with Next.js, multiple specialized models, and a custom sandboxed execution environment.",
                results: "Supports 6 models with <100ms first token and up to 1M tokens/day for free users."
              }
            },
            { 
              id: '02', 
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
              id: '05', 
              title: "MY SEARCH", 
              description: "A fast, free REST API for web search and content scraping with clean JSON output.", 
              url: "https://mysearchengine.vercel.app/",
              caseStudy: {
                problem: "Developers need reliable search and scraping capabilities but most solutions are expensive or complicated.",
                solution: "A simple, well-documented REST API that provides clean search results and web scraping functionality.",
                techDecisions: "Built with Next.js API routes and optimized scraping logic for speed and reliability.",
                results: "Fast JSON responses with support for search limits, pagination, and direct URL scraping."
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
      certificates: []
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
      bio: "Είμαι ο Δημήτρης Βατίστας, ένας προγραμματιστής και σχεδιαστής που δημιουργεί ψηφιακά προϊόντα υψηλής απόδοσης που ισορροπούν την αισθητική με τη λειτουργικότητα. Εξειδικεύομαι στη γεφύρωση του χάσματος μεταξύ σχεδιασμού και μηχανικής, μεταβαίνοντας από πρωτότυπα Figma σε εφαρμογές έτοιμες για παραγωγή σε React και Next.js."
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
          id: '03', 
          role: "Ιδρυτής & CEO", 
          company: "QRoyal", 
          period: "2023 - 2025",
          description: "Ίδρυση και καθοδήγηση μιας startup ψηφιακής πιστότητας, επιβλέποντας τη στρατηγική προϊόντος και την ανάπτυξη full-stack."
        }
      ]
    },
    projects: {
        title: "ΕΡΓΑ",
        projects: [
            { 
              id: '01', 
              title: "CIPHER", 
              description: "Ένας βοηθός κωδικοποίησης AI που γράφει, επεξεργάζεται και εκτελεί κώδικα σε πραγματικό χρόνο με ζωντανή προεπισκόπηση.", 
              url: "https://cipherend.vercel.app/",
              caseStudy: {
                problem: "Τα περισσότερα εργαλεία κωδικοποίησης AI είναι αργά, απαιτούν περίπλοκη εγκατάσταση και στερούνται εκτέλεσης σε πραγματικό χρόνο.",
                solution: "Ένα ισχυρό περιβάλλον κωδικοποίησης AI στο πρόγραμμα περιήγησης με άμεση ζωντανή προεπισκόπηση και ενσωματωμένα εργαλεία.",
                techDecisions: "Κατασκευάστηκε με Next.js, πολλαπλά εξειδικευμένα μοντέλα και ένα προσαρμοσμένο sandboxed περιβάλλον εκτέλεσης.",
                results: "Υποστηρίζει 6 μοντέλα με <100ms πρώτο token και έως και 1 εκατομμύριο tokens την ημέρα για δωρεάν χρήστες."
              }
            },
            { 
              id: '02', 
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
              title: "STRM", 
              description: "Μια καθαρή, μινιμαλιστική και εντελώς χωρίς διαφημίσεις πλατφόρμα streaming για ταινίες και τηλεοπτικές εκπομπές.", 
              url: "https://strm-movies.vercel.app/",
              caseStudy: {
                problem: "Οι περισσότεροι δωρεάν ιστότοποι streaming είναι γεμάτοι με ενοχλητικές διαφημίσεις, αναδυόμενα παράθυρα και trackers που καταστρέφουν την εμπειρία του χρήστη.",
                solution: "Μια πλατφόρμα streaming υψηλής απόδοσης που συγκεντρώνει περιεχομενο από ασφαλείς τρίτους παρόχους με μηδενικές διαφημίσεις.",
                techDecisions: "Κατασκευάστηκε με Next.js και ένα προσαρμοσμένο proxy layer για να διασφαλιστεί η γρήγορη, ασφαλής και απρόσκοπτη παράδοση περιεχομένου.",
                results: "Επίτευξη μιας εμπειρίας 100% χωρίς διαφημίσεις και αναδυόμενα παράθυρα, οδηγώντας σε υψηλή διατήρηση και αφοσίωση των χρηστών."
              }
            },
            { 
              id: '05', 
              title: "MY SEARCH", 
              description: "Ένα γρήγορο, δωρεάν REST API για αναζήτηση στον ιστό και απόσπαση περιεχομένου με καθαρή έξοδο JSON.", 
              url: "https://mysearchengine.vercel.app/",
              caseStudy: {
                problem: "Οι προγραμματιστές χρειάζονται αξιόπιστες δυνατότητες αναζήτησης και απόσπασης, αλλά οι περισσότερες λύσεις είναι ακριβές ή περίπλοκες.",
                solution: "Ένα απλό, καλά τεκμηριωμένο REST API που παρέχει καθαρά αποτελέσματα αναζήτησης και λειτουργικότητα απόσπασης ιστού.",
                techDecisions: "Κατασκευάστηκε με Next.js API routes και βελτιστοποιημένη λογική απόσπασης για ταχύτητα και αξιοπιστία.",
                results: "Γρήγορες αποκρίσεις JSON με υποστήριξη για όρια αναζήτησης, σελιδοποίηση και άμεση απόσπαση URL."
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
      certificates: []
    }
  }
};
