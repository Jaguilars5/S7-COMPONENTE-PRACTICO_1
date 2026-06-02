import casasPatrimoniales from "../assets/img/CASAS-PATRIMONIALES-1.jpg";
import minasSexmo from "../assets/img/MINAS-1.jpg";
import cascadas from "../assets/img/cascadas-1.jpg";
import elTigrillo from "../assets/img/el-tigrillo.jpg";
import type { Activity } from "../types/landing";

export const activities: Activity[] = [
  {
    id: "hiking",
    title: "Senderismo a Cascadas",
    description:
      "Explore senderos rodeados de naturaleza virgen hacia cascadas como Chimbo, Chaca Cápac y Chorro Blanco. Disfrute de caminatas, cabalgatas y observación de aves y mariposas.",
    icon: "Mountain",
    image: cascadas,
  },
  {
    id: "mining-tour",
    title: "Tour Minero El Sexmo",
    description:
      "Recorra 500 metros de túnel en una de las minas más antiguas de Sudamérica. Use indumentaria de minero y conozca la historia de la extracción del oro desde la época colonial.",
    icon: "Hammer",
    image: minasSexmo,
  },
  {
    id: "coffee",
    title: "Ruta del Café y Tigrillo",
    description:
      "Deguste el café zarumeño acompañado del tradicional tigrillo, plato típico Patrimonio Cultural Inmaterial del Ecuador, creado originalmente para los mineros.",
    icon: "Coffee",
    image: elTigrillo,
  },
  {
    id: "photography",
    title: "Fotografía Patrimonial",
    description:
      "Capture la esencia de Zaruma a través de sus calles empedradas, balcones de madera tallada y fachadas galantes que ofrecen postales únicas en cada esquina.",
    icon: "Camera",
    image: casasPatrimoniales,
  },
];
