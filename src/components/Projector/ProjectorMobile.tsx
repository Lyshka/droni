import { usePhoto } from "../../hooks/usePhoto";
import { useProjector } from "../../hooks/useProjector";

export const ProjectorMobile = () => {
  const { imgMobile, description } = useProjector();
  const ImgMobile = usePhoto(imgMobile);

  return (
    <section>
      {ImgMobile}
      <div
        className="px-4 text-sm leading-6 text-center py-[30px]"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </section>
  );
};
