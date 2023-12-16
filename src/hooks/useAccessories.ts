import { useEffect, useState } from "react";
import { newAxios } from "../utils/newAxios";
import { IAccessories, TypeAccessories } from "../types/IAccessories";

export const useAccessories = () => {
  const [accessories, setAccessories] = useState<TypeAccessories>({
    description_accessories: "",
    img_accessories: 0,
    list_accessories: [
      {
        description: "",
        img: 0,
        title: "",
      },
    ],
    title_accessories: "",
  });

  const getAccessories = async () => {
    const { data } = await newAxios.get<IAccessories>(
      "/wp-json/wp/v2/pages/26"
    );

    setAccessories(data.acf);
  };

  useEffect(() => {
    getAccessories();
  }, []);

  return {
    description: accessories.description_accessories,
    img: accessories.img_accessories,
    list: accessories.list_accessories,
    title: accessories.title_accessories,
  };
};
