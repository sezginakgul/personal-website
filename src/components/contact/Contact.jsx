import { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import {
  SendEmailToastDark,
  SendEmailToastLight,
} from "../../utils/customToastify";

const Contact = ({ darkMode }) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ihk4qal",
        "template_9rdhb5g",
        formRef.current,
        "kvpaxHFcI6rNUTJwQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          {
            darkMode
              ? SendEmailToastDark("Email Send Successfuly")
              : SendEmailToastLight("Email Send Successfuly");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <i class="fa-solid fa-envelope c-icon fa-lg"></i>
              sezgin.akgull@gmail.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              id=""
              rows="5"
              placeholder="Message"
              name="user_message"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
