import React, { createContext, useContext, useState, useEffect } from 'react';

type PageRoute = '/' | '/services' | '/case-studies' | '/calculator' | '/about' | '/contact' | '/admin';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Extract initial route from URL hash or pathname
  const getPath = (): string => {
    if (window.location.hash.startsWith('#/')) {
      return window.location.hash.replace('#', '') || '/';
    }
    const path = window.location.pathname;
    return path && path !== '' ? path : '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getPath());

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getPath());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (to: string) => {
    // Handle anchor links on same page
    if (to.startsWith('#') && !to.startsWith('#/')) {
      const el = document.querySelector(to);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Set hash route for maximum compatibility across all environments
    const cleanRoute = to.startsWith('/') ? to : `/${to}`;
    window.location.hash = `#${cleanRoute}`;
    setCurrentPath(cleanRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};
