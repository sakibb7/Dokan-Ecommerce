const GiftCard = ({ title, headingFirst, headingSecond, image }) => {
  return (
    <div className="flex justify-center items-center bg-black rounded-[15px] bg-violet-100">
      <div>
        <h3 className="">{title}</h3>
        <h2 className="text-2xl font-[600] text-gray-900 py-4">
          {headingFirst} <br /> {headingSecond}
        </h2>
        <button className="bg-white text-gray-600 py-3 px-6 rounded-full drop-shadow-xl">
          Show me all
        </button>
      </div>
      <div className="w-1/2 p-12">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default GiftCard;
