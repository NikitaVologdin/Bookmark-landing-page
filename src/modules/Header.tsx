interface props {
  children: React.ReactNode;
}

export default function Header({ children }: props) {
  return <header className="header">{children}</header>;
}
