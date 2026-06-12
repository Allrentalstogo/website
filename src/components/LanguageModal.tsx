"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Locale, localeNames } from "@/lib/i18n";

export default function LanguageModal() {
  const { showLanguageModal, setShowLanguageModal, setLocale } = useLanguage();

  const selectLanguage = (lang: Locale) => {
    setLocale(lang);
    setShowLanguageModal(false);
  };

  return (
    <AnimatePresence>
      {showLanguageModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl p-8 sm:p-10 max-w-sm w-full shadow-2xl text-center"
          >
            <span className="text-5xl mb-4 block">🌐</span>
            <h2 className="text-2xl font-black mb-2 text-foreground">
              Choose your language
            </h2>
            <p className="text-sm text-muted mb-8">
              Elige tu idioma / 选择语言 / अपनी भाषा चुनें
            </p>

            {/* Primary languages */}
            <div className="flex flex-col gap-3">
              {(["es", "en"] as Locale[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => selectLanguage(lang)}
                  className="flex items-center justify-center gap-2 px-6 py-4 text-base font-bold border-2 border-foreground/10 rounded-2xl hover:bg-[#C8D8FF] hover:border-[#a8d4ff] hover:scale-[1.02] transition-all duration-200 text-foreground"
                >
                  <span className="text-xl">{localeNames[lang].flag}</span>
                  {localeNames[lang].label}
                </button>
              ))}
            </div>

            {/* Other languages */}
            <div className="flex items-center gap-3 my-5">
              <span className="flex-1 h-px bg-foreground/10" />
              <span className="text-xs text-muted uppercase tracking-wide">
                Otros idiomas / Other languages
              </span>
              <span className="flex-1 h-px bg-foreground/10" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {(["zh", "hi"] as Locale[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => selectLanguage(lang)}
                  className="flex items-center justify-center gap-2 px-6 py-4 text-base font-bold border-2 border-foreground/10 rounded-2xl hover:bg-[#C8D8FF] hover:border-[#a8d4ff] hover:scale-[1.02] transition-all duration-200 text-foreground"
                >
                  <span className="text-xl">{localeNames[lang].flag}</span>
                  {localeNames[lang].label}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
