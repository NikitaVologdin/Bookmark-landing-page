import browsers from "../data/browsers";
import BrowserItem from "../ui/BrowserItem";

export default function Download() {
  return (
    <section className="download section">
      <header className="section__header">
        <h3 className="section__title">Download the extension</h3>
        <p className="section__description">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favorite you’d like us to prioritize.
        </p>
      </header>
      <div className="download__browsers browsers">
        {browsers.map((browser) => (
          <BrowserItem
            key={browser.name}
            name={browser.name}
            href={browser.href}
            minVersion={browser.minVersion}
          />
        ))}
      </div>
    </section>
  );
}
