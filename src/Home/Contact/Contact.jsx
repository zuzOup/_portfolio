import { useEffect, useRef } from "react";

import SectionHeader from "../../Components/SectionHeader";
import ContactForm from "./ContactForm";

import "./Contact.css";

import { useHistory } from "react-router-dom";

import useFadeInOnScroll_hook from "../../hooks/fadeInOnScroll_hook";

import FadeInDiv from "../../Components/FadeInDiv";

function Contact() {
  const history = useHistory();

  const refContact = useRef();
  const isVisible = useFadeInOnScroll_hook(refContact);

  useEffect(() => {
    let pageUrl = window.location.href;
    if (pageUrl.includes("#contact")) {
      const contactSection = document.getElementById("contact");
      contactSection.scrollIntoView({ block: "end", inline: "nearest" });
      history.push("/");
    }
  });

  return (
    <section id="contact" className={isVisible ? "loaded" : ""}>
      <SectionHeader title={"Contact"} ref={refContact} />
      <FadeInDiv className="text" isVisible={isVisible}>
        <p>
          If you like my work and would like me to be part of your team, please feel free
          to reach out. You can contact me via email at&nbsp;
          <a href="mailto:zuzanaoupicka@gmail.com" target="_blank">
            zuzanaoupicka@gmail.com
          </a>
          &nbsp;or through the contact form below. Thanks for stopping by my portfolio!
        </p>
        <ContactForm />
      </FadeInDiv>
    </section>
  );
}
export default Contact;
