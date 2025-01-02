import LinkButton from "../ui/LinkButton";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__img-container">
        <img
          className="hero__img"
          src="/images/illustration-hero.svg"
          alt="Shows browser window"
          width={313}
          height={209}
        />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">A Simple Bookmark Manager</h1>
        <p className="hero__paragraph">
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="hero__links">
          <LinkButton href="#">Get it on Chrome</LinkButton>
          <LinkButton href="#" className="link-button_grey">
            Get it on Firefox
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
