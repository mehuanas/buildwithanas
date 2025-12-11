import React from "react";

const demoProjects = [
  {
    title: "Taskify - Todo App",
    desc: "A minimal, fast todo app with local storage, filters and drag-and-drop ordering.",
    tech: ["React", "Tailwind", "LocalStorage"],
    live: "#",
    code: "#",
  },
  {
    title: "Weatherly - Weather Dashboard",
    desc: "A responsive weather dashboard using a public API with search and hourly forecasts.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    code: "#",
  },
  {
    title: "DevBlog - Static Blog",
    desc: "A lightweight blog template with markdown support and SEO-friendly structure.",
    tech: ["React", "MDX", "Vite"],
    live: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      style={{ backgroundColor: "var(--bg-3)" }}
      className="w-full py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "var(--heading)" }}
          >
            Projects
          </h2>
          <p
            className="mt-2 text-sm sm:text-base max-w-2xl mx-auto"
            style={{ color: "var(--text)" }}
          >
            A few demo projects — responsive, modern, and interactive. Click to
            view live demo or source.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((p, i) => (
            <article
              key={p.title}
              className={`project-card skill-badge p-5 rounded-xl`}
              style={{ animationDelay: `${0.05 * i}s` }}
              aria-labelledby={`project-${i}`}
            >
              <div className="project-image">
                <span style={{ color: "var(--accent-text)", fontSize: "1rem" }}>
                  {p.title}
                </span>
              </div>

              <h3
                id={`project-${i}`}
                className="text-lg font-semibold"
                style={{ color: "var(--heading)" }}
              >
                {p.title}
              </h3>

              <p className="mt-2 text-sm" style={{ color: "var(--text)" }}>
                {p.desc}
              </p>

              <div className="project-tags mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: "rgba(124,58,237,0.08)",
                      color: "var(--accent-from)",
                      border: "1px solid rgba(124,58,237,0.08)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* <div className="mt-6 flex gap-3">
                <a
                  href={p.live}
                  className="cta-button px-4 py-2 rounded-md text-sm font-semibold"
                  style={{
                    background: 'linear-gradient(90deg, var(--accent-from), var(--accent-to))',
                    color: 'var(--accent-text)'
                  }}
                >
                  Live
                </a>
                <a
                  href={p.code}
                  className="px-4 py-2 rounded-md text-sm font-medium"
                  style={{
                    background: 'transparent',
                    color: 'var(--text)',
                    border: '1px solid rgba(255,255,255,0.04)'
                  }}
                >
                  Code
                </a>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
