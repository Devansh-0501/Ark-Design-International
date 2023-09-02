import React from "react";
import "../styles/contact.css";
import img from "../Assets/5.avif";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-logo">
        <h1>Ark Design International</h1>
        <img src={img} alt="" />
      </div>
      <div className="forms">
        <h1>Contact Us</h1>
        <form>
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea
            name="Message"
            cols="6"
            rows="6"
            placeholder="Enter your Message here"
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
