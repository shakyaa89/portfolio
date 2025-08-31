import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";
import SocialButtons from "./SocialButton";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <motion.section
      id="contact"
      className="relative z-10 pt-20 pb-10 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUpVariant}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <p className="mb-6 text-lg text-gray-300">
          I'm currently open for new opportunities and collaborations. Feel free
          to reach out to me through any of the following platforms:
        </p>

        <div className="flex justify-center gap-8 mb-6">
          <SocialButtons />
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 mb-10 cursor-pointer"
          >
            {showForm ? "Close Form" : "Send a message"}
          </button>
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="w-full flex justify-center items-center"
              >
                <ContactForm />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Shashwat Shakya. All rights
          reserved.
        </p>
      </div>
    </motion.section>
  );
};

export default ContactSection;
