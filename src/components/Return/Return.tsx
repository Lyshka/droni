import { usePhoto } from "../../hooks/usePhoto";
import { useReturn } from "../../hooks/useReturn";
import { Accardion } from "../Accardion/Accardion";
import { Title } from "../Title";
import { ReturnMobile } from "./ReturnMobile";

export const Return = () => {
  const { description, img, title } = useReturn();
  const Img = usePhoto(img, "w-full");

  return (
    <>
      <Accardion title={title}>
        <ReturnMobile />
      </Accardion>

      <section className="2xl:flex hidden justify-center items-center">
        {Img}
        <div className="container-main absolute flex items-end justify-end">
          <Title
            className="w-[450px]"
            title={title}
            description={description}
          />
        </div>
      </section>
    </>
  );
};
