export interface Hotel {
  id: string;
  name: string;
  address: string;
  /** Teléfono fijo convencional (prefijo 07) */
  phone: string;
  /** Teléfono móvil para WhatsApp (prefijo 09) */
  whatsapp?: string;
  priceRange: string;
  style: string;
  featured?: boolean;
  image?: string;
  mapsUrl?: string;
}
