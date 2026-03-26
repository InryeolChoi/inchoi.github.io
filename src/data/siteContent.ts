import type {
  EducationItem,
  ExperienceItem,
  LinkItem,
  LocalizedInlineText,
  PortfolioItem,
  SkillItem,
  SkillCategory,
} from "../types";
import type { Locale, ProjectItem } from "../types";

const text = (value: string) => ({ text: value });
const link = (value: string, href: string) => ({ text: value, href });
const plainDescription = (ko: string, en: string): LocalizedInlineText => ({
  ko: [text(ko)],
  en: [text(en)],
});

const skillLinks = {
  algorithmPy: "https://github.com/InryeolChoi/algorithm_py",
  cpp101: "https://github.com/InryeolChoi/cpp_101",
  ebayAnalysis: "https://github.com/InryeolChoi/ebay_analysis",
  ftPrintf: "https://github.com/InryeolChoi/ft_printf",
  getNextLine: "https://github.com/InryeolChoi/_get_NextLine",
  javaModern: "https://github.com/InryeolChoi/Java_Modern",
  philosopher: "https://github.com/InryeolChoi/_philosopher",
  pipex: "https://github.com/InryeolChoi/_pipex",
  superApp: "https://github.com/InryeolChoi/superApp",
} as const;

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
          ko: [
            text("학교 수업에서 Java로 객체지향의 기본기를 잡은 뒤 "),
            link("Java_Modern", skillLinks.javaModern),
            text(
              " 저장소에서 <모던 자바 인 액션> 흐름을 따라가며 람다, 스트림, Optional, Fork/Join, 비동기 API 같은 주제를 예제 중심으로 정리했습니다. 문법만 암기하기보다 컬렉션 처리 방식이 어떻게 달라지는지, 병렬 처리와 비동기 흐름이 코드 구조를 어떻게 바꾸는지까지 비교하며 모던 자바 스타일을 익혔습니다.",
            ),
          ],
          en: [
            text("After learning Java fundamentals in class, I used "),
            link("Java_Modern", skillLinks.javaModern),
            text(
              " to study modern Java in depth through examples covering lambdas, streams, Optional, Fork/Join, and asynchronous APIs. I focused on how modern Java changes collection handling and program structure rather than only memorizing syntax.",
            ),
          ],
        },
      },
      {
        name: "Spring",
        iconKey: "spring",
        description: plainDescription(
          "백엔드 애플리케이션을 계층적으로 나누는 방식, 의존성 주입, 설정 분리, 웹 애플리케이션의 요청 처리 흐름을 이해하기 위해 Spring 학습을 이어가고 있습니다.",
          "I am studying Spring to understand layered backend structure, dependency injection, configuration, and request handling in web applications.",
        ),
      },
      {
        name: "Docker",
        iconKey: "docker",
        description: plainDescription(
          "데이터베이스 실습과 웹 프로젝트 환경을 컨테이너로 분리해 보면서 로컬 환경을 반복 가능하게 맞추고, 서비스별 실행 구성을 분리하는 흐름을 익혔습니다.",
          "I used Docker to separate databases and app environments, making local setups reproducible and easier to manage by service.",
        ),
      },
      {
        name: "Linux",
        iconKey: "linux",
        description: plainDescription(
          "셸 환경에서 파일과 프로세스를 다루고, 시스템 콜과 프로세스 실행 흐름을 이해하는 과제를 수행하면서 리눅스 기반 개발 환경에 자연스럽게 익숙해졌습니다.",
          "I became comfortable with Linux-based development by working with shells, processes, and system-call-oriented assignments.",
        ),
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
          ko: [
            text("단순히 문법만 익힌 것이 아니라 "),
            link("ft_printf", skillLinks.ftPrintf),
            text(" 에서 가변 인자와 포맷 문자열 처리를 직접 구현하며 메모리와 문자열 조작의 기본기를 다졌고, "),
            link("get_next_line", skillLinks.getNextLine),
            text(" 에서는 `read()` 기반 버퍼 관리와 파일 디스크립터별 상태 처리를 통해 입력 흐름을 이해했습니다. 이어 "),
            link("pipex", skillLinks.pipex),
            text(" 에서 `pipe`, `fork`, `dup2`, `execve`를 연결해 프로세스 간 파이프라인을 구현하며 시스템 콜과 멀티 프로세싱을 익혔고, "),
            link("philosopher", skillLinks.philosopher),
            text(" 에서는 스레드와 뮤텍스를 다루며 동기화 문제를 직접 풀어보았습니다. 이런 과정을 통해 메모리 관리, 파일 디스크립터, 시스템 콜, 파이프, 멀티 프로세싱, 멀티 스레딩을 실제 구현 맥락에서 이해하게 되었습니다."),
          ],
          en: [
            text("I learned C through implementation-heavy projects rather than simple syntax practice. In "),
            link("ft_printf", skillLinks.ftPrintf),
            text(" I handled variadic arguments and format parsing, and in "),
            link("get_next_line", skillLinks.getNextLine),
            text(" I managed buffered input and per-file-descriptor state around `read()`. Then "),
            link("pipex", skillLinks.pipex),
            text(" helped me connect `pipe`, `fork`, `dup2`, and `execve` to build a shell-like pipeline, while "),
            link("philosopher", skillLinks.philosopher),
            text(" made me work through thread synchronization with mutexes. Through these projects, I built a practical understanding of memory management, file descriptors, system calls, pipes, multiprocessing, and multithreading."),
          ],
        },
      },
      {
        name: "C++",
        iconKey: "cplusplus",
        description: {
          ko: [
            link("cpp_101", skillLinks.cpp101),
            text(
              " 저장소를 중심으로 여러 모듈을 따라가며 클래스 설계, 생성자와 소멸자, 레퍼런스, OCCF, 상속, 다형성, 추상 클래스, 템플릿, STL, 타입 변환 같은 주제를 단계적으로 공부했습니다. 특히 C++의 복사 제어와 자원 관리 방식이 Java나 Python 같은 다른 OOP 언어와 어떻게 다른지, 또 객체 추상화나 인터페이스 설계라는 공통점은 무엇인지 비교해보며 언어별 객체지향 감각을 넓혔습니다.",
            ),
          ],
          en: [
            text("I studied C++ through the step-by-step exercises in "),
            link("cpp_101", skillLinks.cpp101),
            text(
              ", covering classes, constructors and destructors, references, the Orthodox Canonical Class Form, inheritance, polymorphism, abstract classes, templates, STL, and type conversion. I paid particular attention to how C++ differs from Java and Python in copy control, ownership, and object design while also comparing their shared OOP ideas.",
            ),
          ],
        },
      },
      {
        name: "Python",
        iconKey: "python",
        description: {
          ko: [
            link("algorithm_py", skillLinks.algorithmPy),
            text(" 에서 알고리즘 문제를 꾸준히 풀며 빠르게 로직을 구현하고 자료구조를 다루는 감각을 길렀고, "),
            link("superApp", skillLinks.superApp),
            text(
              " 에서는 Django 기반 백엔드를 직접 구성하며 `manage.py`, 앱 분리, 모델, URL, 뷰, 직렬화, 채팅과 게시판 기능 같은 웹 서비스 기본 구조를 익혔습니다. 또한 "),
            link("ebay_analysis", skillLinks.ebayAnalysis),
            text(
              " 에서는 노트북 환경과 데이터 파일을 다루며 분석 과정을 정리해보았습니다. 이렇게 Python을 알고리즘 풀이, 백엔드 기초 학습, 데이터 분석까지 다양한 용도로 사용해보면서 빠르게 실험하고 구조를 검증하는 언어로 활용해왔습니다.",
            ),
          ],
          en: [
            text("I have used Python across several different contexts. In "),
            link("algorithm_py", skillLinks.algorithmPy),
            text(" I practiced algorithms regularly to build fast implementation habits, while "),
            link("superApp", skillLinks.superApp),
            text(
              " let me learn backend fundamentals with Django through app structure, models, URLs, views, serializers, and service features such as boards and chat. I also used "),
            link("ebay_analysis", skillLinks.ebayAnalysis),
            text(
              " for notebook-based data analysis. That combination made Python a practical language for me across problem solving, backend learning, and analysis work.",
            ),
          ],
        },
      },
      {
        name: "Django",
        iconKey: "django",
        description: plainDescription(
          "Django로 프로젝트를 구성하면서 앱 단위 구조화, 모델과 마이그레이션, URL 라우팅, 뷰와 직렬화, 기본 인증 흐름처럼 백엔드 웹 프레임워크의 핵심 구성을 익혔습니다.",
          "I studied Django through real project structure, learning app organization, models and migrations, URL routing, views, serializers, and core backend workflow.",
        ),
      },
      {
        name: "FastAPI",
        iconKey: "fastapi",
        description: plainDescription(
          "Active Recall Quiz 백엔드에서 API 구조를 나누고, 시험 생성, 제출, 채점, 결과 조회 흐름을 연결하면서 비교적 가볍고 명확한 웹 API 설계 경험을 쌓았습니다.",
          "I used FastAPI in the Active Recall Quiz backend to structure APIs and connect exam creation, submission, grading, and result flows.",
        ),
      },
      {
        name: "GitHub Actions",
        iconKey: "githubactions",
        description: plainDescription(
          "노트 동기화, 정적 사이트 배포, 반복 작업 체크처럼 사람이 계속 수동으로 하지 않아도 되는 흐름을 자동화하는 데 활용하고 있습니다.",
          "I use GitHub Actions to automate repetitive workflows such as note sync and static site deployment.",
        ),
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
        description: plainDescription(
          "기초 통계와 데이터 처리 흐름을 이해하기 위해 문법과 패키지 사용 방식을 가볍게 학습했습니다.",
          "I briefly studied R to understand basic statistics workflows and package-based data handling.",
        ),
      },
      {
        name: "TypeScript",
        iconKey: "typescript",
        description: plainDescription(
          "React 프로젝트에서 타입 안정성을 높이기 위해 사용했고, 데이터 구조를 명확하게 정의하며 유지보수성을 높였습니다.",
          "I used TypeScript in React projects to improve type safety and keep data structures explicit and maintainable.",
        ),
      },
      {
        name: "React",
        iconKey: "react",
        description: plainDescription(
          "포트폴리오 사이트와 학습용 UI를 만들면서 컴포넌트 설계, 상태 흐름, 화면 구조 분리에 익숙해졌습니다.",
          "I used React to build this portfolio and study-focused interfaces, becoming comfortable with component design, state flow, and screen composition.",
        ),
      },
      {
        name: "Swift",
        iconKey: "swift",
        description: plainDescription(
          "Apple 튜토리얼을 따라가며 Swift 문법과 iOS 앱 구조를 가볍게 탐색해봤습니다.",
          "I briefly explored Swift syntax and iOS app structure through Apple tutorials and small practice exercises.",
        ),
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
