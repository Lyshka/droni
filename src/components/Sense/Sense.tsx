import { usePhoto } from "../../hooks/usePhoto";
import { useSense } from "../../hooks/useSense";
import { Accardion } from "../Accardion/Accardion";
import { Title } from "../Title";
import { SenseMobile } from "./SenseMobile";

export const Sense = () => {
  const { description, img, list, title } = useSense();

  const Img = usePhoto(img, "w-full");
  const ImgDron = usePhoto(75);
  const ImgSlide = usePhoto(70, "w-20 relative top-2");
  const ImgSlide2 = usePhoto(71, "w-20 relative top-2");
  const ImgSlide3 = usePhoto(72, "w-14 relative -top-2");
  const ImgSlide4 = usePhoto(73, "w-14 relative -top-2");
  const ImgSlide5 = usePhoto(74, "w-20 relative -top-2");

  return (
    <>
      <Accardion title={title}>
        <SenseMobile />
      </Accardion>

      <section className="2xl:flex hidden relative justify-center items-center">
        {Img}

        <div className="absolute container-main top-8">
          <Title
            className="text-center"
            title={title}
            description={description}
          />

          <div className="relative">
            {ImgDron}

            <div className="absolute top-[6%] right-[37%] flex items-start gap-1 text-sm">
              <span
                className="text-right"
                dangerouslySetInnerHTML={{ __html: list[0]?.title }}
              />
              {ImgSlide}
            </div>
            <div className="absolute bottom-[42%] left-[6%] flex items-start gap-1 text-sm">
              <span
                className="text-right"
                dangerouslySetInnerHTML={{ __html: list[1]?.title }}
              />
              {ImgSlide2}
            </div>
            <div className="absolute bottom-[25%] left-[9%] flex items-end gap-1 text-sm">
              <span
                className="text-right"
                dangerouslySetInnerHTML={{ __html: list[2]?.title }}
              />
              {ImgSlide3}
            </div>
            <div className="absolute bottom-[25%] right-[42%] flex items-end gap-1 text-sm">
              <span
                className="text-right"
                dangerouslySetInnerHTML={{ __html: list[3]?.title }}
              />
              {ImgSlide4}
            </div>
            <div className="absolute bottom-[22%] right-[11%] flex items-end gap-1 text-sm">
              {ImgSlide5}
              <span
                className="text-right"
                dangerouslySetInnerHTML={{ __html: list[4]?.title }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
