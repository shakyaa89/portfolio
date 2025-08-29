import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MyPhoto from "../assets/MyPhoto.jpg";
import ScrambleButton from "./ScrambleButton";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <motion.section
      id="home"
      className="relative z-10 min-h-screen flex items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="w-40 h-40 mt-20 md:w-64 md:h-64 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 p-1">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <img
                src={MyPhoto}
                alt="My Photo"
                className="rounded-full"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Shashwat Shakya
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Computer Science Student & Aspiring Developer
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <button onClick={() => scrollToSection("projects")}>
            <ScrambleButton />
          </button>
        </motion.div>

        <motion.div
          className="mt-16 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.4,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ChevronDown className="w-8 h-8 mx-auto text-gray-500" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
