export interface Hotel {
  id: string;
  name: string;
  address: string;
  phone: string;
  priceRange: string;
  style: string;
  featured?: boolean;
  image?: string;
  mapsUrl?: string;
}
