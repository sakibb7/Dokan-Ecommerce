import { IoBagHandle, boy } from "../../assets";

const SpecialOffer = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full">
      <div className="flex sm:flex-col xl:gap-20 sm:gap-12 bg-amber-50 xl:rounded-[40px] sm:rounded-[20px] my-20 relative sm:mx-4">
        <p className="w-6 h-6 bg-red-400 absolute top-[10%] right-[20%] rounded-full"></p>
        <p className="w-6 h-6 bg-[#4ade80] absolute bottom-[10%] left-[50%] sm:bottom-[70%] sm:left-[10%] rounded-full"></p>
        <p className="w-6 h-6 bg-[#f97316] absolute bottom-[20%] left-[10%] sm:bottom-[50%] sm:left-[70%] rounded-full"></p>
        <div className="">
          <img
            src={boy}
            alt=""
            className="h-[600px] sm:h-[350px] mt-[-60px] sm:mt-[-40px] sm:pl-6"
          />
        </div>
        <div className="xl:w-[40%] sm:w-full flexCol gap-4 justify-center items-start sm:px-4 sm:pb-12">
          <div className="flexStart text-xl gap-2 font-[600]">
            <div className="text-4xl pb-1">
              <IoBagHandle />
            </div>
            <span className="">Dokan.</span>
          </div>
          <div className="flexCol gap-4">
            <h1 className="xl:text-5xl sm:text-3xl font-[600] text-slate-800 text-gray-800 py-4">
              Special offer in kids products
            </h1>
            <p className="text-gray-600">
              Fashion is a form of self-expression and autonomy at a particular
              period and place.
            </p>
            <div className="flexStart gap-8 pt-4">
              <button className="bg-gray-800 text-gray-50 font-[500] xl:py-4 sm:py-3 xl:px-6 sm:px-4 rounded-full hover:bg-gray-700">
                Discover more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
