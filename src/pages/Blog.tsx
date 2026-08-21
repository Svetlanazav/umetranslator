import React from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { asset } from "@/lib/asset";

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Flirt Over Text Without Being Awkward",
      excerpt:
        "Master the art of digital flirting with these expert tips that will keep your conversations engaging, fun, and never creepy.",
      slug: "how-to-flirt-over-text",
      image: "/imgs/couple.jpeg",
      date: "June 12, 2023",
      category: "Flirting",
      readTime: "6 min read",
    },
    {
      id: 2,
      title: "What Does She Mean by Saying 'I'm Fine'?",
      excerpt:
        "Decode one of dating's most mysterious responses and learn what's really hiding behind those four deceptively simple letters.",
      slug: "what-does-she-mean-by-im-fine",
      image: "/imgs/funny-couple.jpeg",
      date: "May 28, 2023",
      category: "Decoding",
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "How to Text With a Guy and Keep Him Interested",
      excerpt:
        "Discover conversation techniques that will have him checking his phone eagerly for your next message.",
      slug: "how-to-keep-him-interested-texting",
      image: "/imgs/writing.jpeg",
      date: "April 15, 2023",
      category: "Dating",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "The Psychology Behind Texting and Dating",
      excerpt:
        "Understanding the psychology of texting can dramatically improve your dating life and help you avoid common communication pitfalls.",
      slug: "psychology-behind-texting-dating",
      image: "/imgs/funnyguy.jpeg",
      date: "March 10, 2023",
      category: "Psychology",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "10 Text Responses That Always Work",
      excerpt:
        "A collection of foolproof text responses for any dating situation, from first conversations to relationship milestones.",
      slug: "text-responses-that-work",
      image: "/blog/blog-fine.webp",
      date: "February 22, 2023",
      category: "Tips",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Red Flags in Texting You Shouldn't Ignore",
      excerpt:
        "Learn to identify concerning patterns in text communication before they become bigger issues in your relationship.",
      slug: "red-flags-in-texting",
      image: "/blog/blog-interested.webp",
      date: "January 18, 2023",
      category: "Relationships",
      readTime: "6 min read",
    },
  ];

  return (
    <Layout>
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The Ume Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert advice on dating, relationships, and decoding those
                confusing text messages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="glass-card transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 overflow-hidden"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={asset(post.image)}
                        alt={`Illustration for ${post.title}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-0 right-0 bg-ume-purple/80 text-white text-xs px-3 py-1">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        {post.title}
                      </h3>
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
