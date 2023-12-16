import { useState } from "react";
import { Play } from "../../assets/img/Play";
import { VideoAbout } from "./VideoAbout";
import { useAbout } from "../../hooks/useAbout";
import { usePhoto } from "../../hooks/usePhoto";

export const AboutMain = () => {
  const { description, img, img_mobile, subtitle, title, video } = useAbout();
  const Img = usePhoto(
    img,
    "h-[calc(100vh-128px)] w-full object-cover absolute inset-0 top-32 2xl:block hidden"
  );
  const ImgMobile = usePhoto(img_mobile, "2xl:hidden block w-full");
  const imgCover = usePhoto(video.img);

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prv) => !prv);
  };

  return (
    <>
      <section className="bg-[#191A1F] 2xl:h-[calc(100vh-128px)] h-full flex-1">
        {Img}

        {ImgMobile}

        <div className="flex 2xl:mt-0 -mt-[150px] justify-center items-center relative z-[1] h-full">
          <div className="container-main 2xl:pl-[65px] 2xl:pt-[145px] 2xl:pb-5 flex flex-col 2xl:justify-between 2xl:items-start items-center justify-center 2xl:gap-0 gap-5 h-full">
            <div className="inline-flex 2xl:text-left text-center flex-col 2xl:gap-[35px] gap-5">
              <h1 className="uppercase 2xl:block hidden text-6xl font-gotham">
                {title}
              </h1>

              <h1 className="uppercase font-medium 2xl:hidden block text-[42px]">
                {title}
              </h1>
              <p className="2xl:text-[26px] text-xl font-light 2xl:leading-[26px] leading-5 uppercase 2xl:font-inter font-gotham text-[#e3e3e3]">
                {subtitle}
              </p>
            </div>

            <div
              onClick={toggleOpen}
              className="inline-flex flex-col items-center 2xl:self-start gap-5 cursor-pointer relative group"
            >
              {imgCover}
              <Play className="absolute group-hover:opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
            </div>

            <p
              className="2xl:text-center text-left text-sm 2xl:leading-5 leading-6 text-[#D5D5D5]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </section>

      <VideoAbout open={open} toggleOpen={toggleOpen} video={video} />
    </>
  );
};
