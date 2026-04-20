



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
