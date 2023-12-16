import { usePhoto } from "../../hooks/usePhoto";

interface ISlide {
  slideInfo: {
    img: number;
    text: string;
    title: string;
  };
  slide: number;
}

export const Slide = ({ slideInfo, slide }: ISlide) => {
  const { img, text, title } = slideInfo;
  const Img = usePhoto(img);

  return (
    <div
      style={{ transform: `translateX(-${slide * 100}%)` }}
      className="flex 2xl:self-center flex-col items-center flex-shrink-0 transition-all duration-500 w-full 2xl:gap-0 gap-10"
    >
      <p className="text-2xl uppercase font-semibold 2xl:hidden block">{title}</p>

      {Img}

      <div
        className="slider-main-text 2xl:-mt-20 2xl:text-center text-left"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};
