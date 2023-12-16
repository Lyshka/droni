import clsx from "clsx";
import { useState, useEffect } from "react";

import { HeaderMobileSub } from "./HeaderMobileSub";

interface IHeaderMobile {
  open: boolean;
}

export const HeaderMobileUp = ({ open }: IHeaderMobile) => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "bg-white text-black/80 transition-all duration-1000 overflow-hidden fixed w-full  z-[3]",
        open ? "h-[calc(100vh-64px)]" : "h-0",
        open && scroll > 0 ? "top-0 h-screen" : "top-16"
      )}
    >
      <ul className="container-main flex flex-col gap-8">
        <li className="header-top-li-mobile">Camera Drones</li>
        <li className="header-top-li-mobile">Handheld</li>
        <li>
          <HeaderMobileSub title="Specialized" />
        </li>
        <li>
          <HeaderMobileSub title="Explore" />
        </li>
        <li className="header-top-li-mobile">Support</li>
        <li className="header-top-li-mobile">Where to Buy</li>
      </ul>
    </nav>
  );
};
