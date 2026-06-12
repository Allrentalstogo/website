import type { Locale } from "@/lib/i18n";

export type ServiceCategory = {
  id: string;
  emoji: string;
  name: { es: string; en: string; zh: string; hi: string };
  items: { es: string; en: string; descEs: string; descEn: string }[];
};

/** Service item names only exist in es/en; fall back to English for other locales. */
export function svcName(item: { es: string; en: string }, locale: Locale): string {
  return locale === "es" ? item.es : item.en;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "entretenimiento",
    emoji: "🤖",
    name: { es: "Entretenimiento", en: "Entertainment", zh: "娱乐", hi: "मनोरंजन" },
    items: [
      { es: "Robots LED", en: "LED Robots", descEs: "Show interactivo con robots iluminados", descEn: "Interactive show with illuminated robots" },
      { es: "Cabezones", en: "Big Heads", descEs: "Personajes gigantes para animar tu fiesta", descEn: "Giant characters to liven up your party" },
      { es: "Zanquero", en: "Stilt Walker", descEs: "Artista de altura con trajes temáticos", descEn: "Tall performer with themed costumes" },
      { es: "DJ", en: "DJ", descEs: "Música profesional toda la noche", descEn: "Professional music all night long" },
      { es: "Dance Floor LED", en: "LED Dance Floor", descEs: "Pista iluminada con efectos de colores", descEn: "Illuminated floor with color effects" },
      { es: "Photo Booth", en: "Photo Booth", descEs: "Digital, 360 y Mirror con props", descEn: "Digital, 360 and Mirror with props" },
      { es: "Party Bus", en: "Party Bus", descEs: "Transporte con fiesta incluida", descEn: "Transportation with party included" },
      { es: "Karaoke", en: "Karaoke", descEs: "Sistema profesional con pantalla y luces", descEn: "Professional system with screen and lights" },
      { es: "Máquinas de humo", en: "Smoke Machines", descEs: "Efectos de niebla para ambiente dramático", descEn: "Fog effects for dramatic atmosphere" },
      { es: "Chispas frías", en: "Cold Sparks", descEs: "Fuentes de chispas seguras para interiores", descEn: "Safe indoor spark fountains" },
      { es: "Confetti", en: "Confetti", descEs: "Cañones y lluvia de confetti", descEn: "Cannons and confetti rain" },
      { es: "Luces y láser", en: "Lights & Laser", descEs: "Show de luces profesional con láser", descEn: "Professional light show with laser" },
      { es: "Proyección de monogramas", en: "Monogram Projection", descEs: "Tu nombre o logo proyectado en paredes", descEn: "Your name or logo projected on walls" },
      { es: "Nube (hielo seco)", en: "Cloud (Dry Ice)", descEs: "Efecto de nube baja para vals o entrada", descEn: "Low cloud effect for waltz or entrance" },
    ],
  },
  {
    id: "coreografias",
    emoji: "💃",
    name: { es: "Coreografías & Shows", en: "Choreography & Shows", zh: "编舞与表演", hi: "कोरियोग्राफी और शो" },
    items: [
      { es: "Coreografías para quinceañeras", en: "Quinceañera Choreography", descEs: "Baile personalizado con ensayos incluidos", descEn: "Custom dance with rehearsals included" },
      { es: "Chambelanes", en: "Chambelanes", descEs: "Bailarines profesionales para tu corte", descEn: "Professional dancers for your court" },
      { es: "Vals", en: "Waltz", descEs: "Coreografía clásica padre-hija o pareja", descEn: "Classic father-daughter or couple choreography" },
      { es: "Baile sorpresa", en: "Surprise Dance", descEs: "Rutina inesperada que impresiona a todos", descEn: "Unexpected routine that impresses everyone" },
      { es: "Presentación en slideshow/USB", en: "Slideshow/USB Presentation", descEs: "Video de fotos con música para tu evento", descEn: "Photo video with music for your event" },
    ],
  },
  {
    id: "mobiliario",
    emoji: "🪑",
    name: { es: "Mobiliario & Carpas", en: "Furniture & Tents", zh: "家具与帐篷", hi: "फर्नीचर और टेंट" },
    items: [
      { es: "Carpas", en: "Tents", descEs: "Estructuras cubiertas para exterior", descEn: "Covered structures for outdoors" },
      { es: "Mesas", en: "Tables", descEs: "Redondas, rectangulares o cocteleras", descEn: "Round, rectangular or cocktail" },
      { es: "Sillas", en: "Chairs", descEs: "Variedad de estilos y colores", descEn: "Variety of styles and colors" },
      { es: "Lounge furniture", en: "Lounge Furniture", descEs: "Salas y sillones elegantes", descEn: "Elegant sofas and armchairs" },
      { es: "Alfombra roja", en: "Red Carpet", descEs: "Entrada VIP para tus invitados", descEn: "VIP entrance for your guests" },
      { es: "Arcos y backdrops", en: "Arches & Backdrops", descEs: "Estructuras decorativas para fotos", descEn: "Decorative structures for photos" },
      { es: "Tarimas", en: "Stages", descEs: "Plataformas elevadas para shows", descEn: "Elevated platforms for shows" },
    ],
  },
  {
    id: "catering",
    emoji: "🍽️",
    name: { es: "Banquetes & Catering", en: "Banquets & Catering", zh: "宴会与餐饮", hi: "भोज और कैटरिंग" },
    items: [
      { es: "Banquete gourmet", en: "Gourmet Banquet", descEs: "Menú de alta cocina para tu evento", descEn: "Fine dining menu for your event" },
      { es: "Comida italiana", en: "Italian Food", descEs: "Pastas, pizzas y más", descEn: "Pastas, pizzas and more" },
      { es: "Comida mexicana", en: "Mexican Food", descEs: "Platillos tradicionales mexicanos", descEn: "Traditional Mexican dishes" },
      { es: "Barbacoa", en: "BBQ", descEs: "Carnes asadas al estilo texano", descEn: "Texas-style grilled meats" },
      { es: "Taquizas", en: "Taco Bar", descEs: "Estación de tacos con todo", descEn: "Full taco station" },
      { es: "Mesa de frutas", en: "Fruit Table", descEs: "Arreglo decorativo de frutas frescas", descEn: "Decorative fresh fruit arrangement" },
      { es: "Mesa de dulces", en: "Candy Table", descEs: "Variedad de dulces y postres", descEn: "Variety of candies and desserts" },
      { es: "Fuente de chocolate", en: "Chocolate Fountain", descEs: "Fuente con chocolate para frutas", descEn: "Chocolate fountain for fruits" },
      { es: "Pastel / Repostería", en: "Cake / Bakery", descEs: "Pasteles personalizados para tu evento", descEn: "Custom cakes for your event" },
      { es: "Meseros", en: "Waiters", descEs: "Personal de servicio profesional", descEn: "Professional service staff" },
      { es: "Bartender", en: "Bartender", descEs: "Coctelería profesional y barra libre", descEn: "Professional cocktails and open bar" },
    ],
  },
  {
    id: "decoracion",
    emoji: "🌸",
    name: { es: "Decoración & Flores", en: "Decoration & Flowers", zh: "装饰与鲜花", hi: "सजावट और फूल" },
    items: [
      { es: "Decoración completa", en: "Full Decoration", descEs: "Diseño integral del espacio", descEn: "Complete space design" },
      { es: "Floristas", en: "Florists", descEs: "Arreglos florales personalizados", descEn: "Custom floral arrangements" },
      { es: "Centros de mesa", en: "Centerpieces", descEs: "Diseños únicos para cada mesa", descEn: "Unique designs for each table" },
      { es: "Globos", en: "Balloons", descEs: "Arcos, columnas y decoración con globos", descEn: "Arches, columns and balloon decor" },
      { es: "Cortinas y telas", en: "Draping & Fabrics", descEs: "Telas decorativas para techos y paredes", descEn: "Decorative fabrics for ceilings and walls" },
    ],
  },
  {
    id: "foto-video",
    emoji: "🎬",
    name: { es: "Foto & Video", en: "Photo & Video", zh: "摄影与摄像", hi: "फोटो और वीडियो" },
    items: [
      { es: "Fotografía profesional", en: "Professional Photography", descEs: "Cobertura completa de tu evento", descEn: "Full coverage of your event" },
      { es: "Video profesional", en: "Professional Video", descEs: "Grabación cinematográfica HD/4K", descEn: "Cinematic HD/4K recording" },
      { es: "Drone", en: "Drone", descEs: "Tomas aéreas espectaculares", descEn: "Spectacular aerial shots" },
      { es: "Video de iluminación", en: "Lighting Video", descEs: "Proyecciones y mapping visual", descEn: "Projections and visual mapping" },
      { es: "360 Photo Booth", en: "360 Photo Booth", descEs: "Videos 360° con efectos especiales", descEn: "360° videos with special effects" },
    ],
  },
  {
    id: "musica",
    emoji: "🎵",
    name: { es: "Música en Vivo", en: "Live Music", zh: "现场音乐", hi: "लाइव संगीत" },
    items: [
      { es: "Banda", en: "Band", descEs: "Grupo musical en vivo para tu fiesta", descEn: "Live musical group for your party" },
      { es: "Mariachi", en: "Mariachi", descEs: "Mariachi profesional con repertorio completo", descEn: "Professional mariachi with full repertoire" },
      { es: "Grupo norteño", en: "Norteño Group", descEs: "Música norteña con acordeón y bajo", descEn: "Norteño music with accordion and bass" },
      { es: "Grupo versátil", en: "Versatile Group", descEs: "Banda que toca todos los géneros", descEn: "Band that plays all genres" },
      { es: "Violinista", en: "Violinist", descEs: "Música elegante para ceremonias", descEn: "Elegant music for ceremonies" },
      { es: "Saxofonista", en: "Saxophonist", descEs: "Ambiente sofisticado con sax en vivo", descEn: "Sophisticated atmosphere with live sax" },
    ],
  },
  {
    id: "coordinacion",
    emoji: "📋",
    name: { es: "Coordinación & Planeación", en: "Coordination & Planning", zh: "协调与策划", hi: "समन्वय और योजना" },
    items: [
      { es: "Planners / Coordinadores", en: "Planners / Coordinators", descEs: "Organización completa de tu evento", descEn: "Complete organization of your event" },
      { es: "Hostess", en: "Hostess", descEs: "Recepción y atención a invitados", descEn: "Guest reception and attention" },
      { es: "Maestro de ceremonias", en: "MC / Master of Ceremonies", descEs: "Conducción profesional del evento", descEn: "Professional event hosting" },
      { es: "Setup y desmontaje", en: "Setup & Teardown", descEs: "Instalación y retiro de todo el equipo", descEn: "Installation and removal of all equipment" },
    ],
  },
  {
    id: "transporte",
    emoji: "🚗",
    name: { es: "Transporte & Extras", en: "Transportation & Extras", zh: "交通与额外服务", hi: "परिवहन और अतिरिक्त" },
    items: [
      { es: "Party Bus", en: "Party Bus", descEs: "Autobús con fiesta para traslados", descEn: "Party bus for transportation" },
      { es: "Limousine", en: "Limousine", descEs: "Llegada elegante en limusina", descEn: "Elegant arrival in limousine" },
      { es: "Caballos", en: "Horses", descEs: "Entrada a caballo para quinceañeras", descEn: "Horse entrance for quinceañeras" },
      { es: "Carruaje", en: "Carriage", descEs: "Carruaje clásico para novios", descEn: "Classic carriage for newlyweds" },
      { es: "Valet Parking", en: "Valet Parking", descEs: "Servicio de estacionamiento para invitados", descEn: "Parking service for guests" },
    ],
  },
  {
    id: "audio",
    emoji: "🔊",
    name: { es: "Audio & Ingeniería", en: "Audio & Engineering", zh: "音响与工程", hi: "ऑडियो और इंजीनियरिंग" },
    items: [
      { es: "Ingenieros en audio", en: "Audio Engineers", descEs: "Técnicos profesionales de sonido", descEn: "Professional sound technicians" },
      { es: "Sonido profesional", en: "Professional Sound", descEs: "Equipos de alta potencia y calidad", descEn: "High power and quality equipment" },
      { es: "Microfonía", en: "Microphones", descEs: "Micrófonos inalámbricos y de solapa", descEn: "Wireless and lapel microphones" },
      { es: "Pantallas LED", en: "LED Screens", descEs: "Pantallas gigantes para proyecciones", descEn: "Giant screens for projections" },
    ],
  },
];
