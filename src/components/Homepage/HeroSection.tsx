import React, { useEffect, useRef } from "react";
import Button from "@/components/ui/button";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const hero = heroRef.current;

      if (hero) {
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        const glowEls = hero.querySelectorAll(".glow-effect");
        glowEls.forEach((el) => {
          (el as HTMLElement).style.transform =
            `translate(${xPos * 0.5}px, ${yPos * 0.5}px)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-40"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl filter" />
        <div className="animate-float absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl filter" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in">
            <span className="bg-secondary-50 text-secondary-700 mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-medium">
              Every child deserves a loving home
            </span>
          </div>

          <h1 className="animate-fade-in animate-delay-100 mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Giving Hope
            </span>{" "}
            <span>to Orphaned Children</span>
          </h1>

          <p className="animate-fade-in animate-delay-200 mb-8 text-lg text-gray-600 md:text-xl">
            Join Yallakafala in our mission to connect orphaned children with
            loving families. Together, we can transform lives and build brighter
            futures.
          </p>

          <div className="animate-fade-in animate-delay-300 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                document
                  .getElementById("donate")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Donate Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("mission")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Glow effects */}
      <div className="glow-effect absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl filter" />
      <div className="glow-effect absolute bottom-1/3 right-1/3 h-80 w-80 rounded-full bg-secondary/5 blur-3xl filter" />
    </section>
  );
};

export default HeroSection;
