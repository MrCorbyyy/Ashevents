import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { WhyChoose } from "../components/WhyChoose";
import { Gallery } from "../components/Gallery";
import { BirthdayPackages } from "../components/BirthdayPackages";
import { Testimonials } from "../components/Testimonials";
import { ContactChannels } from "../components/ContactChannels";
import { CEOSection } from "../components/CEOSection";


export default function Home() {
  return (
    <>
      <Hero />
      <Services isPreview={true} />
      <Gallery isPreview={true} />
      <CEOSection />
      <WhyChoose />
      <BirthdayPackages isPreview={true} />
      <Testimonials />
      <ContactChannels />

    </>
  );
}
