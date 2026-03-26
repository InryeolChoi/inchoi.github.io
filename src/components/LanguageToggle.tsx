import { startTransition, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import type { Locale } from "../types";

type LanguageToggleProps = {
  locale: Locale;
  hidden?: boolean;
};

export function LanguageToggle({ locale, hidden = false }: LanguageToggleProps) {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const dockRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (nextLocale: Locale) => {
    startTransition(() => {
      void i18n.changeLanguage(nextLocale);
    });
    setOpen(false);
  };

  useEffect(() => {
    if (hidden) {
      return;
    }

    let hideTimer = 0;

    const handleScroll = () => {
      setIsVisible(false);
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => {
        setIsVisible(true);
      }, 180);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(hideTimer);
    };
  }, [hidden]);

  useEffect(() => {
    if (hidden) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!dockRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [hidden]);

  if (hidden) {
    return null;
  }

  return (
    <div
      ref={dockRef}
      className={isVisible ? "floatingLanguageDock" : "floatingLanguageDock isHidden"}
      aria-label={t("languageLabel")}
    >
      <div className={open ? "floatingLanguageRail isOpen" : "floatingLanguageRail"}>
        <button
          type="button"
          className={locale === "ko" ? "floatingLanguageOption active" : "floatingLanguageOption"}
          aria-pressed={locale === "ko"}
          onClick={() => changeLanguage("ko")}
        >
          KO
        </button>
        <button
          type="button"
          className={locale === "en" ? "floatingLanguageOption active" : "floatingLanguageOption"}
          aria-pressed={locale === "en"}
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
      </div>
      <button
        type="button"
        className={open ? "floatingLanguageTrigger isOpen" : "floatingLanguageTrigger"}
        aria-expanded={open}
        aria-label={t("languageLabel")}
        onClick={() => setOpen((current) => !current)}
      >
        {locale.toUpperCase()}
      </button>
    </div>
  );
}
