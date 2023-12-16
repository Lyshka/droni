import clsx from "clsx";

type ObjectiveModalList = {
  title: string;
  description: string;
};

interface IObjectiveModal {
  modal: {
    description: string;
    list: Array<ObjectiveModalList>;
  };
  toggleModal: () => void;
  open: boolean;
}

export const ObjectiveModal = ({
  modal,
  toggleModal,
  open,
}: IObjectiveModal) => {
  const { description, list } = modal;

  return (
    <div
      onMouseLeave={toggleModal}
      className={clsx(
        "absolute w-full h-full bg-[#292837] bg-opacity-90 inset-0 flex flex-col justify-center items-center transition-all duration-500",
        open ? "opacity-100 z-[2]" : "opacity-0 z-[-1]"
      )}
    >
      <div className="w-[1000px] flex flex-col  gap-20">
        <div className="grid grid-cols-2 gap-x-36 gap-y-10">
          {list.map(({ description, title }) => (
            <div key={title} className="flex flex-col gap-10 text-center">
              <h3 className="pb-5 text-2xl border-b border-white/30">
                {title}
              </h3>
              <div
                className="leading-6"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          ))}
        </div>

        <div
          className="text-[#eee] text-sm text-center"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};
