import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MobileNotice from '../../pages/MobileNote/MobileNote';

const PageLayout = ({ children, isPhotographyPage = false }) => {
  return (
    <>
      {/* Mobile Notice - only shows on screens smaller than 1024px */}
      <div className="lg:hidden block">
        <MobileNotice />
      </div>

      {/* Main Content - only shows on screens larger than 1024px */}
      <div className="hidden lg:block h-screen overflow-auto">
        <Header isPhotographyPage={isPhotographyPage} />
        <main>
          {children}
        </main>
        {!isPhotographyPage && <Footer />}
      </div>
    </>
  );
};

export default PageLayout;
