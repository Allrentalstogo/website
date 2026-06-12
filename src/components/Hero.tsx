"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Confetti from "@/components/Confetti";
import HeroGeometric from "@/components/ui/hero-geometric";
import { pick } from "@/lib/i18n";

const DiscoBall = dynamic(() => import("@/components/DiscoBall"), {
  ssr: false,
});

export default function Hero() {
  const { locale } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col overflow-visible"
      style={{
        background: "linear-gradient(180deg, #1a6b9c 0%, #3a8eb4 30%, #6ab0d4 60%, #b0d8ed 85%, #f5f0ff 100%)",
      }}
    >
      {/* Geometric texture overlay */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay" style={{ minHeight: "100%", transform: "scaleX(-1)" }}>
        <HeroGeometric
          color1="#2a6e94"
          color2="#d4eaf5"
          speed={2}
          className="!min-h-full"
        />
      </div>

      {/* Giant Typography - in front of the sphere */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-24 sm:pt-32 overflow-hidden pointer-events-none z-[6]">
        <h1
          className="text-[13vw] sm:text-[11vw] md:text-[10vw] leading-[0.85] tracking-tight text-center whitespace-nowrap select-none"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-white">THE PARTY </span>
          <span className="text-[#FAFE2A] inline-block -skew-x-6">SUPERMARKET</span>
        </h1>
        <div className="w-full max-w-7xl mx-auto px-8 flex justify-between mt-1">
          <p
            className="text-2xl sm:text-4xl text-white"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            {pick(locale, { es: "TODO PARA TU EVENTO EN UN SOLO LUGAR", en: "EVERYTHING FOR YOUR EVENT IN ONE PLACE", zh: "您活动所需的一切，尽在一处", hi: "आपके इवेंट की हर चीज़ एक ही जगह" })}
          </p>
          <p
            className="text-3xl sm:text-5xl text-white"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            HOUSTON, TX
          </p>
        </div>
      </div>

      {/* 3D Model - hanging from top, behind text */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 z-[5] w-[85vw] h-[90vh] sm:w-[70vw] sm:h-[92vh] lg:w-[55vw] lg:h-[95vh]">
        <DiscoBall />
      </div>

      {/* Confetti */}
      <Confetti />

      {/* CTAs only */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-24 pt-[70vh] sm:pt-[75vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center"
          >
            <a
              href="#servicios"
              className="btn-reveal px-12 py-6 bg-white text-foreground"
            >
              <span className="btn-bg bg-[#FAFE2A]" />
              <span className="btn-text flex items-center gap-2 text-xl !text-foreground">
                🎉 {pick(locale, { es: "EXPLORA NUESTROS SERVICIOS", en: "EXPLORE OUR SERVICES", zh: "探索我们的服务", hi: "हमारी सेवाएं देखें" })}
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Cloud/wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 100V30C200 70 400 90 720 90C1040 90 1240 70 1440 30V100H0Z"
            fill="#f5f0ff"
          />
        </svg>
      </div>
    </section>
  );
}
