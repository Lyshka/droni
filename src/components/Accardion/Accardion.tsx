import clsx from "clsx";
import { ReactNode, useState } from "react";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";

interface IAccardion {
  children: ReactNode;
  title: string;
}

export const Accardion = ({ children, title }: IAccardion) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prv) => !prv);
  };

  return (
    <section className="bg-black border-t border-b border-[#393939] 2xl:hidden block">
      <div onClick={toggleOpen} className="container-main">
        <div className="flex items-center justify-between">
          <h3
            className={clsx(
              "w-fit uppercase text-lg transition-all duration-500",
              open ? "text-white" : "text-[#aaa]"
            )}
          >
            {title}
          </h3>
          {open ? (
            <HiOutlineMinus className="w-6 h-6 text-[#44a8f2]" />
          ) : (
            <HiOutlinePlus className="w-6 h-6 text-[#44a8f2]" />
          )}
        </div>
      </div>

      <div
        className={clsx(
          "grid grid-rows-[0fr] overflow-hidden transition-all duration-500 bg-[#1a1b20]",
          open && "grid-rows-[1fr]"
        )}
      >
        <div className="min-h-0">{children}</div>
      </div>
    </section>
  );
};
