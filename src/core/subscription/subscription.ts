import { Range } from 'react-input-range';

export interface Subscription {
  propertyType: string;
  districts: number[];
  rentPayment: Range | number;
  rooms: string[];
  space: Range | number;
  facilities: string[];
  livingRules: string[];
}

export interface SubsciptionGetModel {
  id: string;
  created_at: string;
  district: string;
  furniture: string;
  max_area: string;
  min_area: string;
  max_price: string;
  min_price: string;
  rooms: string;
  only_rent: number;
  type: number;
  with_animals: number;
  with_kids: number;
  without_deposit: number;
}
