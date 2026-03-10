import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 py-8 relative overflow-hidden bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-xl font-display font-bold tracking-tighter text-white">
          Siddhu's<span className="text-gradient"> Portfolio</span>
        </div>

        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Designed & Developed with passion. All rights reserved.
        </p>

        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all glow-hover"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>

      </div>
    </footer>
  );
}
