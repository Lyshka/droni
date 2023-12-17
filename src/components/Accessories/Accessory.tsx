import { useState } from "react";

import { usePhoto } from "../../hooks/usePhoto";
import clsx from "clsx";

interface IAccessory {
  accessory: {
    img: number;
    title: string;
    description: string;
  };
}

export const Accessory = ({ accessory }: IAccessory) => {
  const [open, setOpen] = useState(false);

  const { description, img, title } = accessory;
  const Img = usePhoto(img, "h-60 object-contain");

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div
      onMouseEnter={handleOpenModal}
      className="flex flex-col gap-4 items-center relative 2xl:border-none border-b border-[#565656] 2xl:pb-0 pb-[30px] last:border-none"
    >
      <p className="text-xl font-semibold text-center">{title}</p>
      {Img}
      <p
        className="2xl:hidden block text-sm text-[#E3E3E3] leading-6 text-center"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div
        onMouseLeave={handleCloseModal}
        className={clsx(
          "2xl:flex hidden absolute h-60 bg-[#2e323c] bg-opacity-[0.85] bottom-0 w-[calc(100%)] justify-center items-center px-4 transition-all duration-500 z-[1]",
          open ? "opacity-100 scale-100" : "opacity-0 scale-75"
        )}
      >
        <p
          className="leading-5 text-xs text-[#eee] text-center"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};
