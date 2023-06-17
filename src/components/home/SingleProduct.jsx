import {
  AiOutlineHeart,
  AiFillStar,
  HiOutlineReceiptPercent,
  BsBagCheckFill,
  MdZoomOutMap,
} from "../../assets";

const SingleProduct = ({ image, title, shortDesc, price, rating, reviews }) => {
  return (
    <div className=" relative m-2 cursor-pointer">
      <div className="group relative bg-gray-100 rounded-[20px] py-4">
        <img src={image} alt="" />
        <p className="absolute top-3 left-3 bg-white px-2 py-1 text-[13px] text-slate-700 rounded-full flex justify-center items-center gap-1">
          <HiOutlineReceiptPercent />
          <span>50% discount</span>
        </p>
        <p className="absolute top-3 right-3 bg-white p-2 text-lg text-slate-700 rounded-full">
          <AiOutlineHeart />
        </p>
        <div className="hidden group-hover:block absolute bottom-4  right-5">
          <div className="flex justify-center items-center gap-6">
            <button className="bg-black text-white text-xs px-3 py-2 rounded-full flex justify-center items-center gap-2">
              <BsBagCheckFill />
              <span className="">Add to bag</span>
            </button>
            <button className="bg-white text-xs px-3 py-2 rounded-full flex justify-center items-center gap-2">
              <MdZoomOutMap />
              <span className="">Quick view</span>
            </button>
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="flex justify-start items-center gap-3 ">
          <p className="w-5 h-5 rounded-full bg-orange-400 border-1 border-white p-1 hover:border-orange-400"></p>
          <p className="w-5 h-5 rounded-full bg-cyan-400"></p>
          <p className="w-5 h-5 rounded-full bg-green-400"></p>
          <p className="w-5 h-5 rounded-full bg-amber-400"></p>
          <p className="w-5 h-5 rounded-full bg-indigo-400"></p>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <p className="font-[600] text-gray-900 text-[17px]">{title}</p>
          <p className="text-gray-500 text-[14px]">{shortDesc}</p>
          <div className="flex justify-between items-center text-sm pt-2">
            <p className="text-emerald-500 border-2 border-emerald-500 px-2 py-[2px] rounded-lg  font-[500]">
              ${price}
            </p>
            <p className="flex justify-center items-center text-slate-500 gap-1">
              <span className="text-amber-400 text-xl">
                <AiFillStar />
              </span>
              <span className="pt-[2px]">
                {" "}
                {rating} ({reviews})
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
