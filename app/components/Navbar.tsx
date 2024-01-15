import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <div className="flex w-full sm:p-5 p-3 bg-gradient-to-r from-[#71B6CF] to-cyan-900 border-b-4">
        <h1 className={styles.logo}>Burak Solutions</h1>
      </div>
      <div className="sm:w-full sm:h-full flex justify-center items-center">
        <img src="/bg.jpg" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Navbar;
