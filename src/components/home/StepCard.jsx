const StepCard = ({ image, title, desc, step, bgColor, color }) => {
  const style = {
    backgroundColor: bgColor,
    color: color,
  };
  return (
    <div className="flexCol justify-center items-center gap-6">
      <img src={image} alt="" className="h-32" />
      <p className={`py-1 px-2 rounded-full text-xs font-[600]`} style={style}>
        {step}
      </p>
      <h2 className="headingSix text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500 text-center">{desc}</p>
    </div>
  );
};

export default StepCard;
