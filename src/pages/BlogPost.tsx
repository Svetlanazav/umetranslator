
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowLeft } from 'lucide-react';
import { asset, withBaseAssets } from "@/lib/asset";

// Blog post data
export const blogPostsData = {
  "how-to-flirt-over-text": {
    title: "How to Flirt Over Text Without Being Awkward",
    date: "June 12, 2023",
    author: "Alex Morgan",
    category: "Flirting",
    readTime: "6 min read",
    featuredImage: "/blog-imgs/blog-flirt.webp",
    content: `
      <p class="lead">Mastering the art of texting can significantly improve your dating life. In this article, we explore effective and non-awkward ways to flirt over text.</p>
      
      <h2>Why Texting Matters in Modern Dating</h2>
      <p>In today's digital world, much of our communication happens through text messages. This is especially true in the early stages of dating, where texting often sets the tone for the relationship. A good text conversation can build anticipation for your next meeting, while a poor one might end things before they even begin.</p>
      
      <p>Research suggests that over 70% of communication in new relationships now happens digitally, highlighting just how important your texting skills have become.</p>
      
      <img src="/blog-imgs/blog-texting.webp" alt="Person texting on a smartphone" class="my-8 rounded-lg w-full" />
      
      <h2>The Do's of Flirty Texting</h2>
      
      <h3>1. Keep it Light and Playful</h3>
      <p>The best flirty texts have a playful, teasing quality. Think of flirting as a fun game rather than a serious endeavor. Use gentle teasing, inside jokes, and light-hearted banter to create a positive, enjoyable vibe.</p>
      
      <h3>2. Use Specific Compliments</h3>
      <p>Generic compliments like "You're cute" are fine, but specific ones show you're paying attention. Try something like "I can't stop thinking about how your eyes lit up when you talked about your trip to Italy."</p>
      
      <h3>3. Ask Thoughtful Questions</h3>
      <p>Questions show interest and keep the conversation going. Ask about their passions, dreams, or even their day. Just make sure your questions don't feel like an interview – mix them in naturally with other conversation.</p>
      
      <blockquote>
        "The key to great texting isn't what you say, but how you make the other person feel when they see your name pop up on their screen."
      </blockquote>
      
      <h2>The Don'ts of Flirty Texting</h2>
      
      <h3>1. Avoid Excessive Emojis</h3>
      <p>While emojis can add emotion to text, overusing them can come across as immature. One or two per message is plenty.</p>
      
      <h3>2. Don't Double (or Triple) Text</h3>
      <p>Sending multiple messages when someone hasn't responded yet can appear desperate. Be patient and give them time to reply.</p>
      
      <h3>3. Skip the Generic Pickup Lines</h3>
      <p>Clichéd pickup lines rarely work in person, and they're even less effective over text. Focus on creating a genuine connection instead.</p>
      
      <img src="/blog-imgs/blog-couple.webp" alt="Happy couple looking at smartphone together" class="my-8 rounded-lg w-full" />
      
      <h2>Examples That Actually Work</h2>
      
      <p>Sometimes seeing real examples can help you understand the tone and approach that works. Here are some flirty text ideas that strike the right balance:</p>
      
      <ul>
        <li>"That restaurant you mentioned sounds amazing. Maybe we could check it out together sometime?"</li>
        <li>"Just saw a [movie/show/book] that made me think of you. Have you seen it?"</li>
        <li>"You've been on my mind today. Just thought you should know."</li>
        <li>"I'm still smiling about our conversation yesterday."</li>
      </ul>
      
      <h2>Reading Between the Lines</h2>
      
      <p>Understanding how your texts are being received is crucial. Some signs that your flirty texts are working include:</p>
      
      <ul>
        <li>They respond quickly and with similar length messages</li>
        <li>They ask questions to keep the conversation going</li>
        <li>They initiate conversations sometimes, not just responding to yours</li>
        <li>Their messages include personal details or small reveals about themselves</li>
      </ul>
      
      <h2>Final Thoughts</h2>
      
      <p>Remember that the goal of flirty texting is to build a connection that translates to the real world. Use texting to enhance your relationship, not replace face-to-face interaction.</p>
      
      <p>With a little practice and these guidelines in mind, you'll be sending flirty texts that get positive responses and help move your relationships forward – all without that awkward feeling.</p>
    `
  },
  "what-does-she-mean-by-im-fine": {
    title: "What Does She Mean by Saying 'I'm Fine'?",
    date: "May 28, 2023",
    author: "Jamie Chen",
    category: "Decoding",
    readTime: "5 min read",
    featuredImage: "/blog-imgs/blog-fine.webp",
    content: `
      <p class="lead">Those four letters – F-I-N-E – might be the most misinterpreted word in relationship communication. Let's decode what "I'm fine" really means and how to respond appropriately.</p>
      
      <h2>The Many Meanings of "Fine"</h2>
      <p>When someone says they're "fine," the actual meaning can vary wildly depending on context, tone, and the history of your relationship. Here are some of the most common interpretations:</p>
      
      <h3>1. The Literal Fine</h3>
      <p>Yes, sometimes "I'm fine" simply means "I am okay" – especially early in relationships or in response to simple questions like "How was your day?" However, this is less common in emotional situations.</p>
      
      <h3>2. The "I'm Not Ready to Talk" Fine</h3>
      <p>Often, "I'm fine" means "I'm feeling something, but I'm not ready to discuss it yet." This might be because they're still processing their emotions or because the timing isn't right for a deeper conversation.</p>
      
      <img src="/blog-imgs/blog-thinking.webp" alt="Woman looking thoughtful" class="my-8 rounded-lg w-full" />
      
      <h3>3. The "You Should Know Why I'm Upset" Fine</h3>
      <p>This version of "fine" suggests the person believes you already know what's wrong, and they're disappointed you're not acknowledging it. It's often accompanied by closed body language or a change in tone.</p>
      
      <h3>4. The "I'm Very Much Not Fine" Fine</h3>
      <p>Sometimes "I'm fine" means exactly the opposite – it's a response given when someone is hurt, angry, or disappointed but doesn't want to engage in conflict or appear vulnerable.</p>
      
      <blockquote>
        "In relationships, 'fine' is rarely just fine. It's often the tip of an emotional iceberg."
      </blockquote>
      
      <h2>Context Clues: How to Tell Which "Fine" You're Dealing With</h2>
      
      <p>Since "fine" can mean so many different things, you need to rely on other cues to understand what's really being communicated:</p>
      
      <h3>Tone of Voice</h3>
      <p>A clipped, short "fine" sounds very different from a relaxed, casual one. Pay attention to how the word is delivered – it often tells you more than the word itself.</p>
      
      <h3>Body Language</h3>
      <p>Crossed arms, lack of eye contact, or tense facial expressions suggest the "fine" is anything but. Relaxed posture and normal behavior support a more literal interpretation.</p>
      
      <h3>Recent Context</h3>
      <p>Did something potentially upsetting happen recently? Was there a miscommunication or disappointment? "Fine" carries more weight after a conflict or potential relationship misstep.</p>
      
      <img src="/blog-imgs/blog-couple-talking.webp" alt="Couple having a serious conversation" class="my-8 rounded-lg w-full" />
      
      <h2>How to Respond When She Says "I'm Fine"</h2>
      
      <p>Your response should vary based on which "fine" you think you're encountering:</p>
      
      <h3>For the Literal Fine</h3>
      <p>If context suggests they truly are fine, simply continue the conversation normally. Overanalyzing when nothing is wrong can create problems where none existed.</p>
      
      <h3>For the "Not Ready to Talk" Fine</h3>
      <p>Respect their boundary while leaving the door open: "Okay, I'm here if you want to talk about anything later." This shows support without pressure.</p>
      
      <h3>For the "You Should Know" Fine</h3>
      <p>Try a gentle approach like, "I feel like something might be bothering you. I'd really like to understand if there's something we should talk about."</p>
      
      <h3>For the "Very Not Fine" Fine</h3>
      <p>Acknowledge the emotion you're sensing: "You seem upset. I care about how you feel, and I'd like to understand what's going on so we can work through it together."</p>
      
      <h2>The Gender Factor: Is "Fine" Different for Women?</h2>
      
      <p>While individual communication styles vary enormously, research in gender linguistics suggests some patterns in how men and women use language in relationships:</p>
      
      <ul>
        <li>Women are more likely to use indirect communication when expressing negative emotions</li>
        <li>Men tend to take words more literally and miss emotional subtext</li>
        <li>Women often prioritize relationship harmony, using "fine" to avoid immediate conflict</li>
      </ul>
      
      <p>That said, these are generalizations – many men use "I'm fine" in exactly the same ways, and many women communicate very directly.</p>
      
      <h2>Building Better Communication</h2>
      
      <p>The real solution isn't becoming a master decoder of "fine," but creating a relationship where direct communication feels safe for both parties:</p>
      
      <ul>
        <li>Respond supportively when your partner does share vulnerable feelings</li>
        <li>Model clear communication about your own emotions</li>
        <li>Create regular check-ins about relationship satisfaction</li>
        <li>Avoid criticizing or dismissing feelings when they're shared</li>
      </ul>
      
      <p>With practice and patience, "I'm fine" can become less of a mystery and more of an opportunity to connect more deeply.</p>
    `
  },
  "how-to-keep-him-interested-texting": {
    title: "How to Text With a Guy and Keep Him Interested",
    date: "April 15, 2023",
    author: "Taylor Williams",
    category: "Dating",
    readTime: "7 min read",
    featuredImage: "/blog-imgs/blog-interested.webp",
    content: `
      <p class="lead">Keeping a conversation flowing with someone you're interested in can sometimes feel like a delicate art. This guide will help you master the techniques that keep him checking his phone for your messages.</p>
      
      <h2>Understanding the Male Texting Mindset</h2>
      <p>Before diving into specific techniques, it helps to understand how many men approach texting. While individual preferences vary widely, research on communication patterns shows some common trends:</p>
      
      <ul>
        <li>Men often prefer more direct, purposeful communication</li>
        <li>They typically use fewer words and less emotional language</li>
        <li>Many respond better to spaced-out messaging rather than rapid-fire texts</li>
        <li>Visual messages (photos, GIFs, etc.) often get more engagement</li>
      </ul>
      
      <p>Understanding these tendencies can help you adapt your messaging style for better engagement – though remember that individual preferences always matter more than generalizations.</p>
      
      <img src="/blog-imgs/blog-phone.webp" alt="Person holding smartphone" class="my-8 rounded-lg w-full" />
      
      <h2>The Art of Intriguing Messages</h2>
      
      <h3>1. Ask Open-Ended Questions</h3>
      <p>Questions that require more than a yes/no answer keep the conversation flowing. Instead of "Did you have a good day?" try "What was the most interesting part of your day?"</p>
      
      <h3>2. Share Your Genuine Interests</h3>
      <p>Talking about things you're genuinely passionate about shows authenticity and gives him insight into your world. Your enthusiasm can be contagious through text.</p>
      
      <h3>3. Use Callback Humor</h3>
      <p>Referencing previous conversations or inside jokes creates continuity and shows you're paying attention. It builds a sense of shared history even through text.</p>
      
      <blockquote>
        "The most interesting texts show your authentic personality while inviting engagement – they're windows, not walls."
      </blockquote>
      
      <h2>Timing and Pacing: The Hidden Elements of Great Texting</h2>
      
      <p>Sometimes when you text matters as much as what you say. Consider these timing principles:</p>
      
      <h3>The Mirror Technique</h3>
      <p>Generally, try to match his response time and message length. If he takes an hour to respond with a paragraph, similar timing and length from you often feels most natural.</p>
      
      <h3>The Interest Curve</h3>
      <p>Keep conversations on an upward trajectory – end conversations when they're still interesting rather than letting them fizzle out. This creates anticipation for the next exchange.</p>
      
      <h3>Leaving Space</h3>
      <p>Constant availability can paradoxically reduce interest. Having gaps between texting sessions gives both of you time to miss the conversation and build anticipation.</p>
      
      <img src="/blog-imgs/blog-happy.webp" alt="Person smiling at phone message" class="my-8 rounded-lg w-full" />
      
      <h2>Creating Depth Beyond Small Talk</h2>
      
      <p>To build a meaningful connection, you need to move beyond surface-level conversations:</p>
      
      <h3>The Ladder Technique</h3>
      <p>Start with light topics, then gradually introduce more personal subjects as you both feel comfortable. For example:</p>
      <ol>
        <li>Casual interests → "What kind of music do you listen to while working?"</li>
        <li>Personal tastes → "What's a movie that really changed how you think about something?"</li>
        <li>Values and beliefs → "What's something you believe that most people disagree with?"</li>
      </ol>
      
      <h3>Vulnerability Exchanges</h3>
      <p>Sharing something slightly vulnerable (and appropriate for your relationship stage) often prompts similar sharing from him. This builds emotional intimacy through text.</p>
      
      <h2>What to Avoid: Common Texting Pitfalls</h2>
      
      <p>Just as important as knowing what to do is understanding what can undermine your connection:</p>
      
      <h3>1. Playing Games</h3>
      <p>Artificially delaying responses or being deliberately vague might create short-term interest but usually backfires long-term. Authentic communication builds stronger connections.</p>
      
      <h3>2. Over-Texting</h3>
      <p>Sending multiple messages before getting a response or texting constantly throughout the day can feel overwhelming. Quality matters more than quantity.</p>
      
      <h3>3. Expectation Texts</h3>
      <p>Messages that put pressure on the recipient, like "Why haven't you replied?" or "Are you ignoring me?" create negative associations with your texts.</p>
      
      <h2>Reading His Interest Level</h2>
      
      <p>How can you tell if your texting approach is working? Look for these positive signs:</p>
      
      <ul>
        <li>He initiates conversations, not just responds</li>
        <li>His replies become more detailed over time</li>
        <li>He asks questions about you and your life</li>
        <li>He sends messages that don't require responses (memes, thoughts, etc.) just to connect</li>
        <li>Conversations naturally lead to making plans to meet in person</li>
      </ul>
      
      <h2>The Big Picture: Texting in Context</h2>
      
      <p>Remember that texting is just one dimension of your connection. The most successful approach uses texting to enhance your in-person relationship, not replace it.</p>
      
      <p>The ultimate goal should be building enough interest and connection to spend quality time together in real life, where deeper bonds can form beyond what's possible through text alone.</p>
      
      <p>By mastering these techniques while staying true to yourself, you'll create text conversations that leave him looking forward to hearing from you – and more importantly, to seeing you again soon.</p>
    `
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Check if the slug exists in our data
  const post = slug ? blogPostsData[slug as keyof typeof blogPostsData] : null;
  
  if (!post) {
    return (
      <Layout>
        <div className="pt-28 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-6">Article Not Found</h1>
            <p className="mb-8">Sorry, the article you're looking for doesn't exist or has been moved.</p>
            <Link 
              to="/blog" 
              className="px-6 py-3 bg-ume-purple hover:bg-ume-purple/90 text-white rounded-full inline-flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-ume-purple hover:underline mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center text-gray-500 text-sm gap-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span className="bg-ume-purple/10 text-ume-purple px-3 py-1 rounded-full">{post.category}</span>
              </div>
            </div>
            
            <div className="mb-10">
              <img 
                src={asset(post.featuredImage)} 
                alt={`Featured image for ${post.title}`} 
                className="w-full h-auto rounded-xl"
              />
            </div>
            
            <div className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: withBaseAssets(post.content) }}
            />
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Written by</p>
                  <p className="font-medium">{post.author}</p>
                </div>
                
                <div className="flex space-x-4">
                  <button aria-label="Share on Twitter" className="text-gray-500 hover:text-ume-purple transition-colors focus:outline-none focus:ring-2 focus:ring-ume-purple/50 rounded-full p-2">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </button>
                  <button aria-label="Share on Facebook" className="text-gray-500 hover:text-ume-purple transition-colors focus:outline-none focus:ring-2 focus:ring-ume-purple/50 rounded-full p-2">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                  <button aria-label="Share by Email" className="text-gray-500 hover:text-ume-purple transition-colors focus:outline-none focus:ring-2 focus:ring-ume-purple/50 rounded-full p-2">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-16 glass-card p-8 text-center">
              <h3 className="text-xl font-bold mb-3">Decode your own texts with Ume Translator</h3>
              <p className="text-gray-600 mb-6">Stop guessing what those cryptic messages really mean. Get Ume Translator and never be confused again.</p>
              <Link 
                to="/" 
                className="px-6 py-3 bg-ume-purple hover:bg-ume-purple/90 text-white rounded-full inline-block transition-all transform hover:scale-105"
              >
                Try Ume Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
