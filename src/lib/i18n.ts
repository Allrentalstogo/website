export type Locale = "es" | "en" | "zh" | "hi";

export const localeNames: Record<Locale, { flag: string; label: string }> = {
  es: { flag: "🇲🇽", label: "Español" },
  en: { flag: "🇺🇸", label: "English" },
  zh: { flag: "🇨🇳", label: "中文" },
  hi: { flag: "🇮🇳", label: "हिन्दी" },
};

/**
 * Pick the value for the active locale, falling back to English when a
 * translation has not been provided for that locale.
 */
export function pick<T>(locale: Locale, opts: { es: T; en: T; zh?: T; hi?: T }): T {
  return opts[locale] ?? opts.en;
}

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "About Us",
      gallery: "Galería",
      testimonials: "Testimonios",
      faq: "Preguntas Frecuentes",
      contact: "Contacto",
    },
    hero: {
      cta: "Cotiza Ahora",
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        {
          question: "¿Con cuánto tiempo de anticipación debo reservar?",
          answer: "Recomendamos reservar con al menos 2-4 semanas de anticipación para garantizar disponibilidad. Para temporada alta (mayo-diciembre), sugerimos reservar con 1-2 meses de anticipación.",
        },
        {
          question: "¿Qué áreas cubren?",
          answer: "Cubrimos toda el área metropolitana de Houston y alrededores. Para eventos fuera de esta zona, contáctanos para verificar disponibilidad.",
        },
        {
          question: "¿Ofrecen setup y desmontaje?",
          answer: "Sí, todos nuestros servicios incluyen instalación y desmontaje. Nuestro equipo se encarga de todo para que tú solo disfrutes.",
        },
        {
          question: "¿Trabajan eventos en interiores y exteriores?",
          answer: "Sí, nos adaptamos a cualquier tipo de venue, ya sea salón, jardín, parque o residencia privada.",
        },
        {
          question: "¿Pueden personalizar paquetes?",
          answer: "¡Absolutamente! Armamos paquetes a la medida de tus necesidades y presupuesto. Cada evento es único y así lo tratamos.",
        },
      ],
    },
    cta: {
      call: "Llamar",
      whatsapp: "WhatsApp",
    },
    footer: {
      rights: "Todos los derechos reservados",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      gallery: "Gallery",
      testimonials: "Testimonials",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      cta: "Get a Quote",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How far in advance should I book?",
          answer: "We recommend booking at least 2-4 weeks in advance to guarantee availability. For peak season (May-December), we suggest booking 1-2 months ahead.",
        },
        {
          question: "What areas do you cover?",
          answer: "We cover the entire Houston metropolitan area and surroundings. For events outside this zone, contact us to verify availability.",
        },
        {
          question: "Do you offer setup and teardown?",
          answer: "Yes, all our services include installation and teardown. Our team handles everything so you can just enjoy.",
        },
        {
          question: "Do you work indoor and outdoor events?",
          answer: "Yes, we adapt to any type of venue, whether it's a hall, garden, park, or private residence.",
        },
        {
          question: "Can you customize packages?",
          answer: "Absolutely! We build packages tailored to your needs and budget. Every event is unique and we treat it that way.",
        },
      ],
    },
    cta: {
      call: "Call",
      whatsapp: "WhatsApp",
    },
    footer: {
      rights: "All rights reserved",
    },
  },
  zh: {
    nav: {
      home: "首页",
      services: "服务",
      about: "关于我们",
      gallery: "相册",
      testimonials: "客户评价",
      faq: "常见问题",
      contact: "联系我们",
    },
    hero: {
      cta: "立即报价",
    },
    faq: {
      title: "常见问题",
      items: [
        {
          question: "我需要提前多久预订？",
          answer: "我们建议至少提前 2-4 周预订以确保有空档。在旺季（5月至12月），建议提前 1-2 个月预订。",
        },
        {
          question: "你们服务哪些区域？",
          answer: "我们覆盖整个休斯顿都会区及周边地区。对于此区域以外的活动，请联系我们确认可否提供服务。",
        },
        {
          question: "你们提供布置和拆卸吗？",
          answer: "是的，我们所有的服务都包含安装和拆卸。我们的团队会处理好一切，您只管尽情享受。",
        },
        {
          question: "你们承接室内和室外活动吗？",
          answer: "是的，我们可适应任何场地，无论是宴会厅、花园、公园还是私人住宅。",
        },
        {
          question: "可以定制套餐吗？",
          answer: "当然可以！我们会根据您的需求和预算量身定制套餐。每一场活动都独一无二，我们也如此对待。",
        },
      ],
    },
    cta: {
      call: "致电",
      whatsapp: "WhatsApp",
    },
    footer: {
      rights: "版权所有",
    },
  },
  hi: {
    nav: {
      home: "होम",
      services: "सेवाएं",
      about: "हमारे बारे में",
      gallery: "गैलरी",
      testimonials: "समीक्षाएं",
      faq: "सामान्य प्रश्न",
      contact: "संपर्क करें",
    },
    hero: {
      cta: "कोटेशन पाएं",
    },
    faq: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      items: [
        {
          question: "मुझे कितने समय पहले बुकिंग करनी चाहिए?",
          answer: "उपलब्धता सुनिश्चित करने के लिए हम कम से कम 2-4 सप्ताह पहले बुकिंग की सलाह देते हैं। पीक सीज़न (मई-दिसंबर) के लिए, 1-2 महीने पहले बुकिंग करने का सुझाव देते हैं।",
        },
        {
          question: "आप किन क्षेत्रों में सेवा देते हैं?",
          answer: "हम पूरे ह्यूस्टन महानगरीय क्षेत्र और आसपास के इलाकों को कवर करते हैं। इस क्षेत्र के बाहर के आयोजनों के लिए, उपलब्धता जानने हेतु हमसे संपर्क करें।",
        },
        {
          question: "क्या आप सेटअप और हटाने की सेवा देते हैं?",
          answer: "हां, हमारी सभी सेवाओं में इंस्टॉलेशन और हटाने का काम शामिल है। हमारी टीम सब कुछ संभालती है ताकि आप बस आनंद लें।",
        },
        {
          question: "क्या आप इनडोर और आउटडोर दोनों आयोजन करते हैं?",
          answer: "हां, हम किसी भी प्रकार के स्थल के अनुसार ढल जाते हैं, चाहे वह हॉल हो, बगीचा, पार्क या निजी निवास।",
        },
        {
          question: "क्या आप पैकेज कस्टमाइज़ कर सकते हैं?",
          answer: "बिल्कुल! हम आपकी ज़रूरतों और बजट के अनुसार पैकेज तैयार करते हैं। हर आयोजन अनोखा है और हम उसे वैसे ही मानते हैं।",
        },
      ],
    },
    cta: {
      call: "कॉल करें",
      whatsapp: "WhatsApp",
    },
    footer: {
      rights: "सर्वाधिकार सुरक्षित",
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
