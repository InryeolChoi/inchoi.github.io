import { motion } from "motion/react";

type SectionHeadingProps = {
  id: string;
  title: string;
  lead?: string;
};

export function SectionHeading({ id, title, lead }: SectionHeadingProps) {
  return (
    <motion.div
      className="sectionHeading"
      id={id}
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
    >
      <p className="sectionKicker">{title}</p>
      {lead ? <p className="sectionLead">{lead}</p> : null}
    </motion.div>
  );
}
