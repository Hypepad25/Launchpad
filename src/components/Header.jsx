import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo-link">
          <img
            src="/brand/h-rocket-logo-transparent.png"
            alt="HYPEPAD"
            className="header-logo"
          />
        </Link>
        {/* Your existing navbar code */}
      </div>
    </header>
  );
}
