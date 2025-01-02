import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Header from "./modules/Header";
import Logo from "./ui/Logo";
import Hamburger from "./ui/Hamburger";
import Nav from "./ui/Nav";
import Dialog from "./components/Dialog";
import Social from "./ui/Social";
import Main from "./modules/Main";
import Hero from "./components/Hero";
import Features from "./modules/Features";
import Download from "./modules/Download";
import Faq from "./modules/Faq";
import Footer from "./modules/Footer";
import ContactForm from "./components/ContactForm";
import FooterNav from "./ui/FooterNav";

export default function App() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Header>
        <Logo />
        <Hamburger onOpenDialog={setOpenDialog} />
        <Nav classList="hidden-mobile" />
      </Header>
      <Main>
        <Hero />
        <Features />
        <Download />
        <Faq />
      </Main>
      <Footer>
        <section className="contact-section">
          <ContactForm amount="35,000" />
        </section>
        <section className="links-section">
          <FooterNav />
        </section>
      </Footer>
      <AnimatePresence>
        {openDialog && (
          <Dialog dialogOpen={openDialog} onOpenDialog={setOpenDialog}>
            <Nav />
            <Social />
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
