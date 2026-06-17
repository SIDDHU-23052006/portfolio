import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { Send, Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  const { mutate: sendMessage, isPending } = useCreateContactMessage();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    sendMessage(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <section id="contact" className="py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's build something <span className="text-gradient">extraordinary.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Whether you have a project in mind, a hackathon team to assemble, or just want to chat about tech—I'm always open to discussing new opportunities.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email", value: "bsiddharth100@gmail.com", href: "mailto:bsiddharth100@gmail.com" },
                { icon: Linkedin, title: "LinkedIn", value: "siddharth-b-7b35042a9", href: "https://www.linkedin.com/in/siddharth-b-7b35042a9/" },
                { icon: Github, title: "GitHub", value: "SIDDHU-23052006", href: "https://github.com/SIDDHU-23052006" }
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noreferrer" className="flex items-center gap-6 group hover:opacity-80 transition-opacity">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-lg font-medium text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden">
              {/* Form Glow Effect */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
              
              <h3 className="text-2xl font-display font-bold text-white mb-8 relative z-10">Send a Message</h3>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/80">Your Name</label>
                  <input
                    {...form.register("name")}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                  {form.formState.errors.name && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/80">Email Address</label>
                  <input
                    {...form.register("email")}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/80">Message</label>
                  <textarea
                    {...form.register("message")}
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? "Sending..." : "Send Message"}
                  {!isPending && <Send size={18} />}
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
