import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';

function App() {
  return (
    <div className="relative bg-white text-black dark:bg-black dark:text-white min-h-screen overflow-hidden transition-all duration-300">
      <Navbar />
      {/* Global particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleCount={250}
          particleSpread={6}
          speed={0.4}
          alphaParticles={true}
          particleColors={["#60a5fa", "#3b82f6", "#1e3a8a"]}
          particleBaseSize={70}
          sizeRandomness={1.1}
          disableRotation={false}
          moveParticlesOnHover={true}
        />
      </div>
      <main className="relative z-10 scroll-smooth">
        <Landing />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
