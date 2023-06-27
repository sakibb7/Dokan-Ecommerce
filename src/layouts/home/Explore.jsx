import { sectionMenu } from "../../data/menuItems";
import ExploreProductsCard from "../../components/home/ExploreProductsCard";

const Explore = () => {
  console.log(sectionMenu.icon);
  return (
    <div className="max-w-screen-xl mx-auto bg-slate-50 rounded-[40px] pt-16">
      <h1 className="text-center xl:text-4xl sm:text-3xl font-[600] text-slate-800">
        Start exploring.
      </h1>
      <div>
        <ul className="flexCenter xl:gap-20 sm:gap-6 text-gray-600 font-[500] text-sm mt-10 bg-white px-10 py-4 rounded-full drop-shadow-xl xl:mx-40 sm:mx-8">
          {sectionMenu.map(({ id, name }) => (
            <li key={id} className="cursor-pointer hover:text-slate-800">
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid xl:grid-cols-3 gap-8 py-20 px-14">
        <ExploreProductsCard />
        <ExploreProductsCard />
        <ExploreProductsCard />
        <ExploreProductsCard />
        <ExploreProductsCard />
        <ExploreProductsCard />
      </div>
    </div>
  );
};

export default Explore;
