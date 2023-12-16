export const checkLink = (link: string | JSX.Element) => {
  return typeof link === "string" ? link : "";
};
