export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  metrics: string;
  bgClass: string;
  tag: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  category: 'D2C Brand Scale' | 'Creator Personal Brand' | 'Startup Launch' | 'Reels & Shorts';
  badge: string;
  title: string;
  problem: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    change?: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  tags: string[];
  growthMultiplier: string;
  colorScheme: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface AuditFormState {
  stage: string;
  growthGoal: string;
  budgetRange: string;
  timeline: string;
  name: string;
  email: string;
  whatsapp: string;
  brandLink: string;
  notes: string;
}
