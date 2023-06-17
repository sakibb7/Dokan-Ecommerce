const StepCard = ({ image, title, desc, step }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <img src={image} alt="" className="h-32" />
      <p className="bg-sky-100 py-1 px-2 rounded-full text-xs text-sky-600 font-[600]">
        {step}
      </p>
      <h2 className="font-[600] text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500 text-center">{desc}</p>
    </div>
  );
};

export default StepCard;
