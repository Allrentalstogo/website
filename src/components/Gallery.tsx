"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { pick } from "@/lib/i18n";

const images = [
  { src: "/img/new/ROBOT & BIG HEAD XV.webp", alt: "Robot & Big Head XV" },
  { src: "/img/new/chente1.webp", alt: "Show en vivo" },
  { src: "/img/new/QUINCEAÑERA.webp", alt: "Quinceañera" },
  { src: "/img/new/DANCE FLOOR.webp", alt: "Dance Floor LED" },
  { src: "/img/new/ROBOT QUINCEAÑERA.webp", alt: "Robot Quinceañera" },
  { src: "/img/new/ZANQUERO.webp", alt: "Zanquero" },
  { src: "/img/new/chente2.webp", alt: "Show en vivo" },
  { src: "/img/new/ROBOT.webp", alt: "Robot LED" },
  { src: "/img/new/MIRROR PHOTO BOOTH.webp", alt: "Mirror Photo Booth" },
  { src: "/img/new/HORSES.webp", alt: "Horses" },
  { src: "/img/new/DANCING HORSES.webp", alt: "Dancing Horses" },
  { src: "/img/new/PARTY BUS.webp", alt: "Party Bus" },
  { src: "/img/new/chente3.webp", alt: "Show en vivo" },
  { src: "/img/new/MIRROR BOOTH.webp", alt: "Mirror Booth" },
  { src: "/img/new/TORO MECANICO.webp", alt: "Toro Mecánico" },
  { src: "/img/new/IMG_0732.webp", alt: "Event Photo" },
];

export default function Gallery() {
  const { locale } = useLanguage();
  const [fullView, setFullView] = useState<number | null>(null);

  const openNext = () => setFullView((prev) => prev !== null ? (prev + 1) % images.length : 0);
  const openPrev = () => setFullView((prev) => prev !== null ? (prev - 1 + images.length) % images.length : 0);

  return (
    <section id="galeria" className="relative py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-foreground mb-4"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
        >
          {pick(locale, { es: "GALERÍA", en: "GALLERY", zh: "相册", hi: "गैलरी" })}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-7xl text-foreground leading-[0.9]"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
        >
          {pick(locale, { es: "MOMENTOS REALES", en: "REAL MOMENTS", zh: "真实瞬间", hi: "असली पल" })}
        </motion.h2>
      </div>

      {/* Scrollable thumbnail grid */}
      <div className="px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              onClick={() => setFullView(i)}
              className="relative aspect-[4/5] rounded-xl overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {fullView !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center"
            onClick={() => setFullView(null)}
          >
            {/* Close */}
            <button
              onClick={() => setFullView(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); openPrev(); }}
              className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={fullView}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-[85vw] h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[fullView].src}
                alt={images[fullView].alt}
                fill
                sizes="85vw"
                className="object-contain rounded-xl"
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); openNext(); }}
              className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>

            {/* Counter */}
            <span className="absolute bottom-6 text-white text-sm" style={{ fontFamily: "var(--font-display)" }}>
              {fullView + 1} / {images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
