import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Twitter, Facebook, Link2, MessageCircle } from 'lucide-react';
import { articles } from '../data/articles';
import { SEO } from '../components/SEO';

export function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = document.documentElement.scrollTop;
      if (scrollTotal > 0) {
        setScrollProgress((currentScroll / scrollTotal) * 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-primary-700 hover:underline">Return to Blog</Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles.filter(a => a.id !== article.id).slice(0, 2);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <>
      <SEO 
        title={article.title}
        description={article.excerpt}
        type="article"
        image={article.image}
        canonical={`/article/${article.slug}`}
        author={article.author.name}
        publishDate={article.date}
      />
      
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary-600 z-[60] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <main className="bg-white dark:bg-gray-900 pb-20">
        
        {/* Post Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-10 py-12 md:py-20 text-center">
          <Link to="/blog" className="text-primary-700 dark:text-primary-500 font-bold uppercase tracking-widest text-[12px] hover:underline mb-6 inline-block">
            {article.category}
          </Link>
          <h1 className="text-[36px] md:text-[52px] font-bold text-gray-900 dark:text-white leading-[1.1] mb-8 font-serif">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-center flex-wrap gap-4 text-[14px] text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <img src={article.author.avatar} alt={article.author.name} className="w-10 h-10 rounded mr-3 border-2 border-white dark:border-gray-800 shadow-sm object-cover" />
              <span className="font-semibold text-gray-900 dark:text-white mr-2">{article.author.name}</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>{article.date}</span>
            <span className="hidden sm:inline">•</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-10 mb-16">
          <div className="aspect-[21/9] rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800 bg-primary-100 dark:bg-gray-800">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Ad Slot */}
        <div className="max-w-3xl mx-auto px-4 mb-12">
          <div className="ad-slot h-[90px] rounded-lg">
            [Advertisement - 728x90]
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">
          
          {/* Main Content */}
          <article className="flex-grow prose prose-lg dark:prose-invert prose-primary max-w-none" dangerouslySetInnerHTML={{ __html: article.content }}>
          </article>

          {/* Social Share Sidebar (sticky) */}
          <aside className="w-full md:w-16 flex-shrink-0 flex md:flex-col gap-4 sticky top-32 h-fit pb-12 items-center justify-center border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-800 pt-8 md:pt-0 md:pl-8">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden md:block mb-4" style={{ writingMode: 'vertical-rl' }}>Share</span>
            <button className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/50 flex items-center justify-center transition-colors">
              <Twitter size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 flex items-center justify-center transition-colors">
              <Facebook size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/30 text-green-500 hover:bg-green-100 dark:hover:bg-green-900/50 flex items-center justify-center transition-colors">
              <MessageCircle size={18} />
            </button>
            <button onClick={copyLink} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors">
              <Link2 size={18} />
            </button>
          </aside>
        </div>

        {/* Ad Slot */}
        <div className="max-w-3xl mx-auto px-4 mt-16 mb-20">
          <div className="ad-slot h-[250px] md:h-[90px] rounded-lg">
            [Advertisement - Responsive]
          </div>
        </div>

        {/* Related Posts */}
        {relatedArticles.length > 0 && (
          <div className="bg-gray-50 dark:bg-gray-800/50 py-16 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-10">
              <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-primary-700 pl-4">Read Next</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedArticles.map(rel => (
                  <Link key={rel.id} to={`/article/${rel.slug}`} className="group flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
                    <div className="w-full sm:w-1/3 aspect-[4/3] sm:aspect-auto bg-primary-100 dark:bg-gray-700">
                      <img src={rel.image} alt={rel.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 sm:w-2/3 flex flex-col">
                      <span className="text-[10px] font-bold text-primary-700 dark:text-primary-500 uppercase tracking-widest block mb-2">{rel.category}</span>
                      <h4 className="text-[18px] font-serif font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-500 transition-colors leading-[1.3]">{rel.title}</h4>
                      <p className="text-[14px] text-gray-600 dark:text-gray-400 line-clamp-2 mt-auto">{rel.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
