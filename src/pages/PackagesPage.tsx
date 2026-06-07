import { BirthdayPackages } from "../components/BirthdayPackages";
import { ContactChannels } from "../components/ContactChannels";
import { EventRoadmap } from "../components/EventRoadmap";

export default function PackagesPage() {
  return (
    <div className="pt-20">
      <BirthdayPackages isPreview={false} />
      <EventRoadmap />
      <ContactChannels />
    </div>
  );
}
