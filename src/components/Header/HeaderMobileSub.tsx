import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import clsx from "clsx";

interface IHeaderMobileSub {
  title: string;
}

export const HeaderMobileSub = ({ title }: IHeaderMobileSub) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prv) => !prv);
  };
  return (
    <>
      <div className="header-top-li-mobile" onClick={toggleOpen}>
        {title}{" "}
        <IoIosArrowDown
          className={clsx(
            "transition-all duration-500",
            open ? "rotate-180" : "rotate-0"
          )}
        />
      </div>
      <ul
        className={clsx(
          "pl-4 flex flex-col gap-4 overflow-hidden",
          open ? "h-full pt-4" : "h-0"
        )}
      >
        <li className="header-top-li-mobile">Enterprise</li>
        <li className="header-top-li-mobile">Agriculture</li>
        <li className="header-top-li-mobile">DJI Automotive</li>
      </ul>
    </>
  );
};
