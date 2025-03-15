"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function SparklesCore({
  id,
  className,
  background,
  minSize,
  maxSize,
  particleColor,
  particleDensity,
}: {
  id: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleColor?: string;
  particleDensity?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const density = particleDensity ?? 50;
  const speed = 0.1;

  // Effect to initialize canvas and particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    const setCanvasDimensions = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      setCanvasSize({ width: canvas.width, height: canvas.height });
    };

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      const minSizeValue = minSize ?? 0.5;
      const maxSizeValue = maxSize ?? 1.5;

      // Create particles based on density
      const particleCount =
        Math.floor((canvas.width * canvas.height) / 1000) * (density / 100);

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size =
          Math.random() * (maxSizeValue - minSizeValue) + minSizeValue;

        particles.push({
          x,
          y,
          size,
          color: particleColor ?? "#FFFFFF",
          velocity: {
            x: Math.random() * speed - speed / 2,
            y: Math.random() * speed - speed / 2,
          },
        });
      }
    };

    // Animation loop
    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background
      if (background) {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Update particles
      particles.forEach((particle) => {
        // Move particles
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;

        // Wrap around canvas edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      setCanvasDimensions();
      initParticles();
    };

    setCanvasDimensions();
    initParticles();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [background, density, maxSize, minSize, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("block", className)}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}

// Type definitions
interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
}
