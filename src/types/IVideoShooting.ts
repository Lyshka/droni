export type TypeVideoShooting = {
  title_video_shooting: string;
  description_video_shooting: string;
  title_video_shooting_second: string;
  description_video_shooting_second: string;
  remark_video_shooting: string;
  img_video_shooting: number;
  img_mobile_video_shooting: number;
};

export interface IVideoShooting {
  acf: TypeVideoShooting;
}
