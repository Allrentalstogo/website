"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, getTranslations } from "@/lib/i18n";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ReturnType<typeof getTranslations>;
  showLanguageModal: boolean;
  setShowLanguageModal: (show: boolean) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectBrowserLanguage(): Locale {
  if (typeof navigator === "undefined") return "es";
  const lang = (navigator.language || "").toLowerCase();
  if (lang.startsWith("es")) return "es";
  if (lang.startsWith("zh")) return "zh";
  if (lang.startsWith("hi")) return "hi";
  return "en";
}

const VALID_LOCALES: Locale[] = ["es", "en", "zh", "hi"];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && VALID_LOCALES.includes(saved)) {
      setLocaleState(saved);
    } else {
      // Detect browser language and show modal to confirm
      const detected = detectBrowserLanguage();
      setLocaleState(detected);
      setShowLanguageModal(true);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = getTranslations(locale);

  if (!mounted) {
    // SSR / hydration: render with default locale, no modal
    return (
      <LanguageContext.Provider
        value={{ locale: "es", setLocale, t: getTranslations("es"), showLanguageModal: false, setShowLanguageModal }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, showLanguageModal, setShowLanguageModal }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
