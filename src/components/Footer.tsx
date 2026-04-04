import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-cream py-20 px-6 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-serif font-medium text-blush flex items-center gap-2 mb-6">
            <Logo className="w-10 h-10 text-blush" />
            Winter Plum & Co.
          </Link>
          <p className="text-cream/60 max-w-sm font-light leading-relaxed">
            We build memorable, high-converting websites for growing brands. Built to perform. So your brand can blossom in any season.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h2 className="text-sm uppercase tracking-widest text-sage font-serif font-medium mb-2">Navigation</h2>
          <Link to="/" className="text-cream/60 hover:text-blush transition-colors">Home</Link>
          <Link to="/services" className="text-cream/60 hover:text-blush transition-colors">Services</Link>
          <Link to="/faq" className="text-cream/60 hover:text-blush transition-colors">FAQ</Link>
          <Link to="/contact" className="text-cream/60 hover:text-blush transition-colors">Contact</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-sm uppercase tracking-widest text-sage font-serif font-medium mb-2">Contact</h2>
          <p className="text-cream/60 mt-4 text-sm">winterplum.co@gmail.com</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-cream/10 flex flex-col lg:flex-row items-center justify-between text-sm text-cream/40 gap-6 lg:gap-0">
        <p className="order-3 lg:order-1">&copy; {new Date().getFullYear()} Winter Plum & Co. All rights reserved.</p>
        <div className="order-2 lg:order-3 flex gap-6">
          <a href="#" className="hover:text-cream/80 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cream/80 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
