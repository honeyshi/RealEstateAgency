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
