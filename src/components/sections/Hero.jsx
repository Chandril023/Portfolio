import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";
import Icons from "./icons.jsx";

function Hero() {
  return (
    <>
    <section
    id="hero"
    className="flex flex-row justify-left items-left my-20 mx-5 lg:mx-0 ">

    <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-6 overflow-hidden">
      {/* Tooltip & Image */}
      <div className="flex-shrink-0">
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle">
          <img
            src={user_info.main.photo}
            className="rounded-full mb-6 lg:hidden"
            alt="Picture"
          />
          {/* Tooltip Text */}
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm"
            role="tooltip"
          >
            Hello! 👋 How are you doing? 🤔
          </span>
        </div>
      </div>
  
      {/* Content Section */}
      <div className="flex flex-col md:flex-row flex-1 gap-6">
        {/* Left Text Content */}
        <div className="flex-1 text-zinc-900 dark:text-zinc-100">
          <h2 className="text-xl">{user_info.main.role}</h2>
          <h1 className="font-black mt-3 text-5xl">
            {user_info.main.name}
          </h1>
          <p className="mt-6 dark:text-zinc-300 text-base font-light leading-7">
            {user_info.main.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
  <a
    href="#projects"
    className="px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
  >
    Projects
  </a>
  <a
    href="#education-and-experience"
    className="px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
  >
    Experience
  </a>
  <a
    href="#contact"
    className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4 w-full md:w-auto"
  >
    <span className="self-center font-medium">Contact</span>
    <IoIosArrowForward className="self-center" />
  </a>
  
</div>
<Icons/>
        </div>
    
        {/* Right Image Content */}
        <div className="hidden lg:block max-w-[480px] flex-shrink-0">
          <img
            className="rounded-[10%] transform rotate-3 max-w-full"
            src={user_info.main.photo}
            alt=" Graduation Picture"
          />
        </div>
      </div>
    </div>
    
  </section>
  
        </>
  );
}

export default Hero;
