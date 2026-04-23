


import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

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
            <button
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request Custom Quote
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

