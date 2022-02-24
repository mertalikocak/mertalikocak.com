import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="/assets/contact.png" alt="" />
      </div>
      <div className="right">
        <iframe
          className="form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfUee_InvPsIpzMocB2Jk3RgtaoQkhywwwUoVsfViDUiJYeIw/viewform?embedded=true"
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
