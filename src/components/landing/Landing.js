import React from "react";
import "./landing.css";
import { Article, Brand, CTA, Feature, Navbar } from '..';

import { Footer, Blog, Possibility, Features, WhatPP, Header } from '../../containers';

const Landing = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatPP />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default Landing;
