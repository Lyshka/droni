interface IHeaderMobileDown {
  open: boolean;
}

export const HeaderMobileDown = ({ open }: IHeaderMobileDown) => {
  return (
    <>
      {open && (
        <div className="sticky top-16 z-[2]">
          <ul className="absolute bg-[#303233] container-main py-0 flex flex-col w-full">
            <li className="header-down-li-mobile">Specs</li>
            <li className="header-down-li-mobile">Video</li>
            <li className="header-down-li-mobile">Downloads</li>
            <li className="header-down-li-mobile">FAQ</li>
          </ul>
        </div>
      )}
    </>
  );
};
