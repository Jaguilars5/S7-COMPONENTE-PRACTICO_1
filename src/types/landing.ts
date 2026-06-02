export interface Attraction {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  maxPeople: number;
  type: TourType;
}

export type TourType =
  | "historical"
  | "gastronomic"
  | "mining"
  | "nature"
  | "cultural";


export interface HeroStat {
  value: string;
  label: string;
  hasStar?: boolean;
}

export interface HeroContent {
  badgeText: string;
  titleParts: string[];
  description: string;
  bgImage: string;
  stats: HeroStat[];
}


export interface GastronomyCard {
  title: string;
  description: string;
  icon: string;
}

export interface GastronomyContent {
  badgeText: string;
  title: string;
  subtitle: string;
  mainImage: string;
  imageAlt: string;
  heritageTitle: string;
  heritageDesc: string;
  highlightCard: GastronomyCard;
  historyTitle: string;
  historyParagraphs: string[];
  coffeeCard: GastronomyCard;
  otherDelicaciesTitle: string;
  otherDelicacies: string[];
}


export interface BiodiversityFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface SpeciesItem {
  name: string;
  desc: string;
}

export interface BiodiversityGroup {
  title: string;
  icon: string;
  desc: string;
  items: SpeciesItem[];
}

export interface BiodiversityContent {
  badgeText: string;
  title: string;
  subtitle: string;
  introTitle: string;
  introText: string;
  features: BiodiversityFeature[];
  flora: BiodiversityGroup;
  fauna: BiodiversityGroup;
}


export interface CtaBenefit {
  icon: string;
  text: string;
}

export interface CtaContent {
  badgeText: string;
  title: string;
  description: string;
  benefits: CtaBenefit[];
  buttonText: string;
}
