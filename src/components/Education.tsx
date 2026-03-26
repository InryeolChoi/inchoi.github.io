import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { educationItems } from "../data/siteContent";
import type { Locale } from "../types";
import { SectionHeading } from "./SectionHeading";

type EducationProps = {
  locale: Locale;
};

export function Education({ locale }: EducationProps) {
  const { t } = useTranslation();

  return (
    <section className="contentSection">
      <SectionHeading id="education" title={t("educationTitle")} lead={t("educationLead")} />
      <div className="stackedCards">
        {educationItems.map((item, index) => (
          <motion.article
            key={`${item.institution}-${item.period}`}
            className="wideCard"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="wideCardHeader">
              <div>
                <p className="timelinePeriod">{item.period}</p>
                <h3>{item.institution}</h3>
                <p className="wideCardRole">{item.program[locale]}</p>
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
