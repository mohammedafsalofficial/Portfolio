import { HiArrowUpRight } from "react-icons/hi2";

const Project = ({ link, img, title, description }) => {
  return (
    <a
      href={link}
      className="flex flex-col-reverse md:flex-row items-start justify-between text-base blue-glassmorphism rounded-xl p-5 space-y-2 md:space-y-0 select-none cursor-pointer"
    >
      <img src={img} alt="project-img" className="w-[45%] sm:w-[30%] md:w-[20%] mt-3" />
      <div className="md:w-[75%] space-y-2">
        <div className="flex">
          <h2 className="text-lg text-white font-semibold">{title}</h2>
          <HiArrowUpRight className="m-2 text-white" />
        </div>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Project;
