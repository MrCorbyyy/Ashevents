import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Contact } from "../components/Contact";
import { Services } from "../components/Services";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

// Data Definitions
const servicesData: Record<string, { title: string, description: string, image: string, items: any[] }> = {
  "#money-bouquet": {
    title: "Money Bouquet",
    description: "Get affordable money bouquet prices at AshEvents. Our money bouquets are handcrafted with precision, luxury wrapping, and elegant floral accents to make your gift truly unforgettable. We use only high-quality materials and artistic techniques to ensure a stunning presentation that delights your loved ones for birthdays, anniversaries, and more.",
    image: "public/images/money_bouquet_4k.png",
    items: [
      { id: 1, name: "Classic Mini", price: "250", image: "public/images/10bouquet.png.jpg" },
      { id: 2, name: "Premium Bloom", price: "550", popular: true, image: "public/images/rose.png.jpg" },
      { id: 3, name: "Royal Mega", price: "1,200", image: "public/images/money_bouquet_4k.png" },
    ]
  },
  "#flower-bouquet": {
    title: "Flower Bouquet",
    description: "Get beautiful flower bouquet prices at AshEvents. Exquisite fresh and artificial floral arrangements designed to convey love, gratitude, and joy. Each bouquet is artistically curated with premium blooms, lush greenery, and bespoke ribbons to match your specific celebration and personal style perfectly.",
    image: "public/images/rose.png.jpg",
    items: [
      { id: 1, name: "Sweet Petite", price: "150", image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=600&auto=format&fit=crop" },
      { id: 2, name: "Blossom Joy", price: "350", popular: true, image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600&auto=format&fit=crop" },
      { id: 3, name: "Grand Romance", price: "750", image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=600&auto=format&fit=crop" },
    ]
  },
  "#backdrops": {
    title: "Backdrops",
    description: "Get premium backdrop prices at AshEvents. Transform your event space with our stunning backdrops, from lush floral walls and shimmering sequin panels to custom neon signs and fabric drapes. We create the perfect, photo-worthy focal point that sets the stage for magical memories and beautiful photography.",
    image: "public/images/backdrop 2.jpg",
    items: [
      { id: 1, name: "Shimmer Wall", price: "500", image: "public/images/backdrop 2.jpg" },
      { id: 2, name: "Floral Arch", price: "1,200", popular: true, image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop" },
      { id: 3, name: "Custom Neon", price: "2,500", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop" },
    ]
  },
  "#picnic-setup": {
    title: "Picnic Setup",
    description: "Get luxury picnic setup prices at AshEvents. Experience the ultimate in relaxation and style with our beautifully styled low-profile tables, plush cushions, and curated table decor. Perfect for romantic dates, intimate anniversaries, or group celebrations in the park or your garden, tailored to your aesthetic.",
    image: "public/images/picnic setup.jpg",
    items: [
      { id: 1, name: "Cozy Duo", price: "400", image: "public/images/picnic setup.jpg" },
      { id: 2, name: "Garden Party", price: "850", popular: true, image: "https://images.unsplash.com/photo-1657447512778-7d6f7a0d5b91?q=80&w=600&auto=format&fit=crop" },
      { id: 3, name: "Luxury Sunset", price: "1,600", image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=600&auto=format&fit=crop" },
    ]
  },
  "#room-decor": {
    title: "Room Decor",
    description: "Get elegant room decor prices at AshEvents. Turn any room into a magical sanctuary for romantic surprises, proposals, or intimate naming ceremonies. Our room decor services include artistic balloon styling, rose petals, ambient lighting, and personalized touches that speak from the heart and create a lasting impression.",
    image: "public/images/room decor.jpg",
    items: [
      { id: 1, name: "Standard Glow", price: "600", image: "public/images/room decor.jpg" },
      { id: 2, name: "Romantic Night", price: "1,500", popular: true, image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=600&auto=format&fit=crop" },
      { id: 3, name: "Luxury Surprise", price: "3,000", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop" },
    ]
  },
  "#balloon-decor": {
    title: "Balloon Decor",
    description: "Get vibrant balloon decor prices at AshEvents. We specialize in stunning organic arches, balloon walls, and personalized jumbo balloons tailored to your event's theme. Our high-quality balloons bring energy, color, and a festive atmosphere to any celebratory space, making every moment pop with joy.",
    image: "public/images/ballon decor 2.jpg",
    items: [
      { id: 1, name: "Basic Arch", price: "300", image: "public/images/ballon decor 2.jpg" },
      { id: 2, name: "Celebration Wall", price: "850", popular: true, image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=600&auto=format&fit=crop" },
      { id: 3, name: "Ceiling Masterpiece", price: "1,800", image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=600&auto=format&fit=crop" },
    ]
  },
  "#cards-magazines": {
    title: "Cards & Magazines",
    description: "Get custom card and magazine prices at AshEvents. Capture your most cherished memories in a beautiful, lasting format. Our professionally designed cards and premium magazines serve as perfect keepsakes, beautifully documenting your unique life stories, special events, and heartfelt messages in high resolution.",
    image: "public/images/cards.jpg",
    items: [
      { id: 1, name: "Single Card", price: "50", image: "public/images/cards.jpg" },
      { id: 2, name: "Gift Pack (10)", price: "400", popular: true, image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop" },
      { id: 3, name: "Premium Magazine", price: "1,200", image: "https://images.unsplash.com/photo-1544648397-72ab67478511?q=80&w=600&auto=format&fit=crop" },
    ]
  },
  "#birthday-packages": {
    title: "Birthday Packages",
    description: "Get all-inclusive birthday package prices at AshEvents. Our birthday packages combine our best services—including backdrops, balloon decor, and table styling—into a cohesive, stunning event experience that is stress-free, beautiful, and tailored perfectly to the celebrant's unique personality and vision.",
    image: "public/images/birthday packages.jpg",
    items: [
      { id: 1, name: "Sweet 16", price: "1,500", image: "public/images/birthday packages.jpg" },
      { id: 2, name: "Dirty 30", price: "3,000", popular: true, image: "https://images.unsplash.com/photo-1464347601390-25e2842a37f7?q=80&w=600&auto=format&fit=crop" },
      { id: 3, name: "Golden Jubilee", price: "5,500", image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=600&auto=format&fit=crop" },
    ]
  },
};

export default function ServicesPage() {
  const location = useLocation();
  const hash = location.hash;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [hash]);

  const currentCategory = servicesData[hash];
  const showAll = !currentCategory;

  return (
    <div className="pt-24 bg-white min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={hash || "all"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Back Navigation (Moved to top) */}
          {!showAll && (
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 mb-6">
              <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 font-black text-[0.75rem] uppercase tracking-widest hover:opacity-70 transition-opacity">
                <ArrowLeft className="w-4 h-4" /> Back to all services
              </Link>
            </div>
          )}

          {/* Hero-style Header Section */}
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 mb-16">
            {!showAll ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-blue-50/40 rounded-[3.5rem] p-8 md:p-20 border border-blue-100/50">
                {/* Left Content */}
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                  <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-tighter leading-[1.1] mb-8">
                    <span className="text-slate-950">Our </span>
                    <span className="text-blue-600">{currentCategory.title}</span>
                  </h1>
                  <p className="text-slate-950 text-[clamp(1.2rem,2.2vw,1.4rem)] leading-[1.8] font-medium mb-10 max-w-2xl">
                    {currentCategory.description}
                  </p>
                </div>

                {/* Right Featured Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  className="relative aspect-video lg:aspect-[5/4] rounded-[3.5rem] overflow-hidden shadow-2xl"
                >
                  <img
                    src={currentCategory.image}
                    alt={currentCategory.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            ) : (
              <div className="bg-blue-50/50 rounded-[3.5rem] p-16 md:p-24 text-center border border-blue-100/50">
                <span className="inline-block text-blue-600 uppercase tracking-widest mb-4 text-[0.7rem] font-black">Our Catalog</span>
                <h1 className="text-slate-900 text-[clamp(2rem,6vw,4rem)] font-black tracking-tighter leading-tight">
                  All <span className="text-blue-600">Services</span>
                </h1>
              </div>
            )}
          </div>

          {/* Pricing List Header (Centered) */}
          {!showAll && (
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 mb-16">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-slate-900 text-[2.2rem] font-black tracking-tighter mb-4">
                  {currentCategory.title} <span className="text-blue-600">Prices List</span>
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.3)]" />
              </div>
            </div>
          )}

          {/* Main Content (Grid) */}
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 pb-20">
            {!showAll ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {currentCategory.items.map((item: any) => (
                  <PricingCard key={item.id} item={item} currency="GH₵" />
                ))}
              </div>
            ) : (
              <Services isPreview={false} />
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Contact Section */}
      <div className="border-t border-slate-50 pt-20">
        <Contact />
      </div>
    </div>
  );
}

function PricingCard({ item, currency }: { item: any, currency: string }) {
  return (
    <div
      className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {item.popular && (
          <div className="absolute top-5 left-5 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[0.65rem] font-black uppercase tracking-widest shadow-xl">
            Popular
          </div>
        )}
        <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-2xl border border-slate-100">
          <span className="text-slate-900 font-black text-[1.05rem]">{currency} {item.price}</span>
        </div>
      </div>
      <div className="p-7 text-center">
        <h3 className="text-slate-900 text-[1.15rem] font-black tracking-tight">{item.name}</h3>
      </div>
    </div>
  );
}
