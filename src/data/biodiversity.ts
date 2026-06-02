import type { BiodiversityContent } from "../types/landing";


export const biodiversityContent: BiodiversityContent = {
  badgeText: "Ecosistemas Andinos",
  title: "Biodiversidad y Clima",
  subtitle:
    "Ubicado en las faldas de la Cordillera de Vizcaya, Zaruma es un santuario natural de especies únicas y microclimas agradables.",
  introTitle: "El Entorno Natural",
  introText:
    "El cantón se asienta sobre relieves montañosos con una amplia cobertura boscosa y cuencas fluviales cristalinas. Esto facilita un turismo de naturaleza activo: observación de aves y mariposas, senderismo ecológico y natación en cascadas imponentes de hasta 100 metros de caída.",
  features: [
    {
      icon: "Thermometer",
      title: "Clima Privilegiado",
      desc: "Agradable y fresco, oscila entre 10°C y 24°C todo el año.",
    },
    {
      icon: "CloudSun",
      title: "Microclimas",
      desc: "Valles templados y páramos andinos en perfecta armonía.",
    },
    {
      icon: "Map",
      title: "Ubicación",
      desc: "Cordillera de Vizcaya y Cordillera de Chilla.",
    },
  ],
  flora: {
    title: "Flora del Altiplano",
    icon: "Leaf",
    desc: "Gracias a su relieve interandino, Zaruma alberga una asombrosa variedad de cultivos andinos, plantas ornamentales y medicinales de montaña.",
    items: [
      {
        name: "Orquídeas y Bromelias",
        desc: "Flores exóticas de intensos colores que adornan los troncos de bosques nublados.",
      },
      {
        name: "Guayacán Amarillo",
        desc: "Árboles majestuosos de madera preciosa cuyos florecimientos tiñen de dorado las colinas.",
      },
      {
        name: "Café de Altura",
        desc: "Arbustos de cafeto arábigo que cubren las faldas montañosas con sus aromáticos frutos.",
      },
      {
        name: "Maderas Nobles",
        desc: "Laurel, cedro, amarillo, canelo y colorado abundan en las cuencas forestales del cantón.",
      },
    ],
  },
  fauna: {
    title: "Fauna Silvestre",
    icon: "Bird",
    desc: "Los valles andinos y la cercanía al trópico costero crean un refugio ideal para mamíferos, coloridas aves y fauna silvestre protegida.",
    items: [
      {
        name: "Aves Exóticas",
        desc: "Colibríes de múltiples especies, pericos, tucán andino pechigris de montaña, tordos y carpinteros.",
      },
      {
        name: "Mamíferos del Bosque",
        desc: "Guatusas, armadillos acorazados, zorros andinos, ardillas de cola espesa y conejos de monte.",
      },
      {
        name: "Reptiles Inofensivos",
        desc: "Coloridas lagartijas de roca, iguanas verdes del valle, culebra verde y serpientes de montaña.",
      },
      {
        name: "Mariposas",
        desc: "Cientos de especies diurnas de colores tornasolados polinizan los senderos ecológicos de las cascadas.",
      },
    ],
  },
};
