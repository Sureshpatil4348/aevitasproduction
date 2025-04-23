import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '@/components/Layout/Layout';
import HeroSection from '@/components/Home/HeroSection';
import ServicesOverview from '@/components/Home/ServicesOverview';
import ChannelShowcase from '@/components/Home/ChannelShowcase';
import PricingPackages from '@/components/Home/PricingPackages';
import GlobalTeam from '@/components/Home/GlobalTeam';
import HowItWorks from '@/components/Home/HowItWorks';
import ContactSection from '@/components/Home/ContactSection';
import PlatformsSection from '@/components/Home/PlatformsSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ChannelShowcase />
      <PlatformsSection />
      <ServicesOverview />
      {/* <PricingPackages /> */}
      <GlobalTeam />
      {/* <HowItWorks /> */}
      <ContactSection />
    </Layout>
  );
} 