import type { PersonalInfo, WorkExperienceData, ProjectData, ConnectInfo, EruptionData, EventData } from './types';

export const personalInfo: PersonalInfo = {
  name: "Dimitris Vatistas",
  title: "Web Developer & Web Designer",
  bio: "I'm Dimitris Vatistas, a developer and designer passionate about crafting digital products that balance aesthetics with functionality. My work spans the full creative and technical process — from wireframing in Figma and prototyping in Framer, to building production-ready applications in React and Next.js."
};

export const workExperience: WorkExperienceData[] = [
  { id: '01', role: "Founder & CEO", company: "QRoyal", period: "2023 - Present" },
  { id: '02', role: "Developer", company: "AI Beauty", period: "2022 - 2023" },
  { id: '03', role: "Developer", company: "AI Age Verification", period: "2022" },
  { id: '04', role: "Student", company: "High School & Further Education", period: "2021 - Present" }
];

export const connect: ConnectInfo = {
  email: "vatistasdim.ae@icloud.com",
  socialLinks: [
    { platform: "X", url: "https://x.com/vatistasdim" },
    { platform: "Instagram", url: "https://www.instagram.com/vatistasdimitris/" }
  ]
};

export const projects: ProjectData[] = [
  { id: '01', title: "GenGlow", description: "An AI-powered platform that generates personalized skincare routines based on user preferences and skin profiles.", url: "https://genglow.vercel.app/" },
  { id: '02', title: "MoodMenu", description: "A smart menu generator that creates meal recommendations based on mood and dietary preferences.", url: "https://moodmenu.vercel.app/" },
  { id: '03', title: "QBIT AI", description: "An AI-powered assistant designed to help users manage tasks and queries efficiently.", url: "https://qbitai.vercel.app/" },
  { id: '04', title: "ImageFM", description: "A creative AI platform that generates images from user prompts with a music-inspired twist.", url: "https://imagefm.vercel.app/" },
  { id: '05', title: "AI Digrm", description: "An AI diagram generator that converts text into structured, visual diagrams instantly.", url: "https://ai-digrm.vercel.app/" },
  { id: '06', title: "Fortnite Vibe Coder", description: "A playful project that codes custom Fortnite-inspired 'vibes' into experiences.", url: "https://fortnitevibecoder.vercel.app/" },
  { id: '07', title: "QRoyal", description: "A smart digital loyalty program that replaces physical cards with one universal QR-based pass.", url: "https://qroyal.vercel.app/" },
  { id: '08', title: "AI Age Verification", description: "A secure, privacy-first system for frictionless AI-based age verification.", url: "https://ai-age-verification.vercel.app/" }
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
