export type Locale = "ko" | "en";

export type LinkItem = {
  label: string;
  href: string;
};

export type LocalizedText = Record<Locale, string>;

export type LocalizedList = Record<Locale, string[]>;

export type SkillCategory = {
  title: LocalizedText;
  items: string[];
};

export type TimelineItem = {
  period: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  summary: LocalizedText;
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
