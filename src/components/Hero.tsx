import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { profile, sectionAnchors } from "../data/siteContent";
import { getRevealMotion, useIsCompactViewport } from "../hooks/useViewportReveal";
import type { Locale } from "../types";

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const { t } = useTranslation();
  const isCompact = useIsCompactViewport();
  const headlineLines = profile.headline[locale].split("\n");
  const introParagraphs = profile.intro[locale].split("\n\n");

  return (
    <section className="heroSection" id="about">
      <motion.h1
        className="heroTitle"
        {...getRevealMotion(isCompact, {
          axis: "y",
          offset: 28,
          mobileOffset: 8,
          duration: 0.55,
          delay: 0.05,
          amount: 0.6,
          mobileAmount: 0.05,
        })}
      >
        {profile.name}
      </motion.h1>

      <div className="heroBody">
        <motion.div
          className="heroVisual"
          {...getRevealMotion(isCompact, {
            axis: "x",
            offset: 24,
            mobileOffset: 8,
            duration: 0.7,
            amount: 0.4,
            mobileAmount: 0.05,
          })}
        >
          <div className="photoShell">
            <img alt={`${profile.name} profile`} className="profilePhoto" src={profile.photoPath} />
          </div>
        </motion.div>

        <div className="heroCopy">
          <motion.p
            className="eyebrow"
            {...getRevealMotion(isCompact, {
              axis: "y",
              offset: 20,
              mobileOffset: 8,
              duration: 0.45,
              amount: 0.6,
              mobileAmount: 0.05,
            })}
          >
            {t("heroEyebrow")}
          </motion.p>
          <motion.p
            className={headlineLines.length > 1 ? "heroHeadline isMultiline" : "heroHeadline"}
            {...getRevealMotion(isCompact, {
              axis: "y",
              offset: 28,
              mobileOffset: 8,
              duration: 0.55,
              delay: 0.1,
              amount: 0.6,
              mobileAmount: 0.05,
            })}
          >
            {headlineLines.map((line) => (
              <span key={line} className="heroHeadlineLine">
                {line}
              </span>
            ))}
          </motion.p>
          <motion.div
            className="heroIntro"
            {...getRevealMotion(isCompact, {
              axis: "y",
              offset: 28,
              mobileOffset: 8,
              duration: 0.55,
              delay: 0.15,
              amount: 0.5,
              mobileAmount: 0.05,
            })}
          >
            {introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="personalInfoBlock"
        {...getRevealMotion(isCompact, {
          axis: "y",
          offset: 28,
          mobileOffset: 8,
          duration: 0.55,
          delay: 0.2,
          amount: 0.6,
          mobileAmount: 0.05,
        })}
      >
        <p className="sectionKicker">{t("personalInfo")}</p>
        <div className="personalInfoList">
          <div className="personalInfoRow">
            <span className="metaLabel">{t("contact")}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="personalInfoRow">
            <span className="metaLabel">{t("githubProfile")}</span>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              {profile.githubUrl}
            </a>
          </div>
        </div>
      </motion.div>

      <motion.nav
        className="anchorNav"
        {...getRevealMotion(isCompact, {
          axis: "y",
          offset: 14,
          mobileOffset: 6,
          duration: 0.6,
          delay: 0.3,
          amount: 0.6,
          mobileAmount: 0.05,
        })}
      >
        {sectionAnchors.map((anchor) => (
          <a key={anchor.id} href={`#${anchor.id}`}>
            {anchor.label[locale]}
          </a>
        ))}
      </motion.nav>
    </section>
  );
}
