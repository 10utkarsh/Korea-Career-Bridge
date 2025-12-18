
export type Language = 'en' | 'ko' | 'ja';

export interface Participant {
  id: string;
  name: string;
  background: string;
  skills: string[];
  experience: string;
  resumeUrl: string;
  profileImage: string;
}

export interface Inquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'contacted';
}

export interface TranslationSchema {
  nav: {
    home: string;
    participants: string;
    contact: string;
    admin: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
    subtitle: string;
  };
  auth: {
    login: string;
    logout: string;
    adminAccess: string;
  };
}
