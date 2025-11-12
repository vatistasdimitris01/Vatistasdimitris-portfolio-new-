import type { PersonalInfo, WorkExperienceData, ProjectData, BlogData } from './types';

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
      title: "WORK EXPERIENCE",
      experiences: [
        { id: '01', role: "Student", company: "High School & Further Education", period: "2021 - Present" },
        { id: '02', role: "Founder & CEO", company: "QRoyal", period: "2023 - 2025" },
        { id: '03', role: "Developer", company: "AI Beauty", period: "2022 - 2023" },
        { id: '04', role: "Developer", company: "AI Age Verification", period: "2022" }
      ]
    },
    projects: {
        title: "PROJECTS",
        projects: [
            { id: '01', title: "THE QBIT", description: "Stay always informed. Your daily update on the news that matters, with the speed of artificial intelligence. THE QBIT. The only thing you need to read today, curated by AI.", url: "https://the-qbit.vercel.app/" },
            { id: '02', title: "VD Search", description: "VD Search is a sleek, custom web and image search engine that provides a fast and clean browsing experience.", url: "https://vd-search.vercel.app/" },
            { id: '03', title: "AI Age Verification", description: "A secure, privacy-first system for frictionless AI-based age verification.", url: "https://ai-age-verification.vercel.app/" },
            { id: '04', title: "QRoyal", description: "A smart digital loyalty program that replaces physical cards with one universal QR-based pass.", url: "https://qroyal.vercel.app/" },
            { id: '05', title: "Fortnite Vibe Coder", description: "A playful project that codes custom Fortnite-inspired 'vibes' into experiences.", url: "https://fortnitevibecoder.vercel.app/" },
            { id: '06', title: "AI Digrm", description: "An AI diagram generator that converts text into structured, visual diagrams instantly.", url: "https://ai-digrm.vercel.app/" },
            { id: '07', title: "ImageFM", description: "A creative AI platform that generates images from user prompts with a music-inspired twist.", url: "https://imagefm.vercel.app/" },
            { id: '08', title: "QBIT AI", description: "An AI-powered assistant designed to help users manage tasks and queries efficiently.", url: "https://qbitai.vercel.app/" },
            { id: '09', title: "MoodMenu", description: "A smart menu generator that creates meal recommendations based on mood and dietary preferences.", url: "https://moodmenu.vercel.app/" },
            { id: '10', title: "GenGlow", description: "An AI-powered platform that generates personalized skincare routines based on user preferences and skin profiles.", url: "https://genglow.vercel.app/" }
        ]
    },
    blog: {
      title: "BLOG",
      backToHome: "[ Back to Home ]",
      backToBlog: "[ Back to Blog ]",
      posts: [
          {
            id: '01',
            slug: 'what-is-time',
            title: 'What Is Time?',
            date: '2024-09-05',
            excerpt: 'Time is the axis along which change is measured — yet its nature remains one of physics’ deepest puzzles.',
            content: `Time is the axis along which change is measured — yet its nature remains one of physics’ deepest puzzles.

In **classical mechanics**, time is absolute:
\\[
t_2 - t_1 = \\text{constant for all observers.}
\\]
Newton imagined a universal clock ticking identically everywhere, independent of motion or gravity.

Then Einstein shattered that certainty. In **special relativity**, simultaneity disappears. The proper time between two events is given by
\\[
d\\tau^2 = dt^2 - \\frac{1}{c^2}(dx^2 + dy^2 + dz^2)
\\]
where \\( \\tau \\) is the time measured by a moving observer. Time dilates with velocity — clocks moving at speed \\( v \\) tick slower by a factor
\\[
\\Delta t' = \\gamma \\Delta t = \\frac{\\Delta t}{\\sqrt{1 - v^2 / c^2}}.
\\]

In **general relativity**, gravity warps time itself:
\\[
d\\tau = \\sqrt{1 - \\frac{2GM}{rc^2}}\\, dt.
\\]
Near massive bodies, spacetime curves and time runs slower — a phenomenon confirmed by GPS satellites and experiments at CERN.

But is time *fundamental*? Quantum gravity hints otherwise. The Wheeler–DeWitt equation,
\\[
\\hat{H}\\Psi = 0,
\\]
describes a universe without time; the wavefunction \\( \\Psi \\) of the cosmos is static. Time might *emerge* only when subsystems interact, giving rise to entropy and memory — the arrow of time.

I believe time is both an illusion and an indispensable tool — not a thing that flows, but the relational bookkeeping of change. It’s less a cosmic river than a map we draw upon the flow of events.

### Sources & Influences
- Albert Einstein — *Relativity: The Special and the General Theory*
- Carlo Rovelli — *The Order of Time*
- Julian Barbour — *The End of Time*
- Sean Carroll — *From Eternity to Here*
- J. A. Wheeler & B. DeWitt — *Quantum Geometrodynamics* (1967)`
          },
          {
            id: '02',
            slug: 'is-time-fundamental-or-emergent',
            title: 'Is Time Fundamental or Emergent?',
            date: '2024-09-04',
            excerpt: 'The deeper we probe physics, the more time seems to dissolve. In many quantum-gravity equations, time never appears at all.',
            content: `The deeper we probe physics, the more time seems to dissolve. In many quantum-gravity equations, time never appears at all. The Wheeler–DeWitt equation \\( \\hat{H}\\Psi = 0 \\) is timeless — the universe as a static configuration of all possible states.

How, then, do we experience flow? Thermodynamics offers a clue. The **second law of entropy**
\\[
\\Delta S \\ge 0
\\]
defines a direction — the *arrow of time*. Entropy increases because there are vastly more disordered states than ordered ones. Our sense of time’s passage could arise from the statistical tendency of systems to move toward equilibrium.

Another proposal is that time emerges from **quantum entanglement**. If two subsystems \\( A \\) and \\( B \\) are correlated, the reduced density matrix for \\( A \\) evolves as if time exists:
\\[
\\rho_A(t) = \\text{Tr}_B \\big( e^{-iHt/\\hbar} \\rho_{AB} e^{iHt/\\hbar} \\big).
\\]
Without interaction, no “before” or “after” exists.

So perhaps time isn’t a universal backdrop but an emergent parameter of relational change — a measure of correlation, not an independent flow.

### Sources & Influences
- Carlo Rovelli — *Quantum Gravity*
- Lee Smolin — *Time Reborn*
- S. Lloyd — “The Computational Universe”
- Eddington — *The Nature of the Physical World*
- Ludwig Boltzmann — foundational papers on entropy (1877)`
          },
          {
            id: '03',
            slug: 'reconcile-quantum-mechanics-and-general-relativity',
            title: 'Can We Reconcile Quantum Mechanics and General Relativity?',
            date: '2024-09-03',
            excerpt: 'Quantum mechanics and relativity are both right — but they speak incompatible languages.',
            content: `Quantum mechanics and relativity are both right — but they speak incompatible languages.
- **Quantum theory**: probabilistic, linear, governed by the Schrödinger equation
  \\[
  i\\hbar \\frac{\\partial \\Psi}{\\partial t} = \\hat{H}\\Psi.
  \\]
- **General relativity**: deterministic, geometric, governed by Einstein’s field equations
  \\[
  G_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}.
  \\]

At ordinary scales, both work perfectly. But near singularities — black holes, the Big Bang — they contradict each other. Unifying them means quantizing gravity itself.

### String Theory
Assumes fundamental 1-D “strings” whose vibrations produce all particles.
Its central relation:
\\[
E = \\frac{hc}{\\lambda}
\\]
and consistency requires **10 or 11 dimensions**. Gravity emerges naturally from closed strings (the graviton).

### Loop Quantum Gravity
Takes spacetime as discrete. The area and volume operators have quantized spectra:
\\[
A = 8\\pi\\gamma l_P^2 \\sum_i \\sqrt{j_i(j_i + 1)},
\\]
where \\( l_P = \\sqrt{\\frac{G\\hbar}{c^3}} \\) is the Planck length.

I believe unification may require a radical shift — perhaps geometry and quantum fields are both emergent from deeper informational principles. When we find that common language, “space,” “time,” and “matter” might all be revealed as shadows of one equation yet to be written.

### Sources & Influences
- Brian Greene — *The Elegant Universe*
- Carlo Rovelli — *Reality Is Not What It Seems*
- Lee Smolin — *Three Roads to Quantum Gravity*
- Roger Penrose — *The Road to Reality*
- Edward Witten — key string theory papers (1984–1995)`
          },
          {
            id: '04',
            slug: 'what-happens-inside-a-black-hole',
            title: 'What Happens Inside a Black Hole — Is Information Lost?',
            date: '2024-09-02',
            excerpt: 'In general relativity, the Schwarzschild metric defines spacetime around a non-rotating black hole.',
            content: `In general relativity, the Schwarzschild metric defines spacetime around a non-rotating black hole:
\\[
ds^2 = -\\left(1 - \\frac{2GM}{rc^2}\\right)c^2dt^2 + \\left(1 - \\frac{2GM}{rc^2}\\right)^{-1}dr^2 + r^2d\\Omega^2.
\\]
At the Schwarzschild radius
\\[
r_s = \\frac{2GM}{c^2},
\\]
time halts and escape becomes impossible.

Quantum mechanics, however, says information can’t be destroyed. Yet Hawking’s discovery of **black-hole radiation**
\\[
T_H = \\frac{\\hbar c^3}{8\\pi GMk_B}
\\]
suggests black holes evaporate — apparently erasing information. This “information paradox” forced physics to rethink the very nature of space and data.

The **holographic principle** offers resolution: all information swallowed by a black hole is encoded on its surface area, not its volume. The maximum entropy is
\\[
S = \\frac{k_B A}{4 l_P^2}.
\\]
So black holes may be cosmic hard drives — compressing data to the Planck scale.

I believe black holes are not ends but archives — where matter, energy, and information rewrite themselves in the language of geometry. They are the memory of the universe.

### Sources & Influences
- Stephen Hawking — *A Brief History of Time*; “Black Hole Explosions?” (1974)
- Jacob Bekenstein — *Black Holes and Entropy* (1973)
- Leonard Susskind — *The Black Hole War*
- Gerard ’t Hooft — *Dimensional Reduction in Quantum Gravity*
- Juan Maldacena — “The Holographic Principle” (1997)`
          },
          {
            id: '05',
            slug: 'are-there-undiscovered-dimensions',
            title: 'Are There Undiscovered Dimensions Beyond the Known Four?',
            date: '2024-09-01',
            excerpt: 'We experience three spatial dimensions and one of time, but the mathematics of modern physics suggests more.',
            content: `We experience three spatial dimensions and one of time, but the mathematics of modern physics suggests more.

In **string theory**, consistency requires ten dimensions; in **M-theory**, eleven. The extra dimensions are compactified at scales near the Planck length \\( l_P \\approx 1.6 \\times 10^{-35}\\,\\text{m} \\).

The energy of a vibrating string mode is
\\[
E_n = \\frac{n\\hbar c}{L},
\\]
so higher-dimensional vibrations could manifest as heavier particles. Some theories predict “Kaluza–Klein” excitations — echoes of hidden dimensions detectable at high energies.

Even general relativity allows the possibility. A five-dimensional metric combining gravity and electromagnetism was proposed by Theodor Kaluza (1921):
\\[
R_{AB} = 0 \\quad (A,B = 0...4).
\\]
When compactified, it yields Einstein’s equations plus Maxwell’s equations — an early hint that extra dimensions unify forces.

I believe unseen dimensions may not be “places” but mathematical degrees of freedom — the unseen symmetries of reality folded tightly within every point of space.

### Sources & Influences
- Theodor Kaluza — *On the Problem of Unity in Physics* (1921)
- Oskar Klein — *Quantum Theory and Five-Dimensional Relativity* (1926)
- Edward Witten — *String Theory Dynamics in Various Dimensions* (1995)
- Brian Greene — *The Elegant Universe*
- Michio Kaku — *Hyperspace*`
          },
          {
            id: '06',
            slug: 'why-are-the-laws-of-physics-the-way-they-are',
            title: 'Why Are the Laws of Physics the Way They Are?',
            date: '2024-08-31',
            excerpt: 'Every equation seems fine-tuned for existence. The strength of gravity G, the fine-structure constant α ≈ 1/137, and the cosmological constant Λ are balanced with astonishing precision.',
            content: `Every equation seems fine-tuned for existence. The strength of gravity \\( G \\), the fine-structure constant \\( \\alpha \\approx 1/137 \\), and the cosmological constant \\( \\Lambda \\) are balanced with astonishing precision.

If \\( \\alpha \\) were slightly different, stable atoms wouldn’t form; if \\( \\Lambda \\) were larger, galaxies would never coalesce. Are these values accidental or necessary?

Some physicists appeal to **anthropic selection**: in a multiverse of possibilities, only those with life can ask why. Others suspect deeper necessity — symmetry principles encoded in equations like
\\[
\\mathcal{L} = -\\frac{1}{4}F_{\\mu\\nu}F^{\\mu\\nu}
\\]
or the Einstein–Hilbert action
\\[
S = \\frac{c^3}{16\\pi G} \\int R \\sqrt{-g}\\, d^4x.
\\]

I believe the laws are the poetry of reality — patterns that repeat because they’re self-consistent. Whether divine, random, or mathematical, they represent the one thing the universe cannot break: its own coherence.

### Sources & Influences
- Paul Davies — *The Mind of God*
- Lee Smolin — *The Life of the Cosmos*
- Roger Penrose — *The Road to Reality*
- Max Tegmark — *Our Mathematical Universe*
- Stephen Hawking — *The Grand Design*`
          },
          {
            id: '07',
            slug: 'the-parabola-quadratic-equations',
            title: 'The Parabola: A Visual Journey into Quadratic Equations',
            date: '2024-08-30',
            excerpt: 'From the arc of a thrown ball to the shape of a satellite dish, the parabola is everywhere. Let\'s explore the simple but powerful quadratic equation behind this elegant curve.',
            content: `From the arc of a thrown ball to the shape of a satellite dish, the parabola is everywhere. This elegant curve is described by a simple but powerful algebraic expression: the quadratic equation.

A **quadratic equation** is any equation that can be rearranged in standard form as
\\[
ax^2 + bx + c = 0
\\]
where \\(x\\) represents an unknown, and \\(a\\), \\(b\\), and \\(c\\) represent known numbers, where \\(a \\neq 0\\). The graph of a quadratic function \\(f(x) = ax^2 + bx + c\\) is a parabola.

The **coefficients** play a crucial role:
- \\(a\\) determines whether the parabola opens upwards (\\(a > 0\\)) or downwards (\\(a < 0\\)).
- \\(b\\) shifts the axis of symmetry.
- \\(c\\) is the y-intercept, where the curve crosses the vertical axis.

To find where the parabola crosses the x-axis (the roots of the equation), we use the **quadratic formula**:
\\[
x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}
\\]

Below is an interactive graph of the function \\(f(x) = x^2 - 2x - 3\\). You can see how its shape corresponds to the coefficients \\(a=1, b=-2, c=-3\\).

<div class="chart-container">
  <canvas id="parabola-chart" data-chart-function="parabola" data-a="1" data-b="-2" data-c="-3"></canvas>
</div>

Understanding the parabola is a gateway to understanding more complex systems in physics, engineering, and even finance.`
          },
          {
            id: '08',
            slug: 'simple-harmonic-motion',
            title: 'The Rhythm of the Universe: Simple Harmonic Motion',
            date: '2024-08-29',
            excerpt: 'From a swinging pendulum to the vibrations of a guitar string, many phenomena in our universe follow a simple, repeating pattern. This is the dance of Simple Harmonic Motion.',
            content: `From a swinging pendulum to the vibrations of a guitar string, many phenomena in our universe follow a simple, repeating pattern. This is the dance of **Simple Harmonic Motion (SHM)**.

SHM occurs when the restoring force acting on an object is directly proportional to the object's displacement from its equilibrium position. This relationship is described by Hooke's Law:
\\[
F = -kx
\\]
where \\(F\\) is the restoring force, \\(x\\) is the displacement, and \\(k\\) is a positive constant known as the force constant.

The solution to this equation of motion describes the position of the object over time, which turns out to be a sinusoidal function:
\\[
x(t) = A \\cos(\\omega t + \\phi)
\\]
This equation has three key parameters:
- **Amplitude (\\(A\\))**: The maximum displacement from the equilibrium position.
- **Angular Frequency (\\(\\omega\\))**: Related to how fast the oscillations occur (\\(\\omega = 2\\pi f\\)).
- **Phase (\\(\\phi\\))**: Determines the starting position of the object at \\(t=0\\).

Below is a graph illustrating the position of an object in Simple Harmonic Motion over time. This characteristic wave pattern is the fundamental rhythm found in light, sound, and countless other physical systems.

<div class="chart-container">
  <canvas id="sine-wave-chart" data-chart-function="sine" data-amplitude="5" data-frequency="1"></canvas>
</div>

SHM is a cornerstone of physics, providing the foundational model for understanding waves and oscillations.`
          },
          {
            id: '09',
            slug: 'golden-ratio-architecture',
            title: 'The Golden Ratio: Nature\'s Blueprint for Design',
            date: '2024-08-28',
            excerpt: 'Explore the Golden Ratio (φ), the mathematical key to beauty found in nature, art, and classical architecture. Learn how this timeless principle creates harmony and proportion.',
            content: `The **Golden Ratio**, often denoted by the Greek letter phi (φ), is an irrational number approximately equal to 1.618. It's a mathematical principle that appears with surprising frequency in nature, from the spiral of a nautilus shell to the arrangement of seeds in a sunflower. For centuries, artists, designers, and architects have used it as a tool to create aesthetically pleasing and harmonious compositions.

The ratio is derived from a simple geometric relationship. A line segment is divided into two parts of different lengths, such that the ratio of the whole segment to the longer segment is equal to the ratio of the longer segment to the shorter segment.
\\[
\\frac{a+b}{a} = \\frac{a}{b} \\equiv \\phi
\\]
This proportion is believed to be inherently balanced and pleasing to the human eye.

In **architecture**, the Golden Ratio can be found in the proportions of some of the most iconic structures in history. The Parthenon in Athens is often cited as a prime example, where the dimensions of its facade are said to approximate a golden rectangle. Modern architects like Le Corbusier also incorporated this ratio into their work, using it to define the proportions of building layouts and elevations.

Below is a simple visualization of the Golden Ratio as two line segments.

<div class="chart-container">
  <canvas id="golden-ratio-chart" data-chart-function="golden-ratio"></canvas>
</div>

Whether used consciously or intuitively, the Golden Ratio serves as a timeless guide, reminding us that beauty often has a mathematical foundation. It's a bridge between the abstract world of numbers and the tangible world of design.`
          },
          {
            id: '10',
            slug: 'brutalism-architecture',
            title: 'Brutalism: The Poetry of Raw Concrete',
            date: '2024-08-27',
            excerpt: 'From controversial monuments to celebrated cultural hubs, Brutalism is an architectural style that commands attention. Discover the philosophy behind its raw, honest forms.',
            content: `Born from the post-war era of the mid-20th century, **Brutalism** is an architectural style characterized by its use of raw, exposed concrete ('béton brut' in French, which gave the movement its name). It is a style that prioritizes honesty of material, form, and function, often resulting in massive, blocky, and visually heavy structures.

Brutalism emerged as a reaction against the perceived frivolity and dishonesty of earlier architectural styles. Architects like Le Corbusier championed a new kind of design that was truthful to its construction. The core tenets include:
- **Material Honesty**: Exposed concrete, brick, steel, and glass. The texture of the wooden formwork used to cast the concrete is often left visible.
- **Structural Expression**: The building's structural elements are often visible and form a key part of the aesthetic.
- **Monumental Forms**: Brutalist buildings are typically large-scale and use bold, geometric shapes.

For decades, Brutalism was heavily criticized as being cold, inhuman, and ugly. Many iconic Brutalist buildings fell into disrepair or were demolished. However, in recent years, there has been a significant resurgence of interest in the style. A new generation of architects and design enthusiasts has come to appreciate its powerful forms, its utopian social ideals, and its uncompromising vision.

From university libraries and government buildings to social housing projects, Brutalist architecture is a testament to an era of ambitious, and often radical, thinking about how we live and build together.`
          },
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
      title: "ΕΠΑΓΓΕΛΜΑΤΙΚΗ ΕΜΠΕΙΡΙΑ",
      experiences: [
        { id: '01', role: "Μαθητής", company: "Λύκειο & Περαιτέρω Εκπαίδευση", period: "2021 - Σήμερα" },
        { id: '02', role: "Ιδρυτής & CEO", company: "QRoyal", period: "2023 - 2025" },
        { id: '03', role: "Προγραμματιστής", company: "AI Beauty", period: "2022 - 2023" },
        { id: '04', role: "Προγραμματιστής", company: "AI Age Verification", period: "2022" }
      ]
    },
    projects: {
        title: "ΕΡΓΑ",
        projects: [
            { id: '01', title: "THE QBIT", description: "Μείνετε πάντα ενήμεροι. Η καθημερινή σας ενημέρωση για τις ειδήσεις που έχουν σημασία, με την ταχύτητα της τεχνητής νοημοσύνης. Το μόνο που χρειάζεται να διαβάσετε σήμερα, επιμελημένο από AI.", url: "https://the-qbit.vercel.app/" },
            { id: '02', title: "VD Search", description: "Το VD Search είναι μια κομψή, προσαρμοσμένη μηχανή αναζήτησης ιστού και εικόνων που παρέχει μια γρήγορη και καθαρή εμπειρία περιήγησης.", url: "https://vd-search.vercel.app/" },
            { id: '03', title: "AI Age Verification", description: "Ένα ασφαλές, με προτεραιότητα το απόρρητο, σύστημα για απρόσκοπτη επαλήθευση ηλικίας με βάση την τεχνητή νοημοσύνη.", url: "https://ai-age-verification.vercel.app/" },
            { id: '04', title: "QRoyal", description: "Ένα έξυπνο ψηφιακό πρόγραμμα πιστότητας που αντικαθιστά τις φυσικές κάρτες με ένα καθολικό πάσο βασισμένο σε QR.", url: "https://qroyal.vercel.app/" },
            { id: '05', title: "Fortnite Vibe Coder", description: "Ένα παιχνιδιάρικο έργο που κωδικοποιεί προσαρμοσμένα «vibes» εμπνευσμένα από το Fortnite σε εμπειρίες.", url: "https://fortnitevibecoder.vercel.app/" },
            { id: '06', title: "AI Digrm", description: "Μια γεννήτρια διαγραμμάτων τεχνητής νοημοσύνης που μετατρέπει το κείμενο σε δομημένα, οπτικά διαγράμματα άμεσα.", url: "https://ai-digrm.vercel.app/" },
            { id: '07', title: "ImageFM", description: "Μια δημιουργική πλατφόρμα τεχνητής νοημοσύνης που δημιουργεί εικόνες από προτροπές χρηστών με μια μουσική έμπνευση.", url: "https://imagefm.vercel.app/" },
            { id: '08', title: "QBIT AI", description: "Ένας βοηθός με τεχνητή νοημοσύνη σχεδιασμένος για να βοηθά τους χρήστες να διαχειρίζονται εργασίες και ερωτήματα αποτελεσματικά.", url: "https://qbitai.vercel.app/" },
            { id: '09', title: "MoodMenu", description: "Μια έξυπνη γεννήτρια μενού που δημιουργεί προτάσεις γευμάτων με βάση τη διάθεση και τις διατροφικές προτιμήσεις.", url: "https://moodmenu.vercel.app/" },
            { id: '10', title: "GenGlow", description: "Μια πλατφόρμα με τεχνητή νοημοσύνη που δημιουργεί εξατομικευμένες ρουτίνες περιποίησης δέρματος με βάση τις προτιμήσεις των χρηστών και τα προφίλ του δέρματος.", url: "https://genglow.vercel.app/" }
        ]
    },
    blog: {
      title: "ΙΣΤΟΛΟΓΙΟ",
      backToHome: "[ Επιστροφή στην Αρχική ]",
      backToBlog: "[ Επιστροφή στο Ιστολόγιο ]",
      posts: [
          {
            id: '01',
            slug: 'what-is-time',
            title: 'Τι Είναι ο Χρόνος;',
            date: '2024-09-05',
            excerpt: 'Ο χρόνος είναι ο άξονας κατά μήκος του οποίου μετριέται η αλλαγή — όμως η φύση του παραμένει ένα από τα βαθύτερα αινίγματα της φυσικής.',
            content: `Ο χρόνος είναι ο άξονας κατά μήκος του οποίου μετριέται η αλλαγή — όμως η φύση του παραμένει ένα από τα βαθύτερα αινίγματα της φυσικής.

Στην **κλασική μηχανική**, ο χρόνος είναι απόλυτος:
\\[
t_2 - t_1 = \\text{σταθερό για όλους τους παρατηρητές.}
\\]
Ο Νεύτωνας φαντάστηκε ένα παγκόσμιο ρολόι που χτυπά πανομοιότυπα παντού, ανεξάρτητα από την κίνηση ή τη βαρύτητα.

Τότε ο Αϊνστάιν διέλυσε αυτή τη βεβαιότητα. Στην **ειδική σχετικότητα**, ο ταυτοχρονισμός εξαφανίζεται. Ο ιδιόχρονος μεταξύ δύο γεγονότων δίνεται από τη σχέση
\\[
d\\tau^2 = dt^2 - \\frac{1}{c^2}(dx^2 + dy^2 + dz^2)
\\]
όπου \\( \\tau \\) είναι ο χρόνος που μετρά ένας κινούμενος παρατηρητής. Ο χρόνος διαστέλλεται με την ταχύτητα — τα ρολόγια που κινούνται με ταχύτητα \\( v \\) χτυπούν πιο αργά κατά έναν παράγοντα
\\[
\\Delta t' = \\gamma \\Delta t = \\frac{\\Delta t}{\\sqrt{1 - v^2 / c^2}}.
\\]

Στη **γενική σχετικότητα**, η βαρύτητα καμπυλώνει τον ίδιο τον χρόνο:
\\[
d\\tau = \\sqrt{1 - \\frac{2GM}{rc^2}}\\, dt.
\\]
Κοντά σε σώματα μεγάλης μάζας, ο χωροχρόνος καμπυλώνεται και ο χρόνος κυλά πιο αργά — ένα φαινόμενο που επιβεβαιώνεται από δορυφόρους GPS και πειράματα στο CERN.

Αλλά είναι ο χρόνος *θεμελιώδης*? Η κβαντική βαρύτητα υπονοεί το αντίθετο. Η εξίσωση Wheeler–DeWitt,
\\[
\\hat{H}\\Psi = 0,
\\]
περιγράφει ένα σύμπαν χωρίς χρόνο. η κυματοσυνάρτηση \\( \\Psi \\) του κόσμου είναι στατική. Ο χρόνος μπορεί να *αναδύεται* μόνο όταν υποσυστήματα αλληλεπιδρούν, δημιουργώντας εντροπία και μνήμη — το βέλος του χρόνου.

Πιστεύω ότι ο χρόνος είναι ταυτόχρονα μια ψευδαίσθηση και ένα απαραίτητο εργαλείο — όχι κάτι που ρέει, αλλά η σχεσιακή λογιστική της αλλαγής. Είναι λιγότερο ένας κοσμικός ποταμός και περισσότερο ένας χάρτης που σχεδιάζουμε πάνω στη ροή των γεγονότων.

### Πηγές & Επιρροές
- Albert Einstein — *Relativity: The Special and the General Theory*
- Carlo Rovelli — *The Order of Time*
- Julian Barbour — *The End of Time*
- Sean Carroll — *From Eternity to Here*
- J. A. Wheeler & B. DeWitt — *Quantum Geometrodynamics* (1967)`
          },
          {
            id: '02',
            slug: 'is-time-fundamental-or-emergent',
            title: 'Είναι ο Χρόνος Θεμελιώδης ή Αναδυόμενος;',
            date: '2024-09-04',
            excerpt: 'Όσο βαθύτερα ερευνούμε τη φυσική, τόσο περισσότερο ο χρόνος φαίνεται να διαλύεται. Σε πολλές εξισώσεις κβαντικής βαρύτητας, ο χρόνος δεν εμφανίζεται καθόλου.',
            content: `Όσο βαθύτερα ερευνούμε τη φυσική, τόσο περισσότερο ο χρόνος φαίνεται να διαλύεται. Σε πολλές εξισώσεις κβαντικής βαρύτητας, ο χρόνος δεν εμφανίζεται καθόλου. Η εξίσωση Wheeler–DeWitt \\( \\hat{H}\\Psi = 0 \\) είναι άχρονη — το σύμπαν ως μια στατική διαμόρφωση όλων των πιθανών καταστάσεων.

Πώς, λοιπόν, βιώνουμε τη ροή; Η θερμοδυναμική προσφέρει μια ένδειξη. Ο **δεύτερος νόμος της εντροπίας**
\\[
\\Delta S \\ge 0
\\]
ορίζει μια κατεύθυνση — το *βέλος του χρόνου*. Η εντροπία αυξάνεται επειδή υπάρχουν πολύ περισσότερες άτακτες καταστάσεις από ό,τι τακτοποιημένες. Η αίσθηση του περάσματος του χρόνου θα μπορούσε να προκύψει από τη στατιστική τάση των συστημάτων να κινούνται προς την ισορροπία.

Μια άλλη πρόταση είναι ότι ο χρόνος αναδύεται από την **κβαντική διεμπλοκή**. Αν δύο υποσυστήματα \\( A \\) και \\( B \\) είναι συσχετισμένα, ο ανηγμένος πίνακας πυκνότητας για το \\( A \\) εξελίσσεται σαν να υπάρχει χρόνος:
\\[
\\rho_A(t) = \\text{Tr}_B \\big( e^{-iHt/\\hbar} \\rho_{AB} e^{iHt/\\hbar} \\big).
\\]
Χωρίς αλληλεπίδραση, δεν υπάρχει «πριν» ή «μετά».

Ίσως λοιπόν ο χρόνος δεν είναι ένα παγκόσμιο υπόβαθρο αλλά μια αναδυόμενη παράμετρος της σχεσιακής αλλαγής — ένα μέτρο συσχέτισης, όχι μια ανεξάρτητη ροή.

### Πηγές & Επιρροές
- Carlo Rovelli — *Quantum Gravity*
- Lee Smolin — *Time Reborn*
- S. Lloyd — “The Computational Universe”
- Eddington — *The Nature of the Physical World*
- Ludwig Boltzmann — foundational papers on entropy (1877)`
          },
          {
            id: '03',
            slug: 'reconcile-quantum-mechanics-and-general-relativity',
            title: 'Μπορούμε να Συμφιλιώσουμε την Κβαντική Μηχανική και τη Γενική Σχετικότητα;',
            date: '2024-09-03',
            excerpt: 'Η κβαντική μηχανική και η σχετικότητα είναι και οι δύο σωστές — αλλά μιλούν ασύμβατες γλώσσες.',
            content: `Η κβαντική μηχανική και η σχετικότητα είναι και οι δύο σωστές — αλλά μιλούν ασύμβατες γλώσσες.
- **Κβαντική θεωρία**: πιθανοκρατική, γραμμική, διέπεται από την εξίσωση του Schrödinger
  \\[
  i\\hbar \\frac{\\partial \\Psi}{\\partial t} = \\hat{H}\\Psi.
  \\]
- **Γενική σχετικότητα**: ντετερμινιστική, γεωμετρική, διέπεται από τις εξισώσεις πεδίου του Einstein
  \\[
  G_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}.
  \\]

Σε συνηθισμένες κλίμακες, και οι δύο λειτουργούν τέλεια. Αλλά κοντά σε ανωμαλίες — μαύρες τρύπες, τη Μεγάλη Έκρηξη — έρχονται σε αντίθεση μεταξύ τους. Η ενοποίησή τους σημαίνει την κβάντωση της ίδιας της βαρύτητας.

### Θεωρία Χορδών
Υποθέτει θεμελιώδεις 1-D «χορδές» των οποίων οι δονήσεις παράγουν όλα τα σωματίδια.
Η κεντρική της σχέση:
\\[
E = \\frac{hc}{\\lambda}
\\]
και η συνέπεια απαιτεί **10 ή 11 διαστάσεις**. Η βαρύτητα αναδύεται φυσικά από τις κλειστές χορδές (το βαρυτόνιο).

### Κβαντική Βαρύτητα Βρόχων
Θεωρεί τον χωροχρόνο διακριτό. Οι τελεστές εμβαδού και όγκου έχουν κβαντισμένα φάσματα:
\\[
A = 8\\pi\\gamma l_P^2 \\sum_i \\sqrt{j_i(j_i + 1)},
\\]
όπου \\( l_P = \\sqrt{\\frac{G\\hbar}{c^3}} \\) είναι το μήκος Planck.

Πιστεύω ότι η ενοποίηση μπορεί να απαιτεί μια ριζική αλλαγή — ίσως η γεωμετρία και τα κβαντικά πεδία είναι και τα δύο αναδυόμενα από βαθύτερες πληροφοριακές αρχές. Όταν βρούμε αυτή την κοινή γλώσσα, ο «χώρος», ο «χρόνος» και η «ύλη» μπορεί να αποκαλυφθούν όλοι ως σκιές μιας εξίσωσης που δεν έχει γραφτεί ακόμα.

### Πηγές & Επιρροές
- Brian Greene — *The Elegant Universe*
- Carlo Rovelli — *Reality Is Not What It Seems*
- Lee Smolin — *Three Roads to Quantum Gravity*
- Roger Penrose — *The Road to Reality*
- Edward Witten — key string theory papers (1984–1995)`
          },
          {
            id: '04',
            slug: 'what-happens-inside-a-black-hole',
            title: 'Τι Συμβαίνει Μέσα σε μια Μαύρη Τρύπα — Χάνεται η Πληροφορία;',
            date: '2024-09-02',
            excerpt: 'Στη γενική σχετικότητα, η μετρική Schwarzschild ορίζει τον χωροχρόνο γύρω από μια μη περιστρεφόμενη μαύρη τρύπα.',
            content: `Στη γενική σχετικότητα, η μετρική Schwarzschild ορίζει τον χωροχρόνο γύρω από μια μη περιστρεφόμενη μαύρη τρύπα:
\\[
ds^2 = -\\left(1 - \\frac{2GM}{rc^2}\\right)c^2dt^2 + \\left(1 - \\frac{2GM}{rc^2}\\right)^{-1}dr^2 + r^2d\\Omega^2.
\\]
Στην ακτίνα Schwarzschild
\\[
r_s = \\frac{2GM}{c^2},
\\]
ο χρόνος σταματά και η διαφυγή καθίσταται αδύνατη.

Η κβαντική μηχανική, ωστόσο, λέει ότι η πληροφορία δεν μπορεί να καταστραφεί. Ωστόσο, η ανακάλυψη του Hawking για την **ακτινοβολία των μαύρων τρυπών**
\\[
T_H = \\frac{\\hbar c^3}{8\\pi GMk_B}
\\]
υποδηλώνει ότι οι μαύρες τρύπες εξατμίζονται — προφανώς σβήνοντας πληροφορίες. Αυτό το «παράδοξο της πληροφορίας» ανάγκασε τη φυσική να επανεξετάσει την ίδια τη φύση του χώρου και των δεδομένων.

Η **ολογραφική αρχή** προσφέρει λύση: όλες οι πληροφορίες που καταπίνονται από μια μαύρη τρύπα είναι κωδικοποιημένες στην επιφάνειά της, όχι στον όγκο της. Η μέγιστη εντροπία είναι
\\[
S = \\frac{k_B A}{4 l_P^2}.
\\]
Έτσι, οι μαύρες τρύπες μπορεί να είναι κοσμικοί σκληροί δίσκοι — συμπιέζοντας δεδομένα στην κλίμακα του Planck.

Πιστεύω ότι οι μαύρες τρύπες δεν είναι τέλος αλλά αρχεία — όπου η ύλη, η ενέργεια και η πληροφορία ξαναγράφονται στη γλώσσα της γεωμετρίας. Είναι η μνήμη του σύμπαντος.

### Πηγές & Επιρροές
- Stephen Hawking — *A Brief History of Time*; “Black Hole Explosions?” (1974)
- Jacob Bekenstein — *Black Holes and Entropy* (1973)
- Leonard Susskind — *The Black Hole War*
- Gerard ’t Hooft — *Dimensional Reduction in Quantum Gravity*
- Juan Maldacena — “The Holographic Principle” (1997)`
          },
          {
            id: '05',
            slug: 'are-there-undiscovered-dimensions',
            title: 'Υπάρχουν Ανεξερεύνητες Διαστάσεις Πέρα από τις Γνωστές Τέσσερις;',
            date: '2024-09-01',
            excerpt: 'Βιώνουμε τρεις χωρικές διαστάσεις και μία του χρόνου, αλλά τα μαθηματικά της σύγχρονης φυσικής υποδηλώνουν περισσότερες.',
            content: `Βιώνουμε τρεις χωρικές διαστάσεις και μία του χρόνου, αλλά τα μαθηματικά της σύγχρονης φυσικής υποδηλώνουν περισσότερες.

Στη **θεωρία χορδών**, η συνέπεια απαιτεί δέκα διαστάσεις· στην **M-θεωρία**, έντεκα. Οι επιπλέον διαστάσεις είναι συμπαγοποιημένες σε κλίμακες κοντά στο μήκος Planck \\( l_P \\approx 1.6 \\times 10^{-35}\\,\\text{m} \\).

Η ενέργεια ενός τρόπου δόνησης μιας χορδής είναι
\\[
E_n = \\frac{n\\hbar c}{L},
\\]
έτσι οι δονήσεις σε υψηλότερες διαστάσεις θα μπορούσαν να εκδηλωθούν ως βαρύτερα σωματίδια. Ορισμένες θεωρίες προβλέπουν διεγέρσεις «Kaluza–Klein» — απόηχους κρυμμένων διαστάσεων ανιχνεύσιμους σε υψηλές ενέργειες.

Ακόμη και η γενική σχετικότητα επιτρέπει την πιθανότητα. Μια πενταδιάστατη μετρική που συνδυάζει βαρύτητα και ηλεκτρομαγνητισμό προτάθηκε από τον Theodor Kaluza (1921):
\\[
R_{AB} = 0 \\quad (A,B = 0...4).
\\]
Όταν συμπαγοποιηθεί, αποδίδει τις εξισώσεις του Einstein συν τις εξισώσεις του Maxwell — μια πρώιμη ένδειξη ότι οι επιπλέον διαστάσεις ενοποιούν τις δυνάμεις.

Πιστεύω ότι οι αθέατες διαστάσεις μπορεί να μην είναι «μέρη» αλλά μαθηματικοί βαθμοί ελευθερίας — οι αθέατες συμμετρίες της πραγματικότητας διπλωμένες σφιχτά μέσα σε κάθε σημείο του χώρου.

### Πηγές & Επιρροές
- Theodor Kaluza — *On the Problem of Unity in Physics* (1921)
- Oskar Klein — *Quantum Theory and Five-Dimensional Relativity* (1926)
- Edward Witten — *String Theory Dynamics in Various Dimensions* (1995)
- Brian Greene — *The Elegant Universe*
- Michio Kaku — *Hyperspace*`
          },
          {
            id: '06',
            slug: 'why-are-the-laws-of-physics-the-way-they-are',
            title: 'Γιατί οι Νόμοι της Φυσικής Είναι Έτσι όπως Είναι;',
            date: '2024-08-31',
            excerpt: 'Κάθε εξίσωση φαίνεται τελειοποιημένη για την ύπαρξη. Η ισχύς της βαρύτητας G, η σταθερά λεπτής υφής α ≈ 1/137, και η κοσμολογική σταθερά Λ είναι ισορροπημένες με εκπληκτική ακρίβεια.',
            content: `Κάθε εξίσωση φαίνεται τελειοποιημένη για την ύπαρξη. Η ισχύς της βαρύτητας \\( G \\), η σταθερά λεπτής υφής \\( \\alpha \\approx 1/137 \\), και η κοσμολογική σταθερά \\( \\Lambda \\) είναι ισορροπημένες με εκπληκτική ακρίβεια.

Αν το \\( \\alpha \\) ήταν ελαφρώς διαφορετικό, σταθερά άτομα δεν θα σχηματίζονταν· αν το \\( \\Lambda \\) ήταν μεγαλύτερο, οι γαλαξίες δεν θα συνενώνονταν ποτέ. Είναι αυτές οι τιμές τυχαίες ή αναγκαίες;

Ορισμένοι φυσικοί επικαλούνται την **ανθρωπική επιλογή**: σε ένα πολυσύμπαν πιθανοτήτων, μόνο εκείνα με ζωή μπορούν να ρωτήσουν γιατί. Άλλοι υποψιάζονται βαθύτερη αναγκαιότητα — αρχές συμμετρίας κωδικοποιημένες σε εξισώσεις όπως
\\[
\\mathcal{L} = -\\frac{1}{4}F_{\\mu\\nu}F^{\\mu\\nu}
\\]
ή τη δράση Einstein–Hilbert
\\[
S = \\frac{c^3}{16\\pi G} \\int R \\sqrt{-g}\\, d^4x.
\\]

Πιστεύω ότι οι νόμοι είναι η ποίηση της πραγματικότητας — μοτίβα που επαναλαμβάνονται επειδή είναι αυτοσυνεπή. Είτε θεϊκοί, τυχαίοι, ή μαθηματικοί, αντιπροσωπεύουν το ένα πράγμα που το σύμπαν δεν μπορεί να σπάσει: τη δική του συνοχή.

### Πηγές & Επιρροές
- Paul Davies — *The Mind of God*
- Lee Smolin — *The Life of the Cosmos*
- Roger Penrose — *The Road to Reality*
- Max Tegmark — *Our Mathematical Universe*
- Stephen Hawking — *The Grand Design*`
          },
          {
            id: '07',
            slug: 'the-parabola-quadratic-equations',
            title: 'Η Παραβολή: Ένα Οπτικό Ταξίδι στις Δευτεροβάθμιες Εξισώσεις',
            date: '2024-08-30',
            excerpt: 'Από την τροχιά μιας μπάλας που πετιέται μέχρι το σχήμα ενός δορυφορικού πιάτου, η παραβολή είναι παντού. Ας εξερευνήσουμε την απλή αλλά ισχυρή δευτεροβάθμια εξίσωση πίσω από αυτή την κομψή καμπύλη.',
            content: `Από την τροχιά μιας μπάλας που πετιέται μέχρι το σχήμα ενός δορυφορικού πιάτου, η παραβολή είναι παντού. Αυτή η κομψή καμπύλη περιγράφεται από μια απλή αλλά ισχυρή αλγεβρική παράσταση: τη δευτεροβάθμια εξίσωση.

Μια **δευτεροβάθμια εξίσωση** είναι οποιαδήποτε εξίσωση μπορεί να αναδιαταχθεί στην τυπική μορφή ως
\\[
ax^2 + bx + c = 0
\\]
όπου το \\(x\\) αντιπροσωπεύει έναν άγνωστο, και τα \\(a\\), \\(b\\), και \\(c\\) αντιπροσωπεύουν γνωστούς αριθμούς, όπου \\(a \\neq 0\\). Το γράφημα μιας δευτεροβάθμιας συνάρτησης \\(f(x) = ax^2 + bx + c\\) είναι μια παραβολή.

Οι **συντελεστές** παίζουν καθοριστικό ρόλο:
- Το \\(a\\) καθορίζει αν η παραβολή ανοίγει προς τα πάνω (\\(a > 0\\)) ή προς τα κάτω (\\(a < 0\\)).
- Το \\(b\\) μετατοπίζει τον άξονα συμμετρίας.
- Το \\(c\\) είναι το σημείο τομής με τον άξονα y, όπου η καμπύλη τέμνει τον κατακόρυφο άξονα.

Για να βρούμε πού η παραβολή τέμνει τον άξονα x (τις ρίζες της εξίσωσης), χρησιμοποιούμε τον **τύπο της δευτεροβάθμιας εξίσωσης**:
\\[
x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}
\\]

Παρακάτω υπάρχει ένα διαδραστικό γράφημα της συνάρτησης \\(f(x) = x^2 - 2x - 3\\). Μπορείτε να δείτε πώς το σχήμα της αντιστοιχεί στους συντελεστές \\(a=1, b=-2, c=-3\\).

<div class="chart-container">
  <canvas id="parabola-chart" data-chart-function="parabola" data-a="1" data-b="-2" data-c="-3"></canvas>
</div>

Η κατανόηση της παραβολής είναι μια πύλη για την κατανόηση πιο σύνθετων συστημάτων στη φυσική, τη μηχανική, ακόμη και στα οικονομικά.`
          },
          {
            id: '08',
            slug: 'simple-harmonic-motion',
            title: 'Ο Ρυθμός του Σύμπαντος: Απλή Αρμονική Ταλάντωση',
            date: '2024-08-29',
            excerpt: 'Από ένα εκκρεμές που αιωρείται μέχρι τις δονήσεις μιας χορδής κιθάρας, πολλά φαινόμενα στο σύμπαν μας ακολουθούν ένα απλό, επαναλαμβανόμενο μοτίβο. Αυτός είναι ο χορός της Απλής Αρμονικής Ταλάντωσης.',
            content: `Από ένα εκκρεμές που αιωρείται μέχρι τις δονήσεις μιας χορδής κιθάρας, πολλά φαινόμενα στο σύμπαν μας ακολουθούν ένα απλό, επαναλαμβανόμενο μοτίβο. Αυτός είναι ο χορός της **Απλής Αρμονικής Ταλάντωσης (ΑΑΤ)**.

Η ΑΑΤ συμβαίνει όταν η δύναμη επαναφοράς που δρα σε ένα αντικείμενο είναι ευθέως ανάλογη της μετατόπισης του αντικειμένου από τη θέση ισορροπίας του. Αυτή η σχέση περιγράφεται από τον Νόμο του Hooke:
\\[
F = -kx
\\]
όπου \\(F\\) είναι η δύναμη επαναφοράς, \\(x\\) είναι η μετατόπιση, και \\(k\\) είναι μια θετική σταθερά γνωστή ως σταθερά δύναμης.

Η λύση αυτής της εξίσωσης κίνησης περιγράφει τη θέση του αντικειμένου με την πάροδο του χρόνου, η οποία αποδεικνύεται ότι είναι μια ημιτονοειδής συνάρτηση:
\\[
x(t) = A \\cos(\\omega t + \\phi)
\\]
Αυτή η εξίσωση έχει τρεις βασικές παραμέτρους:
- **Πλάτος (\\(A\\))**: Η μέγιστη μετατόπιση από τη θέση ισορροπίας.
- **Γωνιακή Συχνοτήτα (\\(\\omega\\))**: Σχετίζεται με το πόσο γρήγορα συμβαίνουν οι ταλαντώσεις (\\(\\omega = 2\\pi f\\)).
- **Φάση (\\(\\phi\\))**: Καθορίζει την αρχική θέση του αντικειμένου τη χρονική στιγμή \\(t=0\\).

Παρακάτω είναι ένα γράφημα που απεικονίζει τη θέση ενός αντικειμένου σε Απλή Αρμονική Ταλάντωση με την πάροδο του χρόνου. Αυτό το χαρακτηριστικό κυματοειδές μοτίβο είναι ο θεμελιώδης ρυθμός που βρίσκεται στο φως, τον ήχο και αμέτρητα άλλα φυσικά συστήματα.

<div class="chart-container">
  <canvas id="sine-wave-chart" data-chart-function="sine" data-amplitude="5" data-frequency="1"></canvas>
</div>

Η ΑΑΤ είναι ένας ακρογωνιαίος λίθος της φυσικής, παρέχοντας το θεμελιώδες μοντέλο για την κατανόηση των κυμάτων και των ταλαντώσεων.`
          },
          {
            id: '09',
            slug: 'golden-ratio-architecture',
            title: 'Η Χρυσή Τομή: Το Σχέδιο της Φύσης για το Design',
            date: '2024-08-28',
            excerpt: 'Εξερευνήστε τη Χρυσή Τομή (φ), το μαθηματικό κλειδί της ομορφιάς που βρίσκεται στη φύση, την τέχνη και την κλασική αρχιτεκτονική. Μάθετε πώς αυτή η διαχρονική αρχή δημιουργεί αρμονία και αναλογία.',
            content: `Η **Χρυσή Τομή**, που συχνά συμβολίζεται με το ελληνικό γράμμα φι (φ), είναι ένας άρρητος αριθμός περίπου ίσος με 1.618. Είναι μια μαθηματική αρχή που εμφανίζεται με εκπληκτική συχνότητα στη φύση, από τη σπείρα ενός ναυτίλου μέχρι τη διάταξη των σπόρων σε έναν ηλίανθο. Για αιώνες, καλλιτέχνες, σχεδιαστές και αρχιτέκτονες τη χρησιμοποίησαν ως εργαλείο για να δημιουργήσουν αισθητικά ευχάριστες και αρμονικές συνθέσεις.

Η αναλογία προέρχεται από μια απλή γεωμετρική σχέση. Ένα ευθύγραμμο τμήμα χωρίζεται σε δύο μέρη διαφορετικού μήκους, έτσι ώστε ο λόγος ολόκληρου του τμήματος προς το μακρύτερο τμήμα να είναι ίσος με το λόγο του μακρύτερου τμήματος προς το βραχύτερο.
\\[
\\frac{a+b}{a} = \\frac{a}{b} \\equiv \\phi
\\]
Αυτή η αναλογία πιστεύεται ότι είναι εγγενώς ισορροπημένη και ευχάριστη στο ανθρώπινο μάτι.

Στην **αρχιτεκτονική**, η Χρυσή Τομή μπορεί να βρεθεί στις αναλογίες ορισμένων από τα πιο εμβληματικά κτίρια της ιστορίας. Ο Παρθενώνας στην Αθήνα αναφέρεται συχνά ως χαρακτηριστικό παράδειγμα, όπου οι διαστάσεις της πρόσοψής του λέγεται ότι προσεγγίζουν ένα χρυσό ορθογώνιο. Σύγχρονοι αρχιτέκτονες όπως ο Le Corbusier ενσωμάτωσαν επίσης αυτή την αναλογία στο έργο τους, χρησιμοποιώντας την για να καθορίσουν τις αναλογίες των σχεδιαγραμμάτων και των όψεων των κτιρίων.

Παρακάτω είναι μια απλή οπτικοποίηση της Χρυσής Τομής ως δύο ευθύγραμμα τμήματα.

<div class="chart-container">
  <canvas id="golden-ratio-chart" data-chart-function="golden-ratio"></canvas>
</div>

Είτε χρησιμοποιείται συνειδητά είτε διαισθητικά, η Χρυσή Τομή λειτουργεί ως ένας διαχρονικός οδηγός, υπενθυμίζοντάς μας ότι η ομορφιά έχει συχνά μαθηματική βάση. Είναι μια γέφυρα μεταξύ του αφηρημένου κόσμου των αριθμών και του απτού κόσμου του σχεδιασμού.`
          },
          {
            id: '10',
            slug: 'brutalism-architecture',
            title: 'Μπρουταλισμός: Η Ποίηση του Γυμνού Σκυροδέματος',
            date: '2024-08-27',
            excerpt: 'Από αμφιλεγόμενα μνημεία μέχρι διάσημους πολιτιστικούς κόμβους, ο Μπρουταλισμός είναι ένα αρχιτεκτονικό στυλ που απαιτεί προσοχή. Ανακαλύψτε τη φιλοσοφία πίσω από τις ακατέργαστες, ειλικρινείς μορφές του.',
            content: `Γεννημένος από τη μεταπολεμική εποχή στα μέσα του 20ού αιώνα, ο **Μπρουταλισμός** είναι ένα αρχιτεκτονικό στυλ που χαρακτηρίζεται από τη χρήση ακατέργαστου, εκτεθειμένου σκυροδέματος ('béton brut' στα γαλλικά, που έδωσε στο κίνημα το όνομά του). Είναι ένα στυλ που δίνει προτεραιότητα στην ειλικρίνεια του υλικού, της μορφής και της λειτουργίας, καταλήγοντας συχνά σε ογκώδεις, κυβικές και οπτικά βαριές κατασκευές.

Ο Μπρουταλισμός εμφανίστηκε ως αντίδραση στην αντιληπτή επιπολαιότητα και ανειλικρίνεια των προηγούμενων αρχιτεκτονικών στυλ. Αρχιτέκτονες όπως ο Le Corbusier προώθησαν ένα νέο είδος σχεδιασμού που ήταν αληθινό στην κατασκευή του. Οι βασικές αρχές περιλαμβάνουν:
- **Ειλικρίνεια Υλικού**: Εκτεθειμένο σκυρόδεμα, τούβλο, ατσάλι και γυαλί. Η υφή του ξύλινου καλουπιού που χρησιμοποιήθηκε για τη χύτευση του σκυροδέματος συχνά παραμένει ορατή.
- **Δομική Έκφραση**: Τα δομικά στοιχεία του κτιρίου είναι συχνά ορατά και αποτελούν βασικό μέρος της αισθητικής.
- **Μνημειακές Μορφές**: Τα μπρουταλιστικά κτίρια είναι συνήθως μεγάλης κλίμακας και χρησιμοποιούν τολμηρά, γεωμετρικά σχήματα.

Για δεκαετίες, ο Μπρουταλισμός επικρίθηκε έντονα ως ψυχρός, απάνθρωπος και άσχημος. Πολλά εμβληματικά μπρουταλιστικά κτίρια περιέπεσαν σε αχρηστία ή κατεδαφίστηκαν. Ωστόσο, τα τελευταία χρόνια, παρατηρείται μια σημαντική αναζωπύρωση του ενδιαφέροντος για το στυλ. Μια νέα γενιά αρχιτεκτόνων και λάτρεις του design έχουν αρχίσει να εκτιμούν τις ισχυρές του μορφές, τα ουτοπικά κοινωνικά του ιδεώδη και το ασυμβίβαστο όραμά του.

Από πανεπιστημιακές βιβλιοθήκες και κυβερνητικά κτίρια μέχρι έργα κοινωνικής κατοικίας, η μπρουταλιστική αρχιτεκτονική αποτελεί μια μαρτυρία μιας εποχής φιλόδοξης, και συχνά ριζοσπαστικής, σκέψης για το πώς ζούμε και χτίζουμε μαζί.`
          },
        ]
    }
  }
};