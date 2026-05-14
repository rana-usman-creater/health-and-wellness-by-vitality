import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <NavLink to="/" className="flex items-center gap-2 mb-4 group">
              <span className="font-serif font-bold text-xl tracking-tight text-white">
                🌿 VitalityHub
              </span>
            </NavLink>
            <p className="text-gray-400 text-[12px] leading-relaxed mb-6">
              Empowering you to live your healthiest, happiest life through science-backed wellness advice and practical tips.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-white mb-4 tracking-widest text-[12px] uppercase">Explore</h3>
            <ul className="space-y-3">
              <li><NavLink to="/blog" className="text-gray-400 hover:text-white text-[12px] transition-colors">All Articles</NavLink></li>
              <li><NavLink to="/resources" className="text-gray-400 hover:text-white text-[12px] transition-colors">Tools & Resources</NavLink></li>
              <li><NavLink to="/about" className="text-gray-400 hover:text-white text-[12px] transition-colors">About Us</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-400 hover:text-white text-[12px] transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-white mb-4 tracking-widest text-[12px] uppercase">Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-[12px] transition-colors">Nutrition</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-[12px] transition-colors">Fitness</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-[12px] transition-colors">Mental Health</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-[12px] transition-colors">Sleep</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-[12px] transition-colors">Supplements</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div id="newsletter">
            <h3 className="font-bold text-white mb-4 tracking-widest text-[12px] uppercase">Newsletter</h3>
            <p className="text-gray-400 text-[12px] mb-4">
              Get our Free 7-Day Wellness Plan when you subscribe.
            </p>
            <form className="flex flex-col space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-gray-800 border border-gray-700 rounded py-2 pl-9 pr-3 text-[12px] focus:outline-none focus:border-primary-500 text-white"
                  required
                />
                <Mail className="absolute left-3 top-[10px] text-gray-500" size={14} />
              </div>
              <button type="submit" className="w-full bg-primary-700 hover:bg-primary-600 text-white font-semibold py-2 rounded text-[12px] transition-colors">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom banner */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 gap-4">
          <p className="whitespace-nowrap">&copy; {new Date().getFullYear()} VitalityHub.</p>
          <p className="text-center md:text-left max-w-[400px] leading-[1.4]">
            <strong>Disclaimer:</strong> This website is for informational purposes only and does not constitute medical advice.
          </p>
          <div className="flex gap-4 whitespace-nowrap">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
