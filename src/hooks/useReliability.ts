import { useEffect, useState } from "react";
import { newAxios } from "../utils/newAxios";
import { IReliability, TypeReliability } from "../types/IReliability";

export const useReliability = () => {
  const [reliability, setReliability] = useState<TypeReliability>({
    description_reliability: "",
    img_mobile_reliability: 0,
    img_reliability: 0,
    list_reliability: [
      {
        name: "",
      },
    ],
    title_reliability: "",
  });

  const getReliability = async () => {
    const { data } = await newAxios.get<IReliability>(
      "/wp-json/wp/v2/pages/26"
    );

    setReliability(data.acf);
  };

  useEffect(() => {
    getReliability();
  }, []);

  return {
    description: reliability.description_reliability,
    imgMobile: reliability.img_mobile_reliability,
    img: reliability.img_reliability,
    list: reliability.list_reliability,
    title: reliability.title_reliability,
  };
};
