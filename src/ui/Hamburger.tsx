interface props {
  onOpenDialog: (arg: boolean) => void;
}

export default function Hamburger({ onOpenDialog }: props) {
  return (
    <button
      className="visible-mobile hamburger"
      onClick={() => onOpenDialog(true)}
    >
      <img src="/images/icon-hamburger.svg" alt="" width={18} height={15} />
      <span className="visually-hidden">Open menu</span>
    </button>
  );
}
