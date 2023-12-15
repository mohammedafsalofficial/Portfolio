const Experience = ({ date, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between text-base blue-glassmorphism rounded-xl p-5 space-y-2 md:space-y-0 select-none">
      <p className="w-[100%] md:w-[17%]">{date}</p>
      <div className="w-[80%] space-y-2">
        <h2 className="text-lg text-white font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Experience;
