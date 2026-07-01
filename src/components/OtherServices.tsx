import { motion } from "motion/react";
import { useState } from "react";

// ── Data ────────────────────────────────────────────────────────────────────
const otherServices = [
  {
    id: 1,
    title: "Money Bundles",
    emoji: "💵",
    tag: "Cash Gifting",
    description:
      "Make your cash gift truly stand out with our beautifully arranged money bundles. Elegantly presented and perfect for birthdays, graduations, weddings, and any milestone worth celebrating.",
    accentColor: "#2563eb",
    bgFrom: "#eff6ff",
    bgTo: "#dbeafe",
    anchor: "money-bundles",
    images: [
      "/images/money bundle 1.jpg",
      "/images/money bundle 2.jpg",
      "/images/money bundle 3.jpg",
    ],
  },
  {
    id: 2,
    title: "Props & Mosaic Frames",
    emoji: "🎭",
    tag: "Party Essentials",
    description:
      "Add a fun, festive touch to any celebration with our curated props and stunning mosaic photo frames. Perfect for birthdays, bridal showers, graduations, and more.",
    accentColor: "#0284c7",
    bgFrom: "#f0f9ff",
    bgTo: "#e0f2fe",
    anchor: "props-mosaic",
    images: [
      "/images/mosaic & props.jpg",
      "/images/mosaic frame.jpg",
      "/images/props 3.jpg",
    ],
  },
  {
    id: 3,
    title: "Bridal Fans",
    emoji: "👰",
    tag: "Bridal Collection",
    description:
      "Elegant, hand-crafted bridal fans designed to complement every bridal look. Available in a variety of colours, styles, and custom designs to suit your special day.",
    accentColor: "#1d4ed8",
    bgFrom: "#eef2ff",
    bgTo: "#e0e7ff",
    anchor: "bridal-fans",
    images: [
      "/images/bridal fan 1.jpg",
      "/images/bridal fan 2.jpg",
      "/images/bridal fan 3.jpg",
    ],
  },
  {
    id: 4,
    title: "Dowry Wrapping",
    emoji: "🎁",
    tag: "Tradition & Luxury",
    description:
      "Beautifully presented dowry wrapping services that honour tradition while adding a modern, luxurious touch. Custom colours and styles available to match your theme.",
    accentColor: "#0369a1",
    bgFrom: "#f0f9ff",
    bgTo: "#bae6fd",
    anchor: "dowry-wrapping",
    images: [
      "/images/dowry wrapping 1.jpg",
      "/images/dowry wrapping.jpg",
      "/images/dwory wrapping 2.jpg",
    ],
  },
];

// ── ServiceStrip ─────────────────────────────────────────────────────────────
function ServiceStrip({
  service,
  index,
}: {
  service: (typeof otherServices)[0];
  index: number;
}) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleImageTap = (imgIdx: number) => {
    // Toggle: tap the active image to collapse it, tap another to expand it
    setActiveIdx((prev) => (prev === imgIdx ? null : imgIdx));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: `linear-gradient(135deg, ${service.bgFrom}, ${service.bgTo})`,
      }}
      className="rounded-[3rem] overflow-hidden border border-blue-100/80"
    >
      <div
        className={`flex flex-col ${
          index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/* Text Panel */}
        <div className="flex-1 flex flex-col justify-center p-10 lg:p-16 xl:p-20">
          <span
            className="inline-flex items-center gap-1.5 self-start px-3.5 py-1 rounded-full text-[0.65rem] font-black uppercase tracking-widest mb-6"
            style={{
              background: service.accentColor + "18",
              color: service.accentColor,
            }}
          >
            {service.emoji} {service.tag}
          </span>

          <h3 className="text-slate-900 text-[clamp(1.8rem,3.5vw,2.8rem)] font-black tracking-tight leading-[1.1] mb-6">
            {service.title}
          </h3>
          <p className="text-slate-600 text-[1.05rem] leading-[1.8] font-medium mb-10 max-w-md">
            {service.description}
          </p>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/233596405164?text=Hi%20Ashevents!%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 self-start px-8 py-4 rounded-2xl text-white font-black text-[0.85rem] uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: `linear-gradient(135deg, ${service.accentColor}, #38bdf8)`,
              boxShadow: `0 12px 32px ${service.accentColor}35`,
            }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Inquire on WhatsApp
          </a>
        </div>

        {/* Images Panel — expandable accordion (hover on desktop, tap on mobile) */}
        <div className="flex-1 flex gap-2 p-4 lg:p-6" style={{ minHeight: "380px" }}>
          {service.images.map((src, imgIdx) => {
            const isActive = activeIdx === imgIdx;
            return (
              <motion.div
                key={imgIdx}
                className="relative rounded-[2rem] overflow-hidden cursor-pointer"
                style={{ minWidth: 0, position: "relative" }}
                animate={{ flex: isActive ? 2.2 : 1 }}
                whileHover={{ flex: 2.2 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => handleImageTap(imgIdx)}
              >
                {/* Placeholder background always visible */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: `${service.bgTo}` }}
                >
                  <span className="text-4xl opacity-30">{service.emoji}</span>
                </div>
                {/* Image fills the whole slot */}
                <img
                  src={src}
                  alt={`${service.title} ${imgIdx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                  loading="lazy"
                />
                {/* Accent overlay on active/hover */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 flex items-end p-5 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: `linear-gradient(to top, ${service.accentColor}70, transparent)`,
                  }}
                >
                  <span className="text-white/90 text-[0.65rem] font-black uppercase tracking-widest">
                    {imgIdx + 1} / {service.images.length}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// ── Component ────────────────────────────────────────────────────────────────
interface OtherServicesProps {}

export function OtherServices(_props: OtherServicesProps) {
  return (
    <section id="other-services" className="py-24 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase tracking-widest mb-5 bg-blue-50 text-blue-600">
            ✦ Specialty Offerings
          </span>
          <h2 className="text-slate-900 text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tighter leading-tight mb-4">
            A Little{" "}
            <span className="text-blue-600">Extra Magic</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto font-medium leading-relaxed">
            Beyond our core offerings these specialty services add the finishing
            touches that make every occasion truly unforgettable.
          </p>
          {/* Divider */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <motion.div
              animate={{ scaleX: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5], x: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-1 w-16 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            />
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: [
                  "0 0 0px rgba(59,130,246,0)",
                  "0 0 15px rgba(59,130,246,0.5)",
                  "0 0 0px rgba(59,130,246,0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-2.5 w-2.5 rounded-full bg-blue-600"
            />
            <motion.div
              animate={{ scaleX: [1.2, 0.8, 1.2], opacity: [1, 0.5, 1], x: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-1 w-16 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            />
          </div>
        </div>

        {/* Service Strips */}
        <div className="flex flex-col gap-10">
          {otherServices.map((service, index) => (
            <ServiceStrip key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
