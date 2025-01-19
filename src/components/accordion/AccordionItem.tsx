import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import AccordionExpandIcon from "./AccordionExpandIcon";

interface props {
  question: string;
  answer: string;
  index: number;
}

export default function AccordionItem({ question, answer, index }: props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function clickHandler() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="accordion__item">
      <h4 className="accordion__question">
        <button
          type="button"
          aria-expanded={isExpanded}
          className="accordion__button"
          aria-controls={"answer" + index}
          id={"accordion" + index}
          onClick={clickHandler}
        >
          <span className="accordion__title">{question}</span>
          <AccordionExpandIcon isExpanded={isExpanded} />
        </button>
      </h4>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.article
            id={"answer" + index}
            role="region"
            aria-labelledby={"accordion" + index}
            className="accordion__answer"
            initial={{ opacity: 0, height: 0, paddingBottom: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              paddingBottom: 15,
            }}
            exit={{ opacity: 0, height: 0, paddingBottom: 0 }}
            transition={{
              // opacity: { duration: 0.4 },
              height: { duration: 0.2 },
              paddingBottom: { duration: 0.4 },
            }}
          >
            <p>{answer}</p>
          </motion.article>
        )}
      </AnimatePresence>
    </div>
  );
}
