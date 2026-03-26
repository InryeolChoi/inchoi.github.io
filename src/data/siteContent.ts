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
    ko: "늘 우직하게, 늘 갈망하는 개발자",
    en: "A developer who structures knowledge and turns it into learning experiences",
  },
  intro: {
    ko: "늘 우직하게 도전하고, 늘 갈망하며 성장하려는 개발자 최인렬입니다. 학부 수업을 들으며 프로그래밍을 처음 접했고, 처음에는 빅데이터를 통해 혁신적인 서비스를 개발해 보고 싶다는 마음으로 공부를 시작했습니다. 그런데 데이터 분석을 공부하다 보니, 데이터를 해석하는 일 자체보다 데이터를 어떻게 저장하고 관리하고 처리할지 구조를 설계하는 일에 더 큰 흥미를 느끼게 되었습니다. 그 경험을 계기로 자연스럽게 컴퓨터공학 전반에 관심을 가지게 되었고, 지금은 백엔드 프로그래밍, 데이터베이스, 클라우드 같은 분야를 중심으로 꾸준히 공부하고 있습니다. 멈추지 않고 끊임없이 나아가며, 기술로 더 단단한 서비스를 만드는 개발자가 되고 싶습니다.",
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
    title: "ft_irc",
    role: {
      ko: "서버 구조 설계와 이벤트 기반 I/O 흐름 이해",
      en: "Server structure design and event-driven I/O flow understanding",
    },
    problem: {
      ko: "IRC 서버는 여러 클라이언트 연결과 채널 상태를 동시에 다뤄야 해서, 전체 구조를 먼저 잡지 않으면 기능이 추가될수록 흐름이 쉽게 복잡해지는 문제가 있었습니다.",
      en: "An IRC server has to manage multiple clients and channel states at once, so the architecture could quickly become tangled without a clear structure from the start.",
    },
    approach: {
      ko: "서버의 큰 구조를 먼저 나누어 보고, 여러 소켓 이벤트를 어떻게 감시하고 처리하는지 멀티 `kqueue()` 흐름을 중심으로 이해하며 이벤트 기반 서버 동작 방식을 정리했습니다.",
      en: "I focused on structuring the server first, then studied how multiple socket events are observed and processed through multi-`kqueue()` flow to understand event-driven server behavior.",
    },
    summary: {
      ko: "여러 사용자 연결을 처리하는 IRC 서버를 구현하며 네트워크 서버 구조와 이벤트 기반 입출력 방식을 학습한 프로젝트입니다.",
      en: "A project where I learned network server architecture and event-driven I/O while implementing an IRC server that handles multiple user connections.",
    },
    highlights: {
      ko: [
        "기능 추가 전 전체 서버 구조를 먼저 나누어 설계",
        "멀티 `kqueue()` 기반 이벤트 감시 흐름 이해",
        "클라이언트 연결과 채널 상태를 다루는 서버 동작 방식 학습",
      ],
      en: [
        "Designed the overall server structure before expanding features",
        "Studied event monitoring flow based on multi-`kqueue()`",
        "Learned how the server handles client connections and channel state",
      ],
    },
    githubUrl: "https://github.com/ByteTalkers/FT_IRC",
  },
  {
    title: "minishell",
    role: {
      ko: "파싱 구조 학습과 파이프 실행 흐름 구현",
      en: "Parsing structure study and pipe execution flow implementation",
    },
    problem: {
      ko: "쉘은 입력을 단순히 실행하는 것이 아니라, 명령어를 해석하고 파이프와 리다이렉션 같은 규칙에 맞게 흐름을 나눠 처리해야 해서 파싱 구조를 먼저 이해하는 것이 중요했습니다.",
      en: "A shell does more than execute input; it has to parse commands and handle rules like pipes and redirections, so understanding the parsing structure was essential first.",
    },
    approach: {
      ko: "명령어가 어떤 단계로 파싱되어 실행 구조로 이어지는지 공부하고, 그 위에서 여러 명령을 연결하는 pipe 흐름을 직접 구성하면서 쉘의 실행 과정을 이해했습니다.",
      en: "I studied how commands are parsed into executable structures and built the pipe flow that connects multiple commands, which helped me understand how a shell executes user input.",
    },
    summary: {
      ko: "쉘이 입력을 해석하고 여러 명령을 연결해 실행하는 과정을 직접 구현하며 파싱과 프로세스 흐름을 익힌 프로젝트입니다.",
      en: "A project where I implemented how a shell interprets input and connects commands, learning parsing and process flow along the way.",
    },
    highlights: {
      ko: [
        "입력을 실행 가능한 구조로 바꾸는 파싱 흐름 학습",
        "여러 명령을 연결하는 pipe 구조 구현",
        "쉘 명령 실행 과정과 프로세스 연결 방식 이해",
      ],
      en: [
        "Learned the parsing flow that turns input into executable structures",
        "Implemented the pipe structure that connects multiple commands",
        "Understood shell command execution and process chaining",
      ],
    },
    githubUrl: "https://github.com/berryyogurt-minishell/42_minishell",
  },
  {
    title: "transcendence",
    role: {
      ko: "백엔드 구축, 인증 흐름 구현, 인프라 환경 구성",
      en: "Backend development, authentication flow implementation, and infrastructure setup",
    },
    problem: {
      ko: "실제 서비스 형태의 웹 프로젝트에서는 API 서버, 로그인, 보안, 데이터베이스, 배포용 실행 환경이 함께 맞물려야 해서 백엔드 전반을 통합적으로 설계할 필요가 있었습니다.",
      en: "A service-style web project required the API server, authentication, security, database, and runtime environment to work together, so the backend had to be designed as an integrated system.",
    },
    approach: {
      ko: "Django와 Django REST Framework로 백엔드를 구축하고, 42 OAuth 로그인과 JWT 발급 흐름을 연결했습니다. 여기에 이메일 기반 2차 인증 링크를 붙여 인증 단계를 강화했고, PostgreSQL과 Docker Compose로 실행 환경까지 함께 구성했습니다.",
      en: "I built the backend with Django and Django REST Framework, connected 42 OAuth login with JWT issuance, added email-based two-factor verification links, and set up the runtime environment with PostgreSQL and Docker Compose.",
    },
    summary: {
      ko: "실제 웹 서비스 흐름을 기준으로 인증과 데이터 저장, 실행 환경까지 포함한 백엔드를 구축해본 프로젝트입니다.",
      en: "A project where I built a backend for a real web-service flow, covering authentication, persistence, and runtime environment setup.",
    },
    highlights: {
      ko: [
        "Django + Django REST Framework 기반 백엔드 구축",
        "42 OAuth 로그인, JWT 발급, 이메일 기반 2차 인증 링크 구현",
        "PostgreSQL와 Docker Compose를 이용한 개발 환경 구성",
      ],
      en: [
        "Built the backend with Django and Django REST Framework",
        "Implemented 42 OAuth login, JWT issuance, and email-based two-factor verification links",
        "Set up the development environment with PostgreSQL and Docker Compose",
      ],
    },
    githubUrl: "https://github.com/InryeolChoi/transcendence",
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
