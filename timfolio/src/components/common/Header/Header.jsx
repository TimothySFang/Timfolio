import React, { useState } from 'react';
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';

const Header = ({ isPhotographyPage = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`${styles.header} ${
      isPhotographyPage 
        ? 'bg-[#001822]' 
        : 'bg-[#FDF7EC]'
    } sticky top-0 z-50 px-4 md:px-8`}>
      <div className="flex justify-between items-center w-full">
        {/* Hamburger Menu (Mobile Only) */}
        <button
          className={`md:hidden text-xl z-50 absolute left-8 ${
            isPhotographyPage ? 'text-white' : 'text-[#4A4139]'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Title - Centered on mobile when menu closed */}
        <Link 
          className={`font-['Cormorant_Garamond'] text-xl ${
            isPhotographyPage ? 'text-white' : 'text-[#4A4139]'
          } mx-auto md:mx-0`} 
          to="/"
        >
          Timothy.
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8">
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
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full ${
          isPhotographyPage
            ? 'bg-black/20 backdrop-blur-sm text-white'
            : 'bg-[#FDF7EC] text-[#4A4139]'
        } shadow-lg py-4 pl-4`}>
          <Link 
            className={`block py-2 hover:bg-gray-100 pl-4 text-left font-['Cormorant_Garamond'] ${
              isPhotographyPage ? 'text-white/90' : 'text-[#4A4139]'
            }`}
            to="/photography"
            onClick={() => setIsMenuOpen(false)}
          >
            Photography
          </Link>
          <Link 
            className={`block py-2 hover:bg-gray-100 pl-4 text-left font-['Cormorant_Garamond'] ${
              isPhotographyPage ? 'text-white/90' : 'text-[#4A4139]'
            }`}
            to="/software"
            onClick={() => setIsMenuOpen(false)}
          >
            Software
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
