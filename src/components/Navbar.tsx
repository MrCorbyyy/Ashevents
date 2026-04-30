import { useState, useEffect, useRef } from "react";
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

const contactOptions = [
  {
    name: "WhatsApp",
    href: "https://wa.me/233596405164?text=Hi%20Ashevents%20!%20I%20came%20across%20your%20website%20and%20I%27d%20like%20to%20enquire%20about%20your%20services.",
    bg: "bg-[#25D366]",
    textDark: false,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.395 5.608L0 24l6.545-1.371A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.366l-.36-.214-3.733.782.8-3.647-.234-.373A9.818 9.818 0 1112 21.818z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@asheventsgh",
    bg: "bg-black",
    textDark: false,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.81-.12-.9.24-1.72.83-2.25 1.6-.56.81-.78 1.81-.62 2.78.15 1.08.81 2.04 1.69 2.66.73.54 1.64.81 2.55.81 1.32-.01 2.54-.6 3.29-1.69.49-.67.73-1.49.73-2.31-.01-4.19-.01-8.38-.01-12.57z" />
      </svg>
    ),
  },
  {
    name: "Snapchat",
    href: "https://www.snapchat.com/add/blacashaaa",
    bg: "bg-[#FFFC00]",
    textDark: true,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.317 4.484l-.01.143c-.005.063-.01.13-.014.194.329.166.729.242 1.167.112.197-.057.405-.131.648-.131.281 0 .749.209.749.724 0 .443-.334.776-.75.934-.118.047-.247.088-.382.13-.613.196-1.453.463-1.638 1.862-.01.075-.014.148-.013.221 0 .077.008.152.013.224.141 2.035 3.007 5.203 4.839 6.256.197.113.265.373.164.58l-.065.137c-.135.285-.449.471-.781.471a.96.96 0 01-.207-.022 8.856 8.856 0 01-1.065-.317 4.7 4.7 0 00-1.597-.345 5.044 5.044 0 00-.976.102 3.89 3.89 0 01-.687.096c-.033.001-.067.001-.1.001-.512 0-.998-.213-1.492-.537-.743-.489-1.404-1.199-1.985-1.834-.501-.547-1.032-1.077-1.614-1.494a2.07 2.07 0 00-1.214-.434c-.453 0-.887.147-1.303.434-.577.417-1.104.943-1.601 1.487-.584.637-1.248 1.353-2 1.844-.494.324-.979.537-1.491.537-.034 0-.068 0-.101-.001a3.89 3.89 0 01-.688-.096 5.052 5.052 0 00-.976-.102 4.712 4.712 0 00-1.597.345 8.864 8.864 0 01-1.065.317.968.968 0 01-.207.022c-.332 0-.647-.186-.781-.471l-.065-.137c-.101-.207-.033-.467.164-.58 1.832-1.053 4.698-4.221 4.839-6.256.005-.072.013-.147.013-.224 0-.073-.003-.146-.013-.221-.185-1.399-1.025-1.666-1.638-1.862-.135-.042-.264-.083-.382-.13-.416-.158-.75-.491-.75-.934 0-.515.468-.724.749-.724.243 0 .451.074.648.131.438.13.838.054 1.167-.112l-.014-.194-.01-.143c-.086-1.265-.212-3.291.317-4.484C7.859 1.069 11.216.793 12.206.793z" />
      </svg>
    ),
  },
];

const searchData = [
  // Nav Links
  { title: "Home", category: "Page", href: "/", type: "route" },
  { title: "Services", category: "Page", href: "/services", type: "route" },
  { title: "Gallery", category: "Page", href: "/gallery", type: "route" },
  { title: "Packages", category: "Page", href: "/packages", type: "route" },
  { title: "Testimonials", category: "Section", href: "#testimonials", type: "anchor" },
  // Services
  { title: "Money Bouquet", category: "Service", href: "/services#money-bouquet", type: "route" },
  { title: "Flower Bouquet", category: "Service", href: "/services#flower-bouquet", type: "route" },
  { title: "Backdrops", category: "Service", href: "/services#backdrops", type: "route" },
  { title: "Picnic Setup", category: "Service", href: "/services#picnic-setup", type: "route" },
  { title: "Room Decor", category: "Service", href: "/services#room-decor", type: "route" },
  { title: "Balloon Decor", category: "Service", href: "/services#balloon-decor", type: "route" },
  { title: "Card/Magazines", category: "Service", href: "/services#cards-magazines", type: "route" },
  { title: "Birthday Packages", category: "Service", href: "/services#birthday-packages", type: "route" },
  { title: "Proposal Decor", category: "Service", href: "/services#proposal-decor", type: "route" },
  // Packages
  { title: "Basic Joy Package", category: "Package", href: "/packages", type: "route" },
  { title: "Premium Magic Package", category: "Package", href: "/packages", type: "route" },
  { title: "Luxury Grandeur Package", category: "Package", href: "/packages", type: "route" },
  { title: "Bespoke Signature Package", category: "Package", href: "/packages", type: "route" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const contactRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const filteredResults = searchQuery.trim() === ""
    ? []
    : searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 6);

  const handleSearchSelect = (item: typeof searchData[0]) => {
    setSearchQuery("");
    setIsSearchOpen(false);
    if (item.type === "anchor") {
      handleNav(item.href, "/");
    } else {
      navigate(item.href);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) {
        setShowContact(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center mr-12">
            <div className="flex items-center font-black tracking-tighter text-[1.45rem]">
              <span className="text-blue-700">Ash</span>
              <span className="text-black dark:text-white">Events</span>
            </div>
          </Link>

          {/* Desktop Nav */}
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

            <div className="ml-auto flex items-center gap-4">

              {/* Contact Us with social dropdown */}
              <div className="relative" ref={contactRef}>
                <div className="relative group p-[2px] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/30">
                  <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#1e40af_5%,#2563eb_10%,#1e40af_15%,transparent_20%)] opacity-100" />
                  <button
                    onClick={() => setShowContact(!showContact)}
                    className="relative px-6 py-2.5 bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 rounded-full font-bold text-[0.88rem] transition-all duration-300 flex items-center justify-center w-full h-full group-hover:bg-blue-700 group-hover:text-white dark:group-hover:bg-blue-600"
                  >
                    Contact Us
                  </button>
                </div>

                <AnimatePresence>
                  {showContact && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.85, y: -8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="absolute top-full right-0 mt-3 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 p-3 flex items-center gap-2 z-50"
                    >
                      <div className="absolute -top-1.5 right-8 w-3 h-3 bg-white dark:bg-slate-900 border-l border-t border-slate-100 dark:border-slate-800 rotate-45" />
                      {contactOptions.map((opt, i) => (
                        <motion.a
                          key={opt.name}
                          href={opt.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={opt.name}
                          initial={{ opacity: 0, scale: 0.4, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.4 }}
                          transition={{ delay: i * 0.08, type: "spring", stiffness: 500, damping: 22 }}
                          className={`w-10 h-10 ${opt.bg} ${opt.textDark ? "text-black" : "text-white"} rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
                        >
                          {opt.icon}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Search */}
              <div className="relative flex items-center" ref={searchRef}>
                <motion.div
                  initial={false}
                  animate={{ width: isSearchOpen ? 240 : 40 }}
                  className="relative flex items-center h-10 bg-gray-100 dark:bg-slate-800/50 rounded-full"
                >
                  <button
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className="flex items-center justify-center min-w-[40px] h-10 text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors z-10"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                  <AnimatePresence>
                    {isSearchOpen && (
                      <div className="flex-1 flex flex-col relative">
                        <motion.input
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          autoFocus
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && filteredResults.length > 0) {
                              handleSearchSelect(filteredResults[0]);
                            }
                          }}
                          placeholder="Search services..."
                          className="w-full bg-transparent border-none outline-none text-[0.88rem] pr-4 text-gray-700 dark:text-slate-200 placeholder:text-gray-400 dark:placeholder:text-slate-500"
                        />
                        {/* Results Dropdown */}
                        <AnimatePresence>
                          {searchQuery.trim() !== "" && filteredResults.length > 0 && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute top-full left-[-40px] right-0 mt-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden z-[100] min-w-[280px]"
                            >
                              <div className="px-4 py-2 bg-gray-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                                <span className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest">
                                  Search Results
                                </span>
                              </div>
                              {filteredResults.map((item, i) => (
                                <button
                                  key={i}
                                  onClick={() => handleSearchSelect(item)}
                                  className="w-full px-4 py-3 text-left hover:bg-blue-50 dark:hover:bg-blue-900/30 flex items-center justify-between group transition-colors"
                                >
                                  <div className="flex flex-col">
                                    <span className="text-[0.9rem] font-bold text-gray-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                      {item.title}
                                    </span>
                                    <span className="text-[0.7rem] text-gray-400 uppercase tracking-wider">
                                      {item.category}
                                    </span>
                                  </div>
                                  <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  </svg>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div key="sun" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          <div className="flex md:hidden items-center gap-2 ml-auto">
            <div className={`relative flex items-center ${isSearchOpen ? 'fixed inset-x-0 top-0 h-20 px-4 bg-white dark:bg-slate-950 z-[60] flex items-center' : ''}`} ref={isSearchOpen ? searchRef : null}>
              {isSearchOpen && (
                <div className="flex flex-col w-full">
                  <div className="flex items-center w-full gap-3 h-20">
                    <Search className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <input
                      autoFocus
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && filteredResults.length > 0) {
                          handleSearchSelect(filteredResults[0]);
                        }
                      }}
                      placeholder="Search for events, packages..."
                      className="flex-1 bg-transparent border-none outline-none text-[1rem] text-gray-700 dark:text-slate-200 placeholder:text-gray-400 dark:placeholder:text-slate-500"
                    />
                    <button
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="p-2 text-gray-400 dark:text-slate-500"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Mobile Results Dropdown */}
                  <AnimatePresence>
                    {searchQuery.trim() !== "" && filteredResults.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-20 left-0 right-0 bg-white dark:bg-slate-900 shadow-2xl border-t border-blue-50 dark:border-slate-800 max-h-[60vh] overflow-y-auto z-[70]"
                      >
                        <div className="px-6 py-3 bg-gray-50 dark:bg-slate-800/50 border-b border-gray-100 dark:border-slate-800">
                          <span className="text-[0.7rem] font-bold text-gray-400 uppercase tracking-[0.15em]">
                            Search Results
                          </span>
                        </div>
                        {filteredResults.map((item, i) => (
                          <button
                            key={i}
                            onClick={() => handleSearchSelect(item)}
                            className="w-full px-6 py-5 text-left border-b border-gray-50 dark:border-slate-800/30 flex items-center justify-between active:bg-blue-50 dark:active:bg-blue-900/20"
                          >
                            <div className="flex flex-col">
                              <span className="text-[1.05rem] font-bold text-gray-800 dark:text-slate-200">
                                {item.title}
                              </span>
                              <span className="text-[0.75rem] text-gray-400 uppercase tracking-widest mt-0.5">
                                {item.category}
                              </span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              {!isSearchOpen && (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-gray-500 dark:text-slate-400 hover:text-blue-600"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>
            {!isSearchOpen && (
              <>
                <button onClick={toggleTheme} className="p-2 text-gray-500 dark:text-slate-400">
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button className="p-2 text-gray-600 dark:text-slate-400" onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </>
            )}
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

          {/* Mobile Contact Us */}
          <div className="pt-2">
            <button
              onClick={() => setShowContact(!showContact)}
              className="w-full py-3 px-3 bg-blue-600 text-white rounded-xl text-center font-bold text-[0.95rem]"
            >
              {showContact ? "Close" : "Contact Us"}
            </button>
            <AnimatePresence>
              {showContact && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex items-center justify-center gap-4 pt-4 pb-2">
                    {contactOptions.map((opt, i) => (
                      <motion.a
                        key={opt.name}
                        href={opt.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={opt.name}
                        initial={{ opacity: 0, scale: 0.4 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 400, damping: 20 }}
                        className={`w-12 h-12 ${opt.bg} ${opt.textDark ? "text-black" : "text-white"} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        {opt.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </nav>
  );
}
