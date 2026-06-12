"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useQuote } from "@/context/QuoteContext";
import { motion, AnimatePresence } from "framer-motion";
import { Check, LayoutGrid, RotateCcw, Sparkles, Users, Armchair, UtensilsCrossed, Flower2, Video, Music, ClipboardList, Truck, Volume2 } from "lucide-react";
import { serviceCategories, svcName } from "@/lib/services";
import { pick } from "@/lib/i18n";

export const catIcons: Record<string, React.ReactNode> = {
  entretenimiento: <Sparkles className="w-full h-full" />,
  coreografias: <Users className="w-full h-full" />,
  mobiliario: <Armchair className="w-full h-full" />,
  catering: <UtensilsCrossed className="w-full h-full" />,
  decoracion: <Flower2 className="w-full h-full" />,
  "foto-video": <Video className="w-full h-full" />,
  musica: <Music className="w-full h-full" />,
  coordinacion: <ClipboardList className="w-full h-full" />,
  transporte: <Truck className="w-full h-full" />,
  audio: <Volume2 className="w-full h-full" />,
};

export default function ServicesExplorer() {
  const { locale } = useLanguage();
  const { selectedServices, toggleService } = useQuote();
  // empty array = show all
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const showingAll = activeFilters.length === 0;

  const toggleFilter = (id: string) => {
    setActiveFilters((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const visibleCategories = showingAll
    ? serviceCategories
    : serviceCategories.filter((c) => activeFilters.includes(c.id));

  // Compact list layout when showing all (5 cols) or when 3+ categories are selected.
  // Big-card layout with descriptions only for a focused 1-2 category selection.
  const useCompact = showingAll || activeFilters.length > 2;

  // Column count for compact view scales with selection, capped at 5.
  const compactColsClass = showingAll
    ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
    : {
        3: "grid-cols-2 sm:grid-cols-3",
        4: "grid-cols-2 sm:grid-cols-4",
      }[activeFilters.length] || "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5";

  return (
    <div>
      {/* Filter header */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-sm sm:text-base text-muted"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.04em" }}
        >
          {pick(locale, { es: "FILTRAR POR CATEGORÍA", en: "FILTER BY CATEGORY", zh: "按类别筛选", hi: "श्रेणी से छाँटें" })}
        </span>
        <AnimatePresence>
          {!showingAll && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFilters([])}
              className="flex items-center gap-1.5 text-sm text-foreground hover:text-[#ff69b4] transition-colors"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {pick(locale, { es: "REINICIAR", en: "RESET", zh: "重置", hi: "रीसेट" })}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Category filter chips - balanced grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 mb-10">
        {/* View all */}
        <button
          onClick={() => setActiveFilters([])}
          className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all ${
            showingAll
              ? "bg-[#FAFE2A] text-foreground"
              : "bg-[#a8d4ff] text-foreground hover:brightness-105"
          }`}
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
        >
          <span className="w-9 h-9 rounded-lg bg-foreground flex items-center justify-center text-white p-2 flex-shrink-0">
            <LayoutGrid className="w-full h-full" />
          </span>
          <span className="text-sm sm:text-base">{pick(locale, { es: "TODOS", en: "ALL", zh: "全部", hi: "सभी" })}</span>
        </button>

        {serviceCategories.map((cat) => {
          const active = activeFilters.includes(cat.id);
          return (
            <button
              key={cat.id}
              onClick={() => toggleFilter(cat.id)}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all text-left ${
                active
                  ? "bg-[#FAFE2A] text-foreground"
                  : "bg-[#a8d4ff] text-foreground hover:brightness-105"
              }`}
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
            >
              <span className={`w-9 h-9 rounded-lg flex items-center justify-center p-2 flex-shrink-0 transition-colors ${active ? "bg-foreground text-[#FAFE2A]" : "bg-foreground text-white"}`}>
                {catIcons[cat.id] || <Sparkles className="w-full h-full" />}
              </span>
              <span className="text-sm sm:text-base leading-tight">{cat.name[locale].toUpperCase()}</span>
            </button>
          );
        })}
      </div>

      {/* Service lists */}
      {useCompact ? (
        /* Compact multi-column view */
        <div className={`grid gap-x-6 gap-y-8 ${compactColsClass}`}>
          {visibleCategories.map((cat) => (
            <div key={cat.id}>
              <h4
                className="text-base text-foreground mb-2.5 pb-2 border-b border-foreground/10 flex items-center gap-2"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
              >
                <span className="w-7 h-7 rounded-md bg-[#a8d4ff] flex items-center justify-center text-foreground p-1.5 flex-shrink-0">
                  {catIcons[cat.id] || <Sparkles className="w-full h-full" />}
                </span>
                {cat.name[locale].toUpperCase()}
              </h4>
              <ul className="space-y-0.5">
                {cat.items.map((item, i) => {
                  const label = svcName(item, locale);
                  const isSelected = selectedServices.includes(label);
                  return (
                    <li key={i}>
                      <button
                        onClick={() => toggleService(label)}
                        className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left transition-all cursor-pointer ${
                          isSelected ? "bg-[#FAFE2A]" : "hover:bg-foreground/5"
                        }`}
                      >
                        <span className={`w-3.5 h-3.5 rounded flex items-center justify-center flex-shrink-0 border transition-all ${
                          isSelected ? "bg-foreground border-foreground" : "border-foreground/25"
                        }`}>
                          {isSelected && <Check className="w-2 h-2 text-white" />}
                        </span>
                        <span className="text-[0.9375rem] text-foreground">{label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        /* Expanded view - bigger items with descriptions */
        <motion.div layout className="space-y-10">
          <AnimatePresence mode="popLayout">
            {visibleCategories.map((cat) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <h4
                  className="text-2xl sm:text-3xl text-foreground mb-4 flex items-center gap-3"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
                >
                  <span className="w-10 h-10 rounded-lg bg-[#a8d4ff] flex items-center justify-center text-foreground p-2.5 flex-shrink-0">
                    {catIcons[cat.id] || <Sparkles className="w-full h-full" />}
                  </span>
                  {cat.name[locale].toUpperCase()}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cat.items.map((item, i) => {
                    const label = svcName(item, locale);
                    const desc = locale === "es" ? item.descEs : item.descEn;
                    const isSelected = selectedServices.includes(label);
                    return (
                      <button
                        key={i}
                        onClick={() => toggleService(label)}
                        className={`flex items-start gap-3 p-4 rounded-xl text-left transition-all cursor-pointer border ${
                          isSelected ? "bg-[#FAFE2A] border-foreground" : "bg-white border-foreground/10 hover:border-foreground/30"
                        }`}
                      >
                        <span className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border transition-all ${
                          isSelected ? "bg-foreground border-foreground" : "border-foreground/25"
                        }`}>
                          {isSelected && <Check className="w-3 h-3 text-white" />}
                        </span>
                        <span>
                          <span className="block text-lg text-foreground leading-tight" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.01em" }}>
                            {label}
                          </span>
                          <span className="block text-sm text-muted leading-snug mt-0.5">{desc}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
