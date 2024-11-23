import React from 'react';
import styles from 'Footer.module.css';


const Footer = () => {
  return (
    <footer className="bg-[#4A4139] text-white p-8">
      <div className="flex justify-between items-start">
        <div className="w-1/6">
          Left Content
        </div>

        {/* Right Column */}
        <div className="w-1/6">
          <div>
            <div>HOME 01</div>
            <div>SOFTWARE DEVELOPMENT 02</div>
            <div>PHOTOGRAPHY 03</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;