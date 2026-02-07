import { motion } from "framer-motion";
import { Tilt } from "react-tilt"; // 3D এফেক্ট

const Home = () => {
  // 3D Animation Settings
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

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
          স্পেশাল হোমমেড কেক। <br /> সেরা স্বাদ এবং ভালোবাসা এখন আপনার দরজায়!
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <button className="glass-button text-pink-800 px-8 py-3 rounded-full font-bold text-lg">
            Order Now
          </button>
          <button className="bg-white/40 hover:bg-white/60 text-pink-800 px-8 py-3 rounded-full font-bold text-lg transition border border-white">
            View Course
          </button>
        </div>
      </motion.div>

      {/* Right Content (3D Cake Image) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <Tilt options={defaultOptions} className="card-3d">
          <div className="glass-panel p-6 rounded-full bg-gradient-to-tr from-white/40 to-transparent">
            {/* আপাতত ডামি ইমেজ, পরে আপনার ইমেজ বসাবো */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/4525/4525686.png"
              alt="Delicious Cake"
              className="w-80 md:w-96 drop-shadow-2xl filter"
            />
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default Home;
