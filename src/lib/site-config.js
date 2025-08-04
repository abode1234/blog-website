// Site Configuration - JavaScript version for production compatibility

export const siteConfig = {
  title: "Abdul-Almotaleb",
  tagline: "AI Engineer & Backend Developer",
  description: "Portfolio of Abdul-Almotaleb, an AI engineer and backend developer specializing in cybersecurity, bug bounty hunting, and tool development.",
  domain: "your-domain.com",
  language: "en",
  copyright_year: 2024
};

export const ownerConfig = {
  name: "Abdul-Almotaleb",
  full_name: "Abdul-Almotaleb Al-Fasial",
  profession: "AI Engineer & Backend Developer",
  bio: `I'm Abdul-Almotaleb, an AI engineer and backend developer with deep expertise in cybersecurity, 
bug bounty hunting, and building specialized security tools. I combine my knowledge of AI/ML algorithms 
with strong backend development skills to create intelligent security solutions and automation tools.`,
  location: "Saudi Arabia",
  email: "contact@example.com"
};

export const socialConfig = {
  github: "https://github.com/abode1234",
  linkedin: "https://www.linkedin.com/in/abdulalmotaleb-alfasial-48392723a",
  x: "https://x.com/abdulmutalab9",
  youtube: "https://www.youtube.com/channel/UC7dUj3I4e4Q6bEaJH2r8Oqg",
  website: "",
  blog: ""
};

export const skillsConfig = {
  programming: [
    { name: "Python (AI/ML & Security Tools)", level: "Expert", icon: "🐍" },
    { name: "Go (Backend & High-Performance Tools)", level: "Advanced", icon: "🐹" },
    { name: "JavaScript/TypeScript", level: "Expert", icon: "📜" },
    { name: "C/C++ (System Programming)", level: "Advanced", icon: "⚙️" },
    { name: "SQL & NoSQL Databases", level: "Advanced", icon: "🗃️" },
    { name: "Shell Scripting (Bash/Zsh)", level: "Expert", icon: "🖥️" },
    { name: "Docker & Kubernetes", level: "Advanced", icon: "🐳" },
    { name: "Git & CI/CD", level: "Expert", icon: "🔧" }
  ],
  technical: [
    { name: "NestJS (Backend Framework)", level: "Expert", icon: "🚀" },
    { name: "Svelte/SvelteKit (Frontend)", level: "Expert", icon: "🎨" },
    { name: "Machine Learning (TensorFlow/PyTorch)", level: "Advanced", icon: "🤖" },
    { name: "RESTful APIs & GraphQL", level: "Expert", icon: "🔌" },
    { name: "Microservices Architecture", level: "Advanced", icon: "🏗️" },
    { name: "Network Protocols (TCP/IP, HTTP/S)", level: "Expert", icon: "🌐" },
    { name: "Bug Bounty Hunting", level: "Expert", icon: "🐛" },
    { name: "Security Tool Development", level: "Expert", icon: "🛠️" },
    { name: "OWASP Top 10", level: "Expert", icon: "🔒" },
    { name: "Penetration Testing", level: "Advanced", icon: "🔍" }
  ],
  certifications: [
    { name: "Bug Bounty Hunter", description: "Active on HackerOne, Bugcrowd", icon: "🎯" },
    { name: "AI/ML Specialist", description: "Deep Learning & Neural Networks", icon: "🤖" },
    { name: "Backend Architecture", description: "Microservices & Cloud Native", icon: "☁️" }
  ]
};

export const navigationConfig = {
  show_home: true,
  show_projects: true,
  show_blog: true,
  show_contact: false
};

export const featuresConfig = {
  show_skills: true,
  show_certifications: true,
  show_projects: true,
  show_blog: true,
  show_social_links: true,
  enable_dark_mode: true,
  enable_animations: true
};

export const projectsConfig = [
  {
    name: "NetGuardian",
    description: "NetGuardian integrates an AI-powered detector to inspect incoming HTTP requests in real time, pinpoint exploitable parameters, and emit alerts. This post explains every part of the detector.py service, provides the requested ASCII flowchart, and shows how to integrate it with your C++ proxy.",
    category: "AI & Security",
    icon: "🤖",
    link: "https://github.com/abode1234/network-guardian",
    technologies: ["Python", "TensorFlow", "PyTorch", "C++", "XGBoost", "Proxy Broker"],
    highlights: [
      "ML model with 94% accuracy in vulnerability prediction",
      "Automated scanning with intelligent prioritization", 
      "Real-time threat intelligence integration",
      "Extracts 80 features from each HTTP request in real time",
      "Runs XGBoost inference to detect malicious payloads",
      "Uses SHAP to identify the most suspect parameter in each request",
      "Returns JSON indicating allow/block, probability, and vulnerable_param",
      "Optionally webhooks alerts to Slack/Teams/other systems"
    ]
  }
]; 
