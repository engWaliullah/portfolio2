import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Services from '@/components/services';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}