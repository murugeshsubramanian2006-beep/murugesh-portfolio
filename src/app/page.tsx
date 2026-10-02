import Scene3D from "@/components/Scene3D";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Continuous Scroll-Driven 3D Canvas Timeline */}
      <Scene3D />

      {/* Editorial Content Flow */}
      <div className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
