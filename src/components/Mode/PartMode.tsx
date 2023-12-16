import { usePhoto } from "../../hooks/usePhoto";
import { ListMode } from "../../types/IMode";

interface IPartMode {
  part: ListMode;
}

export const PartMode = ({ part }: IPartMode) => {
  const { description, img, title } = part;
  const Img = usePhoto(img);

  return (
    <div className="flex flex-col gap-4 items-center 2xl:w-[450px] w-full">
      <div className="flex gap-4 items-center 2xl:flex-col flex-col-reverse">
        {Img}
        <p className="2xl:text-xl text-lg 2xl:font-normal font-semibold">
          {title}
        </p>
      </div>

      <p className="2xl:text-[#eee] text-[#E3E3E3] leading-6 text-sm text-center">
        {description}
      </p>
    </div>
  );
};
