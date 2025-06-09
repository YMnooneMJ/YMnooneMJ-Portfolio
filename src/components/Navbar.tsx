import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection?: string; // <-- Accept activeSection as prop
}

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

  const isActive = (path: string, section: string) =>
    location.pathname === path || (activeSection && activeSection === section);

  return (
    <header className="sticky top-4 z-50 flex justify-center">
      <nav className="w-[96vw] max-w-6xl mx-auto rounded-full bg-white/80 dark:bg-gray-900/80 shadow-2xl backdrop-blur-lg border border-gray-200 dark:border-gray-800 flex items-center px-6 py-2 md:py-3 gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 mr-2"
        >
          <FaGlobe className="w-7 h-7 text-gray-700 dark:text-gray-200" />
        </Link>

        {/* Nav Links */}
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex gap-8">
            {navlinks.map(({ path, label, section }) => (
              <Link
                key={path}
                to={path}
                className={`text-2xl font-bold transition-colors px-2 py-1 rounded-lg ${
                  isActive(path, section)
                    ? "text-blue-600 dark:text-blue-400 underline underline-offset-8"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Hire Me Button */}
        <a
          href="mailto:demraldo@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-5 py-2 rounded-2xl shadow transition-all"
        >
          Hire Me <FiExternalLink className="w-5 h-5" />
        </a>

        {/* Theme Toggle */}
        <div className="hidden md:flex items-center ml-4">
          <ThemeToggle darkmode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {menuOpen ? (
              <IoCloseSharp className="w-7 h-7" />
            ) : (
              <IoMenu className="w-7 h-7" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[90vw] max-w-xl z-50 rounded-3xl bg-white/90 dark:bg-gray-900/90 shadow-2xl px-6 py-6 flex flex-col items-center gap-6 text-2xl font-bold"
          >
            {navlinks.map(({ path, label, section }) => (
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
            ))}
            <a
              href="mailto:demraldo@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-5 py-2 rounded-2xl shadow transition-all"
            >
              Hire Me <FiExternalLink className="w-5 h-5" />
            </a>
            <ThemeToggle darkmode={darkMode} toggleDarkMode={toggleDarkMode} />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
