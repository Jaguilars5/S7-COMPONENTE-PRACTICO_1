import type { HeroContent } from "../types/landing";
import heroBg from "../assets/img/iglesia-de-zaruma.jpg";


export const heroContent: HeroContent = {
  badgeText: "Zaruma, El Oro - Ecuador",
  titleParts: ["Zaruma", ", la Sultana de El Oro"],
  description:
    "Una de las ciudades más antiguas del Ecuador, declarada Patrimonio Cultural del Ecuador y Ciudad de Interés Turístico Nacional. Arquitectura colonial, minería histórica, cascadas imponentes y la calidez de su gente le esperan en este paraíso cultural y natural.",
  bgImage: heroBg,
  stats: [
    { value: "+400", label: "Años de Historia" },
    { value: "5", label: "Tours Disponibles" },
    { value: "10-24", label: "Temperatura °C" },
    { value: "4.9", label: "Calificación", hasStar: true },
  ],
};
