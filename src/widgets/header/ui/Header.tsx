import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/" className="logo group">
        <span className="logo-text">News for everyone</span>
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

    </header>
  );
};

export default Header;
