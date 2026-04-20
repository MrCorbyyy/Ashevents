import { BirthdayPackages } from "../components/BirthdayPackages";
import { Contact } from "../components/Contact";

export default function PackagesPage() {
  return (
    <div className="pt-20">
      <BirthdayPackages isPreview={false} />
      <Contact />
    </div>
  );
}
