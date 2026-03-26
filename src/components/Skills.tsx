import { motion } from "motion/react";
import { FaJava, FaReact } from "react-icons/fa6";
import {
  SiC,
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiPostgresql,
  SiPython,
  SiR,
  SiSwift,
  SiTypescript,
} from "react-icons/si";
import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";

import { skillCategories } from "../data/siteContent";
import type { Locale } from "../types";
import { SectionHeading } from "./SectionHeading";

type SkillsProps = {
  locale: Locale;
};

const iconMap: Record<string, IconType> = {
  java: FaJava,
  react: FaReact,
  typescript: SiTypescript,
  fastapi: SiFastapi,
  python: SiPython,
  postgresql: SiPostgresql,
  docker: SiDocker,
  githubactions: SiGithubactions,
  c: SiC,
  cplusplus: SiCplusplus,
  swift: SiSwift,
  r: SiR,
};

export function Skills({ locale }: SkillsProps) {
  const { t } = useTranslation();

  return (
    <section className="contentSection">
      <SectionHeading id="skills" title={t("skillsTitle")} lead={t("skillsLead")} />
      <div className="skillsColumns">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.title.en}
            className="stackColumn"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <h3>{category.title[locale]}</h3>
            <div className="stackItemList">
              {category.items.map((item) => {
                const Icon = iconMap[item.iconKey];

                return (
                  <article key={item.name} className="stackItemCard">
                    <div className="stackItemHeader">
                      <div className="skillIconBox">{Icon ? <Icon /> : null}</div>
                      <div className="skillText">
                        <h4>{item.name}</h4>
                        <p>{item.description[locale]}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
