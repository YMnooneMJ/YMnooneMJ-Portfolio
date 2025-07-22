import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection?: string; // Current active section for scroll highlight
}

// Navigation links with their paths and corresponding section IDs
const navlinks = [
  { path: "/", label: "Home", section: "hero" },
  { path: "/about", label: "About", section: "about" },
  { path: "/skills", label: "Skills", section: "skills" },
  { path: "/projects", label: "Projects", section: "projects" },
  { path: "/contact", label: "Contact", section: "contact" },
];

const Navbar = ({ darkMode, toggleDarkMode, activeSection }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Determine active link for styling
  const isActive = (path: string, section: string) =>
    location.pathname === path || (activeSection && activeSection === section);

  // Scrolls to hero section (used for Home button)
  const scrollToHero = () => {
    const heroElem = document.getElementById("hero");
    if (heroElem) {
      const navbarHeight = 120;
      const elementPosition =
        heroElem.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 lg:top-4 z-50 flex justify-center">
      <div className="relative w-full lg:w-[100vw] lg:max-w-6xl mx-auto">
        {/* Mobile/Tablet: Hire Me & Menu Button */}
        <div className="flex lg:hidden items-center absolute right-2 top-1/2 -translate-y-1/2 z-20 gap-2">
          <Link
            to={{ pathname: "/", search: "?contact=true" }}
            className="flex items-center gap-2 bg-gray-900 hover:bg-blue-600 text-white font-bold px-3 py-2 rounded-2xl shadow transition-all"
          >
            Hire Me <FiExternalLink className="w-5 h-5 select-none" />
          </Link>
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {menuOpen ? (
              <IoCloseSharp className="w-7 h-7" />
            ) : (
              <IoMenu className="w-7 h-7" />
            )}
          </motion.button>
        </div>

        {/* Desktop Nav Container */}
        <nav className="w-full lg:w-[96vw] lg:max-w-6xl mx-auto lg:rounded-full bg-white/80 dark:bg-gray-900/80 shadow-2xl backdrop-blur-md backdrop-opacity-90 border border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4 px-4 lg:px-6 py-2 lg:py-3">
          {/* Logo */}
          <Link
            to={{ pathname: "/" }}
            className="flex items-center justify-center py-3 rounded-full bg-white/70 dark:bg-gray-900/70 border border-gray-900 dark:border-gray-900 shadow-lg backdrop-blur-xl backdrop-opacity-90 hover:shadow-xl transition-all duration-300 mr-2"
            onClick={scrollToHero}
            style={{ minWidth: 120 }}
          >
            <h3 className="bg-clip-text bg-gradient-to-r from-gray-950 via-black/90 to-white/90 text-transparent font-extrabold tracking-wide select-none drop-shadow-sm">
              ᵞᴹNøŌneᴹᴶ
            </h3>
          </Link>

          {/* Nav Links - visible only on large screens */}
          <div className="flex-1 flex justify-center">
            <div className="hidden lg:flex gap-8">
              {navlinks.map(({ path, label, section }) =>
                label === "Home" && location.pathname === "/" ? (
                  <button
                    key={path}
                    onClick={scrollToHero}
                    className={`text-2xl font-bold transition-colors px-2 py-1 rounded-lg ${
                      isActive(path, section)
                        ? "text-blue-600 dark:text-blue-400 underline underline-offset-8"
                        : "text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                    }`}
                  >
                    {label}
                  </button>
                ) : (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-bold transition-colors px-2 py-1 rounded-lg ${
                      isActive(path, section)
                        ? "text-blue-600 dark:text-blue-400 underline underline-offset-8"
                        : "text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                    }`}
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Desktop "Hire Me" Button */}
          <Link
            to={{ pathname: "/", search: "?contact=true" }}
            className="hidden lg:flex items-center gap-2 bg-gray-900 hover:bg-blue-600 text-white font-bold text-sm lg:text-base px-4 lg:px-5 py-2 rounded-xl shadow transition-all"
          >
            Hire Me <FiExternalLink className="w-5 h-5 select-none" />
          </Link>

          {/* Theme Toggle */}
          <div className="hidden lg:flex items-center ml-4">
            <ThemeToggle darkmode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </nav>
      </div>

      {/* Mobile/Tablet Nav Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[90vw] max-w-xl z-50 rounded-3xl bg-white/90 dark:bg-gray-900/90 shadow-2xl px-6 py-6 flex flex-col items-center gap-6 text-2xl font-bold"
          >
            {navlinks.map(({ path, label, section }) =>
              label === "Home" && location.pathname === "/" ? (
                <button
                  key={path}
                  onClick={() => {
                    setMenuOpen(false);
                    setTimeout(() => scrollToHero(), 100);
                  }}
                  className={`transition-colors px-2 py-1 rounded-lg ${
                    isActive(path, section)
                      ? "text-blue-600 dark:text-blue-400 underline underline-offset-8"
                      : "text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                  }`}
                >
                  {label}
                </button>
              ) : (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-colors px-2 py-1 rounded-lg ${
                    isActive(path, section)
                      ? "text-blue-600 dark:text-blue-400 underline underline-offset-8"
                      : "text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                  }`}
                >
                  {label}
                </Link>
              )
            )}

            {/* Theme toggle inside mobile nav */}
            <ThemeToggle darkmode={darkMode} toggleDarkMode={toggleDarkMode} />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
