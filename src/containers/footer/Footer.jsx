import React from "react";
import "./footer.css";
import pdlogo from '../../assets/pdlogo.gif';

const Footer = () => {
  return (
    <div className="punkdeal__footer section_padding">
      <div className="punkdeal__footer-heading">
        <h1 className="gradient__text">Step in to a whole new Web3 community</h1>
      </div>
      <div className="punkdeal__footer-btn">
        <p>Connect Your Wallet</p>
      </div>
      <div className="punkdeal__footer-links">
        <div className="punkdeal__footer-links_logo">
          <img src={pdlogo} alt="pdlogo" />
          <p>San Jose, CA 95128</p>
        </div>
        <div className="punkdeal__footer-links_div">
          <h4>Links</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Contact</p>
        </div>
        <div className="punkdeal__footer-links_div">
          <h4>Get in touch</h4>
          <p>San Jose, CA 95128</p>
          <p>908-000-0000</p>
          <p>punkdeal@gmail.com</p>
        </div>
      </div>

      <div className="punkdeal__footer-copyright">
        <p>@2021 Punkdeal. All rights reserved.</p>
      </div>
    </div>
  )
};

export default Footer;
