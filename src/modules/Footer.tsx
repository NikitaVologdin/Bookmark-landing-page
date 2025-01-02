interface props {
  children: React.ReactNode;
}

export default function Footer({ children }: props) {
  return <footer className="footer">{children}</footer>;
}
