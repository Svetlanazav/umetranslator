
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import DecodeQuiz from '@/components/DecodeQuiz';
import Features from '@/components/Features';
import ExampleSection from '@/components/ExampleSection';
import PersonaSection from '@/components/PersonaSection';
import FounderStory from '@/components/FounderStory';
import SocialProof from '@/components/SocialProof';
import BlogPreview from '@/components/BlogPreview';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Feedback from '@/components/Feedback';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <DecodeQuiz />
      <Features />
      <ExampleSection />
      <PersonaSection />
      <Testimonials />
      <FounderStory />
      <SocialProof />
      <FAQ />
      <BlogPreview />
      <Feedback />
      <CTA />
    </Layout>
  );
};

export default Index;
