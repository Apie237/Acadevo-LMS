import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Award, ShieldCheck } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Mentors", value: "200+" },
    { label: "Countries", value: "15+" },
    { label: "Hours of Content", value: "5k+" },
  ];

  const values = [
    {
      icon: <Target className="text-[#48ADB7]" size={24} />,
      title: "Our Mission",
      description: "To bridge the global tech gap by providing world-class education to African talent."
    },
    {
      icon: <ShieldCheck className="text-[#48ADB7]" size={24} />,
      title: "Our Quality",
      description: "Curriculum vetted by industry leads from Google, Meta, and top African startups."
    },
    {
      icon: <Users className="text-[#48ADB7]" size={24} />,
      title: "Community First",
      description: "A supportive ecosystem where peers grow together and build lasting networks."
    }
  ];

  return (
    <section className="relative bg-[#0F172A] text-white py-24 overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#409891]/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Side: Image with custom shape */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div 
              className="relative aspect-square w-full max-w-md mx-auto bg-gradient-to-br from-[#409891] to-[#48ADB7] overflow-hidden"
              style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&fit=crop" 
                alt="Our team" 
                className="w-full h-full object-cover mix-blend-overlay opacity-90"
              />
            </div>
            {/* Floating Experience Tag */}
            <div className="absolute -bottom-6 -right-4 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-[#0F172A] text-4xl font-black italic">05+</p>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Right Side: Text Content */}
          <div className="z-10">
            <h4 className="text-[#48ADB7] font-bold tracking-[0.3em] uppercase text-sm mb-4">
              Behind the Platform
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Empowering the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#409891] to-[#48ADB7]">African Tech Titans.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Acadevo started with a simple observation: Africa has the youngest, most ambitious population on earth, but access to high-tier technical mentorship was fragmented. 
              <br /><br />
              We built a bridge. A place where rigorous engineering meets local context, ensuring our graduates don't just find jobs—they lead industries.
            </p>

            <div className="flex gap-10 border-t border-white/10 pt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/[0.08] transition-all group"
            >
              <div className="w-14 h-14 bg-[#409891]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;