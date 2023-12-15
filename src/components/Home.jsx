import About from "./About";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Technologies from "./Technologies";

const Home = () => {
  return (
    <div className="h-fit lg:h-screen scrollbar md:pt-24 md:pb-28 mb-16 md:mb-0 space-y-20 md:space-y-28">
      <About />
      <Experiences />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
