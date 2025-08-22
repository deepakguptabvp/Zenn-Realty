import { MenuIcon, XIcon } from "lucide-react";
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/projects", label: "Projects" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen((open) => !open);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="shadow-md sticky top-0 z-10 md:h-20 lg:h-18 p-3 h-16 bg-white">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        aria-label="Main Navigation"
      >
        <div className="flex justify-between items-center my-auto">
          {/* Company Logo  */}
          <Link
            to="/"
            className="flex shrink-0 text-left md:ml-10"
            tabIndex={0}
            aria-label="Zenn Realty Home"
          >
            <span className="text-2xl bg-gradient-to-r bg-clip-text text-transparent cursor-pointer font-bold from-amber-950 via-amber-500 to-amber-950">
              Zenn Realty
            </span>
          </Link>

          {/* Toggle Button for Mobile */}
          <div className="md:hidden ">
            <button
              title="Explore"
              onClick={toggleMobileMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="text-gray-700 hover:bg-gray-200 p-2 -mr-6 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Header links */}
          <div
            id="mobile-menu"
            className={`absolute top-16 left-0 w-full bg-white md:static md:block md:w-auto ${
              isMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 p-4 md:p-0 text-md font-medium">
              {(isMenuOpen || window.innerWidth >= 768) &&
                navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={isMenuOpen ? closeMenu : undefined}
                    tabIndex={0}
                  >
                    {link.label}
                  </Link>
                ))}
              {(isMenuOpen || window.innerWidth >= 768) && (
                <Link
                  to="tel:+1234567890"
                  className="border p-3 text-center justify-center rounded-xl md:px-4 md:py-2"
                  tabIndex={0}
                  onClick={isMenuOpen ? closeMenu : undefined}
                  aria-label="Call Now"
                >
                  Call Now
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
