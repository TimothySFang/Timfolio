import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import githubLogo from "../../../assets/logos/github.png";
import linkedinLogo from "../../../assets/logos/linkedin.png";
import instagramLogo from "../../../assets/logos/instagram.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#4A4139] text-white overflow-hidden">
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
          <div className="w-full md:w-1/6">
            <div className="flex justify-center md:justify-start gap-4 items-center">
              <a
                href="https://github.com/Timothy-S-Fang"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Visit my GitHub profile"
                tabIndex={0}
              >
                <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/timothy-s-fang/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Visit my LinkedIn profile"
                tabIndex={0}
              >
                <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/tiimothyfang/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Visit my Instagram profile"
                tabIndex={0}
              >
                <img src={instagramLogo} alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/5 text-center md:text-left">
            <Link
              to="/"
              className="font-['Space_Grotesk'] text-xs tracking-widest font-medium hover:text-gray-300 transition-colors block pb-3"
            >
              HOME 01
            </Link>
            <Link
              to="/software"
              className="font-['Space_Grotesk'] text-xs tracking-widest font-medium hover:text-gray-300 transition-colors block pb-3"
            >
              SOFTWARE 02
            </Link>
            <Link
              to="/photography"
              className="font-['Space_Grotesk'] text-xs font-medium tracking-widest hover:text-gray-300 transition-colors block pb-3"
            >
              PHOTOGRAPHY 03
            </Link>
          </div>
        </div>

        <div className="font-['Space_Grotesk'] font-medium text-xs tracking-widest mt-8 md:mt-0">
          PHOTOS TAKEN BY ME
        </div>
        <div className="font-['Space_Grotesk'] font-medium text-xs tracking-widest pb-10">
          DESIGNED AND DEVELOPED BY ME
        </div>
        <a
          href="mailto:timothyfang9@gmail.com"
          className="font-['Space_Grotesk'] font-medium text-xs tracking-widest underline"
        >
          TIMOTHYFANG9@GMAIL.COM
        </a>
      </div>
      <div className="flex justify-center">
        <span className="font-['Space_Grotesk'] bg-[#4A4139] text-[80px] md:text-[180px] font-bold tracking-widest leading-none translate-y-[20%]">
          TIMFOLIO
        </span>
      </div>
    </footer>
  );
};

export default Footer;
