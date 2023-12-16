import { useEffect, useState } from "react";
import { newAxios } from "../utils/newAxios";
import { IMode, TypeMode } from "../types/IMode";

export const useMode = () => {
  const [mode, setMode] = useState<TypeMode>({
    description_mode: "",
    list_mode: [
      {
        description: "",
        img: 0,
        title: "",
      },
    ],
    title_mode: "",
  });

  const getMode = async () => {
    const { data } = await newAxios.get<IMode>("/wp-json/wp/v2/pages/26");

    setMode(data.acf);
  };

  useEffect(() => {
    getMode();
  }, []);

  return {
    description: mode.description_mode,
    list: mode.list_mode,
    title: mode.title_mode,
  };
};
