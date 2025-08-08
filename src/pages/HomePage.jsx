// src/pages/HomePage.jsx
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import StatsStrip from '../components/StatsStrip';
import PartnersRow from '../components/PartnersRow';
import HowItWorks from '../components/HowItWorks';
import FeaturedLaunch from '../components/FeaturedLaunch';
import TrendingCarousel from '../components/TrendingCarousel';
import TrustBadges from '../components/TrustBadges';
import RoiCalculator from '../components/RoiCalculator';
import Testimonials from '../components/Testimonials';
import StickyMobileCTA from '../components/StickyMobileCTA';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <StatsStrip />
      <PartnersRow />
      <HowItWorks />
      <FeaturedLaunch />
      <TrendingCarousel />
      <TrustBadges />
      <RoiCalculator />
      <Testimonials />
      <StickyMobileCTA />
    </>
  );
}
