import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 pb-8 pt-16 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 border-b border-gray-800 pb-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="from-primary-300 to-secondary-300 mb-4 bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
              Yallakafala
            </h3>
            <p className="mb-6 max-w-md text-gray-400">
              Our mission is to connect orphaned children with loving families,
              creating brighter futures and transforming lives through
              compassion and care.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    aria-label={social}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors duration-300 hover:bg-primary"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {social === "facebook" && (
                        <path d="M12 0C5.383 0 0 5.383 0 12c0 5.43 3.588 10.044 8.571 11.576V14.971h-2.4V12h2.4V9.6c0-3.6 1.7-5.2 5.1-5.2 1.2 0 2.4.2 2.4.2v2.6h-1.4c-1.317 0-1.7.813-1.7 1.7v1.9h2.9l-.4 2.971h-2.5v8.605C20.412 22.044 24 17.43 24 12c0-6.617-5.383-12-12-12z" />
                      )}
                      {social === "twitter" && (
                        <path d="M21.533 7.112a8.01 8.01 0 0 1-2.312.636A4.03 4.03 0 0 0 21.01 5.4a8.065 8.065 0 0 1-2.555.98A4.01 4.01 0 0 0 15.638 5a4.01 4.01 0 0 0-4.01 4.01c0 .315.035.621.102.914A11.387 11.387 0 0 1 3.85 5.85a4.01 4.01 0 0 0-.544 2.016c0 1.389.709 2.614 1.785 3.329a4.002 4.002 0 0 1-1.814-.5v.05c0 1.94 1.377 3.56 3.202 3.937a4.01 4.01 0 0 1-1.806.069 4.01 4.01 0 0 0 3.742 2.785 8.03 8.03 0 0 1-4.977 1.718c-.324 0-.645-.019-.96-.057a11.343 11.343 0 0 0 6.145 1.801c7.374 0 11.407-6.114 11.407-11.407 0-.173-.004-.35-.01-.522a8.19 8.19 0 0 0 2.01-2.09z" />
                      )}
                      {social === "instagram" && (
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.92.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                      )}
                      {social === "linkedin" && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.223 0h.002z" />
                      )}
                    </svg>
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", id: "mission" },
                { name: "Our Impact", id: "impact" },
                { name: "Success Stories", id: "stories" },
                { name: "Donate", id: "donate" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-300 mr-3 mt-0.5 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>123 Hope Street, Cairo, Egypt</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-300 mr-3 mt-0.5 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-300 mr-3 mt-0.5 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@yallakafala.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Yallakafala. All rights reserved.</p>
          <p className="mt-2">
            Dedicated to connecting orphaned children with loving homes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
