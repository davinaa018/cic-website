import logo from "../assets/logo.png";

const NavBar = () => {
  return (
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
      </div>
    </div>
  );
};

export default NavBar;
