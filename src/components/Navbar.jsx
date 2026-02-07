import { FaBirthdayCake, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // <-- কার্ট ইমপোর্ট

const Navbar = () => {
  const { totalItems } = useCart(); // <-- রিয়েল সংখ্যা

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/30 bg-white/10 backdrop-blur-md shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse group"
        >
          <div className="bg-white/20 p-2 rounded-full border border-white/50 group-hover:scale-110 transition duration-300">
            <FaBirthdayCake className="text-2xl text-pink-600" />
          </div>
          <span className="self-center text-2xl font-bold whitespace-nowrap text-pink-700 font-cursive tracking-widest">
            Sweet Cakery
          </span>
        </Link>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-pink-800 hover:text-pink-500 font-bold transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="block py-2 px-3 text-gray-700 hover:text-pink-500 font-bold transition"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/album"
                className="block py-2 px-3 text-gray-700 hover:text-pink-500 font-bold transition"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/offer"
                className="block py-2 px-3 text-gray-700 hover:text-pink-500 font-bold transition"
              >
                Course
              </Link>
            </li>
            {/* 🚫 Admin লিংক এখান থেকে সরিয়ে দিয়েছি যাতে কাস্টমার না দেখে */}
          </ul>
        </div>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button className="glass-button relative flex items-center gap-2 text-pink-700 font-bold rounded-lg text-sm px-4 py-2 text-center">
            <FaShoppingCart className="text-lg" />
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full absolute -top-2 -right-2">
              {totalItems} {/* <-- এখন এটি রিয়েল সংখ্যা দেখাবে */}
            </span>
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
