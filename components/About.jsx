const About = () => {
  return (
    <section
      id="about"
      className="w-full h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center pt-0 sm:pt-0"
      style={{ backgroundColor: "var(--bg-2)" }}
    >
      <div className="max-w-4xl mx-auto py-12 sm:py-16 lg:py-20">
        <div
          className="rounded-xl shadow-lg p-6 sm:p-8 lg:p-10"
          style={{ backgroundColor: "var(--card)" }}
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
            style={{ color: "var(--heading)" }}
          >
            About Me
          </h2>
          <p
            className="text-sm sm:text-base lg:text-lg leading-relaxed"
            style={{ color: "var(--text)" }}
          >
            Hi, I'm Anash, a passionate web developer and a current BCA
            (Bachelor of Computer Applications) student. I specialize in backend
            development, working primarily with Node.js, Express.js, and MongoDB
            to build scalable and efficient web applications. <br />
            <br />
            Alongside backend, I also have a solid grasp of frontend
            technologies such as HTML, CSS, JavaScript, Tailwind CSS, and React.
            This full-stack skill set allows me to take projects from concept to
            deployment and collaborate effectively across all parts of a
            development team. <br />
            <br />
            As a student and developer, I'm always eager to grow, learn new
            technologies, and take on meaningful projects that challenge me to
            become better every day.
          </p>
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6"
              style={{ color: "var(--heading)" }}
            >
              Tools I Use
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
              <span
                className="skill-badge px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-center"
                style={{
                  backgroundColor: "rgba(124,58,237,0.08)",
                  color: "var(--accent-from)",
                  border: "1px solid rgba(124,58,237,0.08)",
                }}
              >
                HTML
              </span>

              <span
                className="skill-badge px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-center"
                style={{
                  backgroundColor: "rgba(124,58,237,0.08)",
                  color: "var(--accent-from)",
                  border: "1px solid rgba(124,58,237,0.08)",
                }}
              >
                CSS
              </span>
              <span
                className="skill-badge px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-center"
                style={{
                  backgroundColor: "rgba(124,58,237,0.08)",
                  color: "var(--accent-from)",
                  border: "1px solid rgba(124,58,237,0.08)",
                }}
              >
                Tailwind CSS
              </span>
              <span
                className="skill-badge px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-center"
                style={{
                  backgroundColor: "rgba(124,58,237,0.08)",
                  color: "var(--accent-from)",
                  border: "1px solid rgba(124,58,237,0.08)",
                }}
              >
                JavaScript
              </span>
              <span
                className="skill-badge px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-center"
                style={{
                  backgroundColor: "rgba(124,58,237,0.08)",
                  color: "var(--accent-from)",
                  border: "1px solid rgba(124,58,237,0.08)",
                }}
              >
                React
              </span>
              <span
                className="skill-badge px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-center"
                style={{
                  backgroundColor: "rgba(124,58,237,0.08)",
                  color: "var(--accent-from)",
                  border: "1px solid rgba(124,58,237,0.08)",
                }}
              >
                Node.js
              </span>
              <span
                className="skill-badge px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-center"
                style={{
                  backgroundColor: "rgba(124,58,237,0.08)",
                  color: "var(--accent-from)",
                  border: "1px solid rgba(124,58,237,0.08)",
                }}
              >
                Express.js
              </span>
              <span
                className="skill-badge px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-center"
                style={{
                  backgroundColor: "rgba(124,58,237,0.08)",
                  color: "var(--accent-from)",
                  border: "1px solid rgba(124,58,237,0.08)",
                }}
              >
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
