import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import { useRef } from "react";

import { usePhoto } from "../../hooks/usePhoto";
import { checkLink } from "../../utils/checkLink";

interface IVideo {
  open: boolean;
  toggleOpen: () => void;
  video: {
    img: number;
    file: number;
  };
}

export const VideoAbout = ({ open, toggleOpen, video }: IVideo) => {
  const { file, img } = video;
  const fileLink = usePhoto(file, "", true);
  const imgLink = usePhoto(img, "", true);
  const ref = useRef<HTMLVideoElement>(null);

  const handleClose = () => {
    ref.current?.load();
    toggleOpen();
  };

  return (
    <section
      className={clsx(
        "h-screen w-full fixed bg-black/80 inset-0 flex justify-center items-center",
        open ? "z-10 opacity-100" : "opacity-0 -z-[1]"
      )}
    >
      <IoClose
        onClick={handleClose}
        className="absolute 2xl:top-5 top-3 2xl:right-5 right-3 2xl:h-10 h-6 2xl:w-10 w-6 text-white cursor-pointer"
      />
      <video
        ref={ref}
        controls
        poster={checkLink(imgLink)}
        className="2xl:h-[720px] h-60"
      >
        <source src={checkLink(fileLink)} type="video/webm" />
        <source src={checkLink(fileLink)} type="video/ogg" />
        <source src={checkLink(fileLink)} type="video/mp4" />
        <source src={checkLink(fileLink)} type="video/3gp" />
      </video>
    </section>
  );
};
