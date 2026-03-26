import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { certificationItems } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  const { t } = useTranslation();

  return (
    <section className="contentSection">
      <SectionHeading
        id="certifications"
        title={t("certificationsTitle")}
        lead={t("certificationsLead")}
      />
      <div className="certificationGrid">
        {certificationItems.map((item, index) => (
          <motion.article
            key={`${item.title}-${item.acquiredAt}`}
            className="panelCard certificationCard"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="certificationHeader">
              <h3>{item.title}</h3>
              {item.grade ? <span className="tag">{item.grade}</span> : null}
            </div>
            <div className="certificationMetaRow">
              <span className="metaHeading">{t("acquiredAt")}</span>
              <p>{item.acquiredAt}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
