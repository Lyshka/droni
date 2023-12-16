import { useEffect, useState } from "react";
import { IPhoto } from "../types/IPhoto";
import { newAxios } from "../utils/newAxios";

export const usePhoto = (id: number, className?: string, link?: boolean) => {
  const [photo, setPhoto] = useState<IPhoto>({
    alt_text: "",
    title: { rendered: "" },
    guid: { rendered: "" },
  });

  useEffect(() => {
    const getPhoto = async () => {
      const { data } = await newAxios.get<IPhoto>(`/wp-json/wp/v2/media/${id}`);

      setPhoto(data);
    };

    getPhoto();
  }, [id]);

  if (link) {
    return photo.guid.rendered;
  }

  return (
    <img
      src={photo.guid.rendered}
      alt={photo.alt_text}
      title={photo.title.rendered}
      className={className}
    />
  );
};
