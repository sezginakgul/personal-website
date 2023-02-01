import { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

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
          setDone(true);
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
            {/* <div className="c-info-item">
              <i class="fa-solid fa-phone c-icon"></i>
              +90 534 615 8014
            </div> */}
            <div className="c-info-item">
              <i class="fa-solid fa-envelope c-icon fa-lg"></i>
              {/* <i class="fa-solid fa-inbox c-icon"></i> */}
              sezgin.akgull@gmail.com
            </div>
            {/* <div className="c-info-item"> */}
            {/* <i class="fa-solid fa-map-location-dot c-icon"></i> */}
            {/* <i class="fa-sharp fa-solid fa-address-card c-icon"></i> */}
            {/* Istanbul/TURKEY */}
            {/* </div> */}
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" required />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              id=""
              rows="5"
              placeholder="Message"
              name="user_message"
              required
            />
            <button type="submit">Submit</button>
          </form>
          {done && "Thank you... "}
        </div>
      </div>
    </div>
  );
};

export default Contact;