import React from "react";
import "./brand.css";
import { google, slack, metamask, coinbasee } from './imports';


const Brand = () => {
  return (
    <div className="punkdeal__brand section__padding" id="features">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={metamask} alt="metamask" />
      </div>
      <div>
        <img src={coinbasee} alt="coinbasee" />
      </div>
    </div>
  )
}

export default Brand;
