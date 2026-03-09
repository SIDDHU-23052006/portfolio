import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-32 relative border-t border-white/5 bg-gradient-to-b from-transparent to-background/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold">Work <span className="text-gradient">Experience</span></h2>
            </div>

            <div className="space-y-12 border-l-2 border-white/10 ml-6 pl-8 relative">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-card border-2 border-primary ring-4 ring-background" />
                <h3 className="text-xl font-bold text-white mb-1">Data Analyst</h3>
                <p className="text-primary font-medium mb-3">Factorygaurd Predictive Maintenance</p>
                <p className="text-muted-foreground leading-relaxed">
                  Analyzed complex machine data to predict potential equipment failures. Developed statistical models that improved maintenance scheduling, reducing unexpected downtime.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-card border-2 border-secondary ring-4 ring-background" />
                <h3 className="text-xl font-bold text-white mb-1">Data Analyst</h3>
                <p className="text-secondary font-medium mb-3">Visionspec PCB Detection</p>
                <p className="text-muted-foreground leading-relaxed">
                  Processed and analyzed visual inspection data for Printed Circuit Boards. Optimized detection algorithms leading to higher accuracy in identifying manufacturing defects.
                </p>
              </motion.div>

            </div>
          </div>

          {/* Education & Achievements Column */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold">Education</h2>
            </div>

            <div className="space-y-12 border-l-2 border-white/10 ml-6 pl-8 relative">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-card border-2 border-accent ring-4 ring-background" />
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-muted-foreground mb-3">
                  2023 - 2027
                </div>
                <h3 className="text-xl font-bold text-white mb-1">B-Tech Computer Science (CSE)</h3>
                <p className="text-accent font-medium mb-3">Sri Manakula Vinayagar Engineering College, Puducherry</p>
                <div className="flex items-center gap-2 text-white/80 bg-white/5 w-fit px-4 py-2 rounded-lg">
                  <span className="font-bold text-lg text-white">8.41</span> CGPA
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-card border-2 border-accent ring-4 ring-background" />
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-muted-foreground mb-3">
                  2022 - 2023
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Higher Secondary Certificate (12th)</h3>
                <p className="text-accent font-medium mb-3">Nivedha Matric Hr Sec School, Mayiladuthurai, Tamil Nadu</p>
                <div className="flex items-center gap-2 text-white/80 bg-white/5 w-fit px-4 py-2 rounded-lg">
                  <span className="font-bold text-lg text-white">87.5%</span> Percentage
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-card border-2 border-accent ring-4 ring-background" />
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-muted-foreground mb-3">
                  2020 - 2021
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Secondary School Leaving Certificate (10th)</h3>
                <p className="text-accent font-medium">Jeevanandam Govt Hr Sec School, Puducherry</p>
              </motion.div>
            </div>

            {/* Achievements Section */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Trophy size={24} />
              </div>
              <h2 id="achievements" className="text-3xl font-display font-bold">Key <span className="text-amber-500">Milestones</span></h2>
            </div>

            <div className="grid gap-4">
              {[
                { title: "1st Place Winner", desc: "Innovators Day Hackathon (Smart Train Ticket System)" },
                { title: "Top 10 Rank", desc: "National Project Expo" },
                { title: "2nd Prize", desc: "Paper Presentation at SCIENSEA'24 (MECHCABS)" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:border-amber-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
