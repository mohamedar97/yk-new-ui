"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    const updateLampPosition = (clientX: number) => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const centerX = containerRect.left + containerRect.width / 2;
        const distanceFromCenter = Math.abs(clientX - centerX);

        // Calculate opacity based on distance from center (closer = more intense)
        const maxDistance = containerRect.width / 2;
        const intensity = 1 - Math.min(distanceFromCenter / maxDistance, 1);
        setOpacity(0.3 + intensity * 0.5); // Range from 0.3 to 0.8
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateLampPosition(e.clientX);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-hidden",
        className,
      )}
    >
      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center">
        {children}
      </div>
      <motion.div
        className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-30"
        style={{
          opacity,
          filter: "blur(100px)",
        }}
      />
    </div>
  );
}
