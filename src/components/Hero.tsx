import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";

const heroBg = "/images/hero.image.jpg";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 45, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  } as const;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blue-950"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url("${heroBg}")`,
          y,
        }}
      />

      {/* Smoother Overlay for visibility */}
      <div className="absolute inset-0 bg-blue-950/45 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-transparent to-blue-950/80 backdrop-blur-[2px]" />

      {/* Content Container with 3D Perspective */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ perspective: 1200 }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Animated Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full mb-8 shadow-2xl"
        >
          <Star className="w-4 h-4 text-sky-400 fill-sky-400 animate-pulse" />
          <span className="text-[0.75rem] tracking-[0.2em] font-bold uppercase text-sky-50">
            Events · Bouquets · Gift Curation
          </span>
          <Star className="w-4 h-4 text-sky-400 fill-sky-400 animate-pulse" />
        </motion.div>

        {/* 3D Modern Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-white mb-6 text-[clamp(2.8rem,8vw,5.5rem)] font-black leading-[1.05] tracking-tight drop-shadow-2xl"
        >
          Making Every{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300 drop-shadow-[0_0_15px_rgba(125,211,252,0.5)]">
              Moment
            </span>
            {/* Soft Glow Layer */}
            <span className="absolute inset-0 blur-2xl bg-sky-400/20 -z-10 animate-pulse" />
          </span>{" "}
          Magical
        </motion.h1>

        {/* Body Text */}
        <motion.p
          variants={itemVariants}
          className="text-blue-50/90 max-w-2xl mx-auto mb-10 text-[clamp(1rem,2.5vw,1.2rem)] leading-[1.8] font-medium drop-shadow-md"
        >
          Ashevents specializes in balloon decor, event setups, stunning backdrops, gift curation, bouquets, and customized cards. ✨
          We bring your ideas to life.
          Our services are thoughtfully tailored to suit your style, preferences, and special moments because every celebration deserves a personal touch. 💐🎈
          Let us make your moments beautiful and unforgettable!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link
            to="/services"
            className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full font-bold overflow-hidden shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300"
          >
            <span className="relative z-10">Explore Services</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
          <button
            onClick={() => handleScroll("#contact")}
            className="px-10 py-4 bg-white/5 backdrop-blur-lg border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-xl"
          >
            Book Your Event
          </button>
        </motion.div>
      </motion.div>

      {/* Decorative Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-sky-500/20 blur-[80px]"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-blue-400/20 blur-[100px]"
      />
    </section>
  );
}


