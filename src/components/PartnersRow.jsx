// src/components/PartnersRow.jsx
import React from 'react';
import './PartnersRow.css';

const partners = ['Ethereum','BNB','Solana','Polygon','Arbitrum','Base'];

export default function PartnersRow() {
  return (
    <section className="partners" aria-label="Supported chains and partners">
      <div className="container partners-track">
        {partners.map((p, i) => (
          <div key={i} className="partner-pill">{p}</div>
        ))}
      </div>
    </section>
  );
}
