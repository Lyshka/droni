type ListFeature = {
  title: string;
};

type ListButtons = {
  name: string;
};

export type List = {
  title: string;
  subtitle: string;
  img: number;
};

export type TypeLast = {
  button_last: string;
  title_last: string;
  img_last: number;
  feature_last: Array<ListFeature>;
  description_last: string;
  buttons_last: Array<ListButtons>;
  list_last: Array<List>;
};

export interface ILast {
  acf: TypeLast;
}
