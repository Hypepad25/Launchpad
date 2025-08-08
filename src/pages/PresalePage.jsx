// src/pages/PresalePage.jsx
import React from 'react';
import { PRESALE_STATUS, PRESALE_COPY } from '../config/app';

export default function PresalePage() {
  return (
    <div className="container" style={{padding:'2rem 0'}}>
      <h2>{PRESALE_COPY.title}</h2>
      <p style={{color:'#cfcfcf', maxWidth:700}}>{PRESALE_COPY.subtitle}</p>

      {PRESALE_STATUS === 'upcoming' && (
        <div style={{margin:'1rem 0', padding:'1rem', border:'1px solid #232328', borderRadius:8, background:'#111117'}}>
          <strong>Status:</strong> Presale is <em>upcoming</em> — dates TBA.<br/>
          Join our Telegram or add your email to get notified.
        </div>
      )}

      {PRESALE_STATUS === 'live' && (
        <div style={{margin:'1rem 0', padding:'1rem', border:'1px solid #232328', borderRadius:8, background:'#111117'}}>
          <strong>Status:</strong> LIVE — Connect wallet to participate.
        </div>
      )}

      <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap', marginTop:'1rem'}}>
        <a className="btn-primary" href="https://t.me/hypepad25" target="_blank" rel="noreferrer">Join Telegram</a>
        <a className="btn-secondary" href="mailto:contact@hypepad.app">Get Email Updates</a>
      </div>

      <div style={{marginTop:'2rem'}}>
        <h3>How presale works</h3>
        <ol style={{lineHeight:1.6, color:'#d9d9d9'}}>
          <li>Whitelist / KYC verification (if applicable)</li>
          <li>Contribution window opens</li>
          <li>LP & token distribution</li>
          <li>Claim on launch</li>
        </ol>
      </div>
    </div>
  );
}
