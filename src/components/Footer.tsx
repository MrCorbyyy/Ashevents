import { Heart, Instagram } from "lucide-react";
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
                icon: ({ className }: { className?: string }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.395 5.608L0 24l6.545-1.371A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.366l-.36-.214-3.733.782.8-3.647-.234-.373A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                ),
                href: "https://wa.me/233596405164?text=Hello%20AshEvents!%20%F0%9F%91%8B%20I%20came%20across%20your%20website%20and%20I%27m%20interested%20in%20your%20event%20planning%20services.%20I%27d%20love%20to%20discuss%20how%20you%20can%20make%20my%20event%20unforgettable!%20%F0%9F%8E%89",
                label: "WhatsApp",
                bg: "bg-[#25D366]",
                iconColor: "text-white"
              },

              {
                icon: ({ className }: { className?: string }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.317 4.484l-.01.143c-.005.063-.01.13-.014.194.329.166.729.242 1.167.112.197-.057.405-.131.648-.131.281 0 .749.209.749.724 0 .443-.334.776-.75.934-.118.047-.247.088-.382.13-.613.196-1.453.463-1.638 1.862-.01.075-.014.148-.013.221 0 .077.008.152.013.224.141 2.035 3.007 5.203 4.839 6.256.197.113.265.373.164.58l-.065.137c-.135.285-.449.471-.781.471a.96.96 0 01-.207-.022 8.856 8.856 0 01-1.065-.317 4.7 4.7 0 00-1.597-.345 5.044 5.044 0 00-.976.102 3.89 3.89 0 01-.687.096c-.033.001-.067.001-.1.001-.512 0-.998-.213-1.492-.537-.743-.489-1.404-1.199-1.985-1.834-.501-.547-1.032-1.077-1.614-1.494a2.07 2.07 0 00-1.214-.434c-.453 0-.887.147-1.303.434-.577.417-1.104.943-1.601 1.487-.584.637-1.248 1.353-2 1.844-.494.324-.979.537-1.491.537-.034 0-.068 0-.101-.001a3.89 3.89 0 01-.688-.096 5.052 5.052 0 00-.976-.102 4.712 4.712 0 00-1.597.345 8.864 8.864 0 01-1.065.317.968.968 0 01-.207.022c-.332 0-.647-.186-.781-.471l-.065-.137c-.101-.207-.033-.467.164-.58 1.832-1.053 4.698-4.221 4.839-6.256.005-.072.013-.147.013-.224 0-.073-.003-.146-.013-.221-.185-1.399-1.025-1.666-1.638-1.862-.135-.042-.264-.083-.382-.13-.416-.158-.75-.491-.75-.934 0-.515.468-.724.749-.724.243 0 .451.074.648.131.438.13.838.054 1.167-.112l-.014-.194-.01-.143c-.086-1.265-.212-3.291.317-4.484C7.859 1.069 11.216.793 12.206.793z"/>
                  </svg>
                ),
                href: "https://www.snapchat.com/add/blacashaaa",
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
              href="https://wa.me/233596405164?text=Hello%20AshEvents!%20%F0%9F%91%8B%20I%20came%20across%20your%20website%20and%20I%27m%20interested%20in%20your%20event%20planning%20services.%20I%27d%20love%20to%20discuss%20how%20you%20can%20make%20my%20event%20unforgettable!%20%F0%9F%8E%89"
              className="flex items-center gap-4 text-slate-500 hover:text-blue-600 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shadow-sm group-hover:bg-[#25D366] group-hover:text-white transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.395 5.608L0 24l6.545-1.371A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.366l-.36-.214-3.733.782.8-3.647-.234-.373A9.818 9.818 0 1112 21.818z"/>
                </svg>
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
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.317 4.484l-.01.143c-.005.063-.01.13-.014.194.329.166.729.242 1.167.112.197-.057.405-.131.648-.131.281 0 .749.209.749.724 0 .443-.334.776-.75.934-.118.047-.247.088-.382.13-.613.196-1.453.463-1.638 1.862-.01.075-.014.148-.013.221 0 .077.008.152.013.224.141 2.035 3.007 5.203 4.839 6.256.197.113.265.373.164.58l-.065.137c-.135.285-.449.471-.781.471a.96.96 0 01-.207-.022 8.856 8.856 0 01-1.065-.317 4.7 4.7 0 00-1.597-.345 5.044 5.044 0 00-.976.102 3.89 3.89 0 01-.687.096c-.033.001-.067.001-.1.001-.512 0-.998-.213-1.492-.537-.743-.489-1.404-1.199-1.985-1.834-.501-.547-1.032-1.077-1.614-1.494a2.07 2.07 0 00-1.214-.434c-.453 0-.887.147-1.303.434-.577.417-1.104.943-1.601 1.487-.584.637-1.248 1.353-2 1.844-.494.324-.979.537-1.491.537-.034 0-.068 0-.101-.001a3.89 3.89 0 01-.688-.096 5.052 5.052 0 00-.976-.102 4.712 4.712 0 00-1.597.345 8.864 8.864 0 01-1.065.317.968.968 0 01-.207.022c-.332 0-.647-.186-.781-.471l-.065-.137c-.101-.207-.033-.467.164-.58 1.832-1.053 4.698-4.221 4.839-6.256.005-.072.013-.147.013-.224 0-.073-.003-.146-.013-.221-.185-1.399-1.025-1.666-1.638-1.862-.135-.042-.264-.083-.382-.13-.416-.158-.75-.491-.75-.934 0-.515.468-.724.749-.724.243 0 .451.074.648.131.438.13.838.054 1.167-.112l-.014-.194-.01-.143c-.086-1.265-.212-3.291.317-4.484C7.859 1.069 11.216.793 12.206.793z"/></svg>
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
