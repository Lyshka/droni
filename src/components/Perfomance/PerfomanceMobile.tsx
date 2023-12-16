import { usePerfomance } from "../../hooks/usePerfomance";
import { usePhoto } from "../../hooks/usePhoto";

export const PerfomanceMobile = () => {
  const { description, imgMobile } = usePerfomance();
  const ImgMobile = usePhoto(imgMobile);

  return (
    <section>
      {ImgMobile}

      <p
        dangerouslySetInnerHTML={{ __html: description }}
        className="text-sm text-center leading-6 text-[#E3E3E3] px-4 py-[30px]"
      />
    </section>
  );
};
