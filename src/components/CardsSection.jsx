import React from 'react';
import './CardsSection.css';

const features = [
  { title: 'Multi-Chain Launchpad', desc: 'Deploy token launches on Ethereum, BNB, Solana, and more.' },
  { title: 'Rug-Proof Security', desc: 'Automatic LP burns and audits protect your community.' },
  { title: 'Staking Dashboard', desc: 'Tiered rewards, lock durations, and instant claims.' },
  { title: 'Referral System', desc: 'Earn commissions by referring new projects.' },
];

const CardsSection = () => (
  <section className="cards-section container">
    {features.map((f, i) => (
      <div key={i} className="card">
        <h3>{f.title}</h3>
        <p>{f.desc}</p>
      </div>
    ))}
  </section>
);

export default CardsSection;
