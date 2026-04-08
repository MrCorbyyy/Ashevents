import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Silver",
    price: "₦25,000",
    badge: null,
    headerBg: "bg-slate-600",
    btnClass: "bg-slate-600 hover:bg-slate-700 text-white",
    features: [
      "Balloon arch (1 entrance)",
      "Basic backdrop setup",
      "Flower bouquet (1 piece)",
      "Event flyer design",
      "2-hour setup time",
      "Basic table decoration",
    ],
    excluded: ["Cake table setup", "Money bouquet", "Custom neon sign"],
  },
  {
    name: "Gold",
    price: "₦55,000",
    badge: "Most Popular",
    headerBg: "bg-gradient-to-r from-blue-500 to-sky-500",
    btnClass: "bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white shadow-lg shadow-blue-300/40",
    features: [
      "Balloon arch + column setup",
      "Premium backdrop (with sequins)",
      "Flower bouquets (3 pieces)",
      "Money bouquet (1 piece)",
      "Event flyer + digital invite",
      "Cake table setup",
      "4-hour setup & cleanup",
    ],
    excluded: ["Custom neon sign"],
  },
  {
    name: "Diamond",
    price: "₦95,000",
    badge: "Premium",
    headerBg: "bg-gradient-to-r from-blue-700 to-blue-900",
    btnClass: "bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white shadow-lg shadow-blue-700/30",
    features: [
      "Full balloon decor (arch + wall)",
      "Luxury backdrop + photo booth",
      "Flower bouquets (5 pieces)",
      "Money bouquet (2 pieces)",
      "Event flyer + social media graphics",
      "Luxury cake table setup",
      "Custom neon sign",
      "Full-day setup & cleanup",
      "Dedicated event coordinator",
    ],
    excluded: [],
  },
];

export function BirthdayPackages() {
  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 uppercase tracking-widest mb-3 text-[0.8rem] font-semibold">
            Birthday Packages
          </span>
          <h2 className="text-gray-900 mb-4 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              Perfect Package
            </span>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-3xl overflow-hidden border ${
                pkg.badge === "Most Popular"
                  ? "border-blue-400 shadow-xl scale-105"
                  : pkg.badge === "Premium"
                  ? "border-blue-700 shadow-xl"
                  : "border-gray-200 shadow-md"
              } bg-white`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className={`absolute top-4 right-4 flex items-center gap-1 text-white px-3 py-1 rounded-full ${pkg.headerBg} text-[0.72rem] font-semibold`}>
                  <Star className="w-3 h-3 fill-white" />
                  {pkg.badge}
                </div>
              )}

              {/* Header */}
              <div className={`p-6 ${pkg.headerBg} text-white`}>
                <h3 className="text-white text-[1.4rem] font-extrabold">
                  {pkg.name}
                </h3>
                <div className="mt-2 text-white">
                  <span className="text-white/80 text-[0.85rem]">Starting from</span>
                  <div className="text-[2rem] font-extrabold">{pkg.price}</div>
                </div>
              </div>

              {/* Features */}
              <div className="p-6 space-y-3">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-blue-600" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-[0.87rem] leading-[1.5]">
                      {feature}
                    </span>
                  </div>
                ))}

                {pkg.excluded.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 opacity-40">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <span className="text-gray-400 text-[0.7rem]">✕</span>
                    </div>
                    <span className="text-gray-400 line-through text-[0.87rem]">
                      {feature}
                    </span>
                  </div>
                ))}

                <button
                  className={`mt-6 w-full py-3 rounded-2xl transition-all duration-300 ${pkg.btnClass} text-[0.9rem] font-semibold`}
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Book {pkg.name} Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom note */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-[0.9rem]">
            Need something custom? We create{" "}
            <button
              className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              bespoke packages
            </button>{" "}
            tailored to every budget and style.
          </p>
        </div>
      </div>
    </section>
  );
}
