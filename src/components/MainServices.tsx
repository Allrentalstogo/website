"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useQuote } from "@/context/QuoteContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Plus, X, Check } from "lucide-react";
import ServicesExplorer from "@/components/ServicesExplorer";
import { pick } from "@/lib/i18n";

const services = {
  es: [
    { label: "Robots LED", icon: "/icons/robot.png", color: "#1a1a2e", description: "Show de robots con luces LED que iluminan tu fiesta. Un espectáculo visual de alto impacto." },
    { label: "Cabezones", icon: "/icons/cabezones.png", color: "#FAFE2A", description: "Bad Bunny, Vicente Fernández, Elvis Presley, Pitbull y más. Personajes gigantes que animan cualquier evento." },
    { label: "Zanquero", icon: "/icons/zanquero.png", color: "#ffb07a", description: "Espectáculo visual de altura que impresiona desde el primer momento." },
    { label: "Coreografías", icon: "/icons/coreografias2.png", color: "#d4c6ff", description: "Bailes profesionales para quinceañeras, bodas y eventos especiales." },
    { label: "DJ", icon: "/icons/dj.png", color: "#a7f3d0", description: "Música y ambiente profesional toda la noche. Equipos de sonido de alta calidad." },
    { label: "Dance Floor LED", icon: "/icons/dancefloor.png", color: "#2d2d4e", description: "Pista de baile iluminada con efectos increíbles que transforman tu evento." },
    { label: "Red Carpet", icon: "/icons/redcarpet.png", color: "#e84040", description: "Alfombra roja para una entrada espectacular digna de celebridad." },
    { label: "Photo Booth", icon: "/icons/photo.png", color: "#1e3a5f", description: "Digital, 360 y Mirror. Recuerdos instantáneos con props divertidos para todos tus invitados." },
    { label: "Party Bus", icon: "/icons/partybus.png", color: "#c084fc", description: "Transporte con fiesta incluida. Llega a tu evento con estilo." },
    { label: "Carpas", icon: "/icons/carpa.png", color: "#4ade80", description: "Espacios cubiertos elegantes para cualquier clima y tipo de evento." },
  ],
  en: [
    { label: "LED Robots", icon: "/icons/robot.png", color: "#1a1a2e", description: "LED light robot show that illuminates your party. A high-impact visual spectacle." },
    { label: "Big Heads", icon: "/icons/cabezones.png", color: "#FAFE2A", description: "Bad Bunny, Vicente Fernández, Elvis Presley, Pitbull and more. Giant characters that liven up any event." },
    { label: "Stilt Walker", icon: "/icons/zanquero.png", color: "#ffb07a", description: "Impressive height visual spectacle from the very first moment." },
    { label: "Choreography", icon: "/icons/coreografias2.png", color: "#d4c6ff", description: "Professional dances for quinceañeras, weddings and special events." },
    { label: "DJ", icon: "/icons/dj.png", color: "#a7f3d0", description: "Professional music and atmosphere all night. High quality sound equipment." },
    { label: "LED Dance Floor", icon: "/icons/dancefloor.png", color: "#2d2d4e", description: "Illuminated dance floor with incredible effects that transform your event." },
    { label: "Red Carpet", icon: "/icons/redcarpet.png", color: "#e84040", description: "Red carpet for a spectacular celebrity-worthy entrance." },
    { label: "Photo Booth", icon: "/icons/photo.png", color: "#1e3a5f", description: "Digital, 360 and Mirror. Instant memories with fun props for all your guests." },
    { label: "Party Bus", icon: "/icons/partybus.png", color: "#c084fc", description: "Transportation with party included. Arrive at your event in style." },
    { label: "Tents", icon: "/icons/carpa.png", color: "#4ade80", description: "Elegant covered spaces for any weather and event type." },
  ],
};

export default function MainServices() {
  const { locale } = useLanguage();
  const { selectedServices, toggleService } = useQuote();
  const items = locale === "es" ? services.es : services.en;
  const [current, setCurrent] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [showSelection, setShowSelection] = useState(false);

  const next = () => setCurrent((prev) => (prev + 1) % items.length);
  const prev = () => setCurrent((prev) => (prev - 1 + items.length) % items.length);

  const getIndex = (offset: number) => (current + offset + items.length) % items.length;

  // 5 visible cards positioned in an arc
  const visibleCards = [-2, -1, 0, 1, 2];

  return (
    <section id="servicios" className="relative py-16 sm:py-24 bg-background overflow-hidden">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-10 flex items-center justify-center">
        <div className="text-center">
          <h2
            className="text-4xl sm:text-5xl lg:text-8xl text-foreground"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            {pick(locale, { es: "¡QUE COMIENCE LA FIESTA!", en: "LET THE PARTY BEGIN!", zh: "派对开始吧！", hi: "पार्टी शुरू!" })}
          </h2>
        </div>
      </div>

      {/* Carousel with arc rotation */}
      <div className="relative h-[70vh] sm:h-[78vh] flex items-center justify-center" style={{ perspective: "1200px" }}>
        {/* Prev button - left side */}
        <button
          onClick={prev}
          className="absolute left-4 sm:left-8 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAFE2A] flex items-center justify-center hover:scale-110 transition-all shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
        </button>

        {/* Next button - right side */}
        <button
          onClick={next}
          className="absolute right-4 sm:right-8 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAFE2A] flex items-center justify-center hover:scale-110 transition-all shadow-lg"
        >
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
        </button>
        {visibleCards.map((offset) => {
          const idx = getIndex(offset);
          const s = items[idx];
          const isDark = s.color === "#1a1a2e" || s.color === "#2d2d4e" || s.color === "#1e3a5f" || s.color === "#e84040";
          const isSelected = selectedServices.includes(s.label);

          // Arc positioning - cards rotate around a circle
          const angle = offset * 18; // degrees between cards
          const radius = 900; // px radius of the arc
          const x = Math.sin((angle * Math.PI) / 180) * radius;
          const z = Math.cos((angle * Math.PI) / 180) * radius - radius;
          const rotateY = -angle;
          const scale = offset === 0 ? 1 : offset === -1 || offset === 1 ? 0.9 : 0.78;

          return (
            <motion.div
              key={`card-${idx}`}
              initial={false}
              animate={{
                x,
                z,
                rotateY,
                scale,
              }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="absolute w-[65vw] sm:w-[38vw] lg:w-[28vw] h-[88%] cursor-pointer"
              style={{
                zIndex: 3 - Math.abs(offset),
                transformStyle: "preserve-3d",
              }}
              onClick={() => {
                if (offset !== 0) setCurrent(idx);
              }}
            >
              <div
                className="h-full rounded-[1.5rem] overflow-hidden flex flex-col shadow-2xl relative"
                style={{ backgroundColor: s.color }}
              >
                {/* Image */}
                <div className="flex-1 flex items-center justify-center p-6 min-h-0">
                  <img
                    src={s.icon}
                    alt={s.label}
                    className={`object-contain ${
                      idx === 1 ? "w-[130%] max-h-[95%] scale-115" :
                      [0,2,3,4,7,8].includes(idx) ? "w-[100%] max-h-[80%]" : "w-[75%] max-h-[65%]"
                    }`}
                  />
                </div>

                {/* Bottom - title + description + add button */}
                <div className="flex-shrink-0 px-6 pb-5 pt-2">
                  <div className="flex items-end justify-between gap-3 mb-2">
                    <span
                      className={`text-5xl sm:text-6xl lg:text-7xl leading-[0.85] ${isDark ? "text-white" : "text-foreground"}`}
                      style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
                    >
                      {s.label.toUpperCase()}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleService(s.label);
                      }}
                      className={`flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                        isSelected
                          ? "bg-[#FAFE2A] text-foreground"
                          : isDark ? "bg-white text-foreground" : "bg-foreground text-white"
                      }`}
                    >
                      {isSelected ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </button>
                  </div>
                  <p className={`text-sm sm:text-base leading-snug max-w-[80%] ${isDark ? "text-white" : "text-foreground"}`}>
                    {s.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Selected services - floating */}
      {selectedServices.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80]"
        >
          <div className="relative">
            <button
              onClick={() => setShowSelection(!showSelection)}
              className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-foreground shadow-2xl shadow-foreground/30 text-white hover:scale-105 transition-all"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
            >
              <span className="w-7 h-7 rounded-full bg-[#FAFE2A] text-foreground flex items-center justify-center text-sm font-bold">
                {selectedServices.length}
              </span>
              {locale === "es"
                ? `${selectedServices.length} SERVICIO${selectedServices.length > 1 ? "S" : ""} SELECCIONADO${selectedServices.length > 1 ? "S" : ""}`
                : locale === "zh"
                ? `已选 ${selectedServices.length} 项服务`
                : locale === "hi"
                ? `${selectedServices.length} सेवाएं चुनी गईं`
                : `${selectedServices.length} SERVICE${selectedServices.length > 1 ? "S" : ""} SELECTED`
              }
              <ArrowRight className={`w-4 h-4 transition-transform ${showSelection ? "rotate-90" : ""}`} />
            </button>

            {/* Expanded selection panel */}
            <AnimatePresence>
              {showSelection && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[85vw] max-w-md p-5 rounded-2xl bg-white shadow-2xl border border-foreground/5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-base text-foreground"
                      style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
                    >
                      {pick(locale, { es: "MI SELECCIÓN", en: "MY SELECTION", zh: "我的选择", hi: "मेरा चयन" })}
                    </span>
                    <button onClick={() => setShowSelection(false)} className="text-muted hover:text-foreground">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4 max-h-[30vh] overflow-y-auto">
                    {selectedServices.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-[#FAFE2A] text-foreground rounded-full"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {s.toUpperCase()}
                        <button onClick={() => toggleService(s)}>
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contacto"
                    onClick={() => setShowSelection(false)}
                    className="btn-reveal w-full flex items-center justify-center px-6 py-4 bg-foreground text-white"
                  >
                    <span className="btn-bg bg-[#FAFE2A]" />
                    <span className="btn-text text-white text-base">
                      {pick(locale, { es: "COTIZAR AHORA", en: "GET A QUOTE NOW", zh: "立即报价", hi: "अभी कोटेशन लें" })}
                    </span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}

      {/* +50 services banner */}
      <div className="px-4 sm:px-6 pt-10">
        <div
          className="flex items-center justify-between p-6 sm:p-8 rounded-2xl bg-foreground cursor-pointer hover:scale-[1.005] transition-all"
          onClick={() => setShowAll(!showAll)}
        >
          <span
            className="text-2xl sm:text-4xl lg:text-5xl text-white"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            {pick(locale, { es: "+50 SERVICIOS MÁS", en: "+50 MORE SERVICES", zh: "另有 50+ 项服务", hi: "50+ और सेवाएं" })}
          </span>
          <button
            className="flex items-center gap-2 px-5 py-2.5 text-sm sm:text-base rounded-full border border-white text-white hover:bg-white/10 transition-all"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
          >
            {showAll
              ? pick(locale, { es: "CERRAR", en: "CLOSE", zh: "收起", hi: "बंद करें" })
              : pick(locale, { es: "VER TODOS", en: "SEE ALL", zh: "查看全部", hi: "सभी देखें" })
            }
            {showAll ? <X className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* All services expanded below */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-6 pt-12 pb-8">
              <ServicesExplorer />

              <div className="mt-10 text-center">
                <a
                  href="#contacto"
                  className="btn-reveal inline-flex px-8 py-3.5 bg-foreground text-white"
                >
                  <span className="btn-bg bg-[#FAFE2A]" />
                  <span className="btn-text text-white">
                    {pick(locale, { es: "COTIZAR AHORA", en: "GET A QUOTE", zh: "立即报价", hi: "कोटेशन लें" })}
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
