"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useMousePosition } from "@/lib/hooks/use-mouse-position";

export const BackgroundBeams = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isInside =
          mousePosition.x >= rect.left &&
          mousePosition.x <= rect.right &&
          mousePosition.y >= rect.top &&
          mousePosition.y <= rect.bottom;

        setOpacity(isInside ? 1 : 0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition]);

  const mask = `radial-gradient(200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.4), transparent)`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-full w-full overflow-hidden bg-slate-950",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-[url('/grid.svg')] bg-center"
        style={{
          mask,
          opacity,
          transition: "opacity 0.3s ease",
        }}
      />
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950" />
        <div className="absolute left-[50%] top-[50%] z-10 h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-blue-400/20 blur-[100px]" />
        <div className="absolute left-[50%] top-[50%] z-10 h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-violet-400/20 blur-[100px]" />
        <div className="absolute z-10 h-8 w-[calc(100%+40px)] -translate-y-4 bg-slate-950 blur-[8px]" />
        <div className="absolute bottom-0 z-10 h-16 w-[calc(100%+40px)] translate-y-4 bg-slate-950 blur-[16px]" />
        <div className="absolute left-0 z-10 h-[calc(100%+40px)] w-8 -translate-x-4 bg-slate-950 blur-[8px]" />
        <div className="absolute right-0 z-10 h-[calc(100%+40px)] w-8 translate-x-4 bg-slate-950 blur-[8px]" />
        <div className="absolute bottom-0 left-0 z-10 h-16 w-16 -translate-x-4 translate-y-4 bg-slate-950 blur-[8px]" />
        <div className="absolute bottom-0 right-0 z-10 h-16 w-16 translate-x-4 translate-y-4 bg-slate-950 blur-[8px]" />
        <div className="absolute right-0 top-0 z-10 h-16 w-16 -translate-y-4 translate-x-4 bg-slate-950 blur-[8px]" />
        <div className="absolute left-0 top-0 z-10 h-16 w-16 -translate-x-4 -translate-y-4 bg-slate-950 blur-[8px]" />
      </div>
    </div>
  );
};
