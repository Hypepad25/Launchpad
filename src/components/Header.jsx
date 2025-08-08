// src/components/Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MainLogo from '../assets/hypepad-logo.png';
import './Header.css';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({
    platform: false,
    create: false,
    engage: false,
    resources: false,
    support: false
  });
  const navRef = useRef(null);

  const toggleMobile = () => setMobileOpen(o => !o);
  const closeMobile = () => setMobileOpen(false);

  // Close submenus when mobile nav closes
  useEffect(() => {
    if (!mobileOpen) setOpenDropdowns({ platform: false, create: false, engage: false, resources: false, support: false });
  }, [mobileOpen]);

  // Click-away to close menu
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        mobileOpen &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        !e.target.closest('.mobile-toggle')
      ) {
        closeMobile();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileOpen]);

  const toggleDropdown = (key) => {
    setOpenDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header className="header">
      <div className="container header-container">
        <NavLink to="/" className="logo" onClick={closeMobile}>
          <img src={MainLogo} alt="HYPEPAD" className="header-logo" />
        </NavLink>

        <button
          className="mobile-toggle"
          aria-label="Toggle menu"
          onClick={toggleMobile}
        >
          ☰
        </button>

        <nav ref={navRef} className={`main-nav${mobileOpen ? ' open' : ''}`}>
          <ul className="nav-list">
            <li>
              <NavLink to="/" onClick={closeMobile} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            </li>

            <li className={`dropdown${openDropdowns.platform ? ' open' : ''}`}>
              <span
                role="button"
                tabIndex={0}
                aria-expanded={openDropdowns.platform}
                onClick={() => toggleDropdown('platform')}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleDropdown('platform')}
              >
                Platform ▾
              </span>
              <ul className="dropdown-menu">
                <li><NavLink to="/launchpad" onClick={closeMobile}>Launchpad</NavLink></li>
                <li><NavLink to="/presale" onClick={closeMobile}>Presale</NavLink></li>
              </ul>
            </li>

            <li className={`dropdown${openDropdowns.create ? ' open' : ''}`}>
              <span
                role="button"
                tabIndex={0}
                aria-expanded={openDropdowns.create}
                onClick={() => toggleDropdown('create')}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleDropdown('create')}
              >
                Create ▾
              </span>
              <ul className="dropdown-menu">
                <li><NavLink to="/token-creator" onClick={closeMobile}>Token Creator</NavLink></li>
                <li><NavLink to="/meme-creator" onClick={closeMobile}>Meme Creator</NavLink></li>
              </ul>
            </li>

            <li className={`dropdown${openDropdowns.engage ? ' open' : ''}`}>
              <span
                role="button"
                tabIndex={0}
                aria-expanded={openDropdowns.engage}
                onClick={() => toggleDropdown('engage')}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleDropdown('engage')}
              >
                Engage ▾
              </span>
              <ul className="dropdown-menu">
                <li><NavLink to="/staking" onClick={closeMobile}>Staking</NavLink></li>
                <li><NavLink to="/leaderboard" onClick={closeMobile}>Leaderboard</NavLink></li>
                <li><NavLink to="/trending" onClick={closeMobile}>Trending</NavLink></li>
              </ul>
            </li>

            <li className={`dropdown${openDropdowns.resources ? ' open' : ''}`}>
              <span
                role="button"
                tabIndex={0}
                aria-expanded={openDropdowns.resources}
                onClick={() => toggleDropdown('resources')}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleDropdown('resources')}
              >
                Resources ▾
              </span>
              <ul className="dropdown-menu">
                <li><NavLink to="/kyc" onClick={closeMobile}>KYC</NavLink></li>
                <li><NavLink to="/referrals" onClick={closeMobile}>Referrals</NavLink></li>
                <li><NavLink to="/faq" onClick={closeMobile}>FAQ</NavLink></li>
                <li><NavLink to="/whitepaper" onClick={closeMobile}>Whitepaper</NavLink></li>
              </ul>
            </li>

            <li className={`dropdown${openDropdowns.support ? ' open' : ''}`}>
              <span
                role="button"
                tabIndex={0}
                aria-expanded={openDropdowns.support}
                onClick={() => toggleDropdown('support')}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleDropdown('support')}
              >
                Support ▾
              </span>
              <ul className="dropdown-menu">
                <li><a href="mailto:contact@hypepad.app" onClick={closeMobile}>Email Us</a></li>
                <li><a href="https://t.me/hypepad25" target="_blank" rel="noopener noreferrer" onClick={closeMobile}>Telegram</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* Single Connect button for all breakpoints */}
        <button className="btn-connect-wallet">Connect Wallet</button>
      </div>
    </header>
  );
}
