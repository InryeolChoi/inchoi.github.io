import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { IntroOverlay } from "./components/IntroOverlay";
import { LanguageToggle } from "./components/LanguageToggle";
import { Portfolio } from "./components/Portfolio";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";
import { getLocale, profile } from "./data/siteContent";
import type { Locale } from "./types";

function App() {
  const { i18n, t } = useTranslation();
  const [showIntro, setShowIntro] = useState(true);
  const locale: Locale = getLocale(i18n.language);

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

        <main className="pageContent" id="content">
          <Hero locale={locale} />
          <section className="sectionIntro">
            <p>{t("sectionLead")}</p>
            <div className="socialRow">
              {profile.socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </section>
          <Skills locale={locale} />
          <Timeline locale={locale} />
          <Portfolio locale={locale} />
          <Projects locale={locale} />
          <Experience locale={locale} />
        </main>
      </div>
    </>
  );
}

export default App;
