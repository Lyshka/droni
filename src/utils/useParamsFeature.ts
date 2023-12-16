import { useParams } from "react-router-dom";

export const useParamsFeature = () => {
  const { id } = useParams<{ id: string }>();
  return id?.replace("!", "").toLowerCase().replace(" ", "-");
};
