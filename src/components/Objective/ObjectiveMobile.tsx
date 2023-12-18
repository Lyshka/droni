import { useObjective } from "../../hooks/useObjective";
import { usePhoto } from "../../hooks/usePhoto";
import { AccardionText } from "../Accardion/AccardionText";

export const ObjectiveMobile = () => {
  const { description, img_mobile, list, modal } = useObjective();
  const Img = usePhoto(img_mobile, "w-[calc(100%+32px)]");

  return (
    <div className="py-[30px] flex flex-col gap-4">
      <AccardionText description={description} />

      <div className="bg-[#067ba4] object-cover">{Img}</div>

      <div className="px-4 grid grid-cols-2 relative">
        {list.map(({ title }) => (
          <p
            key={title}
            className="list-objective-mobile-condition-bar p-2 text-base h-[70px] flex justify-center items-center text-center leading-8 border-b border-[#565656]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        ))}
        <div className="absolute h-full w-[1px] bg-[#565656] left-1/2 -translate-x-1/2">
          &nbsp;
        </div>
      </div>

      <div className="px-4 flex flex-col items-center gap-5">
        {modal.list.map(({ description, title }) => (
          <div
            key={title}
            className="flex justify-center items-center flex-col gap-4 border-b border-[#565656] py-[30px]"
          >
            <p className="text-lg font-semibold">{title}</p>

            <p
              className="text-center leading-6 text-sm text-[#e3e3e3]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        ))}

        <p
          className="text-xs text-center text-[#bbb]"
          dangerouslySetInnerHTML={{ __html: modal.description }}
        />
      </div>
    </div>
  );
};
