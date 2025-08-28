import { Code, Palette, Users, Zap, type LucideIcon } from "lucide-react";

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
  icon: LucideIcon;
}

export const projects: Project[] = [
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
    link: "https://shashwat-movie-app.netlify.app/",
  },
];

export const skills: Skill[] = [
  { name: "Java", level: 80, icon: Code },
  { name: "Python", level: 70, icon: Code },
  {
    name: "Web Development",
    level: 80,
    icon: Palette,
  },
  {
    name: "Database Management",
    level: 70,
    icon: Zap,
  },
  { name: "Problem Solving", level: 90, icon: Users },
];

export const techCategories = [
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
