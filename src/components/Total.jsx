"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, MessageCircle, GithubIcon, LinkedinIcon, MessageSquare } from 'lucide-react';

const SocialIconWithMenu = ({ Icon, bgColor, menuItems, effect, href }) => {
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
      <motion.div
        className="relative w-12 h-12 group"
      >
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
                  <motion.div
                    key={item.label}
                    className="absolute bg-white shadow-lg rounded-lg p-2 cursor-pointer"
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
                  </motion.div>
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
  const platforms = [
    {
      Icon: Music,
      href: "https://example.com/music",
      bgColor: "#FF4081",
      effect: "music",
      menuItems: [
        { icon: "🎵", label: "Play Music" },
        { icon: "📃", label: "Playlist" },
        { icon: "⭐", label: "Favorites" }
      ]
    },
    {
      Icon: MessageCircle,
      href: "https://twitter.com",
      bgColor: "#1DA1F2",
      effect: "twitter",
      menuItems: [
        { icon: "🔄", label: "Repost" },
        { icon: "💬", label: "Reply" },
        { icon: "❤️", label: "Like" }
      ]
    },
    {
      Icon: GithubIcon,
      href: "https://github.com",
      bgColor: "#333",
      effect: "github",
      menuItems: [
        { icon: "📦", label: "Repos" },
        { icon: "🔧", label: "Settings" },
        { icon: "📊", label: "Stats" }
      ]
    },
    {
      Icon: LinkedinIcon,
      href: "https://linkedin.com",
      bgColor: "#0A66C2",
      effect: "linkedin",
      menuItems: [
        { icon: "👋", label: "Connect" },
        { icon: "💼", label: "Jobs" },
        { icon: "📫", label: "Message" }
      ]
    },
    {
      Icon: MessageSquare,
      href: "https://whatsapp.com",
      bgColor: "#25D366",
      effect: "whatsapp",
      menuItems: [
        { icon: "📞", label: "Call" },
        { icon: "📷", label: "Share" },
        { icon: "👥", label: "Groups" }
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