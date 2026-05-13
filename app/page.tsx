import StreamingPopup from "@/app/components/StreamingPopup";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Music from "@/app/components/Music";
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
        <section id="music">
          <Music />
        </section>
      </main>
      <footer id="contact">
        <Footer />
      </footer>
    </>
  );
}
