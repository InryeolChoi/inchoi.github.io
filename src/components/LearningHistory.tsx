import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { learningHistoryItems } from "../data/siteContent";
import { getRevealMotion, useIsCompactViewport } from "../hooks/useViewportReveal";
import type { Locale } from "../types";
import { SectionHeading } from "./SectionHeading";

type LearningHistoryProps = {
  locale: Locale;
};

export function LearningHistory({ locale }: LearningHistoryProps) {
  const { t } = useTranslation();
  const isCompact = useIsCompactViewport();

  return (
    <section className="contentSection">
      <SectionHeading id="learning-history" title={t("learningHistoryTitle")} />
      <div className="timelineList">
        {learningHistoryItems.map((item, index) => (
          <motion.div
            key={`${item.institution.en}-${item.period}`}
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
              <h3>{item.institution[locale]}</h3>
              <p className="timelineSubtitle">{item.program[locale]}</p>
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
