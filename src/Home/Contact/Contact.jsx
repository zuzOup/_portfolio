import Button_GetInTouch from "../../Components/Button_GetInTouch";
import SectionHeader from "../../Components/SectionHeader";
import ContactForm from "./ContactForm";

import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <SectionHeader title={"Contact"} class_title={"contact"} />
      <div className="text">
        <p>
          If you like my work and would like me to be part of your team, please feel free
          to reach out. You can contact me via email at&nbsp;
          <a href="mailto:zuzanaoupicka@gmail.com" target="_blank">
            zuzanaoupicka@gmail.com
          </a>
          . Thanks for stopping by my portfolio!
        </p>
        <Button_GetInTouch />
      </div>
      <ContactForm />
    </section>
  );
}
export default Contact;
