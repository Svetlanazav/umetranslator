import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useFormSubmit } from "./useFormSubmit";
import { Ok } from "./Ok";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isSubmitted, handleSubmit } = useFormSubmit();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // If we're on the homepage, scroll to the section
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      window.location.href = `/#${id}`;
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-ume-purple via-ume-pink to-ume-yellow text-transparent bg-clip-text transition-transform hover:scale-105"
            >
              Ume
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-ume-purple transition-colors relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ume-purple to-ume-pink group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("who-its-for")}
                className="text-gray-700 hover:text-ume-purple transition-colors relative group"
              >
                Who It's For
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ume-purple to-ume-pink group-hover:w-full transition-all duration-300"></span>
              </button>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-ume-purple transition-colors relative group"
              >
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ume-purple to-ume-pink group-hover:w-full transition-all duration-300"></span>
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-ume-purple to-ume-pink text-white rounded-full transition-all transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ume-purple/50"
                aria-label="Try Ume for free"
              >
                Try Free
              </button>
            </nav>

            <button
              className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-ume-purple/50 rounded-md p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg animate-scale">
            <div className="flex flex-col items-center space-y-4 p-6">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-ume-purple transition-colors py-2 w-full text-center"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("who-its-for")}
                className="text-gray-700 hover:text-ume-purple transition-colors py-2 w-full text-center"
              >
                Who It's For
              </button>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-ume-purple transition-colors py-2 w-full text-center"
              >
                Blog
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="px-6 py-2 bg-gradient-to-r from-ume-purple to-ume-pink text-white rounded-full transition-all w-full"
                aria-label="Try Ume for free"
              >
                Try Free
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modal for CTA buttons */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => !isSubmitted && setIsModalOpen(false)}
      >
        {isSubmitted ? (
          <Ok />
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-ume-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold mb-2">We're Launching Soon!</h3>
            <p className="text-gray-600 mb-4">
              Ume is currently in final development. Sign up to be the first to
              know when we launch!
            </p>
            <form
              method="POST"
              action="http://liangas.tech:8001/umi/subscribe"
              className="mt-4"
              onSubmit={handleSubmit}
            >
              <input
                name="email"
                type="email"
                placeholder="Your email address"
                className="w-full p-3 border border-gray-300 rounded-lg mb-3"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-ume-purple to-ume-pink text-white py-3 rounded-lg hover:shadow-md transition-all"
              >
                Notify Me
              </button>
            </form>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Navbar;
