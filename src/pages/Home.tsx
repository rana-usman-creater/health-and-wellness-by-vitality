import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { SEO } from '../components/SEO';

export function Home() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <main>
      <SEO 
        title="Home"
        description="Take Control of Your Health & Wellbeing with Science-Backed wellness advice."
        canonical="/"
      />
      
      {/* Hero Section */}
      <section className="py-20 md:py-0 md:h-[200px] border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 px-4 sm:px-10 flex items-center">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w-[600px] w-full">
            <h1 className="font-serif text-[36px] md:text-[42px] leading-[1.1] text-primary-900 dark:text-white mb-3">
              Your Journey to Optimal Health Starts Here
            </h1>
            <p className="text-[16px] text-gray-600 dark:text-gray-400 mb-5">
              Evidence-based guides, science-backed nutrition, and sustainable wellness habits for a long, vibrant life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/blog" className="px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white rounded font-semibold text-sm text-center transition-colors">
                Explore Articles
              </Link>
              <Link to="/resources" className="px-6 py-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-primary-700 dark:text-primary-500 border border-primary-700 dark:border-primary-500 rounded font-semibold text-sm text-center transition-colors">
                View Resources
              </Link>
            </div>
          </div>
          
          {/* Trending Box */}
          {featuredArticles.length > 0 && (
            <div className="hidden lg:block ml-auto w-[280px] h-[160px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col">
              <div className="text-[10px] uppercase text-primary-700 dark:text-primary-500 font-bold mb-3 tracking-widest">Trending Today</div>
              <Link to={`/article/${featuredArticles[0].slug}`} className="font-serif text-[14px] font-bold line-clamp-3 hover:text-primary-700 dark:hover:text-primary-400 transition-colors">
                {featuredArticles[0].title}
              </Link>
              <div className="mt-auto text-[12px] text-gray-500 dark:text-gray-400">
                By {featuredArticles[0].author.name} • {featuredArticles[0].readTime}
              </div>
            </div>
          )}
        </div>
      </section>

      <main className="w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[1fr_300px] gap-10 px-4 sm:px-10 py-8 lg:py-10">
        <div className="content-area flex flex-col gap-8">
          
          {/* Featured Articles Section */}
          <section>
            <div className="flex justify-between items-baseline mb-5">
              <h2 className="font-serif text-[24px] text-gray-900 dark:text-white font-bold">Latest Articles</h2>
              <Link to="/blog" className="text-[12px] font-semibold text-primary-700 dark:text-primary-500 hover:underline uppercase tracking-widest">
                VIEW ALL BLOGS &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {featuredArticles.map((article) => (
                <article key={article.id} className="group flex flex-col bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-none hover:shadow-lg transition-transform duration-200">
                  <Link to={`/article/${article.slug}`} className="block h-[140px] bg-primary-100 dark:bg-gray-700 relative overflow-hidden">
                    <div className="absolute top-2 right-2 text-[10px] px-1.5 py-0.5 border border-primary-700 text-primary-700 bg-white/90 rounded-[2px] font-bold z-10 hidden">AD</div>
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-primary-700 dark:text-primary-500 mb-2">
                      {article.category}
                    </div>
                    <Link to={`/article/${article.slug}`} className="block group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                      <h3 className="font-serif text-[16px] font-bold text-gray-900 dark:text-white leading-[1.3] mb-2">
                        {article.title}
                      </h3>
                    </Link>
                    <div className="text-[12px] text-gray-400 dark:text-gray-500 mt-auto flex justify-between items-center">
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Affiliate Recommendation Inline */}
            <div className="mt-8 p-4 border border-[#FEF3C7] dark:border-amber-900/50 bg-[#FFFBEB] dark:bg-amber-900/20 rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="text-2xl">💡</div>
              <div className="flex-1">
                <div className="font-bold text-[14px] text-gray-900 dark:text-amber-100">Affiliate Recommendation: Oura Ring Gen 3</div>
                <div className="text-[12px] text-[#92400E] dark:text-amber-200/70">The gold standard in sleep tracking. We may earn a small commission at no cost to you.</div>
              </div>
              <a href="#" className="px-4 py-2 bg-[#D97706] hover:bg-[#B45309] text-white rounded font-semibold text-[12px] text-center transition-colors whitespace-nowrap">
                Check Price
              </a>
            </div>
          </section>
        </div>

        <aside className="sidebar flex flex-col gap-6">
          <div className="ad-slot h-[180px] rounded-lg">
            <span className="text-[10px] tracking-widest">- SPONSORED CONTENT -</span>
            <strong className="mt-2 text-[14px] text-gray-600 dark:text-gray-400">300x250 Sidebar Banner</strong>
            <span className="text-[10px] mt-1">PLACEHOLDER_AD_DIV</span>
          </div>
          
          {/* Newsletter Section */}
          <div id="newsletter-hero" className="bg-primary-100 dark:bg-gray-800 p-6 rounded-lg border border-primary-200 dark:border-gray-700">
            <h3 className="font-serif text-[18px] text-gray-900 dark:text-white font-bold mb-2">Free Wellness Plan</h3>
            <p className="text-[12px] text-primary-800 dark:text-gray-300 mb-4">
              Get our 7-Day Guide to Better Vitality & Mental Clarity delivered to your inbox.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-primary-300 dark:border-gray-600 rounded text-[12px] focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button type="submit" className="w-full py-2 bg-primary-700 hover:bg-primary-800 text-white rounded font-semibold text-[14px] transition-colors">
                Download Free Plan
              </button>
              <p className="text-[10px] text-primary-800/70 dark:text-gray-500 text-center">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </aside>
      </main>
    </main>
  );
}
