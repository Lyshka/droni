import { usePhoto } from "../../hooks/usePhoto";
import { useVideoShooting } from "../../hooks/useVideoShooting";

export const VideoShootingMobile = () => {
  const { description, descriptionSecond, imgMobile, remark, titleSecond } =
    useVideoShooting();
  const Img = usePhoto(imgMobile);

  return (
    <section className="py-[30px] flex flex-col gap-4">
      <div className="px-4 text-center">
        <p
          className="text-sm leading-6 text-[#E3E3E3]"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <p
          className="text-xs text-[#EEE]"
          dangerouslySetInnerHTML={{ __html: remark }}
        />
      </div>

      {Img}

      <div className="px-4">
        <p className="text-base font-semibold">{titleSecond}</p>
        <p
          className="text-sm leading-6 text-[#E3E3E3]"
          dangerouslySetInnerHTML={{ __html: descriptionSecond }}
        />
      </div>
    </section>
  );
};
