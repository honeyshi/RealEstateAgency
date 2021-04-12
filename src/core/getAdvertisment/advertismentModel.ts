interface ImageUrl {
  url: string;
}

export interface IAdvertisment {
  header: string;
  address: string;
  district: string;
  metro: string;
  price: string;
  id: string;
  images: ImageUrl[];
  deposit: string;
  payment_condition: string;
  with_animals: number;
  with_kids: number;
  status: string;
}
