import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/d1dec071a85ce1e8217093151d84391fa2575237.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Packages", href: "#packages" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-sm shadow-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => handleNav("#home")} className="flex items-center">
            <img src={logo} alt="AshEvents Logo" className="h-11 w-auto object-contain" />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group text-[0.92rem]"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-0.5 bg-blue-500 transition-all duration-300 rounded-full" />
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="ml-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow hover:shadow-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-[0.88rem]"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 px-4 pb-4 pt-2 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left py-2.5 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-[0.95rem]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="block w-full mt-2 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-center text-[0.95rem]"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
