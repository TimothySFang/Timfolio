import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={`bg-[#FDF7EC] ${styles.header}`}>
      <div style={{ textAlign: 'left' }}>
        <a className={styles.title} href="/">Timothy.</a>
      </div>
      <div className={styles.buttonContainer} style={{ textAlign: 'right' }}>
        <a className={styles.button} href="/photography">Photography</a>
        <a className={styles.button} href="/software">Software</a>
      </div>
    </nav>
  );
};

export default Header;
