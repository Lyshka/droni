import { useEffect, useState } from "react";
import { newAxios } from "../utils/newAxios";
import { ISocial } from "../types/ISocial";

export const useSocials = () => {
  const [socials, setSocials] = useState<ISocial>({
    social: [
      {
        acf: {
          img: 0,
          url: "",
        },
        id: 0,
      },
    ],
  });

  const getSocials = async () => {
    const { data } = await newAxios.get<ISocial>("/wp-json/wp/v2/social");

    setSocials(data);
  };

  useEffect(() => {
    getSocials();
  }, [socials]);

  return {
    socials: socials.social,
  };
};
