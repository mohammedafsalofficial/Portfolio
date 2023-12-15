import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGithub } from "react-icons/bi";
import { BsStackOverflow } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const Navbar = () => {
  const socials = [
    {
      id: 1,
      logo: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mohammedafsalofficial/",
    },
    {
      id: 2,
      logo: <BiLogoGithub />,
      link: "https://github.com/mohammedafsalofficial",
    },
    {
      id: 3,
      logo: <BsStackOverflow />,
      link: "https://stackoverflow.com/users/19999525/moafsal",
    },
    {
      id: 4,
      logo: <FaDiscord />,
      link: "https://www.discord.com",
    },
  ];

  return (
    <nav className="lg:min-h-screen pt-12 mb-28 md:mb-0 md:pt-24 space-y-2 md:space-y-3">
      <h1 className="text-white text-4xl md:text-5xl font-extrabold">
        <a href="https://mohammedafsal.vercel.app">Mohammed Afsal</a>
      </h1>
      <h3 className="text-white text-lg md:text-xl font-semibold">
        Experienced Front-End Developer
      </h3>
      <div>
        <p className="md:w-[70%] mt-5 text-lg">
          I build exceptional and accessible digital experiences for the web.
        </p>
        <ul className="hidden lg:flex flex-col mt-20 space-y-4 font-semibold">
          {["ABOUT", "EXPERIENCE", "PROJECTS"].map((section, index) => (
            <li key={index}>
              <a href={"#" + section.toLowerCase()} className="hover:text-white">
                {section}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex text-3xl space-x-5 lg:absolute lg:bottom-28 mt-8 lg:mt-0">
          {socials.map((social) => (
            <li key={social.id}>
              <a href={social.link}>{social.logo}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
