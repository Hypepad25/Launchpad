// src/components/StatsStrip.jsx
import React, { useEffect, useState } from 'react';
import './StatsStrip.css';

const target = { projects: 128, raised: 382, chains: 6, stakers: 22.4 };

export default function StatsStrip() {
  const [val, setVal] = useState({ projects: 0, raised: 0, chains: 0, stakers: 0 });
  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / 1200);
      setVal({
        projects: Math.floor(target.projects * t),
        raised: Math.floor(target.raised * t),
        chains: Math.floor(target.chains * t),
        stakers: Math.round(target.stakers * t * 10)/10,
      });
      if (t === 1) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="stats">
      <div className="container stats-grid" aria-label="Live platform statistics">
        <div><strong>{val.projects}+</strong><span>Projects Launched</span></div>
        <div><strong>${val.raised}M</strong><span>Raised</span></div>
        <div><strong>{val.chains}</strong><span>Active Chains</span></div>
        <div><strong>{val.stakers}k</strong><span>Users</span></div>
      </div>
    </section>
  );
}
