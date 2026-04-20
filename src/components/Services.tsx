import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Money Bouquet",
    description: "Creative and unique money bouquets arranged beautifully — perfect as a gift for birthdays, graduations, and special milestones.",
    image: "public/images/10bouquet.png.jpg",

  },
  {
    id: 2,
    title: "Flower Bouquet",
    description: "Gorgeous fresh and artificial flower arrangements crafted to express love, appreciation, and celebration for any occasion.",
    image: "public/images/rose.png.jpg",

  },
  {
    id: 3,
    title: "Backdrops",
    description: "Custom and premium backdrops for photo opportunities — from floral walls to sequin panels, fabric drapes to neon signs.",
    image: "public/images/backdrop 2.jpg",


  },
  {
    id: 4,
    title: "Picnic Setup",
    description: "Luxurious outdoor picnic experiences with styled table setups, cushions, decorations, and all the finishing touches for a perfect day out.",
    image: "public/images/picnic setup.jpg",

  },
  {
    id: 5,
    title: "Room Decor",
    description: "Beautifully decorated naming ceremonies filled with cultural grace, elegant florals, and personalized touches that honor new beginnings.",
    image: "public/images/room decor.jpg",
  },
  {
    id: 6,
    title: "Balloon Decor",
    description: "Stunning balloon arches, columns, walls, and centerpieces in any color palette — transforming any space into a celebratory paradise.",
    image: "public/images/ballon decor 2.jpg",
  },
  {
    id: 7,
    title: "Card/Magazines",
    description: "Custom and premium backdrops for photo opportunities — from floral walls to sequin panels, fabric drapes to neon signs.",
    image: "public/images/cards.jpg",
  },
  {
    id: 8,
    title: "Birthday Packages",
    description: "All-inclusive birthday packages with cake table setups, balloon decor, backdrops, and personalized styling for a truly unforgettable celebration.",
    image: "public/images/birthday packages.jpg",
  },
];

interface ServicesProps {
  isPreview?: boolean;
}

export function Services({ isPreview = false }: ServicesProps) {
  const displayServices = isPreview ? services.slice(0, 4) : services;

  return (
    <section id="services" className={`py-20 ${isPreview ? 'bg-gradient-to-b from-blue-50/60 to-white' : 'bg-white'}`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 uppercase tracking-widest mb-3 text-[0.8rem] font-semibold">
            {isPreview ? "Our Featured Services" : "What We Offer"}
          </span>
          <h2 className="text-gray-900 mb-4 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Services</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-[1.7]">
            We offer a wide range of event services to make every celebration special, memorable, and uniquely yours.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-sky-500" />
            <div className="h-2 w-2 rounded-full bg-blue-600" />
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky-500 to-blue-400" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border border-blue-50"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              {/* Content */}
              <div className="p-4">
                <h3 className="text-gray-900 mb-1.5 text-base font-bold">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[0.82rem] leading-[1.6]">
                  {service.description}
                </p>
                <div className="mt-4">
                  <button
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 text-[0.75rem] font-semibold"
                    onClick={() => {
                      const el = document.querySelector("#contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button (Only for Preview) */}
        {isPreview && (
          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-[0.95rem] font-bold shadow-sm"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

