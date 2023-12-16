import { useSlide } from "../../utils/useSlide";
import { Slide } from "./Slide";
import { TitleSlide } from "./TitleSlide";
import { useSliders } from "../../hooks/useSlider";
import clsx from "clsx";

export const Slider = () => {
  const { sliders } = useSliders();
  const {
    handleNext,
    handlePrev,
    slide,
    handleHover,
    handleTouchMove,
    handleTouchStart,
  } = useSlide(sliders);

  return (
    <section className="flex justify-center items-center bg-[#1E212F]">
      <div className="container-main py-10 flex flex-col gap-10 relative">
        <ul className="justify-center items-center font-inter text-xl leading-7 uppercase gap-24 2xl:flex hidden">
          {sliders.map((slideInfo, idx) => (
            <TitleSlide
              key={slideInfo.title}
              slideInfo={slideInfo}
              id={idx}
              callback={handleHover}
              slide={slide}
            />
          ))}
        </ul>

        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className="flex mx-auto overflow-hidden w-full"
        >
          {sliders.map((slideInfo) => (
            <Slide key={slideInfo.title} slideInfo={slideInfo} slide={slide} />
          ))}

          <div className="justify-between items-center absolute top-1/2 -translate-y-1/2 w-full 2xl:flex hidden">
            <img
              src={
                "https://skupka-dronov.ru/wp-content/uploads/2023/12/leftArrowSliderMain-1.webp"
              }
              alt="arrowLeft"
              onClick={handlePrev}
              className="opacity-50 transition-all duration-500 h-[40px] w-[15px] cursor-pointer"
            />
            <img
              src={
                "https://skupka-dronov.ru/wp-content/uploads/2023/12/leftArrowSliderMain-1.webp"
              }
              alt="arrowRight"
              onClick={handleNext}
              className="rotate-180 opacity-50 transition-all duration-500 h-[40px] w-[15px] cursor-pointer"
            />
          </div>
        </div>

        <div className="2xl:hidden flex justify-center items-center gap-6">
          {sliders.map((_, idx) => (
            <div
              key={idx}
              className={clsx(
                "w-6 h-[2px]",
                slide === idx ? "bg-[#3ca4f1]" : "bg-[#444]"
              )}
            >
              &nbsp;
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
