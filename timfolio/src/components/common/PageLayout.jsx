import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MobileNotice from '../../pages/MobileNote/MobileNote';

const PageLayout = ({ children, isPhotographyPage = false }) => {
  return (
    <div className="h-screen overflow-auto">
      <Header isPhotographyPage={isPhotographyPage} />
      <main>
        {children}
      </main>
      {!isPhotographyPage && <Footer />}
    </div>
    );
    
};

export default PageLayout;
