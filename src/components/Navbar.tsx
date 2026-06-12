"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { pick } from "@/lib/i18n";

export default function Navbar() {
  const { locale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#servicios", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#galeria", label: t.nav.gallery },
    { href: "#testimonios", label: t.nav.testimonials },
    { href: "#faq", label: t.nav.faq },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <nav className="absolute top-12 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <span
              className="text-3xl sm:text-4xl text-white -skew-x-6 inline-block"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.03em",
                textShadow: "-2px 0 0 rgba(255,255,255,0.3), -4px 0 0 rgba(255,255,255,0.15), -6px 0 0 rgba(255,255,255,0.07)",
              }}
            >
              ALL RENTALS TO GO
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-base font-bold text-white rounded-full hover:bg-white hover:text-foreground transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#contacto"
              className="btn-reveal px-7 py-3 bg-[#FAFE2A] text-foreground"
            >
              <span className="btn-bg bg-foreground" />
              <span className="btn-text text-foreground">
                {pick(locale, { es: "RESERVAR AHORA", en: "BOOK NOW", zh: "立即预订", hi: "अभी बुक करें" })}
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-foreground backdrop-blur-xl"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-bold text-white rounded-xl hover:bg-white hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 text-sm font-bold bg-[#FAFE2A] text-foreground rounded-full mt-4"
              >
                {t.hero.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
