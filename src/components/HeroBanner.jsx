// src/components/HeroBanner.jsx
import React from 'react';
import './HeroBanner.css';
import Logo from '../assets/h-rocket-logo.png';

export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <img src={Logo} alt="HYPEPAD Logo" className="hero-logo" />
        <h1 className="hero-title">Launch. Graduate. Grow.</h1>
        <p className="hero-subtitle">The investor-grade Web3 launchpad powering fair, secure, multi-chain token launches.</p>
        <div className="hero-ctas">
          <a className="btn-primary" href="/launchpad">Launch on HYPEPAD</a>
          <a className="btn-secondary" href="/presale">View Presale</a>
        </div>
        <div className="hero-cred">
          <span>Audited • Rug‑proof • Multi‑chain</span>
        </div>
      </div>
    </section>
  );
}
