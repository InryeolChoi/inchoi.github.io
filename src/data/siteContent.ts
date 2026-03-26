import type {
  ExperienceItem,
  LinkItem,
  PortfolioItem,
  SkillCategory,
  TimelineItem,
} from "../types";
import type { Locale, ProjectItem } from "../types";

export const profile = {
  name: "Inryeol Choi",
  headline: {
    ko: "지식을 구조화하고, 다시 학습 경험으로 연결하는 개발자",
    en: "A developer who structures knowledge and turns it into learning experiences",
  },
  intro: {
    ko: "저는 기록한 지식이 다시 쓰이는 흐름에 관심이 있습니다. Markdown으로 개념을 정리하고, React로 사용자 경험을 만들고, Python과 GitHub Actions로 그 뒤의 흐름을 연결합니다. 작은 프로젝트라도 문제를 정의하고 구조를 설계한 뒤 직접 구현과 개선까지 이어 가며, 꾸준히 더 나은 학습 시스템과 개발 워크플로우를 만들고 있습니다.",
    en: "I am interested in making knowledge reusable. I organize ideas with markdown, build user experiences with React, and connect the workflow behind them with Python and GitHub Actions. Even in small projects, I like defining the problem, designing the structure, and carrying the work through implementation and iteration to build better learning systems and developer workflows.",
  },
  email: "dlsfuf0316@gmail.com",
  location: {
    ko: "Seoul, South Korea",
    en: "Seoul, South Korea",
  },
  photoPath: "/1208axx_light.jpg",
  resumeLinks: {
    ko: {
      label: "이메일 보내기",
      href: "mailto:dlsfuf0316@gmail.com",
    },
    en: {
      label: "Send email",
      href: "mailto:dlsfuf0316@gmail.com",
    },
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/InryeolChoi",
    },
    {
      label: "Email",
      href: "mailto:dlsfuf0316@gmail.com",
    },
  ] satisfies LinkItem[],
};

export const skillCategories: SkillCategory[] = [
  {
    title: {
      ko: "Frontend",
      en: "Frontend",
    },
    items: ["React", "Next.js", "TypeScript", "Vite", "Motion", "CSS Modules"],
  },
  {
    title: {
      ko: "Backend",
      en: "Backend",
    },
    items: ["Python", "FastAPI", "SQLite", "PostgreSQL", "REST API"],
  },
  {
    title: {
      ko: "Workflow",
      en: "Workflow",
    },
    items: ["GitHub Actions", "Markdown Workflow", "Testing", "Docker", "Documentation"],
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
      ko: "Active Recall Quiz 고도화",
      en: "Expanded Active Recall Quiz",
    },
    subtitle: {
      ko: "노트 동기화, 시험 흐름, 오답 복습 UX 정리",
      en: "Refined note sync, exam flow, and wrong-answer review UX",
    },
    summary: {
      ko: "외부 노트 저장소와 학습 앱의 책임을 분리하고, 동기화된 콘텐츠를 기반으로 학습/시험/채점 흐름을 구성했습니다.",
      en: "Separated note ownership from the learning app and built study, exam, and grading flows on top of synced content.",
    },
  },
  {
    period: "2024",
    title: {
      ko: "학습용 콘텐츠 저장소와 DB 실험 축적",
      en: "Built note repositories and database experiments",
    },
    subtitle: {
      ko: "Markdown 기반 학습 자료 정리와 SQL 연습 병행",
      en: "Combined markdown study notes with hands-on SQL practice",
    },
    summary: {
      ko: "문서 기반 학습 저장소와 PostgreSQL 실습 환경을 꾸준히 쌓으면서 문제 해결의 기반을 넓혔습니다.",
      en: "Expanded problem-solving foundations through markdown-driven learning repos and a PostgreSQL playground.",
    },
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Active Recall Quiz",
    description: {
      ko: "외부 markdown 노트를 동기화해 문제 생성, 시험 응시, 채점, 오답 복습까지 이어지는 학습 앱입니다.",
      en: "A learning app that syncs external markdown notes and turns them into quiz creation, exam, grading, and review flows.",
    },
    techStack: ["Next.js", "React", "FastAPI", "SQLite", "GitHub Actions"],
    githubUrl: "https://github.com/InryeolChoi/active-recall-quiz",
  },
  {
    title: "Active Recall Notes",
    description: {
      ko: "정처기 실기 대비를 위해 markdown 기반 이론 자료를 구조화하고, 학습 앱에 공급하는 노트 저장소입니다.",
      en: "A markdown-driven note repository that structures study materials and supplies content to the learning app.",
    },
    techStack: ["Markdown", "GitHub Actions", "Content Modeling", "Study Workflow"],
    githubUrl: "https://github.com/InryeolChoi/active-recall-notes",
  },
  {
    title: "Database Playground",
    description: {
      ko: "PostgreSQL와 Docker를 기반으로 SQL과 데이터베이스 개념을 실습하는 저장소입니다.",
      en: "A hands-on repository for practicing SQL and database concepts with PostgreSQL and Docker.",
    },
    techStack: ["PostgreSQL", "Docker", "SQL"],
    githubUrl: "https://github.com/InryeolChoi/database-playground",
  },
  {
    title: "Profile Site",
    description: {
      ko: "개인 소개, 프로젝트, 타임라인을 정리하는 GitHub Pages 기반 포트폴리오 사이트입니다.",
      en: "A GitHub Pages portfolio site that organizes profile, projects, and timeline content.",
    },
    techStack: ["React", "TypeScript", "Vite", "Motion"],
    githubUrl: "https://github.com/InryeolChoi/inchoi.github.io",
  },
];

export const projectItems: ProjectItem[] = [
  {
    title: "Active Recall Quiz",
    role: {
      ko: "제품 구조 설계, 프론트엔드/백엔드 연결, 학습 흐름 구현",
      en: "Product structure design, frontend/backend integration, and learning flow implementation",
    },
    summary: {
      ko: "노트 저장소와 학습 앱을 분리하고, 동기화된 콘텐츠로 문제 생성과 시험 경험을 제공하는 학습 시스템입니다.",
      en: "A learning system that separates note ownership from the app and delivers quiz and exam experiences using synced content.",
    },
    highlights: {
      ko: [
        "외부 노트 저장소와 앱 저장소의 책임 분리",
        "시험 생성, 제출, 채점, 오답 복습 흐름 구성",
        "FastAPI와 Next.js를 연결한 전체 학습 경험 설계",
      ],
      en: [
        "Separated responsibilities between the note repo and the app repo",
        "Built exam creation, submission, grading, and review flows",
        "Designed an end-to-end study experience across FastAPI and Next.js",
      ],
    },
    githubUrl: "https://github.com/InryeolChoi/active-recall-quiz",
  },
  {
    title: "Active Recall Notes",
    role: {
      ko: "콘텐츠 구조 설계 및 학습 자료 운영",
      en: "Content structure design and study material operations",
    },
    summary: {
      ko: "markdown으로 정리한 이론을 반복 회상 학습에 적합한 데이터 자산으로 바꾸는 데 초점을 둔 프로젝트입니다.",
      en: "A project focused on turning markdown study notes into reusable assets for active recall learning.",
    },
    highlights: {
      ko: [
        "unit 기반 markdown 구조 정리",
        "학습 앱으로 이어지는 콘텐츠 공급 구조 마련",
        "추후 자동화와 동기화에 적합한 작성 원칙 수립",
      ],
      en: [
        "Organized a unit-based markdown content structure",
        "Built a content supply path for the learning application",
        "Defined authoring rules that fit future automation and sync",
      ],
    },
    githubUrl: "https://github.com/InryeolChoi/active-recall-notes",
  },
  {
    title: "Database Playground",
    role: {
      ko: "DB 학습 및 실습 환경 구성",
      en: "Database learning and practice environment setup",
    },
    summary: {
      ko: "PostgreSQL와 Docker를 이용해 SQL과 데이터베이스 기초를 손으로 익히기 위한 연습용 저장소입니다.",
      en: "A practice repository for learning SQL and database fundamentals with PostgreSQL and Docker.",
    },
    highlights: {
      ko: [
        "컨테이너 기반 PostgreSQL 실행 환경 구성",
        "볼륨 기반 데이터 유지 구조 이해",
        "기본 CRUD와 스키마 실습 흐름 정리",
      ],
      en: [
        "Set up a container-based PostgreSQL environment",
        "Learned persistent volume-based data flow",
        "Organized a hands-on path for CRUD and schema practice",
      ],
    },
    githubUrl: "https://github.com/InryeolChoi/database-playground",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    period: "2024 - Present",
    company: "Independent Projects",
    position: {
      ko: "학습 시스템과 개발 워크플로우를 탐구하는 개인 프로젝트 중심 개발",
      en: "Independent development focused on learning systems and developer workflows",
    },
    summary: {
      ko: "학습 콘텐츠 구조화, 시험형 앱 구현, 데이터 실습 환경 구성처럼 서로 연결되는 프로젝트를 통해 제품 감각과 기술 기반을 함께 넓히고 있습니다.",
      en: "Expanding both product sense and technical foundations through connected projects in study content structuring, exam-style app building, and database practice environments.",
    },
    highlights: {
      ko: [
        "React와 Next.js 기반 학습 UI 구현",
        "FastAPI와 SQLite를 활용한 학습 앱 구조 실험",
        "Markdown, GitHub Actions, DB 실습을 잇는 개인 개발 흐름 구축",
      ],
      en: [
        "Built study-oriented UI with React and Next.js",
        "Explored app architecture with FastAPI and SQLite",
        "Created a personal workflow connecting markdown, GitHub Actions, and DB practice",
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
