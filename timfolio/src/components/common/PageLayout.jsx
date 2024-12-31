import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const PageLayout = ({ children }) => {
  return (
    <div className="h-screen overflow-auto">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
