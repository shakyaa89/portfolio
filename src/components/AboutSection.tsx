import React from "react";
import { motion } from "framer-motion";
import { techCategories, skills } from "../data/data.ts";

interface AboutSectionProps {}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <motion.section
      id="about"
      className="relative z-10 py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUpVariant}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a dedicated Computer Science student with a passion for
              developing innovative software solutions. Currently building my
              expertise in full-stack development while maintaining strong
              academic performance.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My technical foundation includes Java, Python, and modern web
              technologies. I enjoy working on projects that challenge me to
              learn new frameworks and solve complex problems through clean,
              efficient code.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {techCategories.map((category) => (
                <div
                  key={category.title}
                  className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                >
                  <h4 className="font-semibold text-blue-400 mb-2">
                    {category.title}
                  </h4>
                  {category.badge ? (
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300 border border-blue-500/30 select-none hover:cursor-default hover:bg-blue-500 hover:text-white transition-colors duration-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400">
                      {category.items.join(", ")}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {/* Add social icons if needed */}
            </div>
          </div>

          <div className="space-y-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-blue-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-semibold">{skill.name}</span>
                    <span className="ml-auto text-blue-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
