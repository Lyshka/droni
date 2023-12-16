import { useEfficient } from "../../hooks/useEfficient";
import { usePhoto } from "../../hooks/usePhoto";
import { Accardion } from "../Accardion/Accardion";
import { Title } from "../Title";
import { EfficientMobile } from "./EfficientMobile";

export const Efficient = () => {
  const { description, img, title } = useEfficient();
  const Img = usePhoto(img);

  return (
    <>
      <Accardion title={title}>
        <EfficientMobile />
      </Accardion>
      <section className="2xl:flex hidden justify-center items-center bg-[#1e212f]">
        <div className="container-main py-10 flex flex-col justify-center items-center gap-10 text-center">
          <Title title={title} description={description} />

          {Img}
        </div>
      </section>
    </>
  );
};
