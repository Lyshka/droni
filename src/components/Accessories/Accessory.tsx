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
      className="flex flex-col gap-4 items-center relative"
    >
      <p className="text-xl font-semibold text-center">{title}</p>
      {Img}
      <div
        onMouseLeave={handleCloseModal}
        className={clsx(
          "absolute h-60 bg-[#2e323c] bg-opacity-[0.85] bottom-0 w-[calc(100%)] flex justify-center items-center px-4 transition-all duration-500 z-[1]",
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
