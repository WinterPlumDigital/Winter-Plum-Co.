import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Brand } from "./pages/Brand";
import { WebDesignSanJose } from "./pages/WebDesignSanJose";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        {/* Subtle warm ambient glow */}
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(circle_at_50%_0%,rgba(250,240,230,0.6),transparent_70%)]" />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/web-design-san-jose" element={<WebDesignSanJose />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <Toaster position="bottom-right" toastOptions={{ style: { background: '#f7f4ef', color: '#2b2627', border: '1px solid #e5e5e5' } }} />
    </Router>
  );
}
