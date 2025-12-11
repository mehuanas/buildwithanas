import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{ backgroundColor: "var(--bg-4)" }}
      className="w-full py-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 reveal">
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "var(--heading)" }}
          >
            Let's Connect
          </h2>
          <p
            className="mt-2 text-sm sm:text-base max-w-2xl mx-auto"
            style={{ color: "var(--text)" }}
          >
            Interested in collaborating or have a question? Choose a contact
            method below — I typically respond within a day or two.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email */}
          <a
            href="mailto:mdanash483@email.com"
            className="reveal card-hover project-card p-6 rounded-xl flex flex-col items-center text-center"
            aria-label="Send email"
            rel="noopener noreferrer"
          >
            <div
              className="contact-icon mb-4 flex items-center justify-center rounded-xl"
              style={{
                width: 72,
                height: 72,
                background: "var(--accent-from)",
                color: "var(--accent-text)",
              }}
            >
              <i className="ri-mail-line text-3xl" aria-hidden="true"></i>
            </div>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "var(--heading)" }}
            >
              Email
            </h3>
            <p className="text-sm" style={{ color: "var(--text)" }}>
              mdanash483@email.com
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/mhuanas/"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal card-hover project-card p-6 rounded-xl flex flex-col items-center text-center"
            aria-label="Open Instagram profile"
          >
            <div
              className="contact-icon mb-4 flex items-center justify-center rounded-xl"
              style={{
                width: 72,
                height: 72,
                background: "var(--accent-from)",
                color: "var(--accent-text)",
              }}
            >
              <i className="ri-instagram-line text-3xl" aria-hidden="true"></i>
            </div>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "var(--heading)" }}
            >
              Instagram
            </h3>
            <p className="text-sm" style={{ color: "var(--text)" }}>
              @mhuanas
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mehuanas/"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal card-hover project-card p-6 rounded-xl flex flex-col items-center text-center"
            aria-label="Open GitHub profile"
          >
            <div
              className="contact-icon mb-4 flex items-center justify-center rounded-xl"
              style={{
                width: 72,
                height: 72,
                background: "var(--accent-from)",
                color: "var(--accent-text)",
              }}
            >
              <i className="ri-github-line text-3xl" aria-hidden="true"></i>
            </div>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "var(--heading)" }}
            >
              GitHub
            </h3>
            <p className="text-sm" style={{ color: "var(--text)" }}>
              github.com/mehuanas
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
