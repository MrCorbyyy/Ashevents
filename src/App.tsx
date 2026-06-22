import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import TrainingPage from "./pages/TrainingPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/training" element={<TrainingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


