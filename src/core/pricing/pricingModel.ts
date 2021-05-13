export interface PricingModel {
  name: string;
  days_duration: string;
  link: string;
  price: string;
}

interface Tarif {
  name: string;
  days_duration: string;
  price: string;
}

export interface MyPricingModel {
  created_at: string;
  expiry_date: string;
  tariff: Tarif;
}
