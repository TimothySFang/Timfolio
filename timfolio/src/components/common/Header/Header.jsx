import React from 'react';
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';

const Header = ({ isPhotographyPage = false }) => {
  return (
    <nav className={`${styles.header} ${isPhotographyPage ? 'bg-black/20 backdrop-blur-sm' : 'bg-[#FDF7EC]'}`}>
      <div style={{ textAlign: 'left' }}>
        <Link 
          className={`${styles.title} ${isPhotographyPage ? 'text-white' : 'text-black'}`} 
          to="/"
        >
          Timothy.
        </Link>
      </div>
      <div className={styles.buttonContainer} style={{ textAlign: 'right' }}>
        <Link 
          className={`${styles.button} ${isPhotographyPage ? 'text-white' : 'text-black'}`} 
          to="/photography"
        >
          Photography
        </Link>
        <Link 
          className={`${styles.button} ${isPhotographyPage ? 'text-white' : 'text-black'}`} 
          to="/software"
        >
          Software
        </Link>
      </div>
    </nav>
  );
};

export default Header;
