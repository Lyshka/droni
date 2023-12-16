import { useEffect, useState } from "react";
import { newAxios } from "../utils/newAxios";
import { IVideoShooting, TypeVideoShooting } from "../types/IVideoShooting";

export const useVideoShooting = () => {
  const [videoShooting, setVideoShooting] = useState<TypeVideoShooting>({
    description_video_shooting: "",
    description_video_shooting_second: "",
    img_mobile_video_shooting: 0,
    img_video_shooting: 0,
    remark_video_shooting: "",
    title_video_shooting: "",
    title_video_shooting_second: "",
  });

  const getVideoShooting = async () => {
    const { data } = await newAxios.get<IVideoShooting>(
      "/wp-json/wp/v2/pages/26"
    );

    setVideoShooting(data.acf);
  };

  useEffect(() => {
    getVideoShooting();
  }, []);

  return {
    description: videoShooting.description_video_shooting,
    descriptionSecond: videoShooting.description_video_shooting_second,
    imgMobile: videoShooting.img_mobile_video_shooting,
    img: videoShooting.img_video_shooting,
    remark: videoShooting.remark_video_shooting,
    title: videoShooting.title_video_shooting,
    titleSecond: videoShooting.title_video_shooting_second,
  };
};
