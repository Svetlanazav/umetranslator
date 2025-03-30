
import React, { useEffect } from 'react';
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
import FAQSection from '@/components/FAQSection';
import CaseStudy from '@/components/CaseStudy';
import FeedbackSection from '@/components/FeedbackSection';
import Testimonials from '@/components/Testimonials';
import ExitIntentSurvey from '@/components/ExitIntentSurvey';

const Index: React.FC = () => {
  // This would be where we'd set up PostHog if we were implementing it
  useEffect(() => {
    // Initialize PostHog
    // if (typeof window !== 'undefined') {
    //   posthog.init('YOUR_API_KEY', {
    //     api_host: 'https://app.posthog.com',
    //   });
    // }
  }, []);

  return (
    <Layout>
      <Hero />
      <CaseStudy />
      <DecodeQuiz />
      <Features />
      <ExampleSection />
      <PersonaSection />
      <FounderStory />
      <SocialProof />
      <Testimonials />
      <FAQSection />
      <BlogPreview />
      <FeedbackSection />
      <CTA />
      <ExitIntentSurvey />
    </Layout>
  );
};

export default Index;
