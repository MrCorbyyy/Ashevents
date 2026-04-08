import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { BirthdayPackages } from "./components/BirthdayPackages";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Gallery />
        <BirthdayPackages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
