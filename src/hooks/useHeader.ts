import { useEffect, useState } from "react";
import { newAxios } from "../utils/newAxios";
import { IHeader, TypeHeader } from "../types/IHeder";

export const useHeader = () => {
  const [header, setHeader] = useState<TypeHeader>({
    img_header: 0,
    title_header: "",
  });

  const getHeader = async () => {
    const { data } = await newAxios.get<Array<IHeader>>(
      "/wp-json/wp/v2/setting_main"
    );

    setHeader(data[1].acf);
  };

  useEffect(() => {
    getHeader();
  }, []);

  console.log(header);

  return {
    img: header.img_header,
    title: header.title_header,
  };
};
