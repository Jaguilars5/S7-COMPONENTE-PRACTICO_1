import type { Hotel } from "../types/hotel";

export const hotels: Hotel[] = [
  {
    id: "hostal-romeria",
    name: "Hostal Romería",
    address: "Plaza de la Independencia y 9 de Octubre",
    phone: "0992133888 / 072973618",
    priceRange: "$24 (Habitación Doble)",
    style: "Colonial Histórico",
    featured: true,
    image: "/src/assets/img/hotels/hostal-romeria.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hostal+Romeria+Zaruma",
  },
  {
    id: "hotel-roland",
    name: "Hotel Roland",
    address: "Av. Alonso de Mercadillo (Entrada a Zaruma)",
    phone: "072972800",
    priceRange: "$10 - $12 por persona",
    style: "Moderno con servicios",
    featured: false,
    image: "/src/assets/img/hotels/roland-hotel.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hotel+Roland+Zaruma",
  },
  {
    id: "hotel-zaruma-colonial",
    name: "Hotel Zaruma Colonial",
    address: "Calle Sucre",
    phone: "0997893408 / 072972742",
    priceRange: "$12 - $15 por persona",
    style: "Colonial Tradicional",
    featured: true,
    image: "/src/assets/img/hotels/hotel-zaruma-colonial.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hotel+Zaruma+Colonial+Zaruma",
  },
  {
    id: "hotel-blacio",
    name: "Hotel Blacio",
    address: "Calle Sucre y Sexmo esquina",
    phone: "0986311037",
    priceRange: "$10 - $12 por persona",
    style: "Familiar acogedor",
    featured: false,
    image: "/src/assets/img/hotels/hotel-blacio.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hotel+Blacio+Zaruma",
  },
  {
    id: "hotel-cerro-de-oro",
    name: "Hotel Cerro de Oro",
    address: "Calle Sucre",
    phone: "0959157555",
    priceRange: "$10 - $12 por persona",
    style: "Vistas Panorámicas",
    featured: false,
    image: "/src/assets/img/hotels/hotel-cerro-de-oro.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hotel+Cerro+de+Oro+Zaruma",
  },
  {
    id: "hosteria-el-jardin",
    name: "Hostería El Jardín",
    address: "Avenida Isidro Ayora, Barrio El Limoncito",
    phone: "072972706 / 0997568134",
    priceRange: "$15 - $20 por persona",
    style: "Campestre Tradicional",
    featured: true,
    image: "/src/assets/img/hotels/hosteria-el-jardin.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hosteria+El+Jardin+Zaruma",
  },
];
