"use client";

import { useLanguage } from "@/context/LanguageContext";
import { HiPhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/1346XXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.cta.whatsapp}
        className="w-13 h-13 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-all duration-200"
      >
        <FaWhatsapp className="w-6 h-6 text-white" />
      </a>

      {/* Phone */}
      <a
        href="tel:+1346XXXXXXX"
        aria-label={t.cta.call}
        className="w-13 h-13 rounded-full bg-foreground flex items-center justify-center shadow-lg shadow-foreground/20 hover:scale-110 transition-all duration-200"
      >
        <HiPhone className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
