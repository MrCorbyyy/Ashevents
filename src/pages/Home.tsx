import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Gallery } from "../components/Gallery";
import { BirthdayPackages } from "../components/BirthdayPackages";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services isPreview={true} />
      <Gallery isPreview={true} />
      <BirthdayPackages isPreview={true} />
      <Testimonials />
      <Contact />
    </>
  );
}
