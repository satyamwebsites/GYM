import { motion } from "motion/react";
import { Compass, Dumbbell, RotateCw } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Compass className="w-10 h-10 mb-8 opacity-40" strokeWidth={1} />,
      title: "Elite Coaching",
      description: "Technical excellence derived from biomechanical rigor. We train beginners with the same precision as competitive athletes.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZKr1ZDMLxpAjmkvMGGH_BSJEykH-LR73eYYivNC1zd_n820n705ebqNvHcLsz3KS_gZYo0uNEr55LMD4nvSyoOUQlAcTypiDYZUHdVnKEoeQPNjigfmf6oXLJIj1YUqzfcRtgtdKbfwUEHw_TAQsJsobG0POgsN3ucumefC2NVql1pQD_Vay6kFAiVZBWkk8Po97COn-ibuXd-oLz6thUx5prZb0XPfpEFx3HPiCyI33qBNgENCldqSRkZhgu7tveJHsrTZ-khUM"
    },
    {
      icon: <Dumbbell className="w-10 h-10 mb-8 opacity-40" strokeWidth={1} />,
      title: "Pro Equipment",
      description: "Featuring Rogue, Eleiko, and Kabuki Strength. Professional-grade tools for those serious about their progress.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIbQbKwSyy9XFgNHBjcvGZjumvEt0w4OUpOmbWBdcDDbdnqhtHyCo-rL88-pv_8ecqU1reI0qO3Nql-58AEimyV46lxNUs0gl7nAIdway2xkHTPU4LwqgAXsXzph1W_x0MKCB_xbtn-czFWHiWvQsM3Cu3PsEAS_S8yl9A0NTPqru7MRGJ7wr8piXGlJS2EFiabBXY4xUuiHipmjHyLgYjjrzGWpogbHsM9oSQ2EncUc4FdVigRluw-bwq6L2dBUGXHQVFBuRmiJw"
    },
    {
      icon: <RotateCw className="w-10 h-10 mb-8 opacity-40" strokeWidth={1} />,
      title: "24/7 Autonomy",
      description: "Engage with high-level equipment on your own terms. Full access for premium tiers in a safe, professional environment.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUEmbuXRjC4wcx6yVlyLDJoa-BFgt_PM491uEhaEO_jWeWdEvAcmAes-Cfs95vWUP4g-p1ig4rKoO7_IvnhMjoPoaq2h8JAC9S_wYZmIO7sqwPyo4GiY2ORecGVY_8f6cRxOFuC-qWcpYz3ZD9W2jWt-DwubvAXrPVNP8tRr5haSa6pcufllo_qQJ8VVHelsEW6rd5haZylxjM74ZVnDfWulXkTxFFRSONIfwAwbX9n82w50sXtclraSqtIb9Q0D1iYgr1qYdRPNY"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-16 bg-black">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="font-instrument italic text-5xl md:text-6xl mb-4 text-white">THE FORGE EDGE</h2>
          <p className="font-barlow text-sm font-semibold text-zinc-400 tracking-widest uppercase">Elite Equipment. World-Class Coaching. Zero Gatekeeping.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative overflow-hidden liquid-glass xor-border p-10 rounded-[3rem]"
            >
              <img 
                src={feature.img} 
                alt={feature.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" 
              />
              <div className="relative z-10 text-white">
                {feature.icon}
                <h3 className="font-instrument italic text-3xl mb-4">{feature.title}</h3>
                <p className="font-barlow text-base text-zinc-300 leading-relaxed font-light">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
