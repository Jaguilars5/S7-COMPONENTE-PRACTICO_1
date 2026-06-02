import type { Attraction } from "../types/landing";
import centroHistorico from "../assets/img/CENTRO-HISTORICO-1.jpg";
import minasSexmo from "../assets/img/MINAS-1.jpg";
import miradores from "../assets/img/MIRADORES-1.jpg";
import cascadas from "../assets/img/cascadas-1.jpg";
import iglesiaDeZaruma from "../assets/img/iglesia-de-zaruma.jpg";


export const attractions: Attraction[] = [
  {
    id: "centro-historico",
    title: "Centro Histórico",
    description:
      "Declarado Patrimonio Cultural de Ecuador en 1990. Comprende 81 hectáreas con 201 casas patrimoniales en calles Bolívar, 9 de Octubre, Sucre, San Francisco, Colón y otras, con balcones, ventanas y arcos que nos transportan a siglos pasados.",
    icon: "Landmark",
    image: centroHistorico,
  },
  {
    id: "minas-sexmo",
    title: "Minas de El Sexmo",
    description:
      "Una de las minas más antiguas de América del Sur, data de la época colonial. Rehabilitada para el turismo, se puede ingresar hasta 500 metros bajo tierra. Abierta de 08:30 a 15:30 con entrada gratuita y guías locales.",
    icon: "Hammer",
    image: minasSexmo,
  },
  {
    id: "santuario-carmen",
    title: "Santuario Virgen del Carmen",
    description:
      "Construido en 1930 con influencia gótica y mudéjar, su altar mayor de madera está bañado en pan de oro y plata. La virgen del Carmen es la patrona de Zaruma desde 1820 y sus fiestas son del 14 al 22 de julio.",
    icon: "Building2",
    image: iglesiaDeZaruma,
  },
  {
    id: "cascadas",
    title: "Cascadas de Zaruma",
    description:
      "Cascada de Chimbo a 3.600 m de altura, Chaca Cápac, Chorro Blanco y El Molino en la parroquia Salvias. Caídas libres de hasta 100 metros de agua cristalina rodeadas de exuberante vegetación.",
    icon: "Mountain",
    image: cascadas,
  },
  {
    id: "miradores",
    title: "Miradores Naturales",
    description:
      "Desde el mirador de la piscina municipal, la iglesia San Francisco y la colina La Libertad se disfruta una vista panorámica de Zaruma, el río Calera, río Amarillo y Portovelo.",
    icon: "Eye",
    image: miradores,
  },
];
