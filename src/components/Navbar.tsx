import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { AnimatedHamburgerButton } from "./HamburgerButton";

const menuVariants: Variants = {
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

const linkVariants: Variants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const navVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navLinks = ["home", "about", "projects", "contact"];

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-gray-800/50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Animated logo */}
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent select-none"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          Shashwat Shakya
        </motion.div>

        {/* Desktop nav links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((section, i) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize transition-colors duration-300 hover:text-blue-400 select-none cursor-pointer ${
                activeSection === section ? "text-blue-400" : "text-gray-300"
              }`}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              {section}
            </motion.button>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatedHamburgerButton active={isMenuOpen} />
        </button>
      </div>

      {/* Mobile menu */}
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
    </motion.nav>
  );
};

export default Navbar;
