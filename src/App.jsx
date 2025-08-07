import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PresalePage from './pages/PresalePage';
import LaunchpadPage from './pages/LaunchpadPage';
import TokenCreatorPage from './pages/TokenCreatorPage';
import MemeCreatorPage from './pages/MemeCreatorPage';
import StakingPage from './pages/StakingPage';
import LeaderboardPage from './pages/LeaderboardPage';
import TrendingPage from './pages/TrendingPage';
import KYCPage from './pages/KYCPage';
import ReferralPage from './pages/ReferralPage';
import FAQPage from './pages/FAQPage';
import WhitepaperPage from './pages/WhitepaperPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/presale" element={<PresalePage />} />
        <Route path="/launchpad" element={<LaunchpadPage />} />
        <Route path="/token-creator" element={<TokenCreatorPage />} />
        <Route path="/meme-creator" element={<MemeCreatorPage />} />
        <Route path="/staking" element={<StakingPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/kyc" element={<KYCPage />} />
        <Route path="/referrals" element={<ReferralPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/whitepaper" element={<WhitepaperPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
