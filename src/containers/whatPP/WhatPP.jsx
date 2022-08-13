import React from "react";
import "./whatPP.css";
import { Feature } from '../../components'

const WhatPP = () => {
  return (
    <div className="punkdeal__whatPP section__margin" id="whatPP">
      <div className="punkdeal__whatPP-feature">
        <div className="gradient__text">
          <Feature title="What is Punkdeal?" text="Punkdeal is a new online discount/offer service for NFT owners. We get you discounts on your online as well as in-store purchases based on the NFT's you own. Our company drives investment in local artists NFTs by incentivizing local businesses to partner with them to offer discounts to the community." />
        </div>
      </div>
      <div className="punkdeal__whatPP-heading">
        <h1 className="gradient__text">
          Get rewarded for owning unique NFTs popular in your community
        </h1>
        <p>Explore The Offers</p>
      </div>
      <div className="punkdeal__whatPP-container">
        <Feature title="NFTs" text="We support all kinds of NFTs." />
        <Feature title="Artists" text="We have supported over 1500 NFT creators and artists all over the US." />
        <Feature title="Partners" text="We have partnered with over 2800 local businesses to get exclusive discounts and coupons." />
      </div>
    </div>
  );
};

export default WhatPP;
