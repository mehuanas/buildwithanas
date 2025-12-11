import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="w-full py-4 px-4 fixed top-0 z-50"
      style={{
        background: "rgba(7, 10, 22, 0.64)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div
          className="logo text-2xl sm:text-3xl md:text-4xl font-extrabold"
          style={{ color: "var(--heading)" }}
        >
          Portfolio
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center text-sm md:text-base gap-6 md:gap-8">
          <a
            className="nav-link1 navlinks px-4 py-2 rounded-lg relative"
            href="#home"
            style={{ color: "var(--heading)" }}
          >
            Home
          </a>
          <a
            className="nav-link2 navlinks px-4 py-2 rounded-lg relative"
            href="#about"
            style={{ color: "var(--heading)" }}
          >
            About
          </a>
          <a
            className="nav-link3 navlinks px-4 py-2 rounded-lg relative"
            href="#projects"
            style={{ color: "var(--heading)" }}
          >
            Projects
          </a>
          <a
            className="nav-link4 navlinks px-4 py-2 rounded-lg relative"
            href="#contact"
            style={{ color: "var(--heading)" }}
          >
            Contact
          </a>
        </div>

        {/* Hamburger Menu - Hidden on Desktop */}
        <button
          className={`md:hidden flex flex-col gap-1.5 cursor-pointer ${
            isOpen ? "active" : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          style={{ color: "var(--heading)" }}
        >
          <span
            className={`w-6 h-0.5 bg-current transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-current transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-current transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation - Hidden on Desktop */}
      {isOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-4 pb-4 px-4">
          <div className="flex flex-col gap-3">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                className="px-4 py-3 rounded-xl text-center"
                href={href}
                onClick={closeMenu}
                style={{
                  color: "var(--heading)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
