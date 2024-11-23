import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
