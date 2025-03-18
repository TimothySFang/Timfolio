import React, { useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MobileNotice from '../../pages/MobileNote/MobileNote';

const PageLayout = ({ children, isPhotographyPage = false }) => {
  // Fix for iOS Safari viewport height issues
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);
    
    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  return (
    <div className="relative">
      <Header isPhotographyPage={isPhotographyPage} />
      <main>
        {children}
      </main>
      {!isPhotographyPage && <Footer />}
    </div>
  );
};

export default PageLayout;
