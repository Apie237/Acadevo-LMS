import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MousePointer2, Zap, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1F2937] text-white py-20 overflow-hidden">
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#409891]/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, -20, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#48ADB7]/15 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* TEXT CONTENT */}
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6 group"
          >
            <span className="h-[2px] w-8 bg-[#48ADB7] group-hover:w-12 transition-all" />
            <span className="text-[#48ADB7] font-bold tracking-[0.2em] uppercase text-xs">
              The Next Evolution
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-8"
          >
            AFRICA'S <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#409891] via-[#48ADB7] to-white">
              DIGITAL GENESIS.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-lg leading-relaxed mb-12"
          >
            We aren't just teaching code; we're architecting the next decade of African innovation through immersion and mastery.
          </motion.p>

          {/* Icon-Based Feature List (Replacing Buttons) */}
          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                <Zap size={24} className="text-[#48ADB7]" />
              </div>
              <div>
                <h4 className="font-bold">Fast-Track</h4>
                <p className="text-sm text-gray-500">Accelerated learning paths</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                <Globe size={24} className="text-[#409891]" />
              </div>
              <div>
                <h4 className="font-bold">Global Net</h4>
                <p className="text-sm text-gray-500">Worldwide opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE SECTION - Blob / Organic Shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* The Blob Container */}
          <div className="relative w-full max-w-[500px] aspect-square overflow-hidden group">
            {/* Organic SVG Mask Shape */}
            <div 
              className="absolute inset-0 bg-[#1E293B] transition-all duration-700 group-hover:rotate-6"
              style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" 
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&fit=crop"
                alt="Tech Collaboration"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
            </div>

            {/* Floating Glass Element */}
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-1/2 -right-4 translate-y-[-50%] p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl z-20"
            >
              <div className="flex -space-x-3 mb-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0F172A] bg-gray-600 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#0F172A] bg-[#48ADB7] flex items-center justify-center text-[10px] font-bold">
                  +2k
                </div>
              </div>
              <p className="text-xs font-medium text-gray-300">Developers joining today</p>
            </motion.div>
          </div>

          {/* Scroll Indicator (Visual Hint since buttons are gone) */}
          <div className="absolute -bottom-10 flex flex-col items-center gap-2 opacity-40">
            <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#48ADB7] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;