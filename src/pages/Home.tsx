import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { OtherServices } from "../components/OtherServices";
import { WhyChoose } from "../components/WhyChoose";
import { Gallery } from "../components/Gallery";
import { Training } from "../components/Training";
import { Testimonials } from "../components/Testimonials";
import { ContactChannels } from "../components/ContactChannels";
import { CEOSection } from "../components/CEOSection";


export default function Home() {
  return (
    <>
      <Hero />
      <Services isPreview={true} />
      <OtherServices isPreview={true} />
      <Gallery isPreview={true} />
      <CEOSection />
      <WhyChoose />
      <Training isPreview={true} />
      <Testimonials />
      <ContactChannels />

    </>
  );
}
