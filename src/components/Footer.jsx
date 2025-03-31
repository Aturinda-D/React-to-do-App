import React from "react";
import SocialsButton from "./SocialsButton";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="title">
        <div className="icon">
          <h2>v</h2>
        </div>
        <h1>vista lab</h1>
      </div>
      <h5>&copy; 2024 Aqeel Shahzad. All rights reserved.</h5>
      <div className="socials">
        <SocialsButton content={<FaFacebookF />} />
        <SocialsButton content={<FaLinkedinIn />} />
        <SocialsButton content={<FaTwitter />} />
        <SocialsButton content={<FaGithub />} />
      </div>
    </footer>
  );
};

export default Footer;
