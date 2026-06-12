"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { pick } from "@/lib/i18n";

const reviews = [
  {
    name: "Arlene Zapata",
    avatar: "/img/reviews/arlene.png",
    photos: ["/img/reviews/arlene1.webp", "/img/reviews/arlene_2.webp", "/img/reviews/arlene_3.webp"],
    rating: 5,
    time: { es: "Hace un año", en: "A year ago" },
    text: {
      es: "Quiero expresar mi gratitud por la noche más perfecta que podríamos haber soñado. El personal y el servicio fueron impecables. Todo salió a la perfección: la decoración, el DJ, la iluminación, los meseros, los bailarines, el robot. Todo fue excepcional.",
      en: "I want to express my gratitude for the most perfect night we could have dreamed of. The staff and service were impeccable. Everything went perfectly: the decoration, the DJ, the lighting, the waiters, the dancers, the robot. Everything was exceptional.",
    },
  },
  {
    name: "Carmen Bravo",
    avatar: "",
    photos: ["/img/reviews/carmen_1.webp"],
    rating: 5,
    time: { es: "Hace un año", en: "A year ago" },
    text: {
      es: "¡Excelente servicio! La decoración era preciosa. Pensaron en cada detalle y lo hicieron lucir increíble. Hicieron de nuestro día una experiencia hermosa e inolvidable que jamás olvidaremos.",
      en: "Excellent service! The decoration was beautiful. They thought of every detail and made it look incredible. They made our day a beautiful and unforgettable experience we will never forget.",
    },
  },
  {
    name: "Veronica Hernandez",
    avatar: "/img/reviews/veronica.jpg",
    photos: ["/img/reviews/veronica_1.webp"],
    rating: 5,
    time: { es: "Hace 4 años", en: "4 years ago" },
    text: {
      es: "Celebramos los quince años de nuestra hija y estoy muy satisfecha. Chelly y su equipo hicieron un trabajo increíble. La comida estuvo deliciosa y los meseros brindaron un servicio excelente. El DJ no me decepcionó. ¡Muy contenta!",
      en: "We celebrated our daughter's quinceañera and I am very satisfied. Chelly and her team did an incredible job. The food was delicious and the waiters provided excellent service. The DJ didn't disappoint. Very happy!",
    },
  },
  {
    name: "Melissa Ayala Rovira",
    avatar: "/img/reviews/melissa.jpg",
    photos: [],
    rating: 5,
    time: { es: "Hace un mes", en: "A month ago" },
    text: {
      es: "¡Excelente servicio! Recomendado al 100%. Sin duda los volvería a contratar para cualquier evento.",
      en: "Excellent service! 100% recommended. I would definitely hire them again for any event.",
    },
  },
];

export default function Testimonials() {
  const { locale } = useLanguage();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  const review = reviews[current];

  return (
    <section id="testimonios" className="relative py-24 lg:py-32 bg-[#C8D8FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-foreground mb-3"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
            >
              {pick(locale, { es: "RESEÑAS DE GOOGLE", en: "GOOGLE REVIEWS", zh: "谷歌评价", hi: "गूगल समीक्षाएं" })}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl lg:text-8xl leading-[0.9] tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {pick(locale, { es: "HABLAN POR NOSOTROS", en: "THEY SPEAK FOR US", zh: "他们为我们代言", hi: "वे हमारी बात कहते हैं" })}
            </motion.h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center hover:scale-110 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center hover:scale-110 transition-all"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Big review */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center"
          >
            {/* Text side */}
            <div>
              {/* Stars + Google */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#FAFE2A] text-[#FAFE2A]" />
                  ))}
                </div>
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              </div>

              {/* Big quote */}
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl text-foreground leading-[1.15] font-bold mb-8">
                &ldquo;{locale === "es" ? review.text.es : review.text.en}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                {review.avatar ? (
                  <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full object-cover" />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center text-xl font-black text-white">
                    {review.name[0]}
                  </div>
                )}
                <div>
                  <p className="text-lg font-bold text-foreground">{review.name}</p>
                  <p className="text-sm text-foreground">{locale === "es" ? review.time.es : review.time.en}</p>
                </div>
              </div>
            </div>

            {/* Photos side (if any) */}
            {review.photos.length > 0 && (
              <div className="flex gap-3 lg:max-w-[400px]">
                {review.photos.slice(0, 2).map((photo, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl overflow-hidden ${i === 0 ? "w-full" : "hidden sm:block w-full"}`}
                  >
                    <img
                      src={photo}
                      alt={`${review.name} event`}
                      className="w-full h-[300px] lg:h-[400px] object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Counter dots */}
        <div className="flex gap-2 mt-12">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-foreground" : "w-2 bg-foreground/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
