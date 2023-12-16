import { useEffect, useState } from "react";
import { newAxios } from "../utils/newAxios";
import { ISense, TypeSense } from "../types/ISense";

export const useSense = () => {
  const [sense, setSense] = useState<TypeSense>({
    description_sense: "",
    img_sense: 0,
    list_sense: [
      {
        title: "",
      },
    ],
    title_sense: "",
  });

  const getSense = async () => {
    const { data } = await newAxios.get<ISense>("/wp-json/wp/v2/pages/26");

    setSense(data.acf);
  };

  useEffect(() => {
    getSense();
  }, []);

  return {
    description: sense.description_sense,
    img: sense.img_sense,
    list: sense.list_sense,
    title: sense.title_sense,
  };
};
