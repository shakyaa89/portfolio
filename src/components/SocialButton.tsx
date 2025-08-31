import { Github, Linkedin, Mail } from "lucide-react";
function SocialButtons() {
  return (
    <div className="group relative lg:min-w-xl">
      <div className="text-center px-20 py-5 group-hover:opacity-0 lg:opacity-100 opacity-0 transition-opacity duration-300">
        <h1 className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          My Socials
        </h1>
      </div>
      <div className="absolute inset-0 flex items-center justify-evenly lg:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in">
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
    </div>
  );
}
export default SocialButtons;
