import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";

type IntroOverlayProps = {
  show: boolean;
};

export function IntroOverlay({ show }: IntroOverlayProps) {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="introOverlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <motion.div
            className="introPanel"
            initial={{ scale: 0.92, opacity: 0.35 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="introLabel"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.12, duration: 0.45 }}
            >
              {t("introTitle")}
            </motion.p>
            <motion.h1
              className="introHeading"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.55 }}
            >
              {t("brand")}
            </motion.h1>
            <motion.p
              className="introSubtitle"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.55 }}
            >
              {t("introSubtitle")}
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
