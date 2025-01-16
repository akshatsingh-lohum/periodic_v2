import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  interface MenuItem {
    title: string;
    href: string;
    submenu?: SubMenuItem[];
  }

  interface SubMenuItem {
    title: string;
    href: string;
  }

  const menuItems = [
    { title: "Contact: 9090909090", href: "#" },
    { title: "person@lohum.com", href: "#" },
    { title: "Contact Us", href: "#" },
  ];

  return (
    <footer className="w-full shadow-md fixed bottom-0 bg-black mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item: MenuItem, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="text-gray-700 hover:text-blue-600 py-2 flex items-center">
                      {item.title}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href || "#"} className="text-white py-2">
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
