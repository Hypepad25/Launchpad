// src/components/TrustBadges.jsx
import React from 'react';
import './TrustBadges.css';

export default function TrustBadges() {
  return (
    <section className="trust">
      <div className="container trust-inner">
        <div className="trust-item">
          <h3>Rug‑Proof</h3>
          <p>Auto LP burns, vesting, liquidity locks, and anti‑whale controls.</p>
        </div>
        <div className="trust-item">
          <h3>KYC / SAFU</h3>
          <p>Issuer verification and SAFU badge increases investor confidence.</p>
        </div>
        <div className="trust-item">
          <h3>Audited</h3>
          <p>Battle‑tested contracts with transparent third‑party audits.</p>
        </div>
      </div>
    </section>
  );
}
