import { motion } from "motion/react";

import { getRevealMotion, useIsCompactViewport } from "../hooks/useViewportReveal";

type SectionHeadingProps = {
  id: string;
  title: string;
  lead?: string;
};

export function SectionHeading({ id, title, lead }: SectionHeadingProps) {
  const isCompact = useIsCompactViewport();
  const reveal = getRevealMotion(isCompact, {
    axis: "y",
    offset: 24,
    mobileOffset: 8,
    duration: 0.5,
    amount: 0.6,
    mobileAmount: 0.05,
  });

  return (
    <motion.div
      className="sectionHeading"
      id={id}
      {...reveal}
    >
      <p className="sectionKicker">{title}</p>
      {lead ? <p className="sectionLead">{lead}</p> : null}
    </motion.div>
  );
}
