interface ImageUrl {
  url: string;
  id: number;
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
  favorite_apartments: Array<Object>;
}

export interface OneAdvertismentModel {
  address: string;
  author: {
    name: string;
  };
  deposit: number;
  price: number;
  description: string;
  type: number;
  gps_point: string;
  street: string;
  house_number: string;
  contact_phone: string;
  house_floors: number;
  apartment_floor: number;
  apartment_area: number;
  district: string;
  furniture: string;
  with_animals: number;
  with_kids: number;
  images: ImageUrl[];
  metro: string;
  payment_condition: string;
  rooms: number;
  renovation: number;
  favorite_apartments: Array<Object>;
}
