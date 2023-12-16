import { useEffect, useState } from "react";
import { newAxios } from "../utils/newAxios";
import { IProjector, TypeProjector } from "../types/IProjector";

export const useProjector = () => {
  const [projector, setProjector] = useState<TypeProjector>({
    description_projector: "",
    img_mobile_projector: 0,
    img_projector: 0,
    title_projector: "",
  });

  const getProjector = async () => {
    const { data } = await newAxios.get<IProjector>("/wp-json/wp/v2/pages/26");

    setProjector(data.acf);
  };

  useEffect(() => {
    getProjector();
  }, []);

  return {
    description: projector.description_projector,
    imgMobile: projector.img_mobile_projector,
    img: projector.img_projector,
    title: projector.title_projector,
  };
};
