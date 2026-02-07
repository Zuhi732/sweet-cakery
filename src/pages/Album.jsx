import { motion } from "framer-motion";

const Album = () => {
  // আপনার রিয়েল কেকের ছবিগুলোর লিংক এখানে দেবেন
  const photos = [
    "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/05/17/14/06/cake-5181734_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/10/05/18/43/cupcakes-5630283_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/02/25/19/27/cupcake-4020352_1280.jpg",
  ];

  return (
    <div className="min-h-screen pt-24 pb-10 px-4 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-pink-700 font-cursive">
          Cake Gallery
        </h2>
        <p className="text-gray-600 mt-2">
          Real photos of our homemade happiness
        </p>
      </div>

      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="break-inside-avoid"
          >
            <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-pink-100">
              <img
                src={src}
                alt="Cake"
                className="w-full h-auto transform transition duration-500 group-hover:scale-110"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg border border-white px-4 py-1 rounded-full">
                  Sweet Cakery Special
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Album;
