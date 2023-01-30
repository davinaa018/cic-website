import logo from "../assets/logo-nobg.png";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black w-full h-full p-4">
      {/* Top Container */}
      <div className="flex items-center justify-around">
        {/* Left Container */}
        <div className="flex flex-col items-center gap-2 mr-8 md:mr-0">
          <img src={logo} alt="logo" className="w-10 md:w-16" />
          <h1 className="text-white text-center font-semibold text-sm md:text-lg">
            Coding Interview{" "}
          </h1>
        </div>

        {/* Middle Container */}
        <div className="text-white flex flex-col pt-4 mr-8 md:mr-0">
          <h1 className="font-bold text-sm md:text-lg">Links</h1>
          <div className="flex flex-col ml-2 md:ml-4 gap-1">
            <a href="/" className="text-xs md:text-sm">
              Home
            </a>
            <a href="/news" className="text-xs md:text-sm">
              News
            </a>
            <a href="/about" className="text-xs md:text-sm">
              About Us
            </a>
            {/* Temporary */}
            <a href="#" className="text-xs md:text-sm">
              Attendance
            </a>
          </div>
        </div>

        {/* Right Container */}
        <div className="text-white pr-5 mt-20 md:mt-4">
          <h1 className="font-bold text-sm md:text-lg">Resources</h1>
          <div className="flex flex-col md:grid md:grid-cols-2 ml-2 md:ml-4 md:gap-x-4 md:gap-y-1">
            <a href="https://www.levels.fyi" className="text-xs md:text-sm">
              Levels.fyi
            </a>
            <a href="#" className="text-xs md:text-sm">
              CIC Problems
            </a>
            <a
              href="https://github.com/pittcsc/Summer2023-Internships"
              className="text-xs md:text-sm"
            >
              Intership List
            </a>
            <a href="https://codesignal.com/" className="text-xs md:text-sm">
              CodeSignal
            </a>
            <a href="https://leetcode.com/" className="text-xs md:text-sm">
              Leetcode
            </a>
            <a
              href="https://www.hackerrank.com/"
              className="text-xs md:text-sm"
            >
              Hackerrank
            </a>
            <a href="https://codingbat.com/java" className="text-xs md:text-sm">
              CodingBat
            </a>
          </div>
        </div>
      </div>

      <hr className="w-11/12 ml-3 md:ml-14 mt-10" />

      {/* Socials */}
      <div className="text-white flex mt-10 md:mt-20 gap-6 items-center justify-center  md:mr-24">
        <div className="border rounded-full p-1 md:p-2 ">
          <a href="https://www.instagram.com/codinginterviewclub/?hl=en">
            <AiFillInstagram className="w-7 h-7 md:w-8 md:h-8" />
          </a>
        </div>
        <div className="border rounded-full p-1 md:p-2  ">
          <a href="https://www.linkedin.com/groups/13876330/">
            <AiFillLinkedin className="w-7 h-7 md:w-8 md:h-8" />
          </a>
        </div>
        <div className="border rounded-full p-1 md:p-2  ">
          <a href="https://discord.com/invite/KGQDtdmPak">
            <FaDiscord className="w-7 h-7 md:w-8 md:h-8" />
          </a>
        </div>
      </div>

      <div className="text-white text-center text-xs md:text-base md:mr-24 mt-5">
        <p>&copy; 2023 Coding Interview Club</p>
      </div>
    </div>
  );
};

export default Footer;
