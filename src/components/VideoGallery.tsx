"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { pick } from "@/lib/i18n";

const videos = [
  "/img/new/1.MOV",
  "/img/new/2.MOV",
  "/img/new/3.MOV",
  "/img/new/4.MOV",
];

export default function VideoGallery() {
  const { locale } = useLanguage();

  return (
    <section className="relative py-16 lg:py-24 bg-foreground">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-white mb-4"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
        >
          {pick(locale, { es: "EN VIVO", en: "LIVE", zh: "现场直击", hi: "लाइव" })}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-7xl text-white leading-[0.9]"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
        >
          {pick(locale, {
            es: <>LA FIESTA EN <span className="italic -skew-x-6 inline-block">MOVIMIENTO</span></>,
            en: <>THE PARTY IN <span className="italic -skew-x-6 inline-block">MOTION</span></>,
            zh: <><span className="italic -skew-x-6 inline-block">动感</span>派对</>,
            hi: <>पार्टी <span className="italic -skew-x-6 inline-block">एक्शन</span> में</>,
          })}
        </motion.h2>
      </div>

      <div className="px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {videos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-foreground/50"
            >
              <video
                src={src}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
