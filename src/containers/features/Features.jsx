import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";

const featuresData = [
  {
    title: 'Connecting new NFT artists to patrons',
    text: 'Our offers and coupons incentivize investors to support upcoming NFT artists'
  },
  {
    title: 'Creating real world Web3 communities',
    text: 'Are approach of connecting local businesses with the community using the coupons offered for purchasing NFTs from local artists helps create a tight-knit web3 community in the real world'
  },
  {
    title: 'Expanding the market for NFTs',
    text: 'Our service encourages more artists to sell their work in the form of NFTs while simultaneously growing the buyer-base'
  }
]

const Features = () => {
  return (
    <div className="punkdeal__features section__padding" id="possibility">
      <div className="punkdeal__features-heading">
        <h1 className="gradient__text">
          The future is now and we want to help make Web3 a reality in your everyday life.
        </h1>
        <p>Get Started > </p>
      </div>
      <div className="punkdeal__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
};

export default Features;
