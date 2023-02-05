import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import AttendanceModal from "./AttendanceModal";

interface Props {
  showLink: boolean;
}

const NavBar: React.FC<Props> = ({ showLink }) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [localShowLink, setLocalShowLink] = useState<boolean>(false);

  useEffect(() => {
    setLocalShowLink(showLink);
  }, [showLink]);

  const handleClick = () => {
    setToggleMenu((prev) => !prev);
  };

  const handleModal = () => {
    setToggleModal((prev) => !prev);
  };

  return (
    <div>
      <div className="flex items-center justify-between p-5">
        {/* Left container */}
        <div className="flex items-center gap-2 md:gap-4">
          <img src={logo} alt="logo" className="w-10 md:w-16" />
          <h1 className="font-bold text-base md:text-xl">
            Coding Interview Club
          </h1>
        </div>

        {/* Right container */}
        <div className="hidden md:flex gap-8 mr-20">
          <a href="/" className="font-semibold">
            Home
          </a>
          <a href="/news" className="font-semibold">
            News
          </a>
          <a href="/about" className="font-semibold">
            About Us
          </a>
          {localShowLink && (
            <a href="#" className="font-semibold" onClick={handleModal}>
              Attendance
            </a>
          )}
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden space-y-2" onClick={handleClick}>
          <span className="block w-8 h-0.5 bg-black"></span>
          <span className="block w-8 h-0.5 bg-black"></span>
          <span className="block w-8 h-0.5 bg-black"></span>
        </div>
      </div>
      {toggleMenu && <MobileMenu localShowLink={localShowLink} />}
      {toggleModal && <AttendanceModal />}
    </div>
  );
};

const MobileMenu = ({ localShowLink }: any) => {
  return (
    <div className="md:hidden h-full w-full bg-black text-white p-10">
      <div className="flex flex-col items-center justify-center text-center gap-8 font-bold text-base">
        <a href="#">Home</a>
        <a href="#">News</a>
        <a href="#">About Us</a>
        {localShowLink && (
          <a href="#" className="font-semibold">
            Attendance
          </a>
        )}
      </div>
    </div>
  );
};

export default NavBar;
