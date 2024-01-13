import Link from "next/link";
import { IoIosMail } from "react-icons/io";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-row justify-center items-center border-t-4 sm:mt-16 mt-8 sm:p-6 p-4 bg-gradient-to-r from-green-500 to-green-900">
      <div className="border-r-2 sm:p-10 p-3">
        <h1 className="sm:text-lg text-xs sm:font-semibold font-semibold sm:p-2 p-1 cursor-none">
        ✉
          <span className="underline ml-1">: info@buraksolutions.com</span>
        </h1>
        <h1 className="sm:text-lg text-xs sm:font-semibold font-semibold sm:p-2 p-1 cursor-none">
        ☎
          <span className="underline ml-1">: +91 - 8605530330</span>
        </h1>
        <h1 className="sm:text-[10px] text-center text-[5px] sm:font-bold font-semibold sm:p-2 p-1 cursor-none">
        Copyright © 2024 All Rights Reserved. Developer:
          <span className="underline sm:text-md sm:font-bold uppercase sm:ml-1 ml-[2px]">Sayyed Saad</span>
        </h1>
      </div>
      <div className="sm:p-10 p-3">
        <Link
          href="#nav"
          className="sm:text-2xl text-xs sm:font-semibold font-medium duration-300 sm:hover:font-bold hover:font-bold hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-700 sm:px-3 px-2 sm:py-1 py-1 rounded border-2 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]"
        >
          ↑ Go Up ↑
        </Link>
      </div>
    </div>
  );
};

export default Footer;
