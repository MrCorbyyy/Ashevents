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
  // ── Birthday ──────────────────────────────────────────────
  {
    id: 1,
    image: "/images/birthday packages..jpg",
    label: "Birthday Package",
    category: "Birthday",
  },
  {
    id: 12,
    image: "/images/package 1.jpg",
    label: "Birthday Package",
    category: "Birthday",
  },
  {
    id: 19,
    image: "/images/birthday packages.jpg",
    label: "Birthday Package",
    category: "Birthday",
  },
  {
    id: 20,
    image: "/images/birthday celeb.jpg",
    label: "Birthday Package",
    category: "Birthday",
  },
  {
    id: 21,
    image: "/images/package 2.jpg",
    label: "Birthday Package",
    category: "Birthday",
  },
  {
    id: 22,
    image: "/images/basic package.jpg",
    label: " Birthday Package",
    category: "Birthday",
  },
  {
    id: 23,
    image: "/images/basic package 1.jpg",
    label: "Birthday Package",
    category: "Birthday",
  },
  // ── Balloon ───────────────────────────────────────────────
  {
    id: 5,
    image: "/images/premium package..jpg",
    label: "Room Decor",
    category: "Decor",
  },
  {
    id: 6,
    image: "/images/luxury package.jpg",
    label: "Room Decor",
    category: "Decor",
  },
  {
    id: 9,
    image: "/images/bouquet 2.png",
    label: "Balloon Bouquet",
    category: "Balloon",
  },
  {
    id: 15,
    image: "/images/ballon decor 7.jpg",
    label: "Room Decor",
    category: "Decor",
  },
  {
    id: 18,
    image: "/images/standard package.jpg",
    label: "Room Decor",
    category: "Decor",
  },
  {
    id: 24,
    image: "/images/ballon decor.jpg",
    label: "Room Decor",
    category: "Decor",
  },
  {
    id: 25,
    image: "/images/ballon decor 1.jpg",
    label: "Room Decor Setup",
    category: "Decor",
  },
  {
    id: 26,
    image: "/images/ballon decor 2.jpg",
    label: "Room Decor",
    category: "Decor",
  },
  {
    id: 27,
    image: "/images/ballon decor 3.jpg",
    label: "Room Decor",
    category: "Decor",
  },
  {
    id: 28,
    image: "/images/ballon decor 4.jpg",
    label: "Room Decor",
    category: "Decor",
  },
  {
    id: 29,
    image: "/images/ballon decor 5.jpg",
    label: "Room Decor",
    category: "Decor",
  },
  {
    id: 30,
    image: "/images/ballon decor 6.jpg",
    label: "Room Decor",
    category: "Decor",
  },
  {
    id: 31,
    image: "/images/ballon decor 8.jpg",
    label: "Room Decor",
    category: "Decor",
  },
  {
    id: 32,
    image: "/images/ballon boquet 1.png",
    label: "Balloon Bouquet ",
    category: "Balloon",
  },
  {
    id: 33,
    image: "/images/bq 1.jpg",
    label: "Balloon Bouquet ",
    category: "Balloon",
  },
  {
    id: 34,
    image: "/images/bq 4.jpg",
    label: "Balloon Bouquet",
    category: "Balloon",
  },
  {
    id: 35,
    image: "/images/bq 3.jpg",
    label: "Balloon Bouquet",
    category: "Balloon",
  },
  {
    id: 36,
    image: "/images/bq 5.jpg",
    label: "Balloon Bouquet",
    category: "Balloon",
  },
  {
    id: 37,
    image: "/images/luxury package 1.jpg",
    label: "Room Decor",
    category: "Decor",
  },
  {
    id: 38,
    image: "/images/premium package 2..jpg",
    label: "Room Decor",
    category: "Decor",
  },
  {
    id: 39,
    image: "/images/room decor.jpg",
    label: " Balloon Decor",
    category: "Decor",
  },
  // ── Bouquet ───────────────────────────────────────────────
  {
    id: 2,
    image: "/images/10 bouquet.4k.png",
    label: "Money Bouquet",
    category: "Bouquet",
  },
  {
    id: 3,
    image: "/images/flower_bouquet_4k.png",
    label: "Flower Bouquet with card",
    category: "Bouquet",
  },
  {
    id: 7,
    image: "/images/money_bouquet_4k.png",
    label: "Money Bouquet",
    category: "Bouquet",
  },
  {
    id: 14,
    image: "/images/fb 4k 2.png",
    label: "Flower Bouquet with Custom Bows",
    category: "Bouquet",
  },
  {
    id: 17,
    image: "/images/MB 4K 5.jpg",
    label: "Money Bouquet",
    category: "Bouquet",
  },
  {
    id: 40,
    image: "/images/MB 4k 1.png",
    label: "Money Bouquet",
    category: "Bouquet",
  },
  {
    id: 41,
    image: "/images/MB 4K 2.png",
    label: "Money Bouquet",
    category: "Bouquet",
  },
  {
    id: 42,
    image: "/images/MB 4K 3.png",
    label: "Money Bouquet",
    category: "Bouquet",
  },
  {
    id: 43,
    image: "/images/MB 4K 4.jpg",
    label: "Money Bouquet ",
    category: "Bouquet",
  },
  {
    id: 44,
    image: "/images/MB 4K 6.jpg",
    label: "Money Bouquet",
    category: "Bouquet",
  },
  {
    id: 45,
    image: "/images/money bouquet 22.jpg",
    label: "Money Bouquet",
    category: "Bouquet",
  },
  {
    id: 46,
    image: "/images/fb 4k 3.png",
    label: "Flower Bouquet with Custom Bows",
    category: "Bouquet",
  },
  {
    id: 47,
    image: "/images/fb 4k 4.png",
    label: "Flower Bouquet with Baby Breath",
    category: "Flower Bouquet",
  },
  {
    id: 48,
    image: "/images/fb 4k 5.png",
    label: "Flower Bouquet with Baby Breath",
    category: "Flower Bouquet",
  },
  {
    id: 49,
    image: "/images/fb 4k 6.png",
    label: "Flower Bouquet with Baby Breath",
    category: "Flower Bouquet",
  },
  {
    id: 50,
    image: "/images/flower bouquet 4k 1.jpg",
    label: "Flower Bouquet with Custom Bows",
    category: "Bouquet",
  },
  {
    id: 51,
    image: "/images/rose bouquet.png",
    label: "Flower Bouquet with Baby Breath",
    category: "Flower Bouquet",
  },
  {
    id: 51,
    image: "images/flower bouquet a.png",
    label: "Flower Bouquet with initials",
    category: "Bouquet",
  },
  {
    id: 8,
    image: "/images/flower bouquet!.png",
    label: " Customized Flower Bouquet",
    category: "Bouquet",
  },

  // ── Backdrop ──────────────────────────────────────────────
  {
    id: 4,
    image: "/images/backdrops bw.jpg",
    label: "Backdrop",
    category: "Backdrop",
  },
  {
    id: 10,
    image: "/images/backdrop 2.jpg",
    label: "Backdrop",
    category: "Backdrop",
  },
  {
    id: 11,
    image: "/images/backdrops.jpg",
    label: "Backdrop",
    category: "Backdrop",
  },
  {
    id: 16,
    image: "/images/backdrop 8.jpg",
    label: "Backdrop",
    category: "Backdrop",
  },
  {
    id: 52,
    image: "/images/backdrop 3.jpg",
    label: "Backdrop",
    category: "Backdrop",
  },
  {
    id: 53,
    image: "/images/backdrop 4.jpg",
    label: "Backdrop",
    category: "Backdrop",
  },
  {
    id: 54,
    image: "/images/backdrop 5.jpg",
    label: "Backdrop",
    category: "Backdrop",
  },
  {
    id: 55,
    image: "/images/backdrop 6.jpg",
    label: "Backdrop",
    category: "Backdrop",
  },
  {
    id: 56,
    image: "/images/backdrop 7.jpg",
    label: " Backdrop",
    category: "Backdrop",
  },
  // ── Gift ──────────────────────────────────────────────────
  {
    id: 57,
    image: "/images/gift package 3.jpg",
    label: "Gift Package",
    category: "Gift",
  },
  {
    id: 58,
    image: "/images/gift package 4.jpg",
    label: "Gift Package",
    category: "Gift",
  },
  {
    id: 59,
    image: "/images/gift package 5.jpg",
    label: "Gift Package",
    category: "Gift",
  },
  {
    id: 60,
    image: "/images/gift package 6.jpg",
    label: "Gift Package",
    category: "Gift",
  },
  {
    id: 61,
    image: "/images/gift package 7.jpg",
    label: "Gift Package",
    category: "Gift",
  },
  {
    id: 62,
    image: "/images/bq 2.jpg",
    label: "Balloon Bouquet",
    category: "Balloon",
  },
  // ── Setup / Ceremony ──────────────────────────────────────
  {
    id: 8,
    image: "/images/table setup.jpg",
    label: "Table Setup",
    category: "Setups",
  },
  {
    id: 63,
    image: "/images/setup 2.jpg",
    label: " Setup",
    category: "Setups",
  },
  {
    id: 64,
    image: "/images/setup 3.jpg",
    label: "Ceremony Setup",
    category: "Setups",
  },
  {
    id: 65,
    image: "/images/setup 33.jpg",
    label: " Setup",
    category: "Setups",
  },
  {
    id: 66,
    image: "/images/setup 34.jpg",
    label: "Banquet Setup",
    category: "Setups",
  },
  {
    id: 67,
    image: "/images/setup 35.jpg",
    label: "Setup",
    category: "Setups",
  },
  {
    id: 68,
    image: "/images/setup 4k.png",
    label: " Event Setup",
    category: "Setups",
  },
  {
    id: 69,
    image: "/images/setup.png",
    label: " Setup",
    category: "Setups",
  },
  {
    id: 70,
    image: "/images/ceremonies.jpg",
    label: "Ceremony Decor",
    category: "Ceremony",
  },
  // ── Picnic ────────────────────────────────────────────────
  {
    id: 13,
    image: "/images/setup 1.jpg",
    label: "Setup",
    category: "Setups",
  },
  {
    id: 71,
    image: "/images/picnic setup.jpg",
    label: "Picnic Setup",
    category: "Setups",
  },
  // ── Cards ─────────────────────────────────────────────────
  {
    id: 72,
    image: "/images/cards.jpg",
    label: " Cards",
    category: "Cards",
  },
  {
    id: 73,
    image: "/images/cards...jpg",
    label: "Birthday Card",
    category: "Cards",
  },
  {
    id: 74,
    image: "/images/carda1.jpg",
    label: "Birthday Card",
    category: "Cards",
  },
  {
    id: 75,
    image: "/images/card 2.jpg",
    label: "Card",
    category: "Cards",
  },
  {
    id: 76,
    image: "/images/card 3.jpg",
    label: "Celebration Card",
    category: "Cards",
  },
  {
    id: 77,
    image: "/images/card 4.jpg",
    label: " Card",
    category: "Cards",
  },
  {
    id: 78,
    image: "/images/card 5.jpg",
    label: " Card",
    category: "Cards",
  },
  {
    id: 79,
    image: "/images/fb.jpg",
    label: "Flower Bouquet with Card",
    category: "Bouquet",
  },
  // // ── Dowry Wrapping ─────────────────────────────────────────
  // {
  //   id: 80,
  //   image: "",
  //   label: "Dowry wrapping",
  //   category: "Dowry Wrapping"
  // },
];

const categories = ["All", "Birthday", "Bouquet", "Flower Bouquet", "Balloon", "Backdrop", "Decor", "Setups", "Gift", "Cards"];

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


        {isPreview && (
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
        )}
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
