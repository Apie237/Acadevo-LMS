import React from "react";
import { Link } from "react-router-dom";
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  ArrowRight,
  Heart,
  ExternalLink
} from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Platform: ["Courses", "Mentorship", "Pricing", "Hiring"],
    Company: ["About Us", "Careers", "Blog", "Privacy"],
    Support: ["Help Center", "Community", "Contact", "FAQ"],
  };

  return (
    // Changed bg-gradient to bg-gray-300 and text to slate-900
    <footer className="relative bg-gray-50 text-slate-900 pt-24 pb-12 overflow-hidden border-t border-gray-400/30">
      
      {/* Background Decorative Elements - Adjusted opacity for a light background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#409891]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#48ADB7]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* TOP CTA BOX - Now using a dark glass effect to contrast against gray-300 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-900/5 backdrop-blur-md border border-slate-900/10 p-8 md:p-12 rounded-[2.5rem] mb-20">
          <div>
            <h3 className="text-3xl font-extrabold mb-3 text-slate-900">Master your craft.</h3>
            <p className="text-slate-600 text-lg">Join the 10,000+ African developers building the future.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your work email"
              // Input now has a light background with dark text
              className="flex-1 bg-white/50 border border-slate-300 rounded-xl px-6 py-4 focus:outline-none focus:border-[#48ADB7] transition-all text-slate-900 placeholder:text-slate-500"
            />
            <button className="bg-gradient-to-r from-[#409891] to-[#48ADB7] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg shadow-[#409891]/30">
              Subscribe <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          
          {/* Logo & Description */}
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-6">
              {/* Removed brightness-110 to keep logo natural on light bg */}
              <img src={assets.logo} alt="Acadevo" className="h-10 w-auto" />
            </Link>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-sm">
              We provide the tools, the network, and the mentorship to help African tech talent compete on a global stage.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-11 h-11 rounded-full bg-slate-900/5 border border-slate-900/10 flex items-center justify-center text-slate-700 hover:bg-[#48ADB7] hover:text-white hover:border-[#48ADB7] transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Link Groups */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              {/* Title color set to the brand teal for visibility */}
              <h4 className="font-black text-xs uppercase tracking-[0.2em] text-[#409891] mb-8">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <Link 
                      to={`/${link.toLowerCase()}`} 
                      className="text-slate-600 hover:text-[#48ADB7] transition-colors flex items-center gap-1 group"
                    >
                      {link}
                      <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* LEGAL BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-400/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm font-medium">
            © {currentYear} Acadevo. Proudly founded in Africa.
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
            <Link to="/terms" className="hover:text-slate-900 transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy</Link>
            <Link to="/cookies" className="hover:text-slate-900 transition-colors">Cookies</Link>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/5 rounded-full border border-slate-900/5 text-xs text-slate-600">
            <Heart size={12} className="text-[#48ADB7] fill-[#48ADB7]" />
            Building for 1.2B people
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;