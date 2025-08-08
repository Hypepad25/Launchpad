import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Launch. Graduate. Grow.</h1>
        <p>
          HYPEPAD is currently in <strong>pre-launch</strong>. We’re building the most trusted,
          investor-grade Web3 launchpad. Builders: apply for early access.
        </p>
        <div className="hero-buttons">
          <a href="/apply" className="btn btn-primary">Apply to Launch</a>
          <a href="/presale" className="btn btn-secondary">Get Presale Updates</a>
        </div>
      </div>
    </section>
  );
}
