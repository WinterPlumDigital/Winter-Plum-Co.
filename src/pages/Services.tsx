import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GrowingPlumBranch } from "../components/GrowingPlumBranch";
import { MountainSunrise } from "../components/MountainSunrise";
import { Logo } from "../components/Logo";
import { SEO } from "../components/SEO";

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(1);
  const mouseX = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const mouseXPos = e.clientX - rect.left;
    const xPct = mouseXPos / width - 0.5;
    mouseX.set(xPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    setHoveredCard(1);
  };

  const packages = [
    {
      title: "Basic",
      subtitle: "Clean, foundational design.",
      features: [
        "3 pages",
        "Clean, basic design with a modern layout",
        "Mobile Optimization",
        "Contact setup",
        "Basic SEO optimization",
        "Image setups",
        "Launch",
        "2 rounds of revision"
      ],
      buttonText: "Select Basic",
      transform: "translateZ(30px)",
      badge: null
    },
    {
      title: "Standard",
      subtitle: "Conversion focused growth.",
      features: [
        "Everything from Basic",
        "4-7 pages",
        "Advanced Mobile Optimization",
        "Conversion focused layout",
        "SEO Optimization",
        "Copywriting",
        "Full setup and Launch support",
        "1 week of post launch support",
        "Guided handoff"
      ],
      buttonText: "Select Standard",
      transform: "translateZ(60px)",
      badge: "Most Popular"
    },
    {
      title: "Premium",
      subtitle: "Fully custom digital experience.",
      features: [
        "Everything from Standard & Basic",
        "8+ pages",
        "Fully custom design",
        "High converting design with advanced SEO",
        "Premium visual design",
        "Priority support"
      ],
      buttonText: "Select Premium",
      transform: "translateZ(30px)",
      badge: null
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20">
      <SEO 
        title="Services & Pricing" 
        description="Explore our custom web design and digital marketing services. We offer tailored packages, monthly support, and one-off upgrades for growing brands."
        url="https://winterplum.co/#/services"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Design",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Winter Plum & Co"
            }
          }
        ]}
      />
      {/* Header */}
      <section className="px-6 pt-10 pb-10 text-center relative overflow-hidden min-h-[300px] flex flex-col justify-center">
        <MountainSunrise />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sage/10 rounded-full blur-3xl opacity-50 -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto relative z-10 -mt-10"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-ink leading-tight mb-6">
            Our <span className="font-bold text-mulberry">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-ink/70 font-light leading-relaxed">
            We blend modern design with meaning and functionality to create a digital experience that resonates, and converts.
          </p>
        </motion.div>
      </section>

      {/* Packages Section */}
      <section 
        className="px-6 pt-0 pb-12 relative overflow-visible"
        style={{ perspective: "2000px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Growing Plum Branches */}
        <div className="absolute -top-48 left-0 w-64 md:w-96 text-mulberry pointer-events-none z-0">
          <GrowingPlumBranch className="w-full h-full overflow-visible" />
        </div>
        <div className="absolute -top-48 right-0 w-64 md:w-96 text-mulberry pointer-events-none z-0 scale-x-[-1]">
          <GrowingPlumBranch className="w-full h-full overflow-visible" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="sr-only">Web Design Packages</h2>
          <motion.div 
            style={{ rotateY, transformStyle: "preserve-3d" }}
            className="flex flex-col lg:flex-row gap-8 items-stretch justify-center"
          >
            {packages.map((pkg, index) => {
              const isActive = hoveredCard === index;
              
              return (
                <div 
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  className={`flex-1 p-8 lg:p-10 rounded-[2.5rem] flex flex-col relative transition-colors duration-500 border border-[#D4AF37]/50 ${
                    isActive 
                      ? "bg-mulberry shadow-2xl border-[#D4AF37] z-10" 
                      : "bg-white/80 backdrop-blur-xl shadow-xl z-0"
                  } ${index === 1 ? "lg:-mt-8 lg:mb-8" : ""}`}
                  style={{ transform: pkg.transform }}
                >
                  {pkg.badge && (
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md whitespace-nowrap transition-colors duration-500 ${
                      isActive ? "bg-blush text-mulberry" : "bg-mulberry text-cream"
                    }`}>
                      {pkg.badge}
                    </div>
                  )}
                  <h4 className={`text-2xl font-serif mb-2 transition-colors duration-500 ${isActive ? "text-cream" : "text-ink"}`}>
                    {pkg.title}
                  </h4>
                  <p className={`text-sm mb-8 h-10 transition-colors duration-500 ${isActive ? "text-cream/70" : "text-ink/60"}`}>
                    {pkg.subtitle}
                  </p>
                  <ul className="space-y-4 flex-1 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-3 text-sm transition-colors duration-500 ${isActive ? "text-cream/90" : "text-ink/80"}`}>
                        <CheckCircle2 size={16} className={`shrink-0 mt-0.5 transition-colors duration-500 ${isActive ? "text-blush" : "text-sage"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full py-4 rounded-full text-center text-sm uppercase tracking-widest transition-all duration-500 ${
                      isActive 
                        ? "bg-cream text-mulberry hover:bg-white shadow-lg" 
                        : "border border-ink/20 text-ink hover:bg-ink/5"
                    }`}
                  >
                    {pkg.buttonText}
                  </Link>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="px-6 pt-8 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Monthly Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-serif text-ink mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-mulberry"></span>
                Monthly Services
              </h3>
              <div className="space-y-6">
                {/* Basic Care */}
                <Link to="/contact" className="group block bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] border border-ink/10 hover:bg-mulberry hover:border-mulberry hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 shadow-lg cursor-pointer">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-2xl font-serif text-ink group-hover:text-cream transition-colors duration-500">Basic Care</h4>
                    <span className="text-mulberry group-hover:text-cream font-medium text-xl transition-colors duration-500">$45<span className="text-sm text-ink/50 group-hover:text-cream/70 transition-colors duration-500">/m</span></span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-ink/80 group-hover:text-cream/90 transition-colors duration-500">
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-sage group-hover:text-blush transition-colors duration-500" />
                      <span>Website & Domain maintenance</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-ink/80 group-hover:text-cream/90 transition-colors duration-500">
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-sage group-hover:text-blush transition-colors duration-500" />
                      <span>Small edits</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-ink/80 group-hover:text-cream/90 transition-colors duration-500">
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-sage group-hover:text-blush transition-colors duration-500" />
                      <span>Support</span>
                    </li>
                  </ul>
                </Link>

                {/* Blossoming Plan */}
                <Link to="/contact" className="group block bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] border border-ink/10 hover:bg-mulberry hover:border-mulberry hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 shadow-lg cursor-pointer">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-2xl font-serif text-ink group-hover:text-cream transition-colors duration-500">Blossoming Plan</h4>
                    <span className="text-mulberry group-hover:text-cream font-medium text-xl transition-colors duration-500">$80<span className="text-sm text-ink/50 group-hover:text-cream/70 transition-colors duration-500">/m</span></span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-ink/80 group-hover:text-cream/90 transition-colors duration-500">
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-sage group-hover:text-blush transition-colors duration-500" />
                      <span>Everything in Basic</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-ink/80 group-hover:text-cream/90 transition-colors duration-500">
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-sage group-hover:text-blush transition-colors duration-500" />
                      <span>SEO Updates</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-ink/80 group-hover:text-cream/90 transition-colors duration-500">
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-sage group-hover:text-blush transition-colors duration-500" />
                      <span>Content & Web updates</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-ink/80 group-hover:text-cream/90 transition-colors duration-500">
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-sage group-hover:text-blush transition-colors duration-500" />
                      <span>Up to 1 new page created per month</span>
                    </li>
                  </ul>
                </Link>
              </div>
            </motion.div>

            {/* One Offs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-serif text-ink mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-mulberry"></span>
                One Offs
              </h3>
              <Link to="/contact" className="group block bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] border border-ink/10 hover:bg-mulberry hover:border-mulberry hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 shadow-lg cursor-pointer">
                <ul className="space-y-6">
                  <li className="flex justify-between items-center border-b border-ink/5 group-hover:border-cream/10 transition-colors duration-500 pb-6 last:border-0 last:pb-0">
                    <div>
                      <h4 className="text-xl font-serif text-ink group-hover:text-cream transition-colors duration-500 mb-1">Content Upgrade</h4>
                      <p className="text-sm text-ink/60 group-hover:text-cream/70 transition-colors duration-500 font-light">Refresh and optimize your existing copy.</p>
                    </div>
                    <span className="text-mulberry group-hover:text-cream transition-colors duration-500 font-medium text-xl">$35</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-ink/5 group-hover:border-cream/10 transition-colors duration-500 pb-6 last:border-0 last:pb-0">
                    <div>
                      <h4 className="text-xl font-serif text-ink group-hover:text-cream transition-colors duration-500 mb-1">Visual Upgrade</h4>
                      <p className="text-sm text-ink/60 group-hover:text-cream/70 transition-colors duration-500 font-light">Enhance your imagery and visual assets.</p>
                    </div>
                    <span className="text-mulberry group-hover:text-cream transition-colors duration-500 font-medium text-xl">$50</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-ink/5 group-hover:border-cream/10 transition-colors duration-500 pb-6 last:border-0 last:pb-0">
                    <div>
                      <h4 className="text-xl font-serif text-ink group-hover:text-cream transition-colors duration-500 mb-1">New Page</h4>
                      <p className="text-sm text-ink/60 group-hover:text-cream/70 transition-colors duration-500 font-light">Design and development of an additional page.</p>
                    </div>
                    <span className="text-mulberry group-hover:text-cream transition-colors duration-500 font-medium text-xl">$150</span>
                  </li>
                </ul>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 bg-mulberry text-cream text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blush/20 rounded-full blur-3xl opacity-30" />
        
        {/* Plum Blossom Logo Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] pointer-events-none z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 0.2, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Logo className="w-full h-full text-cream" />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to elevate your brand?</h2>
          <p className="text-cream/80 font-light mb-10 text-lg">
            Let's collaborate to create a digital presence that truly reflects your vision and drives results.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-cream text-mulberry px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white transition-colors shadow-xl"
          >
            Start a Project <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
