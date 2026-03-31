import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { MountainSunrise } from "../components/MountainSunrise";

export function WebDesignSanJose() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effect: mountain starts lower (showing peaks) and moves up to show base
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20vh", "-100vh"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.3]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <SEO
        title="Web Design San Jose | Custom Websites | Winter Plum & Co"
        description="Elevate your brand with premium web design in San Jose. Winter Plum & Co builds custom, conversion-focused websites for growing Bay Area businesses."
        url="https://winterplum.co/#/web-design-san-jose"
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
              San Jose & The Bay Area
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif text-ink leading-tight mb-6"
            >
              Web Design in San Jose
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
              className="bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/50 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-white/80 transition-all duration-500"
            >
              <h2 className="text-3xl font-serif text-ink mb-6">Elevating Bay Area Brands Through Strategic Design</h2>
              <p className="mb-4">
                San Jose is a global hub of innovation, technology, and forward-thinking enterprise. In a landscape this competitive, your digital presence must do more than simply exist—it needs to captivate, communicate, and convert. At Winter Plum & Co, we specialize in premium web design in San Jose, partnering with local businesses to create bespoke websites that truly reflect the caliber of their work.
              </p>
              <p>
                We understand that your website is often the first interaction a potential client has with your brand. That is why our approach to San Jose web design goes beyond mere aesthetics. We blend beautiful, modern typography and layout with rigorous technical SEO, fast load times, and intuitive user experiences to ensure your site not only looks exceptional but performs flawlessly.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/50 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-white/80 transition-all duration-500"
            >
              <h2 className="text-3xl font-serif text-ink mb-6">Our Core Web Design Services</h2>
              <p className="mb-8">
                Whether you are launching a new venture or revitalizing an established brand, our comprehensive suite of services is tailored to meet the unique demands of the modern digital landscape.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/40 p-8 rounded-2xl border border-white/60">
                  <h3 className="text-xl font-serif text-ink mb-3">Custom Website Design</h3>
                  <p className="text-base">
                    We build custom websites from the ground up. No generic templates or bloated code—just clean, semantic, and highly optimized digital environments designed specifically for your target audience and business goals.
                  </p>
                </div>
                <div className="bg-white/40 p-8 rounded-2xl border border-white/60">
                  <h3 className="text-xl font-serif text-ink mb-3">Strategic Redesigns</h3>
                  <p className="text-base">
                    If your current website feels outdated or is failing to convert visitors into clients, our strategic redesign process breathes new life into your brand. We analyze user behavior, restructure your content, and apply a premium visual identity.
                  </p>
                </div>
                <div className="bg-white/40 p-8 rounded-2xl border border-white/60">
                  <h3 className="text-xl font-serif text-ink mb-3">Conversion-Focused UX</h3>
                  <p className="text-base">
                    Beautiful design is only effective if it drives action. We meticulously map out user journeys, ensuring that every page guides your visitors naturally toward contacting you, making a purchase, or booking a consultation.
                  </p>
                </div>
                <div className="bg-white/40 p-8 rounded-2xl border border-white/60">
                  <h3 className="text-xl font-serif text-ink mb-3">SEO-Optimized Architecture</h3>
                  <p className="text-base">
                    A stunning website is useless if no one can find it. Every project we undertake includes foundational technical SEO, ensuring your site is fast, mobile-responsive, and easily crawlable by search engines.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/50 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-white/80 transition-all duration-500"
            >
              <h2 className="text-3xl font-serif text-ink mb-6">Why Choose Winter Plum & Co?</h2>
              <p className="mb-4">
                Finding the right partner for website design in San Jose can be challenging. Many agencies rely on cookie-cutter solutions that fail to capture the nuance of your specific brand. We take a different approach. We view ourselves as your digital partners, deeply invested in your long-term success.
              </p>
              <p>
                Our philosophy is rooted in intentionality. Every color choice, typography pairing, and interaction is designed with a specific purpose. We prioritize clean, modern aesthetics that convey trust and authority, ensuring your business stands out in the crowded Bay Area market. Furthermore, we build with performance in mind, utilizing modern frameworks that guarantee lightning-fast load speeds—a critical factor for both user retention and search engine rankings.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/50 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-white/80 transition-all duration-500"
            >
              <h2 className="text-3xl font-serif text-ink mb-6">Our Streamlined Process</h2>
              <p className="mb-10">
                We believe that creating a premium website should be an exciting and seamless experience. Our refined process ensures clarity, collaboration, and exceptional results at every stage.
              </p>
              <ol className="space-y-10">
                <li className="flex gap-6">
                  <span className="text-3xl font-serif text-sage/80">01.</span>
                  <div>
                    <h3 className="text-xl font-serif text-ink mb-2">Discovery & Strategy</h3>
                    <p className="text-base">We begin by diving deep into your business, understanding your goals, target audience, and competitive landscape. This foundational research informs our entire design and development strategy.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-3xl font-serif text-sage/80">02.</span>
                  <div>
                    <h3 className="text-xl font-serif text-ink mb-2">Design & Prototyping</h3>
                    <p className="text-base">Our design team translates your brand identity into a stunning visual concept. We provide interactive prototypes, allowing you to experience the look and feel of your new site before development begins.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-3xl font-serif text-sage/80">03.</span>
                  <div>
                    <h3 className="text-xl font-serif text-ink mb-2">Development & SEO</h3>
                    <p className="text-base">Once the design is approved, we write clean, performant code. During this phase, we implement advanced technical SEO, structured data, and ensure flawless responsiveness across all devices.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-3xl font-serif text-sage/80">04.</span>
                  <div>
                    <h3 className="text-xl font-serif text-ink mb-2">Launch & Growth</h3>
                    <p className="text-base">After rigorous testing, we launch your new website. But our partnership doesn't end there. We provide training and ongoing support to ensure your digital presence continues to thrive and evolve.</p>
                  </div>
                </li>
              </ol>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/50 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-white/80 transition-all duration-500"
            >
              <h2 className="text-3xl font-serif text-ink mb-6">Who We Work With</h2>
              <p className="mb-4">
                We proudly partner with small businesses, growing brands, creative professionals, and ambitious founders. While we serve clients globally, our roots in the region make us uniquely equipped to handle web design for San Jose and Bay Area companies looking to elevate their local and national reach.
              </p>
              <p>
                Whether you are a boutique consulting firm in downtown San Jose, a lifestyle brand expanding across California, or a tech startup needing a polished digital footprint, we have the expertise to translate your vision into a compelling online reality.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-ink text-cream p-12 rounded-[2rem] text-center shadow-2xl hover:-translate-y-2 hover:shadow-ink/20 transition-all duration-500"
            >
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
            </motion.section>
          </div>
        </article>
      </main>
    </div>
  );
}
