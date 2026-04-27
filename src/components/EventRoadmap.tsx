import { motion } from "motion/react";
import { MessageSquare, PenTool, Sparkles, ShoppingBag, PartyPopper, ArrowRight } from "lucide-react";

const roadmapSteps = [
  {
    icon: <MessageSquare className="w-7 h-7" />,
    title: "Initial Connection",
    description: "Reach out via WhatsApp Instagram Tiktok to share your date and basic vision. We'll check our availability and say hi!",
    color: "bg-blue-600",
    shadow: "shadow-blue-200"
  },
  {
    icon: <PenTool className="w-7 h-7" />,
    title: "Design Consultation",
    description: "A deep dive into your dream. We discuss themes, color palettes, and the unique vibes that make you, you!.",
    color: "bg-sky-500",
    shadow: "shadow-sky-200"
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Bespoke Proposal",
    description: "Receive a carefully curated plan and mood board that fits your style and budget perfectly.",
    color: "bg-indigo-500",
    shadow: "shadow-indigo-200"
  },
  {
    icon: <ShoppingBag className="w-7 h-7" />,
    title: "The Curation",
    description: "Our team sources the finest materials and coordinates every detail behind the scenes while you relax.",
    color: "bg-blue-700",
    shadow: "shadow-blue-300"
  },
  {
    icon: <PartyPopper className="w-7 h-7" />,
    title: "Your Magic Day",
    description: "The moment of truth. We bring the magic to life with flawless execution, leaving you to enjoy every second.",
    color: "bg-blue-600",
    shadow: "shadow-blue-400"
  }
];

export function EventRoadmap() {
  const whatsappLink = "https://wa.me/233596405164?text=Hi%20Ashevents%20!%20I%27ve%20seen%20your%20roadmap%20and%20I%27d%20like%20to%20begin%20my%20event%20journey%20with%20you.";

  return (
    <section id="roadmap" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-blue-600 font-black uppercase tracking-[0.3em] text-[0.75rem] mb-4"
          >
            Your Journey With Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-900 dark:text-white text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter leading-tight mb-6"
          >
            The Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Perfection</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-[1.1rem] font-medium leading-relaxed"
          >
            From the first spark of inspiration to the final magical moment, we ensure every detail of your event is handled with boutique precision.
          </motion.p>
        </div>

        {/* Roadmap Items */}
        <div className="relative">
          {/* Vertical line for mobile, Horizontal for desktop? No, staggered vertical is more premium */}
          <div className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-blue-50 dark:bg-slate-900 hidden lg:block" />

          <div className="space-y-16 lg:space-y-0">
            {roadmapSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-20 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } lg:mb-24 last:mb-0`}
              >
                {/* Connector Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-4 border-blue-600 z-10 hidden lg:block" />

                {/* Content Card */}
                <div className={`w-full lg:w-1/2 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-[2rem] ${step.color} text-white mb-6 shadow-xl ${step.shadow}`}>
                    {step.icon}
                  </div>
                  <h3 className="text-slate-900 dark:text-white text-2xl font-black mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-[1.05rem] leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Empty space for the other side on desktop */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-32 text-center"
        >
          <div className="inline-block relative group p-[2px] rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-blue-600/30">
            <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#1e40af_5%,#2563eb_10%,#1e40af_15%,transparent_20%)]" />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-12 py-5 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 rounded-[2.5rem] transition-all duration-300 text-[1.1rem] font-black group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white"
            >
              Begin Your Story
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <p className="mt-8 text-slate-400 dark:text-slate-500 font-bold text-[0.8rem] uppercase tracking-[0.2em]">
            Limited availability for 2024/2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
