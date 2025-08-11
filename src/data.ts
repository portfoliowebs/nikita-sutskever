import { v4 as uuidv4 } from 'uuid';
import {
  ProfileData,
  ContactData,
  FooterContent,
  PortfolioItem,
  Service,
  Testimonial,
  StatItem,
  ValuePropItem,
} from '../types/interfaces';

export const profileData: ProfileData = {
  name: "Nikita Sutskever",
  tagline: "Senior AI Engineer | Machine Learning Architect | AI Researcher",
  profileImage: "https://jicxsnfkyffvmieomgwd.supabase.co/storage/v1/object/public/portfolio-files/50b4d353-10bb-4398-a67a-12ef418c56a5/profile_images/1754922478541_pexels-apasaric-1285625.jpg",
  shortBio: "Innovative and impact-driven Senior AI Engineer with over 12 years of experience building, scaling, and deploying AI/ML systems across FAANG companies (Facebook, Apple, Amazon, Netflix, Google) and high-impact startups. Expert in machine learning architecture, LLMs, computer vision, NLP, reinforcement learning, and MLOps. Proven track record solving global-scale problems—from fraud detection and autonomous systems to climate AI and personalized healthcare.",
  summary: "",
  address: "San Francisco, CA",
  email: "nikitasutskever@aiworks.io",
  experience: [
    {
      title: "Senior AI Research Engineer",
      company: "Google DeepMind",
      location: "Location",
      years: "Mar 2022 – Present",
      responsibilities: [
        "● Led development of AlphaCarbon, a generative model for protein folding with faster inference than AlphaFold.\n● Created knowledge-aware LLMs for scientific QA over 20M+ PubMed articles.\n● Built scalable distributed training infrastructure with 4x speedup on TPUv4 pods.",
        "Responsibility 2"
      ],
    },
    {
      title: "Staff AI Engineer",
      company: "Meta (Facebook AI Research - FAIR)",
      location: "Location",
      years: "Oct 2018 – Feb 2022",
      responsibilities: [
        "● Architected RealTimeDet, Meta’s production object detection system for Reels and Marketplace.\n● Reduced model latency by 60% using quantized vision transformers on mobile devices.\n● Co-authored Meta’s fairness-aware recommendation engine for 3B users.",
        "Responsibility 2"
      ],
    },
    {
      title: "Senior Applied Scientist",
      company: "Amazon Web Services (AWS AI Labs)",
      location: "Location",
      years: "May 2015 – Sep 2018",
      responsibilities: [
        "● Designed and deployed anomaly detection models for AWS Shield (DDoS protection).\n● Built AutoML pipeline powering over 500 enterprise ML workloads.\n● Led AWS Sagemaker’s distributed training integration with Horovod + EFA.",
        "Responsibility 2"
      ],
    },
    {
      title: "Machine Learning Engineer II",
      company: "Netflix",
      location: "Location",
      years: "Jul 2013 – Apr 2015",
      responsibilities: [
        "● Optimized personalization algorithms for dynamic thumbnails and content ranking.\n● Developed adaptive bit-rate prediction models for 200M+ global users.",
        "Responsibility 2"
      ],
    },
    {
      title: "AI/ML Intern, Siri Team",
      company: "Apple",
      location: "Location",
      years: "Summer 2012",
      responsibilities: [
        "● Built a voice intent classifier improving Siri’s accuracy on African English accents by 35%.",
        "Responsibility 2"
      ],
    }
  ],
  education: [
    {
      institution: "Stanford University",
      degree: "M.S. in Artificial Intelligence",
      graduated: "2011 – 2013",
    },
    {
      institution: "Egerton University, Kenya",
      degree: "B.Sc. in Computer Science",
      graduated: "2007 – 2011",
    }
  ],
  skills: [
  "Deep Learning",
  "LLMs",
  "Transformers",
  "GANs",
  "CNNs",
  "RL",
  "GNNs",
  "Python",
  "PyTorch",
  "TensorFlow",
  "JAX",
  "Scala"
],
  callToActionText: "View My Work",
  callToActionLink: "/portfolio",
};

export const contactData: ContactData = {
  title: "Get In Touch",
  description: "Feel free to reach out for collaborations or just a friendly hello",
  cardTitle: "Contact Information",
  email: {
    label: "Email",
    value: "nikitasutskever@aiworks.io",
    link: "mailto:nikitasutskever@aiworks.io",
  },
  address: {
    label: "Location",
    value: "San Francisco, CA",
  },
  phone: {
    label: "Phone",
    value: "+1 (415) 555-9021",
    link: "tel:+1 (415) 555-9021",
  },
  footerNote: "I'll get back to you as soon as possible",
};

export const footerContent: FooterContent = {
  companyName: "Nikita Sutskever Portfolio",
  tagline: "Senior AI Engineer | Machine Learning Architect | AI Researcher",
  slogan: "Building digital experiences that matter",
  contactEmail: "nikitasutskever@aiworks.io",
  contactPhone: "+1 (415) 555-9021",
  contactAddress: "San Francisco, CA",
  quickLinks: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "github.com/nikita-ai",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "linkedin.com/in/nikitasutskever-ai",
      icon: "linkedin",
    },
  ],
};

export const portfolioItems: PortfolioItem[] = [
    {
      id: uuidv4(),
      image: "/project-1.jpg",
      title: "ClimateNet",
      description: "● Co-founded open-source AI project to predict extreme climate events.\n● Uses satellite imagery + temporal transformers to model hurricane trajectories.\n● Deployed to African climate agencies for early flood warnings.",
      pdfLink: "https://jicxsnfkyffvmieomgwd.supabase.co/storage/v1/object/public/portfolio-files/50b4d353-10bb-4398-a67a-12ef418c56a5/resumes/1754922478541_NIkita.pdf",
    },
    {
      id: uuidv4(),
      image: "/project-2.jpg",
      title: "LLMGuard",
      description: "● Built a security layer for enterprise LLMs to detect prompt injection, hallucination risks, and leakage.\n● Adopted by 20+ enterprise clients and integrated into LangChain plugins.",
      pdfLink: "https://jicxsnfkyffvmieomgwd.supabase.co/storage/v1/object/public/portfolio-files/50b4d353-10bb-4398-a67a-12ef418c56a5/resumes/1754922478541_NIkita.pdf",
    },
    {
      id: uuidv4(),
      image: "/project-3.jpg",
      title: "MediVision AI",
      description: "● Deep learning system for retinal disease detection using fundus images.\n● Deployed in 15 rural hospitals across India and East Africa.",
      pdfLink: "https://jicxsnfkyffvmieomgwd.supabase.co/storage/v1/object/public/portfolio-files/50b4d353-10bb-4398-a67a-12ef418c56a5/resumes/1754922478541_NIkita.pdf",
    },
    {
      id: uuidv4(),
      image: "/project-4.jpg",
      title: "SafeChat AI – Open-source",
      description: "● Contextual moderation and real-time toxicity filtering for chatbots and generative AI apps.\n● Hugging Face model with 10M+ downloads.",
      pdfLink: "https://jicxsnfkyffvmieomgwd.supabase.co/storage/v1/object/public/portfolio-files/50b4d353-10bb-4398-a67a-12ef418c56a5/resumes/1754922478541_NIkita.pdf",
    }
  ];

export const servicesData: Service[] = [
  {
    id: uuidv4(),
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    icon: "code",
    features: ["Responsive Design", "Performance Optimization", "SEO Friendly"],
  },
  {
    id: uuidv4(),
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces",
    icon: "design",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: uuidv4(),
    quote: "Professional and delivered beyond our expectations.",
    author: "Client Name",
    title: "CEO",
    company: "Company Name",
    image: undefined,
  },
];

export const statsData: StatItem[] = [
  {
    value: "5+",
    label: "Projects",
    description: "Completed",
    icon: "projects",
  },
  {
    value: "5+",
    label: "Years",
    description: "Experience",
    icon: "experience",
  },
];

export const valuePropsData: ValuePropItem[] = [
  {
    title: "Quality",
    description: "I deliver high-quality solutions that stand the test of time",
    icon: "quality",
  },
  {
    title: "Communication",
    description: "Clear and consistent communication throughout the project",
    icon: "communication",
  },
];