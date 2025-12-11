import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
const App = () => {
  return (
    <main className="overflow-hidden">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;
