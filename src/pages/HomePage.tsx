import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
