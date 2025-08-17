"use client"

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/animated-modal";
import { Github, ExternalLink } from "lucide-react"

// Project data for cards
const experienceSection = [
  {
    id: 1,
    title: "Backend Engineer",
    company: "Viden Edutech",
    status: "Current",
    description: "Migrating aia insurance internal website",
    fullDescription: "I'm a Backend Developer crafting cutting-edge dApps and DeFi solutions. From writing secure smart contracts to building intuitive Web3 interfaces, I turn complex blockchain concepts into user-friendly experiences.",
    techStack: ['Nest js', 'Next js', 'Ms sql'],
    achievements: [
      "Built and maintained backend services/APIs for Internal website",
      "Created 25 + production grade api's for now",
      "Creting Unit Test case's for my endpoints",
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

const ProjectsSection = [
  {
    id: 1,
    title: "LearnSphere",
    description: "Migrating aia insurance internal website",
    fullDescription: "I'm a Backend Developer crafting cutting-edge dApps and DeFi solutions. From writing secure smart contracts to building intuitive Web3 interfaces, I turn complex blockchain concepts into user-friendly experiences.",
    techStack: ['Nest.js', 'Next.js', 'MS SQL'],
    GitHubLink: "https://github.com/username/learnsphere",
    liveLink: "https://learnsphere.demo.com",
    achievements: [
      "Built and maintained backend services/APIs for Internal website",
      "Created 25+ production grade API's for now",
      "Creating Unit Test case's for my endpoints",
    ],
    icon: "🎓",
    category: "Backend Development"
  },
  {
    id: 2,
    title: "CryptoTracker Pro",
    description: "Real-time cryptocurrency tracking and portfolio management",
    fullDescription: "A comprehensive cryptocurrency tracking application with real-time price updates, portfolio management, and advanced analytics. Built with modern web technologies for optimal performance.",
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    GitHubLink: "https://github.com/username/cryptotracker",
    liveLink: "https://cryptotracker.demo.com",
    achievements: [
      "Integrated 10+ cryptocurrency exchanges APIs",
      "Real-time price updates with WebSocket connections",
      "Advanced charting with technical indicators",
      "Portfolio tracking with profit/loss analytics"
    ],
    icon: "₿",
    category: "Full Stack"
  },
  {
    id: 3,
    title: "TaskFlow Dashboard",
    description: "Project management and team collaboration platform",
    fullDescription: "A modern project management solution designed for agile teams. Features include task tracking, team collaboration, time management, and comprehensive project analytics.",
    techStack: ['Vue.js', 'Express.js', 'PostgreSQL', 'Redis'],
    GitHubLink: "https://github.com/username/taskflow",
    liveLink: "https://taskflow.demo.com",
    achievements: [
      "Built drag-and-drop task management interface",
      "Implemented real-time collaboration features",
      "Created comprehensive reporting dashboard",
      "Optimized database queries for 50% faster load times"
    ],
    icon: "📊",
    category: "Frontend Development"
  }
];

function ExperianceCard({ project }: any) {
  return (
    <Modal>
      <ModalTrigger className="w-full p-0 text-left bg-transparent hover:bg-transparent border-0 rounded-none">
        <div className="bg-[#0B0A0B] border border-gray-700 rounded-lg p-6 hover:border-white transition-all duration-200 cursor-pointer group">
          <div className="flex items-start gap-4">
            <div className="text-2xl">{project.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-white group-hover:text-white-400 transition-colors">
                  {project.title}
                </h3>
                <span className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">
                  {project.company} • {project.status}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: any, index: any) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
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
          <div className="flex items-start gap-4 mb-6">
            <div className="text-3xl">{project.icon}</div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
              <span className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded">
                {project.company} • {project.status}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: any, index: any) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Key Achievements</h3>
            <ul className="space-y-2">
              {project.achievements.map((achievement: any, index: any) => (
                <li key={index} className="text-gray-300 flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}

function ProjectCard({ project }: any) {
  return (
    <Modal>
      <ModalTrigger className="w-full p-0 text-left bg-transparent hover:bg-transparent border-0 rounded-none">
        <div className="group relative bg-gradient-to-br bg-[#0B0A0B] border border-gray-700 rounded-xl p-6 hover:border-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer overflow-hidden">
          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl p-2 bg-gray-700 rounded-lg group-hover:bg-black transition-colors">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-grey-400 font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {project.GitHubLink && (
                  <a
                    href={project.GitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} className="text-white" />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-grey-600 hover:bg-grey-500 rounded-lg transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} className="text-white" />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech: any, index: any) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium group-hover:bg-blue-900 group-hover:text-blue-200 transition-colors"
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
          <div className="flex items-start gap-4 mb-6">
            <div className="text-4xl p-3 bg-gray-700 rounded-xl">{project.icon}</div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <span className="px-3 py-1 text-sm bg-gray-600 text-white rounded-full font-medium">
                {project.category}
              </span>

              {/* Modal Links */}
              <div className="flex gap-3 mt-4">
                {project.GitHubLink && (
                  <a
                    href={project.GitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-white"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-500 rounded-lg transition-colors text-white"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">About This Project</h3>
            <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: any, index: any) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r bg-gray-700 text-white rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Key Achievements</h3>
            <ul className="space-y-3">
              {project.achievements.map((achievement: any, index: any) => (
                <li key={index} className="text-gray-300 flex items-start gap-3">
                  <span className="text-green-400 text-lg mt-0.5">✓</span>
                  <span className="leading-relaxed">{achievement}</span>
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
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Here's a timeline of my professional journey, showcasing my roles and contributions in full-stack development.
          </p>

          {/* Experience Cards Section */}
          <div className="space-y-4 mb-8">
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
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>

          <div className="space-y-4 mb-8">
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