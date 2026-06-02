import type { Tour } from "../types/landing";


export const tours: Tour[] = [
  {
    id: "tour-historical",
    title: "Tour Centro Histórico",
    description:
      "Recorrido guiado por las 81 hectáreas del Centro Histórico, visitando la Plaza de la Independencia, el Santuario Virgen del Carmen y 201 casas patrimoniales con balcones de madera.",
    duration: "3 horas",
    price: 25,
    maxPeople: 15,
    type: "historical",
  },
  {
    id: "tour-gastronomic",
    title: "Tour Gastronómico",
    description:
      "Degustación del tradicional tigrillo zarumeño (Patrimonio Cultural Inmaterial), café de altura, bolones de maní, humitas, tamales y otros platos típicos de la región.",
    duration: "4 horas",
    price: 35,
    maxPeople: 10,
    type: "gastronomic",
  },
  {
    id: "tour-mining",
    title: "Experiencia Minera El Sexmo",
    description:
      "Visita guiada a la mina El Sexmo, una de las más antiguas de Sudamérica. Ingrese 500 metros bajo tierra, use indumentaria de minero y conozca la historia del oro desde la colonia.",
    duration: "3 horas",
    price: 30,
    maxPeople: 12,
    type: "mining",
  },
  {
    id: "tour-nature",
    title: "Aventura en Cascadas",
    description:
      "Caminata ecológica las cascadas de Chimbo, Chaca Cápac y Chorro Blanco. Observación de aves, mariposas y deportes extremos en caídas de agua de hasta 100 metros.",
    duration: "5 horas",
    price: 40,
    maxPeople: 8,
    type: "nature",
  },
  {
    id: "tour-cultural",
    title: "Tour Zaruma Completo",
    description:
      "Experiencia integral que combina historia minera, gastronomía, cascadas y miradores. Incluye visita al Cerro El Calvario y la colina La Libertad con vistas panorámicas únicas.",
    duration: "8 horas",
    price: 60,
    maxPeople: 10,
    type: "cultural",
  },
];
