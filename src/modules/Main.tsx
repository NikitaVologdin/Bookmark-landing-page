interface props {
  children: React.ReactNode;
}

export default function Main({ children }: props) {
  return <main className="main">{children}</main>;
}
