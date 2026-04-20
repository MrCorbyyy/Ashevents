import { Services } from "../components/Services";
import { Contact } from "../components/Contact";

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Services isPreview={false} />
      <Contact />
    </div>
  );
}
