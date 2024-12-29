"use client";
import React from "react";
import {HoverIcon} from "./HoverIcon";

const icons = [
  { id: 1, src: "/icons/music-icon.svg", alt: "Music", href: "https://example.com/music" },
  { id: 2, src: "/icons/twitter-icon.svg", alt: "X (Twitter)", href: "https://twitter.com" },
  { id: 3, src: "/icons/github-icon.svg", alt: "GitHub", href: "https://github.com" },
  { id: 4, src: "/icons/linkedin-icon.svg", alt: "LinkedIn", href: "https://linkedin.com" },
  { id: 5, src: "/icons/whatsapp-icon.svg", alt: "WhatsApp", href: "https://whatsapp.com" },
];

const SocialIcons = () => {
  return (
    <div className="flex gap-5">
      {icons.map((icon) => (
        <HoverIcon key={icon.id} src={icon.src} alt={icon.alt} href={icon.href} />
      ))}
    </div>
  );
};

export default SocialIcons;
