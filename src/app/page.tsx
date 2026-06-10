import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VeriTalent from "@/components/VeriTalent";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <VeriTalent />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
