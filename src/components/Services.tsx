import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const services = [
  {
    id: 1,
    title: "Money Bouquet",
    description: "Creative and unique money bouquets arranged beautifully — perfect as a gift for birthdays, graduations, and special milestones.",
    image: "public/images/10 bouquet.4k.png",
    anchor: "#money-bouquet",
  },
  {
    id: 2,
    title: "Flower Bouquet",
    description: "Gorgeous fresh and artificial flower arrangements crafted to express love, appreciation, and celebration for any occasion.",
    image: "public/images/rose bouquet.png",
    anchor: "#flower-bouquet",
  },
  {
    id: 3,
    title: "Backdrops",
    description: "Custom and premium backdrops for photo opportunities — from floral walls to sequin panels, fabric drapes to neon signs.",
    image: "public/images/backdrop 2.jpg",
    anchor: "#backdrops",
  },
  {
    id: 4,
    title: "Picnic Setup",
    description: "Luxurious outdoor picnic experiences with styled table setups, cushions, decorations, and all the finishing touches for a perfect day out.",
    image: "public/images/picnic setup.jpg",
    anchor: "#picnic-setup",
  },
  {
    id: 5,
    title: "Room Decor",
    description: "Beautifully decorated naming ceremonies filled with cultural grace, elegant florals, and personalized touches that honor new beginnings.",
    image: "public/images/room decor.jpg",
    anchor: "#room-decor",
  },
  {
    id: 6,
    title: "Balloon Decor",
    description: "Stunning balloon arches, columns, walls, and centerpieces in any color palette — transforming any space into a celebratory paradise.",
    image: "public/images/ballon decor 2.jpg",
    anchor: "#balloon-decor",
  },
  {
    id: 7,
    title: "Card/Magazines",
    description: "Custom and premium backdrops for photo opportunities — from floral walls to sequin panels, fabric drapes to neon signs.",
    image: "public/images/cards.jpg",
    anchor: "#cards-magazines",
  },
  {
    id: 8,
    title: "Birthday Packages",
    description: "All-inclusive birthday packages with cake table setups, balloon decor, backdrops, and personalized styling for a truly unforgettable celebration.",
    image: "public/images/birthday packages.jpg",
    anchor: "#birthday-packages",
  },
  {
    id: 9,
    title: "Proposal Decor",
    description: "Creating the perfect romantic setting for your special 'Yes' — from candlelit paths to 'Marry Me' neon signs and floral magic.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop",
    anchor: "#proposal-decor",
  },
];

interface ServicesProps {
  isPreview?: boolean;
}

export function Services({ isPreview = false }: ServicesProps) {
  const displayServices = isPreview ? services.slice(0, 5) : services;
  const navigate = useNavigate();

  const handleAction = (anchor?: string) => {
    if (anchor) {
      navigate(`/services${anchor}`);
      window.scrollTo(0, 0); // Force scroll to top on hash change
    } else {
      const el = document.querySelector("#contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className={`py-20 ${isPreview ? 'bg-gradient-to-b from-blue-50/60 to-white' : 'bg-white'}`}>
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="mt-4 flex items-center justify-center gap-3">
            <motion.div
              animate={{
                scaleX: [0.8, 1.2, 0.8],
                opacity: [0.5, 1, 0.5],
                x: [-5, 5, -5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-1 w-16 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            />
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 15px rgba(59, 130, 246, 0.5)",
                  "0 0 0px rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-2.5 w-2.5 rounded-full bg-blue-600"
            />
            <motion.div
              animate={{
                scaleX: [1.2, 0.8, 1.2],
                opacity: [1, 0.5, 1],
                x: [5, -5, 5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-1 w-16 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {displayServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
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
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-sm transition-all duration-300 text-[0.75rem] font-semibold"
                    onClick={() => handleAction(service.anchor)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button (Only for Preview) */}
        {isPreview && (
          <div className="mt-16 text-center">
            <div className="inline-block relative group p-[2px] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20">
              {/* Deep Orbiting Beam */}
              <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#1e40af_5%,#2563eb_10%,#1e40af_15%,transparent_20%)] opacity-100" />

              <Link
                to="/services"
                className="relative inline-flex items-center gap-2 px-10 py-3.5 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 rounded-full transition-all duration-300 text-[0.95rem] font-bold group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white"
              >
                View All Services
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
