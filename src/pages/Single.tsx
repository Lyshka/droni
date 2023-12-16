import { useParamsFeature } from "../utils/useParamsFeature";
import { usePosts } from "../utils/usePost";

export const Single = () => {
  const id = useParamsFeature();

  const { posts, loading } = usePosts();

  const post = posts.find(({ slug }) => slug === id);

  if (loading) return null;

  return <div className="text-black">{post?.id}</div>;
};
