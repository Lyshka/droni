type ListSense = {
  title: string;
};

export type TypeSense = {
  title_sense: string;
  description_sense: string;
  img_sense: number;
  list_sense: Array<ListSense>;
};

export interface ISense {
  acf: TypeSense;
}
