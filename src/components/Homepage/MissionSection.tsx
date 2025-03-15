import React, { useEffect, useRef } from "react";

const MissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

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

  return (
    <section
      id="mission"
      className="section-padding bg-gray-50"
      ref={sectionRef}
    >
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="bg-primary-50 text-primary-700 mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-medium">
            Our Mission
          </span>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Creating Families, Transforming Lives
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-gradient-to-r from-primary to-secondary"></div>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div
            className={`${isInView ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/40 to-secondary/40"></div>
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Children smiling"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div
            className={`space-y-6 ${isInView ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <p className="text-lg leading-relaxed text-gray-700">
              At Yallakafala, we believe that every child deserves the love,
              security, and opportunity that comes with being part of a family.
              Our mission is simple but profound: to connect orphaned children
              with loving homes.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              We work tirelessly to:
            </p>

            <ul className="space-y-4">
              {[
                "Find and screen responsible, loving families",
                "Support children through the transition into their new homes",
                "Provide ongoing resources to ensure successful family integration",
                "Advocate for policies that make adoption accessible and safe",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
