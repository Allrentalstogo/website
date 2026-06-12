"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Banknote, Wallet, MapPin, ArrowUpRight } from "lucide-react";
import { pick } from "@/lib/i18n";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const { locale } = useLanguage();

  const stats = locale === "es"
    ? [
        { number: 500, suffix: "+", label: "eventos realizados", desc: "en el área de Houston" },
        { number: 50, suffix: "+", label: "servicios disponibles", desc: "todo en un solo lugar" },
        { number: 20, suffix: "+", label: "años de experiencia", desc: "haciendo fiestas inolvidables" },
        { number: 100, suffix: "%", label: "satisfacción", desc: "clientes que nos recomiendan" },
      ]
    : [
        { number: 500, suffix: "+", label: "events completed", desc: "in the Houston area" },
        { number: 50, suffix: "+", label: "services available", desc: "all in one place" },
        { number: 20, suffix: "+", label: "years of experience", desc: "making unforgettable parties" },
        { number: 100, suffix: "%", label: "satisfaction", desc: "clients who recommend us" },
      ];

  const headlineEs = "Nacimos con una idea simple: que no tengas que llamar a 10 proveedores diferentes para armar tu evento. Somos el lugar donde encuentras desde el Robot LED hasta los chambelanes, todo bajo un mismo techo en Houston.";
  const headlineEn = "We were born with a simple idea: so you don't have to call 10 different vendors to put together your event. We're the place where you find everything from LED Robots to chambelanes, all under one roof in Houston.";

  const words = (locale === "es" ? headlineEs : headlineEn).split(" ");

  // Words to highlight in pink
  const pinkWordsEs = ["simple:", "10", "proveedores", "diferentes", "mismo", "techo"];
  const pinkWordsEn = ["simple", "idea:", "10", "different", "vendors", "one", "roof"];
  const pinkWords = locale === "es" ? pinkWordsEs : pinkWordsEn;

  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Full-width separator */}
      <div className="w-full h-[620px] overflow-hidden mb-20">
        <img src="/img/separador.jpg" alt="All Rentals To Go" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Top - about statement with word-by-word reveal */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-foreground mb-4"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
          >
            {pick(locale, { es: "SOBRE NOSOTROS", en: "ABOUT US", zh: "关于我们", hi: "हमारे बारे में" })}
          </motion.p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.04, duration: 0.6, ease: "easeOut" }}
                className={`inline-block mr-[0.3em] ${pinkWords.includes(word.replace(/[.,]/, "")) ? "text-[#ffb6d9]" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Description + Stats side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left - paragraph */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base text-foreground leading-relaxed"
            >
              {locale === "es"
                ? <>Nuestros clientes ya reservan fechas para 2028 y 2029. Quinceañeras, bodas, corporativos, cumpleaños: si hay fiesta, ahí estamos. <strong>Tú solo dinos la fecha y el sueño, nosotros nos encargamos de todo.</strong></>
                : <>Our clients are already booking dates for 2028 and 2029. Quinceañeras, weddings, corporate, birthdays: if there&apos;s a party, we&apos;re there. <strong>Just tell us the date and the dream, we take care of everything.</strong></>}
            </motion.p>
          </div>

          {/* Right - stats with counter animation */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              >
                <p className="text-6xl sm:text-7xl lg:text-8xl leading-none mb-2">
                  <span className={i % 2 === 0 ? "text-[#a8d4ff]" : "text-[#ffb6d9]"} style={{ fontFamily: "var(--font-display)" }}>
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                  </span>
                </p>
                <p className="text-sm font-bold text-foreground">{stat.label}</p>
                <p className="text-sm text-foreground">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Paquetes card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 lg:p-16 rounded-[2rem] bg-[#C8D8FF]"
        >
          <p
            className="text-lg sm:text-xl text-foreground mb-4"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
          >
            {pick(locale, { es: "MÉTODOS DE PAGO", en: "PAYMENT METHODS", zh: "付款方式", hi: "भुगतान के तरीके" })}
          </p>
          <h3
            className="text-4xl sm:text-5xl lg:text-7xl text-foreground leading-[0.9] mb-6"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            {pick(locale, { es: "PAGA A TU MANERA", en: "PAY YOUR WAY", zh: "随心付款", hi: "अपने तरीके से भुगतान करें" })}
          </h3>
          <p className="text-base sm:text-lg text-foreground max-w-2xl leading-relaxed mb-10">
            {locale === "es"
              ? "No manejamos paquetes fijos: cada evento es único. Cuéntanos tu presupuesto y lo que imaginas, y combinamos los servicios ideales para ti. Aceptamos tarjetas, transferencias, Zelle y efectivo."
              : "We don't do fixed packages: every event is unique. Tell us your budget and what you picture, and we'll combine the ideal services for you. We accept cards, transfers, Zelle and cash."}
          </p>

          {/* Payment methods */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4">
            <div className="flex flex-col items-center justify-center gap-4 p-6 h-40 rounded-2xl bg-white">
              <div className="flex items-center gap-2">
                <img src="/img/visa-logo.svg" alt="Visa" className="h-6 w-auto" />
                <img src="/img/Mastercard-logo.svg" alt="Mastercard" className="h-8 w-auto" />
              </div>
              <span className="text-base font-bold text-foreground">
                {pick(locale, { es: "Tarjetas", en: "Cards", zh: "银行卡", hi: "कार्ड" })}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-6 h-40 rounded-2xl bg-white">
              <Banknote className="w-9 h-9 text-foreground" />
              <span className="text-base font-bold text-foreground">
                {pick(locale, { es: "Transferencias", en: "Transfers", zh: "转账", hi: "ट्रांसफर" })}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-6 h-40 rounded-2xl bg-white">
              <img src="/img/Zelle-logo.svg" alt="Zelle" className="h-9 w-auto" />
              <span className="text-base font-bold text-foreground">
                Zelle
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-6 h-40 rounded-2xl bg-white">
              <Wallet className="w-9 h-9 text-foreground" />
              <span className="text-base font-bold text-foreground">
                {pick(locale, { es: "Efectivo", en: "Cash", zh: "现金", hi: "नकद" })}
              </span>
            </div>
          </div>
          <p className="text-xs text-foreground">
            *{pick(locale, { es: "No aceptamos cheques", en: "We do not accept checks", zh: "我们不接受支票", hi: "हम चेक स्वीकार नहीं करते" })}
          </p>

          {/* Separator */}
          <div className="border-t border-foreground/15 my-10" />

          {/* Location */}
          <p
            className="text-lg sm:text-xl text-foreground mb-4"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
          >
            {pick(locale, { es: "NUESTRA UBICACIÓN", en: "OUR LOCATION", zh: "我们的位置", hi: "हमारा स्थान" })}
          </p>
          <h3
            className="text-4xl sm:text-5xl lg:text-7xl text-foreground leading-[0.9] mb-6"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            {pick(locale, { es: "VISÍTANOS EN HOUSTON", en: "VISIT US IN HOUSTON", zh: "欢迎莅临休斯顿", hi: "ह्यूस्टन में हमसे मिलें" })}
          </h3>
          <div className="group rounded-2xl overflow-hidden bg-white flex flex-col">
            <div className="min-h-[300px] sm:min-h-[380px]">
              <iframe
                title="All Rentals To Go location"
                src="https://www.google.com/maps?q=5060%20FM%201960%20W%20Ste%20112%2C%20Houston%2C%20TX%2077069&output=embed"
                className="w-full h-full min-h-[300px] sm:min-h-[380px] border-0 grayscale-[0.9] contrast-[1.05] transition-[filter] duration-700 group-hover:grayscale-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base font-bold text-foreground leading-snug">
                  5060 FM 1960 W Ste 112, Houston, TX 77069
                </span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=5060%20FM%201960%20W%20Ste%20112%2C%20Houston%2C%20TX%2077069"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-reveal flex-shrink-0 self-start px-5 py-2.5 bg-[#a8d4ff] text-foreground"
              >
                <span className="btn-bg bg-[#FAFE2A]" />
                <span className="btn-text !text-foreground">
                  <span className="inline-flex items-center gap-2 whitespace-nowrap">
                    {pick(locale, { es: "VER EN MAPS", en: "VIEW ON MAPS", zh: "在地图查看", hi: "मैप्स में देखें" })}
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
