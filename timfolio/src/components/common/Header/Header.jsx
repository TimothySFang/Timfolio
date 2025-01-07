import React from 'react';
import styles from "./Header.module.css";

const Header = ({ isPhotographyPage = false }) => {
  return (
    <nav className={`${styles.header} ${isPhotographyPage ? 'bg-black/20 backdrop-blur-sm' : 'bg-[#FDF7EC]'}`}>
      <div style={{ textAlign: 'left' }}>
        <a 
          className={`${styles.title} ${isPhotographyPage ? 'text-white' : 'text-black'}`} 
          href="/"
        >
          Timothy.
        </a>
      </div>
      <div className={styles.buttonContainer} style={{ textAlign: 'right' }}>
        <a 
          className={`${styles.button} ${isPhotographyPage ? 'text-white' : 'text-black'}`} 
          href="/photography"
        >
          Photography
        </a>
        <a 
          className={`${styles.button} ${isPhotographyPage ? 'text-white' : 'text-black'}`} 
          href="/software"
        >
          Software
        </a>
      </div>
    </nav>
  );
};

export default Header;
