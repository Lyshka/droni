import { useAccessories } from "../../hooks/useAccessories";
import { usePhoto } from "../../hooks/usePhoto";
import { Accardion } from "../Accardion/Accardion";
import { Title } from "../Title";
import { AccessoriesMobile } from "./AccessoriesMobile";
import { Accessory } from "./Accessory";

export const Accessories = () => {
  const { description, img, list, title } = useAccessories();
  const Img = usePhoto(img, "w-full scale-125");

  return (
    <>
      <Accardion title={title}>
        <AccessoriesMobile />
      </Accardion>
      <section className="2xl:flex flex-col hidden justify-center items-center overflow-hidden">
        {Img}
        <div className="container-main flex flex-col items-center gap-10 absolute ">
          <Title title={title} description={description} />
          <div className="grid grid-cols-3 gap-10">
            {list.map((accessory) => (
              <Accessory key={accessory.title} accessory={accessory} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
