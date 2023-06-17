const GiftCard = ({ title, headingFirst, headingSecond, image }) => {
  return (
    <div className={`flex justify-between items-center p-8`}>
      <div>
        <h3 className="">{title}</h3>
        <h2 className="text-2xl font-[600] text-gray-900 py-4">
          {headingFirst} <br /> {headingSecond}
        </h2>
        <button className="text-sm bg-white text-gray-600 mt-2 py-2 px-5 rounded-full drop-shadow-xl">
          Show me all
        </button>
      </div>
      <div className="w-[45%] p-4">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default GiftCard;
