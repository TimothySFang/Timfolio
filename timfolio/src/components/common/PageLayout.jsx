import React, { useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MobileNotice from '../../pages/MobileNote/MobileNote';

const PageLayout = ({ children, isPhotographyPage = false }) => {
  // Fix for iOS Safari viewport height issues
  useEffect(() => {
    const setVh = () => {
      // Set a CSS variable for viewport height that works consistently on iOS
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set initially and on resize
    setVh();
    window.addEventListener('resize', setVh);
    
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isPhotographyPage={isPhotographyPage} />
      <main className="flex-grow">
        {children}
      </main>
      {!isPhotographyPage && <Footer />}
    </div>
  );
};

export default PageLayout;
