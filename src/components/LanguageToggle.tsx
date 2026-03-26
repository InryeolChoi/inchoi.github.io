import { startTransition } from "react";
import { useTranslation } from "react-i18next";

import type { Locale } from "../types";

type LanguageToggleProps = {
  locale: Locale;
};

export function LanguageToggle({ locale }: LanguageToggleProps) {
  const { i18n, t } = useTranslation();

  const changeLanguage = (nextLocale: Locale) => {
    startTransition(() => {
      void i18n.changeLanguage(nextLocale);
    });
  };

  return (
    <div className="languageToggle" aria-label={t("languageLabel")}>
      <button
        type="button"
        className={locale === "ko" ? "languageButton active" : "languageButton"}
        aria-pressed={locale === "ko"}
        onClick={() => changeLanguage("ko")}
      >
        KO
      </button>
      <button
        type="button"
        className={locale === "en" ? "languageButton active" : "languageButton"}
        aria-pressed={locale === "en"}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}
