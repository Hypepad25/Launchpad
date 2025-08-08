// src/components/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

const quotes = [
  { name:'Ava M.', role:'Founder, NekoSwap', text:'HYPEPAD delivered a flawless raise and post‑launch support.'},
  { name:'Rohan S.', role:'Investor', text:'Clear KYC/SAFU rules make it my go‑to for early‑stage deals.'},
  { name:'Elena V.', role:'Partner', text:'The staking + referral engine keeps communities engaged.'},
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What leaders say</h2>
        <div className="t-grid">
          {quotes.map((q,i) => (
            <blockquote key={i}>
              <p>“{q.text}”</p>
              <footer>— {q.name}, <span>{q.role}</span></footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
