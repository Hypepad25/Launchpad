// src/components/StickyMobileCTA.jsx
import React from 'react';
import './StickyMobileCTA.css';

export default function StickyMobileCTA() {
  return (
    <div className="sticky-cta" role="region" aria-label="Quick actions">
      <a href="/token-creator" className="cta-left">Launch Token</a>
      <a href="/presale" className="cta-right">Connect Wallet</a>
    </div>
  );
}
