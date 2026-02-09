import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Cloud-Native Invoice Processing Platform",
    description:
      "A full-stack cloud-native platform for processing invoices with secure authentication, containerized deployment, and optimized frontend performance.",
    technologies: ["React", "Node.js", "MongoDB", "Docker", "AWS EC2", "JWT"],
    image: "/invoice-platform.png",
    githubUrl: "https://github.com/gokulpr-47/matcon-fullstack-app",
    liveUrl: "https://mat.matcon.in",
    category: "Full Stack",
    featured: true,
    achievements: [
      "Designed modular REST APIs with JWT authentication",
      "Deployed containerized services on AWS EC2 and S3",
      "Improved UI performance and load time by 45%",
      "Delivered full MVP under tight deadlines",
    ],
    learnings: [
      "Cloud-native architecture",
      "Docker containerization",
      "JWT authentication flows",
      "Frontend performance optimization",
    ],
    role: "Full Stack Developer",
    timeline: "5 months",
    complexity: "Advanced",
    theme: "cloud",
    accentColor: "#FF9900",
  },
  {
    id: 2,
    title: "LeetClash – LeetCode Motivation Telegram Bot",
    description:
      "A Telegram bot designed to help developers stay consistent with LeetCode practice through reminders, streak tracking, leaderboards, and personalized goals.",
    technologies: [
      "Node.js",
      "TypeScript",
      "Telegram Bot API",
      "MongoDB",
      "Cron Jobs",
    ],
    image: "/leetclash.png",
    githubUrl: "https://github.com/gokulpr-47/Leetclash-Telegram-Bot",
    liveUrl: "https://t.me/LeetClashBot",
    category: "Backend",
    featured: true,
    achievements: [
      "Built automated daily reminders and coding streak tracking system",
      "Implemented leaderboard system for friendly competitive coding",
      "Designed progress analytics including solved count and difficulty breakdown",
      "Added customizable weekly and monthly coding goals with notifications",
    ],
    learnings: [
      "Telegram Bot API and webhook integrations",
      "Cron-based scheduling and background jobs",
      "Designing gamification systems for user engagement",
      "Database schema design for streaks and user stats",
    ],
    role: "Backend Engineer",
    timeline: "2–3 weeks",
    complexity: "Intermediate",
    theme: "code",
    accentColor: "#0088CC",
  },
];

// Project categories
export const projectCategories = [
  { name: "All", value: "all" },
  { name: "Full Stack", value: "Full Stack" },
  { name: "Frontend", value: "Frontend" },
  { name: "Backend", value: "Backend" },
  { name: "AI/ML", value: "AI/ML" },
  { name: "Mobile", value: "Mobile" },
];

// Project complexity levels
export const complexityLevels = {
  beginner: {
    label: "Beginner",
    color: "text-green-400",
    icon: "🌱",
  },
  intermediate: {
    label: "Intermediate",
    color: "text-yellow-400",
    icon: "🚀",
  },
  advanced: {
    label: "Advanced",
    color: "text-purple-400",
    icon: "⚡",
  },
};

// Project themes
export const projectThemes = {
  cosmic: {
    name: "Cosmic",
    gradient: "from-purple-600 to-pink-600",
    accent: "#8B5CF6",
  },
  forest: {
    name: "Forest",
    gradient: "from-green-600 to-emerald-600",
    accent: "#10B981",
  },
  ocean: {
    name: "Ocean",
    gradient: "from-blue-600 to-cyan-600",
    accent: "#06B6D4",
  },
  neon: {
    name: "Neon",
    gradient: "from-pink-600 to-red-600",
    accent: "#EC4899",
  },
  sky: {
    name: "Sky",
    gradient: "from-blue-500 to-indigo-500",
    accent: "#3B82F6",
  },
};

// Project section configuration
export const projectConfig = {
  title: "Featured Projects",
  subtitle:
    "Explore my latest work showcasing modern web development, innovative solutions, and creative problem-solving.",
  filters: {
    all: "All Projects",
    featured: "Featured Only",
  },
  viewOptions: {
    grid: "Grid View",
    list: "List View",
  },
};
