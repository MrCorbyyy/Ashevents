import { ChevronDown, Star } from "lucide-react";
import logo from "../assets/d1dec071a85ce1e8217093151d84391fa2575237.png";

const heroBg = "public/images/ballon decor.jpg";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/75 via-blue-900/65 to-blue-950/80" />

      {/* Decorative Circles */}
      <div className="absolute top-24 left-10 w-48 h-48 rounded-full bg-blue-400/15 blur-3xl" />
      <div className="absolute bottom-24 right-10 w-64 h-64 rounded-full bg-sky-300/15 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-2xl px-6 py-3 shadow-2xl shadow-blue-900/40">
            <img src={logo} alt="AshEvents" className="h-16 w-auto object-contain" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-4 py-1.5 rounded-full mb-6">
          <Star className="w-3.5 h-3.5 text-sky-300 fill-sky-300" />
          <span className="text-[0.8rem] tracking-widest uppercase">
            Events · Bouquets · Gift Curation
          </span>
          <Star className="w-3.5 h-3.5 text-sky-300 fill-sky-300" />
        </div>

        {/* Heading */}
        <h1
          className="text-white mb-4 text-[clamp(2.5rem,6.5vw,4.5rem)] font-extrabold leading-[1.12]"
        >
          Making Every{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
            Moment
          </span>{" "}
          Magical
        </h1>

        <p className="text-white/85 max-w-2xl mx-auto mb-8 text-[clamp(1rem,2.5vw,1.15rem)] leading-[1.75]">
        Ashevents specializes in balloon decor, event setups, stunning backdrops, gift curation, bouquets, and customized cards. ✨
We bring your ideas to life. Our services are thoughtfully tailored to suit your style, preferences, and special moments because every celebration deserves a personal touch. 💐🎈Let us make your moments beautiful and unforgettable!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => handleScroll("#services")}
            className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow-lg shadow-blue-700/40 hover:shadow-blue-700/60 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 text-[0.95rem] font-semibold"
          >
            Explore Services
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="px-8 py-3.5 bg-white/15 backdrop-blur-sm border border-white/40 text-white rounded-full hover:bg-white/25 transition-all duration-300 text-[0.95rem] font-semibold"
          >
            Book An Event
          </button>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-6 max-w-sm mx-auto">
          {[
            { value: "500+", label: "Events Done" },
            { value: "100%", label: "Happy Clients" },
            { value: "5★", label: "Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-sky-300 text-[1.6rem] font-extrabold"
              >
                {stat.value}
              </div>
              <div className="text-white/70 text-[0.75rem]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
