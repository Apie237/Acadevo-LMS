import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative bg-[#0F172A] text-white py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#409891]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT SIDE: Contact Info */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[#48ADB7] font-bold tracking-[0.2em] uppercase text-sm mb-4">
                Get In Touch
              </h4>
              <h2 className="text-4xl font-extrabold mb-6 leading-tight">
                Let’s Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#409891] to-[#48ADB7]">Next Big Thing</span> Together.
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Have questions about our curriculum or want to partner with us? Our team is here to help you navigate your tech journey.
              </p>

              <div className="space-y-8">
                {[
                  { icon: <Mail />, label: "Email us at", detail: "hello@acadevo.com" },
                  { icon: <Phone />, label: "Call us", detail: "+234 (0) 800 ACADEVO" },
                  { icon: <MapPin />, label: "Visit our hub", detail: "Tech City, Lagos, Nigeria" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#48ADB7] border border-white/10 group-hover:bg-[#48ADB7] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">{item.label}</p>
                      <p className="font-semibold text-lg">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl">
              <form onSubmit={(e) => e.preventDefault()} className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#48ADB7] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#48ADB7] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help?"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#48ADB7] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Message</label>
                  <textarea 
                    rows="5"
                    placeholder="Tell us more about your project or inquiry..."
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#48ADB7] transition-colors resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full md:w-auto bg-gradient-to-r from-[#409891] to-[#48ADB7] text-white font-bold px-10 py-4 rounded-xl shadow-xl shadow-[#48ADB7]/20 hover:shadow-[#48ADB7]/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                    Send Message
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;