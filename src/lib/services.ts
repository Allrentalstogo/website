import type { Locale } from "@/lib/i18n";

export type ServiceCategory = {
  id: string;
  emoji: string;
  name: { es: string; en: string; zh: string; hi: string };
  items: { es: string; en: string; descEs: string; descEn: string; price?: string }[];
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
      { es: "Robots LED", en: "LED Robots", descEs: "Show interactivo con robots iluminados", descEn: "Interactive show with illuminated robots", price: "$600" },
      { es: "Cabezones", en: "Big Heads", descEs: "Personajes gigantes para animar tu fiesta", descEn: "Giant characters to liven up your party", price: "$350" },
      { es: "Zanquero", en: "Stilt Walker", descEs: "Artista de altura con trajes temáticos", descEn: "Tall performer with themed costumes", price: "$550" },
      { es: "Dance Floor LED", en: "LED Dance Floor", descEs: "Pista iluminada 20'x20' con efectos", descEn: "Illuminated 20'x20' floor with effects", price: "$2,000" },
      { es: "Photo Booth", en: "Photo Booth", descEs: "Digital, 360, Mirror, Basic y Print (3 hrs)", descEn: "Digital, 360, Mirror, Basic and Print (3 hrs)", price: "$550+" },
      { es: "Show Crazy Hour: Gorila", en: "Crazy Hour: Gorilla", descEs: "Botarga sorpresa para prender la fiesta", descEn: "Surprise mascot to hype the party", price: "$450" },
      { es: "Show Crazy Hour: Monja", en: "Crazy Hour: Nun", descEs: "Botarga sorpresa para la hora loca", descEn: "Surprise mascot for the crazy hour", price: "$350" },
      { es: "Show Crazy Hour: Iguana", en: "Crazy Hour: Iguana", descEs: "Botarga sorpresa para la hora loca", descEn: "Surprise mascot for the crazy hour", price: "$350" },
      { es: "Disco Ball Big Head", en: "Disco Ball Big Head", descEs: "Cabezón con esfera disco para la hora loca", descEn: "Disco ball big head for the crazy hour", price: "$350" },
      { es: "Chispas frías", en: "Cold Sparks", descEs: "Fuentes de chispas seguras (2 máquinas)", descEn: "Safe spark fountains (2 machines)", price: "$400" },
      { es: "Nube (hielo seco)", en: "Cloud (Dry Ice)", descEs: "Efecto de nube baja para el vals", descEn: "Low cloud effect for the waltz", price: "$400" },
      { es: "Proyección de monograma", en: "Monogram Projection", descEs: "Tu nombre o logo proyectado", descEn: "Your name or logo projected", price: "$275" },
      { es: "DJ", en: "DJ", descEs: "Música profesional toda la noche", descEn: "Professional music all night long" },
      { es: "Party Bus", en: "Party Bus", descEs: "Transporte con fiesta incluida", descEn: "Transportation with party included" },
      { es: "Karaoke", en: "Karaoke", descEs: "Sistema profesional con pantalla y luces", descEn: "Professional system with screen and lights" },
      { es: "Máquinas de humo", en: "Smoke Machines", descEs: "Efectos de niebla para ambiente dramático", descEn: "Fog effects for dramatic atmosphere" },
      { es: "Confetti", en: "Confetti", descEs: "Cañones y lluvia de confetti", descEn: "Cannons and confetti rain" },
      { es: "Luces y láser", en: "Lights & Laser", descEs: "Show de luces profesional con láser", descEn: "Professional light show with laser" },
    ],
  },
  {
    id: "coreografias",
    emoji: "💃",
    name: { es: "Coreografías & Shows", en: "Choreography & Shows", zh: "编舞与表演", hi: "कोरियोग्राफी और शो" },
    items: [
      { es: "Coreografías para quinceañeras", en: "Quinceañera Choreography", descEs: "Coreógrafo, 13 ensayos, programa y mezcla musical", descEn: "Choreographer, 13 rehearsals, program and music mix", price: "$1,500+" },
      { es: "Coreógrafo + Chambelanes", en: "Choreographer + Chambelanes", descEs: "Paquete con bailarines profesionales incluidos", descEn: "Package with professional dancers included", price: "$2,500" },
      { es: "Presentación en slideshow/USB", en: "Slideshow/USB Presentation", descEs: "Video de 50 fotos con música", descEn: "50-photo video with music", price: "$150" },
      { es: "Chambelanes", en: "Chambelanes", descEs: "Bailarines profesionales para tu corte", descEn: "Professional dancers for your court" },
      { es: "Vals", en: "Waltz", descEs: "Coreografía clásica padre-hija o pareja", descEn: "Classic father-daughter or couple choreography" },
      { es: "Baile sorpresa", en: "Surprise Dance", descEs: "Rutina inesperada que impresiona a todos", descEn: "Unexpected routine that impresses everyone" },
    ],
  },
  {
    id: "mobiliario",
    emoji: "🪑",
    name: { es: "Mobiliario & Carpas", en: "Furniture & Tents", zh: "家具与帐篷", hi: "फर्नीचर और टेंट" },
    items: [
      { es: "Alfombra roja", en: "Red Carpet", descEs: "Entrada VIP para tus invitados", descEn: "VIP entrance for your guests", price: "$295" },
      { es: "Letras marquesina (XV, LOVE)", en: "Marquee Letters (XV, LOVE)", descEs: "Letras iluminadas gigantes", descEn: "Giant illuminated letters", price: "$55 c/u" },
      { es: "Vajilla (Set China)", en: "China Set", descEs: "Servicio completo de vajilla", descEn: "Complete place-setting service", price: "$4.50 c/u" },
      { es: "Carpas", en: "Tents", descEs: "Estructuras cubiertas para exterior", descEn: "Covered structures for outdoors" },
      { es: "Mesas", en: "Tables", descEs: "Redondas, rectangulares o cocteleras", descEn: "Round, rectangular or cocktail" },
      { es: "Sillas", en: "Chairs", descEs: "Variedad de estilos y colores", descEn: "Variety of styles and colors" },
      { es: "Lounge furniture", en: "Lounge Furniture", descEs: "Salas y sillones elegantes", descEn: "Elegant sofas and armchairs" },
      { es: "Arcos y backdrops", en: "Arches & Backdrops", descEs: "Estructuras decorativas para fotos", descEn: "Decorative structures for photos" },
      { es: "Tarimas", en: "Stages", descEs: "Plataformas elevadas para shows", descEn: "Elevated platforms for shows" },
    ],
  },
  {
    id: "catering",
    emoji: "🍽️",
    name: { es: "Banquetes & Catering", en: "Banquets & Catering", zh: "宴会与餐饮", hi: "भोज और कैटरिंग" },
    items: [
      { es: "Mesa de snacks (con backdrop)", en: "Snack Table (with backdrop)", descEs: "Mesa decorada con backdrop", descEn: "Decorated table with backdrop", price: "$850" },
      { es: "Mesa de frutas", en: "Fruit Table", descEs: "Arreglo decorativo de frutas frescas", descEn: "Decorative fresh fruit arrangement", price: "$600" },
      { es: "Máquina de margaritas", en: "Margarita Machine", descEs: "Toda la noche, 10 galones (otros sabores extra)", descEn: "All night, 10 gallons (other flavors extra)", price: "$575" },
      { es: "Mesa de botanas / snacks mexicanos", en: "Appetizer Table / Mexican Snacks", descEs: "Precio base, variedad de botanas", descEn: "Base price, variety of snacks", price: "$500" },
      { es: "Fuente / mesa de chocolate", en: "Chocolate Table", descEs: "Mesa con chocolate fondant", descEn: "Table with fondant chocolate", price: "$550" },
      { es: "Bartender", en: "Bartender", descEs: "Coctelería profesional y barra libre", descEn: "Professional cocktails and open bar", price: "$375" },
      { es: "Meseros (extra)", en: "Extra Waiters", descEs: "Personal de servicio, mínimo 5 hrs", descEn: "Service staff, 5 hr minimum", price: "$35/hr" },
      { es: "Estación de Maruchan", en: "Maruchan Station", descEs: "Con toppings, por persona", descEn: "With toppings, per person", price: "$5 p/p" },
      { es: "Trolotes (elote con nachos)", en: "Corn & Nachos (Trolotes)", descEs: "Preparados con toppings, por persona", descEn: "Prepared with toppings, per person", price: "$5 p/p" },
      { es: "Mesa de gelatina gourmet", en: "Gourmet Jelly Table", descEs: "Gelatinas artísticas para tu evento", descEn: "Artistic jellies for your event" },
      { es: "Banquete gourmet", en: "Gourmet Banquet", descEs: "Menú de alta cocina para tu evento", descEn: "Fine dining menu for your event" },
      { es: "Taquizas", en: "Taco Bar", descEs: "Estación de tacos con todo", descEn: "Full taco station" },
      { es: "Pastel / Repostería", en: "Cake / Bakery", descEs: "Pasteles personalizados para tu evento", descEn: "Custom cakes for your event" },
    ],
  },
  {
    id: "decoracion",
    emoji: "🌸",
    name: { es: "Decoración & Flores", en: "Decoration & Flowers", zh: "装饰与鲜花", hi: "सजावट और फूल" },
    items: [
      { es: "Caída de globos (Balloon Drop)", en: "Balloon Drop", descEs: "Lluvia de globos para el momento clave", descEn: "Balloon rain for the key moment", price: "$350" },
      { es: "Up lighting (iluminación ambiental)", en: "Up Lighting", descEs: "Luces de ambiente por color", descEn: "Ambient lighting by color", price: "$35 c/u" },
      { es: "Invitaciones personalizadas", en: "Custom Invitations", descEs: "Diseño a tu medida", descEn: "Custom design", price: "$3.50+ c/u" },
      { es: "Fondos personalizados", en: "Custom Backdrops", descEs: "Cortinas o globos, envíanos tu diseño", descEn: "Curtains or balloons, send us your design" },
      { es: "Playeras personalizadas", en: "Custom T-shirts", descEs: "Estampado personalizado", descEn: "Custom printing" },
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
      { es: "360 Photo Booth", en: "360 Photo Booth", descEs: "Videos 360° con efectos (3 hrs)", descEn: "360° videos with effects (3 hrs)", price: "$550" },
      { es: "Mirror Photo Booth", en: "Mirror Photo Booth", descEs: "Espejo mágico interactivo (3 hrs)", descEn: "Interactive magic mirror (3 hrs)", price: "$550" },
      { es: "Print Photo Booth", en: "Print Photo Booth", descEs: "Impresiones al instante (3 hrs)", descEn: "Instant prints (3 hrs)", price: "$550" },
      { es: "Sesión de fotografía", en: "Photography Session", descEs: "Fotógrafo, foto 24x30 con marco", descEn: "Photographer, 24x30 framed photo", price: "$500+" },
      { es: "Video profesional", en: "Professional Video", descEs: "Grabación cinematográfica HD/4K", descEn: "Cinematic HD/4K recording" },
      { es: "Drone", en: "Drone", descEs: "Tomas aéreas espectaculares", descEn: "Spectacular aerial shots" },
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
      { es: "Violinista", en: "Violinist", descEs: "Música elegante para ceremonias", descEn: "Elegant music for ceremonies" },
      { es: "Saxofonista", en: "Saxophonist", descEs: "Ambiente sofisticado con sax en vivo", descEn: "Sophisticated atmosphere with live sax" },
    ],
  },
  {
    id: "coordinacion",
    emoji: "📋",
    name: { es: "Coordinación & Planeación", en: "Coordination & Planning", zh: "协调与策划", hi: "समन्वय और योजना" },
    items: [
      { es: "Montaje de ceremonia", en: "Ceremony Setup", descEs: "Set up completo para tu ceremonia", descEn: "Complete setup for your ceremony", price: "$650" },
      { es: "Diácono / Pastor", en: "Deacon / Pastor", descEs: "Oficiante para tu ceremonia", descEn: "Officiant for your ceremony", price: "$400" },
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
      { es: "Sesión con caballo", en: "Horse Photo Session", descEs: "Sesión de fotos con caballo", descEn: "Photo session with horse", price: "$600" },
      { es: "Party Bus", en: "Party Bus", descEs: "Autobús con fiesta para traslados", descEn: "Party bus for transportation" },
      { es: "Limousine", en: "Limousine", descEs: "Llegada elegante en limusina", descEn: "Elegant arrival in limousine" },
      { es: "Carruaje", en: "Carriage", descEs: "Carruaje clásico para novios", descEn: "Classic carriage for newlyweds" },
      { es: "Valet Parking", en: "Valet Parking", descEs: "Servicio de estacionamiento para invitados", descEn: "Parking service for guests" },
    ],
  },
  {
    id: "audio",
    emoji: "🔊",
    name: { es: "Audio & Pantallas", en: "Audio & Screens", zh: "音响与工程", hi: "ऑडियो और इंजीनियरिंग" },
    items: [
      { es: "Pantalla LED digital (7x12 ft)", en: "LED Digital Screen (7x12 ft)", descEs: "Pantalla gigante de alta resolución", descEn: "Giant high-resolution screen", price: "$1,495" },
      { es: "Renta de pantalla", en: "Screen Rental", descEs: "Pantalla para proyecciones", descEn: "Screen for projections", price: "$195" },
      { es: "Renta de proyector", en: "Projector Rental", descEs: "Proyector profesional", descEn: "Professional projector", price: "$195" },
      { es: "TVs LED", en: "LED TVs", descEs: "Televisores para tu evento", descEn: "TVs for your event", price: "$195" },
      { es: "Sonido profesional", en: "Professional Sound", descEs: "Equipos de alta potencia y calidad", descEn: "High power and quality equipment" },
      { es: "Microfonía", en: "Microphones", descEs: "Micrófonos inalámbricos y de solapa", descEn: "Wireless and lapel microphones" },
      { es: "Ingenieros en audio", en: "Audio Engineers", descEs: "Técnicos profesionales de sonido", descEn: "Professional sound technicians" },
    ],
  },
];
