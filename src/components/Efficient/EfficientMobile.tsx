import { useEfficient } from "../../hooks/useEfficient";
import { usePhoto } from "../../hooks/usePhoto";
import { checkLink } from "../../utils/checkLink";
import { AccardionText } from "../Accardion/AccardionText";

export const EfficientMobile = () => {
  const { description, img } = useEfficient();
  const Img = usePhoto(img, "px-4");
  const link = usePhoto(img, "px-4", true);

  return (
    <div className="py-[30px] flex flex-col items-center gap-4">
      <AccardionText description={description} />

      {Img}

      <a
        target="_blank"
        href={checkLink(link)}
        className="pb-1 border-b w-fit border-[#44a8f2] text-sm"
      >
        Click to enlarge
      </a>
    </div>
  );
};
