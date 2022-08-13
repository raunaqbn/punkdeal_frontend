import React from "react";
import "./feature.css";
import "/Users/biswajeetnaidu/Internship/practicepage/src/index.css";

const Feature = ({ title, text }) => {
  return (
    <div className="punkdeal__features-container__feature">
      <div className="punkdeal__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="punkdeal__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
};

export default Feature;

