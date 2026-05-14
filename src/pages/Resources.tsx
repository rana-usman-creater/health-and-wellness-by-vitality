import React from 'react';
import { resources } from '../data/resources';
import { Activity, Wind, Leaf, Book, Moon, Droplet, Clock, BookOpen, ExternalLink } from 'lucide-react';
import { SEO } from '../components/SEO';

const getIcon = (iconName: string) => {
  switch(iconName) {
    case 'Activity': return <Activity size={24} />;
    case 'Wind': return <Wind size={24} />;
    case 'Leaf': return <Leaf size={24} />;
    case 'Book': return <Book size={24} />;
    case 'Moon': return <Moon size={24} />;
    case 'Droplet': return <Droplet size={24} />;
    case 'Clock': return <Clock size={24} />;
    case 'BookOpen': return <BookOpen size={24} />;
    default: return <ExternalLink size={24} />;
  }
};

export function Resources() {
  return (
    <main className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <SEO 
        title="Tools & Resources"
        description="Curated tools, apps, supplements, and books to optimize your health and daily routine."
        canonical="/resources"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">Recommended Resources</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A curated list of our favorite tools, apps, supplements, and books to help you optimize your health and daily routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-500 flex items-center justify-center mr-4">
                  {getIcon(resource.icon)}
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">{resource.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{resource.name}</h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {resource.description}
              </p>
              <div className="mt-auto">
                <a 
                  href={resource.url}
                  className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 hover:bg-primary-50 dark:hover:bg-primary-900/30 text-gray-900 dark:text-white rounded-lg font-medium transition-colors border border-transparent hover:border-primary-100 dark:hover:border-primary-800 group"
                >
                  <span className="group-hover:text-primary-700 dark:group-hover:text-primary-400">View Resource</span>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-primary-700 dark:group-hover:text-primary-400" />
                </a>
                {resource.isAffiliate && (
                  <p className="text-[10px] text-gray-400 text-center mt-2">Affiliate Link</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 dark:bg-gray-800 border border-primary-100 dark:border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Download Our Free Checklists</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
            We've compiled printable PDFs for your grocery trips, sleep sanctuary setup, and gym routines.
          </p>
          <button className="px-8 py-3 bg-primary-700 hover:bg-primary-800 text-white rounded-lg font-bold transition-colors">
            Access Downloads
          </button>
        </div>

      </div>
    </main>
  );
}
