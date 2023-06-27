import { sectionMenu } from "../../data/menuItems";

const SortingCard = () => {
  return (
    <div className="flexBetween text-white xl:text-[17px] sm:text-sm font-[500] xl:py-10 sm:py-4 border-b">
      <div className="flex xl:justify-between sm:flex-col xl:gap-12 sm:gap-4 w-full px-4">
        <div className="flex justify-start items-center sm:gap-6 xl:gap-8">
          <button className="bg-slate-900 px-5 rounded-full py-2">
            All Items
          </button>
          <div className="flexCenter xl:gap-14 sm:gap-4">
            {sectionMenu.map(({ id, name }) => (
              <button key={id} className="text-slate-500">
                {name}
              </button>
            ))}
          </div>
        </div>
        <div className="sm:py-4">
          <button className="bg-slate-900 px-8 rounded-full py-2 sm:py-3 w-full">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortingCard;
