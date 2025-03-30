
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreview: React.FC = () => {
  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: "5 Texting Mistakes That Are Killing Your Dating Game",
      excerpt: "Are you unknowingly sabotaging your relationships with these common texting errors? Learn what to avoid and how to fix it.",
      image: "/blog-texting.webp",
      date: "May 15, 2023",
      category: "Dating",
      slug: "texting-mistakes"
    },
    {
      id: 2,
      title: "What 'I'm Fine' Really Means (According to Science)",
      excerpt: "The psychology behind the most infamous text reply and what it's actually trying to tell you.",
      image: "/blog-fine.webp",
      date: "April 22, 2023",
      category: "Psychology",
      slug: "what-im-fine-means"
    },
    {
      id: 3,
      title: "From 'Hey' to 'Stay': Texts That Build Long-Term Connection",
      excerpt: "Discover the science-backed messaging patterns that lead to deeper relationships and lasting bonds.",
      image: "/blog-couple.webp",
      date: "March 10, 2023",
      category: "Relationships",
      slug: "texts-that-build-connection"
    }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-ume-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="inline-block bg-ume-purple/10 text-ume-purple px-4 py-1 rounded-full text-sm font-medium mb-2">
                Latest Articles
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Get Smarter About Texting
              </h2>
            </div>
            <Link to="/blog" className="text-ume-purple font-medium hover:underline">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="group block glass-card overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-ume-purple bg-ume-purple/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-ume-purple transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
