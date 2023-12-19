import { useEffect, useState } from "react";
import { newAxios } from "../utils/newAxios";
import { IFooter, TypeFooter } from "../types/IFooter";

export const useFooter = () => {
  const [footer, setFooter] = useState<TypeFooter>({
    description_footer: "",
    img_footer: 0,
  });

  const getFooter = async () => {
    const { data } = await newAxios.get<Array<IFooter>>(
      "/wp-json/wp/v2/setting_main"
    );

    setFooter(data[0].acf);
  };

  useEffect(() => {
    getFooter();
  }, []);

  return {
    description: footer.description_footer,
    img: footer.img_footer,
  };
};
