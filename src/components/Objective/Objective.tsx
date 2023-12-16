import { useState } from "react";

import { Title } from "../Title";
import { ListObjective } from "./ListObjective";
import { ObjectiveModal } from "../Modal/ObjectiveModal";
import { useObjective } from "../../hooks/useObjective";
import { usePhoto } from "../../hooks/usePhoto";
import { Accardion } from "../Accardion/Accardion";
import { ObjectiveMobile } from "./ObjectiveMobile";

export const Objective = () => {
  const { description, img, list, modal, title } = useObjective();
  const Img = usePhoto(img, "h-[590px] w-full object-cover");
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((prv) => !prv);
  };

  return (
    <>
      <Accardion title={title}>
        <ObjectiveMobile />
      </Accardion>
      <section className="2xl:flex hidden justify-center items-center bg-objective relative z-[1]">
        <div className="container-main pb-10">
          <div className="flex relative">
            {Img}
            <Title
              className="absolute right-0 w-[417px] top-1/2 -translate-y-1/2"
              title={title}
              description={description}
            />
          </div>

          <ListObjective objective={list} toggleModal={toggleModal} />
        </div>

        <ObjectiveModal modal={modal} toggleModal={toggleModal} open={open} />
      </section>
    </>
  );
};
