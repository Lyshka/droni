import { usePerfomance } from "../../hooks/usePerfomance";
import { usePhoto } from "../../hooks/usePhoto";
import { Accardion } from "../Accardion/Accardion";
import { Title } from "../Title";
import { PerfomanceMobile } from "./PerfomanceMobile";

export const Perfomance = () => {
  const { description, img, title } = usePerfomance();
  const Img = usePhoto(img, "w-full");

  return (
    <>
      <Accardion title={title}>
        <PerfomanceMobile />
      </Accardion>
      <section className="2xl:flex hidden justify-center items-end">
        {Img}
        <div className="container-main absolute flex justify-center items-center py-20">
          <Title
            className="text-center"
            title={title}
            description={description}
          />
        </div>
      </section>
    </>
  );
};
