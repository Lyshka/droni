import { useMode } from "../../hooks/useMode";
import { Accardion } from "../Accardion/Accardion";
import { Title } from "../Title";
import { ModeMobile } from "./ModeMobile";
import { PartMode } from "./PartMode";

export const Mode = () => {
  const { description, list, title } = useMode();

  return (
    <>
      <Accardion title={title}>
        <ModeMobile />
      </Accardion>
      <section className="2xl:flex hidden justify-center items-center py-10 bg-[#1a1a1a]">
        <div className="container-main flex flex-col gap-10">
          <Title className="text-center" title={title} description={description} />

          <div className="flex gap-10 justify-center">
            {list.map((part) => (
              <PartMode key={part.title} part={part} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
