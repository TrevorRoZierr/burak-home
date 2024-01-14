import Link from "next/link";

const GoUp = () => {
  return <div className="flex justify-center items-center float-right mr-10 sm:mr-12 p-0 sm:mb-5"><Link href="#nav" className="text-2xl sm:text-4xl text-black bg-white font-bold border-2 p-1 sm:p-2 rounded">↑</Link></div>;
};

export default GoUp;
