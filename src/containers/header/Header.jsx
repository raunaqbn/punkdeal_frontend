import React from "react";
import "./header.css";
import people from '../../assets/people.png';
import looppunks from '../../assets/looppunks.gif';

const Header = () => {
  return (
    <div className="punkdeal__header section_padding" id="home">
      <div className="punkdeal__header-content">
        <h1 className="gradient__text">
          Punkdeal gets the best offers & discounts
          for the NFT community
        </h1>
        <p>
          We get you special offers, coupons and discounts while
          shopping online or in-person when you qualify via your NFT portfolio.
        </p>
        <div className="punkdeal__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="punkdeal__header-content__people">
          <img src={people} alt="people" />
          <p>
            1500 people signed up in the last 24 hours
          </p>
        </div>
      </div>
      <div className="punkdeal__header-image">
        <img src={looppunks} alt="looppunks" />
      </div>

    </div>

  )
};

export default Header;
