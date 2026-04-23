import { Instagram, MessageCircle, ArrowRight } from "lucide-react";

export function ContactChannels() {
  const channels = [
    {
      name: "WhatsApp",
      description: "Chat with us for instant bookings and quick enquiries.",
      cta: "Start Chat",
      href: "https://wa.me/234596405164",
      icon: MessageCircle,
      color: "bg-[#25D366]",
      lightColor: "bg-[#25D366]/10",
      textColor: "text-[#25D366]",
      hoverShadow: "hover:shadow-green-500/20",
    },
    {
      name: "Instagram",
      description: "Follow our journey and see our latest event inspirations.",
      cta: "View Profile",
      href: "https://instagram.com/ashevents_",
      icon: Instagram,
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      lightColor: "bg-pink-500/10",
      textColor: "text-pink-500",
      hoverShadow: "hover:shadow-pink-500/20",
    },
    {
      name: "Snapchat",
      description: "Get a behind-the-scenes look at how we create magic.",
      cta: "Add Friend",
      href: "https://www.snapchat.com/add/ashevents",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.956c-4.223 0-6.195 2.766-6.195 5.568 0 1.25.32 2.156.32 2.156s-.11.127-.143.141c-.482.203-1.464.631-1.464 1.705 0 .548.337.892.656 1.055.244.123.513.176.772.176.155 0 .313-.021.463-.06.27-.068.512-.132.83-.132.185 0 .37.025.564.081.246.071.492.146.745.146.175 0 .351-.037.522-.112.56-.247.785-.826.785-1.474 0-.175-.016-.341-.044-.501-.035-.198-.103-.393-.205-.569-.117-.2-.175-.417-.175-.64 0-.522.424-.946.946-.946.368 0 .684.21.84.516.101.196.157.417.157.649 0 .175-.015.344-.044.507-.035.197-.101.391-.2.563-.118.203-.178.423-.178.652 0 .522.424.946.946.946.368 0 .684-.21.84-.516.101-.196.157.417.157-.649 0-.175-.016-.344-.044-.507-.036-.198-.103-.391-.204-.563-.117-.203-.176-.423-.176-.652 0-.522.423-.946.946-.946s.946.424.946.946c0 .175-.016.341-.044.501-.035.198-.103.393-.205.569-.117.2-.175.417-.175.64 0 .648.225 1.227.785 1.474.171.075.347.112.522.112.253 0 .499-.075.745-.146.194-.056.379-.081.564-.081.318 0 .56.064.83.132.15.039.308.06.463.06.259 0 .528-.053.772-.176.319-.163.656-.507.656-1.055 0-1.074-.982-1.502-1.464-1.705-.033-.014-.143-.141-.143-.141s.32-.906.32-2.156c0-2.802-1.972-5.568-6.195-5.568z"/>
        </svg>
      ),
      color: "bg-[#FFFC00]",
      lightColor: "bg-[#FFFC00]/10",
      textColor: "text-yellow-600",
      hoverShadow: "hover:shadow-yellow-500/20",
    },
    {
      name: "TikTok",
      description: "Watch our creative process and event highlights in motion.",
      cta: "Watch Videos",
      href: "https://tiktok.com/@ashevents",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.81-.12-.9.24-1.72.83-2.25 1.6-.56.81-.78 1.81-.62 2.78.15 1.08.81 2.04 1.69 2.66.73.54 1.64.81 2.55.81 1.32-.01 2.54-.6 3.29-1.69.49-.67.73-1.49.73-2.31-.01-4.19-.01-8.38-.01-12.57z"/>
        </svg>
      ),
      color: "bg-black",
      lightColor: "bg-black/5",
      textColor: "text-black",
      hoverShadow: "hover:shadow-black/10",
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
              className={`group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl ${channel.hoverShadow}`}
            >
              {/* Background Glow */}
              <div className={`absolute -inset-2 ${channel.lightColor} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              {/* Icon Container */}
              <div className={`w-16 h-16 ${channel.lightColor} ${channel.textColor} rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
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
              <div className="inline-flex items-center gap-2 font-bold text-[0.9rem] text-blue-600 group-hover:text-blue-700 transition-colors">
                {channel.cta}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-8 right-8 w-2 h-2 rounded-full ${channel.color} opacity-20 group-hover:opacity-100 transition-opacity`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
