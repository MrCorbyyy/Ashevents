import { motion } from "motion/react";
import { Star } from "lucide-react";
import { FaSnapchat } from "react-icons/fa";

export function CEOSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[0.7rem] mb-3 block">Meet the Founder</span>
          <h2 className="text-slate-900 dark:text-white text-4xl lg:text-5xl font-black tracking-tight">
            The Face of <span className="text-blue-600">AshEvents</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ── LEFT: Photo card ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative pb-6"
          >
            <div className="relative rounded-[2rem] overflow-hidden h-[540px] shadow-2xl shadow-blue-900/15 bg-white dark:bg-slate-900 group max-w-[580px] mx-auto lg:ml-auto lg:mr-0">
              {/* Main image */}
              <img
                src="/images/ceo..jpg"
                alt="Nana Achiaa Peprah Boadu Asha — Founder & CEO of AshEvents"
                className="relative z-10 w-full h-full object-cover object-top select-none"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent z-20" />

              {/* Floating credential card — with floating animation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: [0, -10, 0],
                }}
                viewport={{ once: true }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  opacity: { duration: 0.8, delay: 0.4 }
                }}
                whileHover={{ scale: 1.05, y: -15 }}
                className="absolute bottom-4 left-4 z-30 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20 max-w-[210px] cursor-default"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-600/10 flex items-center justify-center">
                    <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white font-black text-[0.8rem] leading-tight">Marketing Graduate</p>
                    <p className="text-blue-600 text-[0.7rem] font-bold">BSc. 2025</p>
                  </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-[0.72rem] leading-snug">
                  Turning passion into premium event experiences.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-400 px-5 py-2 rounded-full text-[0.72rem] font-black uppercase tracking-[0.18em] mb-6 self-start">
              <Star className="w-3 h-3 fill-current" />
              CEO of AshEvents
            </div>

            {/* Name */}
            <h2
              className="text-slate-900 dark:text-white font-black leading-[1.1] tracking-tight mb-4"
              style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.7rem)" }}
            >
              Nana Achiaa<br />
              <span className="text-blue-600 dark:text-blue-500">Peprah Boadu Asha</span>
            </h2>

            {/* Founder/CEO role bar */}
            <div className="bg-[#3D5A80] text-white px-8 py-3 mb-8 self-start shadow-md">
              <span className="font-black text-[0.95rem] uppercase tracking-[0.2em]">Founder / CEO</span>
            </div>

            {/* Bio */}
            <p className="text-slate-600 dark:text-slate-400 text-[1.15rem] leading-relaxed font-medium mb-10">
              Asha is a Marketing graduate and the founder of Ashevents, a brand she established in 2024 during her university days. Driven by her love for celebrations and her innovative mindset, she transformed her passion into a growing business. Asha is known for her creativity, attention to detail, and ability to bring unique ideas to life. Through Ashevents, she specializes in creating memorable experiences from intimate setups to elegant event decor ensuring every moment feels special and unforgettable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { label: "Event Specialist", sub: "Décor & Styling" },
                { label: "Creative Vision", sub: "Unique Ideas" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white font-black text-[0.88rem]">{item.label}</p>
                    <p className="text-blue-600 dark:text-blue-400 text-[0.75rem] font-semibold">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social CTAs */}
            <div className="flex items-center gap-4 self-start mt-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/asheventsgh_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center transition-all duration-300 shadow-lg shadow-pink-600/30 hover:scale-110 active:scale-95"
                title="Follow on Instagram"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/233596405164?text=Hi%20Ashevents%20!%20I%20came%20across%20your%20website%20and%20I%27d%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:scale-110 active:scale-95"
                title="Chat on WhatsApp"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.12 1.524 5.857L0 24l6.299-1.652A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.945 9.945 0 01-5.112-1.408l-.367-.217-3.796.996.974-3.712-.234-.374A9.943 9.943 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
              </a>

              {/* Snapchat */}
              <a
  href="https://www.snapchat.com/add/blacashaaa"
  target="_blank"
  rel="noopener noreferrer"
  className="w-14 h-14 rounded-full bg-[#FFFC00] hover:bg-[#efec00] text-black flex items-center justify-center transition-all duration-300 shadow-lg shadow-[#FFFC00]/30 hover:scale-110 active:scale-95"
  title="Add on Snapchat"
>
  <FaSnapchat className="w-7 h-7" />
</a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@asheventsgh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-black hover:bg-slate-800 text-white flex items-center justify-center transition-all duration-300 shadow-lg shadow-black/30 hover:scale-110 active:scale-95"
                title="Watch on TikTok"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.81-.12-.9.24-1.72.83-2.25 1.6-.56.81-.78 1.81-.62 2.78.15 1.08.81 2.04 1.69 2.66.73.54 1.64.81 2.55.81 1.32-.01 2.54-.6 3.29-1.69.49-.67.73-1.49.73-2.31-.01-4.19-.01-8.38-.01-12.57z" />
                </svg>
              </a>
            </div>

            {/* Tagline */}
            <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800">
              <p className="text-slate-900 dark:text-white font-black text-[0.82rem] uppercase tracking-[0.2em]">

              </p>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
