import {
  CiSearch,
  sliderPic1,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "../../assets";

const HeroSlider = () => {
  return (
    <div className="bg-[#dcfce7] overflow-hidden relative z-40">
      <p className="xl:w-8 xl:h-8 sm:w-4 sm:h-4 bg-[#4ade80] absolute top-[10%] right-[20%] rounded-full"></p>
      <p className="xl:w-6 xl:h-6 sm:w-3 sm:h-3 bg-[#4ade80] absolute bottom-[10%] left-[50%] rounded-full"></p>
      <p className="xl:w-6 xl:h-6 sm:w-3 sm:h-3 bg-[#f97316] absolute bottom-[20%] left-[10%] rounded-full"></p>
      <p className="xl:w-6 xl:h-6 sm:w-3 sm:h-3 bg-[#fcd34d] absolute bottom-[20%] right-[10%] rounded-full"></p>
      <p className="xl:w-8 xl:h-8 sm:w-4 sm:h-4 bg-[#a855f7] absolute xl:top-[20%] sm:top-[40%] xl:left-[50%]  sm:right-[10%] rounded-full"></p>
      <div className="text-slate-600">
        <div className="absolute right-8 top-1/2 text-2xl border-2 border-transparent hover:border-slate-200 px-2 py-2 rounded-full ">
          <HiOutlineArrowRight />
        </div>
        <div className="absolute left-8 top-1/2 text-2xl border-2 border-transparent hover:border-slate-200 px-2 py-2 rounded-full ">
          <HiOutlineArrowLeft />
        </div>
      </div>
      <div className="xl:flexBetween sm:flex-col max-w-screen-xl mx-auto">
        <div className="xl:w-[60%] sm:w-full sm:pb-[300px] xl:py-[180px] sm:pt-[70px] px-8">
          <h2 className="xl:text-lg font-[500] text-slate-800">
            In this season, find the best 🔥
          </h2>
          <h1 className="sm:text-3xl xl:text-6xl font-[600] xl:leading-[4.5rem] sm:leading-10 xl:py-10 sm:py-6">
            Exclusive collection <br /> for everyone
          </h1>
          <button className="flexCenter bg-slate-900 hover:bg-slate-800 text-slate-50 xl:px-8 sm:px-4 sm:py-3 xl:py-5 rounded-full font-[500]">
            <span>Explore now</span>
            <span className="text-2xl pl-2">
              <CiSearch />
            </span>
          </button>
        </div>
        <div className="absolute bottom-0 right-5 xl:w-[900px] sm:w-[400px]">
          <img src={sliderPic1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
