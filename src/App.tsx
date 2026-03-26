import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Certifications } from "./components/Certifications";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { IntroOverlay } from "./components/IntroOverlay";
import { LanguageToggle } from "./components/LanguageToggle";
import { LearningHistory } from "./components/LearningHistory";
import { Other } from "./components/Other";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { getLocale } from "./data/siteContent";
import type { Locale } from "./types";

function App() {
  const { i18n, t } = useTranslation();
  const [showIntro, setShowIntro] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const locale: Locale = getLocale(i18n.language);
  const cvRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const handleDownloadCv = async () => {
    if (!cvRef.current || isExporting) {
      return;
    }

    setIsExporting(true);

    try {
      const html2pdf = (await import("html2pdf.js")).default;
      await new Promise((resolve) => window.setTimeout(resolve, 150));
      const exporter = html2pdf() as {
        set: (options: Record<string, unknown>) => {
          from: (element: HTMLElement) => {
            save: () => Promise<void>;
          };
        };
      };

      await exporter
        .set({
          filename: "inryeol-choi-cv.pdf",
          margin: [10, 10, 10, 10],
          pagebreak: { mode: ["css", "legacy"] },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff",
          },
          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
          },
        })
        .from(cvRef.current)
        .save();
    } finally {
      window.setTimeout(() => {
        setIsExporting(false);
      }, 150);
    }
  };

  return (
    <>
      <IntroOverlay show={showIntro} />
      <div className="pageShell">
        <header className="topBar">
          <a className="brand" href="#about">
            {t("brand")}
          </a>
          <a
            className="topGithubLink"
            href="https://github.com/InryeolChoi"
            target="_blank"
            rel="noreferrer"
            aria-label={t("github")}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path
                d="M12 1.5C6.201 1.5 1.5 6.201 1.5 12c0 4.64 3.01 8.577 7.188 9.967.525.098.712-.227.712-.504 0-.248-.009-.905-.014-1.777-2.924.636-3.541-1.409-3.541-1.409-.479-1.216-1.17-1.54-1.17-1.54-.956-.653.073-.64.073-.64 1.057.075 1.613 1.086 1.613 1.086.94 1.61 2.466 1.145 3.067.876.095-.68.368-1.145.67-1.409-2.334-.266-4.788-1.167-4.788-5.193 0-1.147.41-2.086 1.083-2.821-.109-.266-.469-1.337.103-2.788 0 0 .883-.283 2.896 1.078A10.08 10.08 0 0 1 12 6.614c.892.004 1.79.121 2.629.355 2.012-1.361 2.894-1.078 2.894-1.078.573 1.451.213 2.522.104 2.788.675.735 1.082 1.674 1.082 2.821 0 4.036-2.458 4.924-4.798 5.185.378.326.714.971.714 1.957 0 1.413-.013 2.552-.013 2.899 0 .279.186.607.719.503C19.493 20.573 22.5 16.638 22.5 12c0-5.799-4.701-10.5-10.5-10.5Z"
                fill="currentColor"
              />
            </svg>
            <span>{t("github")}</span>
          </a>
        </header>

        <main className={isExporting ? "pageContent exportMode" : "pageContent"} id="content" ref={cvRef}>
          <Hero locale={locale} />
          <Skills locale={locale} />
          <Projects locale={locale} />
          <LearningHistory locale={locale} />
          <Education locale={locale} />
          <Certifications locale={locale} />
          <Experience locale={locale} />
          <Other locale={locale} />
        </main>
        <footer className="pageFooter">
          <button className="cvButton" type="button" onClick={handleDownloadCv} disabled={isExporting}>
            {isExporting ? t("downloadingCv") : t("downloadCv")}
          </button>
        </footer>
        <LanguageToggle locale={locale} hidden={isExporting} />
      </div>
    </>
  );
}

export default App;
