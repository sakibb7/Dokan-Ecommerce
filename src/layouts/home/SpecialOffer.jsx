import { IoBagHandle, boy } from "../../assets";

const SpecialOffer = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full gap-20 bg-amber-50 rounded-[40px] my-20 relative">
      <p className="w-6 h-6 bg-red-400 absolute top-[10%] right-[20%] rounded-full"></p>
      <p className="w-6 h-6 bg-[#4ade80] absolute bottom-[10%] left-[50%] rounded-full"></p>
      <p className="w-6 h-6 bg-[#f97316] absolute bottom-[20%] left-[10%] rounded-full"></p>
      <div className="">
        <img src={boy} alt="" className="h-[600px]  mt-[-60px]" />
      </div>
      <div className="w-[40%] flex flex-col gap-8 justify-start items-start">
        <div className="flex justify-start items-center text-xl gap-2 font-[600]">
          <div className="text-4xl pb-1">
            <IoBagHandle />
          </div>
          <span className="">Dokan.</span>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-[600] text-gray-800 py-4">
            Special offer in kids products
          </h1>
          <p className="text-gray-600">
            Fashion is a form of self-expression and autonomy at a particular
            period and place.
          </p>
          <div className="flex justify-start items-center gap-8 pt-4">
            <button className="bg-gray-800 text-gray-50 font-[500] py-4 px-6 rounded-full hover:bg-gray-700">
              Discover more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
