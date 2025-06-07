import React from "react";
import { Link } from "react-router-dom";
import { Burger } from "@/shared/ui";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/" className="logo group">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="transition-transform duration-300 group-hover:rotate-12"
        >
          <path
            d="M16 0C7.163 0 0 7.163 0 16C0 24.837 7.163 32 16 32C24.837 32 32 24.837 32 16C32 7.163 24.837 0 16 0Z"
            fill="url(#logoGradient)"
          />
          <path
            d="M22 16C22 19.314 19.314 22 16 22C12.686 22 10 19.314 10 16C10 12.686 12.686 10 16 10C19.314 10 22 12.686 22 16Z"
            fill="white"
          />
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8A00" />
              <stop offset="50%" stopColor="#E52E71" />
              <stop offset="100%" stopColor="#5F2C82" />
            </linearGradient>
          </defs>
        </svg>
        <span className="logo-text">NuslyAR</span>
      </Link>

      <Link
        to="/posts"
        className="general-info group hover:bg-opacity-10 hover:bg-white transition-all duration-300 px-4 py-2 rounded-lg flex flex-col items-center"
      >
        <svg
          viewBox="0 0 26 26"
          className="icon w-6 h-6 transition-transform group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M6.75,18.5h-5C1.3359375,18.5,1,18.8359375,1,19.25v5C1,24.6640625,1.3359375,25,1.75,25h5c0.4140625,0,0.75-0.3359375,0.75-0.75v-5C7.5,18.8359375,7.1640625,18.5,6.75,18.5z M6,23.5H2.5V20H6V23.5z" />
          <path d="M24.25,18.5h-5c-0.4140625,0-0.75,0.3359375-0.75,0.75v5c0,0.4140625,0.3359375,0.75,0.75,0.75h5c0.4140625,0,0.75-0.3359375,0.75-0.75v-5C25,18.8359375,24.6640625,18.5,24.25,18.5z M23.5,23.5H20V20h3.5V23.5z" />
          <path d="M15.5,18.5h-5c-0.4140625,0-0.75,0.3359375-0.75,0.75v5c0,0.4140625,0.3359375,0.75,0.75,0.75h5c0.4140625,0,0.75-0.3359375,0.75-0.75v-5C16.25,18.8359375,15.9140625,18.5,15.5,18.5z M14.75,23.5h-3.5V20h3.5V23.5z" />
          <path d="M6.75,9.75h-5C1.3359375,9.75,1,10.0859375,1,10.5v5c0,0.4140625,0.3359375,0.75,0.75,0.75h5c0.4140625,0,0.75-0.3359375,0.75-0.75v-5C7.5,10.0859375,7.1640625,9.75,6.75,9.75z M6,14.75H2.5v-3.5H6V14.75z" />
          <path d="M24.25,9.75h-5c-0.4140625,0-0.75,0.3359375-0.75,0.75v5c0,0.4140625,0.3359375,0.75,0.75,0.75h5c0.4140625,0,0.75-0.3359375,0.75-0.75v-5C25,10.0859375,24.6640625,9.75,24.25,9.75z M23.5,14.75H20v-3.5h3.5V14.75z" />
          <path d="M15.5,9.75h-5c-0.4140625,0-0.75,0.3359375-0.75,0.75v5c0,0.4140625,0.3359375,0.75,0.75,0.75h5c0.4140625,0,0.75-0.3359375,0.75-0.75v-5C16.25,10.0859375,15.9140625,9.75,15.5,9.75z M14.75,14.75h-3.5v-3.5h3.5V14.75z" />
        </svg>
        <p className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-600 transition-all duration-300">
          Посты
        </p>
      </Link>

      <Burger className="burger hover:scale-110 transition-transform" />
    </header>
  );
};

export default Header;
