import { usePhoto } from "../../hooks/usePhoto";
import { useReliability } from "../../hooks/useReliability";

export const ReliabilityMobile = () => {
  const { description, imgMobile, list } = useReliability();
  const ImgMobile = usePhoto(imgMobile);

  return (
    <section className="py-[30px] flex flex-col gap-4 text-sm text-[#E3E3E3] leading-6 text-center">
      <p
      className="px-4"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {ImgMobile}

      <ul className="flex flex-col gap-2 px-4">
        {list.map(({ name }, idx) => (
          <li key={name}>
            {idx + 1}.{name}
          </li>
        ))}
      </ul>
    </section>
  );
};
