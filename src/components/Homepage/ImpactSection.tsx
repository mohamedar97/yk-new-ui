import React, { useEffect, useRef, useState } from "react";

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const Stat = ({ value, label, suffix = "", delay = 0 }: StatProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            animateValue(0, value, 2000);
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold: 0.1 },
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [value, delay, hasAnimated]);

  const animateValue = (start: number, end: number, duration: number) => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);

      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <div className="text-center">
      <div className="text-gradient mb-2 text-4xl font-bold md:text-5xl">
        <span ref={countRef}>{count}</span>
        {suffix}
      </div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const ImpactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  function useInView(ref: React.RefObject<HTMLElement>) {
    const [isIntersecting, setIntersecting] = React.useState(false);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry?.isIntersecting ?? false);
        },
        { threshold: 0.1 },
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref]);

    return isIntersecting;
  }

  const isInView = useInView(sectionRef);

  return (
    <section id="impact" className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-6 inline-block rounded-full bg-secondary-50 px-4 py-1.5 text-sm font-medium text-secondary-700">
            Our Impact
          </span>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Making a Difference Together
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-gradient-to-r from-primary to-secondary"></div>
          <p className="text-lg text-gray-600">
            Since our founding, we&apos;ve been privileged to help create
            countless families and change lives across the country.
          </p>
        </div>

        <div
          className={`grid gap-8 md:grid-cols-2 lg:grid-cols-4 ${isInView ? "animate-fade-in" : "opacity-0"}`}
        >
          <Stat value={350} label="Children Placed" delay={0} />
          <Stat value={280} label="Families Created" delay={200} />
          <Stat value={15} label="Communities Served" delay={400} />
          <Stat value={97} suffix="%" label="Success Rate" delay={600} />
        </div>

        <div
          className={`mt-20 rounded-2xl bg-gradient-to-r from-primary-50 to-secondary-50 p-8 md:p-12 ${isInView ? "animate-scale-in" : "opacity-0"}`}
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                Every donation makes a lasting impact
              </h3>
              <p className="mb-6 text-gray-700">
                Your support helps us provide essential resources, counseling
                services, and ongoing support to children and families
                throughout the adoption process and beyond.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() =>
                    document
                      .getElementById("donate")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-full bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-primary-600"
                >
                  Donate Now
                </button>
                <button className="rounded-full border-2 border-primary px-6 py-3 font-medium text-primary transition-all duration-300 hover:bg-primary/5">
                  Become a Volunteer
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Happy family"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 max-w-[180px] rounded-lg bg-white p-4 shadow-lg">
                <div className="text-xl font-bold text-primary-600">$1.2M+</div>
                <div className="text-sm text-gray-600">
                  Raised to support our cause
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
