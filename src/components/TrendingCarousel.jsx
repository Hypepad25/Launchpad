// src/components/TrendingCarousel.jsx
import React from 'react';
import './TrendingCarousel.css';

const items = [
  { name:'NekoSwap', chain:'Solana', kyc:true, safu:true },
  { name:'NovaX', chain:'Ethereum', kyc:true, safu:false },
  { name:'MemeLord', chain:'Base', kyc:false, safu:false },
  { name:'Aptora', chain:'Polygon', kyc:true, safu:true },
  { name:'Hydra', chain:'Arbitrum', kyc:false, safu:true },
];

export default function TrendingCarousel() {
  return (
    <section className="trending">
      <div className="container">
        <div className="trending-head">
          <h2>Trending</h2>
          <div className="chips">
            <button className="chip">All</button>
            <button className="chip">Ethereum</button>
            <button className="chip">BNB</button>
            <button className="chip">Solana</button>
          </div>
        </div>
        <div className="track" role="list">
          {items.map((it, i) => (
            <article className="tcard" key={i} role="listitem">
              <header className="trow">
                <strong>{it.name}</strong>
                <span className="chain">{it.chain}</span>
              </header>
              <footer className="brow">
                {it.kyc && <span className="badge small">KYC</span>}
                {it.safu && <span className="badge small">SAFU</span>}
                <a href="/launchpad" className="mini">Details →</a>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
