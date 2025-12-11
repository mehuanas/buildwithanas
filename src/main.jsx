import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/* Small scroll-reveal initializer:
   - Uses IntersectionObserver to toggle `.revealed` while elements are in view
   - Removes the animation when elements leave the viewport (so animations replay)
   - Applies a small per-element stagger when entering
*/
function initScrollReveal() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window))
    return;

  const selector =
    ".reveal, .skill-badge, .project-card, .card-hover, .fade-in-heading, .fade-in-text, .fade-in-button";
  const elements = Array.from(document.querySelectorAll(selector));
  if (!elements.length) return;

  const indexMap = new Map(elements.map((el, i) => [el, i]));
  const timeoutMap = new WeakMap();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        const idx = indexMap.get(el) ?? 0;

        if (entry.isIntersecting) {
          // small stagger based on index (caps at 300ms)
          const delay = Math.min(300, idx * 60);
          const t = setTimeout(() => el.classList.add("revealed"), delay);
          timeoutMap.set(el, t);
        } else {
          // leaving viewport: cancel pending reveal and remove class so it can replay
          const t = timeoutMap.get(el);
          if (t) {
            clearTimeout(t);
            timeoutMap.delete(el);
          }
          el.classList.remove("revealed");
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((el) => observer.observe(el));
}

// Initialize after first paint so the DOM is ready
requestAnimationFrame(() => setTimeout(initScrollReveal, 60));
