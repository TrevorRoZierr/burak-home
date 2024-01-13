import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex bg-white justify-between items-center sm:p-5 p-3" style={{borderBottom: "3px solid darkgreen"}}>
      <img id="nav" src="/logo.png" alt="Logo" className="sm:ml-5 ml-1 sm:w-[250px] sm:h-[250px] w-[150px] h-[150px]" />
      <nav className="sm:mr-16 mr-1">
        <Link href="/" className="sm:mr-10 mr-3 sm:text-lg text-sm sm:font-medium hover:text-green-700 hover:underline duration-300">
          Home
        </Link>
        <Link
          href="/contact"
          className="sm:px-6 px-2 sm:py-3 py-1 bg-green-700 rounded border-2 sm:text-xl text-md sm:font-semibold font-medium duration-300 hover:underline text-white hover:bg-white hover:text-green-700"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
