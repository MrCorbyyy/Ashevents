import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Zap, Lightbulb, Palette, Wand2, Sparkles } from "lucide-react";
import { EventRoadmap } from "../components/EventRoadmap";
import { Services } from "../components/Services";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

// Data Definitions
const servicesData: Record<string, { title: string, description: string, image: string, items: any[] }> = {
  "#money-bouquet": {
    title: "Money Bouquet",
    description: "Get affordable money bouquet prices at AshEvents. Our money bouquets are handcrafted with precision, luxury wrapping, and elegant floral accents to make your gift truly unforgettable. We use only high-quality materials and artistic techniques to ensure a stunning presentation that delights your loved ones for birthdays, anniversaries, and more.",
    image: "/images/MB 4K 5.jpg",
    items: [
      { id: 1, name: "Classic Mini", price: "", image: "/images/money_bouquet_4k.png" },
      { id: 2, name: "Premium Bloom", price: "", popular: true, image: "/images/10 bouquet.4k.png" },
      { id: 3, name: "Royal Mega", price: "", image: "/images/MB 4k 1.png" },
      { id: 4, name: "Royal Mega", price: "", image: "/images/MB 4K 2.png" },
      { id: 5, name: "Royal Mega", price: "", image: "/images/MB 4K 3.png" },
      { id: 6, name: "Royal Mega", price: "", image: "/images/MB 4K 6.jpg" },
      { id: 7, name: "Royal Mega", price: "", image: "/images/MB 4K 5.jpg" },
      { id: 8, name: "Royal Mega", price: "", image: "/images/MB 4K 4.jpg" },






    ]
  },
  "#flower-bouquet": {
    title: "Flower Bouquet",
    description: "We have both fresh and artificial flowers available. Our best seller, Faux Flowers also known as Eternal Flowers is loved for its lasting beauty and elegance.",
    image: "/images/rose bouquet.png",
    items: [
      { id: 1, name: "Sweet Petite", price: "", image: "/images/flower_bouquet_4k.png" },
      { id: 2, name: "Blossom Joy", price: "", popular: true, image: "/images/rose bouquet.png" },
      { id: 3, name: "Magenta Elegance", price: "", image: "/images/fb 4k 2.png" },
      { id: 4, name: "Golden Rose Initial", price: "", image: "/images/fb 4k 3.png" },
      { id: 5, name: "Midnight Crimson", price: "", image: "/images/fb 4k 4.png" },
      { id: 6, name: "Scripted Faith", price: "", image: "/images/fb 4k 5.png" },
      { id: 7, name: "Heartfelt Sentiment", price: "", image: "/images/fb 4k 6.png" },
      { id: 8, name: "Blush Collection", price: "", image: "/images/flower bouquet 4k 1.jpg" },
    ]
  },
  "#backdrops": {
    title: "Backdrops",
    description: "Get premium backdrop prices at AshEvents. Transform your event space with our stunning backdrops, from lush floral walls and shimmering sequin panels to custom neon signs and fabric drapes. We create the perfect, photo-worthy focal point that sets the stage for magical memories and beautiful photography.",
    image: "/images/backdrop 8.jpg",
    items: [
      { id: 1, name: "", price: "", image: "/images/backdrop 2.jpg" },
      { id: 2, name: "", price: "", popular: true, image: "/images/backdrops bw.jpg" },
      { id: 3, name: "", price: "", image: "/images/backdrops.jpg" },
      { id: 4, name: "", price: "", image: "/images/backdrop 3.jpg" },
      { id: 5, name: "", price: "", image: "/images/backdrop 4.jpg" },
      { id: 6, name: "", price: "", image: "/images/backdrop 5.jpg" },
      { id: 7, name: "", price: "", image: "/images/backdrop 6.jpg" },
      { id: 8, name: "", price: "", image: "/images/backdrop 7.jpg" },
    ]
  },
  "#setup": {
    title: "Setups",
    description: "We offer variety of setups for birthdays, slumber parties, bridal showers, graduation parties, naming ceremonies, picnic setups , get togethers etc",
    image: "/images/setup 1.jpg",
    items: [
      { id: 1, name: "", price: "", image: "/images/picnic setup.jpg" },
      { id: 2, name: "", price: "", popular: true, image: "/images/setup 1.jpg" },
      { id: 3, name: "", price: "", image: "/images/setup 2.jpg" },
      { id: 4, name: "", price: "", image: "/images/setup 3.jpg" },
      { id: 5, name: "", price: "", image: "/images/setup 4k.png" },
      { id: 6, name: "", price: "", image: "/images/setup 33.jpg" },
      { id: 7, name: "", price: "", image: "/images/setup 34.jpg" },
      { id: 8, name: "", price: "", image: "/images/setup 35.jpg" },
    ]
  },
  "#ballon-bouquet": {
    title: "Ballon Bouquet",
    description: "Our balloon bouquets can be customized with snacks, money, or flowers, depending on our clients’ preferences. Perfect for birthdays, graduations, naming ceremonies, and other special occasions",
    image: "/images/birthday packages..jpg",
    items: [
      { id: 1, name: "Standard Glow", price: "", image: "/images/ballon boquet 1.png" },
      { id: 2, name: "Romantic Night", price: "", popular: true, image: "/images/bouquet 2.png" },
      { id: 3, name: "Luxury Surprise", price: "", image: "/images/birthday packages..jpg" },
      { id: 4, name: "", price: "", image: "/images/ballon bouquet 3.png" },
      { id: 5, name: "", price: "", image: "/images/package 5.png" },
      { id: 6, name: "", price: "", image: "/images/bb 33.jpg" },
      { id: 7, name: "", price: "", image: "/images/bb 22.jpg" },
      { id: 8, name: "", price: "", image: "/images/bb 44.jpg" },

    ]
  },
  "#room-decor": {
    title: "Room Decor",
    description: "Transform any space into a memorable experience with our beautifully designed room décor setups. We offer Basic, Standard, Premium, and Luxury packages, all tailored to suit our clients’ preferences, style, and occasion.\n\nPlease Note:\n\t•\tPrices do not include hotel/apartment reservations or transportation.\n\t•\tCustomized gifts, cards, flowers, and other add-ons can be included at an additional fee.\n\t•\tAll setups can be personalized to match your desired theme and color palette.",
    image: "/images/premium package 2..jpg",
    items: [
      { id: 1, name: "Premium Package", price: "", image: "/images/premium package..jpg" },
      { id: 2, name: "Premium Package", price: "", image: "/images/premium package 2..jpg" },
      { id: 3, name: "Luxury Package", price: "", image: "/images/luxury package.jpg" },
      { id: 4, name: "Luxury Package", price: "", image: "/images/luxury package 1.jpg" },
      { id: 5, name: "Basic Package", price: "", image: "/images/basic package.jpg" },
      { id: 6, name: "Basic Package", price: "", image: "/images/basic package 1.jpg" },
      { id: 7, name: "Standard Package", price: "", image: "/images/ballon decor 7.jpg" },
      { id: 8, name: "Standard Package", price: "", image: "/images/standard package.jpg" },
    ]
  },
  "#cards-magazines": {
    title: "Cards & Magazines",
    description: "Create lasting memories with our beautifully designed custom cards and magazines. Our cards can be personalized with photos, illustrations, cartoons, and heartfelt handwritten messages to make every occasion extra special.\n\nOur custom magazines are thoughtfully designed based on each client’s inspiration, story, and preferences, making them a unique and memorable keepsake.\n\nPlease Note:\nCustom cards and magazines require 48–96 hours for design and production, depending on the level of customization.",
    image: "/images/carda1.jpg",
    items: [
      { id: 1, name: "", price: "", image: "/images/cards.jpg" },
      { id: 2, name: "", price: "", popular: true, image: "/images/cards...jpg" },
      { id: 3, name: "", price: "", image: "/images/carda1.jpg" },
      { id: 4, name: "", price: "", image: "/images/card 2.jpg" },
      { id: 5, name: "", price: "", image: "/images/card 3.jpg" },
      { id: 6, name: "", price: "", image: "/images/card 4.jpg" },
      { id: 7, name: "", price: "", image: "/images/card 5.jpg" },
      { id: 8, name: "", price: "", image: "" },




    ]
  },
  "#gift-packages": {
    title: "Gift Packages",
    description: "We offer thoughtfully curated gift packages for both males and females, perfect for birthdays, graduations, anniversaries, and other special occasions.\n\nAll packages can be customized to suit each client’s preferences, budget, and gifting needs, ensuring a truly personal experience.\n\nPlease Note:\n\t•\tPackage contents can be adjusted based on your preferences.\n\t•\tCustom cards, magazines, and other personalized add-ons are available at an additional fee.",
    image: "/images/package 1.jpg",
    items: [
      { id: 1, name: "", price: "", image: "/images/birthday packages..jpg" },
      { id: 2, name: "", price: "", popular: true, image: "/images/package 1.jpg" },
      { id: 3, name: "", price: "", image: "/images/package 2.jpg" },
      { id: 4, name: "", price: "", image: "/images/gift package 3.jpg" },
      { id: 5, name: "", price: "", image: "/images/gift package 4.jpg" },
      { id: 6, name: "", price: "", image: "/images/gift package 5.jpg" },
      { id: 7, name: "", price: "", image: "/images/gift package 6.jpg" },
      { id: 8, name: "", price: "", image: "/images/gift package 7.jpg" },
    ]
  },
};


function VisionIcon() {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        variants={{
          initial: { scale: 0.8, opacity: 0 },
          hover: { scale: 1.5, opacity: 0.6 }
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full"
      />
      <motion.div
        variants={{
          initial: { scale: 1, rotate: 0, y: 0 },
          hover: {
            scale: 1.15,
            y: -2,
            rotate: [0, -10, 10, -10, 5, -5, 0],
            transition: { duration: 0.6, ease: "easeInOut" }
          }
        }}
      >
        <Lightbulb className="w-8 h-8 text-blue-600 transition-colors duration-300 group-hover:text-blue-500" />
      </motion.div>
      <motion.div
        variants={{
          initial: { opacity: 0, scale: 0 },
          hover: { opacity: 1, scale: 1 }
        }}
        className="absolute -top-1 -right-1"
      >
        <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
      </motion.div>
    </div>
  );
}

function DesignIcon() {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        variants={{
          initial: { scale: 0.8, opacity: 0 },
          hover: { scale: 1.5, opacity: 0.5 }
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-sky-400/20 blur-xl rounded-full"
      />
      <motion.div
        variants={{
          initial: { scale: 1, rotate: 0 },
          hover: {
            scale: 1.15,
            rotate: [0, 15, -10, 15, -5, 0],
            transition: { duration: 0.7, ease: "easeInOut" }
          }
        }}
      >
        <Palette className="w-8 h-8 text-blue-600" />
      </motion.div>
      <motion.div
        variants={{
          initial: { opacity: 0, y: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            y: [-5, -15],
            x: [-10, -15],
            scale: [0.5, 1, 0.5],
            transition: { duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }
          }
        }}
        className="absolute w-2 h-2 rounded-full bg-rose-500"
      />
      <motion.div
        variants={{
          initial: { opacity: 0, y: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            y: [-10, -22],
            x: [10, 15],
            scale: [0.4, 0.8, 0.4],
            transition: { duration: 0.8, delay: 0.3, repeat: Infinity, repeatDelay: 0.1 }
          }
        }}
        className="absolute w-2 h-2 rounded-full bg-amber-400"
      />
      <motion.div
        variants={{
          initial: { opacity: 0, y: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            y: [-12, -26],
            x: [0, -5],
            scale: [0.5, 0.9, 0.5],
            transition: { duration: 0.8, delay: 0.1, repeat: Infinity, repeatDelay: 0.3 }
          }
        }}
        className="absolute w-2 h-2 rounded-full bg-emerald-400"
      />
    </div>
  );
}

function MagicIcon() {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        variants={{
          initial: { scale: 0.8, opacity: 0 },
          hover: { scale: 1.5, opacity: 0.6 }
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-violet-400/20 blur-xl rounded-full"
      />
      <motion.div
        variants={{
          initial: { scale: 1, rotate: 0 },
          hover: {
            scale: 1.15,
            rotate: [0, -20, 25, -15, 10, 0],
            transition: { duration: 0.8, ease: "easeInOut" }
          }
        }}
        className="relative z-10"
      >
        <Wand2 className="w-8 h-8 text-blue-600" />
      </motion.div>
      <motion.div
        variants={{
          initial: { opacity: 0, scale: 0, rotate: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0.5, 1.3, 0.5],
            rotate: [0, 90],
            x: [0, 15],
            y: [0, -15],
            transition: { duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }
          }
        }}
        className="absolute top-0 right-0 text-amber-400"
      >
        <Sparkles className="w-4 h-4 fill-amber-400 text-amber-400" />
      </motion.div>
      <motion.div
        variants={{
          initial: { opacity: 0, scale: 0, rotate: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0.4, 1.1, 0.4],
            rotate: [0, -90],
            x: [0, -18],
            y: [0, -10],
            transition: { duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 0.3 }
          }
        }}
        className="absolute top-1 left-1 text-violet-400"
      >
        <Sparkles className="w-3.5 h-3.5 fill-violet-400 text-violet-400" />
      </motion.div>
      <motion.div
        variants={{
          initial: { opacity: 0, scale: 0, rotate: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0.3, 0.9, 0.3],
            rotate: [0, 120],
            x: [0, 5],
            y: [0, -22],
            transition: { duration: 0.8, delay: 0.4, repeat: Infinity, repeatDelay: 0.1 }
          }
        }}
        className="absolute top-0 text-sky-400"
      >
        <Sparkles className="w-3 h-3 fill-sky-400 text-sky-400" />
      </motion.div>
    </div>
  );
}

export default function ServicesPage() {
  const location = useLocation();
  const hash = location.hash;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [hash]);

  const currentCategory = servicesData[hash];
  const showAll = !currentCategory;

  return (
    <div className="pt-24 bg-white min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={hash || "all"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Back Navigation */}
          {!showAll && (
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 mb-6">
              <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 font-black text-[0.75rem] uppercase tracking-widest hover:opacity-70 transition-opacity">
                <ArrowLeft className="w-4 h-4" /> Back to all services
              </Link>
            </div>
          )}

          {/* Hero-style Header Section */}
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 mb-16">
            {!showAll ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-blue-50/40 rounded-[3.5rem] p-8 md:p-20 border border-blue-100/50">
                {/* Left Content */}
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                  <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-tighter leading-[1.1] mb-8">
                    <span className="text-slate-950">Our </span>
                    <span className="text-blue-600">{currentCategory.title}</span>
                  </h1>
                  <p className="text-slate-950 text-[clamp(1.2rem,2.2vw,1.4rem)] leading-[1.8] font-medium mb-10 max-w-2xl whitespace-pre-line">
                    {currentCategory.description}
                  </p>
                </div>

                {/* Right Featured Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  className="relative aspect-video lg:aspect-[5/4] rounded-[3.5rem] overflow-hidden shadow-2xl"
                >
                  <img
                    src={currentCategory.image}
                    alt={currentCategory.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            ) : (
              <div className="bg-blue-50/50 rounded-[3.5rem] p-16 md:p-24 text-center border border-blue-100/50">
                <span className="inline-block text-blue-600 uppercase tracking-widest mb-4 text-[0.7rem] font-black">Our Catalog</span>
                <h1 className="text-slate-900 text-[clamp(2rem,6vw,4rem)] font-black tracking-tighter leading-tight">
                  All <span className="text-blue-600">Services</span>
                </h1>
              </div>
            )}
          </div>

          {/* Pricing List Header (Centered) */}
          {!showAll && (
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 mb-16">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-slate-900 text-[2.2rem] font-black tracking-tighter mb-4">
                  {currentCategory.title} <span className="text-blue-600">Collection</span>
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.3)]" />
              </div>
            </div>
          )}

          {/* Main Content (Grid) */}
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 pb-20">
            {!showAll ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-32">
                {currentCategory.items.map((item: any) => (
                  <ServiceItemCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="mb-32">
                <Services isPreview={false} />
              </div>
            )}

            {/* ── OUR PROCESS SECTION ── */}
            <div className="mb-32">
              <div className="text-center mb-16">
                <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[0.7rem] mb-3 block">How we work</span>
                <h2 className="text-slate-900 text-4xl lg:text-5xl font-black tracking-tight mb-4">
                  Our <span className="text-blue-600">3-Step</span> Process
                </h2>
                <p className="text-slate-500 max-w-xl mx-auto font-medium">From the first spark of an idea to the final magical moment, we ensure every detail is handled with boutique precision.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
                {/* Connecting lines for desktop */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -z-10 translate-y-[-50%]" />

                {[
                  {
                    step: "01",
                    title: "The Vision",
                    desc: "We start with a detailed consultation to understand your dream, color palette, and specific needs.",
                    icon: <VisionIcon />
                  },
                  {
                    step: "02",
                    title: "The Design",
                    desc: "Our creative team crafts a bespoke concept, selecting the finest materials and unique arrangements.",
                    icon: <DesignIcon />
                  },
                  {
                    step: "03",
                    title: "The Magic",
                    desc: "We bring it all to life with flawless execution, leaving you free to enjoy your celebration.",
                    icon: <MagicIcon />
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial="initial"
                    whileHover="hover"
                    className="bg-white p-10 rounded-[3rem] border border-blue-100 shadow-xl shadow-blue-900/5 relative group cursor-pointer overflow-hidden"
                  >
                    <div className="absolute top-8 right-10 text-[3.5rem] font-black text-blue-50 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.step}
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 transition-all duration-300 group-hover:bg-blue-100/50">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 transition-colors duration-300 group-hover:text-blue-600">{item.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── PREMIUM ADD-ONS SECTION ── */}
            <div className="py-20 relative">
              <div className="text-center mb-16 relative z-10">
                <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[0.7rem] mb-3 block">Small details, big impact</span>
                <h2 className="text-slate-900 text-4xl lg:text-5xl font-black tracking-tight mb-4">
                  Premium <span className="text-blue-600">Add-ons</span>
                </h2>
                <p className="text-slate-500 max-w-xl mx-auto font-medium">Elevate your gift or event with our curated extras. These small touches transform a service into a lasting memory.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 relative z-10">
                {[
                  {
                    title: "Props",
                    sub: "props for birthdays and special occassions",
                    image: "/images/props.jpg",
                  },
                  {
                    title: "Magazines",
                    sub: "Beautifully designed custom magazines",
                    image: "/images/carda1.jpg",
                  },
                  {
                    title: "Birthday Menu Cards",
                    sub: "Suitable for birthday, picnic, bridal shower setups & more",
                    image: "/images/menu cards.jpg",
                  },
                  {
                    title: "Name Cards",
                    sub: "Perfect for table setups & place settings",
                    image: "/images/name cards.jpg",
                  },
                  {
                    title: "Birthday Question Cards",
                    sub: "A fun interactive add-on for birthday setups",
                    image: "/images/qc 1.jpg",
                  },
                ].map((addon, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-[3rem] border border-blue-100 shadow-xl shadow-blue-900/5 relative group text-center overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10"
                  >
                    {/* Image slot */}
                    <div className="h-52 bg-blue-50/50 flex items-center justify-center overflow-hidden relative transition-colors duration-300 group-hover:bg-blue-100/30">
                      {addon.image ? (
                        <>
                          <img
                            src={addon.image}
                            alt={addon.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </>
                      ) : (
                        <div className="w-full h-full bg-blue-50/50" />
                      )}
                    </div>

                    <div className="p-8 flex flex-col flex-1">
                      <h3 className="text-lg font-black text-slate-900 mb-3">{addon.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed text-[0.85rem]">{addon.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Event Roadmap Section (Replacing Contact) */}
      <div className="border-t border-slate-50 pt-20">
        <EventRoadmap />
      </div>
    </div>
  );
}

function ServiceItemCard({ item }: { item: any }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-blue-900/10 transition-all duration-500"
    >
      <div className="relative h-[30rem] overflow-hidden group">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Always-visible gradient overlay with name & button */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-8">
          <div>
            <h3 className="text-white text-2xl font-black mb-2">{item.name}</h3>
            <p className="text-blue-400 text-[0.7rem] font-black uppercase tracking-[0.2em] mb-6">Exclusive Collection</p>

            <a
              href={`https://wa.me/233596405164?text=Hi%20Ashevents%20!%20I'm%20interested%20in%20the%20${encodeURIComponent(item.name)}%20from%20your%20collection.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-4 bg-white text-slate-950 rounded-2xl font-black text-[0.8rem] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-colors"
            >
              Inquire Now
            </a>
          </div>
        </div>

        {item.popular && (
          <div className="absolute top-6 left-6 bg-blue-600 text-white px-5 py-2 rounded-full text-[0.65rem] font-black uppercase tracking-[0.2em] shadow-xl z-20">
            Most Loved
          </div>
        )}
      </div>
    </motion.div>
  );
}
