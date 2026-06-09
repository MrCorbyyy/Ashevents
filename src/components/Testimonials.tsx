import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Frank Lord",
    role: "Client",
    avatar: "FL",
    color: "bg-blue-500",
    rating: 5,
    text: "God bless you soooo much errrhhh🥹🫂 It was sooooo beautiful!!! Another beautiful brand new day to say thank you once again For making our day a very memorable one",
    event: "Room decor",
  },
  {
    id: 2,
    name: "Dee",
    role: "Client",
    avatar: "D",
    color: "bg-sky-500",
    rating: 5,
    text: "Thank you once again😊. I really liked your work.☺️",
    event: "Backdrop"
  },
  {
    id: 3,
    name: "Jossy",
    role: "Client",
    avatar: "J",
    color: "bg-blue-700",
    rating: 5,
    text: "Aww you’re too good You’ve been booked for my shop opening next year 💃🏽💃🏽",
    event: "Backdrop",
  },
  {
    id: 4,
    name: "Eliona",
    role: "Client",
    avatar: "E",
    color: "bg-indigo-500",
    rating: 5,
    text: "Aww, this is lovely No crumbs left, and I love the card",
    event: "Balloon bouquet",
  },
  {
    id: 5,
    name: "Rhispa",
    role: "Client",
    avatar: "R",
    color: "bg-cyan-600",
    rating: 5,
    text: "My flowers❤️😍 I loved it so much",
    event: "Flower bouquet",
  },
  {
    id: 6,
    name: "Abrafi",
    role: "Client",
    avatar: "A",
    color: "bg-blue-800",
    rating: 5,
    text: "You out did yourself❤️ this so much better than what I had in mind thank you so much❤️😭 God really bless your hands and make your business bigger and bigger I’m going back to sleep now but I’m super grateful thank you",
    event: "Balloon decor & gift package",
  },
  {
    id: 7,
    name: "Kojo Mensah",
    role: "Client",
    avatar: "KM",
    color: "bg-blue-600",
    rating: 5,
    text: "The proposal decor was beyond my expectations. They set up the most romantic candlelit path and a stunning 'Marry Me' sign. She said yes and we couldn't be happier!",
    event: "Proposal Setup",
  },
  {
    id: 8,
    name: "Linda Boateng",
    role: "Client",
    avatar: "LB",
    color: "bg-sky-600",
    rating: 5,
    text: "Best graduation gift ever! The money bouquet was so creative and perfectly arranged. It made my day so special and the photos are incredible. Thank you AshEvents!",
    event: "Graduation Gift",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-50/50 to-sky-50/30">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Grid: 4 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-blue-50 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-8 w-8 h-8 text-blue-50" fill="currentColor" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-blue-500 fill-blue-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-6 text-[0.88rem] leading-[1.8] italic">
                "{t.text}"
              </p>

              {/* Footer */}
              <div className="flex items-center gap-4 pt-6 border-t border-blue-50">
                <div
                  className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white flex-shrink-0 text-[0.9rem] font-black shadow-lg shadow-blue-500/20`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-gray-900 text-[0.95rem] font-black tracking-tight">
                    {t.name}
                  </div>
                  <div className="text-blue-500 text-[0.75rem] font-bold uppercase tracking-wider">
                    {t.event}
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
