import {
  CiSearch,
  sliderPic1,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "../../assets";

const HeroSlider = () => {
  return (
    <div className="bg-[#dcfce7] overflow-hidden relative z-40">
      <p className="w-8 h-8 bg-[#4ade80] absolute top-[10%] right-[20%] rounded-full"></p>
      <p className="w-6 h-6 bg-[#4ade80] absolute bottom-[10%] left-[50%] rounded-full"></p>
      <p className="w-6 h-6 bg-[#f97316] absolute bottom-[20%] left-[10%] rounded-full"></p>
      <p className="w-6 h-6 bg-[#fcd34d] absolute bottom-[20%] right-[10%] rounded-full"></p>
      <p className="w-8 h-8 bg-[#a855f7] absolute top-[20%] left-[50%] rounded-full"></p>
      <div className="text-slate-600">
        <div className="absolute right-8 top-1/2 text-2xl border-2 border-transparent hover:border-slate-200 px-2 py-2 rounded-full ">
          <HiOutlineArrowRight />
        </div>
        <div className="absolute left-8 top-1/2 text-2xl border-2 border-transparent hover:border-slate-200 px-2 py-2 rounded-full ">
          <HiOutlineArrowLeft />
        </div>
      </div>
      <div className="flexBetween max-w-screen-xl mx-auto">
        <div className="w-[60%] py-[180px]">
          <h2 className="text-lg font-[500] text-slate-800">
            In this season, find the best 🔥
          </h2>
          <h1 className="headingOne">
            Exclusive collection <br /> for everyone
          </h1>
          <button className="flexCenter bg-slate-900 hover:bg-slate-800 text-slate-50 px-8 py-5 rounded-full font-[500]">
            <span>Explore now</span>
            <span className="text-2xl pl-2">
              <CiSearch />
            </span>
          </button>
        </div>
        <div className="absolute top-10 right-40 w-[900px]">
          <img src={sliderPic1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
