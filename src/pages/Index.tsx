
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ExampleSection from "@/components/ExampleSection";
import PersonaSection from "@/components/PersonaSection";
import SocialProof from "@/components/SocialProof";
import BlogPreview from "@/components/BlogPreview";
import CTA from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import FeedbackSection from "@/components/FeedbackSection";
import Testimonials from "@/components/Testimonials";
import MessageExamples from "@/components/MessageExamples";

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <SocialProof />
      <MessageExamples />
      <Features />
      <PersonaSection />
      <ExampleSection />
      <Testimonials />
      <FAQSection />
      <BlogPreview />
      <FeedbackSection />
      <CTA />
    </Layout>
  );
};

export default Index;
