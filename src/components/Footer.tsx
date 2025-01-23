import React from "react";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 w-full border-t border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <div className="flex space-x-4 flex-col md:flex-row items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            <span>Copyright © 2022 LOHUM</span>. All Rights Reserved.
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://twitter.com/lohum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/static/X_logo.jpg" alt="Twitter" className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/lohum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/static/linkedin.png"
                alt="Linkedin"
                className="w-6 h-6"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
