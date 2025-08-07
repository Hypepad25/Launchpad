import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MainLogo from '../assets/hypepad-logo.png';
import './Header.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  // Toggle mobile nav
  const toggleMobile = () => setMobileOpen(open => !open);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileOpen &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        !e.target.closest('.mobile-toggle')
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileOpen]);

  return (
    <header className="header">
      <div className="container header-container">
        {/* Logo */}
        <NavLink to="/" className="logo">
          <img src={MainLogo} alt="HYPEPAD" className="header-logo" />
        </NavLink>

        {/* Mobile toggle */}
        <button className="mobile-toggle" onClick={toggleMobile}>
          ☰
        </button>

        {/* Navigation */}
        <nav ref={navRef} className={`main-nav ${mobileOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {/* Home link */}
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            {/* Platform dropdown */}
            <li className="nav-item dropdown">
              <span>Platform</span>
              <ul className="dropdown-menu">
                <li><NavLink to="/launchpad">Launchpad</NavLink></li>
                <li><NavLink to="/presale">Presale</NavLink></li>
              </ul>
            </li>
            {/* Create dropdown */}
            <li className="nav-item dropdown">
              <span>Create</span>
              <ul className="dropdown-menu">
                <li><NavLink to="/token-creator">Token Creator</NavLink></li>
                <li><NavLink to="/meme-creator">Meme Creator</NavLink></li>
              </ul>
            </li>
            {/* Engage dropdown */}
            <li className="nav-item dropdown">
              <span>Engage</span>
              <ul className="dropdown-menu">
                <li><NavLink to="/staking">Staking</NavLink></li>
                <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
                <li><NavLink to="/trending">Trending</NavLink></li>
              </ul>
            </li>
            {/* Resources dropdown */}
            <li className="nav-item dropdown">
              <span>Resources</span>
              <ul className="dropdown-menu">
                <li><NavLink to="/kyc">KYC</NavLink></li>
                <li><NavLink to="/referrals">Referrals</NavLink></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li><NavLink to="/whitepaper">Whitepaper</NavLink></li>
              </ul>
            </li>
            {/* Support dropdown */}
            <li className="nav-item dropdown">
              <span>Support</span>
              <ul className="dropdown-menu">
                <li><a href="mailto:contact@hypepad.app">Email Us</a></li>
                <li>
                  <a href="https://t.me/hypepad25" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* Connect Wallet */}
        <button className="btn-connect-wallet">Connect Wallet</button>
      </div>
    </header>
);

export default Header;
