import { motion, useScroll, useTransform } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { MountainSunrise } from "../components/MountainSunrise";
import { Logo } from "../components/Logo";

const faqs = [
  {
    question: "How long does a typical web design project take?",
    answer: "A standard project usually takes between 4 to 8 weeks from discovery to launch. This timeline depends on the complexity of the site, the number of pages, and how quickly we receive feedback and content from your team."
  },
  {
    question: "Do you offer ongoing website maintenance and support?",
    answer: "Yes, we offer monthly care plans (Basic and Blossoming) that include domain maintenance, security updates, small content edits, and ongoing SEO support to ensure your site continues to perform at its best."
  },
  {
    question: "What is your pricing structure for custom websites?",
    answer: "We offer three main packages: Basic, Standard, and Premium. Prices vary based on the scope of work, but we provide transparent quotes after our initial discovery call. We also offer one-off upgrades for specific needs like copywriting or visual refreshes."
  },
  {
    question: "Will my website be optimized for search engines (SEO)?",
    answer: "Absolutely. Every site we build includes foundational technical SEO. Our Standard and Premium packages include more advanced SEO strategies, including keyword research and content optimization, to help your brand blossom in search results."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, we specialize in strategic redesigns. We'll analyze your current site's performance, identify areas for improvement, and create a modern, high-converting digital presence that aligns with your current brand goals."
  },
  {
    question: "Who do you typically work with?",
    answer: "We proudly partner with small businesses, creative professionals, and ambitious founders across the Bay Area and beyond. We love working with clients who value intentional design and long-term growth."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void, key?: any }) {
  return (
    <div className="border-b border-mulberry/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-xl font-serif transition-colors duration-300 ${isOpen ? 'text-mulberry' : 'text-ink group-hover:text-mulberry'}`}>
          {question}
        </span>
        <span className="text-mulberry ml-4">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-ink/70 leading-relaxed max-w-3xl">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export function FAQ() {
  const { scrollYProgress } = useScroll();

  // Parallax effect: mountain starts at the top (peaks) and moves up to show the base at the bottom
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.3]);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen pt-40 relative overflow-hidden">
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about our web design process, pricing, SEO services, and ongoing support for businesses in San Jose and the Bay Area."
        url="https://winterplum.co/#/faq"
        keywords="web design FAQ, website pricing San Jose, SEO questions, digital agency support, web design process, Bay Area web design studio"
        schema={[faqSchema]}
      />
      
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

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 mb-24">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-ink/10 bg-cream/50 backdrop-blur-sm text-sm uppercase tracking-widest text-ink/70"
          >
            Support & Information
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-ink leading-tight mb-6"
          >
            Common <span className="text-mulberry">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to know about partnering with us to grow your digital presence.
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5"
        >
          <div className="divide-y divide-mulberry/10">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </motion.div>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-ink text-cream p-12 rounded-[2rem] text-center shadow-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 hover:-translate-y-2 hover:shadow-ink/20 transition-all duration-500 relative overflow-hidden"
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

    </main>
  );
}
