import { motion } from "motion/react";

export function Hero() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_90%),linear-gradient(to_bottom,transparent_0%,#000_100%)] z-10 pointer-events-none" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-40 transition-opacity duration-[2s]"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4" type="video/mp4" />
        </video>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 px-6 text-center max-w-5xl"
      >
        <span className="font-barlow text-sm font-semibold tracking-[0.3em] text-zinc-400 mb-6 block uppercase">
          Austin's Premier Strength Community
        </span>
        <h1 className="font-instrument italic text-6xl md:text-8xl lg:text-[100px] leading-[0.9] mb-8 text-glow text-white">
          FORGE YOUR<br/><span className="opacity-50">STRENGTH.</span>
        </h1>
        <p className="font-barlow text-xl font-light text-zinc-300 max-w-xl mx-auto mb-12">
          Located in North Central Austin. We build capable humans through systematic programming and elite-grade competition equipment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="liquid-glass xor-border rounded-full px-10 py-5 font-barlow text-sm font-semibold tracking-widest text-white hover:bg-white/10 transition-all uppercase">
            VIEW SCHEDULE
          </button>
          <button className="bg-white text-black rounded-full px-10 py-5 font-barlow text-sm font-semibold tracking-widest hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all uppercase">
            BOOK FREE INTRO
          </button>
        </div>
      </motion.div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-10">
        <span className="font-barlow text-xs font-medium tracking-widest uppercase">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </main>
  );
}
