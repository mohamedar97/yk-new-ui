import React, { useState, useEffect } from "react";
import Button from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 py-3 shadow-md backdrop-blur-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-bold text-transparent">
            Yallakafala
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {["mission", "impact", "stories", "donate"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize text-gray-800 transition-colors duration-300 hover:text-primary"
            >
              {item}
            </button>
          ))}
          <Button variant="primary" onClick={() => scrollToSection("donate")}>
            Donate Now
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="text-gray-800 md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 transform bg-white transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } pt-20 md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          {["mission", "impact", "stories", "donate"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-xl capitalize text-gray-800 transition-colors duration-300 hover:text-primary"
            >
              {item}
            </button>
          ))}
          <Button
            variant="primary"
            onClick={() => scrollToSection("donate")}
            fullWidth
          >
            Donate Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
