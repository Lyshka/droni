import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

import { Logo } from "../../assets/img/Logo";
import { Loupe } from "../../assets/img/Loupe";
import { Person } from "../../assets/img/Person";
import { Purchase } from "../../assets/img/Purchase";
import { Link } from "react-router-dom";
import { HeaderMobileUp } from "./HeaderMobileUp";
import { useState } from "react";

export const HeaderUp = () => {
  const [open, setOpen] = useState(false);

  const toggleOpenMenu = () => {
    setOpen((prv) => !prv);
  };

  return (
    <>
      <header className="h-16 flex justify-center items-center w-full">
        <div className="container-main flex items-center justify-between 2xl:gap-5">
          {open ? (
            <IoClose
              onClick={toggleOpenMenu}
              className="w-8 h-8 text-[#303233] 2xl:hidden block"
            />
          ) : (
            <RxHamburgerMenu
              onClick={toggleOpenMenu}
              className="w-8 h-8 text-[#303233] 2xl:hidden block"
            />
          )}

          <Link to={"/"}>
            <Logo className="2xl:h-auto 2xl:w-auto h-[26px] w-[100px]" />
          </Link>
          <div className="flex items-center justify-between 2xl:w-full">
            <nav className="2xl:block hidden">
              <ul className="flex items-center gap-6">
                <li className="header-top-li">Camera Drones</li>
                <li className="header-top-li">Handheld</li>
                <li className="header-top-li">Specialized</li>
                <li className="header-top-li">Explore</li>
                <li className="header-top-li">Support</li>
                <li className="header-top-li">Where to Buy</li>
              </ul>
            </nav>

            <div className="flex items-center gap-5">
              <Loupe className="2xl:block hidden" />
              <Person className="2xl:block hidden" />
              <button className="px-[13px] h-8 rounded-full 2xl:bg-[#0070D5] bg-black/[0.04] 2xl:border-none border border-black/80 flex items-center gap-[9px] btn-heder-top-gridient">
                <Purchase className="w-3 h-3 2xl:text-white text-black/80" />
                <span className="2xl:text-white text-black/80 text-sm leading-[14px] tracking-[-0.28px]">
                  Buy
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <HeaderMobileUp open={open} />
    </>
  );
};
