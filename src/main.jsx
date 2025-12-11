import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* Small scroll-reveal initializer:
   - Keeps animation definitions in CSS
   - Uses IntersectionObserver to add `.revealed` when elements enter the viewport
   - Adds a small per-element delay based on the document order for a subtle stagger
*/
function initScrollReveal() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  // selector for elements we want to reveal on scroll
  const selector = '.reveal, .skill-badge, .project-card, .card-hover, .fade-in-heading, .fade-in-text, .fade-in-button'
  const elements = Array.from(document.querySelectorAll(selector))
  if (!elements.length) return

  const indexMap = new Map(elements.map((el, i) => [el, i]))

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const el = entry.target
      const idx = indexMap.get(el) ?? 0
      // small stagger based on index (caps at 300ms)
      const delay = Math.min(300, idx * 60)
      setTimeout(() => {
        el.classList.add('revealed')
      }, delay)
      obs.unobserve(el)
    })
  }, { threshold: 0.12 })

  elements.forEach(el => observer.observe(el))
}

// Initialize after the first paint so the DOM is ready
requestAnimationFrame(() => {
  // also wait a little so React has mounted everything
  setTimeout(initScrollReveal, 60)
})
