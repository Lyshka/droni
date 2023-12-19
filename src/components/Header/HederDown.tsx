import clsx from "clsx";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

import { HeaderMobileDown } from "./HeaderMobileDown";
import { useHeader } from "../../hooks/useHeader";

export const HederDown = () => {
  const { title } = useHeader();

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prv) => !prv);
  };

  return (
    <>
      <header className="flex h-16 justify-center items-center bg-[#232425] bg-opacity-90 sticky top-0 z-[2]">
        <nav className="container-main flex justify-between items-center">
          <span className="2xl:text-sm text-xs 2xl:leading-normal leading-[18px]">
            {title}
          </span>

          <IoIosArrowDown
            className={clsx(
              "text-[#e6e6e6] 2xl:hidden block",
              open ? "rotate-180" : "rotate-0"
            )}
            onClick={toggleOpen}
          />

          <ul className="items-center gap-8 text-sm 2xl:flex hidden">
            <li>Specs</li>
            <li>Video</li>
            <li>Downloads</li>
            <li>FAQ</li>
            {/* <li>
              <button className="bg-[#0070d5] px-[16px] py-[7px] text-sm leading-[14px] rounded-sm">
                Buy Now
              </button>
            </li> */}
          </ul>

          <button className="bg-[#0070d5] 2xl:px-[16px] px-2 2xl:py-[7px] py-2 2xl:text-sm text-xs 2xl:leading-[14px] leading-3 rounded-sm 2xl:hidden block min-w-[75px]">
            Buy Now
          </button>
        </nav>
      </header>
      <HeaderMobileDown open={open} />
    </>
  );
};
