"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import { pick } from "@/lib/i18n";

export default function AnnouncementBar() {
  const { locale } = useLanguage();

  const year = new Date().getFullYear() + 3;

  const text = pick(locale, {
    es: `AGENDA ABIERTA HASTA ${year}`,
    en: `BOOKING OPEN THROUGH ${year}`,
    zh: `预订已开放至 ${year} 年`,
    hi: `${year} तक बुकिंग खुली है`,
  });

  const cta = pick(locale, { es: "RESERVAR AHORA", en: "BOOK NOW", zh: "立即预订", hi: "अभी बुक करें" });

  return (
    <div className="relative z-50 bg-[#FAFE2A]">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-6 py-2.5">
        <span
          className="text-xl sm:text-2xl text-foreground tracking-wide"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {text}
        </span>
        <a
          href="#contacto"
          className="group relative px-5 py-1.5 bg-white text-foreground rounded-full overflow-hidden hover:scale-105 transition-all duration-200"
        >
          <span
            className="relative z-10 text-sm -skew-x-6 inline-flex items-center gap-1.5"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
          >
            {cta}
            <ArrowRight className="w-4 h-4" />
          </span>
          <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
          <span
            className="absolute inset-0 flex items-center justify-center text-sm -skew-x-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 gap-1.5"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
          >
            {cta}
            <ArrowRight className="w-4 h-4" />
          </span>
        </a>
      </div>
    </div>
  );
}
