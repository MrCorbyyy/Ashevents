import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface GalleryItem {
  id: number;
  image: string;
  label: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "public/images/birthday celeb.jpg",
    label: "Birthday Celebration",
    category: "Birthday",
  },
  {
    id: 2,
    image: "public/images/setup.jpg",
    label: "Balloon Setup",
    category: "Balloon",
  },
  {
    id: 3,
    image: "public/images/flower_bouquet_4k.png",
    label: "Flower Bouquet",
    category: "Bouquet",
  },
  {
    id: 4,
    image: "public/images/backdrops bw.jpg",
    label: "Luxury Backdrop",
    category: "Backdrop",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1657447512778-7d6f7a0d5b91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGljbmljJTIwbHV4dXJ5JTIwc2V0dXB8ZW58MXx8fHwxNzc1NjM3MjA2fDA&ixlib=rb-4.1.0&q=80&w=600",
    label: "Luxury Picnic Setup",
    category: "Picnic",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1768776182889-607915c299a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsb29uJTIwYXJjaCUyMGRlY29yYXRpb24lMjBldmVudHxlbnwxfHx8fDE3NzU2MzcyMDh8MA&ixlib=rb-4.1.0&q=80&w=600",
    label: "Naming Ceremony",
    category: "Ceremony",
  },
  {
    id: 7,
    image: "public/images/money_bouquet_4k.png",
    label: "Money Bouquet Gift",
    category: "Bouquet",
  },
  {
    id: 8,
    image: "public/images/table setup.jpg",
    label: "Table Setup",
    category: "Ceremony",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop",
    label: "Dreamy Engagement",
    category: "Ceremony",
  },
];

const categories = ["All", "Birthday", "Balloon", "Bouquet", "Backdrop", "Picnic", "Ceremony"];

interface GalleryProps {
  isPreview?: boolean;
}

export function Gallery({ isPreview = false }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const displayItems = isPreview ? galleryItems.slice(0, 5) : filteredItems;

  return (
    <section id="gallery" className={`py-20 ${isPreview ? 'bg-white' : 'bg-gradient-to-b from-white to-blue-50/30'}`}>
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-blue-600 uppercase tracking-widest mb-3 text-[0.8rem] font-semibold">
            {isPreview ? "Sneak Peek" : "Our Full Work"}
          </span>
          <h2 className="text-gray-900 mb-4 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold">
            Event{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              Gallery
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-[1.7]">
            {isPreview
              ? "A glimpse into the magical events we've crafted for our amazing clients."
              : "Discover the full range of beautiful celebrations and curated gifts we've delivered."}
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-sky-500" />
            <div className="h-2 w-2 rounded-full bg-blue-600" />
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky-500 to-blue-400" />
          </div>
        </div>

        {/* Filter Tabs (Hidden in Preview) */}
        {!isPreview && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full border transition-all duration-200 text-[0.82rem] font-medium ${activeCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-transparent shadow-md"
                  : "border-blue-200 text-gray-500 hover:border-blue-400 hover:text-blue-600"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-slate-100 aspect-square"
              onClick={() => setLightboxImg(item.image)}
            >
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Captions are now always visible at the bottom for clarity since hover is removed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-[0.82rem] font-semibold leading-tight">
                  {item.label}
                </p>
                <span className="text-sky-300 text-[0.72rem] font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

          <div className="mt-12 text-center">
            <div className="inline-block relative group p-[2px] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20">
              {/* Deep Orbiting Beam */}
              <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#1e40af_5%,#2563eb_10%,#1e40af_15%,transparent_20%)] opacity-100" />

              <Link
                to="/gallery"
                className="relative inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 rounded-full transition-all duration-300 text-[0.9rem] font-bold group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white"
              >
                View Full Gallery
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-5 right-5 text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            onClick={() => setLightboxImg(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImg}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
