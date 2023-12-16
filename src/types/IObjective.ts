type ObjectiveList = {
  title: string;
};

type ModalList = {
  title: string;
  description: string;
};

export type TypeObjective = {
  title_objective: string;
  description_objective: string;
  img_objective: number;
  img_objective_mobile: number;
  modal_objective: {
    description: string;
    list: Array<ModalList>;
  };
  list_objective: Array<ObjectiveList>;
};

export interface IObjective {
  acf: TypeObjective;
}
