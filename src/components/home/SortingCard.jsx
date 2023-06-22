import { sectionMenu } from "../../data/menuItems";

const SortingCard = () => {
  return (
    <div className="flex justify-between items-center text-white text-[17px] font-[500] py-10 border-b">
      <div className="flex justiy-center items-center gap-12">
        <button className="bg-slate-900 px-5 rounded-full py-2">
          All Items
        </button>
        <div className="flex justify-center items-center gap-14">
          {sectionMenu.map(({ id, name }) => (
            <button key={id} className="text-slate-500">
              {name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <button className="bg-slate-900 px-8 rounded-full py-2">Filter</button>
      </div>
    </div>
  );
};

export default SortingCard;
