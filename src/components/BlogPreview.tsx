
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BlogPreview: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Flirt Over Text Without Being Awkward",
      excerpt: "Master the art of digital flirting with these expert tips that will keep your conversations engaging, fun, and never creepy.",
      slug: "how-to-flirt-over-text",
      image: "/blog-flirt.webp"
    },
    {
      id: 2,
      title: "What Does She Mean by Saying 'I'm Fine'?",
      excerpt: "Decode one of dating's most mysterious responses and learn what's really hiding behind those four deceptively simple letters.",
      slug: "what-does-she-mean-by-im-fine",
      image: "/blog-fine.webp"
    },
    {
      id: 3,
      title: "How to Text With a Guy and Keep Him Interested",
      excerpt: "Discover conversation techniques that will have him checking his phone eagerly for your next message.",
      slug: "how-to-keep-him-interested-texting",
      image: "/blog-interested.webp"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-ume-purple/10 text-ume-purple px-4 py-1 rounded-full text-sm font-medium">
              Blog
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Master the Art of Texting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read our latest articles to improve your communication skills and decode those confusing messages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="glass-card transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 overflow-hidden">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={`Illustration for ${post.title}`} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-ume-purple font-medium">
                      <span>Read Article</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/blog" 
              className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-full text-ume-purple hover:bg-ume-purple/5 transition-colors"
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
