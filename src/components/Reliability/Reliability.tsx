import { usePhoto } from "../../hooks/usePhoto";
import { useReliability } from "../../hooks/useReliability";
import { Accardion } from "../Accardion/Accardion";
import { Title } from "../Title";
import { ReliabilityMobile } from "./ReliabilityMobile";

export const Reliability = () => {
  const { description, img, list, title } = useReliability();
  const Img = usePhoto(img, "w-full");

  return (
    <>
      <Accardion title={title}>
        <ReliabilityMobile />
      </Accardion>
      <section className="2xl:flex hidden justify-center items-center w-full relative">
        {Img}

        <span className="text-sm absolute left-[18%] top-[26%]">
          {list[0]?.name}
        </span>
        <span className="text-sm absolute top-[45%] left-[38%]">
          {list[1]?.name}
        </span>
        <span className="text-sm absolute bottom-[30%] left-[38%]">
          {list[2]?.name}
        </span>
        <span className="text-sm absolute left-[22%] bottom-[40%]">
          {list[3]?.name}
        </span>

        <div className="absolute container-main flex items-end justify-end">
          <div className="w-[500px]">
            <Title title={title} description={description} />
          </div>
        </div>
      </section>
    </>
  );
};
