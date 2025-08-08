
import React from 'react';
import heroLogo from '../assets/h-rocket-logo-hero.png';

export default function HeroSection() {
  return (
    <div style={{ textAlign: 'center', padding: '40px 0' }}>
      <img src={heroLogo} alt="HYPEPAD" style={{ maxHeight: '200px', width: 'auto' }} />
    </div>
  );
}
