import { useEffect, useState } from "react";
import { newAxios } from "../utils/newAxios";
import { IAbout, TypeAbout } from "../types/IAbout";

export const useAbout = () => {
  const [about, setAbout] = useState<TypeAbout>({
    description_about: "",
    img_about: 0,
    img_mobile_about: 0,
    subtitle_about: "",
    title_about: "",
    video_about: {
      file: 0,
      img: 0,
    },
  });

  const getAbout = async () => {
    const { data } = await newAxios.get<IAbout>("/wp-json/wp/v2/pages/26");

    setAbout(data.acf);
  };

  useEffect(() => {
    getAbout();
  }, []);

  return {
    description: about.description_about,
    img: about.img_about,
    img_mobile: about.img_mobile_about,
    subtitle: about.subtitle_about,
    title: about.title_about,
    video: about.video_about,
  };
};
