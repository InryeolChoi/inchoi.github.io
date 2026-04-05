import { useEffect, useMemo, useRef, useState } from "react";
import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import { useTranslation } from "react-i18next";

import type { ResolvedTheme, ThemeMode } from "../types";

type ThemeToggleProps = {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  onChange: (mode: ThemeMode) => void;
};

const themeIconMap = {
  light: FiSun,
  dark: FiMoon,
  system: FiMonitor,
} as const;

export function ThemeToggle({ mode, resolvedTheme, onChange }: ThemeToggleProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  const options = useMemo(
    () => [
      { mode: "light" as const, label: t("themeLight"), Icon: FiSun },
      { mode: "dark" as const, label: t("themeDark"), Icon: FiMoon },
      { mode: "system" as const, label: t("themeSystem"), Icon: FiMonitor },
    ],
    [t],
  );
  const TriggerIcon = themeIconMap[mode];

  return (
    <div className="themeToggleRoot" ref={rootRef}>
      <button
        type="button"
        className={open ? "themeToggleButton isOpen" : "themeToggleButton"}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`${t("themeLabel")} (${t(`theme${mode[0].toUpperCase()}${mode.slice(1)}`)})`}
        onClick={() => setOpen((current) => !current)}
      >
        <TriggerIcon aria-hidden="true" />
        <span className="themeToggleStatus">{resolvedTheme === "dark" ? t("themeDark") : t("themeLight")}</span>
      </button>

      <div className={open ? "themeToggleMenu isOpen" : "themeToggleMenu"} role="menu" aria-label={t("themeLabel")}>
        {options.map(({ mode: optionMode, label, Icon }) => (
          <button
            key={optionMode}
            type="button"
            role="menuitemradio"
            aria-checked={mode === optionMode}
            className={mode === optionMode ? "themeToggleOption active" : "themeToggleOption"}
            onClick={() => {
              onChange(optionMode);
              setOpen(false);
            }}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
