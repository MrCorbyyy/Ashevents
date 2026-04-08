import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    role: "Birthday Mum",
    avatar: "AO",
    color: "bg-blue-500",
    rating: 5,
    text: "AshEvents transformed my daughter's 7th birthday into an absolute fairytale! The balloon arch, backdrop and cake table were breathtaking. Every guest was asking for their contact. 10/10!",
    event: "Kids Birthday Party",
  },
  {
    id: 2,
    name: "Chisom Ihejirika",
    role: "New Mother",
    avatar: "CI",
    color: "bg-sky-500",
    rating: 5,
    text: "The naming ceremony decor was everything I dreamed of and more. The floral arrangements, the backdrop, and that beautiful setup — I cried tears of joy. Absolutely professional and dedicated team!",
    event: "Naming Ceremony",
  },
  {
    id: 3,
    name: "Blessing Nwosu",
    role: "Anniversary Celebrant",
    avatar: "BN",
    color: "bg-blue-700",
    rating: 5,
    text: "We booked the Diamond package and it was worth every naira! The picnic setup was stunning. The money bouquet my husband received was gorgeous. Everyone was amazed. Highly recommend!",
    event: "Anniversary Picnic",
  },
  {
    id: 4,
    name: "Kelechi Eze",
    role: "Event Host",
    avatar: "KE",
    color: "bg-indigo-500",
    rating: 5,
    text: "From the event flyers to the balloon decor on the day, everything was handled with precision and love. The team is super responsive and creative. Will definitely book again!",
    event: "Corporate Event",
  },
  {
    id: 5,
    name: "Ngozi Amamchukwu",
    role: "Birthday Girl",
    avatar: "NA",
    color: "bg-cyan-600",
    rating: 5,
    text: "My 30th birthday was absolutely magical! The flower bouquets, the backdrop for photos, and the overall vibe — it felt like a movie set. My friends won't stop talking about it!",
    event: "30th Birthday",
  },
  {
    id: 6,
    name: "Emeka Obi",
    role: "Proud Father",
    avatar: "EO",
    color: "bg-blue-800",
    rating: 5,
    text: "I surprised my wife with a luxury picnic set up by AshEvents and she was completely blown away. The attention to detail is unmatched. This is the only event company I'll ever use!",
    event: "Surprise Picnic",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-50/50 to-sky-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 uppercase tracking-widest mb-3 text-[0.8rem] font-semibold">
            Client Love
          </span>
          <h2 className="text-gray-900 mb-4 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-[1.7]">
            Real stories from real clients who trusted us with their most special moments.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-sky-500" />
            <div className="h-2 w-2 rounded-full bg-blue-600" />
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky-500 to-blue-400" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 shadow-sm transition-shadow duration-300 border border-blue-50 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" fill="currentColor" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-blue-500 fill-blue-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-5 text-[0.88rem] leading-[1.7]">
                "{t.text}"
              </p>

              {/* Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-blue-50">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white flex-shrink-0 text-[0.8rem] font-bold`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-gray-900 text-[0.9rem] font-bold">
                    {t.name}
                  </div>
                  <div className="text-blue-500 text-[0.75rem]">
                    {t.event} · {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
