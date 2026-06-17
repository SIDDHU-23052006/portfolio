import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Sparkles, Receipt, ShieldAlert, Eye, Car } from "lucide-react";

const projects = [
  {
    title: "AI Content Creation (Info Creator)",
    role: "AI Developer",
    description: "An intelligent web-based platform that integrates Large Language Models (LLMs) with an interactive rich text editor workspace. Assists users in generating structured contextual drafts, customizing sentence tone and formatting in real-time, and tracking readability analysis with detailed writing metrics.",
    tags: ["React", "Flask", "Python", "LLMs (OpenAI/Gemini/Mistral)", "Rich Text Editor", "Readability Analysis"],
    highlights: [],
    icon: Sparkles,
    color: "from-violet-500 to-fuchsia-500",
    github: "https://github.com/SIDDHU-23052006/content-creation.git",
    live: "https://content-creation-lac.vercel.app/"
  },
  {
    title: "Invoice Generator",
    role: "Software Dev Intern",
    description: "A comprehensive SAP-mapped billing solution designed to streamline invoice operations for finance workflows. Features real-time tax and total calculations, robust invoice management pipelines, and seamless PDF document export capabilities.",
    tags: ["React", "Flask", "SQL", "Python", "Data Management", "PDF Generation"],
    highlights: [],
    icon: Receipt,
    color: "from-emerald-400 to-teal-500",
    github: "https://github.com/SIDDHU-23052006/iNVOICE_gENERATOR.git",
    live: "https://i-nvoice-g-enerator-api-server.vercel.app/"
  },
  {
    title: "Smart Train Ticket Verification System",
    role: "Team Leader",
    description: "An automated web and Android IoT system that revolutionizes train travel validation. Integrates entry-point deep sensors for passenger detection, NFC readers for ticket checks, and ESP32-CAM AI Thinker modules for real-time image recognition and unauthorized entry prevention.",
    tags: ["React", "Firebase", "Flask", "Java", "IoT", "Arduino", "ESP32-CAM", "NFC"],
    highlights: ["1st Place - Innovators Day Hackathon", "Top 10 - National Project Expo"],
    icon: Cpu,
    color: "from-blue-500 to-cyan-400",
    github: "https://github.com/SIDDHU-23052006/Smart_Train_Ticket_Verification_System.git",
    live: "" // same as github -> show only github button
  },
  {
    title: "FactoryGuard - Predictive Maintenance",
    role: "Data Engineer",
    description: "An end-to-end Machine Learning and IoT simulation system that forecasts factory machine breakdowns up to 24 hours in advance. Using real-time stream simulation of IoT sensor data (temperature, vibration, and pressure), Factory Guard calculates rolling window health metrics and deploys an optimized XGBoost classifier to predict failures before they happen—allowing operators to schedule maintenance and prevent costly production downtime.",
    tags: ["Python", "Flask", "XGBoost", "Machine Learning", "IoT", "Data Engineering", "Stream Simulation"],
    highlights: [],
    icon: ShieldAlert,
    color: "from-rose-500 to-amber-500",
    github: "https://github.com/SIDDHU-23052006/Factory-Gaurd-AI-Predictive-Maintanence.git",
    live: "" // same as github -> show only github button
  },
  {
    title: "VisionSpec QC",
    role: "AI Engineer",
    description: "Automated Visual Quality Control for high-speed manufacturing lines using Computer Vision and Deep Learning. VisionSpec QC uses a highly optimized MobileNetV2 architecture (via Transfer Learning) to inspect Printed Circuit Boards (PCBs) in real-time, instantly classifying them as 'Pass' or 'Defect'. It also features Grad-CAM (Gradient-weighted Class Activation Mapping) localization to visually highlight the exact area of the defect, ensuring full interpretability for quality assurance operators.",
    tags: ["Python", "MobileNetV2", "Transfer Learning", "Computer Vision", "Deep Learning", "Grad-CAM"],
    highlights: [],
    icon: Eye,
    color: "from-indigo-500 to-purple-500",
    github: "https://github.com/SIDDHU-23052006/VisionSpec_QC.git",
    live: "" // same as github -> show only github button
  },
  {
    title: "MECHCABS (Mechanic + Cabs)",
    role: "Team Leader",
    description: "GPS-based mobile app connecting stranded users in rural or remote areas with nearby registered mechanics and emergency cab services. Employs OTP-based validation to ensure service authenticity and security, providing alternative mobility options seamlessly.",
    tags: ["Mobile App", "GPS", "Cloud Services", "Java", "Android"],
    highlights: ["2nd Prize - Paper Presentation (SCIENSEA'24)"],
    icon: Car,
    color: "from-orange-500 to-rose-500",
    github: "", // no link
    live: "" // no link
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
            A showcase of my technical leadership, problem-solving skills, and ability to build full-stack, AI, & IoT solutions.
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
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                        title="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                        title="Live Site"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
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

