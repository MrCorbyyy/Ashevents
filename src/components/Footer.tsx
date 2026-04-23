import { Heart, Instagram, MessageCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

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
    <footer className="bg-white text-slate-900 border-t border-slate-100">
      {/* Footer Body */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Brand */}
        <div>
          <div className="mb-6">
            <div className="bg-white rounded-2xl p-4 inline-block shadow-xl shadow-blue-500/5 border border-slate-100">
              <div className="flex items-center font-black tracking-tighter text-[1.6rem]">
                <span className="text-blue-700">Ash</span>
                <span className="text-blue-400">Events</span>
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-[0.9rem] leading-[1.8] max-w-md">
            Creating magical, unforgettable celebrations across Nigeria. Your dream event is our passion, and every detail matters.
          </p>
          <div className="flex gap-4 mt-6">
            {[
              {
                icon: Instagram,
                href: "https://instagram.com/ashevents_",
                label: "Instagram",
                bg: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
                iconColor: "text-white"
              },
              {
                icon: ({ className }: { className?: string }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.81-.12-.9.24-1.72.83-2.25 1.6-.56.81-.78 1.81-.62 2.78.15 1.08.81 2.04 1.69 2.66.73.54 1.64.81 2.55.81 1.32-.01 2.54-.6 3.29-1.69.49-.67.73-1.49.73-2.31-.01-4.19-.01-8.38-.01-12.57z" />
                  </svg>
                ),
                href: "https://tiktok.com/@ashevents",
                label: "TikTok",
                bg: "bg-black",
                iconColor: "text-white"
              },
              {
                icon: MessageCircle,
                href: "https://wa.me/234596405164",
                label: "WhatsApp",
                bg: "bg-[#25D366]",
                iconColor: "text-white"
              },
              {
                icon: ({ className }: { className?: string }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.11 15.22c-.14.36-.43.68-.82.94-1.2.82-3.23 1.25-5.28 1.25-2.05 0-4.08-.43-5.28-1.25-.39-.26-.68-.58-.82-.94-.21-.52-.16-1.1.13-1.63.29-.53.79-.98 1.44-1.32.65-.34 1.44-.59 2.34-.74.9-.15 1.86-.23 2.89-.23 1.03 0 1.99.08 2.89.23.9.15 1.69.4 2.34.74.65.34 1.15.79 1.44 1.32.29.53.34 1.11.13 1.63z" />
                  </svg>
                ),
                href: "#",
                label: "Snapchat",
                bg: "bg-[#FFFC00]",
                iconColor: "text-black"
              },
            ].map(({ icon: Icon, href, label, bg, iconColor }, i) => (
              <a
                key={i}
                href={href}
                className={`group w-12 h-12 rounded-2xl ${bg} flex items-center justify-center transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:scale-110`}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
              >
                <Icon className={`w-6 h-6 ${iconColor}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-slate-900 mb-6 text-[1rem] font-bold tracking-tight">Contact Us</h4>
          <div className="space-y-4">
            <a
              href="https://wa.me/234596405164"
              className="flex items-center gap-4 text-slate-500 hover:text-blue-600 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shadow-sm group-hover:bg-[#25D366] group-hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </div>
              <p className="text-[0.9rem] font-medium">+233 59 640 5164 (WhatsApp)</p>
            </a>
            <a
              href="https://instagram.com/ashevents_"
              className="flex items-center gap-4 text-slate-500 hover:text-blue-600 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 shadow-sm group-hover:bg-gradient-to-tr group-hover:from-[#f9ce34] group-hover:via-[#ee2a7b] group-hover:to-[#6228d7] group-hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </div>
              <p className="text-[0.9rem] font-medium">@ashevents_</p>
            </a>
            <div className="flex items-center gap-4 text-slate-500 hover:text-blue-600 transition-colors group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-black group-hover:text-white transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.81-.12-.9.24-1.72.83-2.25 1.6-.56.81-.78 1.81-.62 2.78.15 1.08.81 2.04 1.69 2.66.73.54 1.64.81 2.55.81 1.32-.01 2.54-.6 3.29-1.69.49-.67.73-1.49.73-2.31-.01-4.19-.01-8.38-.01-12.57z" /></svg>
              </div>
              <p className="text-[0.9rem] font-medium">@ashevents (TikTok)</p>
            </div>
            <div className="flex items-center gap-4 text-slate-500 hover:text-blue-600 transition-colors group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 shadow-sm group-hover:bg-[#FFFC00] group-hover:text-black transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.11 15.22c-.14.36-.43.68-.82.94-1.2.82-3.23 1.25-5.28 1.25-2.05 0-4.08-.43-5.28-1.25-.39-.26-.68-.58-.82-.94-.21-.52-.16-1.1.13-1.63.29-.53.79-.98 1.44-1.32.65-.34 1.44-.59 2.34-.74.9-.15 1.86-.23 2.89-.23 1.03 0 1.99.08 2.89.23.9.15 1.69.4 2.34.74.65.34 1.15.79 1.44 1.32.29.53.34 1.11.13 1.63z" /></svg>
              </div>
              <p className="text-[0.9rem] font-medium">ashevents (Snapchat)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-100 py-6 px-4 text-center">
        <p className="text-slate-400 flex items-center justify-center gap-1.5 text-[0.85rem]">
          © {new Date().getFullYear()} AshEvents. Crafted with{" "}
          <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> for beautiful celebrations.
        </p>
      </div>
    </footer>
  );
}
