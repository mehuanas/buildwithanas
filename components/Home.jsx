import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-20"
    >
      <h1
        className="fade-in-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6"
        style={{ color: "var(--heading)" }}
      >
        Welcome to My Portfolio
      </h1>
      <p
        className="fade-in-text text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-8 sm:mb-10 px-2"
        style={{ color: "var(--muted)" }}
      >
        Hi, I'm MD Anash. I build modern, responsive websites and web apps using
        the latest technologies.
      </p>
      <a
        href="#projects"
        className="fade-in-button cta-button text-base sm:text-lg md:text-xl lg:text-2xl inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, var(--accent-from), var(--accent-to))",
          color: "var(--accent-text)",
        }}
      >
        View Projects
      </a>
    </section>
  );
};

export default Home;
