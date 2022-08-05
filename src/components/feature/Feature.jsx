import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="punkdeal__features-container__feature">
      <div className="punkdeal_features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="punkdeal__features-container__feature-text">
        {text}
      </div>
    </div>
  )
};

export default Feature;
