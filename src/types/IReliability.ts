type ListReliability = {
  name: string;
};

export type TypeReliability = {
  title_reliability: string;
  description_reliability: string;
  img_reliability: number;
  img_mobile_reliability: number;
  list_reliability: Array<ListReliability>;
};

export interface IReliability {
  acf: TypeReliability;
}
