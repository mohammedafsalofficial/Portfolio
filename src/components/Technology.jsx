const Technology = ({ logo, skill, level }) => {
  return (
    <div className="w-[100%] flex flex-col md:flex-row items-start justify-between text-base blue-glassmorphism rounded-xl p-5 space-y-2 md:space-y-0 select-none">
      <div className="w-[80%] space-y-2">
        <h2 className="text-lg text-white font-semibold">{skill}</h2>
        <p>{level}</p>
      </div>
    </div>
  );
};

export default Technology;
