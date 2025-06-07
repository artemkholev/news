import React from "react";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  const companyName: string = "NuslyAR";

  return (
    <footer>
      <div className="footer">
        <div className="footer-info">
          <div className="footer-links space-y-2">
            <h3 className="text-lg font-semibold">Links</h3>
            <a
              href="/posts"
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-600 transition-all duration-300"
            >
              Posts
            </a>
            <a
              href="/about"
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-600 transition-all duration-300"
            >
              About
            </a>
            <a
              href="/contact"
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-600 transition-all duration-300"
            >
              Contact
            </a>
          </div>

          <div className="footer__contacts space-y-2">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p>Email: info@nuslyar.com</p>
            <p>Phone: +7 (999) 99-99-99</p>
            <div className="social-links flex gap-4 mt-4">
              <a href="#" className="hover:scale-110 transition-transform">
                VK
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                TG
              </a>
            </div>
          </div>
        </div>

        <p className="footer__name-company mt-8 text-sm opacity-80 hover:opacity-100 transition-opacity">
          © {companyName}, {currentYear} | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
