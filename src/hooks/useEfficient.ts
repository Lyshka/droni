import { useEffect, useState } from "react";
import { IEfficient, TypeEfficient } from "../types/IEfficient";
import { newAxios } from "../utils/newAxios";

export const useEfficient = () => {
  const [efficient, setEfficient] = useState<TypeEfficient>({
    description_efficient: "",
    img_efficient: 0,
    title_efficient: "",
  });

  const getEfficient = async () => {
    const { data } = await newAxios.get<IEfficient>("/wp-json/wp/v2/pages/26");

    setEfficient(data.acf);
  };

  useEffect(() => {
    getEfficient();
  }, []);

  return {
    description: efficient.description_efficient,
    title: efficient.title_efficient,
    img: efficient.img_efficient,
  };
};
