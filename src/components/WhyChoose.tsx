import { ShieldCheck, Zap, Heart, Smartphone, Sparkles, CircleDollarSign, Star } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    title: "Exquisite & Trusted",
    description: "Premium event styling with meticulous attention to detail to protect your vision 24/7.",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: "Lightning Fast",
    description: "Fast setups and real-time event management. Your vision comes to life at the speed of light.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is always here to help, whenever and wherever you need us for your big day.",
    icon: <Heart className="w-8 h-8" />
  },
  {
    title: "Client First",
    description: "Full-featured planning experience. Manage everything from your consultation to the final reveal.",
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    title: "Creative Artistry",
    description: "Grow your memories with competitive rates and expert design guidance.",
    icon: <Sparkles className="w-8 h-8" />
  },
  {
    title: "No Hidden Fees",
    description: "Transparent pricing with no surprises. What you see is what you get.",
    icon: <CircleDollarSign className="w-8 h-8" />
  }
];

export function WhyChoose() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Badge Container for ONLY the text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-blue-600 border border-blue-600 px-6 py-2 rounded-full mb-8 shadow-lg shadow-blue-600/20"
          >
            <span className="text-white font-black uppercase tracking-[0.2em] text-[0.7rem]">
              Why Choose AshEvents
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-900 text-[clamp(2.5rem,5vw,3.5rem)] font-black tracking-tighter leading-tight mb-6"
          >
            Events Made Simple, <br />
            <span className="text-blue-600">Faster & Personal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-[clamp(1rem,1.8vw,1.15rem)] leading-relaxed font-medium"
          >
            Experience the future of event planning with cutting-edge creativity, unmatched precision, and customer service that truly cares.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-[1.5rem] flex items-center justify-center mb-8 shadow-lg shadow-blue-600/10">
                {feature.icon}
              </div>
              <h3 className="text-slate-900 text-[1.4rem] font-black tracking-tight mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-[0.95rem] font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
