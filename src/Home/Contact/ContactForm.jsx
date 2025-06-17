import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./ContactForm.css";
import Butt from "../../Components/Butt";
import Butt_inside from "../../Components/Butt_inside";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(siteKey, { action: "submit" }).then((token) => {
        const formData = new FormData(form.current);
        formData.append("g-recaptcha-response", token);

        emailjs
          .sendForm(serviceID, templateID, form.current, publicKey)
          .then(() => alert("Message sent!"))
          .catch(() => alert("Failed to send message."));
      });
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Name" required />
      <input type="email" name="user_email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <input type="hidden" name="g-recaptcha-response" />
      <div className="grecaptcha-badge"></div>

      <Butt classs="contact">
        <button className="butt-btn contact" type="submit">
          <Butt_inside classs="contact" text="SEND" />
        </button>
      </Butt>

      <div className="recaptcha-info">
        This site is protected by reCAPTCHA and the Google&nbsp;
        <a href="https://policies.google.com/privacy" target="_blank">
          Privacy Policy
        </a>
        &nbsp;and&nbsp;
        <a href="https://policies.google.com/terms" target="_blank">
          Terms of Service
        </a>
        &nbsp;apply.
      </div>
    </form>
  );
};

export default ContactForm;
