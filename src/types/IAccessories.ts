type ListAccessories = {
  title: string;
  description: string;
  img: number;
};

export type TypeAccessories = {
  title_accessories: string;
  description_accessories: string;
  img_accessories: number;
  list_accessories: Array<ListAccessories>;
};

export interface IAccessories {
  acf: TypeAccessories;
}
