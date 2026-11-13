import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Proof } from "@/components/Proof";
import { SelectedWork } from "@/components/SelectedWork";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Experience />
        <Services />
        <Proof />
        <Contact />
      </main>
    </>
  );
}
