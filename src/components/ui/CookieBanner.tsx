import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 dark:text-gray-300 flex-1">
          We use cookies to improve your experience, measure analytics, and provide relevant ads. By continuing to use our site, you agree to our <a href="#" className="underline text-primary-700 dark:text-primary-500">Privacy Policy</a>.
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button 
            onClick={acceptCookies}
            className="flex-1 sm:flex-none bg-primary-700 hover:bg-primary-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
          >
            Accept All
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            aria-label="Close" 
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
