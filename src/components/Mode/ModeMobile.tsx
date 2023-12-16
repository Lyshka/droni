import { useMode } from "../../hooks/useMode";
import { PartMode } from "./PartMode";

export const ModeMobile = () => {
  const { description, list } = useMode();

  return (
    <section className="px-4 py-[30px] flex flex-col gap-10">
      <p
        className="text-[#e3e3e3] text-sm text-center"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className="flex flex-col gap-4">
        {list.map((part) => (
          <PartMode part={part} />
        ))}
      </div>
    </section>
  );
};
