import { motion } from "motion/react";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-[100] backdrop-blur-md bg-white/[0.04] border-b border-white/[0.12]">
      <nav className="flex justify-between items-center px-6 md:px-16 py-6 w-full max-w-[1440px] mx-auto">
        <div className="flex items-center gap-12">
          <a href="#" className="font-instrument italic text-4xl tracking-tighter text-white text-glow">
            FORGE
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="font-barlow text-sm font-semibold tracking-[0.1em] text-white border-b-2 border-white pb-1 uppercase">Home</a>
            <a href="#" className="font-barlow text-sm font-semibold tracking-[0.1em] text-zinc-400 hover:text-white transition-colors uppercase">Training</a>
            <a href="#" className="font-barlow text-sm font-semibold tracking-[0.1em] text-zinc-400 hover:text-white transition-colors uppercase">Results</a>
            <a href="#" className="font-barlow text-sm font-semibold tracking-[0.1em] text-zinc-400 hover:text-white transition-colors uppercase">Location</a>
          </div>
        </div>
        <button className="bg-white text-black font-barlow text-sm font-semibold tracking-[0.1em] uppercase px-8 py-3 rounded-full hover:scale-105 active:scale-95 transition-all duration-200">
          Start Training
        </button>
      </nav>
    </header>
  );
}
