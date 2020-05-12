import React from "react";
import ContactForm from "./ContactForm";
import ContactStyle from "../styledComponents/ContactStyle";

const Contact = () => {
  return (
    <ContactStyle>
      <section>
        <h2>Contact Us</h2>
        <div className="contact-center">
          <div className="left-side">
            <h4>
              For general enquiries, loyalthy program, discount, bookings, and
              further information, please contact us:
            </h4>
            <p>Plot 107 Ahmadu Bello Way, Abuja</p>
            <p>Tel: +2348100000005</p>
            <p>Email: happyplace@gmail.com</p>
            <p>
              In case you do not tecieve a reply after 48hrs, please also email:{" "}
            </p>
            <p>contact@happyplace.com</p>
            <p>or</p>
            <p>info@happyplace.org</p>
          </div>
          <div className="contact-form">
            <ContactForm />
          </div>
        </div>
      </section>
    </ContactStyle>
  );
};

export default Contact;
