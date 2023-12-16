import logo from "./assets/logo.png";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="gradient-bg mouse-cursor-gradient-tracking bg-slate-900 text-slate-400 min-h-screen antialiased selection:bg-teal-300 selection:text-teal-900">
      <div className="radial"></div>
      <a href="https://mohammedafsal.vercel.app" className="hidden md:block absolute right-0">
        <img src={logo} alt="" className="w-40" />
      </a>
      <div className="flex flex-col lg:grid lg:grid-cols-2 mx-[5%] md:mx-[7%] xl:mx-[10%] 2xl:mx-[20%]">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default App;
