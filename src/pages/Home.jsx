import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Link ইমপোর্ট করা হলো যাতে বাটন কাজ করে

const Home = () => {
  return (
    <div className="min-h-screen pt-24 px-4 flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
      {/* Left Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-pink-700 font-cursive leading-tight drop-shadow-lg">
          Taste the <br /> <span className="text-white">Magic of Love</span>
        </h1>
        <p className="text-lg text-gray-800 font-medium bg-white/30 p-4 rounded-xl backdrop-blur-sm border border-white/40 inline-block">
          স্পেশাল হোমমেড কেক। <br /> সেরা স্বাদ এবং ভালোবাসা এখন আপনার দরজায়!
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <Link to="/menu">
            <button className="glass-button text-pink-800 px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition transform">
              Order Now
            </button>
          </Link>
          <Link to="/offer">
            <button className="bg-white/40 hover:bg-white/60 text-pink-800 px-8 py-3 rounded-full font-bold text-lg transition border border-white hover:scale-105 transform">
              View Course
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Right Content (Image without Tilt) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        {/* Tilt সরিয়ে সাধারণ div ব্যবহার করা হলো, তবে এনিমেশন থাকবে */}
        <motion.div
          animate={{ y: [0, -20, 0] }} // কেকটি একটু ভাসবে (Floating Effect)
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="glass-panel p-6 rounded-full bg-gradient-to-tr from-white/40 to-transparent"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4525/4525686.png"
            alt="Delicious Cake"
            className="w-80 md:w-96 drop-shadow-2xl filter"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
