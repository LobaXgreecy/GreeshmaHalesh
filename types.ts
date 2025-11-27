export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string; // Optional now as some might not have links
  liveUrl?: string;
  featured?: boolean;
  size?: 'normal' | 'large' | 'tall' | 'wide';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  coursework?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ViewMode {
  GRID = 'GRID',
  LIST = 'LIST'
}