// src/components/TrendingCarousel.jsx
import React from 'react';
import './TrendingCarousel.css';
import { IS_LIVE } from '../config/app';

export default function TrendingCarousel() {
  return (
    <section className="trending">
      <div className="container">
        <div className="trending-head">
          <h2>Trending</h2>
          {!IS_LIVE && <span className="coming-soon">Coming soon</span>}
        </div>
        {IS_LIVE ? (
          <div className="track" role="list">
            {/* map live projects here */}
          </div>
        ) : (
          <div className="t-placeholder">
            No live tokens yet. Your launch could be trending on day one.
          </div>
        )}
      </div>
    </section>
  );
}
