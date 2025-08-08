// src/components/HowItWorks.jsx
import React from 'react';
import './HowItWorks.css';

const steps = [
  { title: 'Launch', body: 'Create token, set raise terms, enable SAFU controls.' },
  { title: 'Graduate', body: 'Auto LP, vesting, and KYC/Safu badges for credibility.' },
  { title: 'Grow', body: 'Trending slots, staking, and referral engine to scale.' },
];

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="container">
        <h2>How it works</h2>
        <div className="how-grid">
          {steps.map((s, i) => (
            <div className="how-card" key={i}>
              <div className="how-num">{i+1}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
