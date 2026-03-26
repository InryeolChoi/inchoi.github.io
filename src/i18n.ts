import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ko: {
    translation: {
      brand: "INCHOI",
      heroEyebrow: "Profile / Portfolio",
      heroPrimary: "프로필 수정 포인트",
      heroSecondary: "이메일과 경력 정보는 src/data/siteContent.ts에서 바로 바꿀 수 있습니다.",
      sectionLead:
        "정보를 빠르게 이해할 수 있도록 핵심 섹션을 카드와 타임라인 중심으로 구성했습니다.",
      skillsTitle: "스킬",
      timelineTitle: "타임라인",
      portfolioTitle: "포트폴리오",
      projectsTitle: "프로젝트",
      experienceTitle: "경력",
      contact: "이메일",
      location: "위치",
      skillsLead: "관심 분야와 업무 스타일이 함께 보이도록 기술을 그룹별로 정리했습니다.",
      timelineLead: "지금까지의 흐름과 방향성을 한 줄씩 빠르게 읽을 수 있습니다.",
      portfolioLead: "대표 작업과 저장소를 한곳에서 확인할 수 있습니다.",
      projectsLead: "어떤 문제를 어떻게 풀었는지 중심으로 프로젝트를 소개합니다.",
      experienceLead: "경력 섹션은 실제 이력으로 교체하기 쉬운 형태로 분리했습니다.",
      github: "GitHub",
      liveSite: "Live",
      viewGithub: "GitHub 보기",
      role: "역할",
      techStack: "기술 스택",
      introSkip: "본문으로 건너뛰기",
      introTitle: "Loading profile",
      introSubtitle: "A quick look before the story begins",
      languageLabel: "Language",
    },
  },
  en: {
    translation: {
      brand: "INCHOI",
      heroEyebrow: "Profile / Portfolio",
      heroPrimary: "Profile update tips",
      heroSecondary: "You can edit email and experience details directly in src/data/siteContent.ts.",
      sectionLead:
        "The page is organized around clear cards and a timeline so visitors can understand the story quickly.",
      skillsTitle: "Skills",
      timelineTitle: "Timeline",
      portfolioTitle: "Portfolio",
      projectsTitle: "Projects",
      experienceTitle: "Experience",
      contact: "Email",
      location: "Location",
      skillsLead: "Skills are grouped to show both capability and working style.",
      timelineLead: "A quick snapshot of direction, growth, and major milestones.",
      portfolioLead: "A focused collection of representative work and repositories.",
      projectsLead: "Projects are framed around the problems solved and the decisions behind them.",
      experienceLead: "The experience section is separated so real career details are easy to update later.",
      github: "GitHub",
      liveSite: "Live",
      viewGithub: "View GitHub",
      role: "Role",
      techStack: "Tech stack",
      introSkip: "Skip to content",
      introTitle: "Loading profile",
      introSubtitle: "A quick look before the story begins",
      languageLabel: "Language",
    },
  },
} as const;

void i18n.use(initReactI18next).init({
  resources,
  lng: "ko",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
