import type { PersonalInfo, WorkExperienceData, ProjectData, ConnectInfo, EruptionData, EventData } from './types';

export const personalInfo: PersonalInfo = {
  name: "Dimitris Vatistas",
  title: "Web Developer & Web Designer",
  bio: "I'm Dimitris Vatistas, a developer and designer building high-performance digital products that balance aesthetics and function. I specialize in bridging the gap between design and engineering, moving from Figma prototypes to production-ready applications in React and Next.js."
};

export const workExperience: WorkExperienceData[] = [
  { id: '01', role: "Founder & CEO", company: "QRoyal", period: "2023 - 2025" },
  { id: '02', role: "Developer", company: "AI Beauty", period: "2022 - 2023" },
  { id: '03', role: "Developer", company: "AI Age Verification", period: "2022" }
];

export const connect: ConnectInfo = {
  email: "vatistasdim.ae@icloud.com",
  socialLinks: [
    { platform: "X", url: "https://x.com/vatistasdim" },
    { platform: "Instagram", url: "https://www.instagram.com/vatistasdimitris/" },
    { platform: "GitHub", url: "https://github.com/vatistasdimitris01" }
  ]
};

export const projects: ProjectData[] = [
  { id: '01', title: "CIPHER", description: "An AI coding assistant that writes, edits, and runs code in real-time with live preview.", url: "https://cipherend.vercel.app/" },
  { id: '02', title: "QRoyal", description: "A smart digital loyalty program that replaces physical cards with one universal QR-based pass.", url: "https://qroyal.vercel.app/" },
  { id: '04', title: "STRM", description: "A clean, minimalist, and completely ad-free streaming platform for movies and TV shows.", url: "https://strm-movies.vercel.app/" },
  { id: '05', title: "MY SEARCH", description: "A fast, free REST API for web search and content scraping with clean JSON output.", url: "https://mysearchengine.vercel.app/" }
];

// FIX: Add eruptions data to resolve import error in EruptionsSection.
export const eruptions: EruptionData[] = [
  { id: '01', name: "Mount Vesuvius", location: "Italy", date: "AD 79", level: "VEI 5" },
  { id: '02', name: "Krakatoa", location: "Indonesia", date: "1883", level: "VEI 6" },
  { id: '03', name: "Mount St. Helens", location: "USA", date: "1980", level: "VEI 5" },
];

// FIX: Add events data to resolve import error in EventsSection.
export const events: EventData[] = [
  { id: 'E1', date1: "2024-01-01", date2: "2024-01-02", code: "ALPHA", date3: "2024-01-03" },
  { id: 'E2', date1: "2024-02-10", date2: "2024-02-11", code: "BETA", date3: "2024-02-12" },
  { id: 'E3', date1: "2024-03-20", date2: "2024-03-21", code: "GAMMA", date3: "2024-03-22" },
];