import { useReducer, useRef } from "react";
import emailjs from "@emailjs/browser";

import "./ContactForm.css";

import Contact__Input from "./Contact__Input";
import Contact__TextArea from "./Contact__TextArea";

import Butt from "../../Components/Butt";
import Butt_inside from "../../Components/Butt_inside";

import Recaptcha from "./Recaptcha";
import Contact__ConfirmationMessage from "./Contact__ConfirmationMessage";

const highlightError = async (id) => {
  const element = document.getElementById(id);
  element.classList.add("error-flash");
  await new Promise((res) => setTimeout(res, 600));
  element.classList.remove("error-flash");
};

const initialState = {
  values: { user_name: "", user_email: "", message: "" },
  errors: { user_name: "", user_email: "", message: "" },
  confirmation_hidden: true,
};

const errorMessages = {
  user_email: "Please enter an email address.",
  user_name: "Please enter your name.",
  message: "Please enter your message.",
  email_invalid: "Please enter a valid email address.",
};

function formReducer(state, action) {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        values: { ...state.values, [action.field]: action.value },
      };
    case "SET_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error },
      };
    case "HIDE_CONFIRMATION":
      return initialState;
    case "RESET":
      return { ...initialState, confirmation_hidden: false };
    default:
      return state;
  }
}

function isValidEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
}

const ContactForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({ type: "SET_VALUE", field: name, value });
    dispatch({ type: "SET_ERROR", field: name, error: "" });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isValidEmail(state.values.user_email)) {
      dispatch({
        type: "SET_ERROR",
        field: "user_email",
        error: errorMessages.email_invalid,
      });

      highlightError("user_email");
    }

    if (Object.values(state.values).some((x) => x === "")) {
      Object.entries(state.values).forEach((x) => {
        if (x[1] === "") {
          highlightError(x[0]);

          dispatch({
            type: "SET_ERROR",
            field: x[0],
            error: errorMessages[x[0]],
          });
        }
      });
    } else {
      const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      dispatch({ type: "RESET" });
      // window.grecaptcha.ready(() => {
      //   window.grecaptcha.execute(siteKey, { action: "submit" }).then(async (token) => {
      //     try {
      //       // First, verify token on your backend
      //       const verifyResponse = await fetch(
      //         "https://vercel-recaptcha-backend-ldnwrmkv5-zuzanas-projects-50428d1f.vercel.app/api/verifyRecaptcha",
      //         {
      //           method: "POST",
      //           headers: { "Content-Type": "application/json" },
      //           body: JSON.stringify({ token }),
      //         }
      //       );

      //       const verifyData = await verifyResponse.json();

      //       if (verifyData.success) {
      //         const formData = new FormData(formRef.current);
      //         formData.append("g-recaptcha-response", token);

      //         await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);

      //         dispatch({ type: "RESET" });
      //       } else {
      //         alert("reCAPTCHA verification failed. Please try again.");
      //       }
      //     } catch (error) {
      //       alert("Failed to verify reCAPTCHA or send message. Please try again.");
      //       console.error(error);
      //     }
      //   });
      // });
    }
  };

  return (
    <>
      {!state.confirmation_hidden && (
        <Contact__ConfirmationMessage
          hideConfMsg={() => dispatch({ type: "HIDE_CONFIRMATION" })}
        />
      )}
      {state.confirmation_hidden && (
        <form ref={formRef} onSubmit={sendEmail} id="form" className="">
          <Contact__Input
            id="user_name"
            label="Name"
            value={state.values.user_name}
            handleChange={handleChange}
            errors={state.errors.user_name}
          />
          <Contact__Input
            id="user_email"
            label="Email"
            value={state.values.user_email}
            handleChange={handleChange}
            errors={state.errors.user_email}
          />
          <Contact__TextArea
            id="message"
            label="Message"
            value={state.values.message}
            handleChange={handleChange}
            errors={state.errors.message}
          />

          <input type="hidden" name="g-recaptcha-response" />

          <Butt className="contact">
            <button className="butt-btn contact" type="submit">
              <Butt_inside className="contact" text="SEND" />
            </button>
          </Butt>

          <Recaptcha />
        </form>
      )}
    </>
  );
};

export default ContactForm;
