import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { experienceItems } from "../data/siteContent";
import type { Locale } from "../types";
import { SectionHeading } from "./SectionHeading";

type ExperienceProps = {
  locale: Locale;
};

export function Experience({ locale }: ExperienceProps) {
  const { t } = useTranslation();

  return (
    <section className="contentSection">
      <SectionHeading id="experience" title={t("experienceTitle")} lead={t("experienceLead")} />
      <div className="timelineList">
        {experienceItems.map((item, index) => (
          <motion.div
            key={`${item.company.en}-${item.period}`}
            className="timelineItem"
            initial={{ x: -24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="timelineBody">
              <p className="timelinePeriod">{item.period}</p>
              <h3>{item.company[locale]}</h3>
              <p className="timelineSubtitle">{item.position[locale]}</p>
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
