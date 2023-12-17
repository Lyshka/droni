import { usePhoto } from "../../hooks/usePhoto";
import { List } from "../../types/ILast";

interface IPart {
  part: List;
}

export const Part = ({ part }: IPart) => {
  const { img, subtitle, title } = part;
  const Img = usePhoto(img, "2xl:w-20 w-16 2xl:h-20 h-16");

  return (
    <div className="flex group flex-col items-center text-center gap-4 text-[#303233]">
      {Img}
      <p className="2xl:text-2xl text-xl 2xl:leading-7 leading-5 font-semibold">
        {title}
      </p>
      <p className="group-hover:underline 2xl:text-base text-sm">{`${subtitle} >`}</p>
    </div>
  );
};
