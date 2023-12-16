import { usePhoto } from "../../hooks/usePhoto";
import { useVideoShooting } from "../../hooks/useVideoShooting";
import { Accardion } from "../Accardion/Accardion";
import { Title } from "../Title";
import { VideoShootingMobile } from "./VideoShootingMobile";

export const VideoShooting = () => {
  const { description, descriptionSecond, img, remark, title, titleSecond } =
    useVideoShooting();
  const Img = usePhoto(img, "w-full");

  return (
    <>
      <Accardion title={title}>
        <VideoShootingMobile />
      </Accardion>
      <section className="2xl:flex hidden justify-center items-center">
        {Img}

        <div className="absolute container-main">
          <div className="flex justify-center items-center flex-col gap-2 w-[520px]">
            <div className="flex flex-col gap-10 border-b border-opacity-[40] border-white">
              <Title title={title} description={description} />

              <div className="pb-5">
                <p className="text-lg font-semibold">{titleSecond}</p>

                <p className="text-xs leading-5 text-[#eee]">
                  {descriptionSecond}
                </p>
              </div>
            </div>

            <p
              className="text-sm leading-[22px] text-[#BBBBBB]"
              dangerouslySetInnerHTML={{ __html: remark }}
            />
          </div>
        </div>
      </section>
    </>
  );
};
