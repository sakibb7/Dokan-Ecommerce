import { HiOutlineArrowRight, HiOutlineArrowLeft } from "../../assets";

const SectionTitle = ({ titleFirstPart, titleSecondPart }) => {
  return (
    <div className=" flex justify-between items-center">
      <h1 className="text-4xl font-[600]">
        {titleFirstPart}
        <span className="text-slate-500"> {titleSecondPart}</span>
      </h1>
      <div className=" flex justify-center items-center gap-10 text-xl text-slate-500">
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
