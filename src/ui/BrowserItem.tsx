import LinkButton from "../ui/LinkButton";

interface props {
  name: string;
  href: string;
  minVersion: string;
}

export default function BrowserItem({ name, href, minVersion }: props) {
  return (
    <div className="browsers__item browsers-item">
      <img
        className="browsers-item__image"
        src={`/images/logo-${name.toLowerCase()}.svg`}
        alt=""
        width={102}
        height={100}
      />
      <h4 className="browsers-item__heading">Add to {name}</h4>
      <p className="browsers-item__paragraph">Minimum version {minVersion}</p>
      <div className="browsers-item__border"></div>
      <LinkButton href={href}>Add & Install Extension</LinkButton>
    </div>
  );
}
