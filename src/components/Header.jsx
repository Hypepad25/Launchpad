import React from 'react';
import { NavLink } from 'react-router-dom';
import MainLogo from '../assets/hypepad-logo.png';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="container header-container">
      <NavLink to="/" className="logo">
        <img src={MainLogo} alt="HYPEPAD" className="header-logo" />
      </NavLink>
      <nav className="main-nav">
        <ul className="nav-list">
          <li><NavLink to="/presale">Presale</NavLink></li>
          <li><NavLink to="/launchpad">Launchpad</NavLink></li>
          <li><NavLink to="/token-creator">Token Creator</NavLink></li>
          <li><NavLink to="/meme-creator">Meme Creator</NavLink></li>
          <li><NavLink to="/staking">Staking</NavLink></li>
          <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
          <li><NavLink to="/trending">Trending</NavLink></li>
          <li><NavLink to="/kyc">KYC</NavLink></li>
          <li><NavLink to="/referrals">Referrals</NavLink></li>
          <li><NavLink to="/faq">FAQ</NavLink></li>
          <li><NavLink to="/whitepaper">Whitepaper</NavLink></li>
          <li><NavLink to="/admin">Admin</NavLink></li>
        </ul>
      </nav>
      <button className="btn-connect-wallet">Connect Wallet</button>
    </div>
  </header>
);
export default Header;