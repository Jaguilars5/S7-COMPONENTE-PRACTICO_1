import type { GastronomyContent } from "../types/landing";
import tigrilloImg from "../assets/img/el-tigrillo.jpg";


export const gastronomyContent: GastronomyContent = {
  badgeText: "Patrimonio Intangible",
  title: "Gastronomía Tradicional",
  subtitle:
    "Recetas ancestrales elaboradas artesanalmente que transmiten la historia y calidez de nuestro pueblo.",
  mainImage: tigrilloImg,
  imageAlt: "Tradicional Tigrillo Zarumeño con Café de Altura",
  heritageTitle: "Patrimonio Cultural",
  heritageDesc: "Declarado Patrimonio de la Nación en 2020",
  highlightCard: {
    title: "El Famoso Tigrillo Zarumeño",
    description:
      "El plato insignia de la Sultana de El Oro. Consiste en plátano verde cocido y majado, frito en sartén con huevo, queso y un toque de manteca de cerdo. Se sirve tradicionalmente con bistec de carne de res o cerdo.",
    icon: "Flame",
  },
  historyTitle: "El Origen del Nombre y el Vínculo Minero",
  historyParagraphs: [
    "Este plato y el café de altura fueron creados para los incansables trabajadores de las minas. Su alto contenido energético les permitía afrontar jornadas extenuantes bajo tierra.",
    "El nombre \"Tigrillo\" nace del proceso de majar el plátano verde con el huevo y el queso fritos. Al integrarse, el verde adquiere vetas amarillentas y motas tostadas que asemejan la hermosa piel manchada del felino nativo, el tigrillo.",
  ],
  coffeeCard: {
    title: "Café Zarumeño de Altura",
    description:
      "Cultivado en suelos volcánicos de montaña, es el acompañante indispensable. Molido y filtrado con métodos tradicionales, ofrece un aroma penetrante y cuerpo robusto inigualable.",
    icon: "Coffee",
  },
  otherDelicaciesTitle: "Otros Manjares Locales",
  otherDelicacies: [
    "Bolones de maní",
    "Humitas tiernas",
    "Tamales zarumeños",
    "Bizcochuelos",
    "Empanadas de verde",
    "Manjar de leche",
  ],
};
