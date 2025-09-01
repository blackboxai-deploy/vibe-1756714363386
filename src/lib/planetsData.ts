export interface PlanetData {
  id: string;
  nombre: string;
  nombreIngles: string;
  diametro: string;
  masa: string;
  densidad: string;
  gravedad: string;
  distanciaSol: string;
  periodoOrbital: string;
  periodoRotacion: string;
  temperatura: string;
  atmosfera: string[];
  lunas: number;
  lunasNotables?: string[];
  datosCuriosos: string[];
  exploracion: string[];
  color: string;
  imagen: string;
}

export const planetsData: PlanetData[] = [
  {
    id: "mercurio",
    nombre: "Mercurio",
    nombreIngles: "Mercury",
    diametro: "4,879 km",
    masa: "3.30 × 10²³ kg",
    densidad: "5.43 g/cm³",
    gravedad: "3.7 m/s²",
    distanciaSol: "57.9 millones km",
    periodoOrbital: "88 días terrestres",
    periodoRotacion: "58.6 días terrestres",
    temperatura: "-173°C a 427°C",
    atmosfera: ["Oxígeno", "Sodio", "Hidrógeno", "Helio"],
    lunas: 0,
    datosCuriosos: [
      "Es el planeta más cercano al Sol",
      "No tiene atmósfera significativa",
      "Un día en Mercurio dura más que un año",
      "Tiene cráteres similares a la Luna",
      "Su núcleo es proporcionalmente muy grande"
    ],
    exploracion: [
      "Mariner 10 (1974-1975)",
      "MESSENGER (2004-2015)",
      "BepiColombo (misión en curso desde 2018)"
    ],
    color: "from-gray-400 to-gray-600",
    imagen: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/44066daf-63a2-415c-9466-7eddd5625f99.png"
  },
  {
    id: "venus",
    nombre: "Venus",
    nombreIngles: "Venus",
    diametro: "12,104 km",
    masa: "4.87 × 10²⁴ kg",
    densidad: "5.24 g/cm³",
    gravedad: "8.87 m/s²",
    distanciaSol: "108.2 millones km",
    periodoOrbital: "225 días terrestres",
    periodoRotacion: "243 días terrestres",
    temperatura: "462°C (superficie)",
    atmosfera: ["Dióxido de carbono (96%)", "Nitrógeno (3.5%)", "Vapor de agua"],
    lunas: 0,
    datosCuriosos: [
      "Es el planeta más caliente del sistema solar",
      "Rota en dirección opuesta a la mayoría de planetas",
      "Es conocido como la 'Estrella de la mañana' o 'Estrella vespertina'",
      "Tiene un efecto invernadero extremo",
      "Su atmósfera es 90 veces más densa que la de la Tierra"
    ],
    exploracion: [
      "Venera (programa soviético 1961-1984)",
      "Magellan (NASA 1989-1994)",
      "Venus Express (ESA 2005-2014)",
      "Akatsuki (JAXA 2010-presente)"
    ],
    color: "from-yellow-300 to-orange-500",
    imagen: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b4de061f-3585-49d8-a868-07612aa2893b.png"
  },
  {
    id: "tierra",
    nombre: "Tierra",
    nombreIngles: "Earth",
    diametro: "12,756 km",
    masa: "5.97 × 10²⁴ kg",
    densidad: "5.52 g/cm³",
    gravedad: "9.81 m/s²",
    distanciaSol: "149.6 millones km (1 UA)",
    periodoOrbital: "365.25 días",
    periodoRotacion: "23h 56m 4s",
    temperatura: "-89°C a 58°C (promedio 15°C)",
    atmosfera: ["Nitrógeno (78%)", "Oxígeno (21%)", "Argón", "Dióxido de carbono"],
    lunas: 1,
    lunasNotables: ["Luna"],
    datosCuriosos: [
      "Es el único planeta conocido con vida",
      "71% de su superficie está cubierta por agua",
      "Tiene un campo magnético protector",
      "Su atmósfera nos protege de radiación y meteoritos",
      "Es el planeta más denso del sistema solar"
    ],
    exploracion: [
      "Observación constante desde el espacio",
      "Estación Espacial Internacional",
      "Satélites de observación terrestre",
      "Misiones de exploración lunar"
    ],
    color: "from-blue-400 to-green-500",
    imagen: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9432de46-a5a5-489a-9fad-728a6c84e9c2.png"
  },
  {
    id: "marte",
    nombre: "Marte",
    nombreIngles: "Mars",
    diametro: "6,792 km",
    masa: "6.39 × 10²³ kg",
    densidad: "3.93 g/cm³",
    gravedad: "3.71 m/s²",
    distanciaSol: "227.9 millones km",
    periodoOrbital: "687 días terrestres",
    periodoRotacion: "24h 37m",
    temperatura: "-87°C a -5°C",
    atmosfera: ["Dióxido de carbono (95%)", "Nitrógeno (3%)", "Argón (1.6%)"],
    lunas: 2,
    lunasNotables: ["Fobos", "Deimos"],
    datosCuriosos: [
      "Es conocido como el 'Planeta Rojo' por su color",
      "Tiene el volcán más grande del sistema solar (Monte Olimpo)",
      "Posee casquetes polares de hielo",
      "Un día marciano dura casi igual que uno terrestre",
      "Puede tener agua líquida subterránea"
    ],
    exploracion: [
      "Viking 1 y 2 (1976)",
      "Mars Pathfinder (1997)",
      "Rovers Spirit y Opportunity",
      "Curiosity (2012-presente)",
      "Perseverance (2021-presente)"
    ],
    color: "from-red-500 to-orange-600",
    imagen: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/277fde44-2573-47f3-a613-5489510ba022.png"
  },
  {
    id: "jupiter",
    nombre: "Júpiter",
    nombreIngles: "Jupiter",
    diametro: "142,984 km",
    masa: "1.90 × 10²⁷ kg",
    densidad: "1.33 g/cm³",
    gravedad: "24.79 m/s²",
    distanciaSol: "778.5 millones km",
    periodoOrbital: "11.9 años terrestres",
    periodoRotacion: "9h 55m",
    temperatura: "-108°C (superficie de nubes)",
    atmosfera: ["Hidrógeno (89%)", "Helio (10%)", "Metano", "Amoníaco"],
    lunas: 95,
    lunasNotables: ["Ío", "Europa", "Ganimedes", "Calisto"],
    datosCuriosos: [
      "Es el planeta más grande del sistema solar",
      "Tiene la Gran Mancha Roja, una tormenta gigante",
      "Actúa como 'aspiradora cósmica' protegiendo planetas internos",
      "Podría contener más agua que todos los océanos de la Tierra",
      "Ganimedes, su luna, es más grande que Mercurio"
    ],
    exploracion: [
      "Pioneer 10 y 11 (1973-1974)",
      "Voyager 1 y 2 (1979)",
      "Galileo (1995-2003)",
      "Juno (2016-presente)"
    ],
    color: "from-orange-400 to-red-500",
    imagen: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a3eda8e6-026d-4111-bfe1-282c5e1a17c7.png"
  },
  {
    id: "saturno",
    nombre: "Saturno",
    nombreIngles: "Saturn",
    diametro: "120,536 km",
    masa: "5.68 × 10²⁶ kg",
    densidad: "0.69 g/cm³",
    gravedad: "10.44 m/s²",
    distanciaSol: "1,432 millones km",
    periodoOrbital: "29.5 años terrestres",
    periodoRotacion: "10h 39m",
    temperatura: "-139°C (superficie de nubes)",
    atmosfera: ["Hidrógeno (96%)", "Helio (3%)", "Metano", "Amoníaco"],
    lunas: 146,
    lunasNotables: ["Titán", "Encelado", "Mimas", "Rea"],
    datosCuriosos: [
      "Tiene el sistema de anillos más espectacular",
      "Es menos denso que el agua",
      "Titán tiene atmósfera densa y lagos de metano",
      "Sus anillos están hechos principalmente de hielo",
      "Encelado tiene géiseres de agua"
    ],
    exploracion: [
      "Pioneer 11 (1979)",
      "Voyager 1 y 2 (1980-1981)",
      "Cassini-Huygens (2004-2017)"
    ],
    color: "from-yellow-200 to-amber-400",
    imagen: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/57237874-6aad-4038-ad75-93b9918a9d59.png"
  },
  {
    id: "urano",
    nombre: "Urano",
    nombreIngles: "Uranus",
    diametro: "51,118 km",
    masa: "8.68 × 10²⁵ kg",
    densidad: "1.27 g/cm³",
    gravedad: "8.69 m/s²",
    distanciaSol: "2,867 millones km",
    periodoOrbital: "84 años terrestres",
    periodoRotacion: "17h 14m",
    temperatura: "-197°C",
    atmosfera: ["Hidrógeno (83%)", "Helio (15%)", "Metano (2%)"],
    lunas: 27,
    lunasNotables: ["Miranda", "Ariel", "Umbriel", "Titania", "Oberón"],
    datosCuriosos: [
      "Rota de lado, con un eje inclinado 98°",
      "Es el planeta más frío del sistema solar",
      "Fue el primer planeta descubierto con telescopio",
      "Tiene anillos débiles y verticales",
      "Su color azul-verde se debe al metano en su atmósfera"
    ],
    exploracion: [
      "Voyager 2 (1986) - única nave que lo ha visitado",
      "Observaciones con telescopio Hubble"
    ],
    color: "from-cyan-400 to-blue-500",
    imagen: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6926b672-51fa-459a-b4b4-9de16dfcbd68.png"
  },
  {
    id: "neptuno",
    nombre: "Neptuno",
    nombreIngles: "Neptune",
    diametro: "49,528 km",
    masa: "1.02 × 10²⁶ kg",
    densidad: "1.64 g/cm³",
    gravedad: "11.15 m/s²",
    distanciaSol: "4,515 millones km",
    periodoOrbital: "165 años terrestres",
    periodoRotacion: "16h 6m",
    temperatura: "-201°C",
    atmosfera: ["Hidrógeno (80%)", "Helio (19%)", "Metano (1%)"],
    lunas: 16,
    lunasNotables: ["Tritón", "Nereida"],
    datosCuriosos: [
      "Tiene los vientos más rápidos del sistema solar (2,100 km/h)",
      "Fue descubierto mediante cálculos matemáticos",
      "Tritón orbita en dirección retrógrada",
      "Es el planeta más alejado del Sol",
      "Completa una órbita cada 165 años terrestres"
    ],
    exploracion: [
      "Voyager 2 (1989) - única nave que lo ha visitado",
      "Observaciones con telescopios terrestres y espaciales"
    ],
    color: "from-blue-600 to-indigo-700",
    imagen: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6bd32797-ab09-48fa-9262-a7080128f6f9.png"
  }
];

export const solData = {
  nombre: "El Sol",
  tipo: "Estrella enana amarilla (G2V)",
  diametro: "1,392,700 km",
  masa: "1.99 × 10³⁰ kg",
  temperatura: {
    nucleo: "15,000,000°C",
    superficie: "5,778°C",
    corona: "1,000,000°C"
  },
  composicion: ["Hidrógeno (73%)", "Helio (25%)", "Elementos pesados (2%)"],
  edad: "4.6 mil millones de años",
  datosCuriosos: [
    "Contiene el 99.86% de toda la masa del sistema solar",
    "Cada segundo convierte 600 millones de toneladas de hidrógeno en helio",
    "Su luz tarda 8 minutos y 20 segundos en llegar a la Tierra",
    "Podríamos colocar 1.3 millones de Tierras dentro del Sol",
    "Tiene un campo magnético muy poderoso"
  ],
  imagen: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c6ca1198-cdd5-4b64-bf14-d26826f52ff0.png"
};