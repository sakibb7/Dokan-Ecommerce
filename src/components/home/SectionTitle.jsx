import { HiOutlineArrowRight, HiOutlineArrowLeft } from "../../assets";

const SectionTitle = ({ titleFirstPart, titleSecondPart }) => {
  return (
    <div className="flex sm:flex-col xl:justify-between items-center gap-8">
      <h1 className="xl:text-4xl sm:text-3xl font-[600]">
        {titleFirstPart}
        <span className="text-slate-500"> {titleSecondPart}</span>
      </h1>
      <div className="flex xl:justify-center sm:justify-end items-center xl:gap-10 sm:gap-4 text-xl text-slate-500">
        <div className="border-2 border-white p-2 rounded-full hover:border-slate-200 ">
          <HiOutlineArrowLeft />
        </div>
        <div className=" border-2 border-white p-2 rounded-full hover:border-slate-200 ">
          <HiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
