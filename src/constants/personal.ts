import { PersonalInfo } from "./types";

export const personalInfo: PersonalInfo = {
  name: "GOKUL P R",
  title: "SOFTWARE ENGINEER",
  subtitle: "Full Stack Developer & Tech Enthusiast",
  email: "gokulpr47@gmail.com",
  location: "India",
  about: {
    background:
      "I'm a passionate software engineer with a strong foundation in modern web technologies. My journey in tech began with curiosity and has evolved into a deep love for creating innovative solutions that make a difference. I specialize in full-stack development with expertise in React, Node.js, and cloud technologies.",
    interests:
      "Outside of development, I enjoy learning about startups and technology, and building side projects for fun. I’m interested in productivity, personal growth, and fitness, and I like exploring new ideas and tools.",
    motivation:
      "I believe in writing clean, maintainable code and building user-centric applications. My approach combines technical excellence with creative problem-solving, always keeping the end-user experience at the forefront. I'm constantly learning and adapting to new challenges, which keeps my work exciting and innovative.",
  },
  socials: {
    linkedin: "https://linkedin.com/in/gokul-pr",
    github: "https://github.com/gokul-pr",
    email: "mailto:gokulpr47@gmail.com",
  },
};

// About section content
export const aboutContent = {
  sections: [
    {
      title: "Background",
      content: personalInfo.about.background,
      color: "text-blue-300",
      icon: "🚀",
    },
    {
      title: "Interests",
      content: personalInfo.about.interests,
      color: "text-purple-300",
      icon: "🎯",
    },
    {
      title: "What Drives Me",
      content: personalInfo.about.motivation,
      color: "text-green-300",
      icon: "💡",
    },
  ],
  skills: ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"],
};

// Contact information
export const contactInfo = {
  email: personalInfo.email,
  location: personalInfo.location,
  availability: "Open to new opportunities",
  timezone: "IST (UTC+5:30)",
};

// Profile image placeholder
export const profileImage = {
  placeholder: {
    initials: "GP",
    size: "w-48 h-48",
    gradient: "from-blue-400 to-purple-500",
  },
  alt: "Gokul P R - Software Engineer",
};
