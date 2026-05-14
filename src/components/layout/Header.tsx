import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Search, Menu, X, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const { isDark, toggle } = useDarkMode();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center transition-colors">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <NavLink to="/" className="flex items-center gap-2 group">
            <span className="font-serif font-bold text-2xl tracking-tight text-primary-700 dark:text-primary-500">
              🌿 VitalityHub
            </span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" className={({isActive}) => `text-sm font-medium uppercase tracking-[0.05em] transition-colors ${isActive ? 'text-primary-700 dark:text-primary-500' : 'text-gray-900 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-500'}`}>Home</NavLink>
          <NavLink to="/blog" className={({isActive}) => `text-sm font-medium uppercase tracking-[0.05em] transition-colors ${isActive ? 'text-primary-700 dark:text-primary-500' : 'text-gray-900 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-500'}`}>Blog</NavLink>
          <NavLink to="/resources" className={({isActive}) => `text-sm font-medium uppercase tracking-[0.05em] transition-colors ${isActive ? 'text-primary-700 dark:text-primary-500' : 'text-gray-900 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-500'}`}>Resources</NavLink>
          <NavLink to="/about" className={({isActive}) => `text-sm font-medium uppercase tracking-[0.05em] transition-colors ${isActive ? 'text-primary-700 dark:text-primary-500' : 'text-gray-900 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-500'}`}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => `text-sm font-medium uppercase tracking-[0.05em] transition-colors ${isActive ? 'text-primary-700 dark:text-primary-500' : 'text-gray-900 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-500'}`}>Contact</NavLink>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button aria-label="Search" onClick={toggleSearch} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
            Search articles...
            <Search size={14} />
          </button>
          <button aria-label="Toggle Dark Mode" onClick={toggle} className="text-gray-500 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button aria-label="Search" onClick={toggleSearch} className="text-gray-500 dark:text-gray-400">
            <Search size={20} />
          </button>
          <button aria-label="Toggle Dark Mode" onClick={toggle} className="text-gray-500 dark:text-gray-400">
           {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button aria-label="Menu" onClick={toggleMenu} className="text-gray-500 dark:text-gray-400">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-[72px] left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg py-4 px-4 flex flex-col space-y-4">
            <NavLink to="/" onClick={toggleMenu} className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-primary-700 uppercase tracking-wide">Home</NavLink>
            <NavLink to="/blog" onClick={toggleMenu} className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-primary-700 uppercase tracking-wide">Blog</NavLink>
            <NavLink to="/resources" onClick={toggleMenu} className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-primary-700 uppercase tracking-wide">Resources</NavLink>
            <NavLink to="/about" onClick={toggleMenu} className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-primary-700 uppercase tracking-wide">About</NavLink>
            <NavLink to="/contact" onClick={toggleMenu} className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-primary-700 uppercase tracking-wide">Contact</NavLink>
          </div>
        )}

        {/* Search Bar Dropdown */}
        {isSearchOpen && (
          <div className="absolute top-[72px] left-0 w-full bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 shadow-sm z-40">
          <form className="max-w-3xl mx-auto relative" onSubmit={(e) => {
            e.preventDefault();
            const val = (e.currentTarget.elements.namedItem('q') as HTMLInputElement).value;
            if(val) {
              window.location.href = `/blog?q=${encodeURIComponent(val)}`;
            }
          }}>
            <input 
              name="q"
              type="text" 
              autoFocus
              placeholder="Search articles, guides, and tips... (Press Enter to search)" 
              className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full py-3 px-12 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <button type="button" onClick={toggleSearch} className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
              <X size={20} />
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
