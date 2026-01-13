
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export type AgencyService = 
  | 'Website Design & Development' 
  | 'Search Engine Optimisation (SEO)' 
  | 'Social Media Marketing' 
  | 'Paid Advertising (PPC)' 
  | 'Content & Lead Generation' 
  | 'AI Automation';

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone?: string;
  serviceType: AgencyService;
  preferredDate: string; // YYYY-MM-DD
  preferredTimeSlot: string; // e.g., "09:00 - 10:00"
  projectDetails: string;
  status: 'new' | 'confirmed' | 'cancelled';
  timestamp: string;
}

export enum Page {
  Home = '/',
  About = '/about',
  Services = '/services',
  Portfolio = '/portfolio',
  Blog = '/blog',
  Contact = '/contact',
  Booking = '/book',
  Brief = '/brief',
  Admin = '/admin',
  Privacy = '/privacy',
  DataProtection = '/data-protection',
  TermsOfService = '/terms'
}
