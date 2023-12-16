import { useEffect, useState } from "react";
import { newAxios } from "../utils/newAxios";
import { IPerfomance, TypePerfomance } from "../types/IPerfomance";

export const usePerfomance = () => {
  const [perfomance, setPerfomance] = useState<TypePerfomance>({
    descroption_perfomance: "",
    img_mobile_perfomance: 0,
    img_perfomance: 0,
    title_perfomance: "",
  });

  const getPerfomance = async () => {
    const { data } = await newAxios.get<IPerfomance>("/wp-json/wp/v2/pages/26");

    setPerfomance(data.acf);
  };

  useEffect(() => {
    getPerfomance();
  }, []);

  return {
    description: perfomance.descroption_perfomance,
    imgMobile: perfomance.img_mobile_perfomance,
    img: perfomance.img_perfomance,
    title: perfomance.title_perfomance,
  };
};
