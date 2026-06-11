import { Heart, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { FaSnapchat } from "react-icons/fa";

const socialLinks = [
  {
    icon: ({ className }: { className?: string }) => (
      <Instagram className={className} />
    ),
    href: "https://instagram.com/asheventsgh_",
    label: "Instagram",
    bg: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    iconColor: "text-white",
    glow: "hover:shadow-pink-500/40",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.81-.12-.9.24-1.72.83-2.25 1.6-.56.81-.78 1.81-.62 2.78.15 1.08.81 2.04 1.69 2.66.73.54 1.64.81 2.55.81 1.32-.01 2.54-.6 3.29-1.69.49-.67.73-1.49.73-2.31-.01-4.19-.01-8.38-.01-12.57z" />
      </svg>
    ),
    href: "https://tiktok.com/@asheventsgh",
    label: "TikTok",
    bg: "bg-black",
    iconColor: "text-white",
    glow: "hover:shadow-white/20",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.395 5.608L0 24l6.545-1.371A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.366l-.36-.214-3.733.782.8-3.647-.234-.373A9.818 9.818 0 1112 21.818z" />
      </svg>
    ),
    href: "https://wa.me/233596405164?text=Hi%20Ashevents%20!%20I%20came%20across%20your%20website%20and%20I%27d%20like%20to%20enquire%20about%20your%20services.",
    label: "WhatsApp",
    bg: "bg-[#25D366]",
    iconColor: "text-white",
    glow: "hover:shadow-[#25D366]/40",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <FaSnapchat className={className} />
    ),
    href: "https://www.snapchat.com/add/blacashaaa",
    label: "Snapchat",
    bg: "bg-[#FFFC00]",
    iconColor: "text-black",
    glow: "hover:shadow-yellow-400/40",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Packages", href: "/packages" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate(`/${href}`);
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden pt-16 pb-8">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] -z-0" />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ── Brand & Social ── */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/ashevents logo..png"
                alt="AshEvents Logo"
                className="h-20 w-auto object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </div>

            <blockquote className="text-[1.1rem] font-medium leading-relaxed mb-6 italic text-slate-300 max-w-md">
              "Creating magical, unforgettable celebrations where every detail
              whispers luxury and every moment feels special."
            </blockquote>

            <div className="flex items-center gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`group relative w-12 h-12 rounded-full ${social.bg} flex items-center justify-center transition-all duration-300 shadow-lg ${social.glow}`}
                  >
                    <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${social.iconColor}`} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className="lg:col-span-3">
            <h4 className="text-blue-500 font-black uppercase tracking-[0.2em] text-[0.7rem] mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="flex items-center gap-3 text-slate-400 hover:text-white font-bold text-base transition-all group w-fit"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform" />
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* ── Contact ── */}
          <div className="lg:col-span-4">
            <h4 className="text-blue-500 font-black uppercase tracking-[0.2em] text-[0.7rem] mb-6">
              Reach Out
            </h4>
            <div className="space-y-6">

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-slate-500 font-black text-[0.55rem] uppercase tracking-wider mb-0.5">
                    Our Location
                  </span>
                  <p className="font-bold text-[0.95rem]">Kumasi, Ghana</p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div
                className="flex items-start gap-4 group cursor-pointer"
                onClick={() => window.open("https://wa.me/233596405164")}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-[#25D366] group-hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-slate-500 font-black text-[0.55rem] uppercase tracking-wider mb-0.5">
                    Contact Us
                  </span>
                  <p className="font-bold text-[0.95rem]">+233 59 640 5164</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-white group-hover:text-slate-950 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-slate-500 font-black text-[0.55rem] uppercase tracking-wider mb-0.5">
                    Email Us
                  </span>
                  <p className="font-bold text-[0.95rem]">hello@asheventsgh.com</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-slate-500 font-bold text-[0.75rem]">
            © {new Date().getFullYear()} AshEvents Boutique. All Rights Reserved.
          </p>
          <p className="text-slate-500 flex items-center gap-2 font-bold text-[0.75rem]">
            Crafted with{" "}
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 animate-pulse" />{" "}
            for magical celebrations.
          </p>
        </div>
      </div>
    </footer>
  );
}