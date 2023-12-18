import { LogoGray } from "../../assets/img/LogoGray";
import { useSocials } from "../../hooks/useSocial";
import { SocialFooter } from "./SocialFooter";

export const Footer = () => {
  const { socials } = useSocials();

  return (
    <footer className="bg-[#272727] py-8 flex justify-center items-center">
      <div className="container-main">
        <div className="pb-4 border-b border-[#6c7073] flex items-center justify-between">
          <div className="flex items-center gap-10">
            <LogoGray />

            <ul className="flex gap-6 items-center footer-li">
              <li>Who We Are</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Dealer Portal</li>
              <li>RoboMaster</li>
              <li>DJI Automotive</li>
            </ul>
          </div>

          <div className="flex gap-6 items-center">
            {socials?.map(({ acf, id }) => {
              console.log(acf);
              return <SocialFooter acf={acf} key={id} />;
            })}
          </div>
        </div>

        <div></div>
      </div>
    </footer>
  );
};
