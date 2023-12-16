import clsx from "clsx";

interface ITitle {
  title: string;
  description: string;
  className?: string;
}

export const Title = ({ title, description, className }: ITitle) => {
  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      <h2 className="text-[28px] leading-7 font-semibold uppercase">{title}</h2>

      <p
        className="leading-5 text-sm"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};
