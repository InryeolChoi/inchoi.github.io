import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { skillCategories } from "../data/siteContent";
import type { Locale } from "../types";
import { SectionHeading } from "./SectionHeading";

type SkillsProps = {
  locale: Locale;
};

export function Skills({ locale }: SkillsProps) {
  const { t } = useTranslation();

  return (
    <section className="contentSection">
      <SectionHeading id="skills" title={t("skillsTitle")} lead={t("skillsLead")} />
      <div className="skillsGrid">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.title.en}
            className="panelCard"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <h3>{category.title[locale]}</h3>
            <div className="tagList">
              {category.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
