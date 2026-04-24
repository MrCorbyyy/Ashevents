import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";

const services = [
  "Money Bouquet",
  "Flower Bouquet",
  "Event Flyers",
  "Picnic Setup",
  "Naming Ceremony",
  "Balloon Decor",
  "Backdrops",
  "Birthday Package",
  "Other / Custom",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 uppercase tracking-widest mb-3 text-[0.8rem] font-semibold">
            Get In Touch
          </span>
          <h2 className="text-gray-900 mb-4 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold">
            Let's Plan Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              Dream Event
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-[1.7]">
            Fill out the form below or reach out to us directly. We'll get back to you within 24 hours.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-sky-500" />
            <div className="h-2 w-2 rounded-full bg-blue-600" />
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky-500 to-blue-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-7 text-white">
              <h3 className="text-white mb-2 text-[1.3rem] font-bold">
                Let's Make Magic Together
              </h3>
              <p className="text-white/80 mb-7 text-[0.87rem] leading-[1.7]">
                We're passionate about bringing your event vision to life. Reach out and let's plan something unforgettable!
              </p>

              <div className="space-y-4 text-white">
                {[
                  { icon: Phone, label: "Phone Number", value: "+233 59 640 5164" },
                  { icon: Mail, label: "Email Address", value: "hello@ashevents.ng" },
                  { icon: MapPin, label: "Studio Location", value: "Kumasi, Ghana (Available nationwide)" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center bg-white/10">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white/70 text-[0.72rem] uppercase tracking-wider font-bold">{item.label}</div>
                      <div className="text-white text-[0.88rem] font-semibold">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-blue-50 rounded-2xl p-5">
              <h4 className="text-gray-800 mb-3 text-[0.95rem] font-bold">
                🕐 Working Hours
              </h4>
              {[
                { day: "Monday – Friday", hours: "8:00am – 8:00pm" },
                { day: "Saturday", hours: "9:00am – 9:00pm" },
                { day: "Sunday", hours: "By appointment only" },
              ].map((h) => (
                <div key={h.day} className="flex justify-between py-1.5 border-b border-blue-100 last:border-0">
                  <span className="text-gray-600 text-[0.82rem]">{h.day}</span>
                  <span className="text-blue-600 text-[0.82rem] font-semibold">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-blue-50 rounded-3xl border border-blue-100">
                <CheckCircle className="w-16 h-16 text-blue-500 mb-4" />
                <h3 className="text-gray-900 mb-2 text-[1.4rem] font-bold">
                  Message Sent! 🎉
                </h3>
                <p className="text-gray-500 max-w-xs text-sm leading-[1.7]">
                  Thank you, <strong>{form.name}</strong>! We've received your enquiry and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", date: "", message: "" }); }}
                  className="mt-6 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl text-[0.88rem] font-semibold"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl border border-blue-100 shadow-sm p-7 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 mb-1.5 text-[0.85rem] font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50/50 text-gray-800 text-[0.9rem]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1.5 text-[0.85rem] font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50/50 text-gray-800 text-[0.9rem]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-1.5 text-[0.85rem] font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50/50 text-gray-800 text-[0.9rem]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 mb-1.5 text-[0.85rem] font-semibold">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50/50 text-gray-800 text-[0.9rem]"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1.5 text-[0.85rem] font-semibold">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50/50 text-gray-800 text-[0.9rem]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-1.5 text-[0.85rem] font-semibold">
                    Tell Us About Your Event
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your event, theme, color palette, guest count, location..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50/50 text-gray-800 resize-none text-[0.9rem]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md shadow-blue-200 disabled:opacity-70 text-[0.95rem] font-bold"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
