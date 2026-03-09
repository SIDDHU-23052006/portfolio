import { motion } from "framer-motion";
import { Terminal, Github, Smartphone, Figma, LayoutTemplate, Braces, Database, Blocks, Cpu, Network } from "lucide-react";

const skills = [
  { name: "Java", icon: Terminal, color: "text-orange-400", bg: "bg-orange-400/10" },
  { name: "C/C++", icon: Braces, color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "Front-End", icon: LayoutTemplate, color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { name: "Data Structures", icon: Network, color: "text-purple-400", bg: "bg-purple-400/10" },
  { name: "DBMS", icon: Database, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { name: "OOP", icon: Blocks, color: "text-indigo-400", bg: "bg-indigo-400/10" },
  { name: "IoT", icon: Cpu, color: "text-rose-400", bg: "bg-rose-400/10" },
  { name: "Android", icon: Smartphone, color: "text-green-400", bg: "bg-green-400/10" },
  { name: "Figma", icon: Figma, color: "text-pink-400", bg: "bg-pink-400/10" },
  { name: "Git/GitHub", icon: Github, color: "text-white", bg: "bg-white/10" },
];

export function Skills() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/5 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, type: "spring", stiffness: 200 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass-card px-6 py-4 rounded-2xl flex items-center gap-3 border border-white/5 hover:border-white/20 cursor-default"
            >
              <div className={`w-10 h-10 rounded-xl ${skill.bg} flex items-center justify-center`}>
                <skill.icon className={`w-5 h-5 ${skill.color}`} />
              </div>
              <span className="font-semibold text-white tracking-wide">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
