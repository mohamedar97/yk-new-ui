import React, { useRef, useState } from "react";

interface Story {
  id: number;
  name: string;
  image: string;
  quote: string;
  story: string;
}

const stories: Story[] = [
  {
    id: 1,
    name: "Aisha & Malik",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    quote:
      "Finding each other was like finding the missing piece of our hearts.",
    story:
      "After three years in the system, 8-year-old Malik found his forever home with Aisha. Their journey began with weekend visits that blossomed into an unbreakable bond. Today, Malik is thriving in school and has discovered a passion for art that Aisha nurtures daily.",
  },
  {
    id: 2,
    name: "The Hassan Family",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    quote:
      "Our home was full of love, but something was missing until Noor came into our lives.",
    story:
      "When Karim and Leila Hassan decided to adopt, they were immediately drawn to 5-year-old Noor's profile. After months of preparation and meetings, they welcomed her home. The adjustment wasn't without challenges, but with patience and support from Yallakafala, they've become an inseparable family unit.",
  },
  {
    id: 3,
    name: "Omar & Sara",
    image:
      "https://images.unsplash.com/photo-1484665754804-74b091211472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    quote: "We thought we were rescuing them, but in truth, they rescued us.",
    story:
      "After learning they couldn't have biological children, Omar and Sara turned to adoption. Through Yallakafala, they connected with siblings Zayn and Amira, ages 6 and 4. The transition was smoother than expected, and now their house is filled with laughter, games, and the beautiful chaos of family life.",
  },
];

const StoryCard = ({
  story,
  isActive,
  onClick,
}: {
  story: Story;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`relative cursor-pointer transition-all duration-500 ${
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-70"
      }`}
      onClick={onClick}
    >
      <div className="group relative overflow-hidden rounded-xl">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={story.image}
            alt={story.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="mb-2 text-xl font-bold">{story.name}</h3>
          <p className="italic text-white/90">{story.quote}</p>
        </div>

        <div
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/80 to-secondary/80 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        >
          <p className="text-center text-white">{story.story}</p>
        </div>
      </div>
    </div>
  );
};

const StoriesSection = () => {
  const [activeStory, setActiveStory] = useState(stories[0]?.id ?? 0);
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
    <section
      id="stories"
      className="section-padding bg-gray-50"
      ref={sectionRef}
    >
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-6 inline-block rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
            Success Stories
          </span>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Lives Transformed Through Love
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-gradient-to-r from-primary to-secondary"></div>
          <p className="text-lg text-gray-600">
            Every family has a unique story. Here are just a few of the
            beautiful journeys that began with Yallakafala.
          </p>
        </div>

        <div
          className={`grid gap-6 md:grid-cols-3 md:gap-8 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          {stories.map((story, index) => (
            <StoryCard
              key={story.id}
              story={story}
              isActive={activeStory === story.id}
              onClick={() => setActiveStory(story.id)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
            These are just a few of the hundreds of stories we&apos;ve been
            privileged to be part of. Every child deserves to write their story
            as part of a loving family.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("donate")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center font-medium text-primary transition-colors hover:text-primary-600"
          >
            <span>Help us create more stories</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
