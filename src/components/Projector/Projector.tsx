import { usePhoto } from "../../hooks/usePhoto";
import { useProjector } from "../../hooks/useProjector";
import { Accardion } from "../Accardion/Accardion";
import { Title } from "../Title";
import { ProjectorMobile } from "./ProjectorMobile";

export const Projector = () => {
  const { description, img, title } = useProjector();
  const Img = usePhoto(img, "w-full");

  return (
    <>
      <Accardion title={title}>
        <ProjectorMobile />
      </Accardion>
      <section className="2xl:flex hidden relative justify-center items-center">
        {Img}
        <div className="py-[30px] absolute top-0 flex flex-col items-center">
          <Title className="text-center" title={title} description={description} />
        </div>
      </section>
    </>
  );
};
