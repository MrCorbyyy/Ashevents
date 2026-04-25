import { Star, ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    image: "public/images/10 bouquet.4k.png",
    label: "Money Bouquet",
    type: "Featured Gift",
    icon: <Star className="w-5 h-5 fill-current" />,
    colorClass: "bg-emerald-600",
    textClass: "text-emerald-600",
    shadowClass: "shadow-emerald-600/20"
  },
  {
    image: "public/images/flower_bouquet_4k.png",
    label: "Flower Bouquet",
    type: "Featured Gift",
    icon: <Star className="w-5 h-5 fill-current" />,
    colorClass: "bg-rose-500",
    textClass: "text-rose-500",
    shadowClass: "shadow-rose-500/20"
  },
  {
    image: "public/images/money_bouquet_4k.png",
    label: "Money Bouquet",
    type: "Featured Gift",
    icon: <Star className="w-5 h-5 fill-current" />,
    colorClass: "bg-emerald-600",
    textClass: "text-emerald-600",
    shadowClass: "shadow-emerald-600/20"
  },
  {
    image: "public/images/birthday packages..jpg",
    label: "Birthday Packages",
    type: "Premium Service",
    icon: <Star className="w-5 h-5 fill-current" />,
    colorClass: "bg-blue-600",
    textClass: "text-blue-600",
    shadowClass: "shadow-blue-600/20"
  },
  {
    image: "public/images/birthday packages.jpg",
    label: "Birthday Styling",
    type: "Premium Service",
    icon: <Star className="w-5 h-5 fill-current" />,
    colorClass: "bg-amber-500",
    textClass: "text-amber-500",
    shadowClass: "shadow-amber-500/20"
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 overflow-hidden bg-white"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-50/30 -skew-x-12 translate-x-20 z-0" />
      <div className="absolute top-20 right-40 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl z-0" />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 px-4 py-1.5 rounded-full mb-8">
              <Star className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
              <span className="text-[0.7rem] tracking-[0.2em] font-black uppercase text-blue-700">
                Events · Bouquets · Gift Curation
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-slate-900 mb-6 text-[clamp(2.5rem,6vw,4.8rem)] font-black leading-[1.1] tracking-tighter">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {"Making Every".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 5 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                <br />
                <motion.div
                  className="text-blue-600 inline-block"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {"Moment Magical".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: -5 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </h1>

            {/* Description */}
            <p className="text-slate-900 max-w-xl mb-10 text-[clamp(1.15rem,2.2vw,1.4rem)] leading-[1.8] font-bold tracking-tight">
              Ashevents specializes in balloon decor, event setups, stunning backdrops, gift curation, bouquets, and customized cards. ✨
              We bring your ideas to life with services thoughtfully tailored to suit your style and special moments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group p-[2px] rounded-full overflow-hidden shadow-xl shadow-blue-600/20"
              >
                <Link
                  to="/services"
                  className="relative inline-flex items-center justify-center px-10 py-4 bg-blue-600 text-white rounded-full font-bold transition-all duration-300"
                >
                  Explore Services
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group p-[2px] rounded-full overflow-hidden shadow-xl shadow-blue-600/10"
              >
                {/* Deep Orbiting Beam */}
                <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#3b82f6_5%,#60a5fa_10%,#3b82f6_15%,transparent_20%)] opacity-100" />

                <button
                  onClick={() => handleScroll("#contact")}
                  className="relative px-10 py-4 bg-white border-2 border-blue-100 text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all duration-300"
                >
                  Contact Us
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* - Display Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative aspect-square rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-100 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Blurred background fill — fully opaque, eliminates all gaps */}
                  <img
                    src={heroSlides[currentSlide].image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-100 select-none"
                  />
                  {/* Main image — fills container like flower bouquet */}
                  <img
                    src={heroSlides[currentSlide].image}
                    alt={heroSlides[currentSlide].label}
                    className="relative z-10 w-full h-full object-cover select-none"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-blue-600 z-30"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-blue-600 z-30"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Round Indicators */}
              <div className="absolute bottom-10 right-10 flex gap-3 z-30">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${idx === currentSlide ? 'bg-white scale-125 shadow-[0_0_12px_rgba(255,255,255,0.8)]' : 'bg-white/30 hover:bg-white/50'}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Dynamic Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.5, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.5, x: -20 }}
                transition={{ type: "spring", damping: 15, stiffness: 200 }}
                className="absolute -top-6 -right-6 md:top-10 md:-right-10 bg-white p-4 pr-8 rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-blue-50 flex items-center gap-4 z-40"
              >
                <div className={`w-12 h-12 rounded-2xl ${heroSlides[currentSlide].colorClass} flex items-center justify-center text-white shadow-lg ${heroSlides[currentSlide].shadowClass} transition-colors duration-500`}>
                  {heroSlides[currentSlide].icon}
                </div>
                <div className="text-left">
                  <p className={`text-[0.65rem] ${heroSlides[currentSlide].textClass} font-black uppercase tracking-[0.2em] mb-0.5 transition-colors duration-500`}>
                    {heroSlides[currentSlide].type}
                  </p>
                  <p className="text-[1.05rem] text-slate-900 font-black tracking-tight whitespace-nowrap leading-tight">
                    {heroSlides[currentSlide].label}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
