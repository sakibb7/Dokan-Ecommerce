import { HiOutlineArrowRight, HiOutlineArrowLeft } from "../../assets";

const SectionTitle = ({ titleFirstPart, titleSecondPart }) => {
  return (
    <div className="flexBetween">
      <h1 className="headingThree">
        {titleFirstPart}
        <span className="text-slate-500"> {titleSecondPart}</span>
      </h1>
      <div className="flexCenter gap-10 text-xl text-slate-500">
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
