import Accordion from "../components/accordion/Accordion";
import faq from "../data/faq";

export default function Faq() {
  return (
    <section className="faq section">
      <header className="section__header">
        <h3 className="section__title">Frequently Asked Questions</h3>
        <p className="section__description">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </header>
      <Accordion faq={faq} />
    </section>
  );
}
