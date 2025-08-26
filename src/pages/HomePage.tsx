import React, { useState } from "react";
import MyPhoto from "../assets/MyPhoto.jpg";
import MyCV from "../assets/Shashwat_Shakya_CV.pdf";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Zap,
  Users,
  Download,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ContactFrom from "../components/ContactForm";

interface Project {
  id: number;
  title: string;
  projectType?: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
}

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

const navLinks = ["home", "about", "projects", "contact"];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showForm, setShowForm] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "MediConnect",
      projectType: "Academic Project",
      description:
        "A web-based application designed for hospital appointments and staff management with role-based access.",
      tech: ["Java", "MySQL", "JakartaEE", "Servlets"],
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
      github: "https://github.com/shakyaa89/Medi-Connect",
    },
    {
      id: 2,
      title: "Land Rental System",
      projectType: "Academic Project",
      description:
        "CLI-based application for users to buy and sell land, incorporating file storage and user interaction.",
      tech: ["Python", "Pandas", "Matplotlib", "NumPy"],
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      github: "https://github.com/shakyaa89/Land-Rental-System",
    },
    {
      id: 3,
      title: "Blog Application",
      projectType: "Personal Project",
      description:
        "Developed a full-stack blog website using MERN stack with user authentication, CRUD operations, responsive UI, and RESTful API integration.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      github: "https://github.com/shakyaa89/react-blog",
    },
    {
      id: 4,
      title: "Weather App",
      projectType: "Personal Project",
      description:
        "Developed a weather app that shows the weather of a city entered by the user. OpenWeather API is used to fetch the weather data.",
      tech: ["React.js", "OpenWeather API"],
      image:
        "https://images.unsplash.com/photo-1534068731687-d70176c2e7d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/shakyaa89/react-weather-app",
      link: "https://shashwat-weather-app.netlify.app/",
    },
    {
      id: 5,
      title: "Quiz App",
      projectType: "Personal Project",
      description:
        "Developed a Quiz App to create and manage question sets with multiple questions and choices, featuring dynamic forms, correct answer selection, JWT-based authentication, and responsive Tailwind CSS UI.",
      tech: ["React.js", "MongoDB", "Express.js", "Node.js", "TailwindCSS"],
      image:
        "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/shakyaa89/Fullstack-Webapp",
    },
    {
      id: 6,
      title: "Movie Details App",
      projectType: "Personal Project",
      description:
        "A responsive movie details app using TMDB API to browse and view movies with posters, overviews, and release dates.",
      tech: ["React.js", "Express.js", "Node.js", "TailwindCSS"],
      image:
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/shakyaa89/react-movie-details",
    },
  ];

  const skills: Skill[] = [
    { name: "Java", level: 80, icon: <Code className="w-6 h-6" /> },
    { name: "Python", level: 70, icon: <Code className="w-6 h-6" /> },
    {
      name: "Web Development",
      level: 80,
      icon: <Palette className="w-6 h-6" />,
    },
    {
      name: "Database Management",
      level: 70,
      icon: <Zap className="w-6 h-6" />,
    },
    { name: "Problem Solving", level: 90, icon: <Users className="w-6 h-6" /> },
  ];

  const techCategories = [
    {
      title: "Programming",
      items: ["Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS"],
      badge: true,
    },
    {
      title: "Frameworks",
      items: ["React.js", "Node.js", "Express.js", "JakartaEE", "TailwindCSS"],
      badge: true,
    },
    {
      title: "Databases",
      items: ["MySQL", "MongoDB", "Oracle"],
      badge: true,
    },
    {
      title: "Tools",
      items: ["Git", "VS Code", "Eclipse", "Figma", "GitHub", "Postman"],
      badge: true,
    },
    {
      title: "Currently Exploring",
      items: ["TypeScript", "C#"],
      badge: true,
    },
    {
      title: "Soft Skills",
      items: ["Problem Solving", "Teamwork", "Communication"],
      badge: true,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-gray-800/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Shashwat Shakya
          </div>

          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg border-b border-gray-800/50">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize transition-colors duration-300 hover:text-blue-400 text-gray-300"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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

          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Passionate about creating innovative solutions through code.
            Currently pursuing my degree in Computer Science while building
            practical experience in full-stack development.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              View My Work
            </button>
            <a
              className="px-8 py-4 border border-gray-600 rounded-full font-semibold transition-all duration-300 hover:bg-gray-800 flex items-center gap-2"
              href={MyCV}
              download="Shashwat_Shakya_CV"
            >
              <Download className="w-6 h-6" />
              Download CV
            </a>
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

      {/* About Section */}
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
                <a
                  href="https://www.github.com/shakyaa89"
                  className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300 border border-gray-700"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashwat-shakya-210a66301"
                  className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300 border border-gray-700"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:shashwatshakya89@gmail.com"
                  className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300 border border-gray-700"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-blue-400">{skill.icon}</div>
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
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="relative z-10 py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUpVariant}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="group bg-gray-900/60 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.15 }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span
                    key={project.projectType}
                    className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300 border border-blue-500/30"
                  >
                    {project.projectType}
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed mt-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300 border border-blue-500/30 select-none hover:cursor-default hover:bg-blue-500 hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {project.link && (
                      <a
                        href={project.link}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600/80 rounded-lg text-sm hover:bg-blue-600 transition-colors duration-300"
                        target="_blank"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg text-sm hover:bg-gray-800 transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" />
                        GitHub Link
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
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
            I'm currently open for new opportunities and collaborations. Feel
            free to reach out to me through any of the following platforms:
          </p>

          <div className="flex justify-center gap-8 mb-8">
            <a
              href="mailto:shashwatshakya89@gmail.com"
              className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-10 h-10 mx-auto" />
              <span className="block mt-2 text-sm">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shashwat-shakya-210a66301"
              className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-10 h-10 mx-auto" />
              <span className="block mt-2 text-sm">LinkedIn</span>
            </a>
            <a
              href="https://github.com/shakyaa89"
              className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-10 h-10 mx-auto" />
              <span className="block mt-2 text-sm">GitHub</span>
            </a>
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
                  className="w-full flex  justify-center items-center"
                >
                  <ContactFrom />
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
    </div>
  );
};

export default HomePage;
