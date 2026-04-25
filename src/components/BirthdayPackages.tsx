


import { CheckCircle2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const packages = [
  {
    id: 1,
    name: "Basic Joy",
    price: "Custom",
    description: "Perfect for intimate home celebrations or small cafe gatherings.",
    features: [
      "Standard Balloon Arch",
      "Table Backdrop (5ft)",
      "Cake Table Styling",
      "Welcome Signage",
      "Coordination on Day-of"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Premium Magic",
    price: "Custom",
    description: "Our most popular choice for milestone birthdays and medium parties.",
    features: [
      "Organic Balloon Garland",
      "Large Sequin/Floral Backdrop",
      "Premium Cake Table Setup",
      "Floral centerpieces (x4)",
      "Personalized Acrylic Sign",
      "Full Setup & Pack-down"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Luxury Grandeur",
    price: "Custom",
    description: "The ultimate transformation for large venues and high-end events.",
    features: [
      "Full Venue Balloon Decor",
      "Custom Multi-layer Backdrop",
      "Themed Dessert Table",
      "Luxury Floral Arrangements",
      "Custom Floor Graphics",
      "Dedicated Event Manager"
    ],
    popular: false
  },
  {
    id: 4,
    name: "Bespoke Signature",
    price: "Custom",
    description: "A completely tailor-made experience designed from scratch for your vision.",
    features: [
      "Personalized Event Design",
      "Custom Fabricated Props",
      "High-end Vendor Selection",
      "Full Weekend Coordination",
      "Unlimited Consultations",
      "VIP On-site Concierge"
    ],
    popular: false
  }
];

interface PackagesProps {
  isPreview?: boolean;
}

export function BirthdayPackages({ isPreview = false }: PackagesProps) {
  const [showContacts, setShowContacts] = useState(false);

  const contactOptions = [
    {
      name: "WhatsApp",
      href: "https://wa.me/233596405164?text=Hello%20AshEvents!%20%F0%9F%91%8B%20I%20came%20across%20your%20website%20and%20I%27m%20interested%20in%20your%20event%20planning%20services.%20I%27d%20love%20to%20discuss%20how%20you%20can%20make%20my%20event%20unforgettable!%20%F0%9F%8E%89",
      color: "bg-[#25D366]",
      textColor: "text-white",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.395 5.608L0 24l6.545-1.371A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.366l-.36-.214-3.733.782.8-3.647-.234-.373A9.818 9.818 0 1112 21.818z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@asheventsgh",
      color: "bg-black",
      textColor: "text-white",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.81-.12-.9.24-1.72.83-2.25 1.6-.56.81-.78 1.81-.62 2.78.15 1.08.81 2.04 1.69 2.66.73.54 1.64.81 2.55.81 1.32-.01 2.54-.6 3.29-1.69.49-.67.73-1.49.73-2.31-.01-4.19-.01-8.38-.01-12.57z" />
        </svg>
      ),
    },
    {
      name: "Snapchat",
      href: "https://www.snapchat.com/add/blacashaaa",
      color: "bg-[#FFFC00]",
      textColor: "text-black",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.317 4.484l-.01.143c-.005.063-.01.13-.014.194.329.166.729.242 1.167.112.197-.057.405-.131.648-.131.281 0 .749.209.749.724 0 .443-.334.776-.75.934-.118.047-.247.088-.382.13-.613.196-1.453.463-1.638 1.862-.01.075-.014.148-.013.221 0 .077.008.152.013.224.141 2.035 3.007 5.203 4.839 6.256.197.113.265.373.164.58l-.065.137c-.135.285-.449.471-.781.471a.96.96 0 01-.207-.022 8.856 8.856 0 01-1.065-.317 4.7 4.7 0 00-1.597-.345 5.044 5.044 0 00-.976.102 3.89 3.89 0 01-.687.096c-.033.001-.067.001-.1.001-.512 0-.998-.213-1.492-.537-.743-.489-1.404-1.199-1.985-1.834-.501-.547-1.032-1.077-1.614-1.494a2.07 2.07 0 00-1.214-.434c-.453 0-.887.147-1.303.434-.577.417-1.104.943-1.601 1.487-.584.637-1.248 1.353-2 1.844-.494.324-.979.537-1.491.537-.034 0-.068 0-.101-.001a3.89 3.89 0 01-.688-.096 5.052 5.052 0 00-.976-.102 4.712 4.712 0 00-1.597.345 8.864 8.864 0 01-1.065.317.968.968 0 01-.207.022c-.332 0-.647-.186-.781-.471l-.065-.137c-.101-.207-.033-.467.164-.58 1.832-1.053 4.698-4.221 4.839-6.256.005-.072.013-.147.013-.224 0-.073-.003-.146-.013-.221-.185-1.399-1.025-1.666-1.638-1.862-.135-.042-.264-.083-.382-.13-.416-.158-.75-.491-.75-.934 0-.515.468-.724.749-.724.243 0 .451.074.648.131.438.13.838.054 1.167-.112l-.014-.194-.01-.143c-.086-1.265-.212-3.291.317-4.484C7.859 1.069 11.216.793 12.206.793z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="packages" className={`py-20 ${isPreview ? 'bg-gradient-to-b from-white to-blue-50/40' : 'bg-white'}`}>
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 uppercase tracking-widest mb-3 text-[0.8rem] font-semibold">
            {isPreview ? "Our Packages" : "Choose Your Package"}
          </span>
          <h2 className="text-gray-900 mb-4 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold">
            Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Celebration</span> Tiers
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-[1.7]">
            All packages are fully customizable. Contact us to tailor any package to your specific needs and vision.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-sky-500" />
            <div className="h-2 w-2 rounded-full bg-blue-600" />
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky-500 to-blue-400" />
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 flex flex-col h-full ${pkg.popular
                ? "border-blue-500 shadow-xl shadow-blue-500/10 scale-105 z-10"
                : "border-blue-100 shadow-sm hover:shadow-md"
                }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-4 py-1 rounded-full text-[0.75rem] font-bold tracking-wider">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-gray-900 text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-blue-600 text-2xl font-extrabold mb-3">{pkg.price}</div>
                <p className="text-gray-500 text-[0.85rem] leading-[1.6]">
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-gray-600 text-[0.85rem]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-xl text-[0.9rem] font-bold transition-all duration-300 ${pkg.popular
                  ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:opacity-90"
                  : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                  }`}
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Select {pkg.name.split(' ')[0]}
              </button>
            </div>
          ))}
        </div>

        {/* View All Button (Preview Only) */}
        {isPreview && (
          <div className="mt-16 text-center">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 group text-blue-600 font-bold text-[1rem] hover:text-blue-700 transition-colors"
            >
              View Detailed Package Breakdown
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        )}

        {/* Custom note (Only for full page or bottom of home) */}
        {!isPreview && (
          <div className="mt-20 text-center bg-blue-50/50 rounded-3xl p-10 border border-blue-100">
            <h4 className="text-gray-900 text-lg font-bold mb-2">Need something unique?</h4>
            <p className="text-gray-500 text-[0.95rem] mb-6">
              We create bespoke packages tailored to every budget and style.
            </p>

            {/* Contact Us Button */}
            <button
              onClick={() => setShowContacts(!showContacts)}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors"
            >
              {showContacts ? "Close" : "Contact Us"}
            </button>

            {/* Animated Contact Icon Slideshow */}
            <AnimatePresence>
              {showContacts && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="mt-8 flex items-center justify-center gap-6 flex-wrap"
                >
                  {contactOptions.map((option, i) => (
                    <motion.a
                      key={option.name}
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.5, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.5, y: 20 }}
                      transition={{ delay: i * 0.12, type: "spring", stiffness: 300, damping: 20 }}
                      className={`flex flex-col items-center gap-2 group`}
                    >
                      <div className={`w-16 h-16 ${option.color} ${option.textColor} rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}>
                        {option.icon}
                      </div>
                      <span className="text-slate-600 text-[0.8rem] font-bold">{option.name}</span>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}

