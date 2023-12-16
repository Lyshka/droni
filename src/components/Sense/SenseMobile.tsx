import { usePhoto } from "../../hooks/usePhoto";
import { useSense } from "../../hooks/useSense";

export const SenseMobile = () => {
  const { description, list } = useSense();
  const Img = usePhoto(84);

  return (
    <div className="py-[30px] flex flex-col gap-7">
      <p
        className="text-center leading-6 text-sm px-4"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {Img}
      <div className="flex flex-col px-4">
        {list.map(({ title }, idx) => (
          <p className="text-center leading-6 text-sm">
            {idx + 1}.
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </p>
        ))}
      </div>
    </div>
  );
};
