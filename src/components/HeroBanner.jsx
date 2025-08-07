import React from 'react';
import './HeroBanner.css';
import HeroBannerLogo from '../assets/hypepad-banner.png';

const HeroBanner = () => (
  <section className="hero-banner">
    <div className="container hero-container">
      <img src={HeroBannerLogo} alt="HYPEPAD – Fuel Your Launch. Rule the Hype." className="hero-banner-logo" />
      <h1 className="hero-title">Launch. Graduate. Grow.</h1>
      <p className="hero-subtitle">
        Multi-chain token launches with rug-proof security and a built-in growth engine.
      </p>
      <button className="btn-primary">Join $HYPE Presale</button>
    </div>
  </section>
);
export default HeroBanner;
