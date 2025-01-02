import { useState } from "react";
import { validateEmail } from "../lib/validators";
import { motion, AnimatePresence } from "motion/react";
import { getWindowDimensions } from "../lib/utils";

interface props {
  amount: string;
}

export default function ContactForm({ amount }: props) {
  const [emailError, setEmailError] = useState(false);
  const [windowDimensions] = useState<{
    width: number;
    height: number;
  }>(getWindowDimensions());

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    const value = (event.target as HTMLFormElement).email.value;
    const isEmailValid = validateEmail(value);
    if (isEmailValid) {
      console.log("Email submitted");
      setEmailError(false);
    }
    if (!isEmailValid) {
      setEmailError(true);
    }
  }

  return (
    <form className="contact" onSubmit={submitHandler} noValidate>
      <span className="contact__amount">{amount}+ ALREADY JOINED</span>
      <fieldset className="contact__fieldset">
        <legend className="contact__legend">
          Stay up-to-date with what<br></br> we’re doing
        </legend>
        <div className="contact__form-control">
          <label className="contact__label visually-hidden" htmlFor="email">
            Please enter your email:
          </label>
          <div className="contact__input-group">
            <input
              className={`contact__input ${
                emailError ? "contact__input_error" : ""
              }`}
              type="email"
              id="email"
              placeholder="example@email.com"
              aria-required="true"
              aria-describedby="email-error"
              aria-invalid={emailError}
              autoComplete="true"
              name="email"
            />
            <AnimatePresence initial={false}>
              {emailError && (
                <motion.span
                  className="contact__error"
                  id="email-error"
                  initial={{ opacity: 0, bottom: 0 }}
                  animate={{
                    opacity: 1,
                    bottom: windowDimensions.width < 768 ? -25 : -36,
                  }}
                  exit={{ opacity: 0, bottom: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <i>Whoops, make sure it’s an email</i>
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <button className="contact__submit">Contact us</button>
        </div>
      </fieldset>
    </form>
  );
}
