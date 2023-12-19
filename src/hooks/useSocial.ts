import { useEffect, useState } from "react";
import { newAxios } from "../utils/newAxios";
import { TypeSocial } from "../types/ISocial";

export const useSocials = () => {
  const [socials, setSocials] = useState<Array<TypeSocial>>([
    {
      acf: {
        img: 0,
        url: "",
      },
      id: 0,
    },
  ]);

  const getSocials = async () => {
    const { data } = await newAxios.get<Array<TypeSocial>>(
      "/wp-json/wp/v2/social"
    );

    setSocials(data);
  };

  useEffect(() => {
    getSocials();
  }, []);

  return socials;
};
