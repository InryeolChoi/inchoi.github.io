import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { otherItems } from "../data/siteContent";
import { getRevealMotion, useIsCompactViewport } from "../hooks/useViewportReveal";
import type { Locale } from "../types";
import { SectionHeading } from "./SectionHeading";

type OtherProps = {
  locale: Locale;
};

export function Other({ locale }: OtherProps) {
  const { t } = useTranslation();
  const isCompact = useIsCompactViewport();
  const [openInfoIndex, setOpenInfoIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!sectionRef.current?.contains(target) || !target.closest(".certificationTitleWrap")) {
        setOpenInfoIndex(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  return (
    <section className="contentSection">
      <SectionHeading id="other" title={t("otherTitle")} />
      <div className="timelineList" ref={sectionRef}>
        {otherItems.map((item, index) => (
          <motion.div
            key={`${item.organization.en}-${item.period}`}
            className="timelineItem"
            {...getRevealMotion(isCompact, {
              axis: "x",
              offset: -24,
              mobileOffset: -8,
              duration: 0.5,
              delay: index * 0.08,
              amount: 0.3,
              mobileAmount: 0.08,
            })}
          >
            <div className="timelineBody">
              <p className="timelinePeriod">{item.period}</p>
              <h3>
                {locale === "en" && item.organization.en === "KATUSA" ? (
                  <span className="certificationTitleWrap">
                    <button
                      type="button"
                      className="certificationTitleButton"
                      aria-expanded={openInfoIndex === index}
                      aria-controls={`other-info-${index}`}
                      onClick={() => setOpenInfoIndex(openInfoIndex === index ? null : index)}
                    >
                      {item.organization.en}
                    </button>
                    {openInfoIndex === index ? (
                      <span className="certificationTooltip" id={`other-info-${index}`} role="note">
                        {t("katusaDescription")}
                      </span>
                    ) : null}
                  </span>
                ) : (
                  item.organization[locale]
                )}
              </h3>
              <p className="timelineSubtitle">{item.role[locale]}</p>
              <p>{item.summary[locale]}</p>
              <ul className="highlightList">
                {item.highlights[locale].map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
