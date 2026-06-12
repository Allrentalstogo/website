"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Plus, Gift, ArrowRight } from "lucide-react";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { pick } from "@/lib/i18n";

export default function Promotions() {
  const { locale } = useLanguage();

  const paidServices = [
    { src: "/icons/robot.png", label: locale === "es" ? "Robot LED" : "LED Robot" },
    { src: "/icons/dj.png", label: "DJ" },
    { src: "/icons/dancefloor.png", label: "Dance Floor" },
  ];

  return (
    <section id="promociones" className="relative py-16 lg:py-24">
      <div className="px-4 sm:px-6">
        <div className="relative rounded-[2rem] overflow-hidden bg-[#FAFE2A]">
          <NoiseTexture opacity={0.04} grain="fine" blend="multiply" animate={false} />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              {/* Left - text content */}
              <div>
                {/* Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-white rounded-full text-base sm:text-lg"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
                  >
                    <Gift className="w-5 h-5" />
                    {pick(locale, { es: "OFERTA DEL MES", en: "MONTHLY DEAL", zh: "本月优惠", hi: "इस महीने का ऑफर" })}
                  </span>
                </div>

                {/* Big headline */}
                <h2
                  className="text-5xl sm:text-7xl lg:text-8xl text-foreground leading-[0.85] mb-6"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
                >
                  {locale === "es" ? (
                    <>CONTRATA 3<br />Y EL 4° VA <span className="text-[#ff69b4]">GRATIS</span></>
                  ) : locale === "zh" ? (
                    <>预订 3 项<br />第 4 项 <span className="text-[#ff69b4]">免费</span></>
                  ) : locale === "hi" ? (
                    <>3 बुक करें<br />चौथा <span className="text-[#ff69b4]">मुफ़्त</span></>
                  ) : (
                    <>BOOK 3<br />GET THE 4<sup>TH</sup> <span className="text-[#ff69b4]">FREE</span></>
                  )}
                </h2>

                <p className="text-base sm:text-lg text-foreground max-w-md leading-relaxed mb-8">
                  {pick(locale, {
                    es: "Combina tus servicios favoritos y llévate el cuarto totalmente gratis. Tú armas la fiesta, nosotros ponemos el extra.",
                    en: "Combine your favorite services and get the fourth one completely free. You build the party, we add the extra.",
                    zh: "组合您喜爱的服务，第四项完全免费。您来策划派对，我们来加码。",
                    hi: "अपनी पसंदीदा सेवाएं चुनें और चौथी बिल्कुल मुफ़्त पाएं। पार्टी आप बनाएं, एक्स्ट्रा हम जोड़ें।",
                  })}
                </p>

                {/* CTA */}
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-white rounded-full text-base sm:text-lg hover:scale-105 transition-all"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
                >
                  {pick(locale, { es: "APROVECHAR OFERTA", en: "GET THIS DEAL", zh: "抢购优惠", hi: "यह ऑफर पाएं" })}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Right - visual: 3 paid + 1 free */}
              <div className="flex flex-col items-center gap-6">
                {/* 3 paid services */}
                <div className="flex items-center justify-center gap-4 sm:gap-6">
                  {paidServices.map((s, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-white/40 flex items-center justify-center p-3">
                        <img src={s.src} alt={s.label} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-sm font-bold text-foreground text-center" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}>
                        {s.label.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Plus sign */}
                <Plus className="w-10 h-10 sm:w-12 sm:h-12 text-foreground" strokeWidth={3} />

                {/* 4th free */}
                <div className="flex flex-col items-center gap-2">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-[#ff69b4] flex items-center justify-center p-3">
                    <span
                      className="text-3xl sm:text-4xl text-white text-center leading-none"
                      style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                    >
                      {pick(locale, { es: "TÚ ELIGES", en: "YOU PICK", zh: "您来选", hi: "आप चुनें" })}
                    </span>
                    {/* Free badge */}
                    <span
                      className="absolute -top-3 -right-3 px-3 py-1 bg-foreground text-white rounded-full text-sm rotate-12"
                      style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
                    >
                      {pick(locale, { es: "¡GRATIS!", en: "FREE!", zh: "免费！", hi: "मुफ़्त!" })}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-foreground text-center" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}>
                    {pick(locale, { es: "4° SERVICIO", en: "4TH SERVICE", zh: "第 4 项服务", hi: "चौथी सेवा" })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
