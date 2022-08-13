import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import pdlogo from '../../assets/pdlogo.gif';
import "./navbar.css";

const Menu = () => {
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#whatPP">What is Punkdeal?</a></p>
    <p><a href="#possibility">Our Services</a></p>
    <p><a href="#features">Partners</a></p>
    <p><a href="#blog">Connect Wallet</a></p>
  </>
}
// BEM -> Block Element Modifier

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  return <div className="punkdeal__navbar">
    <div className="punkdeal__navbar-links">
      <div className="punkdeal__navbar-links_logo">
        <img src={pdlogo} alt="pdlogo" />
      </div>
      <div className="punkdeal__navbar-links_container">
        <p><a href="#home">Home</a></p>
        <p><a href="#whatPP">What is Punkdeal?</a></p>
        <p><a href="#possibility">Our Services</a></p>
        <p><a href="#features">Partners</a></p>
        <p><a href="#blog">Connect Wallet</a></p>
      </div>
    </div>
    <div className="punkdeal__navbar-sign">
      <p>Login</p>
      <button type="button">Sign up</button>
    </div>
    <div className="punkdeal__navbar-menu">
      {toggleMenu
        ? <RiCloseLine color="#95f0e1" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#95f0e1" size={27} onClick={() => setToggleMenu(true)} />
      }
      {toggleMenu && (
        <div className="punkdeal__navbar-menu_container scale-up-center">
          <div className="punkdeal__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#whatPP">What is Punkdeal?</a></p>
            <p><a href="#features">Partners</a></p>
            <p><a href="#services">Our Services</a></p>
            <p><a href="#blog">Connect Wallet</a></p>
            <div className="punkdeal__navbar-menu_container-links-sign">
              <p>Login</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>;
};

export default Navbar;
