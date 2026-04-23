import { useState, useEffect } from "react";
import { Menu, X, Search, Sun, Moon } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home", route: "/" },
  { label: "Services", href: "/services", route: "/services" },
  { label: "Gallery", href: "/gallery", route: "/gallery" },
  { label: "Packages", href: "/packages", route: "/packages" },
  { label: "Testimonials", href: "#testimonials", route: "/" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check for initial theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleNav = (href: string, route: string) => {
    setMenuOpen(false);

    if (route !== location.pathname) {
      if (href.startsWith("#")) {
        navigate(`/${href}`);
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        navigate(href);
      }
    } else {
      if (href.startsWith("#")) {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/97 dark:bg-slate-950/97 backdrop-blur-sm shadow-sm border-b border-blue-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center h-20">
          {/* Text Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center mr-12">
            <div className="flex items-center font-black tracking-tighter text-[1.45rem]">
              <span className="text-blue-700">Ash</span>
              <span className="text-black dark:text-white">Events</span>
            </div>
          </Link>

          {/* Desktop Links (Left) */}
          <div className="hidden md:flex items-center flex-1">
            <div className="flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href, link.route)}
                  className="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative group text-[0.92rem] font-bold"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-0.5 bg-blue-500 transition-all duration-300 rounded-full" />
                </button>
              ))}
            </div>

            {/* Right Side Tools */}
            <div className="ml-auto flex items-center gap-4">
              {/* Contact Us Button (Now First) */}
              <div className="relative group p-[2px] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/30">
                <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#1e40af_5%,#2563eb_10%,#1e40af_15%,transparent_20%)] opacity-100" />
                <button
                  onClick={() => handleNav("#contact", "/")}
                  className="relative px-6 py-2.5 bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 rounded-full font-bold text-[0.88rem] transition-all duration-300 flex items-center justify-center w-full h-full group-hover:bg-blue-700 group-hover:text-white dark:group-hover:bg-blue-600"
                >
                  Contact Us
                </button>
              </div>

              {/* Search Icon */}
              <button className="p-2 text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Search className="w-5 h-5" />
              </button>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                    >
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                    >
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile Tools (Fully Responsive) */}
          <div className="flex md:hidden items-center gap-2 ml-auto">
            {/* Mobile Search */}
            <button className="p-2 text-gray-500 dark:text-slate-400 hover:text-blue-600">
              <Search className="w-5 h-5" />
            </button>
            
            {/* Mobile Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-slate-400"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              className="p-2 text-gray-600 dark:text-slate-400"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-blue-100 dark:border-slate-800 px-4 pb-6 pt-2 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href, link.route)}
              className="block w-full text-left py-3 px-3 text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-900 rounded-lg transition-colors text-[0.95rem] font-bold"
            >
              {link.label}
            </button>
          ))}
          <div className="relative group p-[2px] rounded-xl overflow-hidden mt-4 shadow-xl shadow-blue-600/20">
            <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#1e40af_5%,#2563eb_10%,#1e40af_15%,transparent_20%)] opacity-100" />
            <button
              onClick={() => handleNav("#contact", "/")}
              className="relative w-full py-3 px-3 bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 rounded-lg text-center font-bold text-[0.95rem] transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
