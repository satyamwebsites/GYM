import { motion } from "motion/react";
import { MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#131313] w-full rounded-t-[2rem] border-t border-white/[0.12] overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhJBrMMI701LpGjOc9sJz_FTKmARpA5jh3iaW4Y-ICuJNKItqrihoGQCPDyIABtrtbTUre1nUI6-9my3wl7Tf_dfDv6cF43p33cSG7c98LQ468QbssEeOlT1rpL217yEPtjl696E2zm7Cl2unRlajJH-0INb16Lzy5xWA1szaUNb0H4TSQTeT0xdXdIfa5QBtMPyT7LW2jGGxU7nd2SMTC593wwwp2nHmMKmHUjjPd5O2C67vKuBoIFWnldNAUkzwQXiGeIfciifk" 
          alt="Gym background" 
          className="w-full h-full object-cover opacity-10 grayscale scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 px-6 md:px-16 py-24 w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h2 className="font-instrument italic text-5xl md:text-7xl leading-tight mb-12 text-glow text-white">
            READY TO<br/>GET STRONG?
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-6 group">
              <MapPin className="text-zinc-500 group-hover:text-white transition-colors mt-1" strokeWidth={1.5} />
              <div>
                <p className="font-barlow text-sm font-semibold tracking-wider text-zinc-300">8000 Anderson Square #113</p>
                <p className="font-barlow text-sm font-semibold tracking-wider text-zinc-300">Austin, TX 78757</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <Clock className="text-zinc-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
              <p className="font-barlow text-sm font-semibold tracking-wider text-zinc-300">Staffed Hours: Mon-Fri 6am-8pm, Sat 8am-2pm (24/7 for Premium)</p>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-8">
            <a href="#" className="font-barlow text-sm font-semibold tracking-widest text-zinc-400 hover:text-white transition-colors underline underline-offset-8">INSTAGRAM</a>
            <a href="#" className="font-barlow text-sm font-semibold tracking-widest text-zinc-400 hover:text-white transition-colors underline underline-offset-8">YOUTUBE</a>
            <a href="#" className="font-barlow text-sm font-semibold tracking-widest text-zinc-400 hover:text-white transition-colors underline underline-offset-8">CONTACT</a>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="space-y-4">
            <h4 className="font-barlow text-sm font-semibold text-white tracking-[0.1em] uppercase">Quick Links</h4>
            <ul className="space-y-3 font-barlow text-base text-zinc-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Results</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Location</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-barlow text-sm font-semibold text-white tracking-[0.1em] uppercase">Legal</h4>
            <ul className="space-y-3 font-barlow text-base text-zinc-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Membership Agreement</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 md:px-16 py-8 border-t border-white/[0.12] w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-barlow text-xs font-medium text-zinc-500 uppercase tracking-widest">© 2024 Forge Strength Austin. Built for the void.</p>
        <div className="flex gap-8">
          <a href="#" className="font-barlow text-xs font-medium text-zinc-500 hover:text-white transition-colors uppercase tracking-widest">PRIVACY</a>
          <a href="#" className="font-barlow text-xs font-medium text-zinc-500 hover:text-white transition-colors uppercase tracking-widest">TERMS</a>
        </div>
      </div>
    </footer>
  );
}
