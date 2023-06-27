import { earnMoney, IoBagHandle } from "../../assets";

const EarnMoney = () => {
  return (
    <section className="max-w-screen-xl mx-auto flex justify-center sm:flex-col items-center py-20 px-4 w-full">
      <div className="xl:w-[40%] flexCol justify-start items-start gap-4">
        <div className="flexStart text-xl gap-2 font-[600]">
          <div className="text-4xl pb-1">
            <IoBagHandle />
          </div>
          <span className="">Dokan.</span>
        </div>
        <div className="flexCol gap-2">
          <h1 className="xl:text-6xl sm:text-3xl sm:py-4 leading-8 text-slate-800 font-[600] xl:py-8">
            Earn free money with Dokan
          </h1>
          <p className="text-gray-600">
            With Dokan you will get freeship & savings combo...
          </p>
          <div className="flexStart gap-8 pt-4">
            <button className="bg-gray-800 text-gray-50 font-[500] xl:py-4 xl:px-6 sm:py-3 sm:px-4 rounded-full hover:bg-gray-700">
              Savings combo
            </button>
            <button className="bg-gray-00 border text-gray-800 font-[500] xl:py-4 xl:px-6 sm:py-3 sm:px-4 rounded-full hover:bg-gray-100">
              Discover more
            </button>
          </div>
        </div>
      </div>
      <div className="p-20 xl:w-[60%]">
        <img src={earnMoney} alt="" />
      </div>
    </section>
  );
};

export default EarnMoney;
