export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
}

export interface WorkExperienceData {
  id: string;
  role: string;
  company: string;
  period: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  url: string;
}

export interface SocialLink {
    platform: string;
    url: string;
}

export interface ConnectInfo {
    email: string;
    socialLinks: SocialLink[];
}

// FIX: Add EruptionData interface for EruptionsSection component.
export interface EruptionData {
  id: string;
  name: string;
  location: string;
  date: string;
  level: string;
}

// FIX: Add EventData interface for EventsSection component.
export interface EventData {
  id: string;
  date1: string;
  date2: string;
  code: string;
  date3: string;
}
