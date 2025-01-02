import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

interface props {
  children: React.ReactNode;
  dialogOpen: boolean;
  onOpenDialog: (open: boolean) => void;
}

export default function Dialog({ children, dialogOpen, onOpenDialog }: props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogOpen) {
      return dialogRef.current?.showModal();
    }
    dialogRef.current?.close();
  }, [dialogOpen]);

  function dialogCloseHandler() {
    onOpenDialog(false);
  }

  const dialog = (
    <motion.dialog
      className="dialog"
      ref={dialogRef}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut", type: "tween" }}
    >
      <header className="dialog__header">
        <img
          src="/images/logo-bookmark-dark.svg"
          width={148}
          height={25}
          alt=""
        />
        <button className="dialog__close" onClick={dialogCloseHandler}>
          <img src="/images/icon-close.svg" width={15} height={15} alt="" />
          <span className="visually-hidden">Close dialog</span>
        </button>
      </header>
      {children}
    </motion.dialog>
  );
  return createPortal(dialog, document.body);
}
