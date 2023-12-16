import { useEffect, useState } from "react";
import { newAxios } from "../utils/newAxios";
import { IObjective, TypeObjective } from "../types/IObjective";

export const useObjective = () => {
  const [objective, setObjective] = useState<TypeObjective>({
    description_objective: "",
    img_objective: 0,
    img_objective_mobile: 0,
    list_objective: [
      {
        title: "",
      },
    ],
    modal_objective: {
      description: "",
      list: [
        {
          description: "",
          title: "",
        },
      ],
    },
    title_objective: "",
  });

  const getObjective = async () => {
    const { data } = await newAxios.get<IObjective>("/wp-json/wp/v2/pages/26");

    setObjective(data.acf);
  };

  useEffect(() => {
    getObjective();
  }, []);

  return {
    description: objective.description_objective,
    title: objective.title_objective,
    img: objective.img_objective,
    list: objective.list_objective,
    modal: objective.modal_objective,
    img_mobile: objective.img_objective_mobile,
  };
};
