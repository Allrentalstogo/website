"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useQuote } from "@/context/QuoteContext";
import { motion } from "framer-motion";
import { X, ArrowRight, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { pick } from "@/lib/i18n";

const eventTypes = {
  es: ["Boda", "Quinceañera", "Cumpleaños", "Bautizo", "Corporativo", "Otro"],
  en: ["Wedding", "Quinceañera", "Birthday", "Baptism", "Corporate", "Other"],
};

const guestRanges = ["1-50", "50-100", "100-200", "200-500", "500+"];

// TODO: paste your Web3Forms access key here (from https://web3forms.com)
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export default function Contact() {
  const { locale } = useLanguage();
  const { selectedServices, removeService } = useQuote();
  const [selectedEvent, setSelectedEvent] = useState("");
  const [otherEvent, setOtherEvent] = useState("");
  const [selectedGuests, setSelectedGuests] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const events = locale === "es" ? eventTypes.es : eventTypes.en;
  const eventValue = selectedEvent === (locale === "es" ? "Otro" : "Other") ? otherEvent : selectedEvent;

  const buildWhatsAppMessage = () => {
    let msg = locale === "es" ? "¡Hola! Quiero cotizar:\n" : "Hi! I want a quote:\n";
    if (eventValue) msg += `\n${locale === "es" ? "Evento" : "Event"}: ${eventValue}`;
    if (selectedGuests) msg += `\n${locale === "es" ? "Invitados" : "Guests"}: ${selectedGuests}`;
    if (selectedServices.length > 0) msg += `\n${locale === "es" ? "Servicios" : "Services"}: ${selectedServices.join(", ")}`;
    if (name) msg += `\n${locale === "es" ? "Nombre" : "Name"}: ${name}`;
    if (budget) msg += `\n${locale === "es" ? "Presupuesto" : "Budget"}: ${budget}`;
    return encodeURIComponent(msg);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Nueva cotización - All Rentals To Go",
          from_name: "All Rentals To Go Web",
          name,
          email,
          phone,
          budget,
          event: eventValue,
          guests: selectedGuests,
          services: selectedServices.join(", "),
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="relative">
      {/* Background split - top transparent, bottom C8D8FF */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#C8D8FF]" />
      
      <div className="relative z-10 w-[90%] sm:w-[85%] lg:w-[80%] mx-auto pt-16 sm:pt-24 pb-10 sm:pb-16">
        <div className="rounded-[2rem] overflow-hidden bg-white grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
          {/* Image */}
          <div className="relative h-[30vh] lg:h-auto overflow-hidden">
            <img
              src="/img/araceli.png" 
              alt="Robot & Big Head at Quinceañera"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent flex items-end p-8 sm:p-10">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-white leading-[0.85]"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
              >
                {locale === "es"
                  ? <><span className="text-[#FAFE2A]">TU EVENTO</span> MERECE SER INOLVIDABLE</>
                  : locale === "zh"
                  ? <><span className="text-[#FAFE2A]">您的活动</span> 值得被铭记</>
                  : locale === "hi"
                  ? <><span className="text-[#FAFE2A]">आपका इवेंट</span> यादगार होना चाहिए</>
                  : <><span className="text-[#FAFE2A]">YOUR EVENT</span> DESERVES TO BE UNFORGETTABLE</>}
              </h2>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-10 lg:p-12">
            <motion.form
              onSubmit={handleEmailSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Selected services */}
              {selectedServices.length > 0 && (
                <div className="mb-8 pb-6 border-b border-foreground/10">
                  <p
                    className="text-base text-foreground mb-3"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
                  >
                    {pick(locale, { es: "TUS SERVICIOS", en: "YOUR SERVICES", zh: "您的服务", hi: "आपकी सेवाएं" })}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedServices.map((s) => (
                      <span key={s} className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold bg-[#FAFE2A] text-foreground rounded-full">
                        {s}
                        <button onClick={() => removeService(s)}><X className="w-3 h-3" /></button>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Event type */}
              <div className="mb-8 pb-6 border-b border-foreground/10">
                <p className="text-base text-foreground mb-3" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>
                  {pick(locale, { es: "TIPO DE EVENTO", en: "EVENT TYPE", zh: "活动类型", hi: "इवेंट का प्रकार" })}
                </p>
                <div className="flex flex-wrap gap-2">
                  {events.map((event) => (
                    <button
                      key={event}
                      type="button"
                      onClick={() => setSelectedEvent(selectedEvent === event ? "" : event)}
                      className={`px-5 py-3 text-base rounded-xl border-2 transition-all ${
                        selectedEvent === event
                          ? "bg-foreground text-white border-foreground"
                          : "bg-transparent text-foreground border-foreground/15 hover:border-foreground/40"
                      }`}
                      style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
                    >
                      {event.toUpperCase()}
                    </button>
                  ))}
                </div>
                {selectedEvent === (locale === "es" ? "Otro" : "Other") && (
                  <input
                    type="text"
                    value={otherEvent}
                    onChange={(e) => setOtherEvent(e.target.value)}
                    placeholder={pick(locale, { es: "¿Qué tipo de evento?", en: "What type of event?", zh: "哪种活动？", hi: "किस प्रकार का इवेंट?" })}
                    className="mt-3 w-full px-4 py-3.5 bg-background border border-foreground/10 rounded-xl text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground text-sm"
                  />
                )}
              </div>

              {/* Guests */}
              <div className="mb-8 pb-6 border-b border-foreground/10">
                <p className="text-base text-foreground mb-3" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>
                  {pick(locale, { es: "NÚMERO DE INVITADOS", en: "NUMBER OF GUESTS", zh: "宾客人数", hi: "मेहमानों की संख्या" })}
                </p>
                <div className="flex flex-wrap gap-2">
                  {guestRanges.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setSelectedGuests(selectedGuests === range ? "" : range)}
                      className={`px-5 py-3 text-base rounded-xl border-2 transition-all ${
                        selectedGuests === range
                          ? "bg-foreground text-white border-foreground"
                          : "bg-transparent text-foreground border-foreground/15 hover:border-foreground/40"
                      }`}
                      style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-foreground/10">
                <div className="border-b sm:border-b-0 sm:border-r border-foreground/10 py-4 sm:pr-6">
                  <label className="text-base text-foreground block mb-1" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>
                    {pick(locale, { es: "NOMBRE", en: "NAME", zh: "姓名", hi: "नाम" })}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={pick(locale, { es: "Tu nombre", en: "Your name", zh: "您的姓名", hi: "आपका नाम" })}
                    className="w-full bg-transparent text-foreground text-lg placeholder:text-foreground/20 focus:outline-none"
                  />
                </div>
                <div className="py-4 sm:pl-6">
                  <label className="text-base text-foreground block mb-1" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@doe.com"
                    className="w-full bg-transparent text-foreground text-lg placeholder:text-foreground/20 focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-foreground/10">
                <div className="border-b sm:border-b-0 sm:border-r border-foreground/10 py-4 sm:pr-6">
                  <label className="text-base text-foreground block mb-1" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>
                    {pick(locale, { es: "TELÉFONO", en: "PHONE", zh: "电话", hi: "फ़ोन" })}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (346) 000-0000"
                    className="w-full bg-transparent text-foreground text-lg placeholder:text-foreground/20 focus:outline-none"
                  />
                </div>
                <div className="py-4 sm:pl-6">
                  <label className="text-base text-foreground block mb-1" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>
                    {pick(locale, { es: "PRESUPUESTO (OPCIONAL)", en: "BUDGET (OPTIONAL)", zh: "预算（可选）", hi: "बजट (वैकल्पिक)" })}
                  </label>
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="USD"
                    className="w-full bg-transparent text-foreground text-lg placeholder:text-foreground/20 focus:outline-none"
                  />
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/18324840011?text=${buildWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white rounded-xl hover:scale-[1.02] transition-all"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  <span
                    className="text-2xl sm:text-3xl"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                  >
                    {pick(locale, { es: "Envía vía WhatsApp", en: "Send via WhatsApp", zh: "通过 WhatsApp 发送", hi: "WhatsApp से भेजें" })}
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-foreground text-white rounded-xl hover:scale-[1.02] transition-all disabled:opacity-60"
                >
                  <Send className="w-5 h-5" />
                  <span
                    className="text-2xl sm:text-3xl"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                  >
                    {status === "sending"
                      ? pick(locale, { es: "Enviando...", en: "Sending...", zh: "发送中...", hi: "भेज रहे हैं..." })
                      : pick(locale, { es: "Enviar vía Email", en: "Send via Email", zh: "通过邮件发送", hi: "ईमेल से भेजें" })}
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Submit status */}
              {status === "ok" && (
                <p className="mt-4 text-base font-bold text-[#16a34a]">
                  {pick(locale, { es: "¡Mensaje enviado! Te contactaremos pronto.", en: "Message sent! We'll contact you soon.", zh: "消息已发送！我们会尽快联系您。", hi: "संदेश भेजा गया! हम जल्द ही संपर्क करेंगे।" })}
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-base font-bold text-[#dc2626]">
                  {pick(locale, { es: "Hubo un error. Intenta por WhatsApp.", en: "Something went wrong. Try WhatsApp.", zh: "出错了，请尝试 WhatsApp。", hi: "कुछ गड़बड़ हुई। WhatsApp आज़माएं।" })}
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
