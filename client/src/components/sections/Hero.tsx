import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Trophy } from "lucide-react";
import profileImg from "@assets/favicon.png";

export function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20 overflow-hidden bg-gradient-mesh">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-fit">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-white/80">Available for Opportunities</span>
          </div>
          
          <div>
            <p className="text-xl md:text-2xl text-white/60 font-medium mb-3">Hey, I'm</p>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-4">
              SIDDHARTH <span className="text-gradient">B</span>
            </h1>
            <p className="text-3xl md:text-4xl font-display font-bold text-white/80">
              Building the Future with <span className="text-gradient">Data & Code</span>
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            I'm a visionary B-Tech CSE student (8.41 CGPA) specializing in Full-Stack Development, Data Analysis, and IoT. Leading award-winning projects that bridge the gap between software and the physical world.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a 
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-rose-500 to-violet-600 rounded-full hover:shadow-[0_0_30px_rgba(225,29,72,0.4)] overflow-hidden"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative flex items-center gap-2">
                Explore Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 border border-white/10 bg-white/5 rounded-full hover:bg-white/10 backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-6 mt-6">
            {[
              { icon: Github, href: "https://github.com/SIDDHU-23052006" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/siddharth-b-7b35042a9/" },
              { icon: Mail, href: "mailto:bsiddharth100@gmail.com" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 glow-hover"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-auto w-full max-w-md mx-auto"
        >
          {/* Decorative frame for image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 to-violet-600 rounded-[2rem] transform rotate-3 scale-105 opacity-50 blur-lg animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 to-violet-600 rounded-[2rem] transform -rotate-3 scale-[1.02] opacity-80" />
          
          <div className="relative rounded-[2rem] overflow-hidden border border-white/20 bg-card p-2 transform transition-transform duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10" />
            <img 
              src={profileImg} 
              alt="Profile" 
              className="w-full h-auto object-cover rounded-[1.5rem] relative z-0 filter contrast-125 saturate-110"
            />
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 left-6 z-30 px-4 py-3 rounded-xl flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/20 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <span className="font-bold font-display text-lg">1st</span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Hackathon</p>
                <p className="text-sm font-bold text-white">Winner</p>
              </div>
            </motion.div>
            <motion.div 
  animate={{ y: [0, -8, 0] }} 
  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
  className="absolute bottom-6 left-6 z-30 px-4 py-3 rounded-xl flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/20 shadow-lg"
>
  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
    <Trophy size={18} />
  </div>
  <div>
    <p className="text-xs text-muted-foreground font-medium">SGFI National</p>
    <p className="text-sm font-bold text-white">Football Player</p>
  </div>
</motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-6 right-6 z-30 px-4 py-3 rounded-xl flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/20 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                <span className="font-bold font-display text-lg">10</span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">National Expo</p>
                <p className="text-sm font-bold text-white">Top 10 Rank</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
