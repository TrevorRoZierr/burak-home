import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <div className="flex w-full justify-center items-center sm:p-5 p-3 bg-gradient-to-r from-[#71B6CF] to-cyan-900 border-b-4">
        <img
          id="nav"
          src="/logo.png"
          alt="Logo"
          className="sm:ml-5 ml-1 sm:w-[450px] sm:h-[450px] w-[150px] h-[150px] rounded-full"
        />
        {/* <h1 className="text-center text-8xl text-black p-32">(LOGO HERE)</h1> */}
      </div>
      <div className="sm:w-full sm:h-full flex justify-center items-center">
        <img src="/bg.jpg" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Navbar;
