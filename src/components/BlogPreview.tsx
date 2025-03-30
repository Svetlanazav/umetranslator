
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreview: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways to Decode 'I'm fine' (When They're Not)",
      image: "/blog-fine.webp",
      excerpt: "Learn to read between the lines when your partner says they're 'fine'.",
      date: "Oct 15, 2023"
    },
    {
      id: 2,
      title: "The Science Behind Text Misinterpretation",
      image: "/blog-texting.webp",
      excerpt: "Why we misunderstand texts and how to avoid communication pitfalls.",
      date: "Sep 28, 2023"
    },
    {
      id: 3,
      title: "Flirty Texts That Actually Work",
      image: "/blog-flirt.webp",
      excerpt: "Skip the cheesy lines and try these proven approaches instead.",
      date: "Sep 15, 2023"
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-ume-purple/10 text-ume-purple px-4 py-1 rounded-full text-sm font-medium">
              Blog
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Latest From Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tips, and stories about modern text communication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link 
                to={`/blog/${post.id}`} 
                key={post.id}
                className="group transition-all hover:no-underline"
              >
                <div className="glass-card overflow-hidden rounded-xl transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-md h-full">
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-ume-purple transition-colors">
                      {post.title}
                    </h3>
                    
                    <div className="mt-4 text-ume-purple font-medium group-hover:text-ume-pink transition-colors flex items-center">
                      <span>Read More</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-ume-purple rounded-full font-medium transition-all border border-gray-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              See All Posts
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
