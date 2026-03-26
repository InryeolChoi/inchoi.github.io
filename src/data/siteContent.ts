import type {
  EducationItem,
  ExperienceItem,
  LinkItem,
  PortfolioItem,
  SkillItem,
  SkillCategory,
} from "../types";
import type { Locale, ProjectItem } from "../types";

export const profile = {
  name: "Inryeol Choi",
  githubUrl: "https://github.com/InryeolChoi",
  headline: {
    ko: "늘 우직하게,\n늘 갈망하는 개발자",
    en: "A developer who structures knowledge and turns it into learning experiences",
  },
  intro: {
    ko: "늘 우직하게 도전하고 성장하려는 개발자 최인렬입니다. 학부 수업을 통해 프로그래밍을 접한 뒤, 데이터 분석보다 데이터를 관리하고 처리하는 구조에 더 큰 흥미를 느꼈습니다. 그 과정에서 자연스럽게 컴퓨터공학 전반에 관심을 갖게 되었고, 지금은 백엔드 프로그래밍, 데이터베이스, 클라우드 같은 분야를 꾸준히 공부하고 있습니다.",
    en: "I am a developer who keeps moving forward with steady curiosity. After being introduced to programming through university courses, I became more interested in how data is managed and processed than in data analysis itself. That naturally led me deeper into computer science, and I am now continuously studying backend programming, databases, and cloud technologies.",
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
      ko: "Core Stack",
      en: "Core Stack",
    },
    items: [
      {
        name: "Java",
        iconKey: "java",
        description: {
          ko: "학교 수업에서 Java를 처음 공부했고, <모던 자바 인 액션>을 읽으며 객체지향, Stream, Lambda 같은 현대적인 Java 문법을 더 깊게 익혔습니다.",
          en: "I first studied Java in school, then deepened my understanding of object-oriented design and modern Java features such as streams and lambdas through Modern Java in Action.",
        },
      },
      {
        name: "React",
        iconKey: "react",
        description: {
          ko: "포트폴리오 사이트와 학습용 UI를 만들면서 컴포넌트 설계, 상태 흐름, 화면 구조 분리에 익숙해졌습니다.",
          en: "I used React to build this portfolio and study-focused interfaces, becoming comfortable with component design, state flow, and screen composition.",
        },
      },
      {
        name: "TypeScript",
        iconKey: "typescript",
        description: {
          ko: "React 프로젝트에서 타입 안정성을 높이기 위해 사용했고, 데이터 구조를 명확하게 정의하며 유지보수성을 높였습니다.",
          en: "I use TypeScript in React projects to improve type safety and keep data structures explicit and maintainable.",
        },
      },
      {
        name: "FastAPI",
        iconKey: "fastapi",
        description: {
          ko: "Active Recall Quiz 백엔드에서 API 구조를 나누고 시험 생성, 제출, 채점 흐름을 연결하는 데 활용했습니다.",
          en: "I used FastAPI in the Active Recall Quiz backend to structure APIs and support exam creation, submission, and grading flows.",
        },
      },
    ] satisfies SkillItem[],
  },
  {
    title: {
      ko: "Familiar With",
      en: "Familiar With",
    },
    items: [
      {
        name: "C",
        iconKey: "c",
        description: {
          ko: "기초 프로그래밍과 알고리즘 학습 과정에서 메모리와 자료구조를 더 낮은 수준에서 이해하기 위해 다뤘습니다.",
          en: "I explored C while studying programming fundamentals and algorithms to better understand memory and low-level data structures.",
        },
      },
      {
        name: "C++",
        iconKey: "cplusplus",
        description: {
          ko: "알고리즘 문제 풀이와 기본 문법 학습을 통해 자료구조와 성능 감각을 익히는 데 활용했습니다.",
          en: "I used C++ in algorithm practice to get more comfortable with data structures and performance-oriented thinking.",
        },
      },
      {
        name: "Python",
        iconKey: "python",
        description: {
          ko: "학습 앱 백엔드와 자동화 스크립트에서 사용했고, 로직을 빠르게 구현하고 실험하는 데 익숙합니다.",
          en: "I use Python in backend work and automation scripts, and I am comfortable using it to prototype and implement logic quickly.",
        },
      },
      {
        name: "Docker",
        iconKey: "docker",
        description: {
          ko: "PostgreSQL 실습 환경을 컨테이너로 구성하면서 로컬 개발 환경을 반복 가능하게 만드는 흐름을 익혔습니다.",
          en: "I used Docker to make the PostgreSQL practice environment reproducible and easier to manage locally.",
        },
      },
      {
        name: "GitHub Actions",
        iconKey: "githubactions",
        description: {
          ko: "노트 동기화와 GitHub Pages 배포처럼 반복되는 작업을 자동화하는 데 활용하고 있습니다.",
          en: "I use GitHub Actions to automate repetitive tasks such as note sync pipelines and GitHub Pages deployment.",
        },
      },
    ] satisfies SkillItem[],
  },
  {
    title: {
      ko: "Explored",
      en: "Explored",
    },
    items: [
      {
        name: "R",
        iconKey: "r",
        description: {
          ko: "기초 통계와 데이터 처리 흐름을 이해하기 위해 문법과 패키지 사용 방식을 가볍게 학습했습니다.",
          en: "I briefly studied R to understand basic statistics workflows and package-based data handling.",
        },
      },
      {
        name: "SwiftUI",
        iconKey: "swift",
        description: {
          ko: "Apple 튜토리얼을 따라가며 SwiftUI 기반 앱 구조와 선언형 UI 작성 방식을 경험해봤습니다. 특히 ",
          en: "I explored declarative UI and app structure in SwiftUI by following Apple tutorials and small practice projects.",
        },
      },
    ] satisfies SkillItem[],
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
      en: "A GitHub Pages portfolio site that organizes profile, projects, and career content.",
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
    problem: {
      ko: "markdown 노트를 정리해도 실제 시험처럼 문제를 풀고 복습하는 경험까지 이어지지 않았고, 노트 원본과 학습 앱의 책임도 한 저장소에 섞이기 쉬웠습니다.",
      en: "Markdown notes alone did not provide a full exam-and-review experience, and note ownership could easily get mixed with the learning app.",
    },
    approach: {
      ko: "`active-recall-notes`에서 넘어온 스냅샷을 SQLite에 적재하고, FastAPI와 Next.js를 연결해 문제 생성, 시험 응시, 채점, 오답 복습 흐름을 하나의 학습 앱으로 구성했습니다.",
      en: "I loaded snapshots from `active-recall-notes` into SQLite and connected FastAPI with Next.js to build quiz generation, exam taking, grading, and wrong-answer review into one learning app.",
    },
    summary: {
      ko: "외부 노트 저장소를 데이터 공급원으로 두고, 학습용 실행 계층을 별도 앱으로 분리한 반복 회상 학습 시스템입니다.",
      en: "An active-recall learning system that separates the execution layer from the external note repository used as its content source.",
    },
    highlights: {
      ko: [
        "노트 저장소와 학습 앱 저장소의 책임을 분리한 구조 설계",
        "시험 생성, 제출, 채점, 오답노트까지 이어지는 사용자 흐름 구현",
        "FastAPI API와 Next.js 화면을 연결한 end-to-end 학습 경험 구성",
      ],
      en: [
        "Separated responsibilities between the note repository and the learning app repository",
        "Built a user flow that connects exam generation, submission, grading, and wrong-note review",
        "Delivered an end-to-end study experience across FastAPI APIs and a Next.js frontend",
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
    problem: {
      ko: "정처기 실기처럼 서술형 답안을 요구하는 학습에서는 단순 요약 노트만으로는 반복 회상과 문제화에 바로 연결되기 어려웠습니다.",
      en: "For descriptive-answer study like the practical engineer exam, simple summary notes were not enough to support repeated recall and question generation.",
    },
    approach: {
      ko: "개념을 `unit_*/*.md` 구조로 정리하고, 학습 앱으로 전달하기 쉬운 작성 원칙과 스냅샷 동기화 흐름을 기준으로 노트 저장소를 설계했습니다.",
      en: "I organized concepts in a `unit_*/*.md` structure and designed the repository around authoring rules and snapshot sync flows that feed the learning app cleanly.",
    },
    summary: {
      ko: "이론 정리를 끝내는 저장소가 아니라, 반복 회상 학습에 재사용할 수 있는 콘텐츠 자산을 만드는 노트 프로젝트입니다.",
      en: "A note project focused on turning theory writeups into reusable content assets for active recall learning.",
    },
    highlights: {
      ko: [
        "unit 단위 markdown 구조와 파일 규칙 정리",
        "학습 앱으로 이어지는 콘텐츠 공급 저장소 역할 분리",
        "자동 동기화와 문제 생성에 맞는 작성 원칙 수립",
      ],
      en: [
        "Defined a unit-based markdown structure and file conventions",
        "Separated the repository as the dedicated content source for the learning app",
        "Established authoring rules that fit automated sync and question generation",
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
    problem: {
      ko: "데이터베이스 개념은 책으로만 보면 추상적으로 남기 쉬워서, 직접 만들고 지우며 익힐 수 있는 반복 가능한 실습 환경이 필요했습니다.",
      en: "Database concepts can stay abstract when learned only from books, so I needed a repeatable environment for hands-on practice.",
    },
    approach: {
      ko: "Docker 기반 PostgreSQL 실행 환경을 만들고, 볼륨 유지 방식과 기본 SQL 예제를 함께 정리해 컨테이너 실행부터 CRUD 실습까지 한 흐름으로 다룰 수 있게 했습니다.",
      en: "I built a Docker-based PostgreSQL environment and documented volume persistence with basic SQL examples so the full flow from container startup to CRUD practice could be repeated easily.",
    },
    summary: {
      ko: "PostgreSQL와 Docker를 이용해 SQL과 데이터베이스 기초를 직접 실행하며 익히기 위한 실습 저장소입니다.",
      en: "A hands-on practice repository for learning SQL and database fundamentals with PostgreSQL and Docker.",
    },
    highlights: {
      ko: [
        "컨테이너 기반 PostgreSQL 실행 환경 구성",
        "볼륨 기반 데이터 유지 방식과 환경 재생성 흐름 정리",
        "기본 CRUD와 스키마 실습을 바로 따라할 수 있는 예제 구성",
      ],
      en: [
        "Set up a container-based PostgreSQL environment",
        "Documented persistent volume handling and environment reset flow",
        "Prepared example steps for immediate CRUD and schema practice",
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

export const educationItems: EducationItem[] = [
  {
    period: "Add Period",
    institution: "Add School or Program",
    program: {
      ko: "전공 또는 교육 과정을 입력하세요",
      en: "Add your major or education program",
    },
    summary: {
      ko: "학위, 부트캠프, 교육 과정, 자격 준비 이력 등을 여기에 정리할 수 있습니다.",
      en: "You can list your degree, bootcamp, training course, or certification preparation here.",
    },
    highlights: {
      ko: [
        "학교명 또는 교육 기관명 입력",
        "전공 또는 과정명 입력",
        "배운 내용이나 핵심 성과 2~3개 정리",
      ],
      en: [
        "Add your school or education provider",
        "Add your major or course name",
        "Summarize two or three key learnings or outcomes",
      ],
    },
  },
];

export const sectionAnchors = [
  { id: "about", label: { ko: "소개", en: "About" } },
  { id: "skills", label: { ko: "기술 스택", en: "Tech Stack" } },
  { id: "portfolio", label: { ko: "포트폴리오", en: "Portfolio" } },
  { id: "projects", label: { ko: "프로젝트", en: "Projects" } },
  { id: "experience", label: { ko: "경력", en: "Experience" } },
  { id: "education", label: { ko: "교육", en: "Education" } },
];

export const getLocale = (language: string): Locale =>
  language.startsWith("ko") ? "ko" : "en";
