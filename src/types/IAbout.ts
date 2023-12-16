export type TypeAbout = {
  title_about: string;
  subtitle_about: string;
  img_about: number;
  img_mobile_about: number;
  description_about: string;
  video_about: {
    img: number;
    file: number;
  };
};

export interface IAbout {
  acf: TypeAbout;
}
