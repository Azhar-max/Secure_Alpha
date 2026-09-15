export type TrackCategory = 'all' | 'web' | 'python' | 'sqa' | 'security';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
  sla: string;
  architectureDetails: string;
}

export interface CaseStudy {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  domain: string;
  challenge: string;
  solution: string;
  flowDiagram: string;
  metrics: {
    primaryValue: string;
    primaryLabel: string;
    secondaryValue: string;
    secondaryLabel: string;
  };
  stack: string[];
}

export interface Course {
  id: string;
  title: string;
  category: 'web' | 'python' | 'sqa' | 'security';
  level: string;
  rating: number;
  reviewsCount: number;
  description: string;
  duration: string;
  deliverables: string;
  format: string;
  certification: string;
  price: number;
  syllabus: {
    week: string;
    topic: string;
    lab: string;
  }[];
}

export interface LearningPathStep {
  step: string;
  phase: string;
  title: string;
  description: string;
}

export interface LearningPath {
  id: string;
  code: string;
  title: string;
  timeline: string;
  steps: LearningPathStep[];
}

export interface StudentCapstone {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  year: string;
  author: string;
  authorOutcome: string;
  githubUrl: string;
  liveDemoUrl: string;
  techTags: string[];
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  bio: string;
  teaches: string[];
  credential: string;
  handle: string;
}

export interface VerifiedCertificate {
  id: string;
  recipient: string;
  course: string;
  date: string;
  grade: string;
  hash: string;
  status: 'valid' | 'revoked';
}

export interface AssessmentProfile {
  experience: 'none' | 'basic' | 'intermediate' | 'pro';
  interest: 'web' | 'sqa' | 'python' | 'sec';
  hours: '8' | '15' | '30';
}
