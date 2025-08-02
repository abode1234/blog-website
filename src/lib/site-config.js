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
    name: "AI-Powered Vulnerability Scanner",
    description: "Developed an intelligent vulnerability scanner using machine learning algorithms to predict and identify potential security weaknesses in web applications and networks.",
    category: "AI & Security",
    icon: "🤖",
    link: "https://github.com/yourusername/ai-vuln-scanner",
    technologies: ["Python", "TensorFlow", "PyTorch", "NestJS", "GraphQL", "Docker"],
    highlights: [
      "ML model with 95% accuracy in vulnerability prediction",
      "Automated scanning with intelligent prioritization",
      "Real-time threat intelligence integration"
    ]
  },
  {
    name: "Microservices Backend Architecture",
    description: "Built a scalable microservices architecture using NestJS for a high-traffic e-commerce platform with real-time inventory management and payment processing.",
    category: "Backend Development",
    icon: "🚀",
    link: "https://github.com/yourusername/microservices-backend",
    technologies: ["NestJS", "TypeScript", "GraphQL", "Redis", "PostgreSQL", "Kubernetes"],
    highlights: [
      "Handled 1M+ daily transactions",
      "Implemented event-driven architecture",
      "99.9% uptime with auto-scaling"
    ]
  },
  {
    name: "Automated Bug Bounty Hunter Tool",
    description: "Created an automated bug bounty hunting tool that combines AI/ML for intelligent target selection with custom Go modules for high-performance scanning.",
    category: "Security Tools",
    icon: "🐛",
    link: "https://github.com/yourusername/auto-bounty",
    technologies: ["Go", "Python", "Machine Learning", "REST APIs", "Docker"],
    highlights: [
      "Discovered 50+ critical vulnerabilities",
      "Automated reconnaissance and reporting",
      "Integration with HackerOne & Bugcrowd APIs"
    ]
  },
  {
    name: "Network Protocol Analyzer",
    description: "Built a high-performance network protocol analyzer in C++ with Go backend for real-time packet analysis and anomaly detection using deep learning.",
    category: "Network & AI",
    icon: "🌐",
    link: "https://github.com/yourusername/protocol-analyzer",
    technologies: ["C++", "Go", "Python", "Deep Learning", "TCP/IP", "WebSockets"],
    highlights: [
      "Real-time packet analysis at 10Gbps",
      "AI-powered anomaly detection",
      "Custom protocol dissector framework"
    ]
  },
  {
    name: "Secure Chat Application",
    description: "Developed an end-to-end encrypted chat application with NestJS backend and Svelte frontend, implementing advanced cryptographic protocols.",
    category: "Full Stack Development",
    icon: "💬",
    link: "https://github.com/yourusername/secure-chat",
    technologies: ["NestJS", "Svelte", "WebRTC", "PostgreSQL", "Redis", "E2E Encryption"],
    highlights: [
      "Zero-knowledge architecture",
      "Real-time messaging with WebRTC",
      "Quantum-resistant encryption"
    ]
  },
  {
    name: "AI Security Operations Center (SOC)",
    description: "Built an AI-powered SOC platform that uses machine learning to automate threat detection, incident response, and security orchestration.",
    category: "AI & Security",
    icon: "🛡️",
    link: "https://github.com/yourusername/ai-soc",
    technologies: ["Python", "TensorFlow", "NestJS", "Elasticsearch", "Kubernetes", "SIEM"],
    highlights: [
      "Reduced incident response time by 80%",
      "ML-based threat correlation",
      "Automated playbook execution"
    ]
  },
  {
    name: "Blockchain Security Audit Tool",
    description: "Developed a comprehensive security audit tool for smart contracts and blockchain applications using static analysis and fuzzing techniques.",
    category: "Security Tools",
    icon: "⛓️",
    link: "https://github.com/yourusername/blockchain-audit",
    technologies: ["Go", "Python", "Solidity", "Static Analysis", "Fuzzing", "Web3"],
    highlights: [
      "Detected $2M+ in potential vulnerabilities",
      "Support for multiple blockchain platforms",
      "Automated report generation"
    ]
  },
  {
    name: "High-Performance API Gateway",
    description: "Built a custom API gateway in Go with advanced rate limiting, authentication, and traffic management capabilities for microservices.",
    category: "Backend Development",
    icon: "⚡",
    link: "https://github.com/yourusername/api-gateway",
    technologies: ["Go", "gRPC", "Redis", "Prometheus", "Grafana", "Docker"],
    highlights: [
      "Handle 100K+ requests per second",
      "Sub-millisecond latency",
      "Advanced traffic shaping algorithms"
    ]
  }
]; 