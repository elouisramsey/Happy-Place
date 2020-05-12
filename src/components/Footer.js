import React, { Component } from "react";
import { FaFacebook, FaInstagram, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import FooterStyle from "./styledComponents/FooterStyle";

class Footer extends Component {

  render() {
    return (
      <>
      <FooterStyle>
        <div className="footer-center">
          <div className="address">
            <h5>Our Address</h5>
            <p>Plot 107 Ahmadu Bello Way, Abuja</p>
          </div>
          <div className="contact">
            <h5>Contact Us</h5>
            <a href="tel:+2348000000001"><BsPhone /> +2348000000001</a>
            <a href="mailto:#"><MdEmail /> happyplace@gmail.com</a>
          </div>
          <div className="payment">
            <h5>We Accept</h5>
            <FaCcVisa />
            <FaCcMastercard />
          </div>
          <div className="socials">
            <h5>Follow Us</h5>
            <a href="http://facebook.com">
              <FaFacebook />
            </a>
            <a href="http://instagram.com">
              <FaInstagram />
            </a>
          </div>
        </div>
      </FooterStyle>
      <p className='footer-p'>&#169; 2020 by Louis-Ramsey for Happy Place Hotels</p>
      </>
    );
  }
}

export default Footer;
