import { motion } from "motion/react";
import { FaJava, FaReact } from "react-icons/fa6";
import {
  SiC,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGooglecloud,
  SiGithubactions,
  SiLinux,
  SiNginx,
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
import { getRevealMotion, useIsCompactViewport } from "../hooks/useViewportReveal";
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
  git: SiGit,
  python: SiPython,
  postgresql: SiPostgresql,
  docker: SiDocker,
  django: SiDjango,
  githubactions: SiGithubactions,
  gcp: SiGooglecloud,
  c: SiC,
  cplusplus: SiCplusplus,
  linux: SiLinux,
  nginx: SiNginx,
  spring: SiSpring,
  swift: SiSwift,
  r: SiR,
};

export function Skills({ locale }: SkillsProps) {
  const { t } = useTranslation();
  const isCompact = useIsCompactViewport();

  return (
    <section className="contentSection">
      <SectionHeading id="skills" title={t("skillsTitle")} />
      <div className="skillsList">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.title.en}
            className="stackSection"
            {...getRevealMotion(isCompact, {
              axis: "y",
              offset: 30,
              mobileOffset: 8,
              duration: 0.45,
              delay: index * 0.08,
              amount: 0.35,
              mobileAmount: 0.08,
            })}
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
