
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Initialize PostHog when component mounts
    if (typeof window !== 'undefined') {
      // This is a simplified version of the PostHog initialization
      // In a production environment, you would want to use an environment variable for the API key
      if (!(window as any).posthog) {
        const initPostHog = () => {
          (window as any).posthog = {
            capture: (event: string, properties?: any) => {
              console.log('PostHog Event:', event, properties);
              // This is just a mockup. In production, you would have the actual PostHog code
            }
          };
        };
        
        initPostHog();
      }
    }
    
    // Exit intent detection for feedback
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY < 10 && !localStorage.getItem('exitIntentShown')) {
        // In a real implementation, you would show a modal here
        console.log('Exit intent detected - would show feedback modal');
        localStorage.setItem('exitIntentShown', 'true');
      }
    };
    
    document.addEventListener('mouseleave', handleExitIntent);
    
    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-floral_white to-white">
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <button 
          onClick={() => {
            document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
            // Track with PostHog when implemented
            if (typeof window !== 'undefined' && (window as any).posthog) {
              (window as any).posthog.capture('mobile_cta_clicked');
            }
          }}
          className="px-6 py-3 bg-dogwood_rose hover:bg-dogwood_rose/90 text-white rounded-full font-medium shadow-lg transition-all transform hover:scale-105 whitespace-nowrap"
        >
          Try Ume Now
        </button>
      </div>
    </div>
  );
};

export default Layout;
