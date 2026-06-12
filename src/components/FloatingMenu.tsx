"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import ServicesExplorer from "@/components/ServicesExplorer";
import { pick } from "@/lib/i18n";

export default function FloatingMenu() {
  const { locale } = useLanguage();
  const [showBar, setShowBar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBar(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky mini navbar - floating pill */}
      <AnimatePresence>
        {showBar && !menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-[60]"
          >
            <div className="flex items-center gap-8 px-6 py-3 bg-foreground rounded-full shadow-2xl shadow-foreground/20">
              <a
                href="#inicio"
                className="text-2xl sm:text-3xl text-white -skew-x-6 inline-block"
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.03em",
                  textShadow: "-2px 0 0 rgba(255,255,255,0.3), -4px 0 0 rgba(255,255,255,0.15)",
                }}
              >
                ALL RENTALS TO GO
              </a>
              <button
                onClick={() => setMenuOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 text-sm sm:text-base font-bold text-foreground bg-[#FAFE2A] rounded-full hover:scale-105 transition-all"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
              >
                <Menu className="w-4 h-4" />
                {pick(locale, { es: "VER TODOS LOS SERVICIOS", en: "VIEW ALL SERVICES", zh: "查看所有服务", hi: "सभी सेवाएं देखें" })}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full menu overlay - megamenu with category filtering */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-foreground/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full h-screen flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex-shrink-0 bg-white flex items-center justify-between px-6 sm:px-10 py-5 border-b border-foreground/5">
                <h3
                  className="text-2xl sm:text-3xl"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                >
                  {pick(locale, { es: "TODOS NUESTROS SERVICIOS", en: "ALL OUR SERVICES", zh: "我们的全部服务", hi: "हमारी सभी सेवाएं" })}
                </h3>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category filter + service lists - scrollable area */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8">
                <ServicesExplorer />
              </div>

              {/* CTA */}
              <div className="flex-shrink-0 bg-white border-t border-foreground/5 px-6 sm:px-10 py-5 text-center">
                <a
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  className="btn-reveal inline-flex px-8 py-3.5 bg-foreground text-white"
                >
                  <span className="btn-bg bg-[#FAFE2A]" />
                  <span className="btn-text text-white">
                    {pick(locale, { es: "COTIZAR AHORA", en: "GET A QUOTE", zh: "立即报价", hi: "कोटेशन लें" })}
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
