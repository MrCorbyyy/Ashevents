import { Heart, Instagram, Facebook, Twitter } from "lucide-react";
import logo from "../assets/d1dec071a85ce1e8217093151d84391fa2575237.png";

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-blue-950 text-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-10 px-4 text-center">
        <h2 className="text-white mb-2 text-[clamp(1.4rem,3vw,2rem)] font-extrabold">
          Ready to Create Something Beautiful?
        </h2>
        <p className="text-white/85 mb-6 text-[0.95rem]">
          Let AshEvents bring your vision to life. Every celebration deserves to be extraordinary.
        </p>
        <button
          onClick={() => handleNav("#contact")}
          className="px-8 py-3 bg-white text-blue-700 rounded-full shadow-lg hover:bg-blue-50 transition-colors text-[0.95rem] font-bold"
        >
          Book Your Event Now 🎉
        </button>
      </div>

      {/* Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <div className="bg-white rounded-xl p-3 inline-block">
              <img src={logo} alt="AshEvents" className="h-12 w-auto object-contain" />
            </div>
          </div>
          <p className="text-blue-200 text-[0.85rem] leading-[1.7]">
            Creating magical, unforgettable celebrations across Nigeria. Your dream event is our passion.
          </p>
          <p className="text-blue-300 mt-2 text-[0.78rem]">
            Events · Bouquets · Gift Curation
          </p>
          <div className="flex gap-3 mt-5">
            {[
              { icon: Instagram, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-blue-500/40 flex items-center justify-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-4 h-4 text-blue-200" />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white mb-4 text-[0.95rem] font-bold">Our Services</h4>
          <ul className="space-y-2.5">
            {[
              "Money Bouquet",
              "Flower Bouquet",
              "Event Flyers",
              "Picnic Setup",
              "Naming Ceremony",
              "Balloon Decor",
              "Backdrops",
              "Birthday Packages",
            ].map((service) => (
              <li key={service}>
                <button
                  onClick={() => handleNav("#services")}
                  className="text-blue-300 hover:text-sky-300 transition-colors text-left text-[0.83rem]"
                >
                  → {service}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white mb-4 text-[0.95rem] font-bold">Quick Links</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Home", href: "#home" },
              { label: "Services", href: "#services" },
              { label: "Gallery", href: "#gallery" },
              { label: "Birthday Packages", href: "#packages" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "Book an Event", href: "#contact" },
            ].map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-blue-300 hover:text-sky-300 transition-colors text-left text-[0.83rem]"
                >
                  → {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white mb-4 text-[0.95rem] font-bold">Contact Us</h4>
          <div className="space-y-3 text-blue-300 text-[0.83rem] leading-[1.7]">
            <p>📞 +234 800 000 0000</p>
            <p>📧 hello@ashevents.ng</p>
            <p>📍 Lagos, Nigeria<br />(Available Nationwide)</p>
            <p>⏰ Mon–Fri: 8am–8pm<br />Sat: 9am–9pm</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 px-4 text-center">
        <p className="text-blue-400 flex items-center justify-center gap-1 text-[0.8rem]">
          © {new Date().getFullYear()} AshEvents. Made with{" "}
          <Heart className="w-3.5 h-3.5 text-sky-400 fill-sky-400" /> for beautiful celebrations.
        </p>
      </div>
    </footer>
  );
}
