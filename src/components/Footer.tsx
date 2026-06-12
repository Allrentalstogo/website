"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useQuote } from "@/context/QuoteContext";
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { serviceCategories, svcName } from "@/lib/services";
import { catIcons } from "@/components/ServicesExplorer";
import { pick } from "@/lib/i18n";

export default function Footer() {
  const { locale, t } = useLanguage();
  const { toggleService } = useQuote();

  return (
    <footer className="relative bg-[#C8D8FF]" id="footer">
      {/* Top CTA section */}
      <div className="relative px-6 sm:px-10 lg:px-16 pt-64 pb-16">
        {/* Decorative images - absolute */}
        <img src="/icons/cabezones.png" alt="" className="absolute top-6 right-4 sm:right-10 w-64 h-64 sm:w-80 sm:h-80 object-contain pointer-events-none" />
        <img src="/icons/coreografias.png" alt="" className="absolute bottom-4 left-4 sm:left-10 w-52 h-52 sm:w-64 sm:h-64 object-contain pointer-events-none" />

        {/* Row 1 - centered */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6">
          <h2
            className="text-6xl sm:text-8xl lg:text-[9rem] text-foreground leading-[0.85]"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
          >
            {pick(locale, { es: "PREGUNTAS?", en: "QUESTIONS?", zh: "有疑问？", hi: "सवाल हैं?" })}
          </h2>
          <a
            href="mailto:allrentalstogo1@gmail.com"
            className="px-10 py-5 bg-[#FAFE2A] rounded-full text-lg sm:text-xl font-bold text-foreground hover:scale-105 transition-all"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.01em" }}
          >
            allrentalstogo1@gmail.com
          </a>
        </div>

        {/* Row 2 - centered */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+13465106312"
              className="px-8 py-4 rounded-full border-2 border-dashed border-foreground/30 text-lg sm:text-xl font-bold text-foreground hover:border-foreground transition-all text-center"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.01em" }}
            >
              (346) 510-6312
            </a>
            <a
              href="tel:+18324840011"
              className="px-8 py-4 rounded-full border-2 border-dashed border-foreground/30 text-lg sm:text-xl font-bold text-foreground hover:border-foreground transition-all text-center"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.01em" }}
            >
              (832) 484-0011
            </a>
          </div>
          <h2
            className="text-6xl sm:text-8xl lg:text-[9rem] text-foreground leading-[0.85]"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
          >
            {pick(locale, { es: "ESCRÍBENOS", en: "REACH OUT", zh: "联系我们", hi: "हमें लिखें" })}
          </h2>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="border-t border-foreground/10" />
      </div>

      {/* Services - 5 cols with icons, clickable */}
      <div className="px-6 sm:px-10 lg:px-16 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-6">
          {serviceCategories.map((cat) => (
            <div key={cat.id}>
              <h4
                className="text-base sm:text-lg text-foreground mb-3 font-bold flex items-center gap-2"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
              >
                <span className="w-7 h-7 rounded-md bg-[#a8d4ff] flex items-center justify-center text-foreground p-1.5 flex-shrink-0">
                  {catIcons[cat.id]}
                </span>
                {cat.name[locale].toUpperCase()}
              </h4>
              <ul className="space-y-1">
                {cat.items.slice(0, 5).map((item, i) => (
                  <li key={i}>
                    <button
                      onClick={() => {
                        toggleService(svcName(item, locale));
                        const el = document.getElementById("contacto");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-[0.9375rem] text-foreground hover:underline text-left"
                    >
                      {svcName(item, locale)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Nav row - centered, bigger */}
        <div className="mt-10 pt-6 border-t border-foreground/10 flex flex-wrap items-center justify-center gap-8">
          <a href="#servicios" className="text-base sm:text-lg font-bold text-foreground hover:underline" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>{t.nav.services.toUpperCase()}</a>
          <a href="#about" className="text-base sm:text-lg font-bold text-foreground hover:underline" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>{t.nav.about.toUpperCase()}</a>
          <a href="#galeria" className="text-base sm:text-lg font-bold text-foreground hover:underline" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>{t.nav.gallery.toUpperCase()}</a>
          <a href="#testimonios" className="text-base sm:text-lg font-bold text-foreground hover:underline" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>{t.nav.testimonials.toUpperCase()}</a>
          <a href="#faq" className="text-base sm:text-lg font-bold text-foreground hover:underline" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>{t.nav.faq.toUpperCase()}</a>
          <a href="#contacto" className="text-base sm:text-lg font-bold text-foreground hover:underline" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>{t.nav.contact.toUpperCase()}</a>
        </div>

        {/* Social + copyright */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-foreground/10">
          <div className="flex gap-3">
            <a href="https://www.instagram.com/allrentalstogo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#FAFE2A] flex items-center justify-center hover:scale-110 transition-all">
              <FaInstagram className="w-4 h-4 text-foreground" />
            </a>
            <a href="https://www.facebook.com/people/All-Rentals-To-Go/61567893815515/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[#a8d4ff] flex items-center justify-center hover:scale-110 transition-all">
              <FaFacebookF className="w-4 h-4 text-foreground" />
            </a>
            <a href="https://www.tiktok.com/@all.rentals.to.go" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full bg-[#ffb6d9] flex items-center justify-center hover:scale-110 transition-all">
              <FaTiktok className="w-4 h-4 text-foreground" />
            </a>
            <a href="https://wa.me/18324840011" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-[#a7f3d0] flex items-center justify-center hover:scale-110 transition-all">
              <FaWhatsapp className="w-4 h-4 text-foreground" />
            </a>
          </div>
          <p className="text-xs text-foreground">
            © {new Date().getFullYear()} All Rentals To Go. {t.footer.rights}
          </p>
        </div>
      </div>

      {/* Giant logo text - subido */}
      <div className="relative h-[16vw] overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <span
            className="absolute text-[18vw] leading-[0.75] whitespace-nowrap select-none translate-y-[20%] -skew-x-6 -translate-x-[16px]"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
            aria-hidden="true"
          >
            <span className="text-white/15">ALL RENTALS </span>
            <span className="text-[#FAFE2A]/15">TO GO</span>
          </span>
          <span
            className="absolute text-[18vw] leading-[0.75] whitespace-nowrap select-none translate-y-[20%] -skew-x-6 -translate-x-[8px]"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
            aria-hidden="true"
          >
            <span className="text-white/30">ALL RENTALS </span>
            <span className="text-[#FAFE2A]/30">TO GO</span>
          </span>
          <span
            className="relative text-[18vw] leading-[0.75] whitespace-nowrap select-none translate-y-[20%] -skew-x-6"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
          >
            <span className="text-white">ALL RENTALS </span>
            <span className="text-[#FAFE2A]">TO GO</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
