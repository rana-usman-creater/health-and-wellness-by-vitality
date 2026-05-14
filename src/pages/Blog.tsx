import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { articles } from '../data/articles';
import { SEO } from '../components/SEO';

const CATEGORIES = ["All", "Nutrition", "Fitness", "Mental Health", "Sleep", "Supplements"];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const filteredArticles = articles.filter(a => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesQuery = !query || a.title.toLowerCase().includes(query) || a.excerpt.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  return (
    <main className="py-12 bg-white dark:bg-gray-900 min-h-screen">
      <SEO 
        title="Blog & Articles"
        description="Read our latest articles on health, wellness, sleep, and nutrition."
        canonical="/blog"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        
        <div className="mb-10 text-center sm:text-left border-b border-gray-200 dark:border-gray-800 pb-8">
          <h1 className="text-4xl md:text-[42px] font-serif font-bold text-gray-900 dark:text-white mb-4">
            {query ? `Search Results for "${query}"` : 'Wellness Insights'}
          </h1>
          <p className="text-[16px] text-gray-600 dark:text-gray-400 max-w-2xl">
            {query ? `Found ${filteredArticles.length} article(s)` : 'Science-backed articles, guides, and practical advice to help you live a healthier, more balanced life.'}
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-10">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded text-[12px] uppercase tracking-widest font-bold transition-colors ${
                activeCategory === category 
                ? 'bg-primary-700 text-white' 
                : 'bg-primary-50 dark:bg-gray-800 text-primary-900 dark:text-gray-300 border border-primary-100 dark:border-gray-700 hover:border-primary-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article key={article.id} className="group flex flex-col bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-none hover:shadow-lg transition-transform duration-200">
              <Link to={`/article/${article.slug}`} className="block h-[140px] bg-primary-100 dark:bg-gray-700 relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-5 flex flex-col flex-grow">
                <div className="text-[10px] font-bold uppercase tracking-widest text-primary-700 dark:text-primary-500 mb-2">
                  {article.category}
                </div>
                <Link to={`/article/${article.slug}`} className="block group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                  <h3 className="font-serif text-[18px] font-bold text-gray-900 dark:text-white leading-[1.3] mb-3">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-400 text-[14px] mb-6 flex-grow line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center mt-auto justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                  <div className="text-[12px] text-gray-500 dark:text-gray-400 font-medium">By {article.author.name}</div>
                  <div className="text-[12px] text-gray-500 dark:text-gray-400">{article.readTime}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No articles found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try selecting a different category.</p>
          </div>
        )}

      </div>
    </main>
  );
}
