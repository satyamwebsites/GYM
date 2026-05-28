import { motion } from "motion/react";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "The best gym in Austin. Period. No fluff, no distractions—just pure focus on getting stronger. The community is what keeps me coming back.",
      name: "MARCUS REED",
      since: "Member since 2021",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdTSnhs3I4yE8I4-mVhx_rSNslRmQrMlOpZ2OZd_Odw9l51E56dhUDdLkwf9o17MVXVVqzte1XUiLc04n14ZCppdPAXn8BZtBHvQmDhXj-MhDSZ0tt8jlppXvVyzcSOujJ8W8NJe4kNsPLczVlukiItUHR_IoRSIyjFW3KZZSAgOj6LorbbIYCPxH2-b4Y5RCbpRW8gDxA01IXgygJBWbEz2ZQin_cflu6fjIpIWIFncMKU3aZWUUzd04tCMjyj4Ol-FEYM-jKXOE"
    },
    {
      quote: "Coming from a commercial gym, the coaching here blew me away. I've added 45lbs to my squat in three months without getting injured.",
      name: "ELENA GARZA",
      since: "Member since 2022",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA5wxBggstz3erCvDxpqVCesQr_tuIUmqja7kxmRRFdcy0ADcQoV8q8g0-UIZjzeSoNo6n_BW27OK_WCvRCSYBt8WioeeeTCjLvs8awmpI60q0UcdOKOEtNMJEyyic6XNh3gEl9eHi11jKaElOK_3__s1E7Bh-ZLSv0N6GYI0b3WaOpVb3Kh_l_-BXnbZKuZYus0dMg4GKy5sxjFFQBPifwtulEIHBj_S7G1fGStUshrzqE5rnMlgG3D2N_qGIdo4tcIVdCKD-gBg"
    }
  ];

  return (
    <section className="py-32 bg-black overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-16 max-w-[1440px] mx-auto mb-16"
      >
        <h2 className="font-instrument italic text-5xl md:text-6xl text-white">BUILT AT FORGE</h2>
      </motion.div>

      <div className="flex gap-8 px-6 md:px-16 overflow-x-auto no-scrollbar pb-12 snap-x max-w-[1440px] mx-auto">
        {testimonials.map((test, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="min-w-[320px] md:min-w-[500px] liquid-glass xor-border p-12 rounded-[3rem] snap-start relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex gap-1 mb-8 opacity-40">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              <p className="font-barlow font-light text-xl italic mb-12 leading-relaxed text-glow text-white">"{test.quote}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden grayscale xor-border p-[1px]">
                  <img src={test.img} alt={test.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <div className="font-barlow text-sm font-semibold tracking-widest text-white">{test.name}</div>
                  <div className="font-barlow text-xs font-medium text-zinc-400 uppercase tracking-wider">{test.since}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
