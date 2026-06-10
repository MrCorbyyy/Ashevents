import { Instagram } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { FaSnapchat } from "react-icons/fa";


export function ContactChannels() {
  const channels = [
    {
      name: "WhatsApp",
      description: "Chat with us for instant bookings and quick enquiries.",
      cta: "Start Chat",
      href: "https://wa.me/233596405164?text=Hi%20Ashevents%20!%20I%20came%20across%20your%20website%20and%20I%27d%20like%20to%20enquire%20about%20your%20services.",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.395 5.608L0 24l6.545-1.371A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.366l-.36-.214-3.733.782.8-3.647-.234-.373A9.818 9.818 0 1112 21.818z"/>
        </svg>
      ),
      color: "bg-[#25D366]",
      lightColor: "bg-[#25D366]/10",
      textColor: "text-[#25D366]",
    },

    {
      name: "Instagram",
      description: "Follow our journey and see our latest event inspirations.",
      cta: "View Profile",
      href: "https://instagram.com/asheventsgh_",
      icon: Instagram,
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      lightColor: "bg-pink-500/10",
      textColor: "text-pink-500",
    },
    {
  name: "Snapchat",
  description: "Get a behind-the-scenes look at how we create magic.",
  cta: "Add Friend",
  href: "https://www.snapchat.com/add/blacashaaa",
  icon: ({ className }: { className?: string }) => (
    <FaSnapchat className={className} />
  ),
},

    {
      name: "TikTok",
      description: "Watch our creative process and event highlights in motion.",
      cta: "Watch Videos",
      href: "https://tiktok.com/@asheventsgh",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.81-.12-.9.24-1.72.83-2.25 1.6-.56.81-.78 1.81-.62 2.78.15 1.08.81 2.04 1.69 2.66.73.54 1.64.81 2.55.81 1.32-.01 2.54-.6 3.29-1.69.49-.67.73-1.49.73-2.31-.01-4.19-.01-8.38-.01-12.57z" />
        </svg>
      ),
      color: "bg-black",
      lightColor: "bg-black/5",
      textColor: "text-black",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 uppercase tracking-widest mb-3 text-[0.8rem] font-bold">
            Connect With Us
          </span>
          <h2 className="text-gray-900 mb-4 text-[clamp(2rem,5vw,3rem)] font-black tracking-tight">
            Our Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Channels</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[1rem] leading-[1.8]">
            Pick your favorite platform to reach out. Whether you want to book an event or just say hello, we're here for you.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {channels.map((channel, i) => (
            <a
              key={i}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 ${channel.lightColor} ${channel.textColor} rounded-2xl flex items-center justify-center mb-8`}>
                <channel.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-gray-900 text-[1.4rem] font-black mb-3 tracking-tight">
                {channel.name}
              </h3>
              <p className="text-slate-500 text-[0.95rem] leading-[1.6] mb-8 font-medium">
                {channel.description}
              </p>

              {/* CTA Button */}
              <div className="inline-flex items-center gap-2 font-bold text-[0.9rem] text-blue-600">
                {channel.cta}
                <ArrowRight className="w-4 h-4" />
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-8 right-8 w-2 h-2 rounded-full ${channel.color} opacity-40`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
