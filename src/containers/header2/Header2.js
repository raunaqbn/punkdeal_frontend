import React from "react";
import "./header2.css";
import people from '../../assets/people.png';
import looppunks from '../../assets/looppunks.gif';

const Header2 = () => {
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
      </div>
      <div className="punkdeal__header-image">
        <img src={looppunks} alt="looppunks" />
      </div>

    </div>

  )
};

export default Header2;
