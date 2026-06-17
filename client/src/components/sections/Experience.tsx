import { useState, useEffect } from "react";
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
  ChevronRight,
  ChevronLeft,
  X 
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
  { title: "Football Nationals - 2019", desc: " stopper back (center defence)" }
];

const innovatorsPhotos = [
  { src: "/assets/innovators/certificate.png", caption: "1st Place Winner Certificate - Innovators Day 2024 (Sri Manakula Vinayagar Engineering College)" },
  { src: "/assets/innovators/team_working.jpg", caption: "Teammates calibrating the ticket validation prototype" },
  { src: "/assets/innovators/presentation.jpg", caption: "Presenting the IoT smart check-in device to evaluators" }
];

const expoPhotos = [
  { src: "/assets/expo/certificate.png", caption: "Certificate of Participation - National Project Expo (INAE Youth Conclave)" },
  { src: "/assets/expo/group_photo.jpg", caption: "Our Team presenting the ticket verification system at Anurag University" },
  { src: "/assets/expo/working_on_device.jpg", caption: "Calibrating and assembling the Ticket Verification IoT box" },
  { src: "/assets/expo/device_closeup.jpg", caption: "Detailed front panel wiring of the ESP32 & NFC prototype" },
  { src: "/assets/expo/device_in_train.jpg", caption: "Real-world testing of the verification system on-board the train" }
];

const scienseaPhotos = [
  { src: "/assets/sciensea/certificate.jpg", caption: "2nd Prize Winner Certificate in Paper Presentation - SCIENSEA'24 National Level Technical Symposium" },
  { src: "/assets/sciensea/device_closeup.jpg", caption: "Prototype device demonstration close-up next to the development laptop" },
  { src: "/assets/sciensea/working_on_prototype.png", caption: "Double-display debugging setup for calibrating the system prototype" },
  { src: "/assets/sciensea/team_selfie.png", caption: "Team members celebrating a successful presentation at Kongu Engineering College" }
];

const studentPhotos = [
  { src: "/assets/student/certificate.jpg", caption: "LIC Student of the Year 2015-2016 Certificate for outstanding academic performance" },
  { src: "/assets/student/holding_trophy.jpg", caption: "Receiving the LIC Student of the Year Award 2016" },
  { src: "/assets/student/trophy_closeup.png", caption: "Close-up of the LIC Student of the Year 2016 Trophy" },
  { src: "/assets/student/trophy_certificate.png", caption: "LIC Student of the Year Award 2016 Trophy and Certificate" }
];

const footballPhotos = [
  { src: "/assets/football/certificate.jpg", caption: "Certificate of Participation - 65th National School Games 2019-20 (Imphal, Manipur) representing Puducherry in Football" },
  { src: "/assets/football/sitting_by_pond.jpg", caption: "At the National Games venue representing Puducherry team" },
  { src: "/assets/football/sitting_steps1.png", caption: "Resting between matches at the tournament quarters" },
  { src: "/assets/football/sitting_steps2.png", caption: "Tournament participation portrait in Puducherry team tracksuit" }
];

interface FolderCardProps {
  item: typeof milestones[0];
  index: number;
  photos: { src: string; caption: string }[];
  centerPhotoIdx: number;
  leftPhotoIdx: number;
  rightPhotoIdx: number;
}

function InteractiveFolderCard({ 
  item, 
  index, 
  photos, 
  centerPhotoIdx, 
  leftPhotoIdx, 
  rightPhotoIdx 
}: FolderCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight") setActivePhotoIdx((prev) => (prev + 1) % photos.length);
      if (e.key === "ArrowLeft") setActivePhotoIdx((prev) => (prev - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, photos.length]);

  const leftPhotoVariants = {
    initial: { y: 25, x: -10, rotate: -8, scale: 0.9, opacity: 0.8 },
    hover: { y: -25, x: -35, rotate: -15, scale: 1, opacity: 1, zIndex: 10 }
  };

  const rightPhotoVariants = {
    initial: { y: 20, x: 10, rotate: 8, scale: 0.9, opacity: 0.8 },
    hover: { y: -30, x: 35, rotate: 15, scale: 1, opacity: 1, zIndex: 10 }
  };

  const centerPhotoVariants = {
    initial: { y: 10, x: 0, rotate: -2, scale: 0.95, opacity: 0.9 },
    hover: { y: -42, x: 0, rotate: 2, scale: 1.05, opacity: 1, zIndex: 20 }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        onClick={() => {
          setActivePhotoIdx(0);
          setIsOpen(true);
        }}
        whileHover="hover"
        className="relative h-[200px] cursor-pointer group select-none overflow-visible"
      >
        {/* Folder Back Cover */}
        <div className="absolute inset-0 bg-neutral-950/80 rounded-3xl border border-white/5 shadow-2xl z-0" />
        
        {/* Folder Tab */}
        <div className="absolute -top-3.5 left-6 w-24 h-5 bg-neutral-950/80 rounded-t-lg border-t border-x border-white/5 z-0" />
        
        {/* Glimpse Photos Stack (Fanning out on hover) */}
        <div className="absolute inset-x-0 top-3 bottom-[60%] overflow-visible z-10">
          
          {/* Left photo */}
          {leftPhotoIdx < photos.length && (
            <motion.div 
              variants={leftPhotoVariants}
              initial="initial"
              className="absolute left-[12%] top-2 w-[38%] aspect-[4/3] rounded-lg border border-white/10 shadow-2xl overflow-hidden origin-bottom transition-all duration-300 pointer-events-none"
            >
              <img src={photos[leftPhotoIdx].src} alt="" className="w-full h-full object-cover" />
            </motion.div>
          )}

          {/* Right photo */}
          {rightPhotoIdx < photos.length && (
            <motion.div 
              variants={rightPhotoVariants}
              initial="initial"
              className="absolute right-[12%] top-2 w-[38%] aspect-[4/3] rounded-lg border border-white/10 shadow-2xl overflow-hidden origin-bottom transition-all duration-300 pointer-events-none"
            >
              <img src={photos[rightPhotoIdx].src} alt="" className="w-full h-full object-cover" />
            </motion.div>
          )}

          {/* Center photo */}
          {centerPhotoIdx < photos.length && (
            <motion.div 
              variants={centerPhotoVariants}
              initial="initial"
              className="absolute left-[32%] top-0 w-[36%] aspect-[3/4] rounded-lg border border-white/15 shadow-2xl overflow-hidden origin-bottom transition-all duration-300 pointer-events-none"
            >
              <img src={photos[centerPhotoIdx].src} alt="" className="w-full h-full object-cover" />
            </motion.div>
          )}

        </div>

        {/* Folder Front Cover */}
        <div className="absolute bottom-0 inset-x-0 h-[60%] bg-gradient-to-br from-card/90 via-card/95 to-neutral-900/95 backdrop-blur-xl rounded-b-3xl rounded-t-lg border-t border-white/10 border-x border-b shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.5)] z-30 transition-all duration-500 group-hover:border-t-primary/30 flex flex-col justify-between p-5">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 font-bold shrink-0 group-hover:scale-105 transition-transform">
              {index + 1}
            </div>
            <div>
              <h4 className="font-bold text-white text-base group-hover:text-amber-400 transition-colors leading-tight mb-1 animate-pulse-once">
                {item.title}
              </h4>
              <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider text-accent leading-none">
                {item.desc}
              </p>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-xs text-muted-foreground mt-2 border-t border-white/5 pt-2">
            <span className="font-semibold text-primary/80 group-hover:text-primary transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Interactive Gallery
            </span>
            <span className="text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
              {photos.length} Photos
            </span>
          </div>
        </div>
      </motion.div>

      {/* Lightbox / Gallery Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-6">
          {/* Close button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Main Photo Display Area */}
          <div className="relative max-w-4xl w-full h-[60vh] flex items-center justify-center mb-6">
            {/* Left navigation arrow */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIdx((prev) => (prev - 1 + photos.length) % photos.length);
              }}
              className="absolute left-0 md:-left-16 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer z-10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <img 
              src={photos[activePhotoIdx].src} 
              alt={photos[activePhotoIdx].caption} 
              className="max-w-full max-h-full object-contain rounded-2xl border border-white/10 shadow-2xl"
            />

            {/* Right navigation arrow */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIdx((prev) => (prev + 1) % photos.length);
              }}
              className="absolute right-0 md:-right-16 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer z-10"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption & Status */}
          <div className="text-center mb-8 max-w-2xl px-4">
            <h4 className="text-white text-lg font-medium leading-snug">{photos[activePhotoIdx].caption}</h4>
            <p className="text-sm text-muted-foreground mt-1.5">Photo {activePhotoIdx + 1} of {photos.length}</p>
          </div>

          {/* Thumbnails row */}
          <div className="flex gap-3 overflow-x-auto max-w-full pb-2 px-4 justify-start sm:justify-center">
            {photos.map((photo, pIdx) => (
              <button
                key={pIdx}
                onClick={() => setActivePhotoIdx(pIdx)}
                className={`w-16 h-12 sm:w-20 sm:h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                  activePhotoIdx === pIdx ? "border-primary scale-105 shadow-lg shadow-primary/20" : "border-white/10 hover:border-white/30"
                }`}
              >
                <img src={photo.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

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
            {milestones.map((item, i) => {
              if (i === 0) {
                return (
                  <InteractiveFolderCard 
                    key={i} 
                    item={item} 
                    index={i} 
                    photos={innovatorsPhotos}
                    centerPhotoIdx={0}
                    leftPhotoIdx={1}
                    rightPhotoIdx={2}
                  />
                );
              }
              if (i === 1) {
                return (
                  <InteractiveFolderCard 
                    key={i} 
                    item={item} 
                    index={i} 
                    photos={expoPhotos}
                    centerPhotoIdx={0}
                    leftPhotoIdx={1}
                    rightPhotoIdx={2}
                  />
                );
              }
              if (i === 2) {
                return (
                  <InteractiveFolderCard 
                    key={i} 
                    item={item} 
                    index={i} 
                    photos={scienseaPhotos}
                    centerPhotoIdx={0}
                    leftPhotoIdx={1}
                    rightPhotoIdx={2}
                  />
                );
              }
              if (i === 3) {
                return (
                  <InteractiveFolderCard 
                    key={i} 
                    item={item} 
                    index={i} 
                    photos={studentPhotos}
                    centerPhotoIdx={0}
                    leftPhotoIdx={1}
                    rightPhotoIdx={2}
                  />
                );
              }
              if (i === 4) {
                return (
                  <InteractiveFolderCard 
                    key={i} 
                    item={item} 
                    index={i} 
                    photos={footballPhotos}
                    centerPhotoIdx={0}
                    leftPhotoIdx={1}
                    rightPhotoIdx={2}
                  />
                );
              }
              return (
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
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
