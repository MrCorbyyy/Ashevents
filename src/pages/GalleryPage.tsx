import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <Gallery isPreview={false} />
      <Contact />
    </div>
  );
}
