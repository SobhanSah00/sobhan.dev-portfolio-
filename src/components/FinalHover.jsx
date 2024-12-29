"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, MessageCircle, GithubIcon, LinkedinIcon, MessageSquare } from 'lucide-react';

const SocialIconWithMenu = ({ Icon, bgColor, menuItems, effect, href, username }) => {
  const [isHovered, setIsHovered] = useState(false);

  const effects = {
    music: {
      icon: {
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.5, repeat: Infinity }
      },
      bg: { scale: 1.2, opacity: 0.15 }
    },
    twitter: {
      icon: {
        y: -8,
        transition: { type: "spring", stiffness: 400 }
      },
      bg: { scale: 1, opacity: 0.15 }
    },
    github: {
      icon: {
        rotate: 360,
        transition: { type: "spring", stiffness: 200 }
      },
      bg: { scale: 1.5, opacity: 0.1 }
    },
    linkedin: {
      icon: {
        y: [-5, 0],
        transition: { repeat: Infinity, repeatType: "reverse" }
      },
      bg: { scale: 1.2, opacity: 0.15 }
    },
    whatsapp: {
      icon: {
        scale: [1, 1.2, 1],
        transition: { duration: 0.5, repeat: Infinity }
      },
      bg: { scale: [1, 1.5, 1], opacity: 0.15 }
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Icon */}
      <motion.div className="relative w-12 h-12 group">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
        >
          <motion.div
            className="relative z-20 flex items-center justify-center w-full h-full p-3 rounded-lg bg-white shadow-sm cursor-pointer"
            animate={isHovered ? effects[effect].icon : {}}
            whileHover={{ y: -4 }}
          >
            <Icon className="w-6 h-6" style={{ color: bgColor }} />
          </motion.div>

          {/* Animated Background */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ backgroundColor: bgColor }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isHovered ? effects[effect].bg : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </a>
      </motion.div>

      {/* Circular Menu */}
      <AnimatePresence>
        {isHovered && menuItems && (
          <div className="absolute top-full left-1/2 pt-4 z-30">
            <div className="relative -left-1/2">
              {menuItems.map((item, index) => {
                const angle = (index * (360 / menuItems.length) - 90) * (Math.PI / 180);
                const radius = 60;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bg-white shadow-lg rounded-lg p-2 cursor-pointer no-underline hover:no-underline"
                    initial={{ scale: 0, x: 0, y: 0 }}
                    animate={{ scale: 1, x, y }}
                    exit={{ scale: 0, x: 0, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: index * 0.1
                    }}
                    whileHover={{ scale: 1.1 }}
                    style={{
                      borderLeft: `3px solid ${bgColor}`
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm text-gray-700 whitespace-nowrap">{item.label}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SocialIcons = () => {
  // You can replace this with your actual GitHub username
  const githubUsername = "sobhansah00";
  
  const platforms = [
    {
      Icon: Music,
      href: "https://example.com/music",
      bgColor: "#FF4081",
      effect: "music",
      menuItems: [
        { icon: "🎵", label: "Play Music", url: "https://example.com/music/play" },
        { icon: "📃", label: "Playlist", url: "https://example.com/music/playlist" },
        { icon: "⭐", label: "Favorites", url: "https://example.com/music/favorites" }
      ]
    },
    {
      Icon: GithubIcon,
      href: `https://github.com/${githubUsername}`,
      bgColor: "#333",
      effect: "github",
      menuItems: [
        { 
          icon: "📦", 
          label: "Repositories", 
          url: `https://github.com/${githubUsername}?tab=repositories` 
        },
        { 
          icon: "⭐", 
          label: "Stars", 
          url: `https://github.com/${githubUsername}?tab=stars` 
        },
        { 
          icon: "📊", 
          label: "Projects", 
          url: `https://github.com/${githubUsername}?tab=projects` 
        },
        { 
          icon: "📋", 
          label: "Gists", 
          url: `https://gist.github.com/${githubUsername}` 
        }
      ]
    },
    {
      Icon: LinkedinIcon,
      href: "https://linkedin.com/in/yourusername",
      bgColor: "#0A66C2",
      effect: "linkedin",
      menuItems: [
        { icon: "👋", label: "Connect", url: "https://linkedin.com/in/yourusername/connect" },
        { icon: "💼", label: "Jobs", url: "https://linkedin.com/jobs" },
        { icon: "📫", label: "Message", url: "https://linkedin.com/messaging" }
      ]
    }
  ];

  return (
    <div className="flex gap-8 p-8">
      {platforms.map((platform, index) => (
        <SocialIconWithMenu
          key={index}
          {...platform}
        />
      ))}
    </div>
  );
};

export default SocialIcons;