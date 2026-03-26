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
      <div className="stackedCards">
        {experienceItems.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            className="wideCard"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="wideCardHeader">
              <div>
                <p className="timelinePeriod">{item.period}</p>
                <h3>{item.company}</h3>
                <p className="wideCardRole">{item.position[locale]}</p>
              </div>
            </div>
            <p>{item.summary[locale]}</p>
            <ul className="highlightList">
              {item.highlights[locale].map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
