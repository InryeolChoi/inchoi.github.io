import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { otherItems } from "../data/siteContent";
import type { Locale } from "../types";
import { SectionHeading } from "./SectionHeading";

type OtherProps = {
  locale: Locale;
};

export function Other({ locale }: OtherProps) {
  const { t } = useTranslation();

  return (
    <section className="contentSection">
      <SectionHeading id="other" title={t("otherTitle")} lead={t("otherLead")} />
      <div className="timelineList">
        {otherItems.map((item, index) => (
          <motion.div
            key={`${item.organization.en}-${item.period}`}
            className="timelineItem"
            initial={{ x: -24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="timelineBody">
              <p className="timelinePeriod">{item.period}</p>
              <h3>{item.organization[locale]}</h3>
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
