import LinkButton from "../../ui/LinkButton";
import AccordionItem from "./AccordionItem";

interface props {
  faq: {
    question: string;
    answer: string;
  }[];
  className?: string;
}

export default function Accordion({ faq, className }: props) {
  const accordionClass = className ? className : "";
  return (
    <div className={`accordion ${accordionClass}`}>
      {faq.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            index={index}
          />
        );
      })}
      <div className="accordion__more-info">
        <LinkButton href="#" className="accordion__more-info">
          More Info
        </LinkButton>
      </div>
    </div>
  );
}
