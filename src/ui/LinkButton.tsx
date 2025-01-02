interface props {
  children: string;
  className?: string;
  href: string;
}

export default function LinkButton({ children, className, href }: props) {
  const buttonClass = className ? className : "";
  return (
    <a href={href} className={`link-button ${buttonClass}`}>
      {children}
    </a>
  );
}
