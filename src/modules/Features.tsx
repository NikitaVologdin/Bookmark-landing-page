import Tabs from "../components/Tabs";
import features from "../data/features";

export default function Features() {
  return (
    <section className="features section">
      <header className="section__header">
        <h2 className="section__title">Features</h2>
        <p className="section__description">
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </header>
      <Tabs content={features} />
    </section>
  );
}
