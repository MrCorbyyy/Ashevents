import { Gallery } from "../components/Gallery";
import { EventRoadmap } from "../components/EventRoadmap";

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <Gallery isPreview={false} />
      <EventRoadmap />
    </div>
  );
}
