export interface FooterContact {
  email: string;
  phone: string;
  address: string;
  cantonizationInfo: string;
}

export interface FooterContent {
  brandName: string;
  brandDescription: string;
  contact: FooterContact;
}
