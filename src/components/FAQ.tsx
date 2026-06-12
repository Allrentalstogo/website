"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-[0.9] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.faq.title.toUpperCase()}
          </h2>
        </motion.div>

        <div className="space-y-1">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className={`rounded-2xl transition-all duration-300 ${
                  isOpen ? "bg-[#C8D8FF]" : "bg-transparent"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center gap-6 sm:gap-10 px-6 py-5 text-left"
                >
                  {/* Number */}
                  <span
                    className={`text-4xl sm:text-5xl lg:text-6xl flex-shrink-0 w-16 sm:w-20 ${
                      isOpen ? "text-foreground" : "text-[#a8d4ff]"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className={`flex-1 text-lg sm:text-xl lg:text-2xl font-bold ${isOpen ? "text-foreground" : "text-foreground"}`}
                  >
                    {item.question}
                  </span>

                  {/* Toggle icon */}
                  <span className="flex-shrink-0 text-2xl text-foreground">
                    {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                  </span>
                </button>

                {/* Answer - always below */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 ml-[76px] sm:ml-[96px] lg:ml-[112px] mr-12">
                        <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-2xl">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
