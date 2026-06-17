import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, ShieldAlert, Cpu } from "lucide-react";

const projects = [
  {
    title: "Smart Train Ticket Verification",
    role: "Team Leader",
    description: "Built with React, Firebase, Flask, Java, ESP32-CAM AI Thinker, Arduino, NFC, and deep sensors to automate and secure the ticket verification process.",
    tags: ["React", "Firebase", "Flask", "IoT", "NFC"],
    highlights: ["1st Place - Innovators Day Hackathon", "Top 10 - National Project Expo"],
    icon: Cpu,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "MECHCABS (Mechanic + Cabs)",
    role: "Team Leader",
    description: "GPS-based mobile app connecting users with nearby mechanics and cab services seamlessly. Features robust cloud services architecture.",
    tags: ["Mobile App", "GPS", "Cloud Services", "Java"],
    highlights: ["2nd Prize - Paper Presentation (SCIENSEA'24)"],
    icon: Code2,
    color: "from-orange-500 to-rose-500"
  },
  {
    title: "AI Content Creation (Info Creator)",
    role: "Team Leader",
    description: "Web-based intelligent platform with an interactive editor that uses AI to generate, format, and optimize content efficiently.",
    tags: ["Web Dev", "AI/LLM", "Interactive Editor"],
    highlights: [],
    icon: Code2,
    color: "from-violet-500 to-fuchsia-500"
  },
  {
    title: "Invoice Generator",
    role: "Team Leader",
    description: "Comprehensive billing solution tailored for small businesses to create, manage, and track invoices with real-time analytics.",
    tags: ["Front-End", "Data Management", "PDF Generation"],
    highlights: [],
    icon: Code2,
    color: "from-emerald-400 to-teal-500"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            A showcase of my technical leadership, problem-solving skills, and ability to build full-stack & IoT solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative rounded-[2rem] p-[1px] bg-gradient-to-br from-white/10 to-transparent hover:from-primary/30 hover:to-secondary/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-[2rem] blur-xl z-0" />
              
              <div className="relative z-10 h-full bg-card rounded-[2rem] p-8 flex flex-col glass-card border-none">
                
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} p-[1px]`}>
                    <div className="w-full h-full bg-card rounded-[15px] flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all">
                      <Github size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>

                <div className="mb-2 inline-block">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    {project.role}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {project.highlights.length > 0 && (
                  <div className="mb-6 space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-amber-400 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
