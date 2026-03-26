import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { timelineItems } from "../data/siteContent";
import type { Locale } from "../types";
import { SectionHeading } from "./SectionHeading";

type TimelineProps = {
  locale: Locale;
};

export function Timeline({ locale }: TimelineProps) {
  const { t } = useTranslation();

  return (
    <section className="contentSection">
      <SectionHeading id="timeline" title={t("timelineTitle")} lead={t("timelineLead")} />
      <div className="timelineList">
        {timelineItems.map((item, index) => (
          <motion.article
            key={`${item.period}-${item.title.en}`}
            className="timelineItem"
            initial={{ x: -24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="timelineMarker" />
            <div className="timelineBody">
              <span className="timelinePeriod">{item.period}</span>
              <h3>{item.title[locale]}</h3>
              <p className="timelineSubtitle">{item.subtitle[locale]}</p>
              <p>{item.summary[locale]}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
