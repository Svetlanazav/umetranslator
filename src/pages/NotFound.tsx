
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from '@/components/Layout';

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-card p-8 md:p-12 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-ume-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl font-bold text-ume-purple">404</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="px-6 py-3 bg-ume-purple hover:bg-ume-purple/90 text-white rounded-full inline-block transition-all transform hover:scale-105"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
