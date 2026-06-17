import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  Globe, 
  Smile, 
  Clock, 
  Users, 
  Sparkles, 
  ChevronRight 
} from "lucide-react";

const roadmapEvents = [
  {
    type: "education",
    year: "2020 - 2021",
    title: "Secondary School Leaving Certificate (10th)",
    subtitle: "Jeevanandam Govt Hr Sec School, Puducherry",
    metric: "80% Percentage",
    description: "The spark that started my academic and technical journey, establishing a solid foundation in mathematics, analytical reasoning, and logical problem-solving.",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-400"
  },
  {
    type: "education",
    year: "2022 - 2023",
    title: "Higher Secondary Certificate (12th)",
    subtitle: "Nivedha Matric Hr Sec School, Mayiladuthurai, Tamil Nadu",
    metric: "87.5% Percentage",
    description: "Specialized in Computer Science and Mathematics, writing my first software programs and diving deep into digital fundamentals.",
    icon: GraduationCap,
    color: "from-indigo-500 to-blue-400"
  },
  {
    type: "education",
    year: "2023 - 2027",
    title: "B-Tech Computer Science (CSE)",
    subtitle: "Sri Manakula Vinayagar Engineering College, Puducherry",
    metric: "8.41 CGPA (up to 5th sem)",
    description: "Deepening theoretical and practical foundations in core computer science, database systems, data structures, and application development.",
    icon: GraduationCap,
    color: "from-purple-500 to-indigo-400"
  },
  {
    type: "divider",
    title: "Entering the Professional World"
  },
  {
    type: "experience",
    year: "2026",
    title: "Web Developer (Intern)",
    subtitle: "GodParticles (Chennai)",
    description: "Processed and analyzed visual inspection data for Printed Circuit Boards. Optimized computer vision defect-detection algorithms, leading to significantly higher accuracy in automated manufacturing quality assurance.",
    icon: Briefcase,
    color: "from-teal-500 to-emerald-400"
  },
  {
    type: "experience",
    year: "2026",
    title: "AI and LLMs (Intern)",
    subtitle: "Infosys Springboard (Remote)",
    description: "Designed and built an intelligent, personalized full-stack AI content creator application integrating multiple LLMs (OpenAI, Gemini, Mistral) with React and Flask frontend-backend architecture.",
    icon: Briefcase,
    color: "from-orange-500 to-amber-400"
  },
  {
    type: "experience",
    year: "2026",
    title: "Data Analyst (Intern)",
    subtitle: "Zaalima Development PVT. LTD.",
    description: "Analyzed complex machine sensor telemetry to forecast equipment breakdowns up to 24 hours in advance. Developed statistical predictive maintenance models that improved scheduling and minimized unplanned downtime.",
    icon: Briefcase,
    color: "from-rose-500 to-pink-400"
  },
  {
    type: "experience",
    year: "2026 - Present",
    title: "Founder & Lead Engineer",
    subtitle: "Social Wrenchers",
    description: "Leading a team of visionary engineers, designers, and strategists. We craft custom next-generation digital platforms—from enterprise-grade social intranets to community-driven mobile applications—bringing people together efficiently, securely, and delightfully.",
    link: "https://social-wrenchers-site.vercel.app/",
    stats: [
      { label: "3+ Clients Served", icon: Users },
      { label: "80% Satisfaction Rate", icon: Smile },
      { label: "24/7 Support Coverage", icon: Clock }
    ],
    icon: Sparkles,
    color: "from-violet-600 to-fuchsia-500"
  }
];

const milestones = [
  { title: "1st Place Winner", desc: "Innovators Day Hackathon (Smart Train Ticket System)" },
  { title: "Top 10 Rank", desc: "National Project Expo" },
  { title: "2nd Prize", desc: "Paper Presentation at SCIENSEA'24 (MECHCABS)" },
  { title: "Best Student of the year - 2016", desc: "LIC presents for top students" },
  { title: "Football Nationals - 2019", desc: "Represented Puducherry National football team as stopper back (center defence)" }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative border-t border-white/5 bg-gradient-to-b from-transparent to-background/50 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            My Life <span className="text-gradient">Roadmap</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A timeline of my academic background and professional milestones, tracing where it all started to my current ventures.
          </motion.p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative mb-32">
          {/* Central Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-rose-500 -translate-x-1/2 opacity-25 hidden md:block" />
          <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-rose-500 -translate-x-1/2 opacity-25 md:hidden" />

          <div className="space-y-16">
            {roadmapEvents.map((event, idx) => {
              if (event.type === "divider") {
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative flex justify-start md:justify-center py-8 z-10"
                  >
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] border-2 border-background" />
                    <div className="pl-12 md:pl-0">
                      <span className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-purple-500/10 border border-purple-500/30 text-purple-300 backdrop-blur-md">
                        {event.title}
                      </span>
                    </div>
                  </motion.div>
                );
              }

              const isLeft = idx % 2 === 0;
              const Icon = event.icon as React.ComponentType<{ className?: string }>;

              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isLeft ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline Dot with Icon */}
                  <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center shadow-2xl z-20 transition-all duration-300 hover:scale-110 hover:border-primary`}>
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${event.color || ""} opacity-10 absolute inset-0`} />
                    {Icon && <Icon className="w-5 h-5 text-white z-10" />}
                  </div>

                  {/* Card Container */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6 }}
                      className="group relative rounded-[2rem] p-[1px] bg-gradient-to-br from-white/10 to-transparent hover:from-primary/30 hover:to-secondary/30 transition-all duration-500 shadow-xl"
                    >
                      <div className="relative z-10 bg-card/60 backdrop-blur-xl rounded-[2.0rem] p-6 md:p-8 flex flex-col border border-white/5 hover:border-white/10 transition-colors">
                        
                        <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                          <span className="text-xs font-bold uppercase tracking-widest text-primary/90 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                            {event.year}
                          </span>
                          {event.metric && (
                            <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/25 px-3 py-1 rounded-full">
                              {event.metric}
                            </span>
                          )}
                        </div>

                        <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
                          {event.title}
                        </h3>
                        
                        <p className="text-muted-foreground font-semibold mb-4 text-sm tracking-wide uppercase text-accent">
                          {event.subtitle}
                        </p>

                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                          {event.description}
                        </p>

                        {/* Special elements for Social Wrenchers */}
                        {event.stats && (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                            {event.stats.map((stat, sIdx) => {
                              const StatIcon = stat.icon as React.ComponentType<{ className?: string }>;
                              return (
                                <div key={sIdx} className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    {StatIcon && <StatIcon className="w-4 h-4" />}
                                  </div>
                                  <span className="text-xs font-semibold text-white/95 leading-snug">{stat.label}</span>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {event.link && (
                          <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-primary/20 border border-primary/30 hover:bg-primary hover:border-primary px-4 py-2.5 rounded-xl transition-all duration-300 w-fit cursor-pointer shadow-lg hover:shadow-primary/25"
                          >
                            <Globe className="w-3.5 h-3.5" />
                            Visit Website
                            <ChevronRight className="w-3 h-3" />
                          </a>
                        )}

                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Milestones Section */}
        <div className="mt-32">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Trophy size={24} />
            </div>
            <h2 id="achievements" className="text-3xl md:text-4xl font-display font-bold">Key <span className="text-amber-500">Milestones</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-3xl hover:border-amber-500/30 transition-all duration-300 flex gap-4 items-start hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 font-bold shrink-0 group-hover:scale-105 transition-transform">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1 group-hover:text-amber-400 transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

