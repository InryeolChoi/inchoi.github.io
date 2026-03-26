import { motion } from "motion/react";
import { FaJava, FaReact } from "react-icons/fa6";
import {
  SiC,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiLinux,
  SiPostgresql,
  SiPython,
  SiR,
  SiSpring,
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
  django: SiDjango,
  githubactions: SiGithubactions,
  c: SiC,
  cplusplus: SiCplusplus,
  linux: SiLinux,
  spring: SiSpring,
  swift: SiSwift,
  r: SiR,
};

export function Skills({ locale }: SkillsProps) {
  const { t } = useTranslation();

  return (
    <section className="contentSection">
      <SectionHeading id="skills" title={t("skillsTitle")} lead={t("skillsLead")} />
      <div className="skillsList">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.title.en}
            className="stackSection"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="stackSectionHeader">
              <h3>{category.title[locale]}</h3>
            </div>
            <div className="stackLineList">
              {category.items.map((item) => {
                const Icon = iconMap[item.iconKey];

                return (
                  <article key={item.name} className="stackLineItem">
                    <div className="stackLineHeader">
                      <div className="skillIconBox">{Icon ? <Icon /> : null}</div>
                      <div className="skillText">
                        <h4>{item.name}</h4>
                        <p>
                          {item.description[locale].map((part, partIndex) =>
                            part.href ? (
                              <a
                                key={`${item.name}-${locale}-${partIndex}`}
                                className="skillInlineLink"
                                href={part.href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {part.text}
                              </a>
                            ) : (
                              <span key={`${item.name}-${locale}-${partIndex}`}>{part.text}</span>
                            ),
                          )}
                        </p>
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
