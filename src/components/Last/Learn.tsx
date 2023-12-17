interface ILearn {
  title: string;
}

export const Learn = ({ title }: ILearn) => {
  return (
    <section className="2xl:h-[170px] 2xl:py-0 py-4 2xl:bg-[#26282f] bg-[#3c435b] flex justify-center items-center w-full group">
      <p className="pb-1 2xl:text-2xl text-lg uppercase border-b-2 2xl:border-white group-hover:text-[#44a8f2] group-hover:border-[#44a8f2] transition-all duration-500 border-[#44a8f2]">
        {`${title} >`}
      </p>
    </section>
  );
};
