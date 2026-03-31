import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, useScroll, useMotionValueEvent } from "motion/react";
import { ArrowRight, Star, CheckCircle2, MonitorSmartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { PlumBranch } from "../components/PlumBranch";
import { GrowingPlumBranch } from "../components/GrowingPlumBranch";
import { SEO } from "../components/SEO";

import { AnimatedPagoda } from "../components/AnimatedPagoda";

export function Home() {
  const { scrollY } = useScroll();
  const accumulatedRotation = useMotionValue(0);
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Only add rotation when scrolling down (latest > previous)
    if (previous !== undefined && latest > previous) {
      const diff = latest - previous;
      // 720 degrees per 1000px = 0.72 degrees per px
      accumulatedRotation.set(accumulatedRotation.get() + diff * 0.72);
    }
  });

  // Add spring physics to create the "fidget spinner" momentum effect (slowly easing to a stop)
  const logoRotate = useSpring(accumulatedRotation, { 
    damping: 40, 
    stiffness: 50, 
    mass: 2 
  });

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
    <main className="min-h-screen pt-20">
      <SEO 
        title="Home" 
        description="Winter Plum Digital creates intentional, strategic digital experiences that help brands grow and leave a lasting legacy."
        url="https://winterplumdigital.github.io/"
      />
      {/* Hero Section */}
      <section className="relative px-6 py-32 md:py-48 overflow-hidden flex items-center justify-center text-center">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blush/30 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sage/20 rounded-full blur-3xl mix-blend-multiply opacity-70" />
        
        {/* Plum Blossom Branches */}
        <motion.div 
          initial={{ opacity: 0, x: -50, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-0 w-64 md:w-96 text-mulberry/30 pointer-events-none -z-10"
        >
          <PlumBranch className="w-full h-full" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute bottom-0 right-0 w-64 md:w-96 text-mulberry/30 pointer-events-none -z-10 rotate-180"
        >
          <PlumBranch className="w-full h-full" />
        </motion.div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Faded Logo Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] sm:w-[120%] md:w-[100%] aspect-square pointer-events-none -z-10 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.25, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ rotate: logoRotate }}
              className="w-full h-full"
            >
              <Logo className="w-full h-full text-mulberry" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mulberry/5 border border-mulberry/10 text-mulberry text-sm font-medium tracking-widest uppercase mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-mulberry animate-pulse" />
            Digital Marketing & Design
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-ink tracking-tight leading-[1.1] mb-8"
            style={{ textShadow: '0 4px 24px rgba(247,244,239,0.9), 0 0 10px rgba(247,244,239,0.8)' }}
          >
            We Build, <br className="hidden md:block" />
            <span className="text-mulberry font-medium">You Blossom</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-ink/80 max-w-2xl font-light leading-relaxed mb-12"
            style={{ textShadow: '0 2px 10px rgba(247,244,239,0.9)' }}
          >
            We build memorable, high-converting websites for growing brands.<br className="hidden sm:block" />
            Built to perform. So your brand can blossom in any season.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-mulberry text-cream text-sm uppercase tracking-widest hover:bg-mulberry-dark transition-all hover:shadow-lg hover:-translate-y-1 flex items-center gap-2"
            >
              Get Started <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 rounded-full bg-transparent border border-ink/20 text-ink text-sm uppercase tracking-widest hover:border-ink hover:bg-ink/5 transition-all"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Interactive Pricing Carousel */}
      <section 
        className="px-6 py-32 bg-cream-dark/30 relative overflow-hidden"
        style={{ perspective: "2000px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Growing Plum Branches */}
        <div className="absolute top-0 left-0 w-64 md:w-96 text-mulberry pointer-events-none z-0">
          <GrowingPlumBranch className="w-full h-full" />
        </div>
        <div className="absolute top-0 right-0 w-64 md:w-96 text-mulberry pointer-events-none z-0 scale-x-[-1]">
          <GrowingPlumBranch className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-widest text-sage font-medium mb-4">Our Packages</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-ink leading-tight">
              Tailored to make YOU <span className="text-mulberry font-bold">blossom</span>
            </h3>
          </div>

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
                  className={`flex-1 p-8 lg:p-10 rounded-[2.5rem] flex flex-col relative transition-colors duration-500 ${
                    isActive 
                      ? "bg-mulberry shadow-2xl border-mulberry-light/20 border z-10" 
                      : "bg-white/80 backdrop-blur-xl shadow-xl border-white/40 border z-0"
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

      {/* Philosophy / Approach */}
      <section className="px-6 py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-12 xl:pl-16"
          >
            <h2 className="text-sm uppercase tracking-widest text-sage font-medium mb-4">Our Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-ink leading-tight mb-8">
              Built to grow, <br/><span className="font-bold text-mulberry">Designed with Meaning</span>
            </h3>
            <p className="text-ink/70 font-light leading-relaxed mb-8 text-lg">
              We believe that your website should not only look good today. It should hold up tomorrow, next season, and years from now. We design with longevity in mind- so your brand evolves alongside you.
            </p>
            <ul className="space-y-6">
              {[
                "Timeless design over trends",
                "Structure that scales with you",
                "Strategy behind every detail",
                "Built for long-term growth"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 text-sage"><CheckCircle2 size={20} /></span>
                  <span className="text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative bg-cream-dark/30 flex items-center justify-center p-8 border border-mulberry/10">
              <AnimatedPagoda />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="px-6 py-16 md:py-20 bg-mulberry text-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
           <div className="absolute -top-40 -right-40 w-96 h-96 bg-mulberry-light rounded-full blur-3xl opacity-20" />
           <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-ink rounded-full blur-3xl opacity-20" />
        </div>
        
        {/* Plum Blossom Logo Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] pointer-events-none z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 0.15, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Logo className="w-full h-full text-cream" />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-sm uppercase tracking-widest text-blush font-medium mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-serif leading-tight">
              Crafting Digital <span className="italic text-blush">Experiences</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Website Design",
                desc: "Sleek, responsive, and conversion-focused websites built for the modern web.",
                icon: <MonitorSmartphone size={32} strokeWidth={1.5} />
              },
              {
                title: "SEO Optimization",
                desc: "Strategic visibility to ensure your brand is found by the right audience.",
                icon: <Star size={32} strokeWidth={1.5} />
              },
              {
                title: "Brand Strategy",
                desc: "Cohesive visual storytelling that aligns with your core philosophy.",
                icon: <CheckCircle2 size={32} strokeWidth={1.5} />
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-mulberry-dark/30 border border-[#F7E7CE]/40 p-10 rounded-[2rem] hover:bg-mulberry-dark/50 hover:border-[#F7E7CE]/70 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-blush/10 flex items-center justify-center text-blush mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-serif mb-4">{service.title}</h4>
                <p className="text-cream/70 font-light leading-relaxed mb-8">
                  {service.desc}
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-blush hover:text-white transition-colors">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
