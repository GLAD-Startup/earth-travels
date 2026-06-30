"use client";

import React, { useRef, useState } from "react";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export default function GlassCard({
  children,
  className = "",
  hover = true,
  onClick,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation (max 10 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    // Apply 3D transform
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

    // Update shine position
    if (shineRef.current) {
      shineRef.current.style.background = `radial-gradient(circle 180px at ${x}px ${y}px, rgba(212, 160, 23, 0.15), transparent 80%)`;
    }
  };

  const handleMouseEnter = () => {
    if (!hover) return;
    setIsHovered(true);
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 0.1s ease";
    }
  };

  const handleMouseLeave = () => {
    if (!hover) return;
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
      cardRef.current.style.transition = "transform 0.4s ease";
    }
  };

  return (
    <div
      ref={cardRef}
      className={`glass relative overflow-hidden transition-all duration-300 ${
        hover ? "hover:border-gold/30 hover:shadow-gold" : ""
      } ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      {/* Gold shine overlay */}
      {hover && (
        <div
          ref={shineRef}
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            background: "radial-gradient(circle 180px at 50% 50%, rgba(212, 160, 23, 0.15), transparent 80%)",
          }}
        />
      )}
      <div className="relative z-20 h-full w-full">{children}</div>
    </div>
  );
}
