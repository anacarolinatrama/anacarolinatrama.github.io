import { About } from "@/components/About";
import { AiSection } from "@/components/AiSection";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/Projects";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Ribbon } from "@/components/Ribbon";
import { ScrollFx } from "@/components/ScrollFx";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="relative overflow-x-clip bg-cream">
        <ScrollFx />
        <Header />
        <main>
          <Hero />
          <Ribbon />
          <About />
          <Projects />
          <Experience />
          <AiSection />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
