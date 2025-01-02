interface props {
  classList?: string;
}

export default function Nav({ classList }: props) {
  return (
    <nav className={`nav ${classList ? classList : ""}`}>
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#">
            features
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            pricing
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            contact
          </a>
        </li>
        <li>
          <button className="nav__login">Login</button>
        </li>
      </ul>
    </nav>
  );
}
