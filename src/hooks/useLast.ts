import { useEffect, useState } from "react";
import { newAxios } from "../utils/newAxios";
import { ILast, TypeLast } from "../types/ILast";

export const useLast = () => {
  const [last, setLast] = useState<TypeLast>({
    button_last: "",
    buttons_last: [
      {
        name: "",
      },
    ],
    description_last: "",
    feature_last: [
      {
        title: "",
      },
    ],
    img_last: 0,
    list_last: [
      {
        img: 0,
        subtitle: "",
        title: "",
      },
    ],
    title_last: "",
  });

  const getLast = async () => {
    const { data } = await newAxios.get<ILast>("/wp-json/wp/v2/pages/26");

    setLast(data.acf);
  };

  useEffect(() => {
    getLast();
  }, []);

  return {
    button: last.button_last,
    buttons: last.buttons_last,
    description: last.description_last,
    feature: last.feature_last,
    img: last.img_last,
    list: last.list_last,
    title: last.title_last,
  };
};
