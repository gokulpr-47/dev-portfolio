import { Experience, CarouselOptions } from "./types";

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Capgemini",
    location: "Bengaluru, Karnataka, India",
    duration: "Aug 2024 - Present",
    description:
      "Working on enterprise-grade full-stack applications with a focus on scalability, backend services, and cloud deployments.",
    achievements: [
      "Developed and maintained Spring Boot REST APIs for enterprise applications",
      "Built responsive frontend features using React and modern JavaScript",
      "Containerized applications using Docker and deployed services on AWS EC2",
      "Improved backend performance and code maintainability through refactoring and clean architecture practices",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "Node.js",
      "TypeScript",
      "Docker",
      "AWS",
      "MongoDB",
      "PostgreSQL",
    ],
    link: "https://www.capgemini.com",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Matcon Group Companies",
    location: "Bengaluru, Karnataka, India",
    duration: "Apr 2024 - Aug 2024",
    description:
      "Architected and developed a cloud-native invoice processing platform from scratch.",
    achievements: [
      "Designed and built a cloud-native invoice processing platform using React, Node.js, and MongoDB",
      "Implemented modular REST APIs with JWT authentication for secure access",
      "Deployed containerized services on AWS EC2 and S3 using Docker",
      "Improved UI responsiveness and load time by 45% through React optimization",
      "Delivered a full MVP under tight deadlines in collaboration with stakeholders",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Docker", "AWS EC2", "JWT"],
    link: "https://matcon.in",
  },
];

// Carousel options for experience section
export const experienceCarouselOptions: CarouselOptions = {
  loop: true,
  align: "start",
  containScroll: false,
  dragFree: false,
  skipSnaps: false,
  duration: 20,
};

// Experience section configuration
export const experienceConfig = {
  title: "Work Experience",
  subtitle: "My professional journey in software development",
  timeline: {
    lineColor: "from-blue-400/50 via-purple-400/50 to-transparent",
    dotColor: "from-blue-400 to-purple-400",
    dotBorder: "border-[#0a0a1a]",
    dotShadow: "shadow-blue-400/25",
  },
  card: {
    background: "bg-gradient-to-br from-gray-800/50 to-gray-900/50",
    border: "border border-blue-500/20",
    hover: "hover:border-blue-400/40",
  },
};

// Achievement categories
export const achievementCategories = {
  leadership: {
    icon: "👥",
    color: "text-blue-300",
    title: "Leadership",
  },
  technical: {
    icon: "⚡",
    color: "text-green-300",
    title: "Technical",
  },
  performance: {
    icon: "📈",
    color: "text-purple-300",
    title: "Performance",
  },
  innovation: {
    icon: "💡",
    color: "text-yellow-300",
    title: "Innovation",
  },
};
