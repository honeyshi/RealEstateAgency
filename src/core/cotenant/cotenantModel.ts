import { Range } from 'react-input-range';

export interface CotenantListItem {
  author_age: string;
  author_sex: string;
  desired_max_age: string;
  desired_min_age: string;
  desired_sex: string;
  district: { name: string };
  id: string;
  image: string;
}

export interface CotenantDescription {
  author: {
    name: string;
  };
  author_age: string;
  author_sex: string;
  desired_max_age: string;
  desired_min_age: string;
  desired_sex: string;
  district: { name: string };
  image: string;
  phone: string;
  text: string;
}

export interface CotenantEdit {
  age: string;
  ownSex: number;
  district: number;
  description: string;
  cotenantSex: number;
  cotenantAge: Range | number;
  phone: string;
  image: string;
}

export interface CotenantMy {
  id: string;
  author_age: string;
  author_sex: string;
  desired_max_age: number;
  desired_min_age: number;
  desired_sex: string;
  district: { id: number };
  image: string;
  phone: string;
  text: string;
}
