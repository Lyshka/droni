import { useEffect, useState } from "react";
import { newAxios } from "../utils/newAxios";
import { ISlider, TypeSlider } from "../types/ISlider";

export const useSliders = () => {
  const [sliders, setSliders] = useState<TypeSlider>({
    slider: [
      {
        img: 0,
        text: "",
        title: "",
      },
    ],
  });

  const getSliders = async () => {
    const { data } = await newAxios.get<ISlider>("/wp-json/wp/v2/pages/26");

    setSliders(data.acf);
  };

  useEffect(() => {
    getSliders();
  }, []);

  return { sliders: sliders.slider };
};
