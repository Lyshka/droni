import { usePhoto } from "../../hooks/usePhoto";
import { useReturn } from "../../hooks/useReturn";

export const ReturnMobile = () => {
  const { imgMobile, description } = useReturn();
  const ImgMobile = usePhoto(imgMobile);

  return (
    <section className="pb-[30px] flex flex-col gap-10">
      {ImgMobile}
      <p className="px-4 text-center text-sm leading-6 text-[#E3E3E3]" dangerouslySetInnerHTML={{ __html: description }} />
    </section>
  );
};
