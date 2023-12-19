import { useFooter } from "../../hooks/useFooter";
import { usePhoto } from "../../hooks/usePhoto";
import { useSocials } from "../../hooks/useSocial";
import { SocialFooter } from "./SocialFooter";

export const Footer = () => {
  const socials = useSocials();
  const { description, img } = useFooter();
  const Img = usePhoto(img);

  return (
    <footer className="bg-[#272727] pt-8 flex justify-center items-center">
      <div className="container-main flex flex-col gap-4">
        <div className="pb-4 border-b border-[#6c7073] flex 2xl:flex-row flex-col items-center justify-between 2xl:gap-0 gap-10">
          <div className="flex items-center gap-10">
            {Img}

            <ul className="2xl:flex grid grid-cols-3 gap-6 items-center footer-li">
              <li>Who We Are</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Dealer Portal</li>
              <li>RoboMaster</li>
              <li>DJI Automotive</li>
            </ul>
          </div>

          <div className="flex gap-1 items-center">
            {socials?.map(({ acf, id }) => {
              console.log(acf);
              return <SocialFooter acf={acf} key={id} />;
            })}
          </div>
        </div>

        <div
          className="text-xs leading-6 text-white/[0.85] flex justify-center items-center"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </footer>
  );
};
