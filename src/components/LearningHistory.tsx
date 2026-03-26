import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { learningHistoryItems } from "../data/siteContent";
import type { Locale } from "../types";
import { SectionHeading } from "./SectionHeading";

type LearningHistoryProps = {
  locale: Locale;
};

export function LearningHistory({ locale }: LearningHistoryProps) {
  const { t } = useTranslation();

  return (
    <section className="contentSection">
      <SectionHeading
        id="learning-history"
        title={t("learningHistoryTitle")}
        lead={t("learningHistoryLead")}
      />
      <div className="timelineList">
        {learningHistoryItems.map((item, index) => (
          <motion.div
            key={`${item.institution}-${item.period}`}
            className="timelineItem"
            initial={{ x: -24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="timelineBody">
              <p className="timelinePeriod">{item.period}</p>
              <h3>{item.institution}</h3>
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
