import type {
  ExperienceItem,
  LinkItem,
  PortfolioItem,
  SkillCategory,
  TimelineItem,
} from "../types";
import type { Locale, ProjectItem } from "../types";

export const profile = {
  name: "Inchoi",
  headline: {
    ko: "기록하고 정리하며 성장하는 개발자",
    en: "A developer who builds, documents, and keeps improving",
  },
  intro: {
    ko: "프로젝트의 맥락을 이해하고, 사용자에게 오래 남는 경험을 만드는 데 집중합니다. 이 페이지는 React 중심 스택으로 만든 개인 소개 사이트의 시작점입니다.",
    en: "I focus on understanding product context and creating experiences that stay useful over time. This site is a React-based starting point for my personal profile and portfolio.",
  },
  email: "hello@replace-this.dev",
  location: {
    ko: "Seoul, South Korea",
    en: "Seoul, South Korea",
  },
  photoPath: "/profile-placeholder.svg",
  resumeLinks: {
    ko: {
      label: "이메일 보내기",
      href: "mailto:hello@replace-this.dev",
    },
    en: {
      label: "Send email",
      href: "mailto:hello@replace-this.dev",
    },
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/InryeolChoi",
    },
    {
      label: "Email",
      href: "mailto:hello@replace-this.dev",
    },
  ] satisfies LinkItem[],
};

export const skillCategories: SkillCategory[] = [
  {
    title: {
      ko: "Frontend",
      en: "Frontend",
    },
    items: ["React", "TypeScript", "Vite", "Motion", "CSS Modules"],
  },
  {
    title: {
      ko: "Backend",
      en: "Backend",
    },
    items: ["Node.js", "Express", "REST API", "Auth", "Data Modeling"],
  },
  {
    title: {
      ko: "Workflow",
      en: "Workflow",
    },
    items: ["GitHub Actions", "Testing", "Docs", "Agile Collaboration"],
  },
];

export const timelineItems: TimelineItem[] = [
  {
    period: "2026",
    title: {
      ko: "개인 브랜딩 사이트 리뉴얼",
      en: "Personal branding site refresh",
    },
    subtitle: {
      ko: "React 포트폴리오 재구성",
      en: "React portfolio redesign",
    },
    summary: {
      ko: "프로필, 경력, 프로젝트, 포트폴리오를 한눈에 볼 수 있도록 정보 구조를 다시 설계했습니다.",
      en: "Reframed the information architecture so profile, experience, projects, and portfolio can be understood at a glance.",
    },
  },
  {
    period: "2025",
    title: {
      ko: "학습 및 기록 시스템 확장",
      en: "Learning and note system expansion",
    },
    subtitle: {
      ko: "지식 정리 워크플로우 개선",
      en: "Improved knowledge organization workflow",
    },
    summary: {
      ko: "문서화와 자동화를 결합해 학습 내용을 더 빠르게 축적하고 공유할 수 있는 흐름을 만들었습니다.",
      en: "Combined documentation and automation to capture and share learning more effectively.",
    },
  },
  {
    period: "2024",
    title: {
      ko: "프로젝트 실험 집중",
      en: "Focused on project experimentation",
    },
    subtitle: {
      ko: "작은 제품을 빠르게 만들고 검증",
      en: "Built and validated small products quickly",
    },
    summary: {
      ko: "작은 단위의 서비스와 UI 실험을 반복하며 개발 속도와 설계 감각을 함께 키웠습니다.",
      en: "Iterated on small services and UI experiments to improve both delivery speed and product sense.",
    },
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Active Recall Quiz",
    description: {
      ko: "학습 노트를 기반으로 문제를 만들고 복습 흐름을 돕는 프로젝트입니다.",
      en: "A study-focused project that turns notes into quiz flows and supports active recall.",
    },
    techStack: ["React", "Next.js", "Python", "GitHub Actions"],
    githubUrl: "https://github.com/InryeolChoi/active-recall-quiz",
  },
  {
    title: "Profile Site",
    description: {
      ko: "개인 브랜딩과 작업 이력을 정리하기 위한 GitHub Pages 기반 포트폴리오 사이트입니다.",
      en: "A GitHub Pages portfolio site for personal branding and organizing work history.",
    },
    techStack: ["React", "TypeScript", "Vite", "Motion"],
    githubUrl: "https://github.com/InryeolChoi/inchoi.github.io",
  },
];

export const projectItems: ProjectItem[] = [
  {
    title: "Portfolio System",
    role: {
      ko: "기획, 디자인, 프론트엔드 구현",
      en: "Planning, design, and frontend implementation",
    },
    summary: {
      ko: "소개 사이트를 단순 이력 나열이 아니라 스토리가 보이는 구조로 만드는 데 집중했습니다.",
      en: "Focused on turning a profile site into a structured narrative instead of a flat resume page.",
    },
    highlights: {
      ko: [
        "인트로 애니메이션과 섹션 전환으로 첫인상 강화",
        "데이터 파일 분리로 유지보수성 확보",
        "다국어 전환 구조 반영",
      ],
      en: [
        "Enhanced first impression with intro and section animations",
        "Improved maintainability by separating editable data files",
        "Added a clean language toggle structure",
      ],
    },
    githubUrl: "https://github.com/InryeolChoi/inchoi.github.io",
  },
  {
    title: "Study Workflow",
    role: {
      ko: "개발 및 콘텐츠 정리",
      en: "Development and content organization",
    },
    summary: {
      ko: "학습 자료를 더 빨리 만들고 복습 효율을 높이는 흐름을 설계했습니다.",
      en: "Designed a workflow that makes learning materials faster to build and easier to review.",
    },
    highlights: {
      ko: [
        "콘텐츠 구조 정리",
        "자동화 가능한 작업 흐름 도입",
        "지속적으로 확장 가능한 데이터 기반 설계",
      ],
      en: [
        "Organized content structure",
        "Introduced automation-friendly workflow",
        "Used data-driven design that scales over time",
      ],
    },
    githubUrl: "https://github.com/InryeolChoi/active-recall-quiz",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    period: "Update Me",
    company: "Your Team or Company",
    position: {
      ko: "현재 역할을 여기에 입력하세요",
      en: "Add your current role here",
    },
    summary: {
      ko: "이 영역은 실제 경력 정보를 채워 넣기 쉽게 남겨 둔 템플릿입니다.",
      en: "This section is intentionally left as an easy-to-edit template for your real experience.",
    },
    highlights: {
      ko: [
        "팀 이름, 직무, 기간 수정",
        "주요 성과 2~3개 정리",
        "사용 기술 또는 담당 영역 추가",
      ],
      en: [
        "Update team name, role, and period",
        "Summarize two or three key outcomes",
        "Add tech stack or ownership area",
      ],
    },
  },
];

export const sectionAnchors = [
  { id: "about", label: { ko: "소개", en: "About" } },
  { id: "skills", label: { ko: "스킬", en: "Skills" } },
  { id: "timeline", label: { ko: "타임라인", en: "Timeline" } },
  { id: "portfolio", label: { ko: "포트폴리오", en: "Portfolio" } },
  { id: "projects", label: { ko: "프로젝트", en: "Projects" } },
  { id: "experience", label: { ko: "경력", en: "Experience" } },
];

export const getLocale = (language: string): Locale =>
  language.startsWith("ko") ? "ko" : "en";
