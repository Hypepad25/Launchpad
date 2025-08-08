// src/components/FeaturedLaunch.jsx
import React from 'react';
import './FeaturedLaunch.css';

export default function FeaturedLaunch() {
  return (
    <section className="featured">
      <div className="container featured-inner">
        <div className="featured-copy">
          <h2>Featured Launch</h2>
          <p>Kaito AI — KYC/SAFU verified, audit passed, cross-chain liquidity.</p>
          <div className="featured-badges">
            <span className="badge">KYC</span>
            <span className="badge">SAFU</span>
            <span className="badge">Audit</span>
          </div>
          <div className="featured-ctas">
            <a href="/launchpad" className="btn-primary">View Project</a>
            <a href="/staking" className="btn-secondary">Stake & Earn</a>
          </div>
        </div>
        <div className="featured-card" aria-hidden="true">
          <div className="chart-placeholder">Live Liquidity Chart</div>
        </div>
      </div>
    </section>
  );
}
