export type Locale = "ko" | "en";

export type LinkItem = {
  label: string;
  href: string;
};

export type LocalizedText = Record<Locale, string>;

export type LocalizedList = Record<Locale, string[]>;

export type SkillItem = {
  name: string;
  iconKey: string;
  description: LocalizedText;
};

export type SkillCategory = {
  title: LocalizedText;
  items: SkillItem[];
};

export type PortfolioItem = {
  title: string;
  description: LocalizedText;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
};

export type ProjectItem = {
  title: string;
  role: LocalizedText;
  problem: LocalizedText;
  approach: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedList;
  githubUrl: string;
};

export type ExperienceItem = {
  period: string;
  company: string;
  position: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedList;
};

export type EducationItem = {
  period: string;
  institution: string;
  program: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedList;
};
