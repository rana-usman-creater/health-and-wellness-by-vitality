import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const item = window.localStorage.getItem('theme');
      return item === 'dark' ? true : false;
    } catch (error) {
      return false;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (error) {
      // Ignore
    }
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggle = () => setIsDark(!isDark);

  return { isDark, toggle };
}
