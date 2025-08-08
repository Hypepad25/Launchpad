// src/components/StatsStrip.jsx
import React from 'react';
import './StatsStrip.css';
import { IS_LIVE } from '../config/app';

export default function StatsStrip() {
  return (
    <section className="stats">
      <div className="container stats-grid" aria-label="Platform statistics">
        {IS_LIVE ? (
          <>
            <div><strong>128+</strong><span>Projects Launched</span></div>
            <div><strong>$382M</strong><span>Raised</span></div>
            <div><strong>6</strong><span>Active Chains</span></div>
            <div><strong>22k</strong><span>Users</span></div>
          </>
        ) : (
          <>
            <div><strong>—</strong><span>Projects (pre‑launch)</span></div>
            <div><strong>—</strong><span>Raised (pre‑launch)</span></div>
            <div><strong>Multi‑chain</strong><span>At launch</span></div>
            <div><strong>Growing</strong><span>Community</span></div>
          </>
        )}
      </div>
    </section>
  );
}
