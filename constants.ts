import { Project, Experience, SocialLink, Education } from './types';

export const PROFILE = {
  name: "Greeshma Kadur Halesh",
  title: "Advanced Computer Science Postgraduate",
  bio: "Postgraduate in Advanced Computer Science at University of Liverpool. I build robust data pipelines, predictive models, and interactive dashboards that turn complex data into actionable insights.",
  location: "Liverpool, England, UK",
  email: "greeshmakh3@gmail.com",
  phone: "+44(0)7386830078",
  avatar: "https://api.dicebear.com/7.x/initials/svg?seed=GK&backgroundColor=111&textColor=fff", // Fallback avatar
};

export const SKILLS = [
  "Python", "SQL", "Pandas", "Scikit-Learn", "TensorFlow", "React", "AWS", "FastAPI", "Tableau", "Git", "Blockchain", "GeoPandas"
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "CHI Zone Fellow",
    company: "Civic HealthTech Innovation Zone",
    period: "Nov 2025 - Present",
    description: "Advancing AI and data-driven innovation in health and social care across the Liverpool City Region. Collaborating on initiatives in child health and bio-data analytics."
  },
  {
    id: "2",
    role: "Software Engineer Intern",
    company: "Get Landed",
    period: "Apr 2025 - Present",
    description: "Architected and deployed a full-stack mentorship platform using MERN stack and Python. Improved engagement by 89% via scalable infrastructure."
  },
  {
    id: "3",
    role: "Python Instructor & Developer",
    company: "Wonksnow Technologies",
    period: "Nov 2023 - Jul 2024",
    description: "Delivered professional training in programming languages. Contributed to college.dev platform helping 100+ students secure jobs."
  },
  {
    id: "4",
    role: "AI Trainee",
    company: "RStack Solutions",
    period: "Aug 2023 - Oct 2023",
    description: "Engineered price comparison tools using Selenium. Developed AI prototypes for automated data extraction and predictive analysis."
  }
];

export const EDUCATION: Education[] = [
  {
    id: "e1",
    degree: "MSc in Advanced Computer Science",
    institution: "University of Liverpool",
    period: "Sept 2024 - Sep 2025",
    gpa: "70% Distinction (Expected)",
    coursework: "Data Mining, Geo Data Science, Cloud Computing, Efficient Algorithms"
  },
  {
    id: "e2",
    degree: "BE in Information Science Engineering",
    institution: "Nitte Meenakshi Institute of Technology",
    period: "Aug 2019 - Jul 2023",
    gpa: "8.91/10",
    coursework: "Data Structures, OOPS, DBMS, Web Development"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "DataSense AI Dashboard",
    description: "AI-powered dashboard visualizing 10,000+ enterprise records with Gemini 1.5 Flash integration for contextual summaries.",
    technologies: ["Streamlit", "FastAPI", "Gemini API", "Python"],
    // Dark abstract tech
    imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2664&auto=format&fit=crop",
    githubUrl: "https://github.com/greeshmakh3",
    size: "large",
    featured: true
  },
  {
    id: "p2",
    title: "Decentralized News Integrity",
    description: "Tamper-proof fake news detection platform using Blockchain and smart contracts. Achieved 88% accuracy in detection.",
    technologies: ["Solidity", "React.js", "Web3.js", "Blockchain"],
    // Abstract blockchain/nodes
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop",
    githubUrl: "https://github.com/greeshmakh3",
    size: "tall"
  },
  {
    id: "p3",
    title: "Green Space Analytics",
    description: "Interactive map-based dashboard visualizing park accessibility data across Manchester using GeoPandas.",
    technologies: ["Python", "GeoPandas", "Folium", "Altair"],
    // Map/City data
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop",
    githubUrl: "https://github.com/greeshmakh3",
    size: "normal"
  },
  {
    id: "p4",
    title: "Multimodal Depression Detection",
    description: "Research analyzing facial expressions, speech, and text using BERT to detect depression indicators (87% accuracy).",
    technologies: ["TensorFlow", "BERT", "Deep Learning"],
    // Abstract brain/network
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    githubUrl: "https://github.com/greeshmakh3",
    size: "normal"
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com/in/greeshmakh3", icon: "Linkedin" },
  { platform: "GitHub", url: "https://github.com/greeshmakh3", icon: "Github" }, 
  { platform: "Email", url: "mailto:greeshmakh3@gmail.com", icon: "Mail" },
];