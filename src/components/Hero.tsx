import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { profile, sectionAnchors } from "../data/siteContent";
import type { Locale } from "../types";

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section className="heroSection" id="about">
      <div className="heroCopy">
        <motion.p
          className="eyebrow"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45 }}
        >
          {t("heroEyebrow")}
        </motion.p>
        <motion.h1
          className="heroTitle"
          initial={{ y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="heroHeadline"
          initial={{ y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {profile.headline[locale]}
        </motion.p>
        <motion.p
          className="heroIntro"
          initial={{ y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          {profile.intro[locale]}
        </motion.p>

        <motion.div
          className="heroMeta"
          initial={{ y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <div className="metaCard">
            <span className="metaLabel">{t("contact")}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="metaCard">
            <span className="metaLabel">{t("location")}</span>
            <span>{profile.location[locale]}</span>
          </div>
        </motion.div>

        <motion.div
          className="heroActions"
          initial={{ y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          <a className="primaryButton" href={profile.resumeLinks[locale].href}>
            {profile.resumeLinks[locale].label}
          </a>
          <a className="secondaryButton" href={profile.socialLinks[0].href} target="_blank" rel="noreferrer">
            {t("viewGithub")}
          </a>
        </motion.div>

        <motion.nav
          className="anchorNav"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {sectionAnchors.map((anchor) => (
            <a key={anchor.id} href={`#${anchor.id}`}>
              {anchor.label[locale]}
            </a>
          ))}
        </motion.nav>
      </div>

      <motion.div
        className="heroVisual"
        initial={{ x: 24, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="photoShell">
          <img alt={`${profile.name} profile`} className="profilePhoto" src={profile.photoPath} />
        </div>
        <div className="tipCard">
          <p>{t("heroPrimary")}</p>
          <span>{t("heroSecondary")}</span>
        </div>
      </motion.div>
    </section>
  );
}
