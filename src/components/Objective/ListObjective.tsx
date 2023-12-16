type Objective = {
  title: string;
};

interface IListObjective {
  objective: Array<Objective>;
  toggleModal: () => void;
}

export const ListObjective = ({ objective, toggleModal }: IListObjective) => {
  const conditionBar = (idx: number) => {
    return (idx + 1) % 6 === 0 && objective.length - 1 !== idx;
  };

  return (
    <div
      onMouseOver={toggleModal}
      className="grid grid-cols-6 -mt-36 relative z-[1]"
    >
      {objective.map(({ title }, idx) => (
        <>
          <p
            className="text-center  h-14 border-r-[#3b9cbc] border-r list-objective-condition-bar flex justify-center items-center font-gotham font-light px-4"
            key={title}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {conditionBar(idx) && (
            <div className="h-[1px] w-full col-span-6 bg-[#3b9cbc] my-1">
              &nbsp;
            </div>
          )}
        </>
      ))}
    </div>
  );
};
