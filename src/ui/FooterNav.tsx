import Social from "../ui/Social";

export default function FooterNav() {
  return (
    <div className="footer-nav">
      <a href="/" className="footer-nav__logo">
        <span className="visually-hidden">To homepage</span>
        <img
          src="/images/logo-bookmark-dark.svg"
          alt=""
          width={149}
          height={25}
        />
      </a>
      <ul className="footer-nav__list">
        <li className="footer-nav__item">
          <a className="footer-nav__link" href="#">
            Features
          </a>
        </li>
        <li className="footer-nav__item">
          <a className="footer-nav__link" href="#">
            Pricing
          </a>
        </li>
        <li className="footer-nav__item">
          <a className="footer-nav__link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <Social />
    </div>
  );
}
