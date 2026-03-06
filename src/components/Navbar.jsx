import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenuAlt3, HiX, HiSun, HiMoon } from "react-icons/hi";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 w-full bg-black/90 dark:bg-black/90 light:bg-white/90 backdrop-blur-md shadow-2xl z-50 border-b border-yellow-600/30 dark:border-yellow-600/30 light:border-gray-300/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center cursor-pointer hover:scale-105 transition-transform"
          >
            <Logo />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              Saqib Shehzad
            </span>
          </ScrollLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-yellow-400 transition-colors cursor-pointer font-medium uppercase text-sm tracking-wider border-b-2 border-transparent hover:border-yellow-400 pb-1"
              >
                {item.label}
              </ScrollLink>
            ))}
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              title={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
              aria-label={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
              className="p-3 rounded-lg bg-amber-400 dark:bg-amber-400 light:bg-gray-800 text-black dark:text-black light:text-amber-400 hover:bg-amber-500 dark:hover:bg-amber-500 light:hover:bg-gray-700 transition-all duration-200 flex items-center justify-center shadow-md"
            >
              {theme === "dark" ? (
                <HiSun className="w-5 h-5" />
              ) : (
                <HiMoon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              title={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
              aria-label={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
              className="p-3 rounded-lg bg-amber-400 dark:bg-amber-400 light:bg-gray-800 text-black dark:text-black light:text-amber-400 hover:bg-amber-500 dark:hover:bg-amber-500 light:hover:bg-gray-700 transition-all duration-200 flex items-center justify-center shadow-md"
            >
              {theme === "dark" ? (
                <HiSun className="w-5 h-5" />
              ) : (
                <HiMoon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center"
            >
              {isOpen ? (
                <HiX className="w-6 h-6 text-amber-400" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6 text-amber-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-yellow-600/30 dark:border-yellow-600/30 light:border-gray-300/30 pt-4">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                onClick={handleMenuItemClick}
                className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-yellow-400 transition-colors cursor-pointer font-medium uppercase text-sm tracking-wider"
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
}
