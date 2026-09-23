import { Link } from "react-router-dom";
import LOGO from "../assets/logo.png";
import { Search } from "lucide-react";
const Navbar = () => {
  return (
    <div className="py-2 border-b-2 border-b-amber-950 bg-linear-to-b from-[#ee1f04] to-[#690303]">
      <div className="w-3/5 mx-auto flex flex-col items-center justify-between pb-1">
        <div className="flex flex-col items-start justify-center ">
          <img className="w-24" src={LOGO} alt="MAYDA" />
          {/* <h3 className="text-xs text-gray-300 ">Original & Bosnian Cusine</h3> */}
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row space-x-8 text-white">
            <Link
              to="/"
              className="relative inline-block text-lg after:absolute after:left-0 after:bottom-0 after:rounded-full after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="relative inline-block text-lg after:absolute after:left-0 after:bottom-0 after:rounded-full after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Menu
            </Link>
            <Link
              to="/service"
              className="relative inline-block text-lg after:absolute after:left-0 after:bottom-0 after:rounded-full after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Service
            </Link>
            <Link
              to="/about"
              className="relative inline-block text-lg after:absolute after:left-0 after:bottom-0 after:rounded-full after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="relative inline-block text-lg after:absolute after:left-0 after:bottom-0 after:rounded-full after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Contact
            </Link>
          </div>
          <div className="relative ">
            <input
              type="search"
              className="bg-white/20 w-full rounded-full py-1 pl-9 pr-3 placeholder:text-gray-300"
              placeholder="Search dishes & drinks"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
          </div>
        </div>
      </div>
      <div className="w-3/5 m-auto pt-2 border-t border-white/20 flex flex-row items-center">
        <div className="w-full flex flex-row items-center justify-center">
          <h3 className="text-xl uppercase text-gray-300 ">
            Original & Bosnian Cusine
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
