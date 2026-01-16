
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  avatarUrl: string; // New field
  bio: string;
  aboutMe: string;
  careerGoal: string;
  strengths: string[];
  skills: SkillCategory[];
  projects: Project[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
}
