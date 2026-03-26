import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { certificationItems } from "../data/siteContent";
import type { Locale } from "../types";
import { SectionHeading } from "./SectionHeading";

type CertificationsProps = {
  locale: Locale;
};

export function Certifications({ locale }: CertificationsProps) {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!sectionRef.current?.contains(target) || !target.closest(".certificationTitleWrap")) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  return (
    <section className="contentSection">
      <SectionHeading id="certifications" title={t("certificationsTitle")} />
      <div className="certificationGrid" ref={sectionRef}>
        {certificationItems.map((item, index) => (
          <motion.article
            key={`${item.title.en}-${item.acquiredAt}`}
            className="panelCard certificationCard"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="certificationHeader">
              <div className="certificationTitleWrap">
                {locale === "en" && item.description ? (
                  <>
                    <button
                      type="button"
                      className="certificationTitleButton"
                      aria-expanded={openIndex === index}
                      aria-controls={`certification-tooltip-${index}`}
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                      {item.title[locale]}
                    </button>
                    {openIndex === index ? (
                      <div className="certificationTooltip" id={`certification-tooltip-${index}`} role="note">
                        {item.description[locale]}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <h3>{item.title[locale]}</h3>
                )}
              </div>
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
