import clsx from "clsx";

interface ITitleSlide {
  id: number;
  slideInfo: {
    title: string;
  };
  slide: number;
  callback: (id: number) => void;
}

export const TitleSlide = ({ id, slide, slideInfo, callback }: ITitleSlide) => {
  const { title } = slideInfo;

  return (
    <li
      onMouseOver={() => callback(id)}
      className={clsx(
        "slider-main-li border-b border-transparent cursor-pointer",
        slide === id && "border-b-[#44a8f2] text-[#44a8f2]"
      )}
    >
      {title}
    </li>
  );
};
