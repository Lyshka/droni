interface IAccardionText {
  description: string;
}

export const AccardionText = ({ description }: IAccardionText) => {
  return (
    <p
      className="px-4 text-center leading-6 text-sm"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};
