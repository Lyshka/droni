import { useLast } from "../../hooks/useLast";
import { usePhoto } from "../../hooks/usePhoto";
import { Learn } from "./Learn";
import { Part } from "./Part";

export const Last = () => {
  const { button, buttons, description, feature, img, list, title } = useLast();
  const Img = usePhoto(img, "w-60 h-60");

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="2xl:h-screen w-full flex flex-col items-center">
        <Learn title={button} />
        <div className="2xl:pt-32 pt-20 2xl:pb-16 pb-10 flex flex-col gap-6 items-center container-main text-[#303233] border-b border-[#c2c7cc]">
          <p className="text-5xl font-semibold uppercase">{title}</p>
          {Img}

          <ul className="flex 2xl:w-[600px] w-full gap-x-4 gap-y-2 flex-wrap items-center justify-center">
            {feature.map(({ title }) => (
              <li
                key={title}
                className="2xl:text-base text-xs 2xl:p-2 p-1 leading-4 text-[#303233] rounded border-2 border-[#616366] font-semibold whitespace-nowrap"
              >
                {title}
              </li>
            ))}
          </ul>

          <p>{description}</p>

          <div className="flex 2xl:flex-row flex-col justify-center gap-4 w-full">
            <button className="bg-[#3c3e40] text-white px-16 btn-last-gridient h-11">
              {buttons[0]?.name}
            </button>
            <button className="px-16 border-[#3c3e40] border-2 hover:text-white btn-last-gridient h-11">
              {buttons[1]?.name}
            </button>
          </div>
        </div>
      </div>
      <div className="2xl:py-16 p-4 pt-10 grid 2xl:grid-cols-3 2xl:gap-0 gap-16 grid-cols-1 container-main">
        {list.map((part) => (
          <div key={part.title}>
            <Part part={part} />
          </div>
        ))}
      </div>
    </section>
  );
};
