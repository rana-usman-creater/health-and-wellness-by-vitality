import React from 'react';
import { CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export function About() {
  return (
    <main className="bg-white dark:bg-gray-900 pt-12 pb-24">
      <SEO 
        title="About Us"
        description="Learn more about our mission to provide science-backed health and wellness information."
        canonical="/about"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 font-serif">
            Our Mission is <span className="text-primary-700 dark:text-primary-500">Clarity</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            The health and wellness space is filled with noise, fads, and contradictory advice. We're here to cut through the clutter and deliver science-backed truth.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert prose-primary mx-auto">
          <h2>Who We Are</h2>
          <p>
            Founded in 2024, VitalityHub was built by a team of researchers, nutritionists, and fitness enthusiasts who were tired of the "quick-fix" culture dominating the internet. We believe that true health is a lifelong journey built on sustainable habits, not 30-day crash diets.
          </p>

          <h2>Our Editorial Process</h2>
          <p>
            Trust is our most valuable asset. Every article published on our platform goes through a rigorous editorial process:
          </p>
          <ul className="list-none pl-0 space-y-3">
            <li className="flex items-start">
              <CheckCircle className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={20} />
              <span><strong>Evidence-Based:</strong> Claims must be backed by peer-reviewed studies.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={20} />
              <span><strong>Expert Review:</strong> Content is reviewed by qualified health professionals.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={20} />
              <span><strong>Objective Recommendations:</strong> If we recommend a product, it's because we actually believe in it.</span>
            </li>
          </ul>

          <h2>The Team</h2>
          <div className="not-prose my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center border border-gray-200 dark:border-gray-700">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150" alt="Dr. Sarah Jenkins" className="w-24 h-24 rounded-full mb-4 object-cover" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Dr. Sarah Jenkins</h3>
              <p className="text-primary-700 dark:text-primary-500 text-sm font-medium mb-2">Chief Medical Editor</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Board-certified physician specializing in sleep medicine and preventative care.</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center border border-gray-200 dark:border-gray-700">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150" alt="Marcus Chen" className="w-24 h-24 rounded-full mb-4 object-cover" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Marcus Chen</h3>
              <p className="text-primary-700 dark:text-primary-500 text-sm font-medium mb-2">Lead Nutritionist</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Certified Sports Nutritionist focusing on sustainable dietary protocols.</p>
            </div>
          </div>

          <h2>Our Promise</h2>
          <p>
            We will never sell your data, promote a dangerous supplement, or write clickbait headlines. Our goal is to empower you with the knowledge you need to take control of your wellbeing.
          </p>
        </div>
      </div>
    </main>
  );
}
