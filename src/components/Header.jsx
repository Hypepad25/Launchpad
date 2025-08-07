import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MainLogo from '../assets/hypepad-logo.png';
import './Header.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <header className="header">
      <div className="container header-container">
        {/* Logo */}
        <NavLink to="/" className="logo">
          <img src={MainLogo} alt="HYPEPAD" className="header-logo" />
        </NavLink>

        {/* Hamburger for mobile */}
        <button className="mobile-toggle" onClick={toggleMobile}>
          ☰
        </button>

        {/* Main navigation */}
        <nav className={`main-nav ${mobileOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item dropdown">
              <span>Platform</span>
              <ul className="dropdown-menu">
                <li><NavLink to="/launchpad">Launchpad</NavLink></li>
                <li><NavLink to="/presale">Presale</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span>Create</span>
              <ul className="dropdown-menu">
                <li><NavLink to="/token-creator">Token Creator</NavLink></li>
                <li><NavLink to="/meme-creator">Meme Creator</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span>Engage</span>
              <ul className="dropdown-menu">
                <li><NavLink to="/staking">Staking</NavLink></li>
                <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
                <li><NavLink to="/trending">Trending</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span>Resources</span>
              <ul className="dropdown-menu">
                <li><NavLink to="/kyc">KYC</NavLink></li>
                <li><NavLink to="/referrals">Referrals</NavLink></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li><NavLink to="/whitepaper">Whitepaper</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="/admin">Admin</NavLink>
            </li>
          </ul>
        </nav>

        {/* Connect Wallet */}
        <button className="btn-connect-wallet">Connect Wallet</button>
      </div>
    </header>
  );
};

export default Header;
