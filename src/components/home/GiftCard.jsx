const GiftCard = ({ title, heading, image }) => {
  return (
    <div className={"flexBetween px-8 pt-10 pb-4"}>
      <div>
        <h3 className="">{title}</h3>
        <h2 className="headingFour text-gray-900 py-6 w-[90%]">{heading}</h2>
        <button className="text-sm bg-white text-gray-600 mt-2 py-3 px-5 mt-4 rounded-full drop-shadow-xl ">
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
