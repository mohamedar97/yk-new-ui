"use client";
import DonateSection from "@/components/Homepage/DonateSection";
import Footer from "@/components/Homepage/Footer";
import Header from "@/components/Homepage/Header";
import HeroSection from "@/components/Homepage/HeroSection";
import ImpactSection from "@/components/Homepage/ImpactSection";
import MissionSection from "@/components/Homepage/MissionSection";
import StoriesSection from "@/components/Homepage/StoriesSection";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <ImpactSection />
        <StoriesSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
