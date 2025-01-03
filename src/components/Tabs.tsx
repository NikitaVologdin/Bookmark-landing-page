import { useState } from "react";
import LinkButton from "../ui/LinkButton";
import { AnimatePresence, motion } from "motion/react";

interface IContent {
  title: string;
  heading: string;
  paragraph: string;
  image: string;
  alt: string;
}

interface props {
  content: IContent[];
}

export default function Tabs({ content }: props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <header className="tabs__header">
        <ul className="tabs__list" role="tablist">
          {content.map((item, index) => {
            const isActive = activeTab === index;
            const activeClass = isActive ? "tabs__item_active" : "";
            return (
              <li
                className={`tabs__item ${activeClass}`}
                key={item.title}
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={"panel" + index}
              >
                <button
                  className="tabs__button"
                  onClick={() => setActiveTab(index)}
                >
                  {item.title}
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="tabs__item_border"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </header>
      <div className="tabs__content">
        <AnimatePresence>
          <motion.div
            className="tabs__article"
            aria-labelledby={"panel" + activeTab}
            hidden={false}
            role="tabpanel"
            key={content[activeTab].heading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <div className="tabs__img-container">
              <img
                className="tabs__img"
                width={311}
                height={201}
                src={content[activeTab].image}
                alt={content[activeTab].alt}
              />
            </div>
            <div className="tabs__article-content">
              <h3 className="tabs__heading">{content[activeTab].heading}</h3>
              <p className="tabs__paragraph">{content[activeTab].paragraph}</p>
              <LinkButton className="tabs__article-button" href="">
                More Info
              </LinkButton>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
