import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { MountainSunrise } from "../components/MountainSunrise";
import { SEO } from "../components/SEO";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "email",
    business: "",
    service: "",
    message: "",
    newsletterOptIn: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [id]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace this URL with your deployed Google Apps Script Web App URL
      const scriptUrl = "https://script.google.com/macros/s/AKfycbz8QS75pHh8u1om_mNHaRXZM59gWTo6xlbdLmgbuDD5CLYh-GYwXjqzx4_VaAtSYZ_p/exec";
      
      if (scriptUrl === "YOUR_GOOGLE_SCRIPT_URL") {
        // Fallback for testing before you paste the URL
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSuccess(true);
        toast.success("Message sent successfully! (Test Mode)");
        return;
      }

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        // Using text/plain avoids CORS preflight issues with Google Apps Script
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(formData)
      });

      setIsSuccess(true);
      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData({
        name: "", email: "", phone: "", preferredContact: "email",
        business: "", service: "", message: "", newsletterOptIn: true
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-12 relative overflow-hidden">
      <SEO 
        title="Contact" 
        description="Get in touch with Winter Plum Digital. Tell us where you're headed. We'll build the path to get you there."
        url="https://winterplumdigital.github.io/Winter-Plum-Co./#/contact"
      />
      {/* Background Textures */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blush/20 rounded-full blur-3xl opacity-60 -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-sage/10 rounded-full blur-3xl opacity-50 -z-10 -translate-x-1/3 translate-y-1/3" />
      
      {/* Mountain Background */}
      <div className="absolute top-20 left-0 w-full h-[600px] pointer-events-none z-0 overflow-hidden">
        <MountainSunrise />
      </div>

      <section className="px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-sm uppercase tracking-widest text-sage font-medium mb-4">Get in Touch</h1>
            <h2 className="text-5xl md:text-6xl font-serif text-ink leading-tight mb-8">
              Let's build your <br />
              <span className="text-mulberry">Digital <span className="font-bold">legacy.</span></span>
            </h2>
            <p className="text-lg text-ink/70 font-light leading-relaxed mb-12 max-w-md">
              We work with brands that care about how they grow, not just how they look. Tell us where you're headed. We'll build the path to get you there.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cream-dark flex items-center justify-center text-mulberry shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-ink/50 mb-1">Email Us</h3>
                  <a href="mailto:winterplum.co@gmail.com" className="text-lg text-ink hover:text-mulberry transition-colors font-serif">
                    winterplum.co@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/60 backdrop-blur-xl p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-white/40 relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-mulberry/10 rounded-full blur-xl" />
            
            {isSuccess ? (
              <div className="relative z-10 flex flex-col items-center justify-center py-12 text-center space-y-6">
                <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center text-sage">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-serif text-ink">Thank you!</h3>
                <p className="text-lg text-ink/70 font-light">
                  We've received your message and will be in touch with you shortly.
                </p>
              </div>
            ) : (
              <form className="relative z-10 space-y-8" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value={`New inquiry from ${formData.name || 'Website'}`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-ink/60 font-medium">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-mulberry transition-colors placeholder:text-ink/30"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-ink/60 font-medium">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-mulberry transition-colors placeholder:text-ink/30"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-ink/60 font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-mulberry transition-colors placeholder:text-ink/30"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="preferredContact" className="text-xs uppercase tracking-widest text-ink/60 font-medium">Preferred Contact Method</label>
                    <select 
                      id="preferredContact" 
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-mulberry transition-colors appearance-none"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="business" className="text-xs uppercase tracking-widest text-ink/60 font-medium">Business Name</label>
                  <input 
                    type="text" 
                    id="business" 
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-mulberry transition-colors placeholder:text-ink/30"
                    placeholder="Your Company LLC"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs uppercase tracking-widest text-ink/60 font-medium">Service of Interest</label>
                  <select 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-mulberry transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="basic">Basic Package</option>
                    <option value="standard">Standard Package</option>
                    <option value="premium">Premium Package</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-ink/60 font-medium">Project Details *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-mulberry transition-colors placeholder:text-ink/30 resize-none"
                    placeholder="Tell us about your goals, timeline, and vision..."
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <div className="flex items-center h-5">
                    <input
                      id="newsletterOptIn"
                      name="newsletterOptIn"
                      type="checkbox"
                      checked={formData.newsletterOptIn}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-ink/30 text-mulberry focus:ring-mulberry bg-transparent"
                    />
                  </div>
                  <label htmlFor="newsletterOptIn" className="text-sm text-ink/70 font-light leading-snug">
                    I'd like to receive occasional updates, design tips, and marketing insights from Winter Plum & Co.
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-mulberry text-cream text-sm uppercase tracking-widest hover:bg-mulberry-dark transition-all hover:shadow-lg hover:-translate-y-1 disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </main>
  );
}
