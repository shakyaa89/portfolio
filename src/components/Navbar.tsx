import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedHamburgerButton } from "./HamburgerButton";

const navLinks = ["home", "about", "projects", "contact"];

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const menuVariants = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const linkVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-gray-800/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Shashwat Shakya
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize transition-colors duration-300 hover:text-blue-400 ${
                activeSection === section ? "text-blue-400" : "text-gray-300"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatedHamburgerButton active={isMenuOpen} />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg border-b border-gray-800/50"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((section) => (
                <motion.button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left capitalize transition-colors duration-300 hover:text-blue-400 text-gray-300"
                  variants={linkVariants}
                >
                  {section}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
