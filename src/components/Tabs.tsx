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
        <div className="tabs__list" role="tablist">
          {content.map((item, index) => {
            const isActive = activeTab === index;
            const activeClass = isActive ? "tabs__item_active" : "";
            return (
              <button
                className={`tabs__item tabs__button ${activeClass}`}
                key={item.title}
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={"panel" + index}
                onClick={() => setActiveTab(index)}
              >
                {item.title}

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
              </button>
            );
          })}
        </div>
      </header>
      <div className="tabs__content">
        <AnimatePresence>
          {content.map((item, index) => {
            return (
              <motion.div
                className={`tabs__article ${
                  activeTab === index ? "" : "tabs__article_hidden"
                }`}
                aria-labelledby={"panel" + index}
                hidden={false}
                role="tabpanel"
                key={item.heading}
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
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
                <div className="tabs__article-content">
                  <h3 className="tabs__heading">{item.heading}</h3>
                  <p className="tabs__paragraph">{item.paragraph}</p>
                  <LinkButton className="tabs__article-button" href="">
                    More Info
                  </LinkButton>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
