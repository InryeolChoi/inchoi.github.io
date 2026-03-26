import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { portfolioItems } from "../data/siteContent";
import type { Locale } from "../types";
import { SectionHeading } from "./SectionHeading";

type PortfolioProps = {
  locale: Locale;
};

export function Portfolio({ locale }: PortfolioProps) {
  const { t } = useTranslation();

  return (
    <section className="contentSection">
      <SectionHeading id="portfolio" title={t("portfolioTitle")} lead={t("portfolioLead")} />
      <div className="cardGrid">
        {portfolioItems.map((item, index) => (
          <motion.article
            key={item.title}
            className="panelCard"
            initial={{ y: 26, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="cardHeader">
              <h3>{item.title}</h3>
              <a href={item.githubUrl} target="_blank" rel="noreferrer">
                {t("github")}
              </a>
            </div>
            <p>{item.description[locale]}</p>
            <div className="metaRow">
              <span className="metaHeading">{t("techStack")}</span>
              <div className="tagList compact">
                {item.techStack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
