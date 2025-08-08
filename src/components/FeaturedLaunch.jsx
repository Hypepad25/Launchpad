// src/components/FeaturedLaunch.jsx
import React from 'react';
import './FeaturedLaunch.css';
import { IS_LIVE } from '../config/app';

export default function FeaturedLaunch() {
  if (!IS_LIVE) {
    return (
      <section className="featured">
        <div className="container featured-inner">
          <div className="featured-copy">
            <h2>Your project here</h2>
            <p>No live launches yet — we’re curating our first cohort now.</p>
            <div className="featured-ctas">
              <a href="/token-creator" className="btn-primary">Apply to Launch</a>
              <a href="/presale" className="btn-secondary">Get Presale Updates</a>
            </div>
          </div>
          <div className="featured-card"><div className="chart-placeholder">Coming Soon</div></div>
        </div>
      </section>
    );
  }
  return (
    <section className="featured">
      <div className="container featured-inner">
        <div className="featured-copy">
          <h2>Featured Launch</h2>
          <p>KYC/SAFU verified, audit passed, cross‑chain liquidity.</p>
          <div className="featured-ctas">
            <a href="/launchpad" className="btn-primary">View Project</a>
            <a href="/staking" className="btn-secondary">Stake & Earn</a>
          </div>
        </div>
        <div className="featured-card"><div className="chart-placeholder">Live Liquidity Chart</div></div>
      </div>
    </section>
  );
}
