export interface QuizQuestion {
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

export const datosCuriosos = [
  "El sistema solar tiene aproximadamente 4.6 mil millones de años",
  "Si el Sol fuera del tamaño de una pelota de fútbol, la Tierra sería del tamaño de una canica",
  "Un año en Plutón equivale a 248 años terrestres",
  "Venus rota tan lentamente que un día venusiano dura más que un año venusiano",
  "Júpiter tiene más de 95 lunas conocidas",
  "Los anillos de Saturno están hechos principalmente de hielo y rocas",
  "Urano rueda por su órbita debido a su extrema inclinación",
  "En Marte, el atardecer es azul",
  "La Gran Mancha Roja de Júpiter es una tormenta más grande que la Tierra",
  "Encelado, luna de Saturno, tiene géiseres de agua que brotan de su superficie"
];

export const preguntasQuiz: QuizQuestion[] = [
  {
    pregunta: "¿Cuál es el planeta más grande del sistema solar?",
    opciones: ["Saturno", "Júpiter", "Neptuno", "Urano"],
    respuestaCorrecta: 1,
    explicacion: "Júpiter es el planeta más grande, con un diámetro de 142,984 km. Podríamos colocar más de 1,300 Tierras dentro de Júpiter."
  },
  {
    pregunta: "¿Qué planeta es conocido como el 'Planeta Rojo'?",
    opciones: ["Venus", "Marte", "Mercurio", "Júpiter"],
    respuestaCorrecta: 1,
    explicacion: "Marte es llamado el 'Planeta Rojo' debido al óxido de hierro en su superficie, que le da su característico color rojizo."
  },
  {
    pregunta: "¿Cuál es el planeta más caliente del sistema solar?",
    opciones: ["Mercurio", "Venus", "Marte", "Tierra"],
    respuestaCorrecta: 1,
    explicacion: "Venus es el más caliente con 462°C en superficie, debido a su atmósfera densa de CO2 que crea un efecto invernadero extremo."
  },
  {
    pregunta: "¿Qué planeta tiene los anillos más espectaculares?",
    opciones: ["Júpiter", "Saturno", "Urano", "Neptuno"],
    respuestaCorrecta: 1,
    explicacion: "Saturno tiene el sistema de anillos más visible y espectacular, compuesto principalmente de hielo y partículas rocosas."
  },
  {
    pregunta: "¿Cuánto tiempo tarda la luz del Sol en llegar a la Tierra?",
    opciones: ["4 minutos", "8 minutos 20 segundos", "12 minutos", "15 minutos"],
    respuestaCorrecta: 1,
    explicacion: "La luz del Sol tarda aproximadamente 8 minutos y 20 segundos en recorrer los 150 millones de kilómetros hasta la Tierra."
  },
  {
    pregunta: "¿Cuál es el planeta más frío del sistema solar?",
    opciones: ["Neptuno", "Plutón", "Urano", "Saturno"],
    respuestaCorrecta: 2,
    explicacion: "Urano es el planeta más frío con temperaturas de -197°C, incluso más frío que Neptuno que está más alejado del Sol."
  },
  {
    pregunta: "¿Qué luna de Saturno tiene atmósfera densa y lagos de metano?",
    opciones: ["Encelado", "Mimas", "Titán", "Rea"],
    respuestaCorrecta: 2,
    explicacion: "Titán, la luna más grande de Saturno, tiene una atmósfera densa y ciclos meteorológicos con lluvia y lagos de metano líquido."
  },
  {
    pregunta: "¿Cuántas lunas tiene Marte?",
    opciones: ["0", "1", "2", "4"],
    respuestaCorrecta: 2,
    explicacion: "Marte tiene dos pequeñas lunas: Fobos y Deimos, que son probablemente asteroides capturados por la gravedad marciana."
  }
];

export const exploracicionEspacial = [
  {
    mision: "Sputnik 1",
    año: "1957",
    pais: "URSS",
    logro: "Primer satélite artificial"
  },
  {
    mision: "Apollo 11",
    año: "1969",
    pais: "EE.UU.",
    logro: "Primer alunizaje tripulado"
  },
  {
    mision: "Voyager 1 y 2",
    año: "1977",
    pais: "EE.UU.",
    logro: "Exploración de planetas exteriores"
  },
  {
    mision: "Mars Pathfinder",
    año: "1997",
    pais: "EE.UU.",
    logro: "Primer rover en Marte"
  },
  {
    mision: "Cassini-Huygens",
    año: "2004",
    pais: "EE.UU./ESA",
    logro: "Exploración de Saturno y Titán"
  },
  {
    mision: "Perseverance",
    año: "2021",
    pais: "EE.UU.",
    logro: "Búsqueda de vida pasada en Marte"
  }
];

export const sistemaSolarEstadisticas = {
  edad: "4.6 mil millones de años",
  planetas: 8,
  planetsEnanos: 5,
  lunas: "Más de 200",
  asteroides: "Más de 1 millón catalogados",
  cometas: "Trillones en la Nube de Oort",
  limiteHeliosfera: "≈120 UA",
  velocidadOrbitalTierra: "29.78 km/s",
  masaTotalPlanetas: "≈2.66 × 10²⁷ kg",
  porcentajeMasaSol: "99.86%"
};