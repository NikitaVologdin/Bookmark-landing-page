import { motion } from "motion/react";

interface props {
  isExpanded: boolean;
}

export default function AccordionExpandIcon({ isExpanded }: props) {
  return (
    <motion.svg
      width="20"
      height="13"
      viewBox="0 0 20 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        rotate: isExpanded ? 180 : 0,
        color: isExpanded ? "var(--soft-red)" : "var(--soft-blue)",
      }}
      transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
    >
      <path d="M2 2L10 10L18 2" stroke="#5267DF" strokeWidth="3" />
    </motion.svg>
  );
}
