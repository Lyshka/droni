type Slide = {
  title: string;
  img: number;
  text: string;
};

export type TypeSlider = {
  slider: Array<Slide>;
};

export interface ISlider {
  acf: TypeSlider;
}
