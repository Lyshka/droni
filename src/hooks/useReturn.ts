import { useEffect, useState } from "react";
import { newAxios } from "../utils/newAxios";
import { IReturn, TypeReturn } from "../types/IReturn";

export const useReturn = () => {
  const [retur, setRetur] = useState<TypeReturn>({
    description_return: "",
    img_mobile_return: 0,
    img_return: 0,
    title_return: "",
  });

  const getReturn = async () => {
    const { data } = await newAxios.get<IReturn>("/wp-json/wp/v2/pages/26");

    setRetur(data.acf);
  };

  useEffect(() => {
    getReturn();
  }, []);

  return {
    description: retur.description_return,
    imgMobile: retur.img_mobile_return,
    img: retur.img_return,
    title: retur.title_return,
  };
};
