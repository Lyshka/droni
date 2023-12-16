export type ListMode = {
  title: string;
  description: string;
  img: number;
};

export type TypeMode = {
  title_mode: string;
  description_mode: string;
  list_mode: Array<ListMode>;
};

export interface IMode {
  acf: TypeMode;
}
