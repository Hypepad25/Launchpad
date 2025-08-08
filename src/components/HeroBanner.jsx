// src/components/HeroBanner.jsx
import React from 'react';
import './HeroBanner.css';
import Logo from '../assets/h-rocket-logo.png';
import { IS_LIVE, PRESALE_STATUS } from '../config/app';

export default function HeroBanner() {
  const presaleCta = PRESALE_STATUS === 'upcoming' ? 'Get Presale Updates' :
                     PRESALE_STATUS === 'live' ? 'Join $HYPE Presale' : 'Presale Closed';
  const presaleHref = PRESALE_STATUS === 'live' ? '/presale' : '/presale';

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <img src={Logo} alt="HYPEPAD Logo" className="hero-logo" />
        <h1 className="hero-title">Launch. Graduate. Grow.</h1>
        <p className="hero-subtitle">
          HYPEPAD is currently in <strong>pre‑launch</strong>. We’re building the most trusted,
          investor‑grade Web3 launchpad. Builders: apply for early access.
        </p>
        <div className="hero-ctas">
          <a className="btn-primary" href="/token-creator">Apply to Launch</a>
          <a className="btn-secondary" href={presaleHref}>{presaleCta}</a>
        </div>
        <div className="hero-cred">
          <span>Pre‑launch • KYC/SAFU framework • Multi‑chain</span>
        </div>
      </div>
    </section>
  );
}
