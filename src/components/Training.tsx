import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { FaSnapchat } from "react-icons/fa";

export function Training({ isPreview = false }: { isPreview?: boolean }) {
  const [showContacts, setShowContacts] = useState(false);

  const images = [
    "/images/train 1.jpg",
    "/images/train 2.jpg",
    "/images/train 3.jpg",
    "/images/train 4.jpg",
    "/images/train 5.jpg",
    "/images/train 6.jpg",
    "/images/train 7.jpg"
  ];

  const contactOptions = [
    {
      name: "WhatsApp",
      href: "https://wa.me/233596405164?text=Hello%20AshEvents!%20%F0%9F%91%8B%20I%20came%20across%20your%20website%20and%20I%27m%20interested%20in%20the%20ATI%20training%20program.%20I%27d%20love%20to%20learn%20more!%20%F0%9F%8E%89",
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
        <FaSnapchat className="w-7 h-7" />
      ),
    },
  ];

  return (
    <section id="training" className={`py-20 ${isPreview ? 'bg-gradient-to-b from-white to-blue-50/40' : 'bg-white'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 uppercase tracking-widest mb-3 text-[0.8rem] font-semibold">
            {isPreview ? "Our Training Program" : "Learn With Us"}
          </span>
          <h2 className="text-gray-900 mb-4 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight">
            Ashevents <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Training Institute</span> (ATI)
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[1.1rem] font-medium leading-[1.7]">
            Transforming Passion into Profession, One Event at a Time.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-sky-500" />
            <div className="h-2 w-2 rounded-full bg-blue-600" />
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky-500 to-blue-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6 text-gray-600 text-base leading-relaxed">
            <p>
              At <strong className="text-gray-900">Ashevents Training Institute (ATI)</strong>, we believe that passion, creativity, and the right guidance can turn dreams into successful careers.
            </p>
            <p>
              Ashevents is not only known for providing exceptional event décor and styling services; we are also committed to training and empowering the next generation of event professionals. Through our institute, we provide aspiring decorators with the opportunity to learn, grow, and build a successful future in the event industry.
            </p>
            <p>
              Our training programs are designed for young men and women who have a passion for event décor and styling and would like to turn that passion into a profitable venture. Whether you have prior experience or are completely new to the industry, our comprehensive training will equip you with the skills and confidence needed to become a professional.
            </p>
            <p>
              At ATI, we take a practical, hands-on approach to learning. Students are trained in modern décor techniques, event styling, balloon artistry, floral arrangements, backdrop creation, event setup, client management, and the business side of the décor industry. Our goal is not only to teach you how to create beautiful event experiences but also how to build a thriving business from your skills.
            </p>

            <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose ATI?</h3>
              <ul className="space-y-4">
                {[
                  "Beginner-friendly training programs",
                  "Practical and hands-on learning experience",
                  "Professional mentorship and guidance",
                  "Industry-relevant skills and techniques",
                  "Opportunity to work with us",
                  "Supportive learning environment"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="pt-4 font-medium text-gray-700">
              At Ashevents Training Institute, we are passionate about nurturing talent, inspiring creativity, and helping individuals discover their full potential. We believe that with the right training and dedication, anyone can succeed in the event décor industry.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-sky-500 p-8 rounded-3xl text-white shadow-xl shadow-blue-500/20 mt-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay"></div>
              <p className="text-xl font-bold relative z-10 leading-tight">
                Join ATI today and let us help you turn your passion into a profession and your creativity into a successful career.
              </p>
              <button
                onClick={() => setShowContacts(!showContacts)}
                className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors relative z-10"
              >
                Enroll Now
              </button>

              {/* Animated Contact Icon Slideshow */}
              <AnimatePresence>
                {showContacts && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 flex items-center justify-center gap-6 flex-wrap relative z-10"
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
                        <div className={`w-14 h-14 ${option.color} ${option.textColor} rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}>
                          {option.icon}
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4 auto-rows-[200px]">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group ${
                  index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                }`}
              >
                <img
                  src={src}
                  alt={`Training highlight ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button (Preview Only) */}
        {isPreview && (
          <div className="mt-16 text-center">
            <Link
              to="/training"
              className="inline-flex items-center gap-2 group text-blue-600 font-bold text-[1rem] hover:text-blue-700 transition-colors"
            >
              Learn More About Our Training
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
