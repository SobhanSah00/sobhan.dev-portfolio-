"use client"

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/animated-modal";
import { Github, ExternalLink } from "lucide-react"

interface experienceSectionInterface {
  id: number,
  title: string,
  company: string,
  status: string,
  description: string,
  fullDescription: string,
  techStack: string[],
  achievements: string[]
  icon: string
}

interface ProjectsSectionInterface {
  id: number,
  title: string,
  description: string,
  fullDescription: string,
  techStack: string[],
  GitHubLink: string,
  liveLink: string,
  achievements: string[]
  icon: string,
  category: string
}

const experienceSection: experienceSectionInterface[] = [
  {
    id: 1,
    title: "Backend Engineer",
    company: "Viden Edutech",
    status: "Current",
    description: "Migrating AIA insurance internal codebase and website st.",
    fullDescription: "As a Backend Engineer, I work for AIA Insurance Company on modernizing a large-scale ASP.NET application into a scalable architecture using NestJS and Next.js. I lead for my module backend development, redesign service layers with TypeScript and TypeORM, integrate MS SQL, and ensure smooth collaboration across frontend and QA teams. My focus is on building reliable, scalable APIs and driving overall backend quality.",
    techStack: ['Nest js', 'Next js', 'Ms sql'],
    achievements: [
      "Migrated major ASP.NET modules to a modern NestJS-based architecture, improving scalability and developer productivity.",
      "Rebuilt backend modules using TypeScript and TypeORM with optimized MS SQL queries and schema design.",
      "Led backend development for my module, overseeing task planning, code reviews, and architecture decisions.",
      "Collaborated closely with frontend and QA teams to ship stable, production-ready features.",
      "Delivered scalable, well-structured, and maintainable backend services used across the enterprise system."

    ],
    icon: "💼"
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "SSC (College Club)",
    status: "current",
    description: "Developed responsive web applications using React and TypeScript",
    fullDescription: "Led frontend development for 2025 Zygon (college cultural fest), focusing on user experience and performance optimization.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
    achievements: [
      "visit over 9000+ users",
      "Implemented responsive design for mobile-first approach",
      "Built reusable component library used across multiple projects",
      "Mentored junior developers on best practices"
    ],
    icon: "💻"
  }
];

const ProjectsSection: ProjectsSectionInterface[] = [
  {
    id: 1,
    title: "LSP",
    description: "Backend-as-a-Service platform offering 50+ ready-to-use APIs",
    fullDescription:
      "A one-stop Backend-as-a-Service platform offering 50+ ready-to-use APIs for frontend developers. It includes public APIs for social media, authentication, chat, and AI integrations, designed with scalability and modular architecture in mind.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Next.js", "TypeScript"],
    GitHubLink: "https://github.com/SobhanSah00/lsp",
    liveLink: "https://lsp-learnspherehome.vercel.app/",
    achievements: [
      "Built a public API library covering social, real-time chat, auth, and AI integrations.",
      "Designed with modular monorepo architecture for scalability.",
      "Integrated multi-LLM APIs and text-to-image generation.",
      "Developed a Next.js dashboard for browsing and testing APIs."
    ],
    icon: "🧠",
    category: "Backend Development"
  },
  {
    id: 2,
    title: "Drawisly",
    description: "Real-time collaborative whiteboard for teams",
    fullDescription:
      "A real-time collaborative whiteboard app built with Next.js and TypeScript that allows multiple users to draw, annotate, and chat in shared rooms. Designed for high concurrency and efficient data sync using WebSockets and PostgreSQL.",
    techStack: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "WebSocket"],
    GitHubLink: "https://github.com/SobhanSah00/Drawisly",
    liveLink: "",
    achievements: [
      "Implemented live drawing, chat, and presence with WebSocket communication.",
      "Managed persistent sessions and room states with Prisma and PostgreSQL.",
      "Used Turborepo for modular monorepo structure across frontend and backend.",
      "Enabled real-time collaboration with efficient sync handling."
    ],
    icon: "🎨",
    category: "Full Stack Development"
  },
  {
    id: 3,
    title: "Auth-Cli-Tool",
    description: "Plug-and-play authentication CLI generator",
    fullDescription:
      "A developer-friendly CLI tool that scaffolds a complete Express.js authentication boilerplate in seconds. Built to reduce setup time and streamline authentication setup across projects.",
    techStack: ["Node.js", "Express.js", "Commander", "Inquirer", "TypeScript"],
    GitHubLink: "https://github.com/SobhanSah00/auth-cli-tool",
    liveLink: "https://www.npmjs.com/package/auth-cli-tool",
    achievements: [
      "Scaffolds full Express.js auth boilerplate instantly with npx command.",
      "Supports MongoDB/Mongoose and PostgreSQL/Prisma options.",
      "Configurable JWT or Cookie-based authentication.",
      "Achieved 500+ downloads on launch day, improving developer setup time by 95%."
    ],
    icon: "⚙️",
    category: "Developer Tools"
  },
  {
    id: 4,
    title: "PROX-G",
    description: "AI-powered image generation and embedding platform",
    fullDescription:
      "PROX-G is an advanced AI image generation platform that converts user prompts into high-quality images and vector embeddings. It features Google OAuth authentication, payment integration, free credit limits, and a scalable backend designed for commercial-grade performance.",
    techStack: [
      "Next.js",
      "JavaScript",
      "mongoose",
      "mongodb",
      "Stripe/Razorpay",
      "Google OAuth",
      "FLUX - MODEL",
      "Gemini Embedings",
      "Nebuis"
    ],
    GitHubLink: "https://github.com/SobhanSah00/ai_image_generator",
    liveLink: "https://proxg.vercel.app/",
    achievements: [
      "Implemented high-quality AI image generation from natural prompts.",
      "Added automatic vector embedding generation for semantic search and personalization.",
      "Integrated Google OAuth for seamless onboarding.",
      "Added payment system supporting credits and premium usage.",
      "Provided 5 free image generation credits for new users.",
      "Designed scalable APIs capable of handling high-volume prompt traffic.",
      "Add Guard Rails for prompt safety and quality control from both side of user and AI.",
    ],
    icon: "🎨",
    category: "AI / Generative Tools"
  },
  {
    id: 5,
    title: "NewsSoup",
    description: "Real-time AI-summarized tech and AI news delivery system",
    fullDescription:
      "NewsSoup automatically fetches the latest technology and AI news from the MediaStack API and generates concise summaries using Gemini. It runs on scheduled cron jobs and delivers daily or hourly updates directly through email, WhatsApp, and SMS using Twilio and Resend. Built to keep developers and AI enthusiasts instantly informed with minimal effort.",
    techStack: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MediaStack API",
      "Gemini API",
      "Cron Jobs",
      "Twilio",
      "Resend",
    ],
    GitHubLink: "https://github.com/SobhanSah00/news_soup",
    liveLink: "",
    achievements: [
      "Automated news scraping and summarization pipeline using MediaStack + Gemini.",
      "Delivered AI-generated summaries via email, WhatsApp, and SMS.",
      "Implemented cron jobs for scheduled daily/hourly news delivery.",
      "Reduced information overload by summarizing large articles into 3-5 bullet insights.",
      "Built a multi-channel delivery system using Twilio for SMS/WhatsApp and Resend for email.",
      "Created a developer-friendly dashboard to manage delivery frequency and sources."
    ],
    icon: "📰",
    category: "Automation / AI Tools"
  },
  {
    id: 6,
    title: "AI Voice Conversation Agent",
    description: "Real-time voice-based conversational AI with STT, LLM reasoning, and TTS.",
    fullDescription:
      "A real-time, voice-driven conversational AI system engineered to simulate natural two-way conversation. The backend processes live audio input, transcribes it using Whisper, generates contextual AI responses using GPT, converts them back to speech with a TTS engine, and streams the audio output instantly over WebSockets. Designed to feel like interacting with an intelligent AI agent over a phone call.",
    techStack: [
      "Node.js",
      "Express.js",
      "WebSockets",
      "OpenAI Whisper",
      "OpenAI GPT Models",
      "TTS-1",
      "MongoDB",
      "Mongoose",
      "Multer"
    ],
    GitHubLink: "https://github.com/SobhanSah00/voice-based-AI-booking-system",
    liveLink: "",
    achievements: [
      "Implemented full voice interaction pipeline: STT → LLM → TTS.",
      "Achieved real-time bi-directional communication using WebSockets.",
      "Designed modular controllers for STT, GPT logic, TTS, and conversation management.",
      "Built persistent conversation memory using MongoDB to maintain long multi-turn context.",
      "Integrated Whisper for high-accuracy transcription and TTS-1 for natural speech output.",
      "Handled audio uploads efficiently with Multer and streamed responses back to the client.",
      "Created production-ready backend architecture with clean separation of controllers, routes, models, and utils."
    ],
    icon: "🔊",
    category: "AI / Voice Interaction"
  },
  
];

function ExperianceCard({ project }: { project: experienceSectionInterface }) {
  return (
    <Modal>
      <ModalTrigger className="w-full p-0 text-left bg-transparent hover:bg-transparent border-0 rounded-none">
        <div className="bg-[#0B0A0B] border border-gray-700 rounded-lg p-4 sm:p-6 hover:border-white transition-all duration-200 cursor-pointer group">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <div className="text-xl sm:text-2xl">{project.icon}</div>
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-white-400 transition-colors">
                  {project.title}
                </h3>
                <span className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded self-start">
                  {project.company} • {project.status}
                </span>
              </div>
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {project.techStack.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ModalTrigger>

      <ModalBody>
        <ModalContent>
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="text-2xl sm:text-3xl">{project.icon}</div>
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h2>
              <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-700 text-gray-300 rounded">
                {project.company} • {project.status}
              </span>
            </div>
          </div>

          <div className="mb-4 sm:mb-6">
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{project.fullDescription}</p>
          </div>

          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {project.techStack.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Key Achievements</h3>
            <ul className="space-y-1 sm:space-y-2">
              {project.achievements.map((achievement: string, index: number) => (
                <li key={index} className="text-gray-300 flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5 sm:mt-1">•</span>
                  <span className="text-sm sm:text-base">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}

function ProjectCard({ project }: { project: ProjectsSectionInterface }) {
  return (
    <Modal>
      <ModalTrigger className="w-full p-0 text-left bg-transparent hover:bg-transparent border-0 rounded-none">
        <div className="group relative bg-gradient-to-br bg-[#0B0A0B] border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer overflow-hidden">
          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3 sm:gap-0">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="text-xl sm:text-2xl p-2 bg-gray-700 rounded-lg group-hover:bg-black transition-colors">
                  {project.icon}
                </div>
                <div className="flex-1 sm:flex-none">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-gray-400 font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity self-start">
                {project.GitHubLink && (
                  <a
                    href={project.GitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={14} className="text-white sm:w-4 sm:h-4" />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={14} className="text-white sm:w-4 sm:h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
              {project.techStack.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs sm:text-sm font-medium group-hover:bg-blue-900 group-hover:text-blue-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ModalTrigger>

      <ModalBody>
        <ModalContent>
          {/* Modal Header */}
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="text-3xl sm:text-4xl p-2 sm:p-3 bg-gray-700 rounded-xl">{project.icon}</div>
            <div className="flex-1 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
              <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-600 text-white rounded-full font-medium">
                {project.category}
              </span>

              {/* Modal Links */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-3 sm:mt-4">
                {project.GitHubLink && (
                  <a
                    href={project.GitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start gap-2 px-3 sm:px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-white text-sm sm:text-base"
                  >
                    <Github size={14} className="sm:w-4 sm:h-4" />
                    <span>View Code</span>
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start gap-2 px-3 sm:px-4 py-2 bg-gray-700 hover:bg-gray-500 rounded-lg transition-colors text-white text-sm sm:text-base"
                  >
                    <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">About This Project</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{project.fullDescription}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {project.techStack.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r bg-gray-700 text-white rounded-lg text-xs sm:text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Key Achievements</h3>
            <ul className="space-y-2 sm:space-y-3">
              {project.achievements.map((achievement: string, index: number) => (
                <li key={index} className="text-gray-300 flex items-start gap-2 sm:gap-3">
                  <span className="text-green-400 text-base sm:text-lg mt-0.5">✓</span>
                  <span className="leading-relaxed text-sm sm:text-base">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}

export function TimelineDemo() {
  const data = [
    {
      title: "Experience",
      content: (
        <div>
          <p className="mb-6 sm:mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Here&apos;s a timeline of my professional journey, showcasing my roles and contributions in full-stack development.
          </p>

          {/* Experience Cards Section */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {experienceSection.map((experience) => (
              <ExperianceCard key={experience.id} project={experience} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div>
          <p className="mb-6 sm:mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            What ever i Want that i made and that are my projects .
          </p>

          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {ProjectsSection.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
