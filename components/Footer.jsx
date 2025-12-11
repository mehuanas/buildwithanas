import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      role="contentinfo"
      style={{ backgroundColor: "var(--bg-2)" }}
      className="w-full py-8 mt-12 reveal"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <div
            className="text-xl font-extrabold"
            style={{ color: "var(--heading)" }}
          >
            Portfolio
          </div>
          <p className="text-sm mt-1" style={{ color: "var(--text)" }}>
            Built with React • © {new Date().getFullYear()} MD Anash
          </p>
        </div>

        <div className="flex items-center gap-4">
          <nav aria-label="Social links" className="flex gap-3">
            <a
              href="mailto:mdanash483@email.com"
              className="p-2 rounded-md card-hover"
              aria-label="Send email"
              style={{ color: "var(--heading)" }}
            >
              <i className="ri-mail-line text-2xl" aria-hidden="true"></i>
            </a>

            <a
              href="https://github.com/mehuanas/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md card-hover"
              aria-label="Open GitHub profile"
              style={{ color: "var(--heading)" }}
            >
              <i className="ri-github-line text-2xl" aria-hidden="true"></i>
            </a>

            <a
              href="https://www.instagram.com/mhuanas/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md card-hover"
              aria-label="Open Instagram profile"
              style={{ color: "var(--heading)" }}
            >
              <i className="ri-instagram-line text-2xl" aria-hidden="true"></i>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md card-hover"
              aria-label="Open LinkedIn profile"
              style={{ color: "var(--heading)" }}
            >
              <i className="ri-linkedin-line text-2xl" aria-hidden="true"></i>
            </a>
          </nav>

          <a
            href="#home"
            className="ml-3 px-3 py-2 rounded-full cta-button text-sm font-medium"
            style={{
              background:
                "linear-gradient(90deg, var(--accent-from), var(--accent-to))",
              color: "var(--accent-text)",
            }}
            aria-label="Back to top"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
