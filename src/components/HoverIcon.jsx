"use client";

import React from "react";
import { motion } from "motion/react";

const HoverIcon = ({ src, alt, href }) => {
  return (
    <div className="relative w-12 h-12">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {/* Icon */}
        <motion.div
          className="relative z-10 flex items-center justify-center w-full h-full"
          whileHover={{
            y: -10,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
        >
          <img src={src} alt={alt} className="w-8 h-8" />
        </motion.div>

        {/* Background Circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-16 bg-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-0"
          whileHover={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          initial={{ scale: 0 }}
        ></motion.div>
      </a>
    </div>
  );
};

export { HoverIcon };
