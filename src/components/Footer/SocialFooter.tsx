import { Link } from "react-router-dom";
import { usePhoto } from "../../hooks/usePhoto";

interface ISocialFooter {
  acf: {
    img: number;
    url: string;
  };
}

export const SocialFooter = ({ acf }: ISocialFooter) => {
  const { img, url } = acf;
  const Img = usePhoto(img);

  return (
    <Link
      target="_blank"
      to={url}
      className="flex justify-center items-center w-8 h-8 transition-all duration-500 rounded-full hover:bg-black/20"
    >
      {Img}
    </Link>
  );
};
