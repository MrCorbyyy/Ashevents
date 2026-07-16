import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CreditCard,
  Clock,
  RefreshCw,
  Edit3,
  Truck,
  Shield,
  Cloud,
  RotateCcw,
  User,
  ChevronDown,
  MessageCircle,
  MapPin,
  Sparkles,
  Package,
  CalendarCheck,
  HelpCircle,
} from "lucide-react";

const policies = [
  {
    id: 1,
    icon: CreditCard,
    title: "Booking & Payment Policy",
    color: "from-blue-500 to-blue-700",
    glow: "shadow-blue-500/30",
    points: [
      "A 50% non-refundable deposit is required to secure your booking.",
      "Bookings are confirmed only after the deposit has been received.",
      "The remaining balance must be paid at least a week before the event date.",
      "Please send proof of payment after completing your transaction.",
      "We do not accept payment after service delivery.",
    ],
  },
  {
    id: 2,
    icon: Clock,
    title: "Order Timeline",
    color: "from-violet-500 to-violet-700",
    glow: "shadow-violet-500/30",
    points: [
      "Orders should be placed at least 3 days in advance.",
      "Large events and custom setups should be booked earlier to allow adequate planning.",
      "Last-minute bookings are subject to availability and may attract an additional fee.",
    ],
  },
  {
    id: 3,
    icon: RefreshCw,
    title: "Cancellation & Rescheduling",
    color: "from-rose-500 to-rose-700",
    glow: "shadow-rose-500/30",
    points: [
      "Rescheduling requests must be made at least 7 days before the event.",
      "Cancellations or rescheduling made with less than 7 days notice may attract additional charges.",
      "All deposits, including the initial booking fee, are non-refundable.",
    ],
  },
  {
    id: 4,
    icon: Edit3,
    title: "Changes to Bookings",
    color: "from-amber-500 to-amber-700",
    glow: "shadow-amber-500/30",
    points: [
      "Any changes to your event details, design, location, or order must be communicated early.",
      "Changes requested after planning has begun may attract additional charges depending on the extent of the changes.",
    ],
  },
  {
    id: 5,
    icon: Truck,
    title: "Delivery & Pickup",
    color: "from-emerald-500 to-emerald-700",
    glow: "shadow-emerald-500/30",
    points: [
      "Delivery is available within our service locations.",
      "We currently do not offer nationwide delivery.",
      "Pickup is available by prior arrangement.",
    ],
  },
  {
    id: 6,
    icon: Shield,
    title: "Damage & Security Deposit",
    color: "from-cyan-500 to-cyan-700",
    glow: "shadow-cyan-500/30",
    subtitle: "Event Setups",
    points: [
      "Certain event setups may require a refundable security deposit.",
      "Clients are responsible for any loss, theft, or damage to items provided by Ashevents during the event.",
      "Repair or replacement costs will be deducted from the security deposit where necessary.",
      "The remaining balance of the security deposit will be refunded after all items have been inspected and confirmed to be in good condition.",
    ],
  },
  {
    id: 7,
    icon: Cloud,
    title: "Weather Policy",
    color: "from-sky-500 to-sky-700",
    glow: "shadow-sky-500/30",
    points: [
      "Outdoor events are subject to weather conditions.",
      "In the event of rain or other unfavorable weather, adjustments may be made to protect our decor and equipment.",
      "If the client chooses to proceed with an outdoor event, suitable shelter should be provided where necessary.",
      "Ashevents is not responsible for delays or damages caused by circumstances beyond our control.",
    ],
  },
  {
    id: 8,
    icon: RotateCcw,
    title: "Refund Policy",
    color: "from-pink-500 to-pink-700",
    glow: "shadow-pink-500/30",
    points: [
      "We operate a No Refund Policy.",
      "Refunds will only be considered if Ashevents is unable to deliver the agreed service due to an error on our part.",
    ],
  },
  {
    id: 9,
    icon: User,
    title: "Client Responsibility",
    color: "from-indigo-500 to-indigo-700",
    glow: "shadow-indigo-500/30",
    points: [
      "Please ensure all booking information (date, venue, time, contact details, and preferences) is accurate before making payment.",
      "Clients should report any concerns or damages immediately during the event so they can be addressed promptly.",
    ],
  },
];

const faqs = [
  { q: "Where are you located?", a: "We are based in Kumasi, Ghana.", icon: MapPin },
  { q: "Do you offer nationwide delivery?", a: "No. We currently deliver within Kumasi only.", icon: Truck },
  { q: "Do you only provide event decor?", a: "No. We offer much more than decor.", icon: Sparkles },
  {
    q: "What other services do you offer?",
    a: null,
    listItems: ["Flyers", "Logos", "Customized Cards", "Magazines", "Custom face fans / props", "Bridal fans"],
    icon: Package,
  },
  { q: "How do I book a service?", a: "Simply send us your preferred date, service, and requirements. We will guide you through the booking process.", icon: CalendarCheck },
  { q: "How early should I book?", a: "We recommend booking at least 3 days in advance. Large events should be booked earlier.", icon: Clock },
  { q: "Can I customize my order?", a: "Yes! All our services can be customized to suit your style, theme, and budget.", icon: Edit3 },
  { q: "Do you travel outside Kumasi?", a: "Yes, for event setups. Travel costs will be discussed before confirmation.", icon: Truck },
  { q: "What payment methods do you accept?", a: "We accept Mobile Money and Bank Transfers.", icon: CreditCard },
  { q: "How can I contact Ashevents?", a: "You can reach us via WhatsApp, phone call, our social media pages, or our website.", icon: MessageCircle },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = faq.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <div
        className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-4 px-6 py-5">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
            <Icon className="w-5 h-5" />
          </div>
          <p className="flex-1 font-bold text-gray-800 dark:text-slate-200 text-[0.95rem]">
            {faq.q}
          </p>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="flex-shrink-0 text-gray-400 dark:text-slate-500"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800 bg-blue-50/40 dark:bg-blue-900/10">
                {faq.a && (
                  <p className="text-gray-600 dark:text-slate-400 text-[0.92rem] leading-relaxed">
                    {faq.a}
                  </p>
                )}
                {faq.listItems && (
                  <ul className="space-y-1.5 mt-1">
                    {faq.listItems.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600 dark:text-slate-400 text-[0.92rem]">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function PolicyCard({ policy, index }: { policy: typeof policies[0]; index: number }) {
  const Icon = policy.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className={`group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl ${policy.glow} transition-all duration-300 overflow-hidden`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${policy.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl`} />
      <span className="absolute top-4 right-5 text-[2.5rem] font-black text-slate-100 dark:text-slate-800 select-none leading-none">
        {String(policy.id).padStart(2, "0")}
      </span>
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${policy.color} flex items-center justify-center text-white shadow-lg mb-5 relative z-10`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="mb-4 relative z-10">
        <h3 className="text-[1.05rem] font-black text-gray-800 dark:text-slate-100">{policy.title}</h3>
        {"subtitle" in policy && policy.subtitle && (
          <span className="text-[0.75rem] font-semibold text-gray-400 dark:text-slate-500">({policy.subtitle})</span>
        )}
      </div>
      <ul className="space-y-2.5 relative z-10">
        {policy.points.map((point, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${policy.color} flex-shrink-0`} />
            <span className="text-gray-600 dark:text-slate-400 text-[0.875rem] leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-400/10 dark:bg-violet-600/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-blue-600 dark:text-blue-400 text-[0.75rem] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6"
          >
            <Shield className="w-3.5 h-3.5" />
            Ashevents Official Policies
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-6"
          >
            General Booking &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Service Policies
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Please read through our policies carefully before making a booking.
            They are designed to ensure a smooth, transparent, and enjoyable
            experience for every client.
          </motion.p>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {policies.map((policy, i) => (
            <PolicyCard key={policy.id} policy={policy} index={i} />
          ))}
        </div>

        {/* Thank You */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-gradient-to-br from-blue-600 to-violet-700 rounded-3xl p-10 text-center shadow-2xl shadow-blue-500/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
          <Sparkles className="w-10 h-10 text-white/60 mx-auto mb-4" />
          <p className="text-white text-xl font-black mb-2">Thank you for choosing Ashevents.</p>
          <p className="text-blue-100 text-[1rem] leading-relaxed max-w-xl mx-auto">
            We appreciate your trust and look forward to making your celebration beautiful and memorable. ✨
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="border-t border-slate-200 dark:border-slate-800" />
      </div>

      {/* FAQ Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-20">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-violet-50 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-700/50 text-violet-600 dark:text-violet-400 text-[0.75rem] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            FAQs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 dark:text-slate-400 max-w-xl mx-auto"
          >
            Got a question? We have answered the most common ones below. Reach out if you need more help. We are always happy to assist! 💙
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 dark:text-slate-400 mb-5 font-medium">Still have a question?</p>
          <a
            href="https://wa.me/233596405164?text=Hi%20Ashevents%20!%20I%20have%20a%20question%20about%20your%20policies."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black px-8 py-4 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.395 5.608L0 24l6.545-1.371A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.366l-.36-.214-3.733.782.8-3.647-.234-.373A9.818 9.818 0 1112 21.818z" />
            </svg>
            Chat with us on WhatsApp
          </a>
        </motion.div>
      </section>
    </div>
  );
}
