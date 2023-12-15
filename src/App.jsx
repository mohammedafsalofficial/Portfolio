import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-slate-900 text-slate-400 min-h-screen antialiased selection:bg-teal-300 selection:text-teal-900">
      <div className="flex flex-col md:grid md:grid-cols-2 mx-[5%] md:mx-[7%] xl:mx-[10%] 2xl:mx-[20%]">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default App;
