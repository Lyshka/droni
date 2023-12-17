import { useAccessories } from "../../hooks/useAccessories";
import { Accessory } from "./Accessory";

export const AccessoriesMobile = () => {
  const { description, list } = useAccessories();

  return (
    <section className="px-4 py-[30px] flex flex-col gap-10">
      <p className="text-[#E3E3E3] text-sm leading-4 text-center">
        {description}
      </p>

      <div className="flex flex-col gap-10">
        {list.map((accessory) => (
          <Accessory accessory={accessory} key={accessory.title} />
        ))}
      </div>
    </section>
  );
};
