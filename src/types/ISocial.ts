type TypeSocial = {
  id: number;
  acf: {
    url: string;
    img: number;
  };
};

export interface ISocial {
  social: Array<TypeSocial>;
}
