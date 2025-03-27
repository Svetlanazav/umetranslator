
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import DecodeQuiz from '@/components/DecodeQuiz';
import Features from '@/components/Features';
import ExampleSection from '@/components/ExampleSection';
import PersonaSection from '@/components/PersonaSection';
import FounderStory from '@/components/FounderStory';
import SocialProof from '@/components/SocialProof';
import CTA from '@/components/CTA';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <DecodeQuiz />
      <Features />
      <ExampleSection />
      <PersonaSection />
      <FounderStory />
      <SocialProof />
      <CTA />
    </Layout>
  );
};

export default Index;
