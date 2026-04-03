import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { MountainSunrise } from "../components/MountainSunrise";
import { Logo } from "../components/Logo";

export function WebDesignSiliconValley() {
  const { scrollYProgress } = useScroll();

  // Parallax effect: mountain starts at the top (peaks) and moves up to show the base at the bottom
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.3]);

  const siliconValleySchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Web Design",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Winter Plum & Co",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Silicon Valley",
          "addressRegion": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Silicon Valley"
      },
      "description": "Premium web design and development services for businesses in the Silicon Valley and the Bay Area."
    }
  ];

  return (
    <div className="relative min-h-screen">
      <SEO
        title="Web Design Silicon Valley | Custom Websites"
        description="Elevate your brand with premium web design in Silicon Valley. Winter Plum & Co builds custom, conversion-focused websites for growing Bay Area businesses. Expert Silicon Valley web designer."
        keywords="web design Silicon Valley, Silicon Valley web designer, custom websites Silicon Valley, Bay Area web design, SEO optimized web design, digital agency Silicon Valley, tech company web design"
        url="https://winterplum.co/web-design-silicon-valley"
        schema={[
          ...siliconValleySchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://winterplum.co"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Web Design Silicon Valley",
                "item": "https://winterplum.co/#/web-design-silicon-valley"
              }
            ]
          }
        ]}
      />

      {/* Fixed Parallax Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-cream">
        <motion.div 
          className="absolute w-full left-0 right-0"
          style={{ 
            height: "200vh",
            y: backgroundY,
            opacity: backgroundOpacity
          }}
        >
          <MountainSunrise />
        </motion.div>
      </div>

      <main className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <article className="max-w-4xl mx-auto">
          <header className="mb-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-ink/10 bg-cream/50 backdrop-blur-sm text-sm uppercase tracking-widest text-ink/70"
            >
              Silicon Valley & The Bay Area
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif font-bold text-ink leading-tight mb-6"
            >
              Web Design in the <span className="text-mulberry">Silicon Valley</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed"
            >
              We design high-converting, custom websites for ambitious brands across the Silicon Valley and the Bay Area.
            </motion.p>
          </header>

          <div className="space-y-12 text-lg text-ink/80 leading-relaxed">
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all duration-500"
            >
              <h2 className="text-3xl font-serif text-ink mb-6">Elevating Bay Area Brands Through Strategic Design</h2>
              <p>
                The Silicon Valley is a global hub of innovation. In this competitive landscape, your digital presence must captivate and convert. We specialize in premium web design, blending modern aesthetics with rigorous technical SEO to ensure your site performs flawlessly.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all duration-500"
            >
              <h2 className="text-3xl font-serif text-ink mb-6">Our Core Web Design Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/40 p-8 rounded-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 transition-colors duration-500">
                  <h3 className="text-xl font-serif text-ink mb-3">Custom Website Design</h3>
                  <p className="text-base">
                    Clean, semantic, and highly optimized digital environments built from the ground up.
                  </p>
                </div>
                <div className="bg-white/40 p-8 rounded-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 transition-colors duration-500">
                  <h3 className="text-xl font-serif text-ink mb-3">Strategic Redesigns</h3>
                  <p className="text-base">
                    Breathe new life into your brand with restructured content and a premium visual identity.
                  </p>
                </div>
                <div className="bg-white/40 p-8 rounded-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 transition-colors duration-500">
                  <h3 className="text-xl font-serif text-ink mb-3">Conversion-Focused UX</h3>
                  <p className="text-base">
                    Meticulously mapped user journeys that guide visitors naturally toward taking action.
                  </p>
                </div>
                <div className="bg-white/40 p-8 rounded-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 transition-colors duration-500">
                  <h3 className="text-xl font-serif text-ink mb-3">SEO-Optimized Architecture</h3>
                  <p className="text-base">
                    Foundational technical SEO ensuring your site is fast, mobile-responsive, and easily found.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all duration-500"
            >
              <h2 className="text-3xl font-serif text-ink mb-6">Why Choose Winter Plum & Co?</h2>
              <p>
                We view ourselves as your digital partners. Our philosophy is rooted in intentionality—prioritizing clean, modern aesthetics and lightning-fast performance to ensure your business stands out in the crowded Bay Area market.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all duration-500"
            >
              <h2 className="text-3xl font-serif text-ink mb-6">Our Streamlined Process</h2>
              <ol className="space-y-8">
                <li className="flex gap-6">
                  <span className="text-3xl font-serif text-sage/80">01.</span>
                  <div>
                    <h3 className="text-xl font-serif text-ink mb-2">Discovery & Strategy</h3>
                    <p className="text-base">Deep dive into your goals, audience, and competitive landscape.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-3xl font-serif text-sage/80">02.</span>
                  <div>
                    <h3 className="text-xl font-serif text-ink mb-2">Design & Prototyping</h3>
                    <p className="text-base">Translating your brand identity into stunning, interactive visual concepts.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-3xl font-serif text-sage/80">03.</span>
                  <div>
                    <h3 className="text-xl font-serif text-ink mb-2">Development & SEO</h3>
                    <p className="text-base">Writing clean, performant code with advanced technical SEO and flawless responsiveness.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-3xl font-serif text-sage/80">04.</span>
                  <div>
                    <h3 className="text-xl font-serif text-ink mb-2">Launch & Growth</h3>
                    <p className="text-base">Rigorous testing, launch, and ongoing support for your thriving digital presence.</p>
                  </div>
                </li>
              </ol>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all duration-500"
            >
              <h2 className="text-3xl font-serif text-ink mb-6">Who We Work With</h2>
              <p>
                We proudly partner with small businesses, creative professionals, and ambitious founders across the Silicon Valley and the Bay Area, translating your vision into a compelling online reality.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-ink text-cream p-12 rounded-[2rem] text-center shadow-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 hover:-translate-y-2 hover:shadow-ink/20 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <Logo className="w-96 h-96 text-cream" />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl font-serif mb-6">Ready to transform your digital presence?</h2>
                <p className="text-lg text-cream/80 mb-10 max-w-2xl mx-auto">
                  Let's build a memorable, high-converting website that positions your brand for success. Contact us today to discuss your project.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-cream text-ink px-8 py-4 text-sm uppercase tracking-widest hover:bg-cream/90 transition-colors font-medium rounded-full"
                >
                  Start Your Project
                </Link>
              </div>
            </motion.section>
          </div>
        </article>
      </main>
    </div>
  );
}
