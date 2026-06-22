import { Training } from "../components/Training";
import { ContactChannels } from "../components/ContactChannels";
import { EventRoadmap } from "../components/EventRoadmap";

export default function TrainingPage() {
  return (
    <div className="pt-20">
      <Training isPreview={false} />
      <EventRoadmap />
      <ContactChannels />
    </div>
  );
}
