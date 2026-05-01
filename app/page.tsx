import StreamingPopup from "@/app/components/StreamingPopup";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Music from "@/app/components/Music";
import Gallery from "@/app/components/Gallery";
import Team from "@/app/components/Team";
import Footer from "@/app/components/Footer";

export default function HomePage() {
  return (
    <>
      <StreamingPopup />
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="music">
          <Music />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="team">
          <Team />
        </section>
      </main>
      <footer id="contact">
        <Footer />
      </footer>
    </>
  );
}
