import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Certifications } from "./components/Certifications";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { IntroOverlay } from "./components/IntroOverlay";
import { LanguageToggle } from "./components/LanguageToggle";
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
          <LanguageToggle locale={locale} />
        </header>

        <main className={isExporting ? "pageContent exportMode" : "pageContent"} id="content" ref={cvRef}>
          <Hero locale={locale} />
          <Skills locale={locale} />
          <Projects locale={locale} />
          <Experience locale={locale} />
          <Certifications />
          <Education locale={locale} />
        </main>
        <footer className="pageFooter">
          <button className="cvButton" type="button" onClick={handleDownloadCv} disabled={isExporting}>
            {isExporting ? t("downloadingCv") : t("downloadCv")}
          </button>
        </footer>
      </div>
    </>
  );
}

export default App;
